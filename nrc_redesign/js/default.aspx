<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge;" />
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <link rel="stylesheet" href="inc/css/loading.css">
    <script src ="js/jquery-3.1.1.min.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script src ="js/DataAttribute.js"></script>
    <script src ="js/JavaScript.js"></script>
<script>

    $(document).ready(function () {
        $(".data-attribute").attr("disabled", "disabled");
        $(".fa-times-circle").hide();
        $(".clear-text-button").css("cursor", "pointer");

    var form = document.getElementById('TDForm');
    var fileSelect = document.getElementById('file-select');
    var uploadButton = document.getElementById('upload-button');
    
    var allYearLabels, allTableLabels, possibleData;
    var dataAttributes = {};

    var calls = {};
    calls["Years"] = "services/get_data_service.aspx?tableName=Years";
    calls["Possible"] = "services/get_data_service.aspx?tableName=Possible";
    calls["Tables"] = "services/get_data_service.aspx?tableName=Tables";
    calls["Subjects"] = "services/get_data_service.aspx?tableName=Subjects";
    calls["Samples"] = "services/get_data_service.aspx?tableName=Samples";
    calls["Assessments"] = "services/get_data_service.aspx?tableName=Assessments";
    calls["Grades"] = "services/get_data_service.aspx?tableName=Grades";
    calls["Posters"] = "services/get_data_service.aspx?tableName=Posters";
    calls["QCers"] = "services/get_data_service.aspx?tableName=QCers";
    calls["Teams"] = "services/get_data_service.aspx?tableName=Teams";

    var nonAttributeCalls = {};
    var nameShowAllButtonClicked;
    var dataSets = new AjaxDataSets(calls, function () {
        $(".data-attribute").removeAttr("disabled", "disabled");
        yearData = dataSets.tables["Years"];        
        dataAttributes["Years"] = new DataAttribute("Years", $("#YearInput"), 1, yearData);
        tableData = dataSets.tables["Tables"];
        dataAttributes["Tables"] = new DataAttribute("Tables", $("#TableInput"), 2, tableData);        
        subjectData = dataSets.tables["Subjects"];
        dataAttributes["Subjects"] = new DataAttribute("Subjects", $("#SubjectInput"), 3, subjectData);
        sampleData = dataSets.tables["Samples"];
        dataAttributes["Samples"] = new DataAttribute("Samples", $("#SampleInput"), 4, sampleData);        
        assessmentData = dataSets.tables["Assessments"];
        dataAttributes["Assessments"] = new DataAttribute("Assessments", $("#AssessmentInput"), 5, assessmentData);        
        gradeData = dataSets.tables["Grades"];
        dataAttributes["Grades"] = new DataAttribute("Grades", $("#GradeInput"), 6, gradeData);
        var posters = dataSets.tables["Posters"];
        for (var i = 0; i < posters.length; i++) {
            $("#PosterInput").append("<option value = " + posters[i].posterId + ">" + posters[i].firstName + " " + posters[i].lastName + "</option>")
        }
        var qcers = dataSets.tables["QCers"];
        for (var i = 0; i < qcers.length; i++) {
            $("#QCerInput").append("<option value = " + qcers[i].id + ">" + qcers[i].firstName + " " + qcers[i].lastName + "</option>")
        }
        var team = dataSets.tables["Teams"];
        $("#TeamInput").append("<option value = '999'>Please Select Team to CC in email</option>")
        for (var i = 0; i < team.length; i++) {
            $("#TeamInput").append("<option value = " + team[i].id + ">" + team[i].label + "</option>")
        }        
        for (var i in dataAttributes) {
            var name = dataAttributes[i].name.substring(0, dataAttributes[i].name.length - 1);
            $("#" + name + "ShowAllButton").on("click", function () {
                $(this).parent().find(".data-attribute").val("");
                $(this).hide();
                var inputName = $(this).attr("id").replace("ShowAllButton", "");
                var ajaxString = createAjaxString()                
                var queryObject = new QueryString();
                queryObject.parse(ajaxString);
                queryObject.removeKey(inputName);            
                ajaxString = queryObject.toQueryString();                
                if(queryObject.canSearch()){
                    updateTableList("&" + ajaxString);
                } else {
                    $("#TableListBody").html("");
                }
                //$(this).parent().find(".data-attribute").val("");
                //$(this).hide();
                //var inputName = $(this).parent().find(".data-attribute").attr("name");
                //var dataAttribute = dataAttributes[inputName + "s"];
                //dataAttribute.updateAvailability(dataAttribute.getVisibleLabelText());
                //var ajaxString = createAjaxString()
                //ajaxString = removeParameterFromAjaxString(ajaxString, inputName);                
                //updateForms(ajaxString);
                //nameShowAllButtonClicked = inputName;
                //dataAttribute.setAutoComplete(dataAttribute.getVisibleLabelText());
                //$("#" + inputName + "Input").autocomplete("search", "");
            })
        }
    })
    dataSets.makeCalls();

    stopBlur = false;
    $(".data-attribute").on("blur", function () {
        if (!stopBlur)
            $("#" + $(this).attr("name") + "ShowAllButton").hide();
        stopBlur = false;
    })

    $(".clear-text-button").on("mousedown", function () {
        /*
        var inputName = $(this).attr("id").replace("ShowAllButton","");
        var ajaxString = createAjaxString()        
        var queryObject = new QueryString(ajaxString);
        queryObject.removeKey(inputName);
        ajaxString = queryObject.toQueryString();        
        updateTableList("&" + ajaxString);
        */

        stopBlur = true;        
    })

    
    $(".data-attribute").on("focus", function (element, ui) {
        if ($(this).val().replace(/\s/g, "").length == 0) {
            var ajaxString = createAjaxString(element, ui)
            ajaxString = removeParameterFromAjaxString(ajaxString, $(this).attr("name"));
            updateForms(ajaxString);
        } else {
            //$(".hide-text-button").hide();            
            $("#" + $(this).attr("name") + "ShowAllButton").show();
        }
        if (dataAttributes[$(this).attr("name") + "s"].hasLabel($(this).val())) {            
            //$(this).autocomplete("search", "");
            var ajaxString = createAjaxString()
            ajaxString = removeParameterFromAjaxString(ajaxString, $(this).attr("name"));
            updateForms(ajaxString);       
        }
    })
    
    $(".data-attribute").on("autocompleteselect", function (event, ui) {
        
        var attributeName = $(this).attr("name");
        //var otherAttributeName = (attributeName == "Years") ? "Tables" : "Years";
        var dataAttribute = dataAttributes[attributeName + "s"];
        //var otherDataAttribute = dataAttributes[otherAttributeName];        
        var hasValid = {};
        hasValid["Year"] = dataAttributes["Years"].isValueValid();
        hasValid["Table"] = dataAttributes["Tables"].isValueValid();
        hasValid["Subject"] = dataAttributes["Subjects"].isValueValid();        
        hasValid[attributeName] = true        
        if (hasValid["Year"] && hasValid["Table"] || hasValid["Table"] && hasValid["Subject"] || hasValid["Year"] && hasValid["Subject"]) {            
            var values = getFormValues();
            values[$(this).attr("name")] = dataAttribute.getIdByLabel(ui.item.value);
            test($(this).attr("name") + "=" + dataAttribute.getIdByLabel(ui.item.value), convertValuesToQueryString(values));
        } 
    })

    function test(justSelectedAjaxString, queryString) {                
        //updateTableList(createAjaxString() + "&" + justSelectedAjaxString);
        updateTableList(queryString);
    }

    function getFormValues() {
        var values = {};
        $(".data-attribute").each(function () {
            if ($(this).val()) {
                values[$(this).attr("name")] = dataAttributes[$(this).attr("name") + "s"].getIdByLabel($(this).val());                
            }
        })
        return values;

        
    }

    function convertValuesToQueryString(values) {
        var ret = "";
        $.each(values, function (key, value) {
            ret += "&" + key + "=" + value;
        });
        return ret;
    }

    $(".data-attribute").on("keyup", function (e) {
        if ($(this).val().replace(/\s/g, "").length == 0) {
            $(this).val("");
            $("#" + $(this).attr("name") + "ShowAllButton").hide();
        } else {
            //$(".hide-text-button").hide();
            $("#" + $(this).attr("name") + "ShowAllButton").show();
        }        
        //if(e.which != 13)
        
        var val = $(this).val();
        if (!dataAttributes[$(this).attr("name") + "s"].hasLabel(val) && e.which != 9) {            
            $("#TableListBody").html("");            
        }
        if (!dataAttributes[$(this).attr("name") + "s"].hasLabel(val) && !dataAttributes[$(this).attr("name") + "s"].isLabelAvailable(val)) {            
            upd
        }
        
        //if (dataAttributes[$(this).attr("name") + "s"].hasLabel($(this).val())) {
          
        //} else {
          //  $(this).val($(this).val().substring(0, $(this).val().length - 1));
  //      }
        if ($(this).val() == "") {
            //dataAttributes[$(this).attr("name") + "s"].makeAllLabelsVisible();
            //dataAttributes[$(this).attr("name") + "s"].setAutoComplete(dataAttributes[$(this).attr("name") + "s"].getVisibleLabelText(), function(){});            
            var ajaxString = createAjaxString()
            updateForms(ajaxString);

        }
    })   
    
    //function setAutoCompleteDone(element, ui) {
      //  var ajaxString = createAjaxString(element, ui)
      //  updateForms(ajaxString);
        // }
        
    function updateTableList(ajaxString) {        
        if (ajaxString == "") return;        
        $("#Instructions").html("");
        $("#TableListBody").html("");
        $("#TableInfo").html("");
        $.ajax({
            url: "http://poseidon/jhsu/techdocs/services/get_data_service.aspx?tableName=Possible" + ajaxString,  //expectin array of season row data
            datatype: 'json',
            cache: false
        }).done(function (dataString) {
            var data = JSON.parse(dataString);                        
            for (i = 0; i < data.length; i++) {                
                var fileName = data[i][8];
                var fullFileName = data[i][9];
                var posterLastName = data[i][10];
                var postDate = data[i][11];
                var qcLastName = data[i][12];
                var qcDate = data[i][13];
                var posterId = data[i][14];
                var qcerId = data[i][15];
                var fileNameData = data[i][8];
                var fileNeedsToBeCreated = false;                
                if (fileName.trim() == "") {
                    var yearShortLabel = dataAttributes["Years"].getShortLabelById(data[i][1]);
                    var tableShortLabel = dataAttributes["Tables"].getShortLabelById(data[i][2]);
                    var subjectShortLabel = dataAttributes["Subjects"].getShortLabelById(data[i][3]);
                    var sampleShortLabel = dataAttributes["Samples"].getShortLabelById(data[i][4]);
                    var assessmentShortLabel = dataAttributes["Assessments"].getShortLabelById(data[i][5]);
                    var gradeShortLabel = dataAttributes["Grades"].getShortLabelById(data[i][6]);
                    fileNameData = tableShortLabel + "_" + yearShortLabel + "_" + subjectShortLabel + "_" + sampleShortLabel + "_" + assessmentShortLabel + "_" + gradeShortLabel + ".xlsx";
                    fileName = fileNameData;
                    fileNeedsToBeCreated = true;
                }
                var last4TableColumns = "</td><td></td><td></td><td></td><td></td>"
                if (fileNeedsToBeCreated) last4TableColumns = "<td colspan='4' style='text-align:center;'>Table needs to be posted</td>"
                else if (qcDate) last4TableColumns = "<td>" + posterLastName + "</td><td>" + postDate + "</td><td>" + qcLastName + "</td><td>" + qcDate + "</td>";
                
                $("#TableListBody").append("<tr class='table-list-item'><td>" + fileName + last4TableColumns);
                $(".table-list-item:last()").data("yearId", data[i][1]);
                $(".table-list-item:last()").data("tableId", data[i][2]);
                $(".table-list-item:last()").data("subjectId", data[i][3]);
                $(".table-list-item:last()").data("sampleId", data[i][4]);
                $(".table-list-item:last()").data("assessmentId", data[i][5]);
                $(".table-list-item:last()").data("gradeId", data[i][6]);
                $(".table-list-item:last()").data("scaleId", data[i][7]);
                $(".table-list-item:last()").data("tableFileName", data[i][8]);
                $(".table-list-item:last()").data("fileNeedsToBeCreated", fileNeedsToBeCreated);
                $(".table-list-item:last()").data("fileNameData", fileNameData);
                $(".table-list-item:last()").data("posterId", posterId);
                $(".table-list-item:last()").data("fullFileName", fullFileName);
                $(".table-list-item:last()").data("qcId", qcerId);
                $(".table-list-item:last()").css("cursor", "pointer");
                $(".table-list-item:last()").on("click", function () {                    
                    //working here
                    $("#PostButton").addClass("disabled");
                    
                    postQueryString = new QueryString();
                    postQueryString.setValue("Year", $(this).data("yearId"));
                    postQueryString.setValue("Table", $(this).data("tableId"));
                    postQueryString.setValue("Subject", $(this).data("subjectId"));
                    postQueryString.setValue("Assessment", $(this).data("assessmentId"));
                    postQueryString.setValue("Sample", $(this).data("sampleId"));
                    postQueryString.setValue("Grade", $(this).data("gradeId"));
                    postQueryString.setValue("Scale", $(this).data("scaleId"));                    
                    postQueryString.setValue("FileName", $(this).data("fileNameData"));
                    
                    $("#TeamInput").val(999);
                    $("#PosterInput").val($(this).data("posterId").trim());
                    $("#QCerInput").val($(this).data("qcId").trim());
                    
                    $(".table-list-item").removeClass("selected");
                    //$(this).css("background", "#a0a6af");
                    $(this).addClass("selected");
                    var yearLabel = dataAttributes["Years"].getLabelById($(this).data("yearId")) + "";                    
                    var tableLabel = dataAttributes["Tables"].getShortLabelById($(this).data("tableId")).toString().trim().replace(" ", "_");                    
                    var subjectLabel = dataAttributes["Subjects"].getLabelById($(this).data("subjectId")) + "";
                    var sampleLabel = dataAttributes["Samples"].getLabelById($(this).data("sampleId")) + "";
                    var assessmentLabel = dataAttributes["Assessments"].getLabelById($(this).data("assessmentId")) + "";
                    var gradeLabel = dataAttributes["Grades"].getLabelById($(this).data("gradeId")) + "";
                    postQueryString.setValue("YearLabel", yearLabel);
                    postQueryString.setValue("SubjectLabel", subjectLabel);
                    
                    var fileNameData = $(this).data("fileNameData");
                    var tableNumber = $(this).data("tableId").toString();
                    if (tableNumber.length == 1) tableNumber = "0" + tableNumber;
                    $("#TableInfo").html(yearLabel + " " + subjectLabel + " Table " + tableNumber + "<br />" + sampleLabel + " " + assessmentLabel + " " + gradeLabel);                    
                    
                    getInstructions(tableNumber, yearLabel);
                                                           
                    if ($(this).data("fileNeedsToBeCreated")) {
                        //$("#Debug").html("services/table_service.aspx?command=createFileFromTemplate&fileName=" + fileNameData + "&yearLabel=" + yearLabel + "&tableLabel=" + tableLabel + "&subjectLabel=" + subjectLabel);
                        //var queryString = "services/table_service.aspx?command=postTable&fileName=" + fileNameData + "&year=" + yearLabel + "&table=" + tableLabel + "&subject=" + subjectLabel + "&scale=" + scaleId
                        //$("#Debug").html(queryString);
                        //$("#Debug").html("services/table_service.aspx?command=createFileFromTemplate&fileName=" + fileNameData + "&yearLabel=" + yearLabel + "&tableLabel=" + tableLabel + "&subjectLabel=" + subjectLabel);
                        $.ajax({
                            url: "services/table_service.aspx?command=createFileFromTemplate&fileName=" + fileNameData + "&yearLabel=" + yearLabel + "&tableLabel=" + tableLabel + "&subjectLabel=" + subjectLabel
                        }).done(function (data) {
                            $("#EditTableButton").show();                            
                            $("#EditTableButton").attr("href", data);
                            $("#EditTableButton").removeClass("disabled");
                            //insertUpdateTable(postQueryString.toQueryString())
                        });
                    } else {
                        var fullFileName = $(this).data("fullFileName");
                        var editFileName = $(this).data("fullFileName").replace($(this).data("fileNameData"), "Edit" + $(this).data("fileNameData")).replace(/\s/g, '');                        
                        $.ajax({
                            url: editFileName, error: function (obj, errorString, exception) {
                                //$("#Debug").html("services/table_service.aspx?command=createEditFileFromExisting&fileName=" + fullFileName + "&yearLabel=" + yearLabel + "&tableLabel=" + tableLabel + "&subjectLabel=" + subjectLabel);                                
                                $.ajax({
                                    url: "services/table_service.aspx?command=createEditFileFromExisting&fileName=" + fullFileName + "&yearLabel=" + yearLabel + "&tableLabel=" + tableLabel + "&subjectLabel=" + subjectLabel
                                }).done(function (data) {                                    
                                    $("#EditTableButton").show();
                                    $("#EditTableButton").attr("href", data);
                                    $("#EditTableButton").removeClass("disabled");
                                    //insertUpdateTable(postQueryString.toQueryString())
                                });
                            }, success: function () {
                                $("#EditTableButton").show();                                
                                $("#EditTableButton").attr("href", $(this).data("fullFileName").replace($(this).data("fileNameData"), "Edit" + $(this).data("fileNameData")).replace(/\s/g, ''));
                                $("#EditTableButton").removeClass("disabled");
                            }
                        })

                        //$("#EditTableButton").show();
                        //$("#EditTableButton").attr("href", $(this).data("fullFileName").replace($(this).data("fileNameData"), "Edit" + $(this).data("fileNameData")).replace(/\s/g,''));
                        //$("#EditTableButton").removeClass("disabled");
                        //insertUpdateTable(postQueryString.toQueryString())
                    }
                });
            }
        })
        
        function getInstructions(tableNumber, yearLabel) {            
            //$("#Debug").html("services/command=getInstructions&fileName=" + tableNumber + "-" + yearLabel + ".htm");
            $.ajax({
                //url: "http://poseidon/jhsu/techdocs/html/" + tableNumber + "-" + yearLabel + ".htm", context:this
                //url: "http://cronus/naep/Tech_Doc/Instructions/" + tableNumber + "-" + yearLabel + ".htm", context: this,
                url: "services/table_service.aspx?command=getInstructions&fileName=" + tableNumber + "-" + yearLabel + ".htm", context: this,
                error: function () {                    
                    //$("#Debug").html($("#Debug").html() + "<br>no table instructions " + tableNumber)
                    getInstructions(tableNumber, subtractOneFromYearNumber(yearLabel))
                }
            }).done(function (instructionsHtml) {
                $("#Instructions").html(instructionsHtml);
                $("#Instructions").find("table").attr("width", "100%");
                //$("#Instructions").find("table tbody tr:eq(1) td").addClass("color-match").removeAttr("bgcolor");
                //instructions
                // $("td:contains(Instructions)").addClass("color-match").removeAttr("bgcolor");
                $("#Instructions").find("td[bgcolor='#000066']").addClass("color-match").removeAttr("bgcolor");
                $('td.color-match').find('u').contents().unwrap();
                $('td.color-match').find('b').contents().unwrap();
                $('td.color-match').find('font').contents().unwrap();
                $('td.color-match').find('br').remove();
                $('td.color-match').wrapInner('<h3>');
                $('tr > td > p').find('br').remove();
            })
        }

        function subtractOneFromYearNumber(yearNumber) {
            return "" + (parseInt(yearNumber) - 1);
        }
    }
    
    function insertUpdateTable(queryString) {
        $.ajax({
            url: "services/table_service.aspx?" + queryString
        }).done(function (data) {
            alert("Table is posted");
        });
    }

    function updateForms(ajaxString) {
        if (!ajaxString) ajaxString = "";
        $.ajax({
            url: "http://poseidon/jhsu/techdocs/services/get_data_service.aspx?tableName=Possible" + ajaxString,  //expectin array of season row data
            datatype: 'json'
        }).done(function (dataString) {
            
            var final = [];
            
            var data = JSON.parse(dataString);
            for(var i = 0; i < data.length; i++)
            {
                for (var j = 0; j < data[i].length; j++) {
                    if (i == 0) {                        
                        final[j] = {};
                    }
                    final[j][data[i][j]] = true;
                }
            }
 
            var attributeNames = ["Possible", "Years", "Tables", "Subjects", "Samples", "Assessments", "Grades"]
            for (var i = 1; i < final.length; i++) {
                var dataAttribute = dataAttributes[attributeNames[i]];               
                if (i > 0 && dataAttribute) {                    
                    dataAttribute.updateAvailability(final[i])
                }
            }
        
            for (var i = 1; i < attributeNames.length; i++) {
                dataAttributes[attributeNames[i]].setAutoComplete(dataAttributes[attributeNames[i]].getVisibleLabelText(final[i]));
            }            
            $(".data-attribute:focus").autocomplete("search", "");  //open the search dialogue after the ajax is returned and the processing is complete
            if ($(".data-attribute:focus").length == 0) {
                $("#" + nameShowAllButtonClicked + "Input").autocomplete("search", "");                
            }
        });
    }

    function createAjaxString(element, ui) {
        var ret = "";
        
        if (element && ui) {
            ret += ret + "&" + $(element).attr("name") + "=" + dataAttributes[$(element).attr("name") + "s"].getIdByLabel(ui.item.value);
        }

        $(".data-attribute").each(function () {
            if ($(this).val()) {              
                ret += "&" + $(this).attr("name") + "=" + dataAttributes[$(this).attr("name") + "s"].getIdByLabel($(this).val());
            }
        })
       
        var parts = ret.split("&");
        ret = "";
        for (var i = 1; i < parts.length; i++) {
            if (parts[i] != parts[i - 1]) ret += "&" + parts[i];
        }
        return ret;
    }

    function removeParameterFromAjaxString(ajaxString, attributeName) {
        var parts = ajaxString.split("&");
        var ret = "";
        for (var i = 1; i < parts.length; i++) {
            subParts = parts[i].split("=");
            if(subParts[0] != attributeName) ret += "&" + parts[i];
        }
        return ret;
    }

        /*
    form.onsubmit = function (event) {       
        event.preventDefault();

        // Update button text.
        uploadButton.innerHTML = 'Uploading...';

        // The rest of the code will go here...
        var files = fileSelect.files;
        var formData = new FormData();
        for (var i = 0; i < files.length; i++) {
            var file = files[i];

            // Check the file type.
            //if (!file.type.match('image.*')) {
              //  continue;
            //}

            // Add the file to the request.
            formData.append('excel', file, file.name);
        }
        $.ajax({
            url: "services/file_uploader_service.aspx", context: document.body
        }).done(function (data) {
            uploadButton.innerHTML = 'Upload';
        });
    }
    */

    $("#ClearButton").on("click", function () {        
        $("#YearInput").val("");
        $("#TableInput").val("");
        $("#SubjectInput").val("");
        $("#SampleInput").val("");
        $("#AssessmentInput").val("");
        $("#GradeInput").val("");
        $("#TableListBody").html("");
        $("#Instructions").html("");
        $("#TableInfo").html("");
        $("#PosterInput").val("");
        $("#QCerInput").val("");
        $("#TeamInput").val("");
        var ajaxString = createAjaxString()
        updateTableList(ajaxString);
        return false;
    })

    $("#EditTableButton").on("click", function () {
        if ($(this).hasClass("disabled")) return false;
        $("#PostButton").removeClass("disabled");
    })

    $("#PostButton").on("click", function () {
        if ($(this).hasClass("disabled")) return false;        
        var posterId = $("#PosterInput").val();
        var qcId = $("#QCerInput").val();
        var teamInput = $("#TeamInput").val();
        var messageInput = $("#MessageInput").val().trim();
        postQueryString.removeKey("Poster");
        postQueryString.removeKey("QCer");
        postQueryString.removeKey("Team");
        postQueryString.removeKey("Message");
        postQueryString.removeKey("command");
        postQueryString.setValuesBySelectors(["#PosterInput", "#QCerInput", "#TeamInput", "#MessageInput"]);
        postQueryString.setValue("command", "postTable");        
        if (!isFormValid()) {
            alert("Fill out poster and qcer to the right.");
            return false;
        }
        var answer = confirm("Are you sure you want to post?");
        if (!answer) return false;
        //$("#Debug").html("services/table_service.aspx?" + postQueryString.toQueryString());
        $("#Thinking").show();
        $.ajax({
            url: "services/table_service.aspx?" + postQueryString.toQueryString()
        }).done(function (data) {
            $("#Thinking").hide();
            var ajaxString = createAjaxString()            
            updateTableList(ajaxString);
            alert("Post is complete");            
            $("#PostButton").removeClass("disabled");
            $("#EditTableButton").removeClass("disabled");
        });
        $("#PostButton").addClass("disabled");
        $("#EditTableButton").addClass("disabled");
        return false;
        var fileSelect = $("#TechDocFileInput")[0];
        var files = fileSelect.files;
        var formData = new FormData();

        for (var i = 0; i < files.length; i++) {
            formData.append("TDFile", files[i], files[i].name);            
            //sendFile(files);
        }        
        
        var xhr = new XMLHttpRequest();
        var year = $("#YearInput").val();
        var subject = $("#SubjectInput").val();
        alert("about to post " + "services/file_service.aspx?fileName=" + getTableCode() + "&year=" + year + "&subject=" + subject);
        return;
        xhr.open('POST', 'services/file_service.aspx?fileName=' + getTableCode() + "&year=" + year + "&subject=" + subject, true);
        xhr.onreadystatechange = function () {
            if (xhr.status === 200) {
                // File(s) uploaded.
                // uploadButton.innerHTML = 'Upload';
                alert("uploaded " + xhr.responseText);
            } else {
                alert('An error occurred!');
            }
        };        
        xhr.send(formData);              

        $.ajax({
            url: "services/save_data_service.aspx",  //expectin array of season row data
            datatype: 'json'
        }).done(function (dataString) {
            alert("data should be saved" + dataString);
        });


        return false;
        
        //return false;
    })

    function getTableCode() {        
        var attributeNames = getAttributeNames();
        var tableCode = "";
        for (var i = 0; i < attributeNames.length; i++) {
            var attribute = dataAttributes[attributeNames[i]];            
            tableCode += attribute.getShortLabelByLabel($(attribute.htmlInput).val());
            if (i != attributeNames.length - 1) tableCode += "_";
        }
        return tableCode;
    }

    function isFormValid() {
        //var attributeNames = getAttributeNames();
        //for (var i = 0; i < attributeNames.length; i++) {
            //if(!dataAttributes[attributeNames[i]].isValueValid()) return false
        //}
        var posterId = $("#PosterInput").val();
        var qcId = $("#QCerInput").val();
        //var teamInput = $("#TeamInput").val() != 999;
        //var messageInput = $("#MessageInput").val().trim();
        return posterId && qcId;
        return posterId && qcId && teamInput && messageInput;
    } 

    function getAttributeNames() {
        return ["Years", "Tables", "Subjects", "Samples", "Assessments", "Grades"];
    }

});
</script>   

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <!--[if IE]><meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1"><![endif]-->
	<title>Table Tracker</title>
	<link rel="stylesheet" href="inc/css/normalize.css">
    <link rel="stylesheet" href="inc/css/styles.css">
    <!-- <link href="/inc/css/screen.css" media="screen, projection" rel="stylesheet" type="text/css" />
    <link href="/inc/css/print.css" media="print" rel="stylesheet" type="text/css" /> -->
     <!--[if IE]>
         <link href="/inc/css/ie.css" media="screen, projection" rel="stylesheet" type="text/css" />
     <![endif]-->
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,700' rel='stylesheet' type='text/css'>
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet">

    <link href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet" type='text/css'>

    <script type="text/javascript">
    $(document).ready(function(){
        $('#TechDocFileInput').change(function(e){
            $('.uploaded-file').html($(this).val());
        });
    })
    </script>
    <script type="text/javascript">
    // Change the selector if needed
        var $table = $('table.builder'),
            $bodyCells = $table.find('tbody tr:first').children(),
            colWidth;

        // Adjust the width of thead cells when window resizes
        $(window).resize(function() {
            // Get the tbody columns width array
            colWidth = $bodyCells.map(function() {
                return $(this).width();
            }).get();
            
            // Set the width of thead columns
            $table.find('thead tr').children().each(function(i, v) {
                $(v).width(colWidth[i]);
            });    
        }).resize(); // Trigger resize handler
    </script>

</head>
<body>
    <div id = "Thinking" style ="z-index:1000; position:fixed; width: 100%; height:100%; background-image:url(images/black-transparent-50.png); display:none;">
        <img src ="images/blue-loading.png" class ="loading" style ="position:absolute;top:40%; left:50%; width:200px;margin-top:-100px; margin-left:-100px;"/>
    </div>
    <div class="container">
		<header class="top-bar">
            <h1><span>Table Production</span> Tracking</h1>
            <ul class="top-nav">
                <li><a style ="color:#ff7733">Post</a></li>
                <li><a href="qc.aspx">QC</a></li>
                <li><a href="teams.aspx">View/Create Teams</a></li>
                <li><a href="http://nces.ed.gov/nationsreportcard/tdw/index.asp" title="Leaves the site">NAEP Tech Doc Website</a></li>
            </ul>
        </header>
		<article>
			<form class="display-page">
				<section class="col-1">
                <label>Year:</label>
                <div class="form-element">
                    <input id="YearInput" name ="Year" type="text" list="years" class="data-attribute form-control" tabindex="1"/>
                    <!--i class="fa fa-times-circle clear-text-button" aria-hidden="true" id ="YearShowAllButton"></i-->
                    <i class="clear-text-button" aria-hidden="true" id ="YearShowAllButton"></i>
                </div>
                <label>Table #:</label>
                <div class="form-element">
                    <input id="TableInput" name="Table" type="text" list="years" class="data-attribute" tabindex="2"/>
                    <i class="clear-text-button" aria-hidden="true" id="TableShowAllButton"></i>
                </div>
                <label>Subject:</label>
                <div class="form-element">
                    <input id="SubjectInput" name="Subject" type="text" list="years" class="data-attribute" tabindex="3"/>
                    <i class="clear-text-button" aria-hidden="true" id="SubjectShowAllButton"></i>
                </div>
                <label>Sample:</label>
                <div class="form-element">
                    <input id="SampleInput" name ="Sample" type="text" list="years" class="data-attribute" tabindex="4"/>
                    <i class="clear-text-button" aria-hidden="true" id="SampleShowAllButton"></i>
                </div>
                <label>Assessment:</label>
                <div class="form-element">
                    <input id="AssessmentInput" name="Assessment" type="text" list="years" class="data-attribute" tabindex="5"/>
                    <i class="clear-text-button" aria-hidden="true" id="AssessmentShowAllButton"></i>
                </div>
                <label>Age/Grade:</label>
                <div class="form-element">
                    <input id="GradeInput" name="Grade" type="text" list="years" class="data-attribute" tabindex="6"/>
                    <i class="clear-text-button" aria-hidden="true" id="GradeShowAllButton"></i>
                </div>
                <div class="button-group">
                    <button id="ClearButton" tabindex="13">Clear</button>
                </div>
                <div id ="Debug"></div>
				</section>
				<section class="col-2">
					<table id="TableList" class="builder">
						<thead>
							<tr>
								<th>Table</th>
								<th>Posted By</th>
								<th>Post Date</th>
								<th>QCed By</th>
								<th>QC Date</th>
							</tr>
						</thead>
						<tbody id ="TableListBody">
                            
						</tbody>
					</table>
				</section>
				<section class="col-3"> 
                    <label>Table Info</label>
                    <div id ="TableInfo">&nbsp;<br />&nbsp;</div>
                    <div id ="Instructions" style ="height:250px;overflow-y:scroll;"></div>

                    <label>Posted By:</label>
                    <select id="PosterInput" name="Poster" class="form-control" tabindex="7">
                        <option value="" selected="selected">Please Select Name</option>
                    </select>

                    <label>Notify for QC:</label>
                    <select id ="QCerInput" name="QCer" class="form-control" tabindex="9">
                        <option value="" selected="selected">Please Select QCer</option>
                    </select>

                    <label>cc:</label>
                    <select id ="TeamInput" name="Team" class="form-control" tabindex="10"></select>

                    <label>Messages/Notes:</label>
                    <textarea id="MessageInput" wrap="virtual" rows="4" cols="64" name="Message" tabindex="11"></textarea>

                    <div class="button-group">
                        <a id ="EditTableButton" style = "" tabindex="12" class="btn-link disabled">Edit Table</a><button id ="PostButton" class ="disabled">POST</button>
                    </div>
				</section>
			</form>
		</article>
		<footer><p>Suggestions or Comments?  <a href="mailto:mlin@ets.org">Email Us</a></p></footer>
	</div>
</body>
</html>