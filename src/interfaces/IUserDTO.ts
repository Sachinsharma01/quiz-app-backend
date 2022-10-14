interface IUserDTO {
    username: string;
    password: string;
    email: string;
}

interface IUserValidation {
    _id: any,
    username: string,
    email: string,
    password?: string,
    quizes?: string,
    __v: any
}

export {
    IUserValidation,
    IUserDTO
};