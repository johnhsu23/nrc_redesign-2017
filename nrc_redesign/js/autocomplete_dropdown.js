(function( $ ){
    // var select;
    // var filter;
    // var menu;
    // var menuItems;
    // var menuSectionsTitles;
    // var menuSections;

    var methods = {
        init : function(options) {
            value = "test";
        },
        show : function() {

        },// IS
        hide : function() {
            alert(this.length) 
        },// GOOD
        update : function( content ) 
        {  

        }// !!!
    };

    $.fn.autocompleteDropdown = function(nameInput, collapseableInput, func) {
        var select = this.find(".select");
        var menu = this.find(".dropdown-menu"); 
        var menuItems = this.find(".dropdown-menu .menu-section div");
        var filter = this.find(".dropdown-menu input")
        var menuSectionsTitles = this.find(".menu-section-header");
        var menuSections = this.find(".menu-section");
        var name = nameInput;
        var collapseable = collapseableInput;
        value = "";

        function setValue(newValue){
            var oldValue = value;
            value = newValue;
            if(oldValue != newValue){
                onValuesChanged();
            }
        }

        function onValuesChanged(){
            func(name, value);
        }

        menuSectionsTitles.addClass("close-it");
        $("body").on("click", function(){
            menu.hide();
        })
        menu.hide();
        
        select.on("click", function(){
            menu.toggle();
            var item = menu.getHighlightedItem();            
            if(menu.is(":visible") && item != null && menu.selectedItem != null){
                item.removeClass("selected");
                menu.selectedItem.addClass("selected");
            }            
            if(menu.is(":visible")){                
                filter.val("");
                menuItems.show();
            }
            return false;
        })
        select.on("keydown", function(e){
            if(e.keyCode == 9 || e.keyCode == 16 || e.keyCode == 18){
                return true;
            }
            if(menu.is(":hidden")){
                menu.show();
                var item = menu.getHighlightedItem();
                item.removeClass("selected");
                filter.attr("tabindex", "0");
                if(menu.selectedItem != null){
                    menu.selectedItem.addClass("selected");
                }
                return false;
            }
            if(e.keyCode == 40){
                menu.highlightNextItem();
            }
            else if(e.keyCode == 38){
                menu.highlightPreviousItem();
            }
            else if(e.keyCode == 13 || e.keyCode == 32){
                menu.selectedItem = menu.getHighlightedItem();
                var val = menu.selectedItem.html();
                setValue(menu.selectedItem.data("code"));
                select.html(val);
                menu.hide();
                //menu.selectedItem.data("UpdateReportCard")(menu.highlightSelectedItem.data("code"));
            }
            return false;
        })

        menu.getHighlightedItem = function(){
            return this.find("div.selected");
        }
        menu.highlightNextItem = function(){
            var newPosition = menuItems.index(menu.getHighlightedItem()) + 1;
            if(newPosition == menuItems.length) return;
            if(menu.getHighlightedItem() == null) newPosition = 0;
            menu.getHighlightedItem().removeClass("selected");
            this.highlightItem(newPosition);
            if(menu.getHighlightedItem().parent().is(":hidden")){
                menu.getHighlightedItem().parent().prev(".menu-section-header").trigger("click");
            }
            if(menu.getHighlightedItem().position().top + menu.getHighlightedItem().height() > menu.height()){
                menu.scrollTop(menu.getHighlightedItem().position().top + menu.getHighlightedItem().height() - menu.height() + menu.scrollTop()); 
            }
            //select.html(menu.selectedItem.html());
        }
        menu.highlightPreviousItem = function(){
            if(menu.getHighlightedItem() == null) return;
            var newPosition = menuItems.index(menu.getHighlightedItem()) - 1;
            if(newPosition < 0) return;            
            menu.getHighlightedItem().removeClass("selected");
            this.highlightItem(newPosition);
            if(menu.getHighlightedItem().parent().is(":hidden")){
                menu.getHighlightedItem().parent().prev(".menu-section-header").trigger("click");
            }
            if(menu.getHighlightedItem().position().top < 0){
                menu.scrollTop(menu.getHighlightedItem().position().top + menu.scrollTop());
                //menu.scrollTop(menu.getHighlightedItem().position().top + menu.getHighlightedItem().height() - menu.height() + menu.scrollTop()); 
            }
            if(newPosition == 0) menu.scrollTop(0);
            //select.html(menu.selectedItem.html());
        } 
        menu.selectItem = function(index){
            if(menu.selectedItem != null) menu.selectedItem.removeClass("selected");
            menu.selectedItem = $(menuItems[index]);
            menu.selectedItem.addClass("selected");
        }
        menu.highlightSelectedItem = function(){
            var item = menu.getHighlightedItem();
            item.removeClass("selected");
            menu.selectedItem.addClass("selected");
        }
        menu.highlightItem = function(index){
            $(menuItems[index]).addClass("selected");
        }
        menu.on("keydown", function(e){            
            if(e.keyCode == 40){
                menu.highlightNextItem();
            }
            else if(e.keyCode == 38){
                menu.highlightPreviousItem();
            }
            else if(e.keyCode == 13 || e.keyCode == 32){
                menu.selectedItem = menu.getHighlightedItem();
                var val = menu.selectedItem.html();
                setValue(menu.selectedItem.data("code"));
                select.html(val);
                menu.hide();
                return false;
            }
            return true;
        })
        menu.toggleMenu = function(){

        }
        menuItems.on("click", function(){            
            menu.hide();
            select.html($(this).html());
            if(menu.selectedItem != null) menu.selectedItem.removeClass("selected");
            menu.selectedItem = $(this);
            menu.selectedItem.addClass("selected");
            setValue($(this).data("code"))
            //$(this).data("UpdateReportCard")($(this).data("code"));
            return false;
        });
        menuSectionsTitles.on("click", function(){
            if(!collapseable) return false;
            $(this).next(".menu-section").toggle();
            if($(this).next(".menu-section").is(":visible")){
                $(this).removeClass("open-it")
                $(this).addClass("close-it")
            }else{
                $(this).removeClass("close-it")
                $(this).addClass("open-it")
            }
            return false;
        })

         menuSectionsTitles.each(function(){
            $(this).data("closeSubMenu", function(){
                alert("close sub menu"); 
            })
         })
        
        //$(menuSectionsTitles[0]).closeSubMenu();

        // $(menuSectionsTitles[1]).trigger("click");
        // $(menuSectionsTitles[2]).trigger("click");
        if(filter != null){
            filter.on("click", function(){            
                return false;
            });
            filter.on("keyup", function(){            
                var inputText = $(this).val();
                filter.filter(inputText);
            });
            filter.on("keydown", function(e){            
                if(e.keyCode == 40){
                    menu.highlightNextItem();
                }
                if(e.keyCode == 38){
                    menu.highlightPreviousItem();
                    return false;
                }
                else if(e.keyCode == 13){
                    // menu.selectedItem = menu.getHighlightedItem();
                    // var val = menu.selectedItem.html();
                    // select.html(val);
                    // menu.hide();
                    return false;
                }else if(e.keyCode == 32){
                    filter.val(filter.val() + " ");
                    return false;
                }

                return true;
            })
            filter.filter = function(filterText){
                menuItems.each(function(index, element){        
                    var selectionText = $(this).text();
                    if(filterText.trim() == ""){
                        $(this).show();
                    }else if(selectionText.toLowerCase().indexOf(filterText.toLowerCase()) == 0 || selectionText.toLowerCase().indexOf(" " + filterText.toLowerCase()) > 2){
                        if(filterText.length == 3){
                            var classes = $(this).parent().attr("class").split(' ');
                            for(var i = 0; i < menuSectionsTitles.length; i++){
                                for(var j = 0; j < classes.length; j++){
                                    if($(menuSectionsTitles[i]).hasClass(classes[j]) && $(menuSectionsTitles[i]).next(".menu-section").is(":hidden")){
                                        $(menuSectionsTitles[i]).trigger("click");
                                    }
                                }
                            }
                        }
                        $(this).show();
                    }else{
                        $(this).hide();
                    }
                });
            }
        }

        // if ( methods[methodOrOptions] ) {
        //     return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        // } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
        //     // Default to "init"            
        //     return methods.init.apply( this, arguments );
        // } else {
        //     $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.tooltip' );
        // }
    };
})( jQuery );