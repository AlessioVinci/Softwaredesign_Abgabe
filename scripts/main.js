"use strict";
var QuestionariesProject;
(function (QuestionariesProject) {
    let currentState = "mainmenu";
    document.getElementById("inputField").onkeydown = evalInput;
    function evalInput(event) {
        if (event.key != "Enter")
            return;
        let input = parseInt(document.getElementById("inputField").value);
        switch (currentState) {
            case "mainmenu": {
                QuestionariesProject.mainmenu_options[input - 1]();
                break;
            }
            default: {
                break;
            }
        }
    }
})(QuestionariesProject || (QuestionariesProject = {}));
//# sourceMappingURL=main.js.map