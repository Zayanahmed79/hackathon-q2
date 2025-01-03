import { type SchemaTypeDefinition } from 'sanity'
import office from './office'
import home from './home'
import outdoor from './outdoor'
import blog from './blog'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [office, home , outdoor , blog],
}
