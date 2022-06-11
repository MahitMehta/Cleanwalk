export interface IUser {
    _id: string,
    email: string; 
    roles: string[];
    pass?: string; 
    firstName?: string;
    lastName?: string; 
    avatar?:string;
    emailVerified?: boolean,
}