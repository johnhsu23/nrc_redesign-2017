
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

	switch(seljurd.value)
	{
	case "States":
		jurisdiction = "NB,QK,QZ,QN,QT,QM,QC,QD,QO,QR,QS,QU,QA"
		break;
	case "Region":
		jurisdiction = "I1,I2,I3,I4,I5,B1,B2,B3,B4,B5"
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
			
			switch(variable){
				case (variable=="SDRACE"):
					years = "20113"
					break;
				case (variable=="UTOL4"):
					years = "20113,20093,20073"
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

