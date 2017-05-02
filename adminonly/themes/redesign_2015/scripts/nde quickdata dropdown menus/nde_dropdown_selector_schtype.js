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

						if( grade == "1"){
							years = "20073,20023,19983"
							framework = "-2-"
						}
						else{
							if(document.getElementById('jurdid').selectedIndex == 1) {
								years = "20113"		
								framework = "-3-"
								}
							else{
								years = "20073,20023,19983"
								framework = "-2-"
							}
						}

						
						
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
