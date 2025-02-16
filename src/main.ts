/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { apolloClient } from './apolloClient'
import authDirective from './directives/v-auth'
import noEmoji from './directives/v-no-emoji'

const app = createApp(App)

// Proporcionamos el Apollo Client al contexto de la aplicación
app.provide(DefaultApolloClient, apolloClient)

app.directive('auth', authDirective)
app.directive("no-emoji", noEmoji)

registerPlugins(app)

app.mount('#app')
