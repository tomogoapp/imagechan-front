<script setup lang="ts">
  import { ref, watch } from 'vue'
  import type { DialogEntity } from '@/types/components'

  const props = defineProps<DialogEntity>()
  const emit = defineEmits(['update:modelValue'])

  const activeDialog = ref(props.modelValue)

  watch(() => props.modelValue, (newValue) => {
    activeDialog.value = newValue
  });

  watch(activeDialog, (newValue) => {
    emit('update:modelValue', newValue)
  })

</script>

<template>
  <div>
    <v-dialog
      v-model="activeDialog"
      max-width="400"
      transition="dialog-bottom-transition"
      scrollable
    >
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn v-bind="activatorProps" color="primary" block tonal rounded="0" >
          {{ button.caption }}
        </v-btn>
      </template>
      <slot></slot>
    </v-dialog>
  </div>
</template>

<style scoped></style>
