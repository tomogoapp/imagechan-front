export interface Posts {
    id: string
    title: string
    content: string
    image: string | null
  }
  
  export interface Reply {
    id: string
    content: string
    created_at: string
  }
  
  export interface Thread {
    id: string
    created_at: string
    updated_at: string | null
    post: Posts
    reply: Reply[]
  }
  