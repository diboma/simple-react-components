import { getActiveVariantMap } from '@/lib/variantSelector'

type Props = React.InputHTMLAttributes<
  HTMLInputElement | HTMLTextAreaElement
> & {
  type: React.HTMLInputTypeAttribute | 'textarea'
  label: string
  name: string
  helpText?: string | undefined
  value: string | number | readonly string[] | undefined
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
}

const Input = ({
  type,
  label,
  name,
  helpText = undefined,
  value,
  onChange,
  ...props
}: Props) => {
  const variantMap = getActiveVariantMap()
  const inputStyle = variantMap ? variantMap?.Input?.input : 'form-control'
  const labelStyle = variantMap ? variantMap?.Input?.label : 'form-label'
  const helpTextStyle = variantMap ? variantMap?.Input?.helpText : 'form-text'

  return (
    <div style={{ marginBottom: '1rem' }}>
      <label htmlFor="title" className={labelStyle}>
        {label} {props.required && <span className="text-red-500">*</span>}
      </label>

      {helpText && <p className={helpTextStyle}>{helpText}</p>}

      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={(e) => onChange(e)}
          className={inputStyle}
          {...props}
        ></textarea>
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={(e) => onChange(e)}
          className={inputStyle}
          {...props}
        />
      )}
    </div>
  )
}

export default Input
