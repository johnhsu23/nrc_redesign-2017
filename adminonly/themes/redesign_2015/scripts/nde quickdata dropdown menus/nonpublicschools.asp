<%  NavURL = "/nationsreportcard/about/nonpublicschools.asp" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<HTML>
	<HEAD>
		<title>
			NAEP - Private and Other Nonpublic Schools and the Nation's Report Card

		</title>
		<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7">
		<META content="text/html; charset=ISO-8859-1" http-equiv="Content-Type">
		<!-- General Include File for the Publication (Navigation and Meta info) Start Here -->
		<!--#include virtual="/nationsreportcard/inc/GeneralPubInfo_inc.asp" -->
		<!-- Master Style sheet from root of site -->
		<LINK rel="stylesheet" type="text/css" href="/css/pubs2.css">
		<META http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<meta name="keywords" content="nonpublic schools, private schools, Catholic, Lutheran, Christian, Private School Universe Survey (PSS), oversampling, BIE, Bureau of Indian Education, Department of Defense (DoD)">
<meta name="description" content="NAEP assessment of student performance in U.S. private (nonpublic) schools. NAEP selects samples representing the broad spectrum of nonpublic schools at grade 4, 8, and 12.">
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



	case 3: //math

		dbase = "NDE"

		subject = "MAT"

		scale = "MRPCM"

		for (x=1;x<matList.length/2+1;x++){

				addOption(document.nde_selector.gradeid,matList[(x-1)*2],matList[(x-1)*2])

		}



		break;

	case 4: //music

		dbase = "NDE"

		subject = "MUS"

		scale = "MUSRP"

		for (x=1;x<musList.length/2+1;x++){

				addOption(document.nde_selector.gradeid,musList[(x-1)*2],musList[(x-1)*2])

		}



		break;

		

	case 5: //reading

		dbase = "NDE"

		subject = "RED"

		scale = "RRPCM"

		for (x=1;x<redList.length/2+1;x++){

				addOption(document.nde_selector.gradeid,redList[(x-1)*2],redList[(x-1)*2])

		}

		

		break;

	case 6: //science

		dbase = "NDE"

		subject = "SCI"

		scale = "SRPUV"

		for (x=1;x<redList.length/2+1;x++){

				addOption(document.nde_selector.gradeid,redList[(x-1)*2],redList[(x-1)*2])

		}



		break;

	case 7: //history

		dbase = "NDE"

		subject = "HIS"

		scale = "HRPCM"

		for (x=1;x<hisList.length/2+1;x++){

				addOption(document.nde_selector.gradeid,hisList[(x-1)*2],hisList[(x-1)*2])

		}



		break;

	case 8: //visual arts

		dbase = "NDE"

		subject = "VIS"

		scale = "VISRP"

		for (x=1;x<visList.length/2+1;x++){

				addOption(document.nde_selector.gradeid,visList[(x-1)*2],visList[(x-1)*2])

		}



		break;

	case 9: //writing

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

					case (subject="MAT"):

						years = "20093,20073,20053,20033,20003,20002,19963,19962,19922,19902"

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

						years = "20093,20073,20053,20033,20023,20003,20002,19983,19982,19942,19922"

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
		<meta name="ROBOTS" content="FOLLOW,INDEX">


		<LINK rel="stylesheet" type="text/css" href="/nationsreportcard/inc/naep2010.css">
		
		<script language="JavaScript1.1" type="text/javascript" src="/nationsreportcard/inc/win.js"></script>
	</HEAD>
	<BODY id="PageBody" leftMargin="0" topMargin="0" bgColor="#ffffff" marginwidth="0" marginheight="0" class="">
		
		<!--#include virtual="/inc/header_inc.asp" -->
		<input name="pagePath" id="pagePath" type="hidden" value="/nationsreportcard/about/nonpublicschools.asp" />
		
		<div class="MainContent">
			<!--#include virtual="/nationsreportcard/inc/banner_inc.asp" -->
			<div id="PubContent">
				
				
				<div id="MenuLeft" class="dontPrintMe">
					<!--#include virtual="/nationsreportcard/inc/PubNavigation_inc.asp" -->
				</div> 
					<div id="ContentRight" class="">
						<div id="contentWrapper">
							
	<h2>Private<a href="/nationsreportcard/about/nonpublicschools.asp#footnote1"><sup>1</sup></a> and Other Nonpublic&#160;Schools and the Nation's Report Card</h2>
<ul class="followsAnH2"><li><a href="#participation">Why Is Participation of&#160;Private Schools in NAEP Important?</a></li>
<li><a href="#type">What Types of&#160;Private and Other Nonpublic School Results Are Reported?</a></li>
<li><a href="#selected">How Are&#160;Private Schools Selected for Participation?</a></li>
<li><a href="#results">NAEP Results for&#160;Private Schools</a></li>
<li><a href="#cautions">Cautions in Interpreting NAEP Results</a></li>
</ul>
<h3><a id="participation" class="bookmark" title="participation" name="participation"></a>Why Is Participation of&#160;Private Schools in NAEP Important?</h3>
<p>Private&#160;schools represent about 24 percent of schools in the nation and educate&#160;about 10 percent of the students. In order to have a complete picture of the academic progress of the nation's students, selected students in&#160;public&#160;and nonpublic schools must participate in NAEP. Read more&#160;in&#160;the <a href="/nationsreportcard/pdf/about/schools/NAEP_Private_School_Overview_Brochure_2011.pdf">2011 brochure for private schools</a> (1895K <a href="/nationsreportcard/help.asp#pdf">PDF</a>).</p>
<p class="footnote" align="right"><a href="#top">Back to Top</a></p>
<h3><a id="type" class="bookmark" title="type" name="type"></a>What Types of Private and Other Nonpublic School Results Are Reported?</h3>
<p>NAEP selects samples representing the broad spectrum of&#160;nonpublic<a href="/nationsreportcard/about/nonpublicschools.asp#footnote1"><sup>1</sup></a> schools at grades 4, 8, and 12. Several different breakdowns by type of school are available, depending on assessment year and jurisdiction. (Note that Bureau of Indian&#160;Education schools and Department of Defense schools&#160;may be&#160;reported along with these nonpublic schools.)</p>
<p>Results for students in&#160;private schools are reported as a national average, but&#160;cannot be reported for&#160;states&#160;because the numbers of&#160;private school students asked to participate are too small to produce reliable results if reported by state. Several reports&#160;on private school performance are&#160;available in the <a href="/nationsreportcard/studies/">Special Studies</a> section of this website.</p>
<p>See all the most recent <a href="#results">private school results</a> by subject and grade from the links below.</p>
<p class="footnote" align="right"><a href="#top">Back to Top</a></p>
<h3><a id="selected" class="bookmark" title="selected" name="selected"></a>How Are Private&#160;Schools Selected for Participation?</h3>
<p>For each NAEP assessment, a sample of schools is selected from the <a href="/surveys/pss/">Private School Universe Survey (PSS)</a>. The PSS collects and stores data on more than 33,000 nonpublic schools in the 50 states and the District of Columbia. The number of&#160;private schools sampled for NAEP changes from year to year depending on the assessment. However, the number of students per subject per grade typically remains the same&#8212;30 students in each school. Specific numbers of nonpublic schools and students that were both selected and that participated in past assessments can be found in the individual NAEP report cards for each subject or in&#160;a FAQ&#160;on the Nation's report Card website, <a href="http://nationsreportcard.gov/faq.asp#q2">How many students participate?</a> To ensure that the results reported for major student groups at the national level are accurate for private schools, oversampling (i.e., sampling particular types of schools at a higher rate than they appear in the population) is necessary.</p>
<p class="footnote" align="right"><a href="#top">Back to Top</a></p>
<h3>NAEP <a id="results" class="bookmark" title="results" name="results"></a>Results for&#160;Private Schools</h3>
<p>Results for nonpublic schools can be examined through the NAEP Data Explorer (NDE). For each&#160;NAEP assessment, private school data are collected and&#160;included in the overall results. Private school results are also reported as a separate category in the years in which participation meets the NCES standard of at least 70% of schools in the sample. For most years, this is the case; however, for some subjects, years, and&#160;grades,&#160;the symbol&#160;<span class="about">&#8225;</span>&#160;will&#160;show that the reporting standards were not met<span class="000311714-08122005">.</span>&#160;</p>
<p>For a quick but detailed look at&#160;results for private and public schools, use the Private School Quick Data tool below.&#160;This will take you&#160;to a results table&#160;in the NDE.&#160;Select the subject and grade, then select whether you want to see the data broken out by two categories (public&#160;and private schools) or&#160;by&#160;five categories (including Catholic, other private schools, and schools of the Bureau of Indian Education and the Department of Defense).&#160;Then press "Show table."</p>



<form name="nde_selector" id="nde_selector">

<table bgcolor="#d5d5d5" border="0" cellpadding="3" cellspacing="0">
<tbody><tr>
  <td colspan="2" style="font-size: 12px; font-weight: bold; font-family: arial; text-align: left; border-left: 1px solid black; border-right: 1px solid black; border-top: 1px solid black; border-color: black; border-width: 1px;">
Private School Quick Data
</td>
</tr>
<tr><td style="border-left: 1px solid black; border-bottom: 1px solid black; border-color: black; border-width: 1px;" align="right" valign="top" width="135">
<select name="subjectid" id="subjectid" onchange="changesubject(this);">
<option>Select subject</option>
<option>Civics</option>

<option>Economics</option>
<option>Mathematics</option>
<option>Music</option>
<option>Reading</option>
<option>Science</option>
<option>U.S. History</option>
<option>Visual Arts</option>
<option>Writing</option>
</select>

<select name="gradeid" id="gradeid" onchange="changegrade(this);">
<option>Select grade</option>
<option>Grade 4</option>
<option>Grade 8</option>
<option>Grade 12</option>
</select></td>
<td style="border-right: 1px solid black; border-bottom: 1px solid black; border-color: black; border-width: 1px;" align="right" valign="top" width="270">
<select name="variid" id="variid" onchange="changevari(this);">
<option>Select variable</option>
<option>Public or private school (2 category)</option>
<option>Public or nonpublic school (5 category)</option>

</select>
<select name="statid" id="statid" onchange="changestat(this);">
<option>Select statistic</option>
<option>Average Scale Score</option>
<option>Achievement Level (Cumulative)</option>
<option>Percentiles</option>
</select>
<input value="show table" onclick="showtable();" type="button">

</td></tr>

</tbody></table>
</form>




<p>To see&#160;graphical displays of private school results, follow the links below (for&#160;geography and U.S. history, the results will become graphical when next reported, in 2011). For&#160;all of the results below, you can go the&#160;NDE to explore the data further, using all the power of the tool--for help,&#160;see the Quick Reference Guide and the tutorial on <a href="/nationsreportcard/naepdata/">the NDE start page</a>.</p>
<h4>Arts</h4>
<ul class="nospace2"><li>Average scale scores, public and&#160;private schools at grade 8 for <a href="http://nationsreportcard.gov/arts_2008/a0009.asp">music</a> and <a href="http://nationsreportcard.gov/arts_2008/a0018.asp">visual arts</a>, 2008.</li>
</ul>
<h4>Civics</h4>
<ul class="nospace2"><li>Average scale scores, public and nonpublic schools at <a href="/nationsreportcard/nde/viewresults.asp?pid=4-2-4-CIV-National---10-SCHTYPE-20063,19983--CR-MN-1-0-0--0-0--0-3--1-SCHTYPE;19983,20063;Variables;1-1">grade 4</a>, <a href="/nationsreportcard/nde/viewresults.asp?pid=4-2-8-CIV-National---10-SCHTYPE-20063,19983--CR-MN-1-0-0--0-0--0-1--1-SCHTYPE;19983,20063;Variables;1-1">grade 8</a>, and <a href="/nationsreportcard/nde/viewresults.asp?pid=4-2-12-CIV-National---10-SCHTYPE-20063,19983--CR-MN-1-0-0--0-0--0-1--1-SCHTYPE;19983,20063;Variables;1-1">grade 12</a>: 1998 and 2006; for 2010, at <a href="http://nationsreportcard.gov/civics_2010/g8_national.asp?subtab_id=Tab_4&amp;tab_id=tab1#chart">grade 8</a> only.&#160;</li>
<li>Achievement-level results, public and nonpublic schools at <a href="/nationsreportcard/nde/viewresults.asp?pid=4-2-4-CIV-National---10-SCHTYPE-20063,19983--CR-BB,AB,AP,AD-5-0-0--0-0--0-1--1-SCHTYPE;19983,20063;Jurisdictions;3-1">grade 4</a>, <a href="/nationsreportcard/nde/viewresults.asp?pid=4-2-8-CIV-National---10-SCHTYPE-20063,19983--CR-BB,AB,AP,AD-5-0-0--0-0--0-1--1-SCHTYPE;19983,20063;Jurisdictions;3-1">grade 8</a>, and <a href="/nationsreportcard/nde/viewresults.asp?pid=4-2-12-CIV-National---10-SCHTYPE-20063,19983--CR-BB,AB,AP,AD-5-0-0--0-0--0-1--1-SCHTYPE;19983,20063;Jurisdictions;3-1">grade 12</a>: 1998 and 2006; for 2010, at <a href="http://nationspreportcard.gov/civics_2010/g8_national.asp?tab_id=tab2&amp;subtab_id=Tab_4#chart">grade 8</a> only.</li>
</ul>
<h4>Geography</h4>
<ul class="nospace2"><li>Average scale scores,&#160;public and nonpublic schools at <a href="/nationsreportcard/nde/viewresults.asp?pid=4-2-4-GEO-National---10-SCHTYPE-20012,19942--GC-MN-1-0-0--0-0--0-3--1-SCHTYPE;19942,20012;Variables;1-1">grade 4</a>, <a href="/nationsreportcard/nde/viewresults.asp?pid=4-2-8-GEO-National---10-SCHTYPE-20012,19942--GC-MN-1-0-0--0-0--0-1--1-SCHTYPE;19942,20012;Variables;1-1">grade 8</a>, and <a href="/nationsreportcard/nde/viewresults.asp?pid=4-2-12-GEO-National---10-SCHTYPE-20012,19942--GC-MN-1-0-0--0-0--0-1--1-SCHTYPE;19942,20012;Variables;1-1">grade 12</a>: 1994, 2001.</li>
<li>Achievement-level results, public and nonpublic schools at <a href="/nationsreportcard/nde/viewresults.asp?pid=4-2-4-GEO-National---10-SCHTYPE-20012,19942--GC-BB,AB,AP,AD-5-0-0--0-0--0-1--1-SCHTYPE;19942,20012;Jurisdictions;3-1">grade 4</a>, <a href="/nationsreportcard/nde/viewresults.asp?pid=4-2-8-GEO-National---10-SCHTYPE-20012,19942--GC-BB,AB,AP,AD-5-0-0--0-0--0-1--1-SCHTYPE;19942,20012;Jurisdictions;3-1">grade 8</a>, and <a href="/nationsreportcard/nde/viewresults.asp?pid=4-2-12-GEO-National---10-SCHTYPE-20012,19942--GC-BB,AB,AP,AD-5-0-0--0-0--0-1--1-SCHTYPE;19942,20012;Jurisdictions;3-1">grade 12</a>: 1994, 2001.</li>
</ul>
<h4>Mathematics</h4>
<ul class="nospace2"><li>Average scale scores, public, private, and Catholic schools, <a href="http://nationsreportcard.gov/math_2009/gr4_national.asp?subtab_id=Tab_4&amp;tab_id=tab1#chart">grade 4</a> and <a href="http://nationsreportcard.gov/math_2009/gr8_national.asp?subtab_id=Tab_4&amp;tab_id=tab1#chart">grade 8</a>: 1990&#8211;2009.</li>
<li>Average scale scores, public and nonpublic schools, <a href="/nationsreportcard/nde/viewresults.asp?pid=4-2-12-MAT-National---10-SCHTYPE-20003,19963,19922,19902--MC-MN-1-0-0--0-0--0-3--1-SCHTYPE;19902,19922,19963,20003;Variables;1-1">grade 12</a>: 1990&#8211;2000.</li>
<li>Achievement-level results, public, private, and Catholic schools, <a href="http://nationsreportcard.gov/math_2009/gr4_national.asp?tab_id=tab2&amp;subtab_id=Tab_4#chart">grade 4</a> and <a href="http://nationsreportcard.gov/math_2009/gr8_national.asp?subtab_id=Tab_4&amp;tab_id=tab2#chart">grade 8</a>: 1990&#8211;2009.</li>
<li>Achievement-level results, public and nonpublic schools, <a href="/nationsreportcard/nde/viewresults.asp?pid=4-2-12-MAT-National---10-SCHTYPE-20003,19963,19922,19902--MC-BB,AB,AP,AD-5-0-0--0-0--0-1--1-SCHTYPE;19902,19922,19963,20003;Jurisdictions;3-1">grade 12</a>: 1990&#8211;2000.</li>
<li>Percentile scores, public, private, and Catholic schools, <a href="http://nationsreportcard.gov/math_2009/gr4_national.asp?tab_id=tab3&amp;subtab_id=Tab_4#chart">grade 4</a> and <a href="http://nationsreportcard.gov/math_2009/gr8_national.asp?tab_id=tab3&amp;subtab_id=Tab_4#chart">grade 8</a>: 1990&#8211;2009.&#160;&#160;</li>
</ul>
<h4 class="nospace">Reading</h4>
<ul class="nospace2"><li>Average scale scores, public, private, and Catholic schools, <a href="http://nationsreportcard.gov/reading_2009/nat_g4.asp?subtab_id=Tab_4&amp;tab_id=tab1#chart">grade 4</a> and <a href="http://nationsreportcard.gov/reading_2009/nat_g8.asp?subtab_id=Tab_4&amp;tab_id=tab1#chart">grade 8</a>: 1992&#8211;2009.</li>
<li>Average scale scores, public and nonpublic schools, <a href="/nationsreportcard/nde/viewresults.asp?pid=4-2-12-RED-National---10-SCHTYPE-20053,19983,19942,19922--RC-MN-1-0-0--0-0--0-1--1-SCHTYPE;19922,19942,19983,20053;Variables;1-1">grade 12</a>: 1992&#8211;1998.</li>
<li>Achievement-level results, public, private, and Catholic schools, <a href="http://nationsreportcard.gov/reading_2007/r0038.asp?subtab_id=Tab_2&amp;tab_id=tab1#chart">grades 4 and 8</a>: 1992&#8211;2007.</li>
<li>Achievement-level results, public and nonpublic schools, <a href="/nationsreportcard/nde/viewresults.asp?pid=4-2-12-RED-National---10-SCHTYPE-20053,19983,19942,19922--RC-BB,AB,AP,AD-5-0-0--0-0--0-1--1-SCHTYPE;19922,19942,19983,20053;Jurisdictions;3-1">grade 12</a>: 1992&#8211;1998.</li>
</ul>
<h4>Science</h4>
<ul><li>Average scale scores,&#160;public and nonpublic schools, <a href="/nationsreportcard/nde/viewresults.asp?pid=4-2-4-SCI-National---10-SCHTYPE-20053,20003,19963--SC-MN-1-0-0--0-0--0-3--1-SCHTYPE;19963,20003,20053;Variables;1-1">grade 4</a>, <a href="/nationsreportcard/nde/viewresults.asp?pid=4-2-8-SCI-National---10-SCHTYPE-20053,20003,19963--SC-MN-1-0-0--0-0--0-3--1-SCHTYPE;19963,20003,20053;Variables;1-1">grade 8</a>, and <a href="/nationsreportcard/nde/viewresults.asp?pid=4-2-12-SCI-National---10-SCHTYPE-20053,20003,19963--SC-MN-1-0-0--0-0--0-3--1-SCHTYPE;19963,20003,20053;Variables;1-1">grade 12</a>: 1996, 2000,&#160;2005.</li>
<li>Achievement-level results,&#160;public and nonpublic schools, <a href="/nationsreportcard/nde/viewresults.asp?pid=4-2-4-SCI-National---10-SCHTYPE-20053,20003,19963--SC-BB,AB,AP,AD-5-0-0--0-0--0-1--1-SCHTYPE;19963,20003,20053;Jurisdictions;3-1">grade 4</a>, <a href="/nationsreportcard/nde/viewresults.asp?pid=4-2-8-SCI-National---10-SCHTYPE-20053,20003,19963--SC-BB,AB,AP,AD-5-0-0--0-0--0-1--1-SCHTYPE;19963,20003,20053;Jurisdictions;3-1">grade 8</a>, and <a href="/nationsreportcard/nde/viewresults.asp?pid=4-2-12-SCI-National---10-SCHTYPE-20053,20003,19963--SC-BB,AB,AP,AD-5-0-0--0-0--0-1--1-SCHTYPE;19963,20003,20053;Jurisdictions;3-1">grade 12</a>: 1996, 2000, 2005.</li>
</ul>
<blockquote style="MARGIN-RIGHT: 0px" dir="ltr"><p>For the 2009 science assessment, a <a href="/nationsreportcard/science/whatmeasure.asp">new framework</a> was used. The results for grades 4 and 8 private school students are below; note that participation rates were not sufficient to report private school results separately.</p>
</blockquote>
<ul><li>Average scale scores, public and nonpublic schools, <a href="http://nationsreportcard.gov/science_2009/g4_nat.asp?subtab_id=Tab_4&amp;tab_id=tab1#tabsContainer">grade 4</a> and <a href="http://nationsreportcard.gov/science_2009/g8_nat.asp?subtab_id=Tab_4&amp;tab_id=tab1#tabsContainer">grade 8</a>: 2009.&#160;</li>
<li>Achievement-level results, public and nonpublic schools, <a href="http://nationsreportcard.gov/science_2009/g4_nat.asp?tab_id=tab2&amp;subtab_id=Tab_4#tabsContainer">grade 4</a> and <a href="http://nationsreportcard.gov/science_2009/g8_nat.asp?tab_id=tab2&amp;subtab_id=Tab_4#tabsContainer">grade 8</a>: 2009.</li>
</ul>
<h4 class="nospace">Writing</h4>
<ul class="nospace2"><li>Average scale scores, public, private, and Catholic schools, <a href="http://nationsreportcard.gov/writing_2007/w0011.asp">grades 8 and 12</a>: 1998, 2002, and 2007</li>
<li>Achievement-level results, public, private, and Catholic schools, <a href="http://nationsreportcard.gov/writing_2007/w0011.asp?subtab_id=Tab_2&amp;tab_id=tab1#chart">grades 8 and 12</a>: 1998, 2002, and 2007.</li>
</ul>
<h4>U.S. History</h4>
<ul class="nospace2"><li>Average scale scores,&#160;public and nonpublic schools, <a href="/nationsreportcard/nde/viewresults.asp?pid=4-2-4-HIS-National---10-SCHTYPE-20063,20013,19942--HC-MN-1-0-0--0-0--0-3--1-SCHTYPE;19942,20013,20063;Variables;1-1">grade 4</a>, <a href="/nationsreportcard/nde/viewresults.asp?pid=4-2-8-HIS-National---10-SCHTYPE-20063,20013,19942--HC-MN-1-0-0--0-0--0-1--1-SCHTYPE;19942,20013,20063;Variables;1-1">grade 8</a>, and <a href="/nationsreportcard/nde/viewresults.asp?pid=4-2-12-HIS-National---10-SCHTYPE-20063,20013,19942--HC-MN-1-0-0--0-0--0-1--1-SCHTYPE;19942,20013,20063;Variables;1-1">grade 12</a>: 1994, 2001,&#160;2006.</li>
<li>Achievement-level results, public and nonpublic schools, <a href="/nationsreportcard/nde/viewresults.asp?pid=4-2-4-HIS-National---10-SCHTYPE-20063,20013,19942--HC-BB,AB,AP,AD-5-0-0--0-0--0-1--1-SCHTYPE;19942,20013,20063;Jurisdictions;3-1">grade 4</a>, <a href="/nationsreportcard/nde/viewresults.asp?pid=4-2-8-HIS-National---10-SCHTYPE-20063,20013,19942--HC-BB,AB,AP,AD-5-0-0--0-0--0-1--1-SCHTYPE;19942,20013,20063;Jurisdictions;3-1">grade 8</a>, and <a href="/nationsreportcard/nde/viewresults.asp?pid=4-2-12-HIS-National---10-SCHTYPE-20063,20013,19942--HC-BB,AB,AP,AD-5-0-0--0-0--0-1--1-SCHTYPE;19942,20013,20063;Jurisdictions;3-1">grade 12</a>: 1994, 2001, 2006.</li>
</ul>
<p><strong><em>Long-Term Trend Mathematics and Reading Assessments</em></strong></p>
<p>NAEP <a href="/nationsreportcard/ltt/">long-term trend</a> (LTT) assessments give information on the changes in mathematics and reading performance of America's youth since the early 1970s. They are administered nationally every four years (but are not reported at the state or district levels) to students aged&#160;9, 13, and 17.</p>
<ul><li><div>Mathematics average scale score graphs, public and nonpublic schools, <a href="http://nationsreportcard.gov/ltt_2008/ltt0006.asp">ages 9, 13, and 17</a>: 1978&#8211;2008.</div></li>
<li><div>Mathematics performance level tables, public and nonpublic schools, <a href="/nationsreportcard/lttdata/report.aspx?p=1-MAT-1-20083,20043,20041,19991,19961,19941,19921,19901,19861,19821,19781-MRPSCT-SCHTYPE-NT-ALD_BA,ALD_PR,ALD_AD-Y_J-0-0-5">age 9</a>, <a href="/nationsreportcard/lttdata/report.aspx?p=2-MAT-1-20083,20043,20041,19991,19961,19941,19921,19901,19861,19821,19781-MRPSCT-SCHTYPE-NT-ALD_BA,ALD_PR,ALD_AD-Y_J-0-0-5">age 13</a>, and <a href="/nationsreportcard/lttdata/report.aspx?p=3-MAT-1-20083,20043,20041,19991,19961,19941,19921,19901,19861,19821,19781-MRPSCT-SCHTYPE-NT-ALD_BA,ALD_PR,ALD_AD-Y_J-0-0-5">age 17</a>:&#160;1978&#8211;2008.</div></li>
<li><div>Reading average scale score graphs, public and nonpublic schools, <a href="http://nationsreportcard.gov/ltt_2008/ltt0010.asp">ages 9, 13, and 17</a>: 1978&#8211;2008.</div></li>
<li><div>Reading performance level tables, public and nonpublic schools, <a href="/nationsreportcard/lttdata/report.aspx?p=1-RED-1-20083,20043,20041,19991,19961,19941,19921,19901,19881,19841,19801,19751,19711-RRPSCT-SCHTYPE-NT-ALD_BA,ALD_PR,ALD_AD-Y_J-0-0-5">age 9</a>, <a href="/nationsreportcard/lttdata/report.aspx?p=2-RED-1-20083,20043,20041,19991,19961,19941,19921,19901,19881,19841,19801,19751,19711-RRPSCT-SCHTYPE-NT-ALD_BA,ALD_PR,ALD_AD-Y_J-0-0-5">age 13</a>, and <a href="/nationsreportcard/lttdata/report.aspx?p=3-RED-1-20083,20043,20041,19991,19961,19941,19921,19901,19881,19841,19801,19751,19711-RRPSCT-SCHTYPE-NT-ALD_BA,ALD_PR,ALD_AD-Y_J-0-0-5">age 17</a>:&#160;1980&#8211;2008.</div></li>
</ul>
<p class="footnote" align="right"><a href="#top">Back to Top</a></p>
<h3><a id="cautions" class="bookmark" title="cautions" name="cautions"></a>Cautions in Interpreting NAEP Results</h3>
<p>NAEP assessment results make it possible to examine relationships between students' academic performance and the varied background information collected by NAEP. A relationship that exists between achievement and another variable, however, does not reveal its underlying cause, which may be influenced by a number of other variables. Simple or causal inferences related to, for example, student group membership, the effectiveness of public and nonpublic schools, and state- or district-level education systems cannot be drawn using NAEP results.</p>
<p class="footnote" align="right"><a href="#top">Back to Top</a></p>
<div class="footnote"><hr align="left" width="150" noshade="noshade" />
</div><div class="footnote"><a id="footnote1" class="bookmark" title="footnote1" name="footnote1"></a>1.&#160;In the main NAEP assessments,&#160;the term "nonpublic schools" includes private schools as well as Bureau of Indian&#160;Education (BIE) schools&#160;and Department of Defense (DoD) domestic and overseas schools. Private schools can belong to religious organizations (of which the largest are Catholic schools), nonreligious organizations, or they can be independent schools. BIE and DoD schools are federally funded schools (that is, schools not supported by state or local governments). Private schools account for&#160;about 10 percent of the nation's students; BIE and DoD schools account for fewer than 1 percent of the nation's students. (Note that for the NAEP long-term trend assessments, BIE and DoD schools are selected for the sample only occasionally; when there is a sampled school in this category, it is reported in the long-term trend results in the "nonpublic" category with the private schools.)</div><div class="footnote">&#160;</div><div class="footnote" align="right"><a href="#top">Back to Top</a></div>

							<div class="pageupdated"><hr noshade size="1">
								<span>Last updated 28 April 2011 (NB)</span>
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
