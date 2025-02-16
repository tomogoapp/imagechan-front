<script setup lang="ts">
  import type { TextAreaField } from '@/types/input.entity';


  const props = defineProps<TextAreaField>()

  const emit = defineEmits(['update:modelValue'])

  function updateValue(value:any) {
    emit('update:modelValue', value)
  }


</script>

<template>
  <div>
    <div class="text-subtitle-1 text-medium-emphasis">{{ label }}</div>
    <v-textarea
     v-on:input="updateValue($event.target.value)"
      :name='name'
      :placeholder="placeholder"
      :error-messages='error_message'
      required
      variant="solo-filled"
      :rounded="false"
      no-resize
      flat
    />
  </div>
</template>

<style scoped></style>
