import { apolloClient } from "@/apolloClient";
import { InputPost, Post } from "@/types";
import { CreatePost } from '../graphql/mutations/post.graphql'


export class PostService {
    async createPost(post:InputPost): Promise<Post>{
        const { title,content,anonPost,image } = post

        try {
            const {data} = await apolloClient.mutate<{createPost:Post}>({
                mutation: CreatePost,
                variables: { 
                    createPostInput: {
                        title,content,anonPost
                    },
                    image: image instanceof File ? image : null,
                }
            })
            if (data && data.createPost) {
                return data.createPost; // Retorna los datos obtenidos
            }

            throw new Error('No data returned from createPost mutation');
        }catch(error){
            console.error('Error creating post:', error);
            throw error; // Lanza el error para manejarlo en el contexto que corresponda
        }

    }
    async deletePost(post:any): Promise<any>{

    }
}