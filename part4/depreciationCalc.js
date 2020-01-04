var cost = document.getElementById('costInput');
var residual = document.getElementById('resVal');
var years = document.getElementById('useYears');
var tableBody = document.getElementById('tempTable');
var output = '<tr><td colspan="7" class="center required">More Information is required.</td></tr>';

function onLoad() {
    cost.addEventListener("blur", calcDepreciation, false);
    residual.addEventListener("blur", calcDepreciation, false);
    years.addEventListener("blur", calcDepreciation, false);
}

function calcDepreciation() {
    cost.value = parseFloat(cost.value).toFixed(2);
    residual.value = parseFloat(residual.value).toFixed(2);
    years.value = parseFloat(years.value).toFixed(0);

    var costVal = cost.value;
    var residualVal = residual.value;
    var yearsVal = years.value;

    if (costVal != "" && yearsVal != "" && residualVal != "" && (parseFloat(costVal) > parseFloat(residualVal))) {
        var depExpSL = getSLDepExp(costVal, residualVal, yearsVal);
        var carryAmountSL = costVal;
        var carryAmountDDB = costVal;
        var depExpDDBRate = (2 / yearsVal);
        var depExpDDB = 0;
        output = ""
        for (var i = 1; i <= yearsVal; i++) {
            output += "<tr><td>"
            output += i + "</td>" // Year
            // Single-Line Starting Carrying amount
            output += "<td>" + carryAmountSL + "</td>";
            // Single-Line Depreciation Expense
            output += "<td>" + depExpSL + "</td>";
            // Single-Line Ending Carrying amount
            carryAmountSL = (carryAmountSL - depExpSL).toFixed(2);
            output += "<td>" + carryAmountSL + "</td>";
            // DDB Starting Carrying amount
            output += "<td>" + carryAmountDDB + "</td>";
            // DDB Depreciation Expense
            depExpDDB = getDDBDepExp(carryAmountDDB, depExpDDBRate, residualVal, yearsVal);
            output += "<td>" + depExpDDB + "</td>";
            // DDB Ending Carrying amount
            carryAmountDDB = (carryAmountDDB - depExpDDB).toFixed(2);
            output += "<td>" + carryAmountDDB + "</td>";

            output += "</tr>"
        }
        tableBody.innerHTML = output;
    }
    else {
        if (parseFloat(costVal) <= parseFloat(residualVal)) {
            document.getElementById('costLTRes').innerText = " Residual must be less than cost of PPE";
        }
        else {
            document.getElementById('costLTRes').innerText = ""
        }

        output = '<tr><td colspan="7" class="center required">More Information is required.</td></tr>';
        tableBody.innerHTML = output;
    }

}

function getSLDepExp(cost, res, years) {
    return ((cost - res) / years).toFixed(2);
}

function getDDBDepExp(cAmount, rate, res, years) {
    // Get Dep Exp
    var dep = (cAmount * rate)
    // Get Ending Carrying Amount
    var endCAmount = cAmount - dep;
    // If our depreciation exceeds residual value, need to change dep to difference between 
    // current carrying amount and residual
    if (parseFloat(endCAmount) < parseFloat(res)) {
        dep = cAmount - res;
    }
    return dep.toFixed(2);
}

onLoad();
