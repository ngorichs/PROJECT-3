/**
 * Created by noah.gorichs123 on 10/18/16.
 */

"use strict";


function Convert(Temp) {


    var C = document.getElementById("Cel"); //Celsius
    var F = document.getElementById("Fahr"); //Fahrenheit

    var ES = "";
    var BR = "<br>";

    var CtoF = 0;
    var FtoC = 0;

    try {
        if (Temp == "C") {
            CtoF = C.value * 1.8 + 32;
            F.value = Math.round(CtoF);

            if (isNaN(C.value)) {
                F.value = 0;
                C.value = 0;
                alert("Please enter a number");
            }


        }
        else if (Temp == "F") {
            FtoC = (F.value - 32) / 1.8;
           C.value = Math.round(FtoC);

            if (isNaN(F.value)) {
                F.value = 0;
                C.value = 0;
                alert("Please enter a number");
            }


        }

    }


    catch (e) {
        alert("ERROR");


    }




}



