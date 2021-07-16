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
}