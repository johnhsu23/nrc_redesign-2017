var blnnrchost = true
var subject = "RED"
var scale = "RRPCM"
var grade = "1"
var framework = "-2-"
var jurisdiction = "NP,CA,FL,IL,NY,TX"
var variable = "TOTAL"
var statistics = "MN_MN,RP_RP"
var years = "20113,20093,20073,20053,20033,20003,20002,19963,19962,19922"
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
		variable = "TOTAL"
		years = "20113,20093,20073,20053,20033,20023,19983,19982,19942,19922"
		break;
	case 2:
		variable = "GENDER"
		years = "20113,20093,20073,20053,20033,20023,19983,19982,19942,19922"
		break;
	case 3:
		variable = "SDRACE"
		years = "20113,20093,20073,20053,20033,20023,19983,19982,19942,19922"
		break;
	case 4:
		variable = "SLUNCH3"
		years = "20113,20093,20073,20053,20033"
		break;
	case 5:
		variable = "UTOL4"
		years = "20113,20093,20073"
		break;
	case 6:
		variable = "IEP"
		years = "20113,20093,20073,20053,20033"
		break;
	case 7:
		variable = "LEP"
		years = "20113,20093,20073,20053,20033"
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
				linkstring = nrchost + dbase + "&" + "p=" + grade + "-" + subject + framework + years + "-" + scale + "-" + variable + "-" + jurisdiction + "-" + statistics + "-Y_J-0-0-5"
				var oldWin = window.open(linkstring,"ndewindow");
				oldWin.focus();
					
					break;
			
		}
}