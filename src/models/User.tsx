interface Answer {
    [key: string]: string;
}

export interface User {
    id: string;
    name: string;
    avatarURL: string;
    questions: string[];
    answers: Answer;
}