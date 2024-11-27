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

export interface TextAreaField {
    name: string
    label: string
    variant_input?: string
    placeholder?: string
    error_message?: string
    prepend_icon?: string
}