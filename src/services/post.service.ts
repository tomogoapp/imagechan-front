import { InputPost, Post } from "@/types"
import CreatePost from "../graphql/mutations/post/create.graphql"

// import { provideApolloClient } from "@vue/apollo-composable"
import { apolloClient } from "@/apolloClient"

export class PostService {
  // async createPost(post: InputPost): Promise<Post> {
  //   const { title, content, anonPost, image, channel } = post;
  //   console.log("post!!!!",post)
  //   try {
  //     const formData = new FormData();

  //     formData.append(
  //       "operations",
  //       JSON.stringify({
  //           query: CreatePost.loc?.source.body, 
  //           variables: { 
  //               createPostInput: {
  //                   title,content,anonPost,channel
  //               },
  //               image: image instanceof File ? image : null,
  //           },
  //       })
  //     );

  //     formData.append("map", JSON.stringify({ "0": ["variables.image"] }));

  //     if (image instanceof File) {
  //       formData.append("0", image);
  //     }

  //     // Hacer la petición con fetch
  //     const response = await fetch("http://localhost:3000/graphql", {
  //       method: "POST",
  //       body: formData,
  //       credentials:'include'
  //     });

  //     const result = await response.json();

  //     if (response.ok && result.data && result.data.createPost) {
  //       return result.data.createPost; // Devuelve el post creado
  //     }

  //     throw new Error(result.errors?.[0]?.message || "Error desconocido al crear el post");
  //   } catch (error) {
  //     console.error("Error creating post:", error);
  //     throw error; // Lanza el error para manejarlo en el contexto que corresponda
  //   }
  // }


  async createPost(post: InputPost): Promise<Post> {
    const { title, content, anonPost, image, channel } = post;
    console.log("post!!!!", post);
    
    try {
      const result = await apolloClient.mutate({
        mutation: CreatePost,
        variables: {
          createPostInput: {
            title,
            content,
            anonPost,
            channel,
          },
          image,
        },
        context: {
          headers: {
            "Apollo-Require-Preflight": "true",
          },
        },
      });
  
      if (result.data && result.data.createPost) {
        return result.data.createPost;
      }
  
      throw new Error(result.errors?.[0]?.message || "Error desconocido al crear el post");
    } catch (error) {
      console.error("Error creating post:", error);
      throw error;
    }
  }

  async deletePost(post: any): Promise<any> {
    // Implementación para eliminar un post
  }
}
