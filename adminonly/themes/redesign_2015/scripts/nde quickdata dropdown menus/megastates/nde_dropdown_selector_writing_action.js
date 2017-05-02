<script language="JavaScript" type="text/javascript">

var blnnrchost = true
var subject = "RED"
var scale = "RRPCM"
var grade = "1"
var framework = "-3-"
var jurisdiction = "NT"
var variable = "TOTAL"
var statistics = "MN_MN,RP_RP"
var years = "20113"
var dbase = "NDE"
var naephost = "/nationsreportcard/naepdata/report.aspx?"
var nrchost = "/data/nde_access.asp?app="
var linkstring = naephost + "p=" + grade + "-" + subject + framework + years + "-" + scale + "-" + variable + "-" + jurisdiction + "-" + statistics + "-Y_J-0-0-5"



	

	var gradeList = new Array()

	var gradeID = new Array()







function changegrade(selgrade) {
	
	switch(selgrade.selectedIndex){


	 case 1:

		grade = "2"
		break;

	case 2:

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
		//overall
		variable = "TOTAL"
		break;
	case 2:
		//Gender
		variable = "GENDER"
		break;
	case 3:
		//Race/ethnicity
		variable = "SRACE10"
		break;
	case 4:
		//school lunch
		variable = "SLUNCH3"
		break;		
	case 5:
		//parental education
		variable = "PARED"
		break;
	case 6:
		//School location
		variable = "UTOL4"
		break;
	case 7:
		//SD
		variable = "IEP"
		
		break;
	case 8:
		//ELL
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
	case 4:
		statistics = "RP_RP"
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

			default:


					years = "20113"
					framework = "-3-"




			if(blnnrchost==true){

				linkstring = nrchost + dbase + "&" + "p=" + grade + "-" + subject + framework + years + "-" + scale + "-" + variable + "-" + jurisdiction + "-" + statistics + "-Y_J-0-0-5"

			}

			else{

				linkstring = naephost + "p=" + grade + "-" + subject + framework + years + "-" + scale + "-" + variable + "-" + jurisdiction + "-" + statistics + "-Y_J-0-0-5"

			}

				var oldWin = window.open(linkstring,"ndewindow");
				oldWin.focus();
					break;		}

}

</script>
