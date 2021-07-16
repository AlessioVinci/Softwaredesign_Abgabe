"use strict";
//import {State} from "./states";
var QuestionariesProject;
//import {State} from "./states";
(function (QuestionariesProject) {
    QuestionariesProject.currentState = QuestionariesProject.State.MAIN_MENU_REGULAR;
    document.getElementById("inputField").onkeydown = evalInput;
    function evalInput(event) {
        if (event.key != "Enter")
            return;
        let inputField = document.getElementById("inputField");
        let input = parseInt(inputField.value);
        inputField.value = "";
        switch (QuestionariesProject.currentState) {
            case QuestionariesProject.State.MAIN_MENU_REGULAR: {
                QuestionariesProject.main_menu[input - 1]();
                break;
            }
            case QuestionariesProject.State.QUESTIONARIES_LIST: {
                QuestionariesProject.questionaries_list[input - 1]();
                break;
            }
            default: {
                break;
            }
        }
    }
    function loadJSON(url, callback) {
        const request = new XMLHttpRequest();
        request.overrideMimeType("application/json");
        request.open("GET", url);
        request.onreadystatechange = () => {
            if (request.readyState === 4 && request.status === 200) {
                let obj = JSON.parse(request.responseText);
                callback(obj);
            }
        };
        request.send(null);
    }
    function checkLogin(username, password, callback) {
        loadJSON("./jsons/data.json", (response) => {
            let found = false;
            for (let dataset of response.logins) {
                if (dataset.username === username && dataset.password === password)
                    found = true;
            }
            callback(found);
        });
    }
})(QuestionariesProject || (QuestionariesProject = {}));
//# sourceMappingURL=main.js.map