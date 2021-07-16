namespace QuestionariesProject {


    let currentState: String = "mainmenu";

    document.getElementById("inputField").onkeydown = evalInput;

    function evalInput(event: KeyboardEvent): void {

        if (event.key != "Enter")
            return;
        let input: number = parseInt((document.getElementById("inputField") as HTMLInputElement).value);

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
}