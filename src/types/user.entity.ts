export interface Login {
    username: string,
    password: string,
    rememberMe?: boolean
}

export interface ObjectLogin {
    success: boolean
    message: string
    user: User
}

export interface ObjectSign {
    message?: string
}

export interface User {
    id: string
    username: string
    email: string
}

export interface Sign {
    username: string,
    email: string,
    password: string,
    confirmPassword: string, 
}

export interface User {
    username: string
    email: string,
    password: string,
    confirmPassword: string
}