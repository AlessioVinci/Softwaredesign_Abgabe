namespace Questionaries {

    //let currentState: String = "mainmenu";

    document.getElementById("inputField").onkeydown = evalInput;

    function evalInput(event: KeyboardEvent): void {

        if (event.key != "Enter")
            return;

        let input: number = parseInt((document.getElementById("inputField") as HTMLInputElement).value);
        console.log("and his name is " + input);
        /* switch (currentState) {
            case "mainmenu": {
                mainmenu[input];
            }
        } */
    }
}