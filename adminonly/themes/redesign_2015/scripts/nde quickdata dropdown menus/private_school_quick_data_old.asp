<%  NavURL = "/nationsreportcard/about/nonpublicschools.asp" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<HTML>
	<HEAD>
		<title>
			NAEP About - Private School NAEP Results Online

		</title>
		<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7">
		<META content="text/html; charset=ISO-8859-1" http-equiv="Content-Type">
		<!-- General Include File for the Publication (Navigation and Meta info) Start Here -->
		<!--#include virtual="/nationsreportcard/inc/GeneralPubInfo_inc.asp" -->
		<!-- Master Style sheet from root of site -->
		<LINK rel="stylesheet" type="text/css" href="/css/pubs2.css">
		<META http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<meta name="keywords" content="private schools, nonpublicschools, results, data">
<meta name="description" content="NAEP About - Private School NAEP Results Online. Quick access to NAEP Data Explorer results for private schools.">

		<meta name="ROBOTS" content="FOLLOW,INDEX">


		<LINK rel="stylesheet" type="text/css" href="/nationsreportcard/inc/naep2010.css">
		<style>
			form#nde_selector {
				background-color: rgb(255, 236, 196);
				border: 1px solid black;
				margin: auto;
				padding: 0.5em;
				width: 32em;
				text-align: left;
				}
			form#nde_selector table { border: none; }
			form#nde_selector select { margin: 0.25em; }
			form#nde_selector input { margin: 0.25em; }
		</style>
		<script language="JavaScript1.1" type="text/javascript" src="/nationsreportcard/inc/win.js"></script>
<script type="text/javascript" language="javascript">
var blnnrchost = false
var subject = "CIV"
var scale = "CIVRP"
var grade = "1"
var framework = "-2-"
var jurisdiction = "NT"
var variable = "SCHTYPE"
var statistics = "MN_MN"
var years = "20073,20053,20033,20023,20003,20002,19983,19982,19942,19922"
var dbase = "NDE"
var naephost = "/nationsreportcard/naepdata/report.aspx?"
var nrchost = ""
var linkstring = naephost + "p=" + grade + "-" + subject + framework + years + "-" + scale + "-" + variable + "-" + jurisdiction + "-" + statistics + "-Y_J-0-0-5"


var civ = 0

var civList = new Array()

	civList[civ++] = "Grade 4"

	civList[civ++] = "National"

	civList[civ++] = "Grade 8"

	civList[civ++] = "National"

	civList[civ++] = "Grade 12"

	civList[civ++] = "National"



var ecn = 0

var ecnList = new Array()

	ecnList[ecn++] = "Grade 12"

	ecnList[ecn++] = "National"

var geo = 0

var geoList = new Array()

	geoList[geo++] = "Grade 4"

	geoList[geo++] = "National"

	geoList[geo++] = "Grade 8"

	geoList[geo++] = "National"

	geoList[geo++] = "Grade 12"

	geoList[geo++] = "National"


var his = 0

var hisList = new Array()

	hisList[his++] = "Grade 4"

	hisList[his++] = "National"

	hisList[his++] = "Grade 8"

	hisList[his++] = "National"

	hisList[his++] = "Grade 12"

	hisList[his++] = "National"

	

	

var mat = 0

var matList = new Array()

	matList[mat++] = "Grade 4"

	matList[mat++] = "National"

	matList[mat++] = "Grade 8"

	matList[mat++] = "National"

	matList[mat++] = "Grade 12"

	matList[mat++] = "National"



var mus = 0

var musList = new Array()

	musList[mus++] = "Grade 8"

	musList[mus++] = "National"



var red = 0

var redList = new Array()

	redList[red++] = "Grade 4"

	redList[red++] = "National"

	redList[red++] = "Grade 8"

	redList[red++] = "National"

	redList[red++] = "Grade 12"

	redList[red++] = "National"



var sci = 0

var sciList = new Array()

	sciList[sci++] = "Grade 4"

	sciList[sci++] = "National"

	sciList[sci++] = "Grade 8"

	sciList[sci++] = "National"

	sciList[sci++] = "Grade 12"

	sciList[sci++] = "National"



var vis = 0

var visList = new Array()

	visList[vis++] = "Grade 8"

	visList[vis++] = "National"



var wri = 0

var wriList = new Array()

	wriList[wri++] = "Grade 4"

	wriList[wri++] = "National"

	wriList[wri++] = "Grade 8"

	wriList[wri++] = "National"

	wriList[wri++] = "Grade 12"

	wriList[wri++] = "National"

	

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

	document.getElementById('variid').selectedIndex = 0;

	document.getElementById('statid').selectedIndex = 0;



}





function changesubject(selsubject) {

	removeAllOptions(document.nde_selector.gradeid)

	addOption(document.nde_selector.gradeid,"Select Grade","Select Grade")

	

	switch(selsubject.selectedIndex)

	{

	case 0:

		break;

	case 1: //civics

		dbase = "NDE"

		subject = "CIV"

		scale = "CIVRP"

		for (x=1;x<civList.length/2+1;x++){

				addOption(document.nde_selector.gradeid,civList[(x-1)*2],civList[(x-1)*2])

		}

		break;

	case 2: //econ

		dbase = "NDE"

		subject = "ECN"

		scale = "ERPCM"

		for (x=1;x<ecnList.length/2+1;x++){

				addOption(document.nde_selector.gradeid,ecnList[(x-1)*2],ecnList[(x-1)*2])

		}



		break;


	case 3: //geography

		dbase = "NDE"

		subject = "GEO"

		scale = "GRPCM"

		for (x=1;x<geoList.length/2+1;x++){

				addOption(document.nde_selector.gradeid,geoList[(x-1)*2],geoList[(x-1)*2])

		}



		break;


	case 4: //math

		dbase = "NDE"

		subject = "MAT"

		scale = "MRPCM"

		for (x=1;x<matList.length/2+1;x++){

				addOption(document.nde_selector.gradeid,matList[(x-1)*2],matList[(x-1)*2])

		}



		break;

	case 5: //music

		dbase = "NDE"

		subject = "MUS"

		scale = "MUSRP"

		for (x=1;x<musList.length/2+1;x++){

				addOption(document.nde_selector.gradeid,musList[(x-1)*2],musList[(x-1)*2])

		}



		break;

		

	case 6: //reading

		dbase = "NDE"

		subject = "RED"

		scale = "RRPCM"

		for (x=1;x<redList.length/2+1;x++){

				addOption(document.nde_selector.gradeid,redList[(x-1)*2],redList[(x-1)*2])

		}

		

		break;

	case 7: //science

		dbase = "NDE"

		subject = "SCI"

		scale = "SRPUV"

		for (x=1;x<redList.length/2+1;x++){

				addOption(document.nde_selector.gradeid,redList[(x-1)*2],redList[(x-1)*2])

		}



		break;

	case 8: //history

		dbase = "NDE"

		subject = "HIS"

		scale = "HRPCM"

		for (x=1;x<hisList.length/2+1;x++){

				addOption(document.nde_selector.gradeid,hisList[(x-1)*2],hisList[(x-1)*2])

		}



		break;

	case 9: //visual arts

		dbase = "NDE"

		subject = "VIS"

		scale = "VISRP"

		for (x=1;x<visList.length/2+1;x++){

				addOption(document.nde_selector.gradeid,visList[(x-1)*2],visList[(x-1)*2])

		}



		break;

	case 10: //writing

		dbase = "NDE"

		subject = "WRI"

		scale = "WRIRP"

		for (x=1;x<wriList.length/2+1;x++){

				addOption(document.nde_selector.gradeid,wriList[(x-1)*2],wriList[(x-1)*2])

		}



		break;



	

	}

	



}



function changegrade(selgrade) {

		

	switch(selgrade.value)

	{

	case "Grade 4":

		grade = "1"

		break;

	case "Grade 8":

		grade = "2"

		break;

	case "Grade 12":

		grade = "3"

		break;



	}



}







function changevari(selvari) {

	

	switch(selvari.selectedIndex)

	{

	case 0:

		break;

	case 1:

		variable = "SCHTYP2"

		break;

	case 2:

		variable = "SCHTYPE"

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

			case (document.getElementById('variid').selectedIndex==0):

				alert("Please select a variable");

				break;

			case (document.getElementById('statid').selectedIndex==0):

				alert("Please select a statistic");

				break;

		

			default:

				switch(subject){

					case (subject="CIV"):

						years = "20103,20063,19983"

						framework = "-2-"

						break;

					case (subject="ECN"):

						years = "20063"

						framework = "-2-"

						break;
						
					case (subject="GEO"):
						years = "20103,20013,20012,19942"
						framework = "-2-"
						break;

					case (subject="MAT"):

						years = "20113,20093,20073,20053,20033,20003,20002,19963,19962,19922,19902"

						framework = "-2-"

						if(document.getElementById('gradeid').value=="Grade 12"){

							framework = "-3-"

							years = "20053"

							}

						break;

					case (subject="MUS"):

						years = "20083"

						framework = "-2-"

						break;

					case (subject="RED"):

						years = "20113,20093,20073,20053,20033,20023,20003,20002,19983,19982,19942,19922"

						framework = "-2-"

						break;

				

					case (subject="SCI"):

						years = "20093"

						framework = "-3-"

						break;

					case (subject="HIS"):

						years = "20063,20013,20012,19942"

						framework = "-2-"

						break;

					case (subject="VIS"):

						years = "20083"

						framework = "-2-"

						break;

					case (subject="WRI"):

						years = "20073,20023,19983"

						framework = "-2-"

						break;

				}



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
	</HEAD>
	<BODY id="PageBody" leftMargin="0" topMargin="0" bgColor="#ffffff" marginwidth="0" marginheight="0" class="">

		<!--#include virtual="/inc/header_inc.asp" -->
		<input name="pagePath" id="pagePath" type="hidden" value="/nationsreportcard/about/private_school_quick_data.asp" />

		<div class="MainContent">
			<!--#include virtual="/nationsreportcard/inc/banner_inc.asp" -->
			<div id="PubContent">


				<div id="MenuLeft" class="dontPrintMe">
					<!--#include virtual="/nationsreportcard/inc/PubNavigation_inc.asp" -->
				</div>
					<div id="ContentRight" class="">
						<div id="contentWrapper">

	<h2>Private School NAEP Results Online</h2>
<p>NAEP assesses representative samples of private school students at grades 4, 8, and 12 (or at ages 9, 13, and 17 for the long-term trend assessment) with each assessment. Private school results are reported whenever at least 70% of the schools in the sample participate. The symbol ‡ shows up in the tables or charts whenever the data could not be reported.</p>
<p>For a quick but detailed look at results for private and public schools, use the Private School Quick Data tool below.  Select the subject and grade, then select whether you want to see the data broken out by two categories (public and private schools) or by five categories (including Catholic, other private schools, and schools of the Bureau of Indian Education and the Department of Defense). Then press "Show table." This will take you to a results table in the NAEP Data Explorer (NDE), in a new tab or window.</p>

<div style="text-align: center;">
	<form name="nde_selector" id="nde_selector">
		<div style="margin-bottom: 0.25em;">
			<strong>Private School Quick Data</strong>
		</div>
		<div style="float: left; width: 9em; text-align: right;">
			<select name="subjectid" id="subjectid" onchange="changesubject(this);">
				<option>Select subject</option>
				<option>Civics</option>
				<option>Economics</option>
                <option>Geography</option>
				<option>Mathematics</option>
				<option>Music</option>
				<option>Reading</option>
				<option>Science</option>
				<option>U.S. History</option>
				<option>Visual Arts</option>
				<option>Writing</option>
			</select>
			<br />
			<select name="gradeid" id="gradeid" onchange="changegrade(this);">
				<option>Select grade</option>
				<option>Grade 4</option>
				<option>Grade 8</option>
				<option>Grade 12</option>
			</select>
			<br /> &nbsp;
		</div>
		<div style="text-align: right; margin-left: 10em; width:22em;">
			<select name="variid" id="variid" onchange="changevari(this);">
				<option>Select variable</option>
				<option>Public or private school (2 category)</option>
				<option>Public or nonpublic school (5 category)</option>
			</select>
			<br />
			<select name="statid" id="statid" onchange="changestat(this);">
				<option>Select statistic</option>
				<option>Average Scale Score</option>
				<option>Achievement Level (Cumulative)</option>
				<option>Percentiles</option>
			</select>
			<br />
			<input value="show table" onclick="showtable();" type="button">

		</div>
	</form>
</div>

<p>Once you see the results in the NDE, you can explore them further by customizing your tables or viewing them in a variety of chart formats, such as these:</p>


<div><img src="/nationsreportcard/images/about/private_sample_graphs.gif" width="610" height="207" alt="Images of just three of the customizable graph types available in NDE: horizontal bar, line, and pie charts."></div>
<p>To learn more about how to use the NDE, watch a <a target="videowindow" href="/nationsreportcard/videos/ndeintrovideo.asp" onclick="window.open('',this.target,'toolbar=no,location=no,directories=no,resizable=yes,menubar=no,width=700,height=620,screenX=0,screenY=0,top=0,left=0')" onkeypress="javascript:window.open('',this.target,'toolbar=no,location=no,directories=no,resizable=yes,menubar=no,width=700,height=620,screenX=0,screenY=0,top=0,left=0')" title="NDE introduction video">short video</a> or use the <a href="/nationsreportcard/pdf/NDEQuickReferenceGuideWebVersion05.18.09.pdf">Quick Reference Guide</a> (595K <a href="/nationsreportcard/help.asp#pdf">PDF</a>). Learn about additional NDE features from the <a target="_blank" href="/nationsreportcard/ndehelp/tutorial/lesson1.asp" onclick="window.open('/nationsreportcard/ndehelp/tutorial/lesson1.asp', '_blank','width=1028,height=800,screenX=0,screenY=0, top=0,left=0,resizable=yes,scrollbars=yes,menubar=yes,location=yes,status=no,toolbar=yes');return false" onkeypress="window.open('/nationsreportcard/ndehelp/tutorial/lesson1.asp', '_blank','width=1028,height=800,screenX=0,screenY=0,top=0,left=0,resizable=yes,scrollbars=yes,menubar=yes,location=yes,status=no,toolbar=yes');return false">tutorial</a> or access <a href="/nationsreportcard/NDEHelp/WebHelp/NDE_Help_Main.htm">Help</a> from every page of the tool.</p>
<p>The links on the <a href="/nationsreportcard/about/nonpublicschools.asp">Private and Other Nonpublic Schools</a> page show you the results from the Nationsreportcard.gov website, where you will find detailed information about the report for that assessment.</p>



							<div class="pageupdated"><hr noshade size="1">
								<span>Last updated 04 February 2011 (NB)</span>
							</div>
						</div>
					</div>
					<div id="RightCol" style="display:none;width:0px;">



					</div>

					</div>
		</div>
		<DIV style="CLEAR: both">
			<!--#include virtual="/inc/footer_inc.asp" --></DIV>
	</BODY>
</HTML>
