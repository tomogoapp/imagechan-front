import { defineStore } from 'pinia';
import { ThreadService } from '@/services/thread.service';
import { Thread } from '@/types';

export const useThreadStore = defineStore('thread', {
  state: () => ({
    threads: [] as Thread[], // ✅ Ensure the state is properly initialized
    loading: false,
    error: null as string | null
  }),

  actions: {
    async findAllThreads() {
      this.loading = true;
      this.error = null;
      
      try {
        const threads = await new ThreadService().findAllThreads();
        this.threads = threads; // ✅ Store the data in the state
      } catch (error) {
        console.error("Error fetching threads:", error);
        this.error = "Failed to fetch threads.";
      } finally {
        this.loading = false;
      }
    },
  },
});
