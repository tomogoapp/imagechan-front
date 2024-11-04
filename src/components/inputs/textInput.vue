
<script lang='ts' setup>
    import { textInput } from '@/types'
    import { defineComponent } from 'vue'
    import { VTextField } from 'vuetify/components'

    defineComponent({
        name: 'textInput'
    })

    const props = defineProps<textInput>()

    const emit = defineEmits(['update:modelValue'])

    function updateValue(value:any) {
     emit('update:modelValue', value)
    }


</script>

<template>
  <div>
    <v-text-field
        v-on:input = 'updateValue($event.target.value)'
        :label = 'label'
        :type = 'type'
        :name = 'name'
        :error-messages='error_message'
        variant = 'outlined'
        required
    />
  </div>
</template>

<style lang="scss">
  .v-text-field .v-input__details {
      padding-inline: 0px !important;
  }
</style>