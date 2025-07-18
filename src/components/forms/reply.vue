<script lang="ts" setup>
  import { toTypedSchema } from '@vee-validate/zod'
  import * as zod from 'zod'
  import { usePostStore } from '@/stores/post'
  import type { Post } from '@/types'
  import { useField, useForm } from 'vee-validate'


  const emit = defineEmits(['showSnackbar','hideDialog'])

  const form  = reactive({
    content:{
      name:'content',
      label:'Comment',
      placeholder:'Write here...'
    },
    anonPost:{
      name:'anonPost'
    },
    image: {
      name:'image'
    }
  })

  const validationSchema = toTypedSchema(
    zod
    .object({
      content: zod.string({
        required_error:'content - Campo no puede estar vacio'
      }),
      image: zod.any().nullable(), // Campo opcional
    })

  )

  const { handleSubmit,errors } = useForm<Post>({
    validationSchema
  })  

  const { value: content } = useField('content')
  const { value: anonPost } = useField<boolean>('anonPost')
  const image = ref<File | null>(null);
  
  anonPost.value = false; // Valor inicial
  
  const post = usePostStore()

  const onSubmit = handleSubmit(async values => {
    console.log('form ---> ',image)
    try {

      const { content } = values
      const result = await post.create_post({
        content, 
        anonPost: anonPost.value,
        channel:'ksm',
        image: image.value instanceof File ? image.value : null,
      })

      if (result) {
        emit('showSnackbar', {
          //message: result.message, 
          //color: result.success ?'success' : 'error'
          message: 'success', 
          color: 'success'
        })

        emit('hideDialog')
      } 

    } catch(error) {
      console.log(error)
    }

  });

</script>

<template>
  <div>
    <v-form @submit.prevent="onSubmit"> 

      <ImageInput
        v-model="image"
        :name='form.image.name'
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
          :name="form.anonPost.name"
          v-model="anonPost"
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

<style>
  .v-text-field .v-input__details {
      padding-inline: 0px;
  }
</style>