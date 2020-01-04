var origW, origWUnit, newW, newWUnit
var origL, origLUnit, newL, newLUnit
var origA, origAUnit, newA, newAUnit
var origV, origVUnit, newV, newVUnit

function onLoad() {
    // Get Weight related elements
    origW = document.getElementById('origWeight');
    origWUnit = document.getElementById('origWeightUnit');
    newW = document.getElementById('newWeight');
    newWUnit = document.getElementById('newWeightUnit');

    // Add Event Listeners for Weight related elements
    origW.addEventListener("blur", calcWeight, false);
    origWUnit.addEventListener("change", calcWeight, false);
    newWUnit.addEventListener("change", calcWeight, false);

    // Get Length related elements
    origL = document.getElementById('origLength');
    origLUnit = document.getElementById('origLengthUnit');
    newL = document.getElementById('newLength');
    newLUnit = document.getElementById('newLengthUnit');

    // Add Event Listeners for Length related elements
    origL.addEventListener("blur", calcLength, false);
    origLUnit.addEventListener("change", calcLength, false);
    newLUnit.addEventListener("change", calcLength, false);

    // Get Area related elements
    origA = document.getElementById('origArea');
    origAUnit = document.getElementById('origAreaUnit');
    newA = document.getElementById('newArea');
    newAUnit = document.getElementById('newAreaUnit');

    // Add Event Listeners for Area related elements
    origA.addEventListener("blur", calcArea, false);
    origAUnit.addEventListener("change", calcArea, false);
    newAUnit.addEventListener("change", calcArea, false);

    // Get Volume related elements
    origV = document.getElementById('origVolume');
    origVUnit = document.getElementById('origVolumeUnit');
    newV = document.getElementById('newVolume');
    newVUnit = document.getElementById('newVolumeUnit');

    // Add Event Listeners for Length related elements
    origV.addEventListener("blur", calcVolume, false);
    origVUnit.addEventListener("change", calcVolume, false);
    newVUnit.addEventListener("change", calcVolume, false);
}

//function getMeasurements() {
//    switch (measurements.value) {
//        case "Weight":
//            calcWeight();
//            break;
//        case "Length":
//            calcLength();
//            break;
//        case "Area":
//            calcArea();
//            break;
//        case "Volume":
//            calcVolume();
//            break;
//    }
//}

function calcWeight() {
    var inputVal = origW.value;
    var inputUnits = origWUnit.value;
    var outputUnits = newWUnit.value;

    if (inputUnits != outputUnits) {
        switch (inputUnits) {
            case "Grams":
                switch (outputUnits) {
                    case "Kilograms":
                        newW.value = parseFloat((inputVal * 0.001).toFixed(6));
                        break;
                    case "Pounds":
                        newW.value = parseFloat((inputVal * 0.00220462).toFixed(6));
                        break;
                    case "Ounces":
                        newW.value = parseFloat((inputVal * 0.035274).toFixed(6));
                        break;
                    case "Tonnes":
                        newW.value = parseFloat((inputVal * 0.000001).toFixed(6));
                        break;
                }
                break;
            case "Kilograms":
                switch (outputUnits) {
                    case "Grams":
                        newW.value = parseFloat((inputVal * 1000).toFixed(6));
                        break;
                    case "Pounds":
                        newW.value = parseFloat((inputVal * 2.20462).toFixed(6));
                        break;
                    case "Ounces":
                        newW.value = parseFloat((inputVal * 35.274).toFixed(6));
                        break;
                    case "Tonnes":
                        newW.value = parseFloat((inputVal * 0.001).toFixed(6));
                        break;
                }
                break;
            case "Pounds":
                switch (outputUnits) {
                    case "Grams":
                        newW.value = parseFloat((inputVal * 453.59237).toFixed(6));
                        break;
                    case "Kilograms":
                        newW.value = parseFloat((inputVal * 0.45359237).toFixed(6));
                        break;
                    case "Ounces":
                        newW.value = parseFloat((inputVal * 16).toFixed(6));
                        break;
                    case "Tonnes":
                        newW.value = parseFloat((inputVal * 0.00045359237).toFixed(6));
                        break;
                }
                break;
            case "Ounces":
                switch (outputUnits) {
                    case "Grams":
                        newW.value = parseFloat((inputVal * 28.34952).toFixed(6));
                        break;
                    case "Kilograms":
                        newW.value = parseFloat((inputVal * 0.02834952).toFixed(6));
                        break;
                    case "Pounds":
                        newW.value = parseFloat((inputVal * 0.0625).toFixed(6));
                        break;
                    case "Tonnes":
                        newW.value = parseFloat((inputVal * 0.0000283495).toFixed(6));
                        break;
                }
                break;
            case "Tonnes":
                switch (outputUnits) {
                    case "Grams":
                        newW.value = parseFloat((inputVal * 1000000).toFixed(6));
                        break;
                    case "Kilograms":
                        newW.value = parseFloat((inputVal * 1000).toFixed(6));
                        break;
                    case "Pounds":
                        newW.value = parseFloat((inputVal * 2204.62262).toFixed(6));
                        break;
                    case "Ounces":
                        newW.value = parseFloat((inputVal * 35273.9619).toFixed(6));
                        break;
                }
                break;
        }
    }
    else {
        newW.value = inputVal;
    }
    
}

function calcLength() {
    var inputVal = origL.value;
    var inputUnits = origLUnit.value;
    var outputUnits = newLUnit.value;

    if (inputUnits != outputUnits) {
        switch (inputUnits) {
            case "Kilometeres":
                switch (outputUnits) {
                    case "Meteres":
                        newL.value = parseFloat((inputVal * 1000).toFixed(6));
                        break;
                    case "Centimeteres":
                        newL.value = parseFloat((inputVal * 100000).toFixed(6));
                        break;
                    case "Inches":
                        newL.value = parseFloat((inputVal * 39370.0787).toFixed(6));
                        break;
                    case "Feet":
                        newL.value = parseFloat((inputVal * 3280.8399).toFixed(6));
                        break;
                    case "Miles":
                        newL.value = parseFloat((inputVal * 0.62137119).toFixed(6));
                        break;
                }
                break;
            case "Meteres":
                switch (outputUnits) {
                    case "Kilometeres":
                        newL.value = parseFloat((inputVal * 0.001).toFixed(6));
                        break;
                    case "Centimeteres":
                        newL.value = parseFloat((inputVal * 100).toFixed(6));
                        break;
                    case "Inches":
                        newL.value = parseFloat((inputVal * 39.3700787).toFixed(6));
                        break;
                    case "Feet":
                        newL.value = parseFloat((inputVal * 3.2808399).toFixed(6));
                        break;
                    case "Miles":
                        newL.value = parseFloat((inputVal * 0.00062137119).toFixed(6));
                        break;
                }
                break;
            case "Centimeteres":
                switch (outputUnits) {
                    case "Kilometeres":
                        newL.value = parseFloat((inputVal * 0.00001).toFixed(6));
                        break;
                    case "Meteres":
                        newL.value = parseFloat((inputVal * 0.01).toFixed(6));
                        break;
                    case "Inches":
                        newL.value = parseFloat((inputVal * 0.393700787).toFixed(6));
                        break;
                    case "Feet":
                        newL.value = parseFloat((inputVal * 0.032808399).toFixed(6));
                        break;
                    case "Miles":
                        newL.value = parseFloat((inputVal * 0.0000062137119).toFixed(6));
                        break;
                }
                break;
            case "Inches":
                switch (outputUnits) {
                    case "Kilometeres":
                        newL.value = parseFloat((inputVal * 0.0000254).toFixed(6));
                        break;
                    case "Meteres":
                        newL.value = parseFloat((inputVal * 0.00254).toFixed(6));
                        break;
                    case "Centimeteres":
                        newL.value = parseFloat((inputVal * 2.54).toFixed(6));
                        break;
                    case "Feet":
                        newL.value = parseFloat((inputVal * 0.0833333).toFixed(6));
                        break;
                    case "Miles":
                        newL.value = parseFloat((inputVal * 0.0000157828).toFixed(6));
                        break;
                }
                break;
            case "Feet":
                switch (outputUnits) {
                    case "Kilometeres":
                        newL.value = parseFloat((inputVal * 0.0003048).toFixed(6));
                        break;
                    case "Meteres":
                        newL.value = parseFloat((inputVal * 0.3048).toFixed(6));
                        break;
                    case "Centimeteres":
                        newL.value = parseFloat((inputVal * 30.48).toFixed(6));
                        break;
                    case "Inches":
                        newL.value = parseFloat((inputVal * 12).toFixed(6));
                        break;
                    case "Miles":
                        newL.value = parseFloat((inputVal * 0.0001893939).toFixed(6));
                        break;
                }
                break;
            case "Miles":
                switch (outputUnits) {
                    case "Kilometeres":
                        newL.value = parseFloat((inputVal * 1.609344).toFixed(6));
                        break;
                    case "Meteres":
                        newL.value = parseFloat((inputVal * 1609.344).toFixed(6));
                        break;
                    case "Centimeteres":
                        newL.value = parseFloat((inputVal * 160934.4).toFixed(6));
                        break;
                    case "Inches":
                        newL.value = parseFloat((inputVal * 72913.3858).toFixed(6));
                        break;
                    case "Feet":
                        newL.value = parseFloat((inputVal * 6076.11549).toFixed(6));
                        break;
                }
                break;
        }
    }
    else {
        newL.value = inputVal;
    }

}

function calcArea() {
    var inputVal = origA.value;
    var inputUnits = origAUnit.value;
    var outputUnits = newAUnit.value;

    if (inputUnits != outputUnits) {
        switch (inputUnits) {
            case "Square Meteres":
                switch (outputUnits) {
                    case "Square Miles":
                        newA.value = parseFloat((inputVal * 0.000000386102).toFixed(6));
                        break;
                    case "Square Feet":
                        newA.value = parseFloat((inputVal * 10.7639).toFixed(6));
                        break;
                    case "Square Inches":
                        newA.value = parseFloat((inputVal * 1550.0031).toFixed(6));
                        break;
                    case "Acre":
                        newA.value = parseFloat((inputVal * 0.000247105).toFixed(6));
                        break;
                }
                break;
            case "Square Miles":
                switch (outputUnits) {
                    case "Square Meteres":
                        newA.value = parseFloat((inputVal * 2589988.1103).toFixed(6));
                        break;
                    case "Square Feet":
                        newA.value = parseFloat((inputVal * 27878399.999612).toFixed(6));
                        break;
                    case "Square Inches":
                        newA.value = parseFloat((inputVal * 4014489599.9442).toFixed(6));
                        break;
                    case "Acre":
                        newA.value = parseFloat((inputVal * 639.99999).toFixed(6));
                        break;
                }
                break;
            case "Square Feet":
                switch (outputUnits) {
                    case "Square Meteres":
                        newA.value = parseFloat((inputVal * 0.09290304).toFixed(6));
                        break;
                    case "Square Miles":
                        newA.value = parseFloat((inputVal * 0.00000003587).toFixed(6));
                        break;
                    case "Square Inches":
                        newA.value = parseFloat((inputVal * 144).toFixed(6));
                        break;
                    case "Acre":
                        newA.value = parseFloat((inputVal * 0.0000229568).toFixed(6));
                        break;
                }
                break;
            case "Square Inches":
                switch (outputUnits) {
                    case "Square Meteres":
                        newA.value = parseFloat((inputVal * 0.00064516).toFixed(6));
                        break;
                    case "Square Miles":
                        newA.value = parseFloat((inputVal * 0.000000000249097).toFixed(6));
                        break;
                    case "Square Feet":
                        newA.value = parseFloat((inputVal * 0.00694444).toFixed(6));
                        break;
                    case "Acre":
                        newA.value = parseFloat((inputVal * 0.0000001594).toFixed(6));
                        break;
                }
                break;
            case "Acre":
                switch (outputUnits) {
                    case "Square Meteres":
                        newA.value = parseFloat((inputVal * 4046.856422).toFixed(6));
                        break;
                    case "Square Miles":
                        newA.value = parseFloat((inputVal * 0.0015625).toFixed(6));
                        break;
                    case "Square Feet":
                        newA.value = parseFloat((inputVal * 43560).toFixed(6));
                        break;
                    case "Square Inches":
                        newA.value = parseFloat((inputVal * 6272640).toFixed(6));
                        break;
                }
                break;
        }
    }
    else {
        newA.value = inputVal;
    }

}

function calcVolume() {
    var inputVal = origV.value;
    var inputUnits = origVUnit.value;
    var outputUnits = newVUnit.value;

    if (inputUnits != outputUnits) {
        switch (inputUnits) {
            case "Cubic Meteres":
                switch (outputUnits) {
                    case "Literes":
                        newV.value = parseFloat((inputVal * 1000).toFixed(6));
                        break;
                    case "Cubic Inches":
                        newV.value = parseFloat((inputVal * 61023.74409).toFixed(6));
                        break;
                    case "Pints":
                        newV.value = parseFloat((inputVal * 2113.376418).toFixed(6));
                        break;
                    case "Quarts":
                        newV.value = parseFloat((inputVal * 1056.6882).toFixed(6));
                        break;
                    case "Gallons":
                        newV.value = parseFloat((inputVal * 0.264172052).toFixed(6));
                        break;
                }
                break;
            case "Literes":
                switch (outputUnits) {
                    case "Cubic Meteres":
                        newV.value = parseFloat((inputVal * 0.001).toFixed(6));
                        break;
                    case "Cubic Inches":
                        newV.value = parseFloat((inputVal * 61.023744).toFixed(6));
                        break;
                    case "Pints":
                        newV.value = parseFloat((inputVal * 2.1133764).toFixed(6));
                        break;
                    case "Quarts":
                        newV.value = parseFloat((inputVal * 1.056688).toFixed(6));
                        break;
                    case "Gallons":
                        newV.value = parseFloat((inputVal * 0.26417205).toFixed(6));
                        break;
                }
                break;
            case "Cubic Inches":
                switch (outputUnits) {
                    case "Cubic Meteres":
                        newV.value = parseFloat((inputVal * 0.000016387064).toFixed(6));
                        break;
                    case "Literes":
                        newV.value = parseFloat((inputVal * 0.016387064).toFixed(6));
                        break;
                    case "Pints":
                        newV.value = parseFloat((inputVal * 0.034632).toFixed(6));
                        break;
                    case "Quarts":
                        newV.value = parseFloat((inputVal * 0.017316).toFixed(6));
                        break;
                    case "Gallons":
                        newV.value = parseFloat((inputVal * 0.004329).toFixed(6));
                        break;
                }
                break;
            case "Pints":
                switch (outputUnits) {
                    case "Cubic Meteres":
                        newV.value = parseFloat((inputVal * 0.000473176473).toFixed(6));
                        break;
                    case "Literes":
                        newV.value = parseFloat((inputVal * 0.473176473).toFixed(6));
                        break;
                    case "Cubic Inches":
                        newV.value = parseFloat((inputVal * 28.875).toFixed(6));
                        break;
                    case "Quarts":
                        newV.value = parseFloat((inputVal * 0.5).toFixed(6));
                        break;
                    case "Gallons":
                        newV.value = parseFloat((inputVal * 0.125).toFixed(6));
                        break;
                }
                break;
            case "Quarts":
                switch (outputUnits) {
                    case "Cubic Meteres":
                        newV.value = parseFloat((inputVal * 0.000946352946).toFixed(6));
                        break;
                    case "Literes":
                        newV.value = parseFloat((inputVal * 0.946352946).toFixed(6));
                        break;
                    case "Cubic Inches":
                        newV.value = parseFloat((inputVal * 57.75).toFixed(6));
                        break;
                    case "Pints":
                        newV.value = parseFloat((inputVal * 2).toFixed(6));
                        break;
                    case "Gallons":
                        newV.value = parseFloat((inputVal * 0.25).toFixed(6));
                        break;
                }
                break;
            case "Gallons":
                switch (outputUnits) {
                    case "Cubic Meteres":
                        newV.value = parseFloat((inputVal * 0.003785411784).toFixed(6));
                        break;
                    case "Literes":
                        newV.value = parseFloat((inputVal * 3.785411784).toFixed(6));
                        break;
                    case "Cubic Inches":
                        newV.value = parseFloat((inputVal * 231).toFixed(6));
                        break;
                    case "Pints":
                        newV.value = parseFloat((inputVal * 8).toFixed(6));
                        break;
                    case "Quarts":
                        newV.value = parseFloat((inputVal * 4).toFixed(6));
                        break;
                }
                break;
        }
    }
    else {
        newV.value = inputVal;
    }

}


onLoad();