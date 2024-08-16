
export interface SignIn{
    email: string,
    password: string
}

export interface SingUp{
    name: string,
    email: string,
    password: string,
    avatar: string,
    role: string
}

export interface UserDetails{
    email: string | null,
    firstName: string | null,
    lastName: string | null,
    uid: string | null,
    house : string | null,
    wand : string | null,
    avatar : string | null,
    dob: string | null,
}