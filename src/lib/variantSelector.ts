import { CURRENT_VARIANT_MAPPING } from './consts'
import { bootstrapVariantMap } from './bootstrapVariants'
import { tailwindVariantMap } from './tailwindVariants'

export const getActiveVariantMap = () => {
  switch (CURRENT_VARIANT_MAPPING) {
    case 'bootstrap':
      return bootstrapVariantMap
    case 'tailwind':
      return tailwindVariantMap
    case 'vanilla':
    default:
      return null
  }
}
