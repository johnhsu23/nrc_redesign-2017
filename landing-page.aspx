<%@ Page Language="C#" MasterPageFile="~/NRCRedesign2.master" AutoEventWireup="true"%>

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
<script src = "nrc_redesign/js/underscore.js" ></script>
<script src = "nrc_redesign/js/backbone-min.js"></script>
<script src="nrc_redesign/js/autocomplete_dropdown.js"></script>
<script src="nrc_redesign/js/default2017.js"></script>
<script src="nrc_redesign/js/d3.v3.min.js"></script>

<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js"></script>
<link rel="stylesheet" type="text/css" href="nrc_redesign/css/bootstrap.min.css"> -->
<link rel="stylesheet" type="text/css" href="nrc_redesign/font-awesome/css/font-awesome.min.css">
<link rel="stylesheet" type="text/css" href="nrc_redesign/css/normalize.css">
<!-- <link rel="stylesheet" type="text/css" href="nrc_redesign/css/home.css">
<link rel="stylesheet" type="text/css" href="nrc_redesign/css/john.css">
<link rel="stylesheet" type="text/css" href="nrc_redesign/css/styles.css"> -->
<link rel="stylesheet" type="text/css" href="nrc_redesign/css/main.css">

<link rel="icon" type="image/png" href="nrc_redesign/images/favicon.png">
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
                  <h2>​HOW DID U.S. STUDENTS DO ON THE MOST RECENT ASSESSMENTS?</h2>
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
                        <div class="menu-section-header district">District</div>
                        <div class="menu-section district">
                           <div>Albuquerque</div>
                           <div>Atlanta</div>
                           <div>Austin</div>
                           <div>Baltimore City</div>
                           <div>Boston</div>
                           <div>Charlotte-Mecklenburg</div>
                           <div>Chicago</div>
                           <div>Clark County (NV)</div>
                           <div>Cleveland</div>
                           <div>Dallas</div>
                           <div>Denver</div>
                           <div>Detroit</div>
                           <div>District of Columbia (DCPS)</div>
                           <div>Duval County (FL)</div>
                           <div>Fort Worth</div>
                           <div>Fresno</div>
                           <div>Guilford County (NC)</div>
                           <div>Hillsborough County (FL)</div>
                           <div>Houston</div>
                           <div>Jefferson County (KY)</div>
                           <div>Los Angeles</div>
                           <div>Miami-Dade</div>
                           <div>Milwaukee</div>
                           <div>New York City</div>
                           <div>Philadelphia</div>
                           <div>San Diego</div>
                           <div>Shelby County (TN)</div>
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
                           <th class="nrc-rteTable-default">​<button class="options-menu"><i class="fa fa-caret-down" aria-hidden="true"></i></button><span>Arts</span></th>
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
                        <tr id="MathRow" style="display&#58;none;">
                           <th class="nrc-rteTable-default" colspan="4">
                              <div id="MathMenu" style="display&#58;none;">​<span>National State TUDA</span></div>
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
                     <li><span class="opt-1"></span>10 - 19%</li>
                     <li><span class="opt-2"></span>20 - 29%</li>
                     <li><span class="opt-3"></span>30 - 39%</li>
                     <li><span class="opt-4"></span>40 - 49%</li>
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
                           <path d="m5,16h30v20h-30z"/>
                        </svg> DATA NOT AVAILABLE</li>
                  </ul>
               </div>
               <p class="note">NOTE: Year shown with percentages at or above an achievement level are for the most recent assessment in that grade and subject. Not all assessments are administered at all grades. For more information on each subject, click on the report of interest in the menu at​ the top of this page.  The 2011 NAEP writing assessment was based on the new framework and precludes the possibility of reporting trend results prior to 2011.​​​ Scale score ranges are noted in parentheses below each subject label when changes in average scores are shown. Base year indicates the first assessment year in grade and subject.</p> 
               <div class="nrc-report-list-menu">
                   <div class="arts achievement-level">
                     <h5>Most Recent Results in Arts</h5>
                     <ul>
                        <li><a href="arts_2016/#/music/overall-results">National Music 2016 (grade 8)</a></li>
                        <li><a href="arts_2016/#/visual-arts/overall-results">National Visual Arts 2016 (grade 8)</a></li>
                     </ul>
                  </div>
                  <div class="civics achievement-level">
                     <h5>Most Recent Results in Civics</h5>
                     <ul>
                        <li><a href="https://www.nationsreportcard.gov/civics_2010/g4_national.aspx?tab_id=tab2&subtab_id=Tab_1#chart">National 2010 (grade 4)</a></li>
                        <li><a href="https://nrcpreview3.naepims.org/hgc_2014/#civics/achievement">National 2014 (grade 8)</a></li>
                        <li><a href="https://www.nationsreportcard.gov/civics_2010/g12_national.aspx?tab_id=tab2&subtab_id=Tab_1#chart">National 2010 (grade 12)</a></li>
                     </ul>
                  </div>
                  <div class="economics achievement-level"><h5>Most Recent Results in Economics</h5>
                     <ul>
                        <li><a href="https://www.nationsreportcard.gov/economics_2012/overall.aspx#1-0">National 2012 (grade 12)</a></li>
                     </ul>
                  </div>
                  <div class="geography achievement-level"><h5>Most Recent Results in Geography</h5>
                     <ul>
                        <li><a href="https://www.nationsreportcard.gov/geography_2010/g4_nat.aspx?tab_id=tab2&subtab_id=Tab_1#chart">National 2010 (grade 4)</a></li>
                        <li><a href="https://www.nationsreportcard.gov/hgc_2014/#geography/achievement">National 2014 (grade 8)</a></li>
                        <li><a href="https://www.nationsreportcard.gov/geography_2010/g12_nat.aspx?tab_id=tab2&subtab_id=Tab_1#chart">National 2010 (grade 12)</a></li>
                     </ul>
                  </div>
                  <div class="math achievement-level"><h5>Most Recent Results in Mathematics</h5>
                     <ul>
                        <li><a href="https://www.nationsreportcard.gov/reading_math_2015/#mathematics/acl?grade=4">National 2015 (grade 4)</a></li>
                        <li><a href="https://www.nationsreportcard.gov/reading_math_2015/#mathematics/acl?grade=8">National 2015 (grade 8)</a></li>
                        <li><a href="https://www.nationsreportcard.gov/reading_math_g12_2015/#mathematics/acl">National 2015 (grade 12)</a></li>
                        <li><a href="https://www.nationsreportcard.gov/reading_math_2015/#mathematics/state/acl?grade=4">State 2015 (grade 4)</a></li>
                        <li><a href="https://www.nationsreportcard.gov/reading_math_2015/#mathematics/state/acl?grade=8">State 2015 (grade 8)</a></li>
                        <li><a href="https://www.nationsreportcard.gov/reading_math_2015/#mathematics/district/comparisons/XQ?grade=4">District 2015 (grade 4)</a></li>
                        <li><a href="https://www.nationsreportcard.gov/reading_math_2015/#mathematics/district/comparisons/XQ?grade=8">District 2015 (grade 8)</a></li>
                     </ul>
                  </div>
                  <div class="reading achievement-level"><h5>Most Recent Results in Reading</h5>
                     <ul>
                        <li><a href="https://www.nationsreportcard.gov/reading_math_2015/#reading/acl?grade=4">National 2015 (grade 4)</a></li>
                        <li><a href="https://www.nationsreportcard.gov/reading_math_2015/#reading/acl?grade=8">National 2015 (grade 8)</a></li>
                        <li><a href="https://www.nationsreportcard.gov/reading_math_g12_2015/#reading/acl">National 2015 (grade 12)</a></li>
                        <li><a href="https://www.nationsreportcard.gov/reading_math_2015/#reading/state/acl?grade=4">State 2015 (grade 4)</a></li>
                        <li><a href="https://www.nationsreportcard.gov/reading_math_2015/#reading/state/acl?grade=8">State 2015 (grade 8)</a></li>
                        <li><a href="https://www.nationsreportcard.gov/reading_math_2015/#reading/district/comparisons/XQ?grade=4">District 2015 (grade 4)</a></li>
                        <li><a href="https://www.nationsreportcard.gov/reading_math_2015/#reading/district/comparisons/XQ?grade=8">District 2015 (grade 8)</a></li>
                     </ul>
                  </div>
                  <div class="science achievement-level"><h5>Most Recent Results in Science</h5>
                     <ul>
                        <li><a href="https://www.nationsreportcard.gov/science_2015/#acl?grade=4">National (grade 4)</a></li>
                        <li><a href="https://www.nationsreportcard.gov/science_2015/#acl/chart_loc_1?grade=8">National (grade 8)</a></li>
                        <li><a href="https://www.nationsreportcard.gov/science_2015/#acl/chart_loc_1?grade=12">National (grade 12)</a></li>
                        <li><a href="https://www.nationsreportcard.gov/science_2015/#state/acl?grade=4">State (grade 4)</a></li>
                        <li><a href="https://www.nationsreportcard.gov/science_2015/#state/acl/chart_loc_1?grade=8">State (grade 8)</a></li>
                        <li><a href="https://www.nationsreportcard.gov/science_2009/g4_district.aspx?tab_id=tab2&subtab_id=Tab_1#tabsContainer">District 2009 (grade 4)</a></li>
                        <li><a href="https://www.nationsreportcard.gov/science_2009/g8_district.aspx?tab_id=tab2&subtab_id=Tab_1#tabsContainer">District 2009 (grade 8)</a></li>
                        <li><a href="https://www.nationsreportcard.gov/science_2009/ict_summary.aspx">Interactive Computer and Hands-On Tasks</a></li>
                     </ul>
                  </div>
                  <div class="tel achievement-level"><h5>Most Recent Result&#160;in Technology &amp; Engineering Literacy</h5>
                     <ul>
                        <li><a href="https://www.nationsreportcard.gov/tel_2014/#results/overall">National 2014 (grade 8)</a></li>
                     </ul>
                  </div>
                  <div class="history achievement-level"><h5>Most Recent Result&#160;in U.S. History</h5>
                     <ul>
                        <li><a href="https://www.nationsreportcard.gov/ushistory_2010/g4_nat.aspx?tab_id=tab2&subtab_id=Tab_1#chart">National 2010 (grade 4)</a></li>
                        <li><a href="https://www.nationsreportcard.gov/hgc_2014/#history/achievement">National 2014 (grade 8)</a></li>
                        <li><a href="https://www.nationsreportcard.gov/ushistory_2010/g12_nat.aspx?tab_id=tab2&subtab_id=Tab_1#chart">National 2010 (grade 12)</a></li>
                     </ul>
                  </div>
                  <div class="writing achievement-level"><h5>Most Recent Results in Writing</h5>
                     <ul>
                        <li><a href="https://nces.ed.gov/nationsreportcard/pdf/main2002/2003529.pdf">National and State 2002 (grade 4)</a></li>
                        <li><a href="https://www.nationsreportcard.gov/writing_2011/g8_national.aspx?tab_id=tab2&subtab_id=Tab_1#chart">National and State 2011 (grade 8)</a></li>
                        <li><a href="https://www.nationsreportcard.gov/writing_2011/g12_national.aspx?tab_id=tab2&subtab_id=Tab_1#chart">National 2011 (grade 12)</a></li>
                        <li><a href="http://nces.ed.gov/nationsreportcard/pdf/dst2002/2003530.pdf">District 2002 (grade 4)</a></li>
                        <li><a href="https://www.nationsreportcard.gov/writing_2007/w0038.aspx">District 2007 (grade 8)</a></li>
                     </ul>
                  </div>
                  
                  <div class="arts trend">
                     <h5>Most Recent Trend Results in Arts</h5>
                     <ul>
                        <li><a href="https://www.nationsreportcard.gov/arts_2016/#/music/overall-results">National Music 2016 (grade 8)</a></li>
                        <li><a href="https://www.nationsreportcard.gov/arts_2016/#/visual-arts/overall-results">National Visual Arts 2016 (grade 8)</a></li>
                     </ul>
                  </div>
                  <div class="civics trend">
                     <h5>Most Recent Trend Results in Civics</h5>
                     <ul>
                        <li><a href="https://www.nationsreportcard.gov/civics_2010/g4_national.aspx">National 2010 (grade 4)</a></li>
                        <li><a href="https://www.nationsreportcard.gov/hgc_2014/#civics/scores">National 2014 (grade 8)</a></li>
                        <li><a href="https://www.nationsreportcard.gov/civics_2010/g12_national.aspx">National 2010 (grade 12)</a></li>
                     </ul>
                  </div>
                  <div class="economics trend"><h5>Most Recent Trend Results in Economics</h5>
                     <ul>
                        <li><a href="https://www.nationsreportcard.gov/economics_2012/overall.aspx">National 2012 (grade 12)</a></li>
                     </ul>
                  </div>
                  <div class="geography trend"><h5>Most Recent Trend Results in Geography</h5>
                     <ul>
                        <li><a href="https://www.nationsreportcard.gov/geography_2010/g4_nat.aspx">National 2010 (grade 4)</a></li>
                        <li><a href="https://www.nationsreportcard.gov/hgc_2014/#geography/scores">National 2014 (grade 8)</a></li>
                        <li><a href="https://www.nationsreportcard.gov/geography_2010/g12_nat.aspx">National 2010 (grade 12)</a></li>
                     </ul>
                  </div>
                  <div class="math trend"><h5>Most Recent Trend Results in Mathematics</h5>
                     <ul>
                        <li><a href="https://www.nationsreportcard.gov/reading_math_2015/#mathematics/scores?grade=4">National 2015 (grade 4)</a></li>
                        <li><a href="https://www.nationsreportcard.gov/reading_math_2015/#mathematics/scores?grade=8">National 2015 (grade 8)</a></li>
                        <li><a href="https://www.nationsreportcard.gov/reading_math_g12_2015/#mathematics/scores">National 2015 (grade 12)</a></li>
                        <li><a href="https://www.nationsreportcard.gov/reading_math_2015/#mathematics/state/scores?grade=4">State 2015 (grade 4)</a></li>
                        <li><a href="https://www.nationsreportcard.gov/reading_math_2015/#mathematics/state/scores?grade=8">State 2015 (grade 8)</a></li>
                        <li><a href="https://www.nationsreportcard.gov/reading_math_2015/#mathematics/district/trends/XQ?grade=4">District 2015 (grade 4)</a></li>
                        <li><a href="https://www.nationsreportcard.gov/reading_math_2015/#mathematics/district/trends/XQ?grade=8">District 2015 (grade 8)</a></li>
                     </ul>
                  </div>
                  <div class="reading trend"><h5>Most Recent Trend Results in Reading</h5>
                     <ul>
                        <li><a href="https://www.nationsreportcard.gov/reading_math_2015/#reading/scores?grade=4">National 2015 (grade 4)</a></li>
                        <li><a href="https://www.nationsreportcard.gov/reading_math_2015/#reading/scores?grade=8">National 2015 (grade 8)</a></li>
                        <li><a href="https://www.nationsreportcard.gov/reading_math_g12_2015/#reading/scores">National 2015 (grade 12)</a></li>
                        <li><a href="https://www.nationsreportcard.gov/reading_math_2015/#reading/state/scores?grade=4">State 2015 (grade 4)</a></li>
                        <li><a href="https://www.nationsreportcard.gov/reading_math_2015/#reading/state/scores?grade=8">State 2015 (grade 8)</a></li>
                        <li><a href="https://www.nationsreportcard.gov/reading_math_2015/#reading/district/trends/XQ?grade=4">District 2015 (grade 4)</a></li>
                        <li><a href="https://www.nationsreportcard.gov/reading_math_2015/#reading/district/trends/XQ?grade=8">District 2015 (grade 8)</a></li>
                     </ul>
                  </div>
                  <div class="science trend"><h5>Most Recent Trend Results in Science</h5>
                     <ul>
                        <li><a href="https://www.nationsreportcard.gov/science_2015/#scores?grade=4">National (grade 4)</a></li>
                        <li><a href="https://www.nationsreportcard.gov/science_2015/#scores/chart_loc_1?grade=8">National (grade 8)</a></li>
                        <li><a href="https://www.nationsreportcard.gov/science_2015/#scores/chart_loc_1?grade=12">National (grade 12)</a></li>
                        <li><a href="https://www.nationsreportcard.gov/science_2015/#state/scores?grade=4">State (grade 4)</a></li>
                        <li><a href="https://www.nationsreportcard.gov/science_2015/#state/scores?grade=8">State (grade 8)</a></li>
                        <li><a href="https://www.nationsreportcard.gov/science_2009/g4_district.aspx">District 2009 (grade 4)</a></li>
                        <li><a href="https://www.nationsreportcard.gov/science_2009/g8_district.aspx">District 2009 (grade 8)</a></li>
                        <li><a href="https://www.nationsreportcard.gov/science_2009/ict_summary.aspx">Interactive Computer and Hands-On Tasks</a></li>
                     </ul>
                  </div>
                  <div class="tel trend"><h5>Most Recent Trend Results in Technology &amp; Engineering Literacy</h5>
                     <ul>
                        <li>No links available</li>
                     </ul>
                  </div>
                  <div class="history trend"><h5>Most Recent Trend Results in U.S. History</h5>
                     <ul>
                        <li><a href="https://www.nationsreportcard.gov/ushistory_2010/g4_nat.aspx">National 2010 (grade 4)</a></li>
                        <li><a href="https://www.nationsreportcard.gov/hgc_2014/#history/scores">National 2014 (grade 8)</a></li>
                        <li><a href="https://www.nationsreportcard.gov/ushistory_2010/g12_nat.aspx">National 2010 (grade 12)</a></li>
                     </ul>
                  </div>
                  <div class="writing trend"><h5>Most Recent Trend Results in Writing</h5>
                     <ul>
                        <li><a href="https://nces.ed.gov/nationsreportcard/pdf/main2002/2003529.pdf">National and State 2002 (grade 4)</a></li>
                        <li><a href="https://www.nationsreportcard.gov/writing_2011/g8_national.aspx">National and State 2011 (grade 8)</a></li>
                        <li><a href="https://www.nationsreportcard.gov/writing_2011/g12_national.aspx">National 2011 (grade 12)</a></li>
                        <li><a href="http://nces.ed.gov/nationsreportcard/pdf/dst2002/2003530.pdf">District 2002 (grade 4)</a></li>
                        <li><a href="https://www.nationsreportcard.gov/writing_2007/w0037.aspx">District 2007 (grade 8)</a></li>
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
                     <img src="/nrc_redesign/images/carousel-2016arts.png" alt="Newest Report Cover Image" class="cover-img" />
                     <h4>NEWEST REPORT</h4>
                     <p><strong>2016 Arts Results - Grade 8</strong></p>
                     <a class="feature-btn" href="arts_2016">Explore the 2016 Arts Report</a>
                     <h4>2016 ARTS TOP STORIES</h4>
                     <div class="box-display">
                        <div class="box-img">
                           <img src="/nrc_redesign/images/chart-1.png" class="chart-thumb" alt="Chart Thumbnail" />
                        </div>
                        <p>Hispanic eighth-graders improve in <strong><a href="arts_2016/#/music/score-gaps">music</a></strong>.</p>
                     </div>
                     <div class="box-display">
                        <div class="box-img">
                           <img src="/nrc_redesign/images/chart-2.png" class="chart-thumb" alt="Chart Thumbnail" />
                        </div>
                        <div class="box-text">
                           <p>Access and opportunities in <strong><a href="barts_2016/#/music/opportunities-and-access">music</a></strong> and <strong><a href="arts_2016/#/visual-arts/opportunities-and-access">visual arts</a></strong> vary by gender, income, and region.</p>
                        </div>
                     </div>
                     <div class="box-display">
                        <div class="box-img">
                           <img src="/nrc_redesign/images/chart-3.png" class="chart-thumb" alt="Chart Thumbnail" />
                        </div>
                        <div class="box-text">
                           <p>See and try selected questions from the <strong><a href="arts_2016/#/music/sample-questions">music</a></strong> and <strong><a href="arts_2016/#/visual-arts/sample-questions">visual arts</a></strong> assessment.</p>
                        </div> 
                     </div>
                     <div class="video-container">
                        <h4>THE STORY BEHIND THE NAEP ARTS ASSESSMENT</h4>
                        <div id="youtube_naep_video"></div>
                     </div>
                  </div>
               </div>
               <div class="row next-section">
                  <div class="col-md-12">
                     <h4>COMING SOON</h4>
                     <div class="box-display">
                        <div class="box-img">
                           <img src="/nrc_redesign/images/issue-1.png" />
                        </div>
                        <div class="box-text">
                           <h5 class="subtitle">2015 Student Questionnaire Results</h5>
                           <p>Find out about students' learning experiences in mathematics, reading, and science in this NAEP special report.</p>
                        </div>
                     </div>
                     <div class="box-display">
                        <div class="box-img">
                           <img src="/nrc_redesign/images/issue-2.png" />
                        </div>
                        <div class="box-text">
                           <h5 class="subtitle">2017 NAEP Mathematics and Reading results for grades 4 and 8: Available in early 2018</h5>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </article>
      <article class="container landing-two nrc-report">
         <section class="row natural">
            <div class="col-md-12">
               <div class="box-display">
                  <div class="box-img">
                     <img src="/nrc_redesign/images/digital-assessment.png" alt="NAEP Digital Assessments" />
                  </div>
                  <div class="box-text">
                     <h5>NAEP DIGITALLY BASED ASSESSMENTS</h5>
                     <p>NAEP is evolving to address the changing educational landscape by moving to <strong><a href="https://nces.ed.gov/nationsreportcard/dba/">digitally based assessments</a></strong>. These innovative assessments allow NAEP to learn even more about what students know and can do.</p>
                     <p>See <strong><a href="https://nces.ed.gov/nationsreportcard/writing/cba.aspx">NAEP digitally based tutorials</a></strong> for mathematics, reading, writing, and more.</p>
                  </div>
               </div>
            </div>
         </section>
         <section class="row natural">
            <div class="col-md-12">
               <div class="box-display">
                  <div class="box-img">
                     <img src="/nrc_redesign/images/naep-tel.png" alt="NAEP TEL" />
                  </div>
                  <div class="box-text">
                     <h5>NAEP TECHNOLOGY AND ENGINEERING LITERACY ASSESSMENT (TEL)</h5>
                     <p>Eighth-graders across the nation will take this innovative, digitally based assessment in 2018. <strong><a href="https://www.nationsreportcard.gov/tel_2014/">See results</a></strong> from the 2014 TEL assessment.</p>
                     <p>Students complete interactive tasks during the assessment. <strong><a href="https://www.nationsreportcard.gov/tel_2014/#tasks/overview">Try a TEL task</a></strong>.</p>
                  </div>
               </div>
            </div>
         </section>
         <section class="row natural">
            <div class="col-md-4 divide">
               <h5>NAEP TOOLS &#151; DIG DEEPER INTO THE NAEP RESULTS</h5>
               <div class="inner-content">
                  <p>Find key data about your state.</p>
                  <a class="feature-btn" href="https://www.nationsreportcard.gov/profiles/stateprofile?chort=1&amp;sub=MAT&amp;sj=&amp;sfj=NP&amp;st=MN&amp;year=2015R3">State Profile Tool</a>
                  <p>Explore reports for districts that participate in the Districts (TUDA).</p>
                  <a class="feature-btn" href="https://www.nationsreportcard.gov/profiles/districtprofile?chort=1&amp;sub=MAT&amp;sj=XQ&amp;sfj=NL&amp;st=MN&amp;year=2015R3">District Profile Tool</a>
                  <p>See how students at the <em>Basic</em>, <em>Proficient</em>, and <em>Advanced</em> levels are likely to answer various questions correctly.</p>
                  <a class="feature-btn" href="https://www.nationsreportcard.gov/itemmaps/?subj=MAT&amp;grade=4&amp;year=2015">Item Map Tool</a>
               </div>
            </div>
            <div class="col-md-8">
               <h5>NATIONAL INDIAN EDUCATION STUDY (NIES): 2015</h5>
               <p>Take a closer look at the condition of education for American Indian and Alaska Native (AI/AN) students in the United States. <em><a href="https://nces.ed.gov/pubsearch/pubsinfo.asp?pubid=2017161">View the full report</a></em>.</p>
               <img src="/nrc_redesign/images/nies_graphic_updated_text.png" />
            </div>
         </section>
         <section class="row natural">
            <div class="col-md-6 divide">
               <div class="box-display">
                  <div class="box-img">
                     <img src="/nrc_redesign/images/map_pic.png" />
                  </div>
                  <div class="box-text">
                     <h5>DO YOUR STATE'S PROFICIENCY STANDARDS MEASURE UP?</h5>
                     <p>Find out in this <em><a href="link-goes-here">NCES special study</a></em>.</p>
                  </div>
               </div>
            </div>
            <div class="col-md-6">
               <div class="box-display">
                  <div class="box-img">
                     <img src="/nrc_redesign/images/fon_pic.png" />
                  </div>
                  <div class="box-text">
                     <h5>FOCUS ON NAEP: SAMPLING FOR NAEP ASSESSMENTS</h5>
                     <p>Learn how NAEP <em><a href="link-goes-here">selects schools and students</a></em> for NAEP assessments.</p>
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
