$(document).ready(function(){
  //move stuff around
  $(".header__logo a").after($("#hamburger-icon"));
  $(".header__top .nav-item:first > div:first").after($(".icon"));

  var content = $(".row.main-content .col-xs-12").html();
  $("#pageContentContainer").html(content);
  $("#pageContentContainer").addClass("nrc-report");
  $(".nrc-report-list-menu").hide();

  $("#youtube_naep_video").replaceWith('<iframe height="157" src="https://www.youtube.com/embed/UdMkneYm2cU" frameborder="0" allowfullscreen></iframe>');

  var dataCallsDone = false;
  var attributeJsDone = false;
  var jurisdictionsDone = false;
  var subjectsDone = false;
  var dataSet = new Array();
  var jurisdictionCodes = [];
  var statTypeCodes = [];
  var subjectCodes = [];
  var values = {"jurisdiction": "", "statType": ""};

  var setValue = function(key, newValue){
    var oldValue = values[key];
    values[key] = newValue;
    if(oldValue != newValue){
        onValuesChanged();
    }
  }

  function setValues(newValues){
    if(values["jurisdiction"] != newValues["jurisdiction"] || values["statType"] != newValues["statType"]){
      values = newValues;
      onValuesChanged();
    }
  }

  function onValuesChanged(){
    UpdateReportCard(values["jurisdiction"], values["statType"])
  }

  d3.json("nrc_redesign/js/jurisdictions.js", function(error, data){                                     
    jurisdictionsDone = true;
    jurisdictionCodes = data;
  });

  d3.json("nrc_redesign/js/stat_types.js", function(error, data){                               
    statTypesDone = true;
    statTypeCodes = data;
  });

  d3.json("nrc_redesign/js/math.js", function(error, data){                                     
    subjectsDone = true;
    subjectCodes = data;
  });

  $.getScript( "nrc_redesign/js/Attributes.js", function( data, textStatus, jqxhr ) {
    attributeJsDone = true;
    checkScriptsDone();
  });

  $.getScript( "nrc_redesign/js/ets_util.js", function( data, textStatus, jqxhr ) {
    dataCallsDone = true;
    checkScriptsDone();     
  });

  function checkScriptsDone(){  
    if(dataCallsDone && attributeJsDone && jurisdictionsDone && statTypesDone){
      DecorateAssociativeArray(statTypeCodes);
      DecorateAssociativeArray(subjectCodes);
      var val = subjectCodes.getValueByKey("label", "code", "MAT");
      main();
    }
  }

  var open = false;
  $("div.row.top-bluerow").remove();
  
  jurisdictionCodes.getRow = function(key, value){
    for(var i = 0; i < this.length ; i++){
      if(this[i][key] == value) return this[i];
    }
  }

  function CreateCalls(jurisdiction, statType){
    var calls = {}
    calls["ArtsMusic8"] = "NRCDataService/GetAdhocData.aspx?type=data&subject=music&grade=8&subscale=MUSRP&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=1990R2,1992R2,1994R2,1996R2,1998R2,2000R2,2001R2,1994,1996,1998,2000,2001,2002,2003,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016";
    calls["ArtsMusic4"] = "NRCDataService/GetAdhocData.aspx?type=data&subject=music&grade=4&subscale=MUSRP&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=1990R2,1992R2,1994R2,1996R2,1998R2,2000R2,2001R2,1994,1996,1998,2000,2001,2002,2003,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016";
    calls["ArtsMusic12"] = "NRCDataService/GetAdhocData.aspx?type=data&subject=music&grade=12&subscale=MUSRP&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=1990R2,1992R2,1994R2,1996R2,1998R2,2000R2,2001R2,1994,1996,1998,2000,2001,2002,2003,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016";
    calls["ArtsVisualArts8"] = "NRCDataService/GetAdhocData.aspx?type=data&subject=visualarts&grade=8&subscale=VISRP&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=1990R2,1992R2,1994R2,1996R2,1998R2,2000R2,2001R2,1994,1996,1998,2000,2001,2002,2003,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016";
    calls["ArtsVisualArts4"] = "NRCDataService/GetAdhocData.aspx?type=data&subject=visualarts&grade=4&subscale=VISRP&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=1990R2,1992R2,1994R2,1996R2,1998R2,2000R2,2001R2,1994,1996,1998,2000,2001,2002,2003,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016";
    calls["ArtsVisualArts12"] = "NRCDataService/GetAdhocData.aspx?type=data&subject=visualarts&grade=12&subscale=VISRP&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=1990R2,1992R2,1994R2,1996R2,1998R2,2000R2,2001R2,1994,1996,1998,2000,2001,2002,2003,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016";
    calls["Math8"] = "NRCDataService/GetAdhocData.aspx?type=data&subject=mathematics&grade=8&subscale=MRPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=1990R2,1992R2,1994R2,1996R2,1998R2,2000R2,2001R2,1994,1996,1998,2000,2001,2002,2003,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015";
    calls["Math4"] = "NRCDataService/GetAdhocData.aspx?type=data&subject=mathematics&grade=4&subscale=MRPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=1990R2,1992R2,1994R2,1996R2,1998R2,2000R2,2001R2,1994,1996,1998,2000,2001,2002,2003,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015";
    calls["Math12"] = "NRCDataService/GetAdhocData.aspx?type=data&subject=mathematics&grade=12&subscale=MWPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015";
    // var juris = values["jurisdiction"];
    // if(juris == "XK") {
    //   calls["Math8"] = "NRCDataService/GetAdhocData.aspx?type=data&subject=mathematics&grade=8&subscale=MRPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2013";
    //   calls["Math4"] = "NRCDataService/GetAdhocData.aspx?type=data&subject=mathematics&grade=4&subscale=MRPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2013";
    //   calls["Math12"] = "NRCDataService/GetAdhocData.aspx?type=data&subject=mathematics&grade=12&subscale=MWPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2013";
    // }
    calls["Reading8"] = "NRCDataService/GetAdhocData.aspx?type=data&subject=reading&grade=8&subscale=RRPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=1990R2,1992R2,1994R2,1996R2,1998R2,2000R2,2001R2,1994,1996,1998,2000,2001,2002,2003,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015";
    calls["Reading4"] = "NRCDataService/GetAdhocData.aspx?type=data&subject=reading&grade=4&subscale=RRPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=1990R2,1992R2,1994R2,1996R2,1998R2,2000R2,2001R2,1994,1996,1998,2000,2001,2002,2003,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015";
    calls["Reading12"] = "NRCDataService/GetAdhocData.aspx?type=data&subject=reading&grade=12&subscale=RRPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=1990R2,1992R2,1994R2,1996R2,1998R2,2000R2,2001R2,1994,1996,1998,2000,2001,2002,2003,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015";
    // if(juris == "XK") {
    //   calls["Reading8"] = "NRCDataService/GetAdhocData.aspx?type=data&subject=reading&grade=8&subscale=RRPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2013";
    //   calls["Reading4"] = "NRCDataService/GetAdhocData.aspx?type=data&subject=reading&grade=4&subscale=RRPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2013";
    //   calls["Reading12"] = "NRCDataService/GetAdhocData.aspx?type=data&subject=reading&grade=12&subscale=RRPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2013";
    // }
    calls["Science4"] = "NRCDataService/GetAdhocData.aspx?type=data&subject=science&grade=4&subscale=SRPUV&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=1990R2,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015";
    calls["Science8"] = "NRCDataService/GetAdhocData.aspx?type=data&subject=science&grade=8&subscale=SRPUV&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=1990R2,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015";
    calls["Science12"] = "NRCDataService/GetAdhocData.aspx?type=data&subject=science&grade=12&subscale=SRPUV&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=1990R2,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015";
    // if(juris == "NL" || juris == "AK" || juris == "CO" || juris == "DC" || juris == "LA" || juris == "PA"){
    //   calls["Science4"] = "NRCDataService/GetAdhocData.aspx?type=data&subject=science&grade=4&subscale=SRPUV&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2009";
    //   calls["Science8"] = "NRCDataService/GetAdhocData.aspx?type=data&subject=science&grade=8&subscale=SRPUV&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2011";
    //   calls["Science12"] = "NRCDataService/GetAdhocData.aspx?type=data&subject=science&grade=12&subscale=SRPUV&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2009";
    // } else if(juris == "XK") {
    //   calls["Science4"] = "NRCDataService/GetAdhocData.aspx?type=data&subject=science&grade=4&subscale=SRPUV&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2009";
    //   calls["Science8"] = "NRCDataService/GetAdhocData.aspx?type=data&subject=science&grade=8&subscale=SRPUV&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2009";
    //   calls["Science12"] = "NRCDataService/GetAdhocData.aspx?type=data&subject=science&grade=12&subscale=SRPUV&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2009";
    // }

    calls["Civics4"] = "NRCDataService/GetAdhocData.aspx?type=data&subject=civics&grade=4&subscale=CIVRP&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=1990R2,1992R2,1994R2,1996R2,1998R2,2000R2,2001R2,1994,1996,1998,2000,2001,2002,2003,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015";
    calls["Civics8"] = "NRCDataService/GetAdhocData.aspx?type=data&subject=civics&grade=8&subscale=CIVRP&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=1990R2,1992R2,1994R2,1996R2,1998R2,2000R2,2001R2,1994,1996,1998,2000,2001,2002,2003,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015";
    calls["Civics12"] = "NRCDataService/GetAdhocData.aspx?type=data&subject=civics&grade=12&subscale=CIVRP&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=1990R2,1992R2,1994R2,1996R2,1998R2,2000R2,2001R2,1994,1996,1998,2000,2001,2002,2003,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015";
    calls["Economics12"] = "NRCDataService/GetAdhocData.aspx?type=data&subject=economics&grade=12&subscale=ERPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=1990R2,1992R2,1994R2,1996R2,1998R2,2000R2,2001R2,1994,1996,1998,2000,2001,2002,2003,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015";
    calls["Geography4"] = "NRCDataService/GetAdhocData.aspx?type=data&subject=geography&grade=4&subscale=GRPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=1990R2,1992R2,1994R2,1996R2,1998R2,2000R2,2001R2,1994,1996,1998,2000,2001,2002,2003,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015";
    calls["Geography8"] = "NRCDataService/GetAdhocData.aspx?type=data&subject=geography&grade=8&subscale=GRPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=1990R2,1992R2,1994R2,1996R2,1998R2,2000R2,2001R2,1994,1996,1998,2000,2001,2002,2003,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015";
    calls["Geography12"] = "NRCDataService/GetAdhocData.aspx?type=data&subject=geography&grade=12&subscale=GRPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=1990R2,1992R2,1994R2,1996R2,1998R2,2000R2,2001R2,1994,1996,1998,2000,2001,2002,2003,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015";
    calls["TEL4"] = "NRCDataService/GetAdhocData.aspx?type=data&subject=tel&grade=4&subscale=TRPUN&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=1990R2,1992R2,1994R2,1996R2,1998R2,2000R2,2001R2,1994,1996,1998,2000,2001,2002,2003,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015";
    calls["TEL8"] = "NRCDataService/GetAdhocData.aspx?type=data&subject=tel&grade=8&subscale=TRPUN&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=1990R2,1992R2,1994R2,1996R2,1998R2,2000R2,2001R2,1994,1996,1998,2000,2001,2002,2003,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015";
    calls["TEL12"] = "NRCDataService/GetAdhocData.aspx?type=data&subject=tel&grade=12&subscale=TRPUN&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=1990R2,1992R2,1994R2,1996R2,1998R2,2000R2,2001R2,1994,1996,1998,2000,2001,2002,2003,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015";
    calls["History4"] = "NRCDataService/GetAdhocData.aspx?type=data&subject=history&grade=4&subscale=HRPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=1990R2,1992R2,1994R2,1996R2,1998R2,2000R2,2001R2,1994,1996,1998,2000,2001,2002,2003,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015";
    calls["History8"] = "NRCDataService/GetAdhocData.aspx?type=data&subject=history&grade=8&subscale=HRPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=1990R2,1992R2,1994R2,1996R2,1998R2,2000R2,2001R2,1994,1996,1998,2000,2001,2002,2003,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015";
    calls["History12"] = "NRCDataService/GetAdhocData.aspx?type=data&subject=history&grade=12&subscale=HRPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=1990R2,1992R2,1994R2,1996R2,1998R2,2000R2,2001R2,1994,1996,1998,2000,2001,2002,2003,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015";
    calls["Writing4"] = "NRCDataService/GetAdhocData.aspx?type=data&subject=writing&grade=4&subscale=WRIRP&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=1990R2,1992R2,1994R2,1996R2,1998R2,2000R2,2001R2,1994,1996,1998,2000,2001,2002,2003,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015";
    calls["Writing8"] = "NRCDataService/GetAdhocData.aspx?type=data&subject=writing&grade=8&subscale=WRIRP&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2008,2009,2010,2011,2012,2013,2014,2015";
    calls["Writing12"] = "NRCDataService/GetAdhocData.aspx?type=data&subject=writing&grade=12&subscale=WRIRP&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2008,2009,2010,2011,2012,2013,2014,2015";
    return calls;
  }

  function createTrendCall(mainPart, code, defaultYears){
    if(trendYears[code] == null){
      return mainPart + "&Year=" + defaultYears;
    } else {
      return mainPart + "&Year=" + trendYears[code].firstYear + "," + trendYears[code].lastYear;
    }
  }


  function createPreviousYearTrendCall(mainPart, code, defaultYears){
    if(trendYears[code] == null){
      return mainPart + "&Year=" + defaultYears;
    } else {
      return mainPart + "&Year=" + trendYears[code].lastYear + "," + trendYears[code].previousYear;
    }
  }

  function CreateTrendCallsBaseYear(jurisdiction, statType){
    var calls = {};
    code = "ArtsMusic4";
    calls[code] = createTrendCall("NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=music&grade=4&subscale=MUSRP&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType, code, "2016,2016");
    code = "ArtsMusic8";
    calls[code] = createTrendCall("NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=music&grade=8&subscale=MUSRP&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType, code, "2016,2016");
    code = "ArtsMusic12";
    calls[code] = createTrendCall("NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=music&grade=12&subscale=MUSRP&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType, code, "2016,2016");
    code = "ArtsVisualArts4";
    calls[code] = createTrendCall("NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=visualarts&grade=4&subscale=VISRP&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType, code, "2016,2016");
    code = "ArtsVisualArts8";
    calls[code] = createTrendCall("NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=visualarts&grade=8&subscale=VISRP&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType, code, "2016,2016");
    code = "ArtsVisualArts12";
    calls[code] = createTrendCall("NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=visualarts&grade=12&subscale=VISRP&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType, code, "2016,2016");
    code = "Math4";
    calls[code] = createTrendCall("NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=mathematics&grade=4&subscale=MRPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType, code, "2016,2016");
    code = "Math8";
    calls[code] = createTrendCall("NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=mathematics&grade=8&subscale=MRPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType, code, "2016,2016");
    code = "Math12";
    calls[code] = createTrendCall("NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=mathematics&grade=12&subscale=MRPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType, code, "2016,2016");
    code = "Reading4";
    calls[code] = createTrendCall("NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=reading&grade=4&subscale=RRPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType, code, "2016,2016");
    code = "Reading8";
    calls[code] = createTrendCall("NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=reading&grade=8&subscale=RRPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType, code, "2016,2016");
    code = "Reading12";
    calls[code] = createTrendCall("NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=reading&grade=12&subscale=RRPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType, code, "2016,2016");
    code = "Science4";
    calls[code] = createTrendCall("NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=science&grade=4&subscale=SRPUV&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType, code, "2016,2016");
    code = "Science8";
    calls[code] = createTrendCall("NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=science&grade=8&subscale=SRPUV&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType, code, "2016,2016");
    code = "Science12";
    calls[code] = createTrendCall("NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=science&grade=12&subscale=SRPUV&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType, code, "2016,2016");
    code = "Civics4";
    calls[code] = createTrendCall("NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=civics&grade=4&subscale=CIVRP&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType, code, "2016,2016");
    code = "Civics8";
    calls[code] = createTrendCall("NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=civics&grade=8&subscale=CIVRP&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType, code, "2016,2016");
    code = "Civics12";
    calls[code] = createTrendCall("NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=civics&grade=12&subscale=CIVRP&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType, code, "2016,2016");
    code = "Economics12";
    calls[code] = createTrendCall("NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=economics&grade=12&subscale=ERPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType, code, "2016,2016");
    code = "Geography4";
    calls[code] = createTrendCall("NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=geography&grade=4&subscale=GRPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType, code, "2016,2016");
    code = "Geography8";
    calls[code] = createTrendCall("NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=geography&grade=8&subscale=GRPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType, code, "2016,2016");
    code = "Geography12";
    calls[code] = createTrendCall("NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=geography&grade=12&subscale=GRPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType, code, "2016,2016");
    code = "History4";
    calls[code] = createTrendCall("NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=history&grade=4&subscale=HRPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType, code, "2016,2016");
    code = "History8";
    calls[code] = createTrendCall("NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=history&grade=8&subscale=HRPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType, code, "2016,2016");
    code = "History12";
    calls[code] = createTrendCall("NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=history&grade=12&subscale=HRPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType, code, "2016,2016");
    code = "Writing4";
    calls[code] = createTrendCall("NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=writing&grade=4&subscale=WRIRP&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType, code, "2016,2016");
    code = "Writing8";
    calls[code] = createTrendCall("NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=writing&grade=8&subscale=WRIRP&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType, code, "2016,2016");
    code = "Writing12";
    calls[code] = createTrendCall("NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=writing&grade=12&subscale=WRIRP&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType, code, "2016,2016");
    // if(trendYears[code] == null)
    //   calls[code] = "NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=music&grade=8&subscale=MUSRP&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2016,2008";
    // else
    //   calls[code] = "NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=music&grade=8&subscale=MUSRP&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=" + trendYears[code].firstYear + "," + trendYears[code].lastYear;
    //calls["ArtsMusic12"] = "NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=music&grade=12&subscale=MUSRP&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2016,2008";
    //calls["ArtsVisualArts4"] = "NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=visualarts&grade=4&subscale=VISRP&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2016,2008";
    //calls["ArtsVisualArts8"] = "NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=visualarts&grade=8&subscale=VISRP&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2016,2008";
    //calls["ArtsVisualArts12"] = "NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=visualarts&grade=12&subscale=VISRP&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2016,2008";
    //var juris = values["jurisdiction"];
    //calls["Math4"] = "NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=mathematics&grade=4&subscale=MRPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=" + trendYears["Math4"].firstYear + "," + trendYears["Math4"].lastYear;
    //calls["Math8"] = "NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=mathematics&grade=8&subscale=MRPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2015R3,1990R2";
    //calls["Math12"] = "NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=mathematics&grade=12&subscale=MWPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2015R3,2005R3";


    //calls["Reading4"] = "NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=reading&grade=4&subscale=RRPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2015R3,1992R2";
    //calls["Reading8"] = "NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=reading&grade=8&subscale=RRPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2015R3,1992R2";
    //calls["Reading12"] = "NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=reading&grade=12&subscale=RRPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2015R3,1992R2";
    //calls["Science4"] = "NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=science&grade=4&subscale=SRPUV&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2015,2009";
    //calls["Science8"] = "NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=science&grade=8&subscale=SRPUV&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2015,2009";
    //calls["Science12"] = "NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=science&grade=12&subscale=SRPUV&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2015,2009";
    //calls["Civics4"] = "NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=civics&grade=4&subscale=CIVRP&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2010,1998";
    //calls["Civics8"] = "NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=civics&grade=8&subscale=CIVRP&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2014,1998";
    //calls["Civics12"] = "NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=civics&grade=12&subscale=CIVRP&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2010,1998";
    //calls["Economics12"] = "NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=economics&grade=12&subscale=ERPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2012,2006";
    //calls["Geography4"] = "NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=geography&grade=4&subscale=GRPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2010,1994R2";
    //calls["Geography8"] = "NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=geography&grade=8&subscale=GRPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2014,1994R2";
    //calls["Geography12"] = "NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=geography&grade=12&subscale=GRPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2010,1994R2";
    // calls["TEL4"] = "NRCDataService/GetAdhocData.aspx?type=data&subject=tel&grade=4&subscale=TRPUN&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2014";
    // calls["TEL8"] = "NRCDataService/GetAdhocData.aspx?type=data&subject=tel&grade=8&subscale=TRPUN&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2014";
    // calls["TEL12"] = "NRCDataService/GetAdhocData.aspx?type=data&subject=tel&grade=12&subscale=TRPUN&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2014";
    //calls["History4"] = "NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=history&grade=4&subscale=HRPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2010,1994R2";
    //calls["History8"] = "NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=history&grade=8&subscale=HRPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2014,1994R2";
    //calls["History12"] = "NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=history&grade=12&subscale=HRPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2010,1994R2";
    //calls["Writing4"] = "NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=writing&grade=4&subscale=WRIRP&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2002,1998";
    //calls["Writing8"] = "NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=writing&grade=8&subscale=WRIRP&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2011,1998";
    //calls["Writing12"] = "NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=writing&grade=12&subscale=WRIRP&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2011,1998";
    return calls;
  }

  function CreateTrendCallsPreviousYear(jurisdiction, statType){
    var calls = {};
    code = "ArtsMusic4";
    calls[code] = createPreviousYearTrendCall("NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=music&grade=4&subscale=MUSRP&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType, code, "2016,2016");
    code = "ArtsMusic8";
    calls[code] = createPreviousYearTrendCall("NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=music&grade=8&subscale=MUSRP&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType, code, "2016,2016");
    code = "ArtsMusic12";
    calls[code] = createPreviousYearTrendCall("NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=music&grade=12&subscale=MUSRP&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType, code, "2016,2016");
    code = "ArtsVisualArts4";
    calls[code] = createPreviousYearTrendCall("NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=visualarts&grade=4&subscale=VISRP&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType, code, "2016,2016");
    code = "ArtsVisualArts8";
    calls[code] = createPreviousYearTrendCall("NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=visualarts&grade=8&subscale=VISRP&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType, code, "2016,2016");
    code = "ArtsVisualArts12";
    calls[code] = createPreviousYearTrendCall("NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=visualarts&grade=12&subscale=VISRP&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType, code, "2016,2016");
    code = "Math4";
    calls[code] = createPreviousYearTrendCall("NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=mathematics&grade=4&subscale=MRPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType, code, "2016,2016");
    code = "Math8";
    calls[code] = createPreviousYearTrendCall("NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=mathematics&grade=8&subscale=MRPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType, code, "2016,2016");
    code = "Math12";
    calls[code] = createPreviousYearTrendCall("NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=mathematics&grade=12&subscale=MRPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType, code, "2016,2016");
    code = "Reading4";
    calls[code] = createPreviousYearTrendCall("NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=reading&grade=4&subscale=RRPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType, code, "2016,2016");
    code = "Reading8";
    calls[code] = createPreviousYearTrendCall("NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=reading&grade=8&subscale=RRPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType, code, "2016,2016");
    code = "Reading12";
    calls[code] = createPreviousYearTrendCall("NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=reading&grade=12&subscale=RRPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType, code, "2016,2016");
    code = "Science4";
    calls[code] = createPreviousYearTrendCall("NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=science&grade=4&subscale=SRPUV&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType, code, "2016,2016");
    code = "Science8";
    calls[code] = createPreviousYearTrendCall("NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=science&grade=8&subscale=SRPUV&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType, code, "2016,2016");
    code = "Science12";
    calls[code] = createPreviousYearTrendCall("NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=science&grade=12&subscale=SRPUV&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType, code, "2016,2016");
    code = "Civics4";
    calls[code] = createPreviousYearTrendCall("NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=civics&grade=4&subscale=CIVRP&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType, code, "2016,2016");
    code = "Civics8";
    calls[code] = createPreviousYearTrendCall("NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=civics&grade=8&subscale=CIVRP&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType, code, "2016,2016");
    code = "Civics12";
    calls[code] = createPreviousYearTrendCall("NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=civics&grade=12&subscale=CIVRP&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType, code, "2016,2016");
    code = "Economics12";
    calls[code] = createPreviousYearTrendCall("NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=economics&grade=12&subscale=ERPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType, code, "2016,2016");
    code = "Geography4";
    calls[code] = createPreviousYearTrendCall("NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=geography&grade=4&subscale=GRPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType, code, "2016,2016");
    code = "Geography8";
    calls[code] = createPreviousYearTrendCall("NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=geography&grade=8&subscale=GRPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType, code, "2016,2016");
    code = "Geography12";
    calls[code] = createPreviousYearTrendCall("NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=geography&grade=12&subscale=GRPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType, code, "2016,2016");
    code = "History4";
    calls[code] = createPreviousYearTrendCall("NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=history&grade=4&subscale=HRPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType, code, "2016,2016");
    code = "History8";
    calls[code] = createPreviousYearTrendCall("NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=history&grade=8&subscale=HRPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType, code, "2016,2016");
    code = "History12";
    calls[code] = createPreviousYearTrendCall("NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=history&grade=12&subscale=HRPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType, code, "2016,2016");
    code = "Writing4";
    calls[code] = createPreviousYearTrendCall("NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=writing&grade=4&subscale=WRIRP&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType, code, "2016,2016");
    code = "Writing8";
    calls[code] = createPreviousYearTrendCall("NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=writing&grade=8&subscale=WRIRP&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType, code, "2016,2016");
    code = "Writing12";
    calls[code] = createPreviousYearTrendCall("NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=writing&grade=12&subscale=WRIRP&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType, code, "2016,2016");





    //calls["ArtsMusic4"] = "NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=music&grade=4&subscale=MUSRP&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2016,2008";
    //calls["ArtsMusic8"] = "NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=music&grade=8&subscale=MUSRP&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2016,2008";
    //calls["ArtsMusic12"] = "NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=music&grade=12&subscale=MUSRP&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2016,2008";
    //calls["ArtsVisualArts4"] = "NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=visualarts&grade=4&subscale=VISRP&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2016,2008";
    //calls["ArtsVisualArts8"] = "NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=visualarts&grade=8&subscale=VISRP&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2016,2008";
    //calls["ArtsVisualArts12"] = "NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=visualarts&grade=12&subscale=VISRP&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2016,2008";
    //calls["Math4"] = "NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=mathematics&grade=4&subscale=MRPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2015,2013";
    //calls["Math8"] = "NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=mathematics&grade=8&subscale=MRPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2015,2013";
    //calls["Math12"] = "NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=mathematics&grade=12&subscale=MWPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2015,2013";
    //calls["Reading4"] = "NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=reading&grade=4&subscale=RRPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2015,2013";
    //calls["Reading8"] = "NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=reading&grade=8&subscale=RRPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2015,2013";
    //calls["Reading12"] = "NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=reading&grade=12&subscale=RRPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2015,2013";
    //calls["Science4"] = "NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=science&grade=4&subscale=SRPUV&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2015,2009";
    //calls["Science8"] = "NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=science&grade=8&subscale=SRPUV&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2015,2011";
    //calls["Science12"] = "NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=science&grade=12&subscale=SRPUV&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2015,2009";
    //calls["Civics4"] = "NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=civics&grade=4&subscale=CIVRP&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2010,2006";
    //calls["Civics8"] = "NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=civics&grade=8&subscale=CIVRP&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2014,2010";
    //calls["Civics12"] = "NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=civics&grade=12&subscale=CIVRP&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2010,2006";
    //calls["Economics12"] = "NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=economics&grade=12&subscale=ERPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2012,2006";
    //calls["Geography4"] = "NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=geography&grade=4&subscale=GRPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2010,2001";
    //calls["Geography8"] = "NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=geography&grade=8&subscale=GRPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2014,2010";
    //calls["Geography12"] = "NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=geography&grade=12&subscale=GRPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2010,2001";
    // calls["TEL4"] = "NRCDataService/GetAdhocData.aspx?type=data&subject=tel&grade=4&subscale=TRPUN&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2014";
    // calls["TEL8"] = "NRCDataService/GetAdhocData.aspx?type=data&subject=tel&grade=8&subscale=TRPUN&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2014";
    // calls["TEL12"] = "NRCDataService/GetAdhocData.aspx?type=data&subject=tel&grade=12&subscale=TRPUN&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2014";
    //calls["History4"] = "NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=history&grade=4&subscale=HRPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2010,2006"
    //calls["History8"] = "NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=history&grade=8&subscale=HRPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2014,2010"
    //calls["History12"] = "NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=history&grade=12&subscale=HRPCM&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2010,2006"
    //calls["Writing4"] = "NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=writing&grade=4&subscale=WRIRP&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2002,1998";
    //calls["Writing8"] = "NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=writing&grade=8&subscale=WRIRP&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2011,2007";
    //calls["Writing12"] = "NRCDataService/GetAdhocData.aspx?type=sigacrossyear&subject=writing&grade=12&subscale=WRIRP&variable=TOTAL&jurisdiction=" + jurisdiction + "&stattype=" + statType + "&Year=2011,2007";
    return calls;
  }

  var firstTime = true;
  function UpdateReportCard(jurisdiction, statType){
    if(statType == "ALC:AD" || statType == "ALC:AP" || statType == "ALC:AB"){
      UpdateAchievementLevel(jurisdiction, statType);
    }else{
      GetTrendYearsAndUpdateTrend(jurisdiction, statType);
    }
  }

  function UpdateAchievementLevel(jurisdiction, statType){
    // if(!firstTime){
    //   $(".cover").show();
    // }else{
    //   firstTime = false;
    // }
    var newTitle = "PERCENTAGE OF STUDENTS";
    var statTypeLabel = statTypeCodes.getValueByKey("label", "code", statType);
    var words = statTypeLabel.split(' ')
    var lastWord = words.pop();
    var firstPart = words.join(" ");
    $("#rt").html("<span>" + newTitle + " " + firstPart.toUpperCase() + " <i>" + lastWord + "</i></span>");
    $(".color-legend").not(".donuts").hide();
    $(".color-legend.donuts").show();
    $(".cover").show();
    var calls = CreateCalls(jurisdiction, statType);
    var dataSets = new AjaxDataSets(calls, function () {
      $(".cover").hide();
      var dataSet = [];
      var subjects = ["ArtsMusic", "ArtsVisualArts", "Civics", "Economics", "Geography", "Math", "Reading", "Science", "TEL", "History", "Writing"];
      var grades = ["4", "8", "12"]
      for(var i = 0; i < subjects.length; i++){
        for(var j = 0; j < grades.length; j++){
          var code = subjects[i] + grades[j];
          var dataRows = dataSets.tables[code];
          if(dataRows != null && dataRows.result != null && dataRows.result.length > 0 && (typeof dataRows.result) != "string"){
            //if(subjects[i] + grades[j] == "Math8")
            var dataPoint;
            for(var k = 0; k < dataRows.result.length; k++){
              if(dataRows.result[k].value != 999){
                dataPoint = dataRows.result[k];
              }
            }
            dataSet[dataSet.length] = dataPoint;
          }else{
            dataSet[dataSet.length] = {"value": -1};
          }
        }
      }
      makeChart(dataSet);
    });
    dataSets.makeCalls();
  }

  var trendYears = {};
  function GetTrendYearsAndUpdateTrend(jurisdiction, statType){
    $(".cover").show();
    var calls = CreateCalls(jurisdiction, "MN:MN");
    var dataSets = new AjaxDataSets(calls, function () {
      var dataSet = [];
      var subjects = ["ArtsMusic", "ArtsVisualArts", "Civics", "Economics", "Geography", "Math", "Reading", "Science", "TEL", "History", "Writing"];
      var grades = ["4", "8", "12"]
      for(var i = 0; i < subjects.length; i++){
        for(var j = 0; j < grades.length; j++){
          var code = subjects[i] + grades[j];
          var dataRows = dataSets.tables[code];
          if(dataRows != null && dataRows.result != null && dataRows.result.length > 0 && (typeof dataRows.result) != "string"){
            var dataPoint;
            for(var k = 0; k < dataRows.result.length; k++){
              if(dataRows.result[k].value != 999){
                if(!trendYears[code]){
                  trendYears[code] = {};
                  trendYears[code].firstYear = dataRows.result[k].year + dataRows.result[k].sample;
                  trendYears[code].lastYear = dataRows.result[k].year + dataRows.result[k].sample;
                  //alert(code + " " + trendYears[code].firstYear + " " + trendYears[code].lastYear);
                } else {
                  trendYears[code].previousYear = trendYears[code].lastYear
                  trendYears[code].lastYear = dataRows.result[k].year + dataRows.result[k].sample;
                }
              }
            }
          }
        }
      }
      // alert("trend years of " + code + ": " + trendYears[code]);
      // alert(trendYears[code].firstYear);
      UpdateTrend(jurisdiction, statType);
    });
    dataSets.makeCalls();
  }

  function UpdateTrend(jurisdiction, statType){
    $(".color-legend").not(".arrows").hide();
    $(".color-legend.arrows").show();
    if(statType == "NL"){
      $("#rt").html("<span>Base Year Compared to Current Year</span>");
    }else if(statType = "AL"){
      $("#rt").html("<span>Most Recent Year Compared to Current Year</span>");
    }
  //   d3.json("nrc_redesign/data/makeprogressbaseyeardata.js", function(error, data){
  // })
    // if(!firstTime){
    //   $(".cover").show();
    // }else{
    //   firstTime = false;
    // }
    
    var calls = (statType == "NL") ? CreateTrendCallsBaseYear(jurisdiction, "MN:MN") : CreateTrendCallsPreviousYear(jurisdiction, "MN:MN");
    var dataSets = new AjaxDataSets(calls, function () {
      $(".cover").hide();
      var dataSet = [];
      var subjects = ["ArtsMusic", "ArtsVisualArts", "Civics", "Economics", "Geography", "Math", "Reading", "Science", "TEL", "History", "Writing"];
      var grades = ["4", "8", "12"];
      for(var i = 0; i < subjects.length; i++){
        for(var j = 0; j < grades.length; j++){
          var code = subjects[i] + grades[j];
          var dataPoint = dataSets.tables[code];
          if(dataPoint != null && dataPoint.result != null && dataPoint.result.length > 0 && (typeof dataPoint.result) != "string"){
            dataSet[dataSet.length] = dataPoint.result[1];
          }else{
            dataSet[dataSet.length] = {"value": -1, "grade": grades[j], "subject": subjects[i]};
          }
          // if(dataPoint != null && dataPoint.result != null && dataPoint.result.length > 0 && (typeof dataPoint.result) != "string"){
          //   dataSet[dataSet.length] = dataPoint.result[0];  
          // }else{
          //   var dataRow = {};
          //   dataRow = -1;
          //   dataSet[dataSet.length] = ;
          // }
        }
      }
      makeTrendChart(dataSet);
    });
    dataSets.makeCalls();
  }
  
  function main(){
    var subjects = ["music", "visual-arts", "civics", "economics", "geography", "math", "reading", "science", "tel", "history", "writing"];    
    for(var i = 0; i < jurisdictionCodes.length; i++){
      $(".jurisdiction-new .menu-section div:eq(" + i + ")").data("code", jurisdictionCodes[i].code);
    }
    for(var i = 0; i < statTypeCodes.length; i++){
      $(".result-new .menu-section div:eq(" + i + ")").data("code", statTypeCodes[i].code);
    }

    setValues({"jurisdiction": "NT", "statType": "ALC:AP"});
    for(var i = 0; i < subjects.length; i++){
      $(".nrc-report .options-menu").eq(i + 1).data("subject", subjects[i]);
    }
    loadEvents();
  }

  function loadEvents(){
    var blockBodyClick = false;
    $("body").on("click", function(){
      if(blockBodyClick){
        blockBodyClick = false;
        return;
      }       
      $(".nrc-report-list-menu").hide();
      //$(".nrc-report .dropdown-menu.jurisdiction").hide();
    });
    var isMainMenuOpen = false;
    $("#hamburger-icon").on("click", function(){    
      $(".icon").show();
      if(!isMainMenuOpen) {
        $(".header__top .nav-item").slideDown("slow");
      }else{
        $(".header__top .nav-item").slideUp("slow");
      }
      isMainMenuOpen = !isMainMenuOpen;
    })

    $(".icon").on("click", function(){      
      $(this).siblings(".sub-nav").toggle();
    })

    $(".nrc-report-list-menu").hide();
    $(".options-menu").on("click", function(){
      $(".nrc-report-list-menu div").hide();
      var statType = values["statType"];
      var graphType = (statType == "ALC:AD" || statType == "ALC:AP" || statType == "ALC:AB") ? "achievement-level" : "trend";
      $(".nrc-report-list-menu div." + $(this).data("subject") + "." + graphType).show();
      $(".nrc-report-list-menu").show();
      // var isTuda = (values["jurisdiction"] == "NL") ? true : false;
      // if(isTuda){
      //   $(".nrc-report-list-menu li").hide();
      //   $(".nrc-report-list-menu li.tuda").show();
      // } else {
      //   $(".nrc-report-list-menu li").show();
      //   $(".nrc-report-list-menu li.tuda").hide();
      // }

      //$(".nrc-report-list-menu").css("position", "absolute").css("left", $(this).offsetParent().offsetParent().position().left + $(this).position().left + 2)

      $(".nrc-report-list-menu").css("position", "absolute").css("left", $(this).offsetParent().offsetParent().position().left + 12);
      $(".nrc-report-list-menu").css("position", "absolute").css("top", $("table.report-card").offsetParent().position().top + $(this).position().top + $(this).height() - 1);
      return false;
    })
    
    
    $(".select-options.jurisdiction-new").autocompleteDropdown("jurisdiction", true, setValue);
    $(".select-options.jurisdiction-new .menu-section-header:not(:eq(0))").trigger("click");
    $(".select-options.result-new").autocompleteDropdown("statType", false, setValue);
  } //loadEvents

  function makeChart_v1(data){
    d3.select("table.report-card").selectAll("td").data(data).html(function(d){
      if(d == 0) { return "<img src='/subject/dashboard/gapsNoData.png'>" }
      var score = d * 360 / 100;
      var svgClass = "";
      if(d >= 10) svgClass = "opt-1";
      if(d >= 20) svgClass = "opt-2";
      if(d >= 30) svgClass = "opt-3";
      if(d >= 40) svgClass = "opt-4";
      // var color = "#000000";
      // if(d >= 10) color = "#889bc0";
      // if(d >= 20) color = "#666057";
      // if(d >= 30) color = "#00a796";
      // if(d >= 40) color = "#0a1971";
      var ret = "<circle aria-hidden='true' cx='20' cy='20' r='20' />";
      ret = ret + "<path aria-hidden='true' d = '" + describeArc(20, 20, 16, 0, score) + "' />";
      ret = ret + "<circle aria-hidden='true' cx='20' cy='20' r='15' />";
      ret = ret + "<text x='20' y='26'>" + Math.round(d) + "</text>";
      return "<svg viewBox='0 0 40 40' class='" + svgClass + "'>" + ret + "</svg>";
    });
  }

function makeChart(data) {
	var _ring = d3.svg.arc()
		.innerRadius(15)
		.outerRadius(20)
		.startAngle(0)
		.endAngle(Math.PI * 2)
	var _arc = d3.svg.arc()
		.innerRadius(15)
		.outerRadius(20)
		.startAngle(0)
		.endAngle( function(d) {
			return Math.PI * 2 * (d["value"] / 100)
		})
	var td = d3.select("table.report-card").selectAll("td")
		.data(data)
  td.html("");
  td.attr("title", function(d){
    var subject = subjectCodes.getValueByKey("label", "code", d["subject"]);
    var statType = statTypeCodes.getValueByKey("label", "code", d["stattype"]);
    var grade = d["grade"];
    var year = d["year"];
    if (d["value"] == -1)
      return "Data not available"
    else
      return subject + " " + year + " Grade " + grade;
  })
	var svg = td.append('svg')
		.attr('class', function(d) { 
			var i = parseInt(+d["value"] / 10)
			if (d["value"] == -1 || d["value"] == 999) {
				var that = d3.select(this)
					.attr('viewBox', '0 0 40 40')
				that.append('title')
					.text('no data')
				that.append('path')
					.attr('aria-hidden','true')
					.attr('d','m5,18h30v5h-30z')
				return 'achievement opt-0' 
			} else {
				var that = d3.select(this)
					.attr('viewBox', '0 0 40 40')
				that.append('title')
					.text(function(d) {
            var subject = subjectCodes.getValueByKey("label", "code", d["subject"]);
            var statType = statTypeCodes.getValueByKey("label", "code", d["stattype"]);
            var grade = d["grade"];
            var year = d["year"];
            return "Donut chart representing the stat for " + statType  + " in " + subject + " " + year + " grade " + grade + " with a value of " + d["value"] + "%"
            //return "Donut chart with a value of " + Math.round(d["value"]) + "%";
          })
				var g = that.append('g')
					.attr('aria-hidden','true')
					.attr('transform', 'translate(20,20)')
				g.append('path')
					.attr('class', 'donut-ring')
					.attr('d', _ring)
				g.append('path')
					.attr('class', 'donut-arc')
					.attr('d', _arc)
				g.append('text')
					.attr('x', '0px')
					.attr('y', '0.36em')
					.attr('text-anchor', 'middle')
					.text(function(d) { return Math.round(d["value"]); })
        if(i == 0) return "achievement opt-1";
        return "achievement opt-4";
				return (i>3)?'achievement opt-4':'achievement opt-'+i
			}
		});
   svg.attr("aria-label", function(d){
      var subject = subjectCodes.getValueByKey("label", "code", d["subject"]);
      var statType = statTypeCodes.getValueByKey("label", "code", d["stattype"]);
      var grade = d["grade"];
      var year = d["year"];
      return "Donut chart representing the stat for " + statType  + " in " + subject + " " + year + " grade " + grade + " with a value of " + d["value"] + "%";
   })
}

  function makeTrendChart(data){
    var td = d3.select("table.report-card").selectAll("td")
		  .data(data)
    td.html("");
    td.attr("title", function(d){
      if(d.value != "-1")
        return (subjectCodes.getValueByKey("label", "code", d.subject) + " " + d.targetYear + "-" + d.focalYear + " grade " + d.grade);
      else
        return "No data available";
    })
    var svg = td.append("svg")
      .attr("viewBox", function(d){
          if(d != null && d["sig"] == "HIGHER"){
            return "0 0 50 38";
          }
          else if(d != null && d["sig"] == "LOWER"){
            return "0 0 50 38";
          }else if(d != null && d["sig"] == "EQUAL"){
            return "0 0 36 36 ";
          }else{
            return "0 0 40 40";
          }
      })
      .attr("class", function(d){
          if(d != null && d["sig"] == "HIGHER"){
            return "percentage up-trend";
          }
          else if(d != null && d["sig"] == "LOWER"){
            return "percentage down-trend";
          }else if(d != null && d["sig"] == "EQUAL"){
            return "percentage no-trend ";
          }else{
            return "percentage opt-0";
          }
      })
      .attr("aria-label", function(d){
          if(d != null && d["sig"] == "HIGHER"){
            return "Up arrow showing showing in " + d.subject + " grade " + d.grade + ", scores in " + d["focalYear"] + " were significantly " + d["sig"] + " than scores in " + d.targetYear;
          }
          else if(d != null && d["sig"] == "LOWER"){
            return "Down arrow showing showing in " + d.subject + " grade " + d.grade + ", scores in " + d["focalYear"] + " were significantly " + d["sig"] + " than scores in " + d.targetYear;
          }
          else if(d != null && d["sig"] == "EQUAL"){
            return "For " + d.subject + " " + d.grade + ", scores in " + d["focalYear"] + " were not significantly different than scores in " + d.targetYear;
          }else{
            return "Not enough info";
          }
      })
      svg.append("title")
        .text(function(d){
          if(d != null && d["sig"] == "HIGHER" || d["sig"] == "LOWER"){
            return "Up arrow showing showing in " + d.subject + " grade " + d.grade + ", scores in " + d["focalYear"] + " were significantly " + d["sig"] + " than scores in " + d.targetYear;
          }
          else if(d != null && d["sig"] == "HIGHER" || d["sig"] == "LOWER"){
            return "Down arrow showing showing in " + d.subject + " grade " + d.grade + ", scores in " + d["focalYear"] + " were significantly " + d["sig"] + " than scores in " + d.targetYear;
          }
          else if(d != null && d["sig"] == "EQUAL"){
            return "For " + d.subject + " " + d.grade + ", scores in " + d["focalYear"] + " were not significantly different than scores in " + d.targetYear;
          }else{
            return "Not enough info";
          }
      })
    svg.append("path")
        .attr("d", function(d){
          if(d != null && d["sig"] == "HIGHER"){
            return "M0,18 l25,-18 l25,18 h-7 v20 h-36 v-20 h-7";
          }
          else if(d != null && d["sig"] == "LOWER"){
            return "M0,20 l25,18 l25,-18 h-7 v-20 h-36 v20 h-7";
          }else if(d != null && d["sig"] == "EQUAL"){
            return "M0,18 l18,-18 l18,18 l-18,18 l-18-18";
          }else{
            return "m5,18h30v5h-30z";
          }
        })
    svg.append("text")
        .text(function(d){
          if(d != null && d["sig"] == "HIGHER"){
            return Math.round(d["gap"]);
          }
          else if(d != null && d["sig"] == "LOWER"){
            return Math.abs(Math.round(d["gap"]));
          }
          // if(d != null && d["sig"] == "HIGHER"){
          //   return "M0,18 l25,-18 l25,18 h-7 v20 h-36 v-20 h-7";
          // }
          // else if(d != null && d["sig"] == "LOWER"){
          //   return "M0,20 l25,18 l25,-18 h-7 v-20 h-36 v20 h-7";
          // }else if(d != null && d["sig"] == "EQUAL"){
          //   return "M0,18 l18,-18 l18,18 l-18,18 l-18-18";
          // }
        }).attr("text-anchor", "middle").attr("x", 25).attr("y", function(d){
           if(d != null && d["sig"] == "HIGHER"){
            return 25;
          }
          else if(d != null && d["sig"] == "LOWER"){
            return 19;
          }
        });
    var span = td.append("span")
    span.attr("class", "year");
    span.html(function(d){
      if(d != null && d["sig"] == "HIGHER"){
        return d["targetYear"] + " - " + d["focalYear"]
      }
      else if(d != null && d["sig"] == "LOWER"){
        return d["targetYear"] + " - " + d["focalYear"]
      }else if(d != null && d["sig"] == "EQUAL"){
        return d["targetYear"] + " - " + d["focalYear"]
      }
    })
      
    // d3.select("table.report-card").selectAll("td")
    //   .data(data)
    //   .enter()
    //   .append("svg");
    
    // d3.select("table.report-card").selectAll("td").data(data).html(function(d){
    //   var subject = subjectCodes.getValueByKey("label", "code", d["subject"]);
    //   var statType = statTypeCodes.getValueByKey("label", "code", d["stattype"]);
    //   var grade = d["grade"];
    //   if(d != null && d["sig"] == "HIGHER"){
    //     var title = "For grade " + grade + " " +  subject + ", " + d["focalYear"] + " scores were significantly higher than " +  d["targetYear"] + " scores with a difference of " + (d["gap"]);
    //     //return "<span title = '" + title + "' class= 'percentage' style = 'padding-top:20px;background-image:url(nrc_redesign/images/arrow-up.svg);background-repeat:no-repeat;background-position:center;color:white;display:inline-block;height:55px;width:100px;font-size:11pt;'>" + Math.round(d["gap"]) + "</span><br/>" + "<span class= 'year'>" + d["targetYear"] + "-" + d["focalYear"] + "</span>"
    //     return "<span title = '" + title + "' class= 'percentage up-trend' >" + Math.round(d["gap"]) + "</span><br/>" + "<span class= 'year'>" + d["targetYear"] + " - " + d["focalYear"] + "</span>"
    //   }else if(d != null && d["sig"] == "LOWER"){
    //     var title = "For grade " + grade + " " +  subject + ", " + d["focalYear"] + " scores were significantly lower than " +  d["targetYear"] + " scores with a difference of " + Math.abs(d["gap"]);
    //     return "<span title = '" + title + "' class= 'percentage down-trend' >" + Math.abs(Math.round(d["gap"])) + "</span><br/>" + "<span class= 'year'>" + d["targetYear"] + " - " + d["focalYear"] + "</span>"
    //   }else if(d != null && d["sig"] == "EQUAL"){
    //     var title = "For grade " + grade + " " +  subject + ", " + d["focalYear"] + " scores were not significantly different to " +  d["targetYear"] + " scores";
    //     //return "<span title = '" + title + "' class= 'percentage' style = 'padding-top:15px;background-image:url(nrc_redesign/images/diamond.svg);color:white;display:inline-block;height:55px;width:55px;font-size:11pt;'></span><br/>" + "<span class= 'year'>" + d["targetYear"] + "-" + d["focalYear"] + "</span>"
    //     return "<span title = '" + title + "' class= 'percentage no-trend' ></span><br/>" + "<span class= 'year'>" + d["targetYear"] + " - " + d["focalYear"] + "</span>"
    //   }else{
    //     var subject = d["subject"];
    //     var title = "for grade " + grade + " " +  subject + ", there is not data";
    //     return "<svg viewBox='0 0 40 6' class='opt-0'><title>title = '" + title + "'</title><path aria-hidden='true' d='m5,0h30v6h-30z'/></svg>"
    //   }
    // });
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