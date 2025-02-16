// Utilities
import { defineStore } from 'pinia'
import { UserService } from '@/services/user.service'
import { Login,Sign,ObjectSign } from '@/types'

const { login,signin } = new UserService()

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null as any,
    //token: null as string | null
  }),
  actions:{
    async post_login(data:Login):Promise<any> {
       const {success,message,user} = await login(data)
        try {
         
          //this.token = token
          this.user = user

          return {
            success:success,
            message:message,
            user:user
          }
        }catch(error) {
          console.log(error)
          return {
            message: `Error: ${error}`
          }
        }
        
        //return data
    },

    async post_sign(data:Sign):Promise<ObjectSign>{
      const {message} = await signin(data)
      console.log(message)
      try{
        return{
          message:message
        }
      }catch(error){
        console.log(error)
        return {
          message:`Error: ${error}`
        }
      }
    }
  }
})
