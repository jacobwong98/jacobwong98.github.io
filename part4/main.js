var selectTool, placeholderDiv;
var asyncRequest;
var js = "measurementConvert.js";
function onLoad() {
    selectTool = document.getElementById('selectTool');
    placeholderDiv = document.getElementById('placeholderDiv');
    selectTool.addEventListener("change", getTool, false);
    selectTool.value = "measurement"
    getTool();
}


function getTool(event) {
    var url = "measurementConvert.html";
    // Removes script tag of previous tool
    document.body.removeChild(document.body.lastChild)
    if (event) {
        switch (event.target.value) {
            case "measurement":
                url = "measurementConvert.html";
                js = "measurementConvert.js";
                break;
            case "mortgage":
                url = "mortgageCalc.html";
                js = "mortgageCalc.js";
                break;
            case "depreciation":
                url = "depreciationCalc.html";
                js = "depreciationCalc.js";
                break;
            default:
                url = "measurementConvert.html";
                js = "measurementConvert.js";
        }
    }
    try {
        asyncRequest = new XMLHttpRequest(); // create request object
        asyncRequest.addEventListener("readystatechange", processRequest, false);
        asyncRequest.open("GET", url, true);
        asyncRequest.send(null);
    }
    catch (exception) {
        alert('Failed to get requested Utility tool');
    }
}

function processRequest() {
    if (asyncRequest.readyState == 4 && asyncRequest.status == 200 && asyncRequest.response) {
        placeholderDiv.innerHTML = asyncRequest.response;
        var toolScript = document.createElement("script");
        toolScript.src = js;
        document.body.append(toolScript);
    }
}

window.addEventListener("load", onLoad, false);