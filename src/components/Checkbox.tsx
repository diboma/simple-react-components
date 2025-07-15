import { getActiveVariantMap } from '@/lib/variantSelector'

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  id: string
  label?: string | null
  className?: string
  value?: string
  onChange?: (event: React.ChangeEventHandler<HTMLInputElement>) => void
}

const Checkbox = ({
  id = 'checkDefault',
  label = null,
  className = '',
  value = '',
  onChange,
  ...props
}: Props) => {
  const variantMap = getActiveVariantMap()

  const containerStyle = variantMap
    ? variantMap?.Checkbox?.container
    : 'form-check'

  const inputStyle = variantMap
    ? variantMap?.Checkbox?.input
    : 'form-check-input'

  const labelStyle = variantMap
    ? variantMap?.Checkbox?.label
    : 'form-check-label'

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
