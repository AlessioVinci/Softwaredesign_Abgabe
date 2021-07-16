namespace QuestionariesProject {
    export class Questionaries {
        id: number;
        title: string;
        questions: Questions[];
        startDate: Date;
        endDate: Date;
        creatorID: number;
    }
}