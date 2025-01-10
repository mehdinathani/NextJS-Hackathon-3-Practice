import { type SchemaTypeDefinition } from 'sanity'
import { productType } from '../products'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productType],
}
