
<script lang='ts' setup>
    import { textInput } from '@/types'
    import { defineComponent } from 'vue'
    import { VTextField } from 'vuetify/components'

    defineComponent({
        name: 'textInput'
    })

    const props = defineProps<textInput>()

    const typeIcon = ref('')
    const typeText = ref(props.type)

    const emit = defineEmits(['update:modelValue'])

    function updateValue(value:any) {
     emit('update:modelValue', value)
    }

    onMounted(() =>{
    if(props.type === 'password') {
      typeIcon.value = 'mdi-eye'
      typeText.value = 'password'
    }
  })

  function showPassword () {
    if(typeText.value === 'password') {
      typeIcon.value = 'mdi-eye-off'
      typeText.value = 'text'
    }else{
      typeIcon.value = 'mdi-eye'
      typeText.value = 'password'
    }
  }


</script>

<template>
  <div>
    <v-text-field
        v-on:input = 'updateValue($event.target.value)'
        :label = 'label'
        :type = 'typeText'
        :name = 'name'

        :append-inner-icon = typeIcon
        :on-click:append-inner="showPassword"

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