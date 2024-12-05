/* The `interface CreatedBy` is defining a structure for an object that represents the creator of a
post. It specifies that the object must have two properties: `username` of type string and `id` of
type string. This structure can be used as the type for the `createdBy` property in the `Post`
interface, ensuring that any object assigned to `createdBy` must have these two properties. */
interface CreatedBy {
    username: string
    id: string
}

/* The `export interface Post` is defining an interface named `Post` in TypeScript. This interface
specifies the structure of a post object with the following properties: */
export interface Post {
    id: string
    title: string
    content: string
    image: string | null
    anonPost: boolean
    createdBy: CreatedBy | null
    created_at?: string
    updated_at?: string
    deleted_at?: string
    message?: string | undefined
}

export interface InputPost {
    title: string,
    content: string,
    anonPost: boolean,
    image?: any
}


// export interface PostForm {
//     id: string
//     title: string
//     content: string
//     anonPost: boolean
//     createdBy?: CreatedBy
//     created_at?: string
//     updated_at?: string
//     deleted_at?: string
// }
  