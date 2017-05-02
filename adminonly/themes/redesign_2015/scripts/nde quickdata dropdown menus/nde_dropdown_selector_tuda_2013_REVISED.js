var blnnrchost = true
var varRaw
var subject = "MAT"
var scale = "MRPCM"
var grade = "1"
var framework = "-2-"
var jurisdiction = "NP,NL,XQ,XA,XU,XM,XB,XT,XC,XV,XS,XR,XW,XF,XO,XH,XJ,XL,XI,XK,XN,XP,XD"
var variable = "TOTAL"
var statistics = "MN_MN"
var years = "20133,20113,20093,20073,20053,20033,20023,20003,20002"
var nrchost = "/data/nde_access.asp?app="
var dbase = "NDE"
var subj = "0"
var grd = "0"
var linkstring = nrchost + dbase + "&" + "p=" + grade + "-" + subject + "-2-" + years + "-" + scale + "-" + variable + "-" + jurisdiction + "-" + statistics + "-Y_J-0-0-5"
var order = "-Y_J-0-0-5"
	
var mat4Var = "Overall,Gender,Race/Ethnicity (used for reporting trend),Race/Ethnicity (new student group variables in 2011),NSLP Eligibility,Students with Disabilities,English Language Learners,Instruction Time Spent on Mathematics,Emphasis on Algebra,Race/Ethnicity and Gender,Race/Ethnicity and NSLP Eligibility"
var mat8Var = "Overall,Gender,Race/Ethnicity (used for reporting trend),Race/Ethnicity (new student group variables in 2011),NSLP Eligibility,Parental Education,Students with Disabilities,English Language Learners,Current Mathematics Class,Teacher's Highest Academic Degree,Race/Ethnicity and Gender,Race/Ethnicity and NSLP Eligibility"
var red4Var = "Overall,Gender,Race/Ethnicity (used for reporting trend),Race/Ethnicity (new student group variables in 2011),NSLP Eligibility,Students with Disabilities,English Language Learners,Language Other Than English Spoken at Home,Pages Read in School and for Homework,Race/Ethnicity and Gender,Race/Ethnicity and NSLP Eligibility"
var red8Var = "Overall,Gender,Race/Ethnicity (used for reporting trend),Race/Ethnicity (new student group variables in 2011),NSLP Eligibility,Parental Education,Students with Disabilities,English Language Learners,Time Spent on Laugnage Arts Instruction,Teachers' Undergraduate Major or Minor in English ,Race/Ethnicity and Gender,Race/Ethnicity and NSLP Eligibility"


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
		scale = "MRPCM"
		years = "20133,20113,20093,20073,20053,20033,20003,20002"
		framework = "-2-"
		
		if(document.getElementById('gradeid').selectedIndex==0){
			varRaw = mat4Var
			}
		else{
			varRaw = mat8Var
			}
		break;
		
	case 1: //reading
		dbase = "NDE"
		subject = "RED"
		scale = "RRPCM"
		years = "20133,20113,20093,20073,20053,20033,20023,20003"
		framework = "-2-"
		
		if(grd==0){
			varRaw = red4Var
			}
		else{
			varRaw = red8Var
			}
		break;
	}
	var varClean = varRaw.split(",");
	for (i=1;i<varClean.length+1;i++){
		addOption(document.nde_selector.varid,varClean[i-1],varClean[i-1])
					
	}

}

function changegrade(selgrade) {
	grd = selgrade

	removeAllOptions(document.nde_selector.varid)
	addOption(document.nde_selector.varid,"Select Variable","Select Variable")


	switch(selgrade.selectedIndex)
	{
	case 0:
		grade = "1"
		if(subj==0){
			varRaw = mat4Var
			}
		else{
			varRaw = red4Var
			}
		break;

	case 1:
		grade = "2"
			
			if(subj==0){
			varRaw = mat8Var
			}
			else{
				varRaw = red8Var
			}
		break;

	}
	var varClean = varRaw.split(",");
	for (i=1;i<varClean.length+1;i++){
		addOption(document.nde_selector.varid,varClean[i-1],varClean[i-1])
					
	}
}



function changevari(selvari) {
	order = "-Y_J-0-0-5"
	switch(selvari.value)
	{
	case "Overall":
		variable = "TOTAL"
		break;
	case "Gender":
		variable = "GENDER"
		break;
	case "Race/Ethnicity (used for reporting trend)":
		variable = "SDRACE"
		break;
	case "Race/Ethnicity (new student group variables in 2011)":
	
		variable = "SRACE10"
		break;
	case "Students with Disabilities":
		variable = "IEP"
		break;
	case "English Language Learners":
		variable = "LEP"
		break;
	case "NSLP Eligibility":
		variable = "SLUNCH3"
		break;
	case "Parental Education":
		variable = "PARED"
		break;
	case "Instruction Time Spent on Mathematics":
		variable = "T088001"
		break;
	case "Emphasis on Algebra":
		variable = "T075355"
		break;
	case "Current Mathematics Class":
		variable = "M815701"
		break;
	case "Teacher's Highest Academic Degree":
		variable = "T056301"
		break;
	case "Language Other Than English Spoken at Home":
		variable = "B018201"
		break;
	case "Pages Read in School and for Homework":
		variable = "B001151"
		break;
	case "Time Spent on Laugnage Arts Instruction":
		variable = "T085901"
		break;
	case "Teachers' Undergraduate Major or Minor in English":
		variable = "T077306"
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
