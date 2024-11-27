export interface LoginEntity {
    username: string,
    password: string,
    rememberMe?: boolean
}

export interface SignEntity {
    username: string,
    email: string,
    password: string,
    confirmPassword: string,
}
