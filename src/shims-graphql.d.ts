// shims-graphql.d.ts
declare module '*.graphql' {
  import { DocumentNode } from 'graphql'
  const value: DocumentNode
  export default value
}
  