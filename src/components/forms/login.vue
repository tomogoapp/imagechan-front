
<script lang='ts' setup>

  import TextInput from '../inputs/textInput.vue'
  import { defineComponent } from 'vue'
  import { VForm } from 'vuetify/components'
  import { useUserStore } from '@/stores/user'
  import { useField, useForm} from 'vee-validate'
  import { toTypedSchema } from '@vee-validate/zod'
  import * as zod from 'zod'
  import { LoginEntity } from '@/types/form.entity'
  import { useRouter } from 'vue-router'
  const router = useRouter()

  defineComponent({
      name: 'formLogin'
  })

  const userStore = useUserStore()

  const form = reactive({
    username:{
      type:'text',
      label:'Username',
      name:'username'
    },
    password:{
      type:'password',
      label:'Password',
      name:'password'  
    }
  })

  const alertMessage = reactive({
    show:false,
    field:'',
    message:'',

  })

  const validationSchema = toTypedSchema(
    zod.object({
      username: zod.string({
        required_error:'USERNAME - Campo no puede estar vacio'
      }),
      password: zod.string({
        required_error:'PASSWORD - Campo no puede estar vacio'
      }),
    })
  )

  const { handleSubmit } = useForm<LoginEntity>({
    validationSchema
  })

  const { value: username, errorMessage: usernameError } = useField('username')
  const { value: password, errorMessage: passwordError } = useField('password')

  const onSubmit = handleSubmit (async (values) => {

    try {

      const { username,password } = values
      const result = await userStore.post_login({username:username,password:password})

      if (result.token) {
        alert(result.message)
        router.push('/')
      }

    }catch(error:any){
      alertMessage.show = true
      alertMessage.message = `${error.message}`
      alertMessage.field = `${error.field}`
      console.log(error)
      //alert(error)
    }

  })


  // function onSubmit() {
  //   userStore.post_login({username:username,password:password})
  // }

</script>

<template>
  <div>
    <v-alert v-if='alertMessage.show' :text='`${alertMessage.message},${alertMessage.field}`' type="error" class="mb-4"></v-alert>
    <v-form
      @submit.prevent = 'onSubmit'
    >
      <TextInput
        v-on="username"
        :type='form.username.type'
        :label='form.username.label'
        :name='form.username.name'
        :error_message='usernameError'
        @update:modelValue="username = $event"
      />
      <TextInput
        v-on="password"
        :type='form.password.type'
        :label='form.password.label'
        :name='form.password.name'
        :error_message='passwordError'
        @update:modelValue="password = $event"
      />
      <VBtn
        type='submit'
        block
      >
        Log In
      </VBtn>
    </v-form>

    
  </div>
</template>
<style>

</style>