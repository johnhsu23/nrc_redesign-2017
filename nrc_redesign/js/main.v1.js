
$(document).ready(function(){    
  var TableView = Backbone.View.extend ({    
    // el - stands for element. Every view has an element associated with HTML content, will be rendered. 
    el: '#title',
    
    // It's the first function called when this view is instantiated.
    initialize: function() {
        this.render(); 
    },
    
    // $el - it's a cached jQuery object (el), in which you can use jQuery functions to push content.
    
    //Like the Hello TutorialsPoint in this case.
    render: function() {      
        this.$el.html("Hello TutorialsPoint!!!");
    }
  });
  var appView = new TableView();
  d3.json("nrc_redesign/js/allsubjects_ap.json", function(error, data){
    makeChart(data);
  });   
  var open = false;
  
  //events
  // $("#MathLink").on("click", function(){        
  //   if(!open){
  //     $("#MathRow").show();
  //     $("#MathMenu").hide();
  //     $("#MathMenu").slideDown("slow");      
  //   }else{            
  //     $("#MathMenu").slideUp("slow", function(){
  //       $("#MathRow").hide();
  //     });
  //   }
  //   open = !open;
  // })  

  $("div.row.top-bluerow").remove();
  alert("about to get script");
  $.getScript( "nrc_redesign/js/Attributes.js", function( data, textStatus, jqxhr ) {
      
  });

  function main(){
    
  }

  var subjects = ["civics", "economics", "geography", "math", "reading", "science", "tel", "history", "writing"];
  for(var i = 0; i < subjects.length; i++){
    $(".nrc-report .arrow-button").eq(i).data("subject", subjects[i]);
  }

  loadEvents();

  function loadEvents(){
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
        // alert("click");
        // alert($(this).children(".sub-nav").length);      
      });
    })

    $(".icon").on("click", function(){      
      $(this).siblings(".sub-nav").toggle();
    })

    $(".nrc-report-list-menu").hide();
    $(".arrow-button").on("click", function(){
      //alert($(this).data("subject"));
      $(".nrc-report-list-menu div").hide();
      $(".nrc-report-list-menu div." + $(this).data("subject")).show();
      $(".nrc-report-list-menu").show();
      $(".nrc-report-list-menu").css("position", "absolute").css("left", $(this).position().left).css("top", $(this).position().top + $(this).height()-1);
      return false;
    })

    $("body").on("click", function(){
      $(".nrc-report-list-menu").hide();
    });

    $(".nrc-report-list-menu").on("click", function(){
      return false;
    })
  }

  

  //$(".nav-menu").on("click", function(){
    //alert("menu click");
  //})
  setTimeout(function(){
    //$(".nav-item").off();
    
  }, 1000);

  //move stuff around
  $(".header__logo a").after($("#hamburger-icon"));
  $(".header__top .nav-item:first > div:first").after($(".icon"));


  // var data = [ 
  //   {"Percentage" : 27, "Year" : 2010}, {"Percentage" : 23, "Year" : 2014}, {"Percentage" : 24, "Year" : 2010},
  //   {"Percentage" : 0, "Year" : 0}, {"Percentage" : 0, "Year" : 0}, {"Percentage" : 42, "Year" : 2012}, 
  //   {"Percentage" : 21, "Year" : 2010}, {"Percentage" : 27, "Year" : 2014}, {"Percentage" : 20, "Year" : 2010}, 
  //   {"Percentage" : 40, "Year" : 2015}, {"Percentage" : 33, "Year" : 2015}, {"Percentage" : 25, "Year" : 2015},
  //   {"Percentage" : 36, "Year" : 2015}, {"Percentage" : 34, "Year" : 2015}, {"Percentage" : 37, "Year" : 2015},
  //   {"Percentage" : 38, "Year" : 2009}, {"Percentage" : 34, "Year" : 2011}, {"Percentage" : 22, "Year" : 2009},
  //   {"Percentage" : 0, "Year" : 0}, {"Percentage" : 43, "Year" : 2014}, {"Percentage" : 0, "Year" : 0},
  //   {"Percentage" : 20, "Year" : 2010}, {"Percentage" : 18, "Year" : 2014}, {"Percentage" : 12, "Year" : 2010},
  //   {"Percentage" : 0, "Year" : 0}, {"Percentage" : 27, "Year" : 2011}, {"Percentage" : 27, "Year" : 2011},]   
  $(".report-card td").css("text-align", "center");

  function makeChart(data){
    d3.select(".report-card").selectAll("td").data(data).html(function(d){
      if(d["Percentage"] == 0) { return "<img src='/subject/dashboard/gapsNoData.png'>" }
      var score = d["Percentage"] * 360 / 100;
      var color = "#000000";
      if(d["Percentage"] >= 10) color = "#889bc0";
      if(d["Percentage"] >= 20) color = "#666057";
      if(d["Percentage"] >= 30) color = "#00a796";
      if(d["Percentage"] >= 40) color = "#0a1971";
      var ret = "<circle cx='30' cy='30' r='20' fill='#DFDFDF' stroke-width='10' />";
      ret = ret + "<path fill = 'none' stroke='" + color + "' d = '" + describeArc(30, 30, 16, 0, score) + "' stroke-width='8'/>";
      ret = ret + "<circle cx='30' cy='30' r='15' fill='white' />";
      ret = ret + "<text x='30' y='36' fill='#A19787' text-anchor='middle' font-family = 'Arial' font-size = '16'>" + Math.round(d["Percentage"]) + "</text>";
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