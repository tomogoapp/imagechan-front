// src/services/UserService.ts

import { apolloClient } from '../apolloClient'; // Asegúrate de ajustar la ruta
import { getUser } from '../graphql/queries/user.graphql'
import { postRegister } from '../graphql/mutations/user.graphql'

import { Login, ObjectLogin, ObjectSign, Sign } from '@/types'

export class UserService {
  async login(user: Login): Promise<ObjectLogin> {
    const { username, password } = user;

    try {
      const { data } = await apolloClient.query<{ login_user: ObjectLogin }>({
        query: getUser,
        variables: { username, password },
      });

      if (data && data.login_user) {
        return data.login_user
      } else {
        throw new Error('No se recibió una respuesta válida del servidor.')
      }
    } catch (error) {
        throw error
    }
  }

  async signin(user:Sign):Promise<ObjectSign>{
    const { username,password,confirmPassword,email } = user

    try{
      const { data } = await apolloClient.mutate<{ create_user: ObjectRegister }>({
        mutation: postRegister,
        variables: { username,password,confirmPassword,email },
      })

      if(data && data.create_user){
        return data.create_user;
      }else{
        throw new Error('No se recibió una respuesta válida del servidor.')
      }

    }catch(error){
      throw error
    }

  }

}