<%@ Page Language="C#" MasterPageFile="~/NRC2.master" AutoEventWireup="true"%>

<asp:Content ID="PlaceHolderAdditionalPageHead" runat="server" ContentPlaceHolderID="PlaceHolderAdditionalPageHead">
<script type="text/javascript">
// <![CDATA[
document.write('<script type="text/javascript" src="/Scripts/MicrosoftAjax.js"></' + 'script>');
document.write('<script type="text/javascript" src="/Scripts/MicrosoftAjaxWebForms.js"></' + 'script>');
document.write('<script type="text/javascript" src="/Scripts/nde_dropdown_selector_rm2013.js"></' + 'script>');
// ]]>
</script>
</asp:Content>

<asp:Content ID="PlaceHolderMain" runat="server" ContentPlaceHolderID="PlaceHolderMain">
<div id="pageContentContainer" class="naep_pageContentContainer">		
					
		<div id="pageContent" class="naep_pageContent">
			
			<div id="PubContent">

				<div id="ctl00_PlaceHolderMain_DisplayModePanel">
							
					
					<div id="contentWrapper">
						<!--BEGIN CONTENT-->
						<p>data dropdowns below</p>
						<div align="right">
<form name="nde_selector" id="nde_selector">
  <select name="subjectid" id="subjectid" onchange="changesubject(this);">
<option>Select subject</option>
<option>Mathematics</option>
<option>Reading</option>
</select>
<br>
<select name="gradeid" id="gradeid" onchange="changegrade(this);">
<option>Select grade</option>
<option>Grade 4</option>
<option>Grade 8</option>

</select>
<br>
<select name="jurdid" id="jurdid" onchange="changejurd(this);">
<option>Select jurisdiction</option>
<option>National</option>
<option>All States</option>
</select>
<br>
<select name="variid" id="variid" onchange="changevari(this);">
<option>Select variable</option>
<option>Overall</option>
<option>Gender</option>
<option>Race/Ethnicity (used for reporting trend)</option>
<option>Race/Ethnicity (New student group variable in 2011)
<option>Region</option>
<option>School Location</option>
<option>Type of School</option>
<option>Family Income</option>
<option>Parental Education</option>
<option>Students with Disabilities</option>
<option>English Language Learners</option>
<option>Crosstab: Gender and Students with Disabilities</option>
<option>Crosstab: Gender and English Language Learners</option>
<option>Crosstab: Gender and Type of School</option>
<option>Crosstab: Race/Ethnicity and Gender</option>
<option>Crosstab: Race/Ethnicity and Family Income</option>
<option>Crosstab: Race/Ethnicity and Parental Education</option>
</select>

<br>
<select name="statid" id="statid" onchange="changestat(this);">
<option>Select statistic</option>
<option>Average Scale Score</option>
<option>Percentages</option>
<option>Achievement Level (Cumulative)</option>
<option>Achievement Level (Discrete)</option>
<option>Percentiles</option>
</select>
<br>
<input value="show table" onclick="showtable();" type="button">
</form>
</div>

						<!--END CONTENT--></div>

			    
</div>

			    
			    
			</div><!-- End of #PubContent -->
    	</div><!-- End of #pageContent -->
	</div><!-- End of #pageContentContainer -->
</asp:Content>

<asp:Content ID="PlaceHolderPageHead" runat="server" ContentPlaceHolderID="PlaceHolderPageHead">
<script src="/Scripts/asp.net.js" type="text/javascript"></script>
</asp:Content>
