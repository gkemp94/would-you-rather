interface VotingOption {
    votes: string[];
    text: string;
}

export interface Question {
    id: string;
    author: string;
    timestamp: string;
    optionOne: VotingOption;
    optionTwo: VotingOption;
}