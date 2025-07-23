import { CURRENT_VARIANT_MAPPING } from './consts'
import variantMapBootstrap from './variantMapBootstrap'
import variantMapTailwind from './variantMapTailwind'
import variantMapVanilla from './variantMapVanilla'

export const getActiveVariantMap = () => {
  switch (CURRENT_VARIANT_MAPPING) {
    case 'bootstrap':
      return variantMapBootstrap
    case 'tailwind':
      return variantMapTailwind
    case 'vanilla':
    default:
      return variantMapVanilla
  }
}
