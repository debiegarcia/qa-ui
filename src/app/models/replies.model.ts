import { Question } from "./questions.model";
import { User } from "./users.model";

export interface Reply {
    id: number;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    user: User;
    question: Question;
}