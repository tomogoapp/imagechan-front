export interface Login {
    username: string,
    password: string,
    rememberMe?: boolean
}

export interface ObjectLogin {
    token: string
    message: string
    user: User
}

export interface ObjectRegister {
    username: string,
    email: string,
    password: string,
    confirmPaswword: string,
}

export interface User {
    id: string
    username: string
    email: string
}

export interface Register {
    username: string,
    email: string,
    password: string,
    confirmPaswword: string, 
}

export interface User {
    username: string
    email: string,
    password: string,
    confirmPassword: string
}