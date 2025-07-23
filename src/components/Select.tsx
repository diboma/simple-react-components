import { getActiveVariantMap } from '@/lib/variantSelector'

type Props = React.InputHTMLAttributes<HTMLSelectElement> & {
  name: string
  label?: string | undefined
  helpText?: string | undefined
  value?: string | number | readonly string[] | undefined
  options: { value: string; label: string }[]
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const Select = ({
  name,
  label = undefined,
  helpText = undefined,
  value = '',
  options = [],
  onChange,
  ...props
}: Props) => {
  const variantMap = getActiveVariantMap()
  const containerStyle = variantMap?.Select?.container
  const selectStyle = variantMap?.Select?.select
  const labelStyle = variantMap?.Select?.label
  const helpTextStyle = variantMap?.Select?.helpText
  const asteriskStyle = variantMap?.Select?.asterisk

  return (
    <div className={containerStyle}>
      {label && (
        <label htmlFor="title" className={labelStyle}>
          {label}
          {props.required && <span className={asteriskStyle}> *</span>}
        </label>
      )}

      {helpText && <p className={helpTextStyle}>{helpText}</p>}

      <select
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e)}
        className={selectStyle}
        {...props}
      >
        <option value="" disabled={props.required}></option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select
