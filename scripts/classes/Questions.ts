namespace QuestionariesProject {
    export class Questions {
        id: number;
        title: string;
        parentQuestionary: Questionaries;
        answers: Answers[];
    }
}