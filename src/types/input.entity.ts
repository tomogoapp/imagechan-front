/* This code snippet is defining an interface named `textInput` in TypeScript. The interface
`textInput` specifies the structure of an object that must have the following properties: */
export interface textInput {
    type:string
    label: string
    name: string
    icon?: string
    error_message?: string
    prependIcon?: string
    appendIcon?: string
}