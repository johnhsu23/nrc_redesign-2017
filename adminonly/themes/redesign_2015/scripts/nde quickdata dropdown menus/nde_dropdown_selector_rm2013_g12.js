	`var blnnrchost = true
var varRaw
var subject = "MAT"
var scale = "MWPCM"
var grade = "1"
var framework = "-3-"
var jurdnt = "NT"
var jurdst = "NP,AR,CT,FL,ID,IL,IA,MA,MI,NH,NJ,SD,TN,WV"
var jurisdiction = jurdnt
var variable = "TOTAL"
var statistics = "MN_MN"
var years = "20133,20093,20053"
var nrchost = "/data/nde_access.asp?app="
var dbase = "NDE"
var subj = "0"
var grd = "0"
var linkstring = nrchost + dbase + "&" + "p=" + grade + "-" + subject + "-2-" + years + "-" + scale + "-" + variable + "-" + jurisdiction + "-" + statistics + "-Y_J-0-0-5"
var order = "-Y_J-0-0-5"
var defaultMyear = "20133,20093,20053"
var defaultRyear = "20133,20093,20053,20023,19983,19982,19942,19922"
var orderDefault = "Y_J-0-0-5"
var orderXtab = "1_Y_J-0-0-5"
var jurdnt = "NT"
var jurdst = "NP,AR,CT,FL,ID,IL,IA,MA,MI,NH,NJ,SD,TN,WV"

var matVar = "Overall;Gender;Race/Ethnicity (used for reporting trend);Race/Ethnicity (new student group variables in 2011);Parental Education Level;School Location;Students with Disabilities;English Language Learners;Race/ethnicioty - gender;Race/ethnicity - parental education level;Race/ethnicity - school location;Highest level mathematics course;Highest level mathematics course - gender;Highest level mathematics course - race/ethnicity;Highest level mathematics course - parental education level;Mathematics is a favorite subject;Mathematics is a favorite subject - gender;Mathematics is a favorite subject - race/ethnicity;Mathematics is a favorite subject - parental education level;Mathematics will help me in the future;Mathematics will help me in the future - gender;Mathematics will help me in the future - race/ethnicity;Mathematics will help me in the future - parental education level;Mathematics class work is engaging;Mathematics class work is engaging - gender;Mathematics class work is engaging - race/ethnicity;Mathematics class work is engaging - parental education level;"
var redVar = "Overall;Gender;Race/Ethnicity (used for reporting trend);Race/Ethnicity (new student group variables in 2011);Parental Education Level;School Location;Students with Disabilities;English Language Learners;Race/ethnicioty - gender;Race/ethnicity - parental education level;Race/ethnicity - school location;When I read a book, I learn a lot;When I read a book, I learn a lot - gender;When I read a book, I learn a lot - race/ethnicity;When I read a book, I learn a lot - parental education level;Reading is enjoyable;Reading is enjoyable - gender;Reading is enjoyable - race/ethnicity;Reading is enjoyable - parental education level;Explain what was read in class;Explain what was read in class - gender;Explain what was read in class - race/ethnicity;Explain what was read in class - parental education level;Discuss reading interpretations;Discuss reading interpretations - gender;Discuss reading interpretations - race/ethnicity;Discuss reading interpretations - parental education level;"



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
	document.getElementById('varid').selectedIndex = 0;

}


function changesubject(selsubject) {
	subj = selsubject
	removeAllOptions(document.nde_selector.varid)
	addOption(document.nde_selector.varid,"Select Variable","Select Variable")
	
	switch(selsubject.selectedIndex)
	{

	case 0: //math
		dbase = "NDE"
		subject = "MAT"
		scale = "MWPCM"
		years = defaultMyear
		framework = "-3-"
		varRaw = matVar
		break;
		
	case 1: //reading
		dbase = "NDE"
		subject = "RED"
		scale = "RRPCM"
		years = defaultRyear
		framework = "-2-"
		varRaw = redVar
		break;
	}
	var varClean = varRaw.split(";");
	for (i=1;i<varClean.length+1;i++){
		addOption(document.nde_selector.varid,varClean[i-1],varClean[i-1])
					
	}

}

function changejurd(seljurd){
	switch(seljurd.selectedIndex)
	{
	case 0: //national
		jurisdiction = jurdnt
		break;
	case 1: //pilot states
		jurisdiction = jurdst
		break;
	}


}
function changevari(selvari) {
	order = orderDefault
	switch(selvari.value)
	{
	case "Overall":
		variable = "TOTAL"
		if(subject=="MAT"){
			years = defaultMyear;
		}
		else{
			years = defaultRyear;
		}
		break;
	case "Gender":
		variable = "GENDER"
		if(subject=="MAT"){
			years = defaultMyear;
		}
		else{
			years = defaultRyear;
		}
		break;
	case "Race/Ethnicity (used for reporting trend)":
		variable = "SDRACE"
		if(subject=="MAT"){
			years = defaultMyear;
		}
		else{
			years = defaultRyear;
		}
		break;
	case "Race/Ethnicity (new student group variables in 2011)":
		variable = "SRACE10"
		years = "20133"
		break;
	case "Students with Disabilities":
		variable = "IEP"
		if(subject=="MAT"){
			years = defaultMyear;
		}
		else{
			years = "20133,20093,20053,20023,19983";
		}
		break;
	case "English Language Learners":
		variable = "LEP"
		if(subject=="MAT"){
			years = defaultMyear;
		}
		else{
			years = "20133,20093,20053,20023,19983";
		}
		break;
	case "School Location":
		variable = "UTOL4"
		years = "20133,20093"
		break;
	case "Parental Education":
		variable = "PARED"
		break;
	case "Race/ethnicioty - gender":
		variable = "SDRACE,GENDER"
		if(subject=="MAT"){
			years = defaultMyear;
		}
		else{
			years = defaultRyear;
		}
		order = orderXtab
		break;
	case "Race/ethnicity - parental education level":
		variable = "SDRACE,PARED"
		if(subject=="MAT"){
			years = defaultMyear;
		}
		else{
			years = defaultRyear;
		}
		order = orderXtab
		break;
	case "Race/ethnicity - school location":
		variables = "SDRACE,UTOL4"
		years = "20133,20093"
		order = orderXtab
		break;
	
	case "Highest level mathematics course":
		variable = "MATCRST"
		years = "20133,20093"
		break;
	case "Highest level mathematics course - gender":
		variable = "MATCRST,GENDER"
		years = "20133,20093"
		order = orderXtab
		break;
	case "Highest level mathematics course - race/ethnicity":
		variable = "MATCRST,SDRACE"
		years = "20133,20093"
		order = orderXtab
		break;
	case "Highest level mathematics course - parental education level":
		variable = "MATCRST,PARED"
		years = "20133,20093"
		order = orderXtab
		break;
		
	case "Mathematics is a favorite subject":
		variable = "M820905"
		years = "20133,20093"
		break;
	case "Mathematics is a favorite subject - gender":
		variable = "M820905,GENDER"
		years = "20133,20093"
		order = orderXtab
		break;
	case "Mathematics is a favorite subject - race/ethnicity":
		variable = "M820905,SDRACE"
		years = "20133,20093"
		order = orderXtab
		break;
	case "Mathematics is a favorite subject - parental education level":
		variable = "M820905,PARED"
		years = "20133,20093"
		order = orderXtab
		break;
		
	case "Mathematics will help me in the future":
		variable = "M820907"
		years = "20133"
		break;
	case "Mathematics will help me in the future - gender":
		variable = "M820907,GENDER"
		years = "20133"
		order = orderXtab
		break;
	case "Mathematics will help me in the future - race/ethnicity":
		variable = "M820907,SDRACE"
		years = "20133"
		order = orderXtab
		break;
	case "Mathematics will help me in the future - parental education level":
		variable = "M820907,PARED"
		years = "20133"
		order = orderXtab
		break;

	case "Mathematics class work is engaging":
		variable = "M824904"
		years ="20133,20093"
		break;
	case "Mathematics class work is engaging - gender":
		variable = "M824904,GENDER"
		years ="20133,20093"
		order = orderXtab
		break;
	case "Mathematics class work is engaging - race/ethnicity":
		variable = "M824904,SDRACE"
		years ="20133,20093"
		order = orderXtab
		break;
	case "Mathematics class work is engaging - parental education level":
		variable = "M824904,PARED
		years ="20133,20093"
		order = orderXtab
		break;
		
	case "When I read a book, I learn a lot":
		variable = "R833001"
		years = "20133,20093,20053,20023"
		break;
	case "When I read a book, I learn a lot - gender":
		variable = "R833001,GENDER"
		years = "20133,20093,20053,20023"
		order = orderXtab
		break;
	case "When I read a book, I learn a lot - race/ethnicity":
		variable = "R833001,SDRACE"
		years = "20133,20093,20053,20023"
		order = orderXtab
		break;
	case "When I read a book, I learn a lot - parental education level":
		variable = "R833001,PARED"
		years = "20133,20093,20053,20023"
		order = orderXtab
		break;
		
	case "Reading is enjoyable":
		variable = "R833002"
		years = "20133"
		break;
	case "Reading is enjoyable - gender":
		variable = "R833002,GENDER"
		years = "20133"
		order = orderXtab
		break;
	case "Reading is enjoyable - race/ethnicity":
		variable = "R833002,SDRACE"
		years = "20133"
		order = orderXtab
		break;
	case "Reading is enjoyable - parental education level":
		variable = "R833002,PARED"
		years = "20133"
		order = orderXtab
		break;

	case "Explain what was read in class":
		variable = "R848104"
		years = "20133,20093"
		break;
	case "Explain what was read in class - gender":
		variable = "R848104,GENDER"
		years = "20133,20093"
		order = orderXtab
		break;
	case "Explain what was read in class - race/ethnicity":
		variable = "R848104,SDRACE"
		years = "20133,20093"
		order = orderXtab
		break;
	case "Explain what was read in class - parental education level":
		variable = "R848104,PARED"
		years = "20133,20093"
		order = orderXtab
		break;
		
	case "Discuss reading interpretations":
		variable = "R848108"
		years = "20133,20093"
		break;
	case "Discuss reading interpretations - gender":
		variable = "R848108,GENDER"
		years = "20133,20093"
		order = orderXtab
		break;
	case "Discuss reading interpretations - race/ethnicity":
		variable = "R848108,SDRACE"
		years = "20133,20093"
		order = orderXtab
		break;
	case "Discuss reading interpretations - parental education level":
		variable = "R848108,PARED"
		years = "20133,20093"
		order = orderXtab
		break;
	case "Race/Ethnicity and Gender":
		variable = "GENDER,SDRACE"
		order = "-J_Y_0-1-0-37"
		break;
	case "Race/Ethnicity and NSLP Eligibility":
		variable = "SLUNCH3,SDRACE"
		order = "-J_Y_0-1-0-37"
		break;
		}


}

function changestat(selstat) {

	switch(selstat.selectedIndex)
	{
	case 0:
		statistics = "MN_MN"
		break;
	case 1:
		statistics = "RP_RP"
		break;
	case 2:
		statistics = "ALC_BB,ALC_AB,ALC_AP,ALC_AD"
		break;
	case 3:
		statistics = "ALD_BB,ALD_BA,ALD_PR,ALD_AD"
		break;

		case 4:
		statistics = "PC_P1,PC_P2,PC_P5,PC_P7,PC_P9"
		break;
	}


}

function showtable(){
	
		switch(true){

			case (document.getElementById('variid').selectedIndex==0):
				alert("Please select a variable");
				break;

			default:
			
				linkstring = nrchost + dbase + "&" + "p=" + grade + "-" + subject + framework + years + "-" + scale + "-" + variable + "-" + jurisdiction + "-" + statistics + order
			
				var oldWin = window.open(linkstring,"ndewindow");
				oldWin.focus();

				break;
			
		}
}
