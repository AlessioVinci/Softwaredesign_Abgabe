"use strict";
var Questionaries;
(function (Questionaries) {
    //let currentState: String = "mainmenu";
    document.getElementById("inputField").onkeydown = evalInput;
    function evalInput(event) {
        if (event.key != "Enter")
            return;
        let input = parseInt(document.getElementById("inputField").value);
        console.log("and his name is " + input);
        /* switch (currentState) {
            case "mainmenu": {
                mainmenu[input];
            }
        } */
    }
})(Questionaries || (Questionaries = {}));
//# sourceMappingURL=main.js.map