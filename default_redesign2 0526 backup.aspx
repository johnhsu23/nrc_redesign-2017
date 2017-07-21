<%@ Page Language="C#" MasterPageFile="~/NRCRedesign2.master" AutoEventWireup="true"%>

<asp:Content ID="PlaceHolderPageTitle" runat="server" ContentPlaceHolderID="PlaceHolderPageTitle">
NAEP Report Cards - Home
</asp:Content>

<asp:Content ID="PlaceHolderAdditionalPageHead" runat="server" ContentPlaceHolderID="PlaceHolderAdditionalPageHead">
<meta name="keywords" content="hybrid home page" />
<meta name="description" content="NAEP Report Cards - Home" />
<meta name="DC.Description" content="NAEP Report Cards - Home" />
<meta name="DC.Title" content="NAEP Report Cards - Home" />

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src = "nrc_redesign/js/underscore.js" ></script>
<script src = "nrc_redesign/js/backbone-min.js"></script>
<script src="nrc_redesign/js/autocomplete_dropdown.js"></script>
<script src="nrc_redesign/js/default2017.js"></script>
<script src="nrc_redesign/js/d3.v3.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js"></script>
<link rel="stylesheet" type="text/css" href="nrc_redesign/css/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="nrc_redesign/font-awesome/css/font-awesome.min.css">
<link rel="stylesheet" type="text/css" href="nrc_redesign/css/home.css">
<link rel="stylesheet" type="text/css" href="nrc_redesign/css/john.css">
<link rel="stylesheet" type="text/css" href="nrc_redesign/css/styles.css">

<link rel="icon" type="image/png" href="nrc_redesign/images/favicon.png">

</asp:Content>

<asp:Content ID="PlaceHolderMain" runat="server" ContentPlaceHolderID="PlaceHolderMain">
		<!-- B  E  G  I  N    C  O  N  T  E  N  T  -->
<div id="pageContentContainer" class="nrc_pageContentContainer nrc-report"><!-- container -->
   <article class="row row-eq-height">
      <section id="pageContent" class="col-md-8 nrc_pageContent">
         <!-- Begin Shared Icons -->
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
         <!-- End Shared Icons --> 
         <h2>​HOW DID U.S. STUDENTS DO ON THE MOST RECENT ASSESSMENTS?</h2> 
         <p>Select a <span class="emphasize">jurisdiction</span> and a <span class="emphasize">result</span> to see how students performedon the latest NAEP assessments.</p>
         <p>Click on the <img src="nrc_redesign/images/arrow-pulldown-example.png" alt="Down Arrow Image" /> to see the most recent reports in each subject</p>
         <div class="comparison">
            
            <div class="select-options jurisdiction-new" role="combobox application" aria-expanded="false" aria-disabled="false" aria-required="false">
               <label>select jurisdiction:</label>
               <div role="textbox" tabindex="-1" aria-readonly="true" class="select">All public/nonpublic schools</div>
               <div role="listbox" tabindex="-1" aria-multiselectable="false" class="dropdown-menu scrollable-menu">
                  <span class="fa fa-search"></span>
                  <input class="search" />
                  <div class="menu-section-header national">National</div>
                  <div class="menu-section national">
                     <div>All public and nonpublic schools</div>
                     <div>Public schools only</div>
                     <div>Private schools only</div>
                     <div>Large city public schools</div>
                  </div>
                  <div class="menu-section-header states">State</div>
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
                     <div>Large City</div>
                     <div>Albuquerque</div>
                     <div>Atlantay</div>
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
               <div role="textbox" tabindex="-1" aria-readonly="true" class="select">At or above Proficient</div>
               <div role="listbox" tabindex="-1" aria-multiselectable="false" class="dropdown-menu scrollable-menu">
                  <div class="menu-section-header achievement-level">Achievement Level</div>
                  <div class="menu-section achievement-level">
                     <div>At Advanced</div>
                     <div>At or above Proficient</div>
                     <div>At or above Basic</div>
                  </div>
                  <div class="menu-section-header trend">Changes in Average Scores</div>
                  <div class="menu-section trend">
                     <div>Compared to base year</div>
                     <div>Compared to most recent year</div>
                  </div>
               </div>
            </div>
         </div><!-- end comparison div -->
         <table class="nrc-rteTable-default report-card" width="100%" cellspacing="0">
            <thead>
               <tr>
                  <th></th>
                  <th colspan="3"><span>Percentage At or Above Proficient</span></th>
               </tr>
               <tr>
                  <th class="nrc-rteTable-default">​</th>
                  <th class="nrc-rteTable-default">Grade 4​</th>
                  <th class="nrc-rteTable-default">​Grade 8</th>
                  <th class="nrc-rteTable-default">​Grade 12</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <th class="nrc-rteTable-default">​<img src="https&#58;//nrcpreview3.naepims.org/subject/portal/arrow_button.png" class="arrow-button civics" alt="" />Civics</th>
                  <td class="nrc-rteTable-default">​</td>
                  <td class="nrc-rteTable-default">​</td>
                  <td class="nrc-rteTable-default">​</td>
               </tr>
               <tr>
                  <th class="nrc-rteTable-default"><img src="https&#58;//nrcpreview3.naepims.org/subject/portal/arrow_button.png" class="arrow-button civics" alt="" /> Economics</th>
                  <td>​</td>
                  <td class="nrc-rteTable-default">​</td>
                  <td class="nrc-rteTable-default">​</td>
               </tr>
               <tr>
                  <th class="nrc-rteTable-default">​<img src="https&#58;//nrcpreview3.naepims.org/subject/portal/arrow_button.png" class="arrow-button civics" alt="" />Geography</th>
                  <td class="nrc-rteTable-default">​</td>
                  <td class="nrc-rteTable-default">​</td>
                  <td class="nrc-rteTable-default">​</td>
               </tr>
               <tr>
                  <th class="nrc-rteTable-default"><img src="https&#58;//nrcpreview3.naepims.org/subject/portal/arrow_button.png" class="arrow-button civics" alt="" /><span id="MathLink">​Mathematics</span></th>
                  <td class="nrc-rteTable-default">​</td>
                  <td class="nrc-rteTable-default">​</td>
                  <td class="nrc-rteTable-default">​</td>
               </tr>
               <tr id="MathRow" style="display&#58;none;">
                  <th class="nrc-rteTable-default" colspan="4">
                     <div id="MathMenu" style="display&#58;none;">​National State TUDA</div>
                  </th>
               </tr>
               <tr>
                  <th class="nrc-rteTable-default">​<img src="https&#58;//nrcpreview3.naepims.org/subject/portal/arrow_button.png" class="arrow-button civics" alt="" />Reading</th>
                  <td class="nrc-rteTable-default">​</td>
                  <td class="nrc-rteTable-default">​</td>
                  <td class="nrc-rteTable-default">​</td>
               </tr>
               <tr>
                  <th class="nrc-rteTable-default">​<img src="https&#58;//nrcpreview3.naepims.org/subject/portal/arrow_button.png" class="arrow-button science" alt="" />Science</th>
                  <td class="nrc-rteTable-default">​</td>
                  <td class="nrc-rteTable-default">​</td>
                  <td class="nrc-rteTable-default">​</td>
               </tr>
               <tr>
                  <th class="nrc-rteTable-default">​<img src="https&#58;//nrcpreview3.naepims.org/subject/portal/arrow_button.png" class="arrow-button tel" alt="" />Technology &amp; Engineering Literacy</th>
                  <td class="nrc-rteTable-default">​</td>
                  <td class="nrc-rteTable-default">​</td>
                  <td class="nrc-rteTable-default">​</td>
               </tr>
               <tr>
                  <th class="nrc-rteTable-default">​<img src="https&#58;//nrcpreview3.naepims.org/subject/portal/arrow_button.png" class="arrow-button civics" alt="" />U.S. History</th>
                  <td class="nrc-rteTable-default">​</td>
                  <td class="nrc-rteTable-default">​</td>
                  <td class="nrc-rteTable-default">​</td>
               </tr>
               <tr>
                  <th class="nrc-rteTable-default"><img src="https&#58;//nrcpreview3.naepims.org/subject/portal/arrow_button.png" class="arrow-button writing" alt="" />Writing</th>
                  <td class="nrc-rteTable-default">​</td>
                  <td class="nrc-rteTable-default">​</td>
                  <td class="nrc-rteTable-default">​</td>
               </tr>
            </tbody>
         </table>
         <ul class="color-legend"><strong>KEY&#58; </strong>
            <li><span class="opt-1"></span>10 - 19%</li>
            <li><span class="opt-2"></span>20 - 29%</li>
            <li><span class="opt-3"></span>30 - 39%</li>
            <li><span class="opt-4"></span>40 - 49%</li>
         </ul>
         <p class="note">Note&#58; Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Phasellus eget nisi augue</p> 
         <div class="nrc-report-list-menu">
            <div class="civics">
               <h5>Most Recent Result in Civics</h5>
               <ul>
                  <li><a href="https&#58;//nrcpreview3.naepims.org/hgc_2014/#civics/achievement">National 2014 (grade 8)</a></li>
               </ul>
            </div>
            <div class="economics"><h5>Most Recent Result in Economics</h5>
               <ul>
                  <li><a href="https&#58;//www.nationsreportcard.gov/economics_2012/overall.aspx#1-0">National 2012 (grade 12)</a></li>
               </ul>
            </div>
            <div class="geography"><h5>Most Recent Result in Geography</h5>
               <ul>
                  <li><a href="https&#58;//www.nationsreportcard.gov/hgc_2014/#geography/achievement">National 2014 (grade 8)</a></li>
               </ul>
            </div>
            <div class="math"><h5>Most Recent Results in Mathematics</h5>
               <ul>
                  <li><a href="https&#58;//www.nationsreportcard.gov/reading_math_2015/#mathematics/acl?grade=4">National 2015 (grade 4 and 8)</a></li>
                  <li><a href="https&#58;//www.nationsreportcard.gov/reading_math_2015/#mathematics/state/acl?grade=4">State 2015 (grade 4 and 8)</a></li>
                  <li><a href="https&#58;//www.nationsreportcard.gov/reading_math_g12_2015/#/">National 2015 (grade 12)</a></li>
                  <li><a href="https&#58;//www.nationsreportcard.gov/reading_math_2015/#mathematics/district/comparisons/XQ?grade=4">Trial Urban District Assessment</a></li>
               </ul>
            </div>
            <div class="reading"><h5>Most Recent Results in Reading</h5>
               <ul>
                  <li><a href="https&#58;//www.nationsreportcard.gov/reading_math_2015/#reading/acl?grade=4">National 2015 (grade 4 and 8)</a></li>
                  <li><a href="https&#58;//www.nationsreportcard.gov/reading_math_2015/#reading/state/acl?grade=4">State 2015 (grade 4 and 8)</a></li>
                  <li><a href="https&#58;//www.nationsreportcard.gov/reading_math_g12_2015/#/">National 2015 (grade 12)</a></li>
                  <li><a href="https&#58;//www.nationsreportcard.gov/reading_math_2015/#reading/district/comparisons/XQ?grade=4">Trial Urban District Assessment</a></li>
               </ul>
            </div>
            <div class="science"><h5>Most Recent Results in Science</h5>
               <ul>
                  <li><a href="https&#58;//www.nationsreportcard.gov/science_2015/#?grade=4">National and State</a></li>
                  <li><a href="https&#58;//www.nationsreportcard.gov/science_2009/district_summary.aspx">Trial Urban District Assessment</a></li>
                  <li><a href="https&#58;//www.nationsreportcard.gov/science_2009/ict_summary.aspx">Interactive Computer and Hands-On Tasks</a></li>
               </ul>
            </div>
            <div class="tel"><h5>Most Recent Result&#160;in Technology &amp; Engineering Literacy</h5>
               <ul>
                  <li><a href="https&#58;//www.nationsreportcard.gov/tel_2014/#results/overall">National 2014 (grade 8)</a></li>
               </ul>
            </div>
            <div class="history"><h5>Most Recent Result&#160;in U.S. History</h5>
               <ul>
                  <li><a href="https&#58;//www.nationsreportcard.gov/hgc_2014/#history/achievement">National 2014 (grade 8)</a></li>
               </ul>
            </div>
            <div class="writing"><h5>Most Recent Results in Writing</h5>
               <ul>
                  <li><a href="https&#58;//www.nationsreportcard.gov/writing_2011/g8_national.aspx?tab_id=tab2&amp;subtab_id=Tab_1#chart">National 2011 (grade 8)</a></li>
                  <li><a href="https&#58;//www.nationsreportcard.gov/writing_2011/g12_national.aspx?tab_id=tab2&amp;subtab_id=Tab_1#chart">National 2011 (grade 12)</a></li>
                  <li><a href="https&#58;//www.nationsreportcard.gov/writing_2007/w0037.aspx">Trial Urban District Assessment</a></li>
               </ul>
            </div>
         </div>
      </section>
      <section class="col-md-4">
         <div id="tableCaption">
            <h3>The Nation's Report Card</h3>
            <p>is the largest ongoing assessment of what U.S. students know and can do.</p>
         </div>
         <div class="row next-section">
            <div class="col-md-12">
               <img src="https&#58;//nrcpreview3.naepims.org/shared/nces%20naep/adminonly/nces_naep/images/report-img.png" alt="Newest Report Cover Image" class="cover-img" />
               <h4>NEWEST REPORT</h4>
               <p>2016 Arts Results - Grades 4, 8, and 12</p>
               <button class="feature-btn">Explore the 2016 Arts Report</button>
               <hr />
               <h4>2016 ARTS TOP STORIES</h4>
               <div class="top-stories">
                  <figure>
                     <img src="https&#58;//nrcpreview3.naepims.org/shared/nces%20naep/adminonly/nces_naep/images/common/mini-bar-chart.png" alt="missing" width="125" />
                     <figcaption>Hispanic eight graders improve in <a href="arts_2016/#/music/overall-results">music</a>.</figcaption>
                  </figure>
                  <figure>
                     <img src="https&#58;//nrcpreview3.naepims.org/shared/nces%20naep/adminonly/nces_naep/images/common/mini-trend-chart.png" alt="missing" width="125" />
                     <figcaption>Access and opportunities in <a href="arts_2016/#/music/overall-results">music</a> and <a href="#">visual arts</a> vary by gender, income, and region</figcaption>
                  </figure>
                  <figure>
                     <img src="https&#58;//nrcpreview3.naepims.org/shared/nces%20naep/adminonly/nces_naep/images/common/mini-trend-chart.png" alt="missing" width="125" />
                     <figcaption>See and try selected questions from the <a href="arts_2016/#/music/overall-results">music</a> and <a href="#">visual arts</a> of the assessment.</figcaption> 
                  </figure>
               </div>
               <hr />
               <h4>WATCH THE SCIENCE RELEASE</h4>
               <video width="100%" height="200">
                  <source src="/default_redesign.aspx" />
               </video>
            </div>
         </div>
         <div class="row next-section">
            <div class="col-md-12">
               <h4>COMING SOON</h4>
               <div class="top-stories">
                  <figure>
                     <img src="/shared/nces naep/adminonly/nces_naep/images/common/thumbnail-1.jpg" alt="magazine thumbnail" width="80" height="100" />
                     <figcaption><span>National Scores by Student Group</span> Sed dui dui, luctus quis bibendum</figcaption>
                  </figure>
                  <figure>
                     <img src="/shared/nces naep/adminonly/nces_naep/images/common/thumbnail-2.jpg" alt="magazine thumbnail" />
                     <figcaption><span>State Score Comparisons</span> Sed dui dui, luctus quis bibendum</figcaption>
                  </figure>
               </div>
            </div>
         </div>
      </section>
   </article>
</div>
</asp:Content>

<asp:Content ID="PlaceHolderPageHead" runat="server" ContentPlaceHolderID="PlaceHolderPageHead">
<script src="/WebResource.axd?d=CIsD_jQ5qiPWKwMMaWrMOBA4FAIj0JcHD_YCbIuXPj2T-eY9VHrfMJvvHtL937JWIa2YFzU_EOh1lBkanB4pCw-RpTJ5QDChFr0qQeEISUQ1&amp;t=636160660665894255" type="text/javascript"></script>
</asp:Content>
