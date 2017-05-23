
$(document).ready(function(){    
  var dataCallsDone = false;
  var attributeJsDone = false;
  var dataSet = new Array();
  //d3.json(calls["Math8"], function(error, data) {
    
    //makeChart(value);
    
  //});

  $.getScript( "nrc_redesign/js/Attributes.js", function( data, textStatus, jqxhr ) {
    attributeJsDone = true;
    checkScriptsDone();
  });

  $.getScript( "nrc_redesign/js/ets_util.js", function( data, textStatus, jqxhr ) {
    dataCallsDone = true;
    checkScriptsDone();     
  });

  function checkScriptsDone(){  
    if(dataCallsDone && attributeJsDone){
      main();
    }
  }

  // d3.json("nrc_redesign/js/allsubjects_ap.json", function(error, data){
  //   makeChart(data);
  // });   

  //d3.json("http://poseidon.research.ets.org/NRCDataService/GetAdhocData.aspx?type=data&subject=mathematics&grade=8&subscale=MRPCM&variable=TOTAL&jurisdiction=NP&stattype=ALC:AP&Year=2013,2015", function(error, data){
  //   d3.json("NRCDataService/GetAdhocData.aspx?type=data&subject=reading&grade=8&subscale=RRPCM&variable=TOTAL&jurisdiction=NP&stattype=ALC:AP&Year=2013,2015", function(error, data){
  // }); 

  var open = false;
  $("div.row.top-bluerow").remove();
    
  // $.getScript( "nrc_redesign/js/Attributes.js", function( data, textStatus, jqxhr ) {    
  //   main();    
  // });

  var calls = {};
  //calls["Math"] = "services/get_data_service.aspx?tableName=Years";
  //aerlt("setting call here");
  //calls["Math8"] = "nrc_redesign/js/math8.json";
  calls["Math8"] = "NRCDataService/GetAdhocData.aspx?type=data&subject=mathematics&grade=8&subscale=MRPCM&variable=TOTAL&jurisdiction=NP&stattype=ALC:AP&Year=2015";
  calls["Math4"] = "NRCDataService/GetAdhocData.aspx?type=data&subject=mathematics&grade=4&subscale=MRPCM&variable=TOTAL&jurisdiction=NP&stattype=ALC:AP&Year=2015";


  //http://poseidon.research.ets.org/NRCDataService/GetAdhocData.aspx?type=data&subject=mathematics&grade=8&subscale=MRPCM&variable=TOTAL&jurisdiction=NP&stattype=ALC:AP&Year=2015
  calls["Reading8"] = "NRCDataService/GetAdhocData.aspx?type=data&subject=reading&grade=8&subscale=RRPCM&variable=TOTAL&jurisdiction=NP&stattype=ALC:AP&Year=2015";
  calls["Reading4"] = "NRCDataService/GetAdhocData.aspx?type=data&subject=reading&grade=4&subscale=RRPCM&variable=TOTAL&jurisdiction=NP&stattype=ALC:AP&Year=2015";
  calls["Science4"] = "NRCDataService/GetAdhocData.aspx?type=data&subject=science&grade=4&subscale=SRPUV&variable=TOTAL&jurisdiction=NP&stattype=ALC:AP&Year=2015";
  calls["Science8"] = "NRCDataService/GetAdhocData.aspx?type=data&subject=science&grade=8&subscale=SRPUV&variable=TOTAL&jurisdiction=NP&stattype=ALC:AP&Year=2015";
  calls["Science12"] = "NRCDataService/GetAdhocData.aspx?type=data&subject=science&grade=12&subscale=SRPUV&variable=TOTAL&jurisdiction=NP&stattype=ALC:AP&Year=2015";
  
  // calls["Tables"] = "services/get_data_service.aspx?tableName=Tables";
  // calls["Subjects"] = "services/get_data_service.aspx?tableName=Subjects";
  // calls["Samples"] = "services/get_data_service.aspx?tableName=Samples";
  // calls["Assessments"] = "services/get_data_service.aspx?tableName=Assessments";
  // calls["Grades"] = "services/get_data_service.aspx?tableName=Grades";
  // calls["Posters"] = "services/get_data_service.aspx?tableName=Posters";
  // calls["QCers"] = "services/get_data_service.aspx?tableName=QCers";
  // calls["Teams"] = "services/get_data_service.aspx?tableName=Teams";

  function main(){        
    var subjects = ["civics", "economics", "geography", "math", "reading", "science", "tel", "history", "writing"];
    
    var dataSets = new AjaxDataSets(calls, function () {
      //var mathData = dataSets.tables["Math8"];
      //console.log('data value: ' + mathData);
      var dataSet = [];
      for(var i = 0; i < 27; i++){
        dataSet[i] = dataSets.tables["Reading8"]["result"][0]["value"];
      }
      dataSet[9] = dataSets.tables["Math4"]["result"][0]["value"];
      dataSet[10] = dataSets.tables["Math8"]["result"][0]["value"];
      dataSet[12] = dataSets.tables["Reading4"]["result"][0]["value"];
      dataSet[15] = dataSets.tables["Science4"]["result"][0]["value"];
      dataSet[16] = dataSets.tables["Science8"]["result"][0]["value"];
      dataSet[17] = dataSets.tables["Science12"]["result"][0]["value"];

      makeChart(dataSet);
    });
    dataSets.makeCalls();

    for(var i = 0; i < subjects.length; i++){
      $(".nrc-report .arrow-button").eq(i).data("subject", subjects[i]);
    }
    loadEvents();
  }

  function loadEvents(){
    //$(".nrc-report-textbox").test();
    
    var isMainMenuOpen = false;
    $("#hamburger-icon").on("click", function(){    
      $(".icon").show();
      if(!isMainMenuOpen) {
        $(".header__top .nav-item").slideDown("slow");
      }else{
        $(".header__top .nav-item").slideUp("slow");
      }
      isMainMenuOpen = !isMainMenuOpen;
      
      $(".header__top .nav-item:first").on("click", function(){
        // alert($(this).children(".sub-nav").length);      
      });
    })

    $(".icon").on("click", function(){      
      $(this).siblings(".sub-nav").toggle();
    })

    $(".nrc-report-list-menu").hide();
    $(".arrow-button").on("click", function(){
      $(".nrc-report-list-menu div").hide();      
      $(".nrc-report-list-menu div." + $(this).data("subject")).show();
      $(".nrc-report-list-menu").show();                  
      //$(".nrc-report-list-menu").css("position", "absolute").css("left", $(this).offsetParent().position().left + $(this).position().left).css("top", $(this).position().top);
      $(".nrc-report-list-menu").css("position", "absolute").css("left", $(this).offsetParent().position().left + $(this).position().left + 2).css("top", $("table.report-card").position().top + $(this).position().top + $(this).height() - 1);
      return false;
    })
    
    $(".select-options.jurisdiction-new").autocompleteDropdown();    

    var blockBodyClick = false;
    $("body").on("click", function(){
      if(blockBodyClick){
        blockBodyClick = false;
        return;
      }       
      $(".nrc-report-list-menu").hide();
      $(".nrc-report .dropdown-menu.jurisdiction").hide();
    });

    $(".nrc-report-list-menu").on("click", function(){
      return false;
    })

    $(".arrow-pulldown.jurisdiction").on("click", function(){      
      $(".dropdown-menu.jurisdiction").toggle();
      return false;
    })

    $(".nrc-report-textbox").on("focus", function(){
      $(".dropdown-menu.jurisdiction").show();
      $(".menu-section div").show();
      return false;
    });

    $(".nrc-report-textbox").on("mousedown", function(){
      blockBodyClick = true;      
      //$("#debug").append("mouse down");
      //return false;
    });    

    $(".nrc-report-textbox").on("keypress", function(e){
      if(e.keyCode == 13) return false;
    });
    
    $(".nrc-report .nrc-report-textbox").on("keyup", function(e){      
      var inputText = $(this).val();
      var textboxName = GetMenuSection($(this));
      //$("#debug").text(selectionText);
      $(".dropdown-menu.jurisdiction").show();
      var isSelected = $(".nrc-report .menu-section div.selected").length > 0;      
      if(e.keyCode == 40){        
        ChooseNextSelection();
        return false;
      }
      if(e.keyCode == 38){
        ChoosePreviousSelection();
        return false;
      }
      else if(e.keyCode == 13 || e.keyCode == 32){        
        SetInputValueFromSelectedMenuItem();
        $(".dropdown-menu.jurisdiction").hide();
        return false;        
      }

      $(".dropdown-menu." + textboxName + " .menu-section div").each(function(index, element){        
        var selectionText = $(this).text();
        if(inputText.trim() == ""){
          $(this).show();
        }else if(selectionText.toLowerCase().indexOf(inputText.toLowerCase()) >= 0){
          $(this).show();
        }else{
          $(this).hide();
        }
      });
    })

    $(".jurisdiction .menu-section-header").on("click", function(){
      var sectionName = GetMenuSection($(this));
      $(".menu-section." + sectionName).toggle();
      return false;
    })

    $(".menu-section div").on("click", function(){      
      var section = GetMenuSection($(this).parent().parent());      
      $(".nrc-report-textbox." + section).val($(this).text());
      $(".dropdown-menu." + section).hide();
      $(".menu-section div").removeClass("selected");
      $(this).addClass("selected");
      return false;
    })

    function SetInputValueFromSelectedMenuItem(){
      var value = GetSelectedMenuItemValue();
      var $menuItem = GetSelectedMenuItem();
      var section = GetMenuSection($menuItem.parent().parent());      
      $(".nrc-report .nrc-report-textbox." + section).val(value);
    }

    function SelectMenuItemByIndex(index){
      $(".nrc-report .menu-section div:visible:eq(" + index + ")").addClass("selected");
      if($(".nrc-report .menu-section div:visible:eq(" + index + ")").length > 0) return true;
      return false;
    }

    function ClearSelection(){
      $(".nrc-report .menu-section div").removeClass("selected");
    }

    function GetNumberMenuItems(){
      return $(".nrc-report .menu-section div:visible").length;
    }

    function ChooseNextSelection(){                  
      if(GetSelectedMenuItemIndex() == -1){                
        SelectMenuItemByIndex(0);
      }else{
        var index = GetSelectedMenuItemIndex();        
        if(index + 1 == GetNumberMenuItems()) return;
        ClearSelection();        
        SelectMenuItemByIndex((index + 1) % GetNumberMenuItems());
      }
    }

    function ChoosePreviousSelection(){
      if(GetSelectedMenuItemIndex() == -1){                
        //SelectMenuItemByIndex(GetNumberMenuItems() - 1);
        return;
      }else{
        var index = GetSelectedMenuItemIndex();
        if(index == 0) return;
        ClearSelection();
        SelectMenuItemByIndex(index-1);
      }
    }

    function GetSelectedMenuItem(){
      if($(".nrc-report .menu-section div.selected").length == 0) return "";
      var menuItems = $(".nrc-report .menu-section div:visible");
      for(var i = 0; i < menuItems.length; i++){
        var $menuItem = $(menuItems[i]);
        if($menuItem.hasClass("selected")) return $menuItem;
      }      
    }

    function GetSelectedMenuItemIndex(){
      if($(".nrc-report .menu-section div.selected").length == 0) return -1;
      var menuItems = $(".nrc-report .menu-section div:visible");
      for(var i = 0; i < menuItems.length; i++){
        var menuItem = $(menuItems[i]);
        if(menuItem.hasClass("selected")) return i;
      }      
    }

    function GetSelectedMenuItemValue(){
      if($(".nrc-report .menu-section div.selected").length == 0) return "";
      var menuItems = $(".nrc-report .menu-section div:visible");
      for(var i = 0; i < menuItems.length; i++){
        var $menuItem = $(menuItems[i]);
        if($menuItem.hasClass("selected")) return $menuItem.text();
      }
    }
  } //loadEvents

  function GetMenuSection($element){
    if($element.hasClass("states")) return "states";
    if($element.hasClass("jurisdiction")) return "jurisdiction";
    if($element.hasClass("national")) return "national";
    return "";
  }

  //move stuff around
  $(".header__logo a").after($("#hamburger-icon"));
  $(".header__top .nav-item:first > div:first").after($(".icon"));
  //$(".report-card td").css("text-align", "center");

  function makeChart(data){
    d3.select("table.report-card").selectAll("td").data(data).html(function(d){      
      if(d == 0) { return "<img src='/subject/dashboard/gapsNoData.png'>" }
      var score = d * 360 / 100;
      var color = "#000000";
      if(d >= 10) color = "#889bc0";
      if(d >= 20) color = "#666057";
      if(d >= 30) color = "#00a796";
      if(d >= 40) color = "#0a1971";
      var ret = "<circle cx='30' cy='30' r='20' fill='#DFDFDF' stroke-width='10' />";
      ret = ret + "<path fill = 'none' stroke='" + color + "' d = '" + describeArc(30, 30, 16, 0, score) + "' stroke-width='8'/>";
      ret = ret + "<circle cx='30' cy='30' r='15' fill='white' />";
      ret = ret + "<text x='30' y='36' fill='#A19787' text-anchor='middle' font-family = 'Arial' font-size = '16'>" + Math.round(d) + "</text>";
      return "<svg height='60' width = '60'>" + ret + "</svg>";
    });
  }
  
  function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  }

  function describeArc(x, y, radius, startAngle, endAngle){
    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);
        var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
        var d = [
            "M", start.x, start.y,
            "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
        ].join(" ");
        return d;       
    }
})