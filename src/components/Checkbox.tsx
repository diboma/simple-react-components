import { getActiveVariantMap } from '@/lib/variantSelector'

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  id: string
  label?: string | null
  value?: string
  className?: string
  onChange?: (event: React.ChangeEventHandler<HTMLInputElement>) => void
}

const Checkbox = ({
  id = 'checkDefault',
  label = null,
  value = '',
  className = '',
  onChange,
  ...props
}: Props) => {
  const variantMap = getActiveVariantMap()
  const containerStyle = variantMap?.Checkbox?.container
  const inputStyle = variantMap?.Checkbox?.input
  const labelStyle = variantMap?.Checkbox?.label

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e)
    }
  }

  return (
    <div className={containerStyle}>
      <input
        className={inputStyle}
        type="checkbox"
        value={value}
        id={id}
        {...props}
        onChange={handleChange}
      />
      <label className={labelStyle} htmlFor={id}>
        {label}
      </label>
    </div>
  )
}

export default Checkbox
