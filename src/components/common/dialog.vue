<script setup lang="ts">
  import { ref, watch } from 'vue';
  import type { DialogEntity } from '@/types/components';

  const props = defineProps<DialogEntity>();
  const emit = defineEmits(['update:modelValue']);

  const activeDialog = ref(props.modelValue);

  // Observa cambios en la propiedad modelValue para actualizar activeDialog
  watch(() => props.modelValue, (newValue) => {
    activeDialog.value = newValue;
  });

  // Observa cambios en activeDialog para emitir el evento update:modelValue
  watch(activeDialog, (newValue) => {
    emit('update:modelValue', newValue);
  });

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
        {{  activeDialog  }}
        <v-btn v-bind="activatorProps">
          {{ button.caption }}
        </v-btn>
      </template>
      <slot></slot>
    </v-dialog>
  </div>
</template>

<style scoped></style>
