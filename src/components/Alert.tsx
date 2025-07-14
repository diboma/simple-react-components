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

const Alert = ({ variant = null, className = '', children }: Props) => {
  const variantClass = getActiveVariantMap()
  const variantStyle = variant ? (variantClass?.Alert?.[variant] ?? '') : ''

  return (
    <div className={cn(variantStyle, className)} role="alert">
      {children ?? 'Alert!'}
    </div>
  )
}

export default Alert
