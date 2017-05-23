(function( $ ){
    var select;
    var filter;
    var menu;
    var menuItems;
    var menuSectionsTitles;
    var menuSections;

    var methods = {
        init : function(options) {
            
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

    $.fn.autocompleteDropdown = function(methodOrOptions) {
        select = this.find(".select");        
        menu = this.find(".dropdown-menu"); 
        menuItems = this.find(".dropdown-menu .menu-section div");
        filter = this.find(".dropdown-menu input")
        menuSectionsTitles = this.find(".menu-section-header");
        menuSectionsTitles.addClass("open-it");
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
            if(menu.is(":hidden")){
                menu.show();
                var item = menu.getHighlightedItem();
                item.removeClass("selected");
                menu.selectedItem.addClass("selected");                
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
                select.html(val);
                menu.hide();
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
            //select.html(menu.selectedItem.html());
        }
        menu.highlightPreviousItem = function(){
            if(menu.getHighlightedItem() == null) return;
            var newPosition = menuItems.index(menu.getHighlightedItem()) - 1;
            if(newPosition < 0) return;
            menu.getHighlightedItem().removeClass("selected");
            this.highlightItem(newPosition);
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
                select.html(val);
                menu.hide();
                return false;
            }
            return true;
        })
        menuItems.on("click", function(){            
            menu.hide();
            select.html($(this).html());
            if(menu.selectedItem != null) menu.selectedItem.removeClass("selected");
            menu.selectedItem = $(this);
            menu.selectedItem.addClass("selected");            
            return false;
        });
        menuSectionsTitles.on("click", function(){
            //alert($(this).next(".menu-section").html());
            $(this).next(".menu-section").toggle();
            if($(this).next(".menu-section").is(":visible")){
                $(this).removeClass("close-it")
                $(this).addClass("open-it")
            }else{
                $(this).removeClass("open-it")
                $(this).addClass("close-it")
            }
            //alert($(this).parent().parent().html());
            //$(this).next.hide();
            //$(this).next(".menu-section").html("fasdkljfkl;a");
            return false;
        })
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
                menu.selectedItem = menu.getHighlightedItem();
                var val = menu.selectedItem.html();
                select.html(val);
                menu.hide();
                return false;
            }
            return true;
        })
        filter.filter = function(filterText){
            menuItems.each(function(index, element){        
                var selectionText = $(this).text();
                if(filterText.trim() == ""){
                    $(this).show();
                }else if(selectionText.toLowerCase().indexOf(filterText.toLowerCase()) == 0){
                    $(this).show();
                }else{
                    $(this).hide();
                }
            });
        }

        if ( methods[methodOrOptions] ) {
            return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
            // Default to "init"            
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  methodOrOptions + ' does not exist on jQuery.tooltip' );
        }
    };

    function filter(filterString){
        var foleterSString = $(this).text();
        if(inputText.trim() == ""){
          $(this).show();
        }else if(selectionText.toLowerCase().indexOf(inputText.toLowerCase()) >= 0){
          $(this).show();
        }else{
          $(this).hide();
        }
    }

     $.fn.autocompleteDropdownOld = function(methodOrOptions) {

     };
})( jQuery );