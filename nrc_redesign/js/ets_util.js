function AjaxDataSets(calls, doneFunction) {  //{String datasetName:String call}() -     
    this.calls = calls;
    this.doneFunction = doneFunction;
    this.tables = {};
    this.test = "test";

    this.callsDone = function () {
        for (var dataName in calls) {            
            if (!this.tables[dataName]) { 
                return false;
            }
        }
        return true;
    }

    this.makeCalls = function () {
        for (var dataName in calls) {          
        //    $.ajax({
        //         context: { object: this, dataName: dataName },
        //         url: calls[dataName],  //expectin array of season row data
        //         datatype: 'json',
        //         cache: false,
        //         method: 'POST'
        //     }).done(function (dataString) {
        //         var data = JSON.parse(dataString);
        //         this.object.tables[this.dataName] = data;
        //         if (this.object.callsDone()) {
        //             this.object.doneFunction();
        //         }
        //     }).error(function(obj, status, err){
        //         alert(err);
        //     });

            var instance = this;
            this.makeCall(dataName);
            // d3.json(calls[dataName], function(error, data){                 
            //     instance.tables[dataName] = data;
            //     if (instance.callsDone()) {
            //         instance.doneFunction();
            //     }
            // }); 
        }
    }

    this.makeCall = function(dataName){  //function here to get dataName by value
        var instance = this;
        d3.json(calls[dataName], function(error, data){ 
            if (error == null){
                instance.tables[dataName] = data;
            }else{
                instance.tables[dataName] = [];
            }                                       
            
            if (instance.callsDone()) {                
                instance.doneFunction();
            }
        });
    }

    this.getValue = function (tableName, propertyNameToCheck, valueToCheck, propertyNameToReturn) {
        var table = this.tables[tableName];
        for (var i = 0; i < table.length; i++) {
            if (table[i][propertyNameToCheck] == valueToCheck) return table[i][propertyNameToReturn];
        }
    }

    this.hasValue = function (tableName, propertyNameToCheck, valueToCheck) {
        var table = this.tables[tableName];
        for (var i = 0; i < table.length; i++) {
            if (table[i][propertyNameToCheck] == valueToCheck) return true;
        }
        return false;
    }

    this.hasValueByIndex = function (tableName, indexToCheck, valueToCheck) {
        var table = this.tables[tableName];
        for (var i = 0; i < table.length; i++) {
            if (table[i][propertyNameToCheck] == valueToCheck) return true;
        }
        return false;
    }
}

 function QueryString() {
    
     this.array = [];
    

     this.parse = function (queryString) {
         this.queryString = queryString;
         var parts = this.queryString.split("&");
         for (var i = 0; i < parts.length; i++) {
             var subParts = parts[i].split("=");
             if (subParts[0]) {
                 this.array[this.array.length] = { key: subParts[0], value: subParts[1] }
             }
         }
     }

     this.setValuesBySelectors = function(inputSelectors){  //inputs should have names
         for (var i = 0; i < inputSelectors.length; i++) {
             var $input = $(inputSelectors[i]);            
             this.array[this.array.length] = { key: $input.attr("name"), value: $input.val() };
         }
     }

    this.setValue = function (key, val) {
         this.array[this.array.length] = {key:key, value:val}
     }

     this.removeKey = function (key) {                
         var newArray = [];         
         for (var i = 0; i < this.array.length; i++) {            
             if (this.array[i].key.trim() != key.trim()) {                
                 newArray[newArray.length] = this.array[i];
             }
         }        
         this.array = newArray;        
     }

     this.toQueryString = function () {  //Does not start with an ampersand
         var ret = "";
         for (var i = 0; i < this.array.length; i++) {
             var and = "";
             if (i != 0) and = "&";            
             ret = ret + and + this.array[i].key + "=" + this.array[i].value;
         }
         return ret;
     }

     this.getValueByKey = function (key) {
         for (var i = 0; i < this.array.length; i++) {
             if (this.array[i].key.trim() == key.trim())
                return this.array[i].value;
         }
     }

     this.canSearch = function () {
         var hasYear = false;
         var hasTable = false;
         var hasSubject = false;        
         for (var i = 0; i < this.array.length; i++) {
             if (this.array[i].key == "Year") hasYear = true;
             if (this.array[i].key == "Table") hasTable = true;
             if (this.array[i].key == "Subject") hasSubject = true;
         }        
         if (hasYear && hasTable) return true;
         if (hasTable && hasSubject) return true;
         if (hasYear && hasSubject) return true;
        return false;
    }
 }

function DecorateAssociativeArray(array){
    array.getValueByKey = function(returnKey, searchKey, searchValue){
        for(var i = 0; i < this.length; i++){
            if(this[i][searchKey] == searchValue){
                return this[i][returnKey];
            }
        }
    }

    array.getHighestValue = function(searchKey){
        var ret = -1;
        for(var i = 0; i < this.length; i++){
            if(this[i][searchKey] > ret){
                ret = this[i][searchKey];
            }
        }
        return ret;
    }

    array.getLowestValue = function(searchKey){
        var ret = -1;
        for(var i = 0; i < this.length; i++){
            if(this[i][searchKey] < ret){
                ret = this[i][searchKey];
            }
        }
        return ret;
    }
}

if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function(searchElement, fromIndex) {

    var k;

    // 1. Let o be the result of calling ToObject passing
    //    the this value as the argument.
    if (this == null) {
      throw new TypeError('"this" is null or not defined');
    }

    var o = Object(this);

    // 2. Let lenValue be the result of calling the Get
    //    internal method of o with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = o.length >>> 0;

    // 4. If len is 0, return -1.
    if (len === 0) {
      return -1;
    }

    // 5. If argument fromIndex was passed let n be
    //    ToInteger(fromIndex); else let n be 0.
    var n = fromIndex | 0;

    // 6. If n >= len, return -1.
    if (n >= len) {
      return -1;
    }

    // 7. If n >= 0, then Let k be n.
    // 8. Else, n<0, Let k be len - abs(n).
    //    If k is less than 0, then let k be 0.
    k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

    // 9. Repeat, while k < len
    while (k < len) {
      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the
      //    HasProperty internal method of o with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      //    i.  Let elementK be the result of calling the Get
      //        internal method of o with the argument ToString(k).
      //   ii.  Let same be the result of applying the
      //        Strict Equality Comparison Algorithm to
      //        searchElement and elementK.
      //  iii.  If same is true, return k.
      if (k in o && o[k] === searchElement) {
        return k;
      }
      k++;
    }
    return -1;
  };
}