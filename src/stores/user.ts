// Utilities
import { defineStore } from 'pinia'
import { UserService } from '@/services/user.service'
import { Login, ObjectLogin } from '@/types'

const { login } = new UserService()

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null as any,
    token: null as string | null
  }),
  actions:{
    async post_login(data:Login):Promise<any> {
       const {token,message,user} = await login(data)
        try {
         
          this.token = token
          this.user = user
          return {
            token:token,
            message:message,
            user:user
          }
        }catch(error) {
          console.log(error)
          return {
            message: `Error: ${error}`
          }
        }
        
        return data
    }
  }
})
