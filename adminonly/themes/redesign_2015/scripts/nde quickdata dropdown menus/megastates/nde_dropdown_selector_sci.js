
var blnnrchost = true
var subject = "SCI"
var scale = "SRPUV"
var grade = "1"
var framework = "-3-"
var jurisdiction = "NP,CA,FL,IL,NY,TX"
var variable = "TOTAL"
var statistics = "MN_MN,RP_RP"
var years = "20113,20093"
var dbase = "NDE"
var naephost = "/naepdata/report.aspx?"
var nrchost = "/data/nde_access.asp?app="
var linkstring = nrchost + dbase + "&" + "p=" + grade + "-" + subject + framework + years + "-" + scale + "-" + variable + "-" + jurisdiction + "-" + statistics + "-Y_J-0-0-5"

var gradeList = new Array()
var gradeID = new Array()



function onload(){
	document.getElementById('gradeid').selectedIndex = 0;
	document.getElementById('variid').selectedIndex = 0;
	document.getElementById('statid').selectedIndex = 0;

}



function changegrade(selgrade) {
	
	switch(selgrade.value)
	{
	case "Grade 4":
		grade = "1"
		years = "20093"
		break;

	case "Grade 8":
		grade = "2"
		years = "20113,20093"
		break;

	}

}



function changevari(selvari) {
	
	switch(selvari.selectedIndex)
	{
	case 0:
	break;
	case 1:
		variable = "TOTAL"
		break;
	case 2:
		variable = "GENDER"
		break;
	case 3:
		variable = "SDRACE"
		break;
	case 4:
		variable = "SLUNCH3"
		break;
	case 5:
		variable = "UTOL4"
		break;
	case 6:
		variable = "IEP"
		break;
	case 7:
		variable = "LEP"
		break;
		}


}

function changestat(selstat) {

	switch(selstat.selectedIndex)
	{
	case 0:
		break;
	case 1:
		statistics = "MN_MN,RP_RP"
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
