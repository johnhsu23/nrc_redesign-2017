function AjaxDataSets(calls, doneFunction) {  //{String datasetName:String call}() - 
    this.calls = calls;
    this.doneFunction = doneFunction;
    this.tables = {};

    this.callsDone = function () {
        for (var dataName in calls) {
            if (!this.tables[dataName]) return false;
        }
        return true;
    }

    this.makeCalls = function () {
        for (var dataName in calls) {
           $.ajax({
                context: { object: this, dataName: dataName },
                url: calls[dataName],  //expectin array of season row data
                datatype: 'json',
                cache: false,
                method: 'POST'
            }).done(function (dataString) {
                var data = JSON.parse(dataString);
                this.object.tables[this.dataName] = data;
                if (this.object.callsDone()) {
                    this.object.doneFunction();
                }
            });
        }
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