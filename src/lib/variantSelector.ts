import { bootstrapVariantMap } from './bootstrapVariants'
import { tailwindVariantMap } from './tailwindVariants'

const variantSource = import.meta.env.VITE_VARIANT_MAPPING

export const getActiveVariantMap = () => {
  switch (variantSource) {
    case 'bootstrap':
      return bootstrapVariantMap
    case 'tailwind':
      return tailwindVariantMap
    case 'vanilla':
    default:
      return null
  }
}
