export interface LoginEntity {
    username: string,
    password: string,
    rememberMe?: boolean
}

export interface RegisterEntity {
    username: string,
    email: string,
    password: string,
    confirmPassword: string,
}
