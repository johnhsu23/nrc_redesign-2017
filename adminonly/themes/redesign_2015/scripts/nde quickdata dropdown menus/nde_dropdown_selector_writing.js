<script language="JavaScript" type="text/javascript">

var blnnrchost = true
var subject = "WRI"
var scale = "WRIRP"
var grade = "2"
var framework = "-3-"
var jurisdiction = "NT"
var variable = "WC30024"
var statistics = "RP_RP"
var years = "20113"
var dbase = "NDE"
var naephost = "/nationsreportcard/naepdata/report.aspx?"
var nrchost = "/data/nde_access.asp?app="
var linkstring = naephost + "p=" + grade + "-" + subject + framework + years + "-" + scale + "-" + variable + "-" + jurisdiction + "-" + statistics + "-Y_J-0-0-5"



	

	var gradeList = new Array()

	var gradeID = new Array()







function changegrade(selgrade) {
		
	switch(selgrade.selectedIndex)

	{

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
		//backspace
		variable = "WC30024"
		break;
	case 2:
		//bold
		variable = "WC30005"
		break;
	case 3:
		//collapse prompt
		variable = "WC30019"
		break;
	case 4:
		//collapse response
		variable = "WC30021"
		break;		
	case 5:
		//copy
		variable = "WC30003"
		break;
	case 6:
		//cut
		variable = "WC30027"
		break;
	case 7:
		//delete
		variable = "WC30025"
		
		break;
	case 8:
		//expand prompt
		variable = "WC30020"
		break;
	case 9:
		//expand response
		variable = "WC30022"
		break;		
	case 10:
		//highlight
	variable = "WC30016"
		break;
	case 11:
		//indent
		variable = "WC30008"
		break;
	case 12:
		//italic
		variable = "WC30006"
		break;
	case 13:
		//outdent
		variable ="WC30009"
		break;
	case 14:
		//paste
		variable = "WC30004"
		break;		
	case 15:
		//scroll
		variable = "WC30018"
		break;
	case 16:
		//spell-check (icon)
		variable = "WC30010"
		break;
	case 17:
		//spell-check (right-click)
		variable = "WC30011"
		break;
	case 18:
		//spell-check corrections accepted
		variable = "WC30013"
		break;
	case 19:
		//text-to speech
		variable = "WC30017"
		break;		
	case 20:
		//thesaurus
		variable = "WC30014"
		break;
	case 21:
		//thesaurus replacement
		variable = "WC30015"
		break;
	case 22:
		//underscore
		variable = "WC30007"
		break;
	case 23:
		//zoom
		variable = "WC30023"
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
