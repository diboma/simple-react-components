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

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  className?: string
  children?: React.ReactNode
}

const Badge = ({ variant = null, className = '', children }: Props) => {
  const variantClass = getActiveVariantMap()
  const variantStyle = variant ? (variantClass?.Badge?.[variant] ?? '') : ''

  return (
    <span className={cn(variantStyle, className)}>{children ?? 'Badge'}</span>
  )
}

export default Badge
