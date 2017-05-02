function AttributeCollection(serializedAttributes){
    this.attributes = [];
    

    for(var i = 0; i < serializedAttributes.length; i++){
        var attribute = new Attribute(serializedAttributes[i].id, serializedAttributes[i].label);
        this.attributes[this.attributes.length] = attribute;
        for(var j = 0; j < serializedAttributes[i].values.length; j++){
            var attributeValue = new AttributeValue(serializedAttributes[i].values[j].id, serializedAttributes[i].values[j].label);
            attribute.attributeValues[attribute.attributeValues.length] = attributeValue;
        }
    }

    this.getHtmlOptionsIncluding = function(includedAttributeValues, excludedAttributeValues){
        var html = "<option value=''>Choose</option>";
        for(var i = 0; i < this.attributes.length; i++){
            var attribute = this.attributes[i];
            if(attribute.isInArray(includedAttributeValues)){
                html += "<optgroup label = '" + this.attributes[i].label + "'>";   
                for(var j = 0; j < this.attributes[i].attributeValues.length; j++){
                    var attributeValue = this.attributes[i].attributeValues[j];
                    if(!attributeValue.isInArray(excludedAttributeValues)){
                        html += "<option value = '" + attributeValue.id + "'>" + attributeValue.label + "</option>"
                    }
                }
            }
        }
        return html;
    }

    this.getHtmlOptionsExcluding = function(unincludedAttributeValues){
        var html = "<option value=''>Choose</option>";
        for(var i = 0; i < this.attributes.length; i++){
            var attribute = this.attributes[i];
            if(!attribute.isInArray(unincludedAttributeValues)){
                html += "<optgroup label = '" + this.attributes[i].label + "'>";   
                for(var j = 0; j < this.attributes[i].attributeValues.length; j++){
                    var attributeValue = this.attributes[i].attributeValues[j];
                    if(!attributeValue.isInArray(unincludedAttributeValues)){
                        html += "<option value = '" + attributeValue.id + "'>" + attributeValue.label + "</option>"
                    }
                }
            }
        }
        return html;
    }

    this.getAllHtmlOptions = function(){
        var html = "";
        for(var i = 0; i < serializedAttributes.length; i++){
            html += "<optgroup label = '" + serializedAttributes[i].label + "'>";   
            for(var j = 0; j < serializedAttributes[i].values.length; j++){
                html += "<option value = '" + serializedAttributes[i].values[j].id + "'>" + serializedAttributes[i].values[j].label + "</option>"
                var attributeValue = new AttributeValue(serializedAttributes[i].values[j].id, serializedAttributes[i].values[j].label);
                attribute.attributeValues[attribute.attributeValues.length] = attributeValue;
            }
        }
        return html;
    }

    this.getAttributeIdByAttributeValueId = function(attributeValueId){
        for(var i = 0; i < this.attributes.length; i++){
            var attribute = this.attributes[i];            
            for(var j = 0; j < attribute.attributeValues.length; j++){
                var attributeValue = attribute.attributeValues[j];                
                if(attributeValue.id == attributeValueId){
                    return attribute.id;
                }
            }
        }
        return null;
    }

    this.getAttributeValueByAttributeValueId = function(attributeValueId){
        for(var i = 0; i < this.attributes.length; i++){
            var attribute = this.attributes[i];            
            for(var j = 0; j < attribute.attributeValues.length; j++){
                var attributeValue = attribute.attributeValues[j];                
                if(attributeValue.id == attributeValueId){
                    return attributeValue;
                }
            }
        }
        return null;
    }

    this.getAttributeValues = function(attirbuteId){

    }

    this.getClone = function(){
        return jQuery.extend(true, {}, this)
    }
}

function Attribute(id, label){
    this.id = id;
    this.label = label;
    this.selectedValueIndex = -1;
    this.attributeValues = [];
    this.collection = new AttributeCollection();

    this.isInArray = function(array){
        if(!array) return;
        for(var i = 0; i < array.length; i++){
            if(this.id == array[i]) return true;
        }
        return false;
    }

    this.isValueSet = function(){
        if(this.selectedValueIndex == -1) return false;
        return true;
    }

    this.setValueById = function(id){
        for(var i = 0; i < attributeValues.length; i++){
            if(attributeValues[i].id == id){
                this.selectedValueIndex = i;
                return true;
            }
        }
        return false;
    }

    this.val = function(){
        if(this.isValueSet()){
            return attributeValues[selectedValueIndex];
        }
        return null;
    }

    this.addPossibleValue = function(attributeValue){
        //this.attributeValues[] = attributeValue;
    }
}

function AttributeValue(id, label){
    this.id = id;
    this.label = label;
    this.selected = false;

    this.isInArray = function(array){
        if(!array) return;
        for(var i = 0; i < array.length; i++){
            if(this.id == array[i]) return true;
        }
        return false;
    }
}