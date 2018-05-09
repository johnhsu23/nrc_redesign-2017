<%@ Page Language="C#" MasterPageFile="~/NRCRedesign2.master" AutoEventWireup="true"%>
<%@ Import Namespace="TimeBasedDisplay" %>
<script runat="server">
  public VisibilityWindowList visList = new VisibilityWindowList();

  protected void Page_Load(object sender, EventArgs e)
  {
    Control PlaceHolderMain = Page.Form.FindControl("PlaceHolderMain");
    
    visList.Add((Control)PlaceHolderMain.FindControl("webinar"), null, "04/10/2018 2:30 PM");
    visList.Apply(Request["time"]);
  }
</script>

<asp:Content ID="PlaceHolderPageTitle" runat="server" ContentPlaceHolderID="PlaceHolderPageTitle">
NAEP Report Cards - Home
</asp:Content>

<asp:Content ID="PlaceHolderAdditionalPageHead" runat="server" ContentPlaceHolderID="PlaceHolderAdditionalPageHead">
<meta name="keywords" content="hybrid home page" />
<meta name="description" content="NAEP Report Cards - Home" />
<meta name="DC.Description" content="NAEP Report Cards - Home" />
<meta name="DC.Title" content="NAEP Report Cards - Home" />
<meta http-equiv="x-ua-compatible" content="IE=edge">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="default_2017/js/autocomplete_dropdown.js"></script>
<script src="default_2017/js/default_2017.js"></script>
<script src="default_2017/js/d3.v3.min.js"></script>

<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js"></script>
<link rel="stylesheet" type="text/css" href="default_2017/css/bootstrap.min.css"> -->
<link rel="stylesheet" type="text/css" href="default_2017/font-awesome/css/font-awesome.min.css">
<link rel="stylesheet" type="text/css" href="default_2017/css/normalize.css">
<!-- <link rel="stylesheet" type="text/css" href="default_2017/css/home.css">
<link rel="stylesheet" type="text/css" href="default_2017/css/john.css">
<link rel="stylesheet" type="text/css" href="default_2017/css/styles.css"> -->
<link rel="stylesheet" type="text/css" href="default_2017/css/main.css">

<link rel="icon" type="image/png" href="default_2017/images/favicon.png">
</asp:Content>

<asp:Content ID="PlaceHolderMain" runat="server" ContentPlaceHolderID="PlaceHolderMain">
		<!-- B  E  G  I  N    C  O  N  T  E  N  T  -->
      <article id="pageContentContainer" class="nrc_pageContentContainer nrc-report container landing-one">
         <section class="row natural">
            <div id="pageContent" class="col-md-8 divide nrc_pageContent">
               <!-- Begin Shared Icons -->
                  <div class="share-it">
                     <div class="chart__share">
                        <a href="#">Click to expand</a>
                        <div class="share__drawer" style="display: block;">
                           <a href="#" class="share__facebook">Facebook</a>
                           <a href="#" class="share__twitter">Twitter</a>
                           <a class="share__email" href="#">Email</a>
                           <a class="share__link" href="#">Permalink</a>
                           <div class="share__permalink-popup">
                              <input type="text">
                           </div>
                        </div>
                     </div>
                  </div>
                  <!-- End Shared Icons -->
               <div class="intro">
                  <h2>​HOW DID U.S. STUDENTS PERFORM ON THE MOST RECENT ASSESSMENTS?</h2>
                  <p>Select a <span class="emphasize">jurisdiction</span> and a <span class="emphasize">result</span> to see how students performed on the latest NAEP assessments.<br/>
                     Click on the <button disabled class="options-menu"><i class="fa fa-caret-down" aria-hidden="true"></i></button> to see the most recent reports in each subject.</p>
               </div>
               <div class="comparison">
                  <div class="select-options jurisdiction-new" role="combobox application" aria-expanded="false" aria-disabled="false" aria-required="false">
                     <label>SELECT JURISDICTION:</label>
                     <div role="textbox" tabindex="0" aria-readonly="true" class="select">Public and nonpublic schools</div>
                     <div role="listbox" tabindex="-1" aria-multiselectable="false" class="dropdown-menu scrollable-menu">
                        <span class="fa fa-search"></span>
                        <input class="search" tabindex="-1"/>
                        <div class="menu-section-header national">National</div>
                        <div class="menu-section national">
                           <div>Public and nonpublic schools</div>
                           <div>Public schools only</div>
                           <div>Private schools only</div>
                           <div>Large city public schools</div>
                        </div>
                        <div class="menu-section-header states">States</div>
                        <div class="menu-section states">
                           <div>Alabama</div>
                           <div>Alaska</div>
                           <div>Arizona</div>
                           <div>Arkansas</div>
                           <div>California</div>
                           <div>Colorado</div>
                           <div>Connecticut</div>
                           <div>Delaware</div>
                           <div>District of Columbia</div>
                           <div>DoDEA</div>
                           <div>Florida</div>
                           <div>Georgia</div>
                           <div>Hawaii</div>
                           <div>Idaho</div>
                           <div>Illinois</div>
                           <div>Indiana</div>
                           <div>Iowa</div>
                           <div>Kansas</div>
                           <div>Kentucky</div>
                           <div>Louisiana</div>
                           <div>Maine</div>
                           <div>Maryland</div>
                           <div>Massachusetts</div>
                           <div>Michigan</div>
                           <div>Minnesota</div>
                           <div>Mississippi</div>
                           <div>Missouri</div>
                           <div>Montana</div>
                           <div>Nebraska</div>
                           <div>Nevada</div>
                           <div>New Hampshire</div>
                           <div>New Jersey</div>
                           <div>New Mexico</div>
                           <div>New York</div>
                           <div>North Carolina</div>
                           <div>North Dakota</div>
                           <div>Ohio</div>
                           <div>Oklahoma</div>
                           <div>Oregon</div>
                           <div>Pennsylvania</div>
                           <div>Rhode Island</div>
                           <div>South Carolina</div>
                           <div>South Dakota</div>
                           <div>Tennessee</div>
                           <div>Texas</div>
                           <div>Utah</div>
                           <div>Vermont</div>
                           <div>Virginia</div>
                           <div>Washington</div>
                           <div>West Virginia</div>
                           <div>Wisconsin</div>
                           <div>Wyoming</div>
                        </div>
                        <div class="menu-section-header district">Districts</div>
                        <div class="menu-section district">
                           <div>Albuquerque</div>
                           <div>Atlanta</div>
                           <div>Austin</div>
                           <div>Baltimore City</div>
                           <div>Boston</div>
                           <div>Charlotte</div>
                           <div>Chicago</div>
                           <div>Cleveland</div>
                           <div>Dallas</div>
                           <div>Detroit</div>
                           <div>District of Columbia (DCPS)</div>
                           <div>Duval County (FL)</div>
                           <div>Fresno</div>
                           <div>Hillsborough County (FL)</div>
                           <div>Houston</div>
                           <div>Jefferson County (KY)</div>
                           <div>Los Angeles</div>
                           <div>Miami-Dade</div>
                           <div>Milwaukee</div>
                           <div>New York City</div>
                           <div>Philadelphia</div>
                           <div>San Diego</div>
                        </div>
                     </div>
                  </div>
                  <div class="select-options result-new" role="combobox application" aria-expanded="false" aria-disabled="false" aria-required="false">
                     <label>select result:</label>
                     <div role="textbox" tabindex="0" aria-readonly="true" class="select">At or above <em>Proficient</em></div>
                     <div role="listbox" tabindex="-1" aria-multiselectable="false" class="dropdown-menu scrollable-menu">                  
                        <div class="menu-section-header achievement-level">Achievement Level</div>
                        <div class="menu-section achievement-level">
                           <div>At <em>Advanced</em></div>
                           <div>At or above <em>Proficient</em></div>
                           <div>At or above <em>Basic</em></div>
                        </div>

                        <div class="menu-section-header average-scores">Changes in Average Scores</div>
                        <div class="menu-section states average-scores">
                           <div>Compared to base year</div>
                           <div>Compared to most recent year</div>
                        </div>
                        
                     </div>
                  </div>
               </div><!-- end comparison div -->
               <div class="table-container">
                  <div class="cover">
                     <div class="loader"></div>
                  </div>
                  <table class="nrc-rteTable-default report-card" width="100%" cellspacing="0">
                     <thead>
                        <tr>
                           <th></th>
                           <th colspan="3" id="rt"><span>PERCENTAGE OF STUDENTS AT OR ABOVE <em>Proficient</em></span></th>
                        </tr>
                        <tr>
                           <th class="nrc-rteTable-default">​</th>
                           <th class="nrc-rteTable-default" id="g4">Grade 4​</th>
                           <th class="nrc-rteTable-default" id="g8">​Grade 8</th>
                           <th class="nrc-rteTable-default" id="g12">​Grade 12</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <th class="nrc-rteTable-default">​<button class="options-menu"><i class="fa fa-caret-down" aria-hidden="true"></i></button><span>Arts: Music</span></th>
                           <td class="nrc-rteTable-default" aria-labeledby="g4 rt">​</td>
                           <td class="nrc-rteTable-default" aria-labeledby="g8 rt">​</td>
                           <td class="nrc-rteTable-default" aria-labeledby="g12 rt">​</td>
                        </tr>
                        <tr>
                           <th class="nrc-rteTable-default">​<button class="options-menu"><i class="fa fa-caret-down" aria-hidden="true"></i></button><span>Arts: Visual Arts</span></th>
                           <td class="nrc-rteTable-default" aria-labeledby="g4 rt">​</td>
                           <td class="nrc-rteTable-default" aria-labeledby="g8 rt">​</td>
                           <td class="nrc-rteTable-default" aria-labeledby="g12 rt">​</td>
                        </tr>
                        <tr>
                           <th class="nrc-rteTable-default">​<button class="options-menu"><i class="fa fa-caret-down" aria-hidden="true"></i></button><span>Civics</span></th>
                           <td class="nrc-rteTable-default" aria-labeledby="g4 rt">​</td>
                           <td class="nrc-rteTable-default" aria-labeledby="g8 rt">​</td>
                           <td class="nrc-rteTable-default" aria-labeledby="g12 rt">​</td>
                        </tr>
                        <tr>
                           <th class="nrc-rteTable-default"><button class="options-menu"><i class="fa fa-caret-down" aria-hidden="true"></i></button><span>Economics</span></th>
                           <td class="nrc-rteTable-default" aria-labeledby="g4 rt">​</td>
                           <td class="nrc-rteTable-default" aria-labeledby="g8 rt">​</td>
                           <td class="nrc-rteTable-default" aria-labeledby="g12 rt">​</td>
                        </tr>
                        <tr>
                           <th class="nrc-rteTable-default">​<button class="options-menu"><i class="fa fa-caret-down" aria-hidden="true"></i></button><span>Geography</span></th>
                           <td class="nrc-rteTable-default" aria-labeledby="g4 rt">​</td>
                           <td class="nrc-rteTable-default" aria-labeledby="g8 rt">​</td>
                           <td class="nrc-rteTable-default" aria-labeledby="g12 rt">​</td>
                        </tr>
                        <tr>
                           <th class="nrc-rteTable-default"><button class="options-menu"><i class="fa fa-caret-down" aria-hidden="true"></i></button><span id="MathLink">​Mathematics</span></th>
                           <td class="nrc-rteTable-default" aria-labeledby="g4 rt">​</td>
                           <td class="nrc-rteTable-default" aria-labeledby="g8 rt">​</td>
                           <td class="nrc-rteTable-default" aria-labeledby="g12 rt">​</td>
                        </tr>
                        <tr id="MathRow" style="display:none;">
                           <th class="nrc-rteTable-default" colspan="4">
                              <div id="MathMenu" style="display:none;">​<span>National State TUDA</span></div>
                           </th>
                        </tr>
                        <tr>
                           <th class="nrc-rteTable-default">​<button class="options-menu"><i class="fa fa-caret-down" aria-hidden="true"></i></button><span>Reading</span></th>
                           <td class="nrc-rteTable-default" aria-labeledby="g4 rt">​</td>
                           <td class="nrc-rteTable-default" aria-labeledby="g8 rt">​</td>
                           <td class="nrc-rteTable-default" aria-labeledby="g12 rt">​</td>
                        </tr>
                        <tr>
                           <th class="nrc-rteTable-default">​<button class="options-menu"><i class="fa fa-caret-down" aria-hidden="true"></i></button><span>Science</span></th>
                           <td class="nrc-rteTable-default" aria-labeledby="g4 rt">​</td>
                           <td class="nrc-rteTable-default" aria-labeledby="g8 rt">​</td>
                           <td class="nrc-rteTable-default" aria-labeledby="g12 rt">​</td>
                        </tr>
                        <tr>
                           <th class="nrc-rteTable-default">​<button class="options-menu"><i class="fa fa-caret-down" aria-hidden="true"></i></button><span>Technology &amp; Engineering Literacy</span></th>
                           <td class="nrc-rteTable-default" aria-labeledby="g4 rt">​</td>
                           <td class="nrc-rteTable-default" aria-labeledby="g8 rt">​</td>
                           <td class="nrc-rteTable-default" aria-labeledby="g12 rt">​</td>
                        </tr>
                        <tr>
                           <th class="nrc-rteTable-default">​<button class="options-menu"><i class="fa fa-caret-down" aria-hidden="true"></i></button><span>U.S. History</span></th>
                           <td class="nrc-rteTable-default" aria-labeledby="g4 rt">​</td>
                           <td class="nrc-rteTable-default" aria-labeledby="g8 rt">​</td>
                           <td class="nrc-rteTable-default" aria-labeledby="g12 rt">​</td>
                        </tr>
                        <tr>
                           <th class="nrc-rteTable-default"><button class="options-menu"><i class="fa fa-caret-down" aria-hidden="true"></i></button><span>Writing</span></th>
                           <td class="nrc-rteTable-default" aria-labeledby="g4 rt">​</td>
                           <td class="nrc-rteTable-default" aria-labeledby="g8 rt">​</td>
                           <td class="nrc-rteTable-default" aria-labeledby="g12 rt">​</td>
                        </tr>
                     </tbody>
                  </table>
               </div><!-- end table-container div -->
               <div class="color-legend donuts">
                  <h6>KEY: </h6>
                  <ul>
                     <li>
                        <svg viewBox="0 0 40 40" class="percentage opt-0">
                           <path d="m5,16h47v20h-50z" />
                           <!-- <path d="m5,16h30v20h-30z"/> -->
                        </svg> DATA NOT AVAILABLE
                     </li>
                     <!-- <li><span class="opt-1"></span>10 - 19%</li>
                     <li><span class="opt-2"></span>20 - 29%</li>
                     <li><span class="opt-3"></span>30 - 39%</li>
                     <li><span class="opt-4"></span>40 - 49%</li> -->
                  </ul>
               </div>
               <div class="color-legend arrows">
                  <h6>KEY: </h6>
                  <ul class="two-column">
                     <li>
                        <svg viewBox="0 0 50 38" class="percentage up-trend">
                           <path d="M0,18 l25,-18 l25,18 h-7 v20 h-36 v-20 h-7"/>
                        </svg> INCREASE</li>
                     <li>
                        <svg viewBox="0 0 50 38" class="percentage down-trend">
                           <path d="M0,20 l25,18 l25,-18 h-7 v-20 h-36 v20 h-7"/>
                        </svg> DECREASE</li>
                     <li>
                        <svg viewBox="0 0 36 36 " class="percentage no-trend ">
                           <path d="M0,18 l18,-18 l18,18 l-18,18 l-18-18"/>
                        </svg> NO SIGNIFICANT CHANGE</li>
                     <li> 
                        <svg viewBox="0 0 40 40" class="percentage opt-0">
                           <path d="m5,16h47v20h-50z" />
                           <!-- <path d="m5,16h30v20h-30z"/> -->
                        </svg> DATA NOT AVAILABLE</li>
                  </ul>
               </div>
               <p class="note">NOTE: DoDEA = Department of Defense Education Activity (overseas and domestic schools). Year shown with achievement-level results is the most recent assessment year in that grade and subject combination. Not all assessments are administered at all grades. For more information on each subject, click on the report of interest in the menu at​ the top of this page under the report tab.​​​ Base year indicates the first assessment year in that grade and subject combination.</p>
               <div class="nrc-report-list-menu">
                  <div class="music achievement-level">
                     <h5>Most Recent Results in Arts: Music</h5>
                     <ul>
                        <li>No links available</li>
                     </ul>
                  </div>
                  <div class="visual-arts achievement-level">
                     <h5>Most Recent Results in Arts: Visual Arts</h5>
                     <ul>
                        <li>No links available</li>
                     </ul>
                  </div>
                  <div class="civics achievement-level">
                     <h5>Most Recent Results in Civics</h5>
                     <ul>
                        <li><a href="civics_2010/g4_national.aspx?tab_id=tab2&subtab_id=Tab_1#chart">National 2010 (grade 4)</a></li>
                        <li><a href="hgc_2014/#civics/achievement">National 2014 (grade 8)</a></li>
                        <li><a href="civics_2010/g12_national.aspx?tab_id=tab2&subtab_id=Tab_1#chart">National 2010 (grade 12)</a></li>
                     </ul>
                  </div>
                  <div class="economics achievement-level"><h5>Most Recent Results in Economics</h5>
                     <ul>
                        <li><a href="economics_2012/overall.aspx#1-0">National 2012 (grade 12)</a></li>
                     </ul>
                  </div>
                  <div class="geography achievement-level"><h5>Most Recent Results in Geography</h5>
                     <ul>
                        <li><a href="geography_2010/g4_nat.aspx?tab_id=tab2&subtab_id=Tab_1#chart">National 2010 (grade 4)</a></li>
                        <li><a href="hgc_2014/#geography/achievement">National 2014 (grade 8)</a></li>
                        <li><a href="geography_2010/g12_nat.aspx?tab_id=tab2&subtab_id=Tab_1#chart">National 2010 (grade 12)</a></li>
                     </ul>
                  </div>
                  <div class="math achievement-level"><h5>Most Recent Results in Mathematics</h5>
                     <ul>
                        <li><a href="math_2017/#/nation/achievement?grade=4">National 2017 (grade 4)</a></li>
                        <li><a href="math_2017/#/nation/achievement?grade=8">National 2017 (grade 8)</a></li>
                        <li><a href="math_2017/#/states/achievement?grade=4">State 2017 (grade 4)</a></li>
                        <li><a href="math_2017/#/states/achievement?grade=8">State 2017 (grade 8)</a></li>
                        <li class="tuda"><a href="math_2017/#/districts/scores?grade=4">District 2017 (grade 4)</a></li>
                        <li class="tuda"><a href="math_2017/#/districts/scores?grade=8">District 2017 (grade 8)</a></li>
                        <!-- <li><a href="reading_math_2015/#mathematics/acl?grade=4">National 2015 (grade 4)</a></li>
                        <li><a href="reading_math_2015/#mathematics/acl?grade=8">National 2015 (grade 8)</a></li>
                        <li><a href="reading_math_g12_2015/#mathematics/acl">National 2015 (grade 12)</a></li>
                        <li><a href="reading_math_2015/#mathematics/state/acl?grade=4">State 2015 (grade 4)</a></li>
                        <li><a href="reading_math_2015/#mathematics/state/acl?grade=8">State 2015 (grade 8)</a></li>
                        <li class="tuda"><a href="reading_math_2015/#mathematics/district/comparisons/XQ?grade=4">District 2015 (grade 4)</a></li>
                        <li class="tuda"><a href="reading_math_2015/#mathematics/district/comparisons/XQ?grade=8">District 2015 (grade 8)</a></li> -->
                     </ul>
                  </div>
                  <div class="reading achievement-level"><h5>Most Recent Results in Reading</h5>
                     <ul>
                        <li><a href="reading_2017/#/nation/achievement?grade=4">National 2017 (grade 4)</a></li>
                        <li><a href="reading_2017/#/nation/achievement?grade=8">National 2017 (grade 8)</a></li>
                        <li><a href="reading_2017/#/states/achievement?grade=4">State 2017 (grade 4)</a></li>
                        <li><a href="reading_2017/#/states/achievement?grade=8">State 2017 (grade 8)</a></li>
                        <li class="tuda"><a href="reading_2017/#/districts/scores?grade=4">District 2017 (grade 4)</a></li>
                        <li class="tuda"><a href="reading_2017/#/districts/scores?grade=8">District 2017 (grade 8)</a></li>
                     </ul>
                  </div>
                  <div class="science achievement-level"><h5>Most Recent Results in Science</h5>
                     <ul>
                        <li><a href="science_2015/#acl?grade=4">National 2015 (grade 4)</a></li>
                        <li><a href="science_2015/#acl/chart_loc_1?grade=8">National 2015 (grade 8)</a></li>
                        <li><a href="science_2015/#acl/chart_loc_1?grade=12">National 2015 (grade 12)</a></li>
                        <li><a href="science_2015/#state/acl?grade=4">State 2015 (grade 4)</a></li>
                        <li><a href="science_2015/#state/acl/chart_loc_1?grade=8">State 2015 (grade 8)</a></li>
                        <li class="tuda"><a href="science_2009/g4_district.aspx?tab_id=tab2&subtab_id=Tab_1#tabsContainer">District 2009 (grade 4)</a></li>
                        <li class="tuda"><a href="science_2009/g8_district.aspx?tab_id=tab2&subtab_id=Tab_1#tabsContainer">District 2009 (grade 8)</a></li>
                     </ul>
                  </div>
                  <div class="tel achievement-level"><h5>Most Recent Results in Technology & Engineering Literacy</h5>
                     <ul>
                        <li><a href="tel_2014/#results/overall">National 2014 (grade 8)</a></li>
                     </ul>
                  </div>
                  <div class="history achievement-level"><h5>Most Recent Results in U.S. History</h5>
                     <ul>
                        <li><a href="ushistory_2010/g4_nat.aspx?tab_id=tab2&subtab_id=Tab_1#chart">National 2010 (grade 4)</a></li>
                        <li><a href="hgc_2014/#history/achievement">National 2014 (grade 8)</a></li>
                        <li><a href="ushistory_2010/g12_nat.aspx?tab_id=tab2&subtab_id=Tab_1#chart">National 2010 (grade 12)</a></li>
                     </ul>
                  </div>
                  <div class="writing achievement-level"><h5>Most Recent Results in Writing</h5>
                     <ul>
                        <li><a href="https://nces.ed.gov/nationsreportcard/pdf/main2002/2003529.pdf">National and State 2002 (grade 4)</a></li>
                        <li><a href="writing_2011/g8_national.aspx?tab_id=tab2&subtab_id=Tab_1#chart">National 2011 (grade 8)</a></li>
                        <li><a href="writing_2011/g12_national.aspx?tab_id=tab2&subtab_id=Tab_1#chart">National 2011 (grade 12)</a></li>
                        <li><a href="writing_2007/w0006.aspx">State 2007 (grade 8)</a></li>
                        <li><a href="http://nces.ed.gov/nationsreportcard/pdf/dst2002/2003530.pdf">District 2002 (grade 4)</a></li>
                        <li><a href="writing_2007/w0038.aspx">District 2007 (grade 8)</a></li>
                     </ul>
                  </div>
                  
                  <div class="music trend">
                     <h5>Most Recent Results in Arts: Music</h5>
                     <ul>
                        <li><a href="arts_2016/#/music/overall-results">National Music 2016 (grade 8)</a></li>
                     </ul>
                  </div>
                  <div class="visual-arts trend">
                     <h5>Most Recent Results in Arts: Visual Arts</h5>
                     <ul>
                        <li><a href="arts_2016/#/visual-arts/overall-results">National Visual Arts 2016 (grade 8)</a></li>
                     </ul>
                  </div>
                  <div class="civics trend">
                     <h5>Most Recent Trend Results in Civics</h5>
                     <ul>
                        <li><a href="civics_2010/g4_national.aspx">National 2010 (grade 4)</a></li>
                        <li><a href="hgc_2014/#civics/scores">National 2014 (grade 8)</a></li>
                        <li><a href="civics_2010/g12_national.aspx">National 2010 (grade 12)</a></li>
                     </ul>
                  </div>
                  <div class="economics trend"><h5>Most Recent Trend Results in Economics</h5>
                     <ul>
                        <li><a href="economics_2012/overall.aspx">National 2012 (grade 12)</a></li>
                     </ul>
                  </div>
                  <div class="geography trend"><h5>Most Recent Trend Results in Geography</h5>
                     <ul>
                        <li><a href="geography_2010/g4_nat.aspx">National 2010 (grade 4)</a></li>
                        <li><a href="hgc_2014/#geography/scores">National 2014 (grade 8)</a></li>
                        <li><a href="geography_2010/g12_nat.aspx">National 2010 (grade 12)</a></li>
                     </ul>
                  </div>
                  <div class="math trend"><h5>Most Recent Trend Results in Mathematics</h5>
                     <ul>
                        <li class="national"><a href="math_2017/#/nation/scores?grade=4">National 2017 (grade 4)</a></li>
                        <li class="national"><a href="math_2017/#/nation/scores?grade=8">National 2017 (grade 8)</a></li>
                        <li class="national"><a href="math_2017/#/states/scores?grade=4">State 2017 (grade 4)</a></li>
                        <li><a href="math_2017/#/states/scores?grade=8">State 2017 (grade 8)</a></li>
                        <li class="tuda"><a href="math_2017/#/districts/scores?grade=4">District 2017 (grade 4)</a></li>
                        <li class="tuda"><a href="math_2017/#/districts/scores?grade=8">District 2017 (grade 8)</a></li>
                     </ul>
                  </div>
                  <div class="reading trend"><h5>Most Recent Trend Results in Reading</h5>
                     <ul>
                        <li><a href="reading_2017/#/nation/scores?grade=4">National 2017 (grade 4)</a></li>
                        <li><a href="reading_2017/#/nation/scores?grade=8">National 2017 (grade 8)</a></li>
                        <li><a href="reading_2017/#/states/scores?grade=4">State 2017 (grade 4)</a></li>
                        <li><a href="reading_2017/#/states/scores?grade=8">State 2017 (grade 8)</a></li>
                        <li class="tuda"><a href="reading_2017/#/districts/scores?grade=4">District 2017 (grade 4)</a></li>
                        <li class="tuda"><a href="reading_2017/#/districts/scores?grade=8">District 2017 (grade 8)</a></li>
                     </ul>
                  </div>
                  <div class="science trend"><h5>Most Recent Trend Results in Science</h5>
                     <ul>
                        <li><a href="science_2015/#scores?grade=4">National (grade 4)</a></li>
                        <li><a href="science_2015/#scores/chart_loc_1?grade=8">National (grade 8)</a></li>
                        <li><a href="science_2015/#scores/chart_loc_1?grade=12">National (grade 12)</a></li>
                        <li><a href="science_2015/#state/scores?grade=4">State (grade 4)</a></li>
                        <li><a href="science_2015/#state/scores?grade=8">State (grade 8)</a></li>
                        <li class="tuda"><a href="science_2009/g4_district.aspx">District 2009 (grade 4)</a></li>
                        <li class="tuda"><a href="science_2009/g8_district.aspx">District 2009 (grade 8)</a></li>
                     </ul>
                  </div>
                  <div class="tel trend"><h5>Most Recent Trend Results in Technology &amp; Engineering Literacy</h5>
                     <ul>
                        <li>No links available</li>
                     </ul>
                  </div>
                  <div class="history trend"><h5>Most Recent Trend Results in U.S. History</h5>
                     <ul>
                        <li><a href="ushistory_2010/g4_nat.aspx">National 2010 (grade 4)</a></li>
                        <li><a href="hgc_2014/#history/scores">National 2014 (grade 8)</a></li>
                        <li><a href="ushistory_2010/g12_nat.aspx">National 2010 (grade 12)</a></li>
                     </ul>
                  </div>
                  <div class="writing trend"><h5>Most Recent Trend Results in Writing</h5>
                     <ul>
                        <li><a href="https://nces.ed.gov/nationsreportcard/pdf/main2002/2003529.pdf">National and State 2002 (grade 4)</a></li>
                        <li><a href="writing_2011/g8_national.aspx">National 2011 (grade 8)</a></li>
                        <li><a href="writing_2011/g12_national.aspx">National 2011 (grade 12)</a></li>
                        <li><a href="writing_2007/w0005.aspx">State 2007 (grade 8)</a></li>
                        <li><a href="http://nces.ed.gov/nationsreportcard/pdf/dst2002/2003530.pdf">District 2002 (grade 4)</a></li>
                        <li><a href="writing_2007/w0037.aspx">District 2007 (grade 8)</a></li>
                     </ul>
                  </div>
               </div> 
            </div>
            <div class="col-md-4">
               <div class="row next-section nrc-promo">
                  <h3>The Nation's Report Card</h3>
                  <p>is the largest ongoing assessment of what U.S. students know and can do.</p>
               </div>
               <div class="row next-section">
                  <div class="col-md-12">
                     <div class="box-display">
                        <div class="box-text">
                           <h5>Results from the 2017 NAEP mathematics and reading assessments are in!</h5>
                        </div>
                        <div class="box-img">
                           <img src="/default_2017/images/home_thumb.png" />
                        </div>
                     </div>
					 <asp:Literal id="webinar" runat="server">
                     <a class="feature-btn" href="https://www.eventbrite.com/e/naep-day-the-release-of-the-2017-nations-report-card-tickets-43937837254">Register for the 10 a.m. release event</a>
					 </asp:Literal>
                     <div class="box-display">
                        <strong>Key findings for mathematics and reading are available in the <a href="reading_math_2017_highlights/">NAEP Highlights</a>.</strong>
                     </div>
                     <strong>National Results</strong>
                     <ul>
                        <li>Reading grade 8 score increased by 1 point compared to 2015.</li>
                        <li>All reading and math scores higher than the 1990s.</li>
                     </ul>
                     <strong>State Results</strong>
                     <ul>
                        <li>Score increases in Florida in mathematics at both grades and grade 8 reading.</li>
                        <li>Decreases in Louisiana, New Hampshire, and South Carolina at grade 4 mathematics and reading.</li>
                        <li>Decreases in Alaska and Vermont in mathematics at both grades and in reading at grade 4.</li>
                     </ul>
                     <strong>Trial Urban District Assessment (TUDA) Results</strong>
                     <ul>
                        <li>Score increases in San Diego at grade 4 mathematics and reading.</li>
                        <li>Increases in 2 Florida districts in mathematics at grade 4.</li>
                     </ul>

                     <h5>Explore the NAEP <a href = "math_2017/">Mathematics</a> and <a href = "reading_2017">Reading</a> Report Cards for in-depth results.</h5>
                     <div class="embed-responsive embed-responsive-16by9">
                       <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/KrD1cVLeYcM?rel=0&showinfo=0" allowfullscreen></iframe>
                     </div>
                     <ul>
                        <li>Read a statement from the <strong><a href = "https://www.nagb.gov/naep-results/mathematics/2017-naep-reading-and-math-report.html ">National Assessment Governing Board</a></strong>.</li>
                     </ul>
                  </div>
               </div>
               <div class="row next-section">
                  <div class="col-md-12">
                     <div class="box-display">
                        <div class="box-text">
                           <h5>Improved <a href="ndecore/landing/">NAEP Data Explorer</a></h5>
                           <ul>
                              <li>Create an account and save reports.</li>
                              <li>Copy and edit existing reports.</li>
                              <li>Save, share, or export statistical tests and charts.</li>
                           </ul>
                        </div>
                        <div class="box-img">
                           <img src="/default_2017/images/nde.png" />
                        </div>
                     </div>
                     <!-- <img src="/default_2017/images/home_thumb_dba.png" alt="Newest Report Cover Image" class="cover-img" />
                     <h4>The new and improved NAEP Data Explorer is here!</h4>
                     <ul style = "margin-top:50px;padding:8px 0 14px 14px;">
                        <li>Create an account and save reports</li>
                        <li>Copy and edit existing reports</li>
                        <li>Save, share, or export statistical tests and charts</li>
                     </ul> -->
                  </div>
               </div>
               <!-- <div class="row next-section">
                  <div class="col-md-12">
                     <h4>NAEP in 2018</h4>
                     <div class="box-display">
                        <div class="box-text">
                           <h5 class="subtitle">Eighth-graders across the nation will take these NAEP assessments in 2018: </h5>
                        </div>
                     </div>
                     <p style = "margin-bottom:6px;">Technology and Engineering Literacy (TEL)</p>
                     <ul style = "padding:0 0 0 20px;list-style-type: disc;margin-bottom:25px;">
                        <li>See <strong><a href = "tel_2014/">results</a></strong> from the 2014 TEL assessment.</li>
                        <li>Try an <strong><a href = "tel_2014/#tasks/overview">interactive TEL task.</a></strong></li>
                     </ul>                        
                     <p style = "margin-bottom:6px;">Civics, Geography, and U.S. History</p>
                     <ul style = "padding:0 0 0 20px;list-style-type: disc"><li><strong><a href = "hgc_2014/">View results</a></strong> from the 2014 assessment.</li></ul>
                  </div>
               </div> -->
            </div>
         </section>
      </article>
      <article class="container landing-two nrc-report">
         <section class="row natural">
            <div class="col-md-7 divide">
               <h5>NAEP in 2018</h5>
               <div class="inner-content">
                  <p>Eighth-graders across the nation will take these NAEP assessments in 2018:
                  <ul>
                     <li><strong>2014 Technology and Engineering Literacy (TEL):</strong> See the <strong><a href="tel_2014/">results</a></strong> or try an <strong><a href="tel_2014/#tasks/overview">interactive TEL task</a></strong>.</li>
                     <li><strong>2014 Civics, Geography, and U.S. History</strong>: See the <strong><a href="hgc_2014/">results</a></strong>.</li>
                  </ul>         
               </div>
            </div>
            <div class="col-md-5">
               <div class="box-display">
                  <div class="box-img">
                     <img src="/default_2017/images/arts.png" alt="child painting" style = "width:100px;"/>
                  </div>
                  <div class="box-text">
                     <h5>2016 <a href="arts_2016/">Arts Report</a></h5>
                     <p>The 2016 NAEP arts assessment measured the knowledge and skills of eighth-grade students in the arts disciplines of music and visual arts.</p>
                  </div>
               </div>
         </section>
         <section class="row natural">
            <div class="dock">
               <div class="col-md-4">
                  <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/-RJ4k0I6h2c" allowfullscreen></iframe>
                  </div>
               </div>
               <div class="col-md-8">
                  <h5>Going Digital: The Future Of NAEP Assessments</h5>
                  <p>NAEP is evolving to address the changing educational landscape by moving to digitally based assessments. To learn more, watch this informative video, see NAEP digitally based tutorials for mathematics, reading, writing, and more.</p>
                  <p>Explore NAEP's transition to <strong><a href="https://nces.ed.gov/nationsreportcard/dba/">digitally based assessments (DBA)</a></strong>, access frequently asked questions, see informative videos, and more.</p>
               </div>
            </div>
         </section>
         <section class="row natural">
            <div class="col-md-4 divide">
               <h5>NAEP Tools &#151; Dig Deeper Into The NAEP Results</h5>
               <div class="inner-content">
                  <p>Find key data about your state.</p>
                  <a class="feature-btn" href="profiles/stateprofile?chort=1&amp;sub=MAT&amp;sj=&amp;sfj=NP&amp;st=MN&amp;year=2017R3">State Profile Tool</a>
                  <p>Explore reports for districts that participate in the Trial Urban District Assessments (TUDA).</p>
                  <a class="feature-btn" href="profiles/districtprofile?chort=1&amp;sub=MAT&amp;sj=XQ&amp;sfj=NL&amp;st=MN&amp;year=2017R3">District Profile Tool</a>
                  <p>See how students at the <em>Basic</em>, <em>Proficient</em>, and <em>Advanced</em> levels are likely to answer various questions correctly.</p>
                  <a class="feature-btn" href="itemmaps/?subj=MAT&amp;grade=4&amp;year=2017">Item Map Tool</a>
               </div>
            </div>
            <div class="col-md-8">
               <h5>National Indian Education Study (NIES): 2015</h5>
               <p>Take a closer look at the condition of education for American Indian and Alaska Native (AI/AN) students in the United States. <strong><a href="https://nces.ed.gov/pubsearch/pubsinfo.asp?pubid=2017161">View the full report</a></strong>.</p>
               <img src="/default_2017/images/nies_graphic_updated_text.png" alt = "In the 2015 NIES Report, 69 percent of AI/AN students at grade 4 reported having a computer in the home compared to 83 percent of fourth-graders nationally. At grade eight, 75 percent of AI/AN students reported having a computer in the home compared to 88 percent of eighth-graders nationally." />
            </div>
         </section>
         <section class="row natural">
            <div class="col-md-6 divide">
               <div class="box-display">
                  <div class="box-img">
                     <img src="/default_2017/images/map_pic.png" />
                  </div>
                  <div class="box-text">
                     <h5>Do Your State's Proficiency Standards Measure Up?</h5>
                     <p>Find out in this <strong><a href="https://nces.ed.gov/nationsreportcard/studies/statemapping/">NCES special study</a></strong>.</p>
                  </div>
               </div>
            </div>
            <div class="col-md-6">
               <div class="box-display">
                  <div class="box-img">
                     <img src="/default_2017/images/fon_pic.png" />
                  </div>
                  <div class="box-text">
                     <h5>Focus On NAEP: Sampling For NAEP Assessments</h5>
                     <p>Learn how NAEP <strong><a href="focus_on_naep/#/reports/sampling">selects schools and students</a></strong> for NAEP assessments.</p>
                  </div>
               </div>
            </div>
         </section>
      </article>
      <!-- E  N  D    C  O  N  T  E  N  T  -->
</asp:Content>

<asp:Content ID="PlaceHolderPageHead" runat="server" ContentPlaceHolderID="PlaceHolderPageHead">
<script src="/WebResource.axd?d=CIsD_jQ5qiPWKwMMaWrMOBA4FAIj0JcHD_YCbIuXPj2T-eY9VHrfMJvvHtL937JWIa2YFzU_EOh1lBkanB4pCw-RpTJ5QDChFr0qQeEISUQ1&amp;t=636160660665894255" type="text/javascript"></script>
</asp:Content>
