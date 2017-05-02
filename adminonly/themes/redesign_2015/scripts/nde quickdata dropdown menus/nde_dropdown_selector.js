var blnnrchost = true
var subject = "MAT"
var scale = "CIVRP"
var grade = "1"
var framework = "-2-"
var jurisdiction = "NP"
var variable = "TOTAL"
var statistics = "MN_MN"
var years = "20143,20103,20073,20053,20033,20023,20003,20002,19983,19982,19942,19922"
var nrchost = "http://nces.ed.gov/nationsreportcard/data/nde_access.asp?app="
var dbase = "NDE"
var naephost = "http://nces.ed.gov/nationsreportcard/naepdata/report.aspx?"
var linkstring = nrchost + dbase + "&" + "p=" + grade + "-" + subject + "-2-" + years + "-" + scale + "-" + variable + "-" + jurisdiction + "-" + statistics + "-Y_J-0-0-5"
var civ = 0
var errCode = "";
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
	matList[mat++] = "National/All States/All Districts"
	matList[mat++] = "Grade 8"
	matList[mat++] = "National/All States/All Districts"
	matList[mat++] = "Grade 12"
	matList[mat++] = "National/All States"
var mus = 0
var musList = new Array()
	musList[mus++] = "Grade 8"
	musList[mus++] = "National"
var red = 0
var redList = new Array()
	redList[red++] = "Grade 4"
	redList[red++] = "National/All States/All Districts"
	redList[red++] = "Grade 8"
	redList[red++] = "National/All States/All Districts"
	redList[red++] = "Grade 12"
	redList[red++] = "National/All States"
var sci = 0
var sciList = new Array()
	sciList[sci++] = "Grade 4"
	sciList[sci++] = "National/All States/All Districts"
	sciList[sci++] = "Grade 8"
	sciList[sci++] = "National/All States/All Districts"
	sciList[sci++] = "Grade 12"
	sciList[sci++] = "National"
var vis = 0
var visList = new Array()
	visList[vis++] = "Grade 8"
	visList[vis++] = "National"
var voc = 0
var vocList = new Array()
	vocList[red++] = "Grade 4"
	vocList[red++] = "National/All States"
	vocList[red++] = "Grade 8"
	vocList[red++] = "National/All States"
	vocList[red++] = "Grade 12"
	vocList[red++] = "National/Participating States"
var wri = 0
var wriList = new Array()
	wriList[wri++] = "Grade 4"
	wriList[wri++] = "National/All State"
	wriList[wri++] = "Grade 8"
	wriList[wri++] = "National/All States/All Districts"
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
	switch(selectbox.id)
	{
		case 'gradeid':
			$(selectbox).parent().find('span').text('Select a Grade');
			break;
		case 'jurdid':
			$(selectbox).parent().find('span').text('Select a Jurisdiction');
			break;
	}	
}

function onload(){
	document.getElementById('subjectid').selectedIndex = 0;
	document.getElementById('gradeid').selectedIndex = 0;
	document.getElementById('jurdid').selectedIndex = 0;
	document.getElementById('variid').selectedIndex = 0;
	document.getElementById('statid').selectedIndex = 0;
}

function changesubject() {
	var grade = document.getElementById('gradeid');
	var jurisdiction = document.getElementById('jurdid');
	removeAllOptions(grade)
	addOption(grade,"Select a Grade","Select a Grade")
	
	removeAllOptions(jurisdiction )
	addOption(jurisdiction ,"Select a Jurisdiction","Select a Jurisdiction")


	switch($('#subjectid').parent().find('span').attr('title'))
	{
		case '0':
			break;
		case '1': //civics
			dbase = "NDE"
			subject = "CIV"
			scale = "CIVRP"
			for (x=1;x<civList.length/2+1;x++){
					addOption(document.getElementById('gradeid'),civList[(x-1)*2],civList[(x-1)*2])
			}
			break;
		case '2': //econ
			dbase = "NDE"
			subject = "ECN"
			scale = "ERPCM"
			for (x=1;x<ecnList.length/2+1;x++){
					addOption(document.getElementById('gradeid'),ecnList[(x-1)*2],ecnList[(x-1)*2])
			}
			break;			
		case '3': //geography
		    dbase = "NDE"
			subject ="GEO"
			scale = "GRPCM"
			for (x=1;x<geoList.length/2+1;x++){
					addOption(document.getElementById('gradeid'),geoList[(x-1)*2],geoList[(x-1)*2])
			}
			break;			
		case '4': //math
			dbase = "NDE"
			subject = "MAT"
			scale = "MRPCM"
			for (x=1;x<matList.length/2+1;x++){
					addOption(document.getElementById('gradeid'),matList[(x-1)*2],matList[(x-1)*2])
			}
			break;
		case '5': //music
			dbase = "NDE"
			subject = "MUS"
			scale = "MUSRP"
			for (x=1;x<musList.length/2+1;x++){
					addOption(document.getElementById('gradeid'),musList[(x-1)*2],musList[(x-1)*2])
			}	
			break;			
		case '6': //reading
			dbase = "NDE"
			subject = "RED"
			scale = "RRPCM"
			for (x=1;x<redList.length/2+1;x++){
					addOption(document.getElementById('gradeid'),redList[(x-1)*2],redList[(x-1)*2])
			}			
			break;
		case '7': //science
			dbase = "NDE"
			subject = "SCI"
			scale = "SRPUV"
			for (x=1;x<redList.length/2+1;x++){
					addOption(document.getElementById('gradeid'),redList[(x-1)*2],redList[(x-1)*2])
			}	
			break;
		case '8': //history
			dbase = "NDE"
			subject = "HIS"
			scale = "HRPCM"
			for (x=1;x<hisList.length/2+1;x++){
					addOption(document.getElementById('gradeid'),hisList[(x-1)*2],hisList[(x-1)*2])
			}	
			break;
		case '9': //visual arts
			dbase = "NDE"
			subject = "VIS"
			scale = "VISRP"
			for (x=1;x<visList.length/2+1;x++){
					addOption(document.getElementById('gradeid'),visList[(x-1)*2],visList[(x-1)*2])
			}	
			break;
		case '10': //vocabulary
			dbase = "NDE"
			subject = "VOC"
			scale = "VOCRP"
			for (x=1;x<wriList.length/2+1;x++){
					addOption(document.getElementById('gradeid'),wriList[(x-1)*2],wriList[(x-1)*2])
			}
			break;	
		case '11': //writing
			dbase = "NDE"
			subject = "WRI"
			scale = "WRIRP"
			for (x=1;x<wriList.length/2+1;x++){
					addOption(document.getElementById('gradeid'),wriList[(x-1)*2],wriList[(x-1)*2])
			}	
			break;	
	}
}

function changegrade() {
	var jurdRaw
	var selectedGradeValue = $('#gradeid').parent().find('span').text();
	var jurisdiction = document.getElementById('jurdid');
	removeAllOptions(jurisdiction)
	addOption(jurisdiction,"Select Jurisdiction","Select Jurisdiction")

	
	switch($('#gradeid').parent().find('span').text())
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

	switch($('#subjectid').parent().find('span').attr('title'))
	{
		case '0':
			break;
		case '1': //civics	
			for (x=1;x<civList.length/2+1;x++){
				if (civList[(x-1)*2]==selectedGradeValue ){
					jurdRaw = civList[(x-1)*2+1];
					var jurdClean = jurdRaw.split("/");
					
					for (i=1;i<jurdClean.length+1;i++){
						addOption(document.getElementById('jurdid'),jurdClean[i-1],jurdClean[i-1])						
					}	
				}
			}
			break;
		case '2': //econ	
			for (x=1;x<ecnList.length/2+1;x++){
				if (ecnList[(x-1)*2]==selectedGradeValue ){
					//addOption(document.nde_selector.jurdid,ecnList[(x-1)*2+1],ecnList[(x-1)*2+1])
					jurdRaw = ecnList[(x-1)*2+1];
					var jurdClean = jurdRaw.split("/");
					
					for (i=1;i<jurdClean.length+1;i++){
						addOption(document.getElementById('jurdid'),jurdClean[i-1],jurdClean[i-1])						
					}
				}
			}	
			break;
		case '3': //geography
			for (x=1;x<geoList.length/2+1;x++){
				if (geoList[(x-1)*2]==selectedGradeValue ){
					jurdRaw = geoList[(x-1)*2+1];
					var jurdClean = jurdRaw.split("/");
					
					for (i=1;i<jurdClean.length+1;i++){
						addOption(document.getElementById('jurdid'),jurdClean[i-1],jurdClean[i-1])						
					}
				}
			}	
			break;
		case '4': //math
			for (x=1;x<matList.length/2+1;x++){
				if (matList[(x-1)*2]==selectedGradeValue ){
					jurdRaw = matList[(x-1)*2+1];
					var jurdClean = jurdRaw.split("/");
					
					for (i=1;i<jurdClean.length+1;i++){
						addOption(document.getElementById('jurdid'),jurdClean[i-1],jurdClean[i-1])						
					}
				}
			}	
			break;
		case '5': //music
			for (x=1;x<musList.length/2+1;x++){
				if (musList[(x-1)*2]==selectedGradeValue ){
					jurdRaw = musList[(x-1)*2+1];
					var jurdClean = jurdRaw.split("/");
					
					for (i=1;i<jurdClean.length+1;i++){
						addOption(document.getElementById('jurdid'),jurdClean[i-1],jurdClean[i-1])					
					}
				}
			}
			break;			
		case '6': //reading
			for (x=1;x<redList.length/2+1;x++){
				if (redList[(x-1)*2]==selectedGradeValue ){
					jurdRaw = redList[(x-1)*2+1];
					var jurdClean = jurdRaw.split("/");
					
					for (i=1;i<jurdClean.length+1;i++){
						addOption(document.getElementById('jurdid'),jurdClean[i-1],jurdClean[i-1])						
					}
				}
			}
			break;
		case '7': //science
			for (x=1;x<sciList.length/2+1;x++){
				if (sciList[(x-1)*2]==selectedGradeValue ){
					jurdRaw = sciList[(x-1)*2+1];
					var jurdClean = jurdRaw.split("/");
					
					for (i=1;i<jurdClean.length+1;i++){
						addOption(document.getElementById('jurdid'),jurdClean[i-1],jurdClean[i-1])					
					}	
				}
			}	
			break;
		case '8': //history
			for (x=1;x<hisList.length/2+1;x++){
				if (hisList[(x-1)*2]==selectedGradeValue ){
					jurdRaw = hisList[(x-1)*2+1];
					var jurdClean = jurdRaw.split("/");
					
					for (i=1;i<jurdClean.length+1;i++){
						addOption(document.getElementById('jurdid'),jurdClean[i-1],jurdClean[i-1])						
					}	
				}
			}	
			break;
		case '9': //visual arts
			for (x=1;x<visList.length/2+1;x++){
				if (visList[(x-1)*2]==selectedGradeValue ){
					jurdRaw = visList[(x-1)*2+1];
					var jurdClean = jurdRaw.split("/");
					
					for (i=1;i<jurdClean.length+1;i++){
						addOption(document.getElementById('jurdid'),jurdClean[i-1],jurdClean[i-1])					
					}
				}
			}	
			break;
		case '10': //vocabulary
			for (x=1;x<vocList.length/2+1;x++){
				if (vocList[(x-1)*2]==selectedGradeValue ){
					//addOption(document.nde_selector.jurdid,wriList[(x-1)*2+1],wriList[(x-1)*2+1])

					jurdRaw = vocList[(x-1)*2+1];
					var jurdClean = jurdRaw.split("/");
					
					for (i=1;i<jurdClean.length+1;i++){
						addOption(document.getElementById('jurdid'),jurdClean[i-1],jurdClean[i-1])					
					}
				}
			}	
			break;
		case '11': //writing
			for (x=1;x<wriList.length/2+1;x++){
				if (wriList[(x-1)*2]==selectedGradeValue ){
					
					jurdRaw = wriList[(x-1)*2+1];
					var jurdClean = jurdRaw.split("/");
					
					for (i=1;i<jurdClean.length+1;i++){
						addOption(document.getElementById('jurdid'),jurdClean[i-1],jurdClean[i-1])						
					}	
				}
			}	
			break;	
	}
}

function changejurd() {
	switch($('#jurdid').parent().find('span').text())
	{
		case "National":
			jurisdiction = "NT"
			break;
		case "All States":
			jurisdiction = "NP,AL,AK,AZ,AR,CA,CO,CT,DE,DC,FL,GA,HI,ID,IL,IN,IA,KS,KY,LA,ME,MD,MA,MI,MN,MS,MO,MT,NE,NV,NH,NJ,NM,NY,NC,ND,OH,OK,OR,PA,RI,SC,SD,TN,TX,UT,VT,VA,WA,WV,WI,WY,DS"
			break;
		case "Participating States":
			jurisdiction = "NP,AR,CT,FL,ID,IL,IA,MA,NH,NJ,SD,WV"
			break;
		
		case "All Districts":
			jurisdiction = "NP,NL,XQ,XA,XU,XM,XB,XT,XC,XV,XS,XR,XW,XF,XO,XH,XJ,XL,XI,XK,XN,XP,XD"
			break;
	}
}

function changevari() {	
	switch($('#variid').parent().find('span').attr('title'))
	{
		case '0':
			break;
		case '1':
			variable = "TOTAL"
			break;
		case '2':
			variable = "GENDER"
			break;
		case '3':
			variable = "SDRACE"
			break;
		case '4':
			variable = "CENSREG"
			break;
		case '5':
			variable = "SCHTYPE"
			break;
		case '6':
			variable = "SLUNCH3"
			break;
		case '7':
			variable = "PARED"
			break;
		case '8':
			variable = "IEP"
			break;
		case '9':
			variable = "LEP"
			break;
	}
}

function changestat(selstat) {
	switch($('#statid').parent().find('span').attr('title'))
	{
		case '0':
			break;
		case '1':
			// average score
			statistics = "MN_MN"
			break;
		case '2':
			// percentages
			statistics = "RP_RP"
			break;
		case '3':
			// achievement level
			statistics = "ALC_BB,ALC_AB,ALC_AP,ALC_AD"
			break;
		case '4':
			// percentiles
			statistics = "PC_P1,PC_P2,PC_P5,PC_P7,PC_P9"
			break;
	}
}

function showtable(){

		switch(true){
			case ($('#subjectid').parent().find('span').text() == 'Select a Subject'):
				alert("Please select a subject");
				break;
			case ($('#gradeid').parent().find('span').text() == 'Select a Grade'):
				alert("Please select a grade");
				break;
			case ($('#jurdid').parent().find('span').text() == 'Select a Jurisdiction'):
				alert("Please select a jurisdiction");
				break;
			case ($('#variid').parent().find('span').text() == 'Select a Variable'):
				alert("Please select a variable");
				break;
			case ($('#statid').parent().find('span').text() == 'Select a Statistic'):
				alert("Please select a statistic");
				break;
		
			default:
				switch(subject){
					case (subject="CIV"):
						years = "20143,20103,20063,19983"
						framework = "-2-"
						break;
					case (subject="ECN"):
						years = "20123,20063"
						framework = "-2-"
						break;
					case (subject="GEO"):
					  	years = "20143,20103,20013,20012,19942"
						framework = "-2-"
						break;
					case (subject="MAT"):
						if(grade=="3"){
							framework = "-3-"
							if(document.getElementById('jurdid').selectedIndex == 2){
								years = "20153,20133,20093"
								}
							else{
								years = "20153,20133,20093,20053"	
							}
							scale = "MWPCM"
							}
						else{
							years = "20153,20133,20113,20093,20073,20053,20033,20003,20002,19963,19962,19922,19902"
							framework = "-2-"
							scale = "MRPCM"
						}
						break;
					case (subject="MUS"):
						years = "20083"
						framework = "-2-"
						break;
					case (subject="RED"):
						
						if( grade == "3"){

							if(document.getElementById('jurdid').selectedIndex == 2) {
								years = "20153,20133,20093"					   
							}
							else{
								years = "20153,20133,20113,20093,20073,20053,20033,20023,20003,20002,19983,19982,19942,19922"
							}
						}
						else{
								years = "20153,20133,20113,20093,20073,20053,20033,20023,20003,20002,19983,19982,19942,19922"
						}

						framework = "-2-"
						break;
				
					case (subject="SCI"):
						years = "20113,20093"
						framework = "-3-"
						break;
					case (subject="HIS"):
						years = "20143,20103,20063,20013,20012,19942"
						framework = "-2-"
						break;
					case (subject="VIS"):
						years = "20083"
						framework = "-2-"
						break;
					case (subject="VOC"):						
						if( grade == "3"){
							years = "20093"					   
						}
						else{
							years = "20113,20093"
						}
						
						framework = "-3-"						
						
						if(document.getElementById('statid').selectedIndex==2){							
							errCode = "voc1"	
						}
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
						
			if(errCode==""){
				var oldWin = window.open(linkstring,"ndewindow");
				oldWin.focus();			
				}
			else{
				alert("Achievement Level results are not available for vocabulary. Please select average scores or percentiles as the statistics.");
			}
			break;			
		}
}

function downloadData(fileType)
{
	if ($('#downloadsubject').parent().find('span').text() == "Select a Subject")
	{
		alert('Please select a subject');
	}
	else
	{
		switch($('#downloadsubject').parent().find('span').attr('title'))
		{
			case "CIV": 
				window.location = "/hgc_2014/files/2014_civics_appendix." + fileType;
				break;
			case "GEO": 
				window.location = "/hgc_2014/files/2014_geography_appendix." + fileType;
				break;
			case "MATHNS": 
				window.location = "/reading_math_2015/files/2015_Tech_Appendix_Math." + getExcelExtension(fileType);
				break;
			case "MATHTUDA": 
				window.location = "/reading_math_2015/files/Technical_Appendix_2015_Math_TUDA." + getExcelExtension(fileType);
				break;
			case "MATH12": 
				window.location = "/reading_math_g12_2013/files/Tech_Appendix_Math_G12." + fileType;
				break;
			case "READNS": 
				window.location = "/reading_math_2015/files/2015_Tech_Appendix_Reading." + getExcelExtension(fileType);
				break;
			case "READTUDA": 
				window.location = "/reading_math_2015/files/Technical_Appendix_2015_Reading_TUDA." + getExcelExtension(fileType);
				break;
			case "READ12": 
				window.location = "/reading_math_g12_2013/files/Tech_Appendix_Reading_G12." + fileType;
				break;
			case "HIS": 
				window.location = "/hgc_2014/files/2014_history_appendix." + fileType;
				break;
			case "VOC": 
				window.location = "/reading_2013/vocabulary/files/2013_Reading_Vocabulary_Appendix_Tables." + fileType;
				break;

		}
	}
}

function getExcelExtension(fileType)
{
	if (fileType == "xls")
	{
		fileType = "xlsx";
	}
	return fileType;
}
