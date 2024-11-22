<script lang="ts" setup>

    import { toTypedSchema } from '@vee-validate/zod'
    import{ defineComponent } from 'vue'
    import type { RegisterEntity } from '@/types'
    import * as zod from 'zod'
    import { useField, useForm } from 'vee-validate'
    import TextInput from '../inputs/textInput.vue'

    defineComponent({
        name: 'formRegister'
    })

    const form = reactive({
        username:{
            type:'text',
            label:'Username',
            name:'username'
        },
        email:{
            type:'text',
            label:'E-mail',
            name:'username'
        },
        password:{
            type:'password',
            label:'Password',
            name:'password'  
        },
        confirmPassword:{
            type:'password',
            label:'Confirm password',
            name:'password'  
        }
    })

    const validationSchema = toTypedSchema(
        zod.object({
            username: zod.string({
                required_error:'Username - Requerido'
            }),
            email: zod.string({
                required_error:'Email - Requerido'
            })
            .email({
                message:'Email- Correo no valido'
            }),
            password: zod.string({
                required_error:'Password - Requerido'
            })
            .min(8,{
                message:'Password - minimo 8 caracteres'
            })
            ,
            confirmPassword: zod.string({
                required_error:'Confirm password - Requerido'
            })
            .min(8,{
                message:'Confiorm password - minimo 8 caracteres'
            }),
        })
    )

    const {handleSubmit} = useForm<RegisterEntity>({
        validationSchema
    })

    const { value:username, errorMessage: usernameError } = useField('username')
    const { value:email, errorMessage: emailError } = useField('email')
    const { value:password, errorMessage:errorPassword  } = useField('password')
    const { value:confirmPassword, errorMessage:errorConfirmPassword  } = useField('confirmPassword')

    const onSubmit = handleSubmit ( async(value) => {

    })


</script>

<template>
  <div>
    <v-alert v-if='true' :text='`rrr`' type="error" class="mb-4"></v-alert>
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
            v-on="email"
            :type='form.email.type'
            :label='form.email.label'
            :name='form.email.name'
            :error_message='emailError'
            @update:modelValue="email = $event"
        />
        <TextInput
            v-on="password"
            :type='form.password.type'
            :label='form.password.label'
            :name='form.password.name'
            :error_message='errorPassword'
            @update:modelValue="password = $event"
        />
        <TextInput
            v-on="confirmPassword"
            :type='form.confirmPassword.type'
            :label='form.confirmPassword.label'
            :name='form.confirmPassword.name'
            :error_message='errorConfirmPassword'
            @update:modelValue="confirmPassword = $event"
        />
        <VBtn
            type='submit'
            block
        >
            Sign In
        </VBtn>
    </v-form>
  </div>
</template>

<style>

</style>