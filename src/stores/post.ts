import { InputPost, Post } from '@/types'
import { defineStore } from 'pinia'
import { PostService } from  '@/services/post.service'

const { createPost } = new PostService()

export const usePostStore = defineStore('post', {
  state: () => ({
    //
  }),
  actions:{
    async create_post(data:InputPost):Promise<Post> {
        console.log("DATA!!!!",data)
        const { id,title,content,anonPost,image,createdBy,numberPost } = await createPost(data)
        try{
            return {
                id,
                title,
                content,
                anonPost,
                numberPost,
                image,
                createdBy: createdBy
            }
        }catch(error){
            throw error 
        }
    }
  }
})