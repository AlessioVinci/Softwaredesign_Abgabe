namespace QuestionariesProject {

    export function drawContent(headline: string, content: Array<string>): void {
        let outputWindow: HTMLElement = document.getElementById("output");
        outputWindow.innerHTML = "";
        let span: HTMLElement = document.createElement("span");
        span.textContent = headline;
        outputWindow.appendChild(span);
        let ul: HTMLElement = document.createElement("ul");
        for (let entry of content) {
            let li = document.createElement("li");
            li.textContent = entry;
            ul.appendChild(li);
        }
        outputWindow.appendChild(ul);
    }

    function listAllQuestionaries(): void {
        QuestionariesProject.currentState = State.QUESTIONARIES_LIST;
        drawContent("Momentane Umfragen:", ["Peter", "Gustav"]);
    }

    export const main_menu = [listAllQuestionaries,
        () => { console.log("umfrage statistik"); },
        () => { console.log("anmelden"); },
        () => { console.log("registrieren"); }];

    export const questionaries_list = [() => { console.log("yippie!1"); },
    () => { console.log("yoppie!2"); },
    () => { console.log("yappie!3"); },
    () => { console.log("yeppie!4"); }];
}