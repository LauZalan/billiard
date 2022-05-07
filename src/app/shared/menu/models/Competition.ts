import { User } from "./User";

export interface Competition {
    id: number;
    name: string;
    date: Date;
    competitors: Array<User>;
}