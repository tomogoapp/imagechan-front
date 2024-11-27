<script setup lang="ts">
  import { toTypedSchema } from '@vee-validate/zod'
  import * as zod from 'zod'
  //import { usePostStore } from '@/store'
  import type { Post } from '@/types'
  import { useField, useForm } from 'vee-validate';

  const emit = defineEmits(['showSnackbar','hideDialog'])

  const form  = reactive({
    title:{
      name:'title',
      label:'Title',
      type: 'text'
    },
    content:{
      name:'content',
      label:'Comment',
      placeholder:'Write here...'
    }
  })

  const validationSchema = toTypedSchema(
    zod
    .object({
      title: zod.string({
        required_error:'title - Campo no puede estar vacio'
      }),
      content: zod.string({
        required_error:'content - Campo no puede estar vacio'
      })
    })

  )

  const { handleSubmit,errors } = useForm<Post>({
    validationSchema
  })  

  const { value: title } = useField('title')
  const { value: content } = useField('content') 

  //const post = usePostStore()

  const onSubmit = handleSubmit(async values => {

    // try {

    //   const { title, content } = values
    //   const result = await post.createPost({title,content})

    //   if (result) {
    //     emit('showSnackbar', {
    //       message: result.message, 
    //       color: result.success ?'success' : 'error'
    //     })

    //     emit('hideDialog')
    //   } 

    // } catch(error) {
    //   console.log(error)
    // }
  });

</script>

<template>
  <div>
    <v-form @submit.prevent="onSubmit"> 
      <TextInput
        v-on="title"
        :name='form.title.name'
        :label='form.title.label'
        :type='form.title.type'
        :error_message='errors.title'
        @update:modelValue="title = $event"
      />

      <ImageInput
      />

      <TextAreaInput
        v-on='content'
        :name='form.content.name'
        :label='form.content.label'
        :placeholder='form.content.placeholder'
        :error_message='errors.content'
        @update:modelValue="content = $event"
      />



      <v-divider />
      <div class="d-flex flex-column">

        <SwitchInput 
      
        />

        <v-btn
          class="mt-4"
          color="primary"
          type="submit"
          block
        >
          CREATE
        </v-btn>
      </div>
    </v-form>
  </div>
</template>

<style scoped>

.v-text-field .v-input__details {
    padding-inline: 0px;
}
</style>
