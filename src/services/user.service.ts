// src/services/UserService.ts

import { apolloClient } from '../apolloClient'; // Asegúrate de ajustar la ruta
import { getUser } from '../graphql/queries/user.graphql'
import { postRegister } from '../graphql/mutations/user.graphql'

import { Login, ObjectLogin, ObjectRegister, Register } from '@/types'

export class UserService {
  async login(user: Login): Promise<ObjectLogin> {
    const { username, password } = user;

    try {
      const { data } = await apolloClient.query<{ login_user: ObjectLogin }>({
        query: getUser,
        variables: { username, password },
      });

      if (data && data.login_user) {
        return data.login_user;
      } else {
        throw new Error('No se recibió una respuesta válida del servidor.')
      }
    } catch (error) {
        throw error
    }
  }

  async registration(user:Register):Promise<ObjectRegister>{
    const { username,password,confirmPaswword,email } = user

    try{
      const { data } = await apolloClient.mutate<{ create_user: ObjectRegister }>({
        mutation: postRegister,
        variables: { username,password,confirmPaswword,email },
      })

      if(data && data.create_user){
        return data.create_user;
      }else{
        throw new Error('No se recibió una respuesta válida del servidor.')
      }

    }catch(error){
      throw error
    }

    return user
  }

}