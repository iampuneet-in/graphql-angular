export interface RegisterData {
    email: string;
    firstName: string;
    lastName: string;
    contactNo: string;
    address: string;
    role: string;
    status: string;
}

interface User {
    id: number
    email: string;
    firstName: string;
    lastName: string;
    contactNo: string;
    address: string;
    role: string;
    status: string;
}

export interface UserInput {
    id: number
    email: string;
    firstName: string;
    lastName: string;
    contactNo: string;
    address: string;
    role: string;
    status: string;
}

export interface RegisterResult {
    data: {
        createUsers: User
    }
}