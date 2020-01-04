var principal, length, frequency, rate, payments, totalInt

function onLoad() {
    principal = document.getElementById('mortAmt');
    length = document.getElementById('mortLength');
    frequency = document.getElementById('payFreq');
    rate = document.getElementById('intRate');

    payments = document.getElementById('payments');
    totalInt = document.getElementById('totalInt');

    principal.addEventListener("blur", calcMortgage, false);
    length.addEventListener("blur", calcMortgage, false);
    frequency.addEventListener("change", calcMortgage, false);
    rate.addEventListener("blur", calcMortgage, false);
}

function calcMortgage() {
    var p = principal.value;
    var len = length.value;
    var freq = frequency.value;
    var i = ((rate.value) / 100);

    switch (freq) {
        case "m":
            i /= 12;
            len *= 12;
            break;
        case "biw":
            i /= 26;
            len *= 26;
            break;
        case "w":
            i /= 52;
            len *= 52
            break;
    }

    var payment = p * (i * (Math.pow((1 + i), len))) / (Math.pow((1 + i), len) - 1);
    var totalI = (payment * len) - p;

    payments.innerHTML = (isFinite(payment)) ? "$ " + payment.toFixed(2) : "More Fields are required.";
    totalInt.innerHTML = (isNaN(totalI)) ? "More Fields are required." : "$ " + totalI.toFixed(2);
}


onLoad();