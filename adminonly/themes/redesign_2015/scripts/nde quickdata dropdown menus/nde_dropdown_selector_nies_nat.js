
var blnnrchost = false
var subject = "MAT"
var scale = "MRPCM"
var grade = "1"
var framework = "-2-"
var jurisdiction = "NP"
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
	matList[mat++] = "National"

var red = 0
var redList = new Array()
	redList[red++] = "Grade 4"
	redList[red++] = "National/All States/All Districts"
	redList[red++] = "Grade 8"
	redList[red++] = "National/All States/All Districts"

	
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

	switch(document.getElementById('subjectid').selectedIndex)
	{
	case 0:
		break;

	case 1: //math
		for (x=1;x<matList.length/2+1;x++){
				if (matList[(x-1)*2]==selgrade.value){
					jurdRaw = matList[(x-1)*2+1];
					var jurdClean = jurdRaw.split("/");
					
					for (i=1;i<jurdClean.length+1;i++){
						addOption(document.nde_selector.jurdid,jurdClean[i-1],jurdClean[i-1])
					
					}
				}
		}

		break;
	case 2: //reading
		for (x=1;x<redList.length/2+1;x++){
				if (redList[(x-1)*2]==selgrade.value){
					jurdRaw = redList[(x-1)*2+1];
					var jurdClean = jurdRaw.split("/");
					
					for (i=1;i<jurdClean.length+1;i++){
						addOption(document.nde_selector.jurdid,jurdClean[i-1],jurdClean[i-1])
					
					}

				}
		}
		break;

	
	}

}

//function changejurd(seljurd) {

//	switch(seljurd.value)
//	{
//	case "National":
//		jurisdiction = "NT"
//		break;
//	case "All States":
//		jurisdiction = "NP,AL,AK,AZ,AR,CA,CO,CT,DE,DC,FL,GA,HI,ID,IL,IN,IA,KS,KY,LA,ME,MD,MA,MI,MN,MS,MO,MT,NE,NV,NH,NJ,NM,NY,NC,ND,OH,OK,OR,PA,RI,SC,SD,TN,TX,UT,VT,VA,WA,WV,WI,WY,DS"
//		break;
	
//	case "All Districts":
//		jurisdiction = "NP,NL,XQ,XA,XU,XM,XB,XT,XC,XV,XS,XR,XW,XF,XO,XH,XJ,XL,XI,XK,XN,XP,XD"
//		break;
//	}
	

//}


function changevari(selvari) {
	years = "20113,20093,20073,20053"

	switch(selvari.selectedIndex)
	{
	case 0:
	break;
	case 1:
		variable = "TOTAL"
		jurisdiction = "NI"
		break;
	case 2:
		variable = "GENDER"
		jurisdiction = "NI"

		break;
	case 3:
		variable = "SDRACE"
		jurisdiction = "NT"
		break;
	case 4:
		variable = "DENSBIE"
		jurisdiction = "NI"
		break;
	case 5:
		variable = "SLUNCH3"
		jurisdiction = "NI"
		break;
	case 6:
		variable = "UTOL4"
		jurisdiction = "NI"
		years = "20113,20093,20073"
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
			case (document.getElementById('variid').selectedIndex==0):
				alert("Please select a variable");
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

