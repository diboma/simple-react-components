import { CURRENT_VARIANT_MAPPING } from '@/lib/consts'
import { cn } from '@/lib/utils'
import { getActiveVariantMap } from '@/lib/variantSelector'

type Variant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'light'
  | 'dark'
  | null
  | undefined

type Props = {
  variant?: Variant
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const Spinner = ({ variant, size = 'md', className = '' }: Props) => {
  const variantMap = getActiveVariantMap()
  const spinnerStyle = variantMap?.Spinner?.spinner
  const textStyle = variantMap?.Spinner?.text
  const colorStyle = variant ? (variantMap?.Spinner?.[variant] ?? '') : ''

  let width = '2rem'
  let height = '2rem'

  if (size === 'sm') {
    width = '1rem'
    height = '1rem'
  } else if (size === 'lg') {
    width = '3rem'
    height = '3rem'
  }

  let borderStyle = null

  if (CURRENT_VARIANT_MAPPING === 'tailwind') {
    if (size === 'sm') {
      borderStyle = variantMap?.Spinner?.borderSmall
    } else if (size === 'md') {
      borderStyle = variantMap?.Spinner?.borderMedium
    } else if (size === 'lg') {
      borderStyle = variantMap?.Spinner?.borderLarge
    }
  }

  return (
    <div
      className={cn(spinnerStyle, borderStyle, colorStyle, className).trim()}
      style={{ width: width, height: height }}
      role="status"
    >
      <span className={textStyle}>Loading...</span>
    </div>
  )
}

export default Spinner
