import { DirectiveBinding } from "vue"

interface AuthDirectiveBinding extends DirectiveBinding {
    values?: {
        requiredRole?: string
    }
}

/* This code defines a Vue directive named `authDirective`. The `mounted` hook of the directive is
executed when the bound element is inserted into the DOM. Here's a breakdown of what the code is
doing: */
const authDirective = {
/**
 * The function checks for the presence of an auth token and required role, then hides or disables an
 * element based on the conditions.
 * @param {HTMLElement} el - HTMLElement - The element to which the directive is attached.
 * @param {AuthDirectiveBinding} binding - The `binding` parameter in the `mounted` method is of type
 * `AuthDirectiveBinding`. It contains information about the directive binding, such as the value,
 * argument, modifiers, and expression. In your code snippet, you are accessing properties of the
 * `binding` object like `binding.value`, `
 */
    mounted(el: HTMLElement, binding: AuthDirectiveBinding){
        const cookies = document.cookie.split('; ').reduce<Record<string,string>>((acc,cookie) =>{
            const [key, value] = cookie.split('=')
            acc[key] = value
            return acc
        }, {})

        const authToken = cookies.auth_token

        if(!authToken || (binding.value && binding.value.requiredRole !== 'admin')) {
            if(binding.arg === 'hide'){
                el.style.display = 'none'
            }
        }else{
            el.setAttribute('disable', 'true')
        }
    }
}

export default authDirective