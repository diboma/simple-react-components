import { cn } from '@/lib/utils'
import { getActiveVariantMap } from '@/lib/variantSelector'

type Variant =
  | 'primary'
  | 'primaryOutline'
  | 'secondary'
  | 'secondaryOutline'
  | 'info'
  | 'infoOutline'
  | 'success'
  | 'successOutline'
  | 'warning'
  | 'warningOutline'
  | 'danger'
  | 'dangerOutline'
  | 'ghost'
  | null
  | undefined

type Size = 'sm' | 'md' | 'lg' | null | undefined

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  type?: 'button' | 'submit' | 'reset'
  variant?: Variant
  size?: Size
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  className?: string
  children?: React.ReactNode
}

const Button = ({
  type = 'button',
  variant = null,
  size = null,
  className = '',
  onClick,
  children,
  ...props
}: Props) => {
  const variantClass = getActiveVariantMap()

  const variantStyle = variant ? (variantClass?.Button?.[variant] ?? '') : ''
  const sizeStyle = size ? (variantClass?.ButtonSize?.[size] ?? '') : ''

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e)
    }
  }

  return (
    <button
      type={type}
      onClick={handleClick}
      className={cn(variantStyle, sizeStyle, className)}
      {...props}
    >
      {children ?? 'Click me'}
    </button>
  )
}

export default Button
