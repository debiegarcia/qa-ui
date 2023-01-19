import { User } from "./users.model";

export interface Question {
    id: number;
    title: string;
    description: string;
    likes: number;
    user: User;
    createdAt: Date;
}