import { getActiveVariantMap } from '@/lib/variantSelector'

type Props = React.InputHTMLAttributes<
  HTMLInputElement | HTMLTextAreaElement
> & {
  type: React.HTMLInputTypeAttribute | 'textarea'
  name: string
  label?: string | undefined
  helpText?: string | undefined
  value?: string | number | readonly string[] | undefined
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
}

const Input = ({
  type,
  name,
  label = undefined,
  helpText = undefined,
  value = '',
  onChange,
  ...props
}: Props) => {
  const variantMap = getActiveVariantMap()
  const inputStyle = variantMap?.Input?.input
  const labelStyle = variantMap?.Input?.label
  const helpTextStyle = variantMap?.Input?.helpText
  const asteriskStyle = variantMap?.Select?.asterisk

  return (
    <div style={{ marginBottom: '1rem' }}>
      {label && (
        <label htmlFor="title" className={labelStyle}>
          {label}
          {props.required && <span className={asteriskStyle}> *</span>}
        </label>
      )}

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
