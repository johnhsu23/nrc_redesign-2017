
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<HTML><!-- #INCLUDE virtual="/renderofftab.asp" -->

	<HEAD>
		<title>
			NIES Data Tool - State/Region

		</title>
		<meta name="ROBOTS" content="FOLLOW,INDEX">


		
<link href="/Math_2009/inc/nrcmainstyles.css" type="text/css" rel="stylesheet">
<link href="/Math_2009/inc/nrcleftnavstyles.css" type="text/css"
	rel="stylesheet">
<link rel="stylesheet" type="text/css" href="/Math_2009/inc/reset-fonts-grids.css">
<link rel="stylesheet" type="text/css" href="/Math_2009/inc/base.css">
<link rel="stylesheet" type="text/css" href="/Math_2009/inc/NRC2009.css">
<link rel="stylesheet" type="text/css" href="/Math_2009/inc/tabsWithinContent.css">
<script language="JavaScript" src="/Math_2009/inc/nrcmain.js" type="text/javascript"></script>
<script language="JavaScript" src="/Math_2009/inc/swfcheck.js" type="text/javascript"></script>
<script language="JavaScript" src="/Math_2009/inc/alertonce.js" type="text/javascript"></script>
<script language="JavaScript" src="/top_inc/svgcheck.js" type="text/javascript"></script>

<script type="text/javascript" src="/math_2009/inc/tabsWithinContent.js"></script>
<script type="text/javascript" src="/math_2009/inc/NRCConfigurator.js"></script>
<script type="text/javascript" src="/math_2009/inc/templateStretcher.js"></script>

		<link rel="stylesheet" type="text/css" href="/Math_2009/inc/PlainWithLeftNav.css">
		<!--[if lte IE 7]>
			<link rel="stylesheet" type="text/css" href="/Math_2009/inc/ie7specifics.css" />
		<![endif]-->
		<META http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<meta name="keywords" content="css playground">
<meta name="description" content="NAEP Report Cards - CSS Playground">
<script type="text/javascript" language="javascript">


var blnnrchost = false
var subject = "MAT"
var scale = "MRPCM"
var grade = "1"
var framework = "-2-"
var jurisdiction = "NB,QK,QZ,QN,QT,QM,QC,QD,QO,QR,QS,QU,QA"
var variable = "TOTAL"
var statistics = "MN_MN"
var years = "20113,20093,20073,20053"
var nrchost = "/data/nde_access.asp?app="
var dbase = "NDE"
var naephost = "https://publicsite.naepdev.org/nationsreportcard/niesdata/report.aspx?"

var linkstring = naephost + "p=" + grade + "-" + subject + "-2-" + years + "-" + scale + "-" + variable + "-" + jurisdiction + "-" + statistics + "-Y_J-0-0-5"


	
var mat = 0
var matList = new Array()
	matList[mat++] = "Grade 4"
	matList[mat++] = "National"
	matList[mat++] = "Grade 8"
	matList[mat++] = "States/Region"

var red = 0
var redList = new Array()
	redList[red++] = "Grade 4"
	redList[red++] = "National/All States/All Districts"
	redList[red++] = "Grade 8"
	redList[red++] = "States/Region"

	
	var gradeList = new Array()
	var gradeID = new Array()
	var jurdList = new Array()


function addOption(selectbox,text,value ){
	var optn = document.createElement("OPTION");
	optn.text = text;
	optn.value = value;
	selectbox.options.add(optn);
}

function removeAllOptions(selectbox){
	var i;
	for(i=selectbox.options.length-1;i>=0;i--)
	{
	selectbox.remove(i);
	}
}
function onload(){
	document.getElementById('subjectid').selectedIndex = 0;
	document.getElementById('gradeid').selectedIndex = 0;
	document.getElementById('jurdid').selectedIndex = 0;
	document.getElementById('statid').selectedIndex = 0;

}


function changesubject(selsubject) {
	removeAllOptions(document.nde_selector.gradeid)
	addOption(document.nde_selector.gradeid,"Select Grade","Select Grade")
	
	switch(selsubject.selectedIndex)
	{
	case 0:
		break;

		
	case 1: //math
		dbase = "NDE"
		subject = "MAT"
		scale = "MRPCM"
		for (x=1;x<matList.length/2+1;x++){
				addOption(document.nde_selector.gradeid,matList[(x-1)*2],matList[(x-1)*2])
		}

		break;
	case 2: //reading
		dbase = "NDE"
		subject = "RED"
		scale = "RRPCM"
		for (x=1;x<redList.length/2+1;x++){
				addOption(document.nde_selector.gradeid,redList[(x-1)*2],redList[(x-1)*2])
		}
		
		break;

	
	}
	

}

function changegrade(selgrade) {
//	var jurdRaw

//	removeAllOptions(document.nde_selector.jurdid)
//	addOption(document.nde_selector.jurdid,"Select Jurisdiction","Select Jurisdiction")

	
	switch(selgrade.value)
	{
	case "Grade 4":
		grade = "1"
		break;

	case "Grade 8":
		grade = "2"
		break;

	}


}

function changejurd(seljurd) {
	
	switch(seljurd.selectedIndex)
	{
	case 1:
		jurisdiction = "NB,QK,QZ,QN,QT,QM,QC,QD,QO,QR,QS,QU,QA"
		break;
	case 2:
		jurisdiction = "I1,I2,I3,I4,I5"
		break;
	
	}

}



function changestat(selstat) {

	switch(selstat.selectedIndex)
	{
	case 0:
		break;
	case 1:
		statistics = "MN_MN"
		break;
	case 2:
		statistics = "ALC_BB,ALC_AB,ALC_AP,ALC_AD"
		
		break;
	case 3:
		statistics = "PC_P1,PC_P2,PC_P5,PC_P7,PC_P9"
		break;
	case 4:
		statistics = "RP_RP"
		break;
	}


}

function showtable(){
	
		switch(true){
			case (document.getElementById('subjectid').selectedIndex==0):
				alert("Please select a subject");
				break;
			case (document.getElementById('gradeid').selectedIndex==0):
				alert("Please select a grade");
				break;
//			case (document.getElementById('jurdid').selectedIndex==0):
//				alert("Please select a jurisdiction");
//				break;
//			case (document.getElementById('statid').selectedIndex==0):
//				alert("Please select a statistic");
//				break;
		
			default:
				switch(subject){
					case (subject="MAT"):
							framework = "-2-"
							scale = "MRPCM"
					
							break;
					case (subject="RED"):
						framework = "-2-"
						break;
				
				}
			years = "20113,20093,20073,20053"
			
//			switch(variable){
//				case (variable=="SDRACE"):
//					years = "20113"
//					break;
//				case (variable=="UTOL4"):
//					years = "20113,20093,20073"
//					break;
			
//			}
			if(blnnrchost==true){
				linkstring = nrchost + dbase + "&" + "p=" + grade + "-" + subject + framework + years + "-" + scale + "-" + variable + "-" + jurisdiction + "-" + statistics + "-Y_J-0-0-5"
			}
			else{
				linkstring = naephost + "p=" + grade + "-" + subject + framework + years + "-" + scale + "-" + variable + "-" + jurisdiction + "-" + statistics + "-Y_J-0-0-5"
			}
				var oldWin = window.open(linkstring,"ndewindow");
				oldWin.focus();
					
					break;
			
		}
}



</script>
	<link rel="stylesheet" type="text/css" href="/app_themes/nrc3/Styles/nrc3.css" /><link rel="stylesheet" type="text/css" href="/app_themes/nrc2/Styles/nrc2.css" /> <link rel="stylesheet" type="text/css" href="/app_themes/nrc1/Styles/nrc1.css" /> 
</HEAD>
	<body class="bodycolor">
		<div id="doc4" class="yui-t1">
			<div id="container">
				
<map id="nrcBannerImageMap" name="nrcBannerImageMap">
	<area href="/" alt="Nation's Report Card Home" shape="rect" coords="0,0,127,75" />
</map>
<form action="http://nces.ed.gov/search/index.asp?output=xml_no_dtd&client=nces&sort=date%3AD%3AL%3Ad1&entqr=3&site=nationsreportcard">
	<div id="header">
		<a href="#skip_navigation"><img height="1" alt="Skip navigation" src="/Math_2009/images/spacer.gif"
				width="1" border="0" style="display:block"></a> <img src="/Math_2009/images/nrcbanner.jpg" width="984" height="75"
			usemap="#nrcBannerImageMap" alt="Nation's Report Card Banner" />
		<div id="headerLinks">
		<a href="/">Home</a>&nbsp;|&nbsp;<a href="/about.asp">About The Nation's Report 
				Card</a>&nbsp;|&nbsp;<a onclick="javascript:openWin('/help.asp', 600, 560); return false;"
				href="/help.asp"
				target="helpwindow">Help</a>
			<span id="searchArea">
				<input type="text" id="searchBox" name="q" maxlength="256" title="Search Box" />
				<input type="submit" id="searchButton" value="Search" title="Search Button" /> 
				<input name="output" type="hidden" value="xml_no_dtd" />
				<input name="client" type="hidden" value="nces" /> 
				<input name="sort" type="hidden" value="date:D:L:d1" />
				<input name="entqr" type="hidden" value="3" /> 
				<input name="site" type="hidden" value="nationsreportcard" />
			</span>
		</div>
		<div id="tagLine">
			<a href="http://nces.ed.gov/nationsreportcard/">...the official site for results from the National Assessment of 
				Educational Progress</a>
		</div>
	</div>
</form>

				
					<div id="body">
						<div id="yui-main">
							<div class="yui-b">
								<div id="pageContent">
									<a name="skip_navigation"></a>
									<table id="Ewebeditorwithdefaultcontent2" cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td>
	
<div align="right">
<form name="nde_selector" id="nde_selector">
  <select name="subjectid" id="subjectid" onchange="changesubject(this);">
<option>Select subject</option>
<option>Mathematics</option>
<option>Reading</option>
</select>
<br>
<select name="gradeid" id="gradeid" onchange="changegrade(this);">
<option>Select grade</option>
<option>Grade 4</option>
<option>Grade 8</option>

</select>
<br>

<select name="jurdid" id="jurdid" onchange="changejurd(this);">
<option>Select jurisdiction</option>
<option>State</option>
<option>Region</option>
</select>


<br>
<select name="statid" id="statid" onchange="changestat(this);">
<option>Select statistic</option>
<option>Average Scale Score</option>
<option>Achievement Level (Cumulative)</option>
<option>Percentiles</option>
<option>Percentage of Students</option>
</select>

<br>
<input value="show table" onclick="showtable();" type="button">
</form>
</div>






</td></tr></table>
								</div>
							</div>
						</div>
						<div class="yui-b">
							<ul class="leftNav">

</ul>
<span>Left Nav Error: Please check your configurations and try it again.</span>
						</div>
					</div>
					
<div id="ft">
	<div id="footer">
		<img src="/Math_2009/images/bottomRule.jpg" width="100%" height="2"
			alt="Separator between content and footer sections" /><br />
		<a href="http://nces.ed.gov/nationsreportcard/">National Assessment of Educational Progress</a>,
		<a href="http://nces.ed.gov/">National Center for Education Statistics</a><br />
		<a href="http://www.nagb.org/">National Assessment Governing Board</a><br />
		<a href="http://ies.ed.gov/">Institute of Education Sciences</a>, 
		<a href="http://ed.gov/">U.S. Department of Education </a>
	</div>
</div>

					<span id="MetaTags1"></span>
					<span id="NRCConfigurator1"></span>
					
				
			</div>
		</div>
	</body>
</HTML>
