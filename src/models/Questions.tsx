interface VotingOption {
    votes: string[];
    text: string;
}

export interface Questions {
    id: string;
    author: string;
    timestamp: string;
    optionOne: VotingOption;
    optionTwo: VotingOption;
}