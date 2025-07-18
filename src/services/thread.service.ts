import apolloClient from '../apolloClient';
import GetThreads from "../graphql/queries/threads/get.graphql";
import { Thread } from '@/types';

interface GetThreadsResponse {
  threads: Thread[]
}

export class ThreadService {
  async findAllThreads(): Promise<Thread[]> {
    try {
      const { data } = await apolloClient.query<GetThreadsResponse>({
        query: GetThreads
      })

      console.log("DATA", data)
      return data.threads ?? []; // Asegura que siempre retorna un array
    } catch (error) {
      console.error("Error fetching threads:", error)
      return [] // Devuelve un array vacío si hay un error
    }
  }
}
