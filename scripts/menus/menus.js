"use strict";
var QuestionariesProject;
(function (QuestionariesProject) {
    function drawContent(headline, content) {
        let outputWindow = document.getElementById("output");
        outputWindow.innerHTML = "";
        let span = document.createElement("span");
        span.textContent = headline;
        outputWindow.appendChild(span);
        let ul = document.createElement("ul");
        for (let entry of content) {
            let li = document.createElement("li");
            li.textContent = entry;
            ul.appendChild(li);
        }
        outputWindow.appendChild(ul);
    }
    QuestionariesProject.drawContent = drawContent;
    function listAllQuestionaries() {
        QuestionariesProject.currentState = QuestionariesProject.State.QUESTIONARIES_LIST;
        drawContent("Momentane Umfragen:", ["Peter", "Gustav"]);
    }
    QuestionariesProject.main_menu = [listAllQuestionaries,
        () => { console.log("umfrage statistik"); },
        () => { console.log("anmelden"); },
        () => { console.log("registrieren"); }];
    QuestionariesProject.questionaries_list = [() => { console.log("yippie!1"); },
        () => { console.log("yoppie!2"); },
        () => { console.log("yappie!3"); },
        () => { console.log("yeppie!4"); }];
})(QuestionariesProject || (QuestionariesProject = {}));
//# sourceMappingURL=menus.js.map