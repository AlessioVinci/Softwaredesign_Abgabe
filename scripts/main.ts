//import {State} from "./states";
namespace QuestionariesProject {

    export let currentState: State = State.MAIN_MENU_REGULAR;

    document.getElementById("inputField").onkeydown = evalInput;

    function evalInput(event: KeyboardEvent): void {

        if (event.key != "Enter")
            return;
        let inputField: HTMLInputElement = document.getElementById("inputField") as HTMLInputElement;
        let input: number = parseInt(inputField.value);
        inputField.value = "";
        switch (currentState) {
            case State.MAIN_MENU_REGULAR: {
                main_menu[input - 1]();
                break;
            }
            case State.QUESTIONARIES_LIST: {
                questionaries_list[input - 1]();
                break;
            }
            default: {
                break;
            }
        }
    }

    function loadJSON(url: string, callback: (response: object) => void): void {
        const request: XMLHttpRequest = new XMLHttpRequest();
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




    function checkLogin(username: string, password: string, callback: (found: boolean) => void): void {
        loadJSON("./jsons/data.json", (response: any) => {
            let found: boolean = false;
            for (let dataset of response.logins) {
                if (dataset.username === username && dataset.password === password)
                    found = true;
            }
            callback(found);
        });
    }
}