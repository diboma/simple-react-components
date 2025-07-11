import { defaultBtnStyle } from '../../tailwind.theme.ts'

export const tailwindVariantMap = {
  Button: {
    primary: `${defaultBtnStyle} bg-primary text-white hover:bg-primary-hover`,
    primaryOutline: `${defaultBtnStyle} bg-transparent text-primary border border-primary hover:bg-primary hover:text-white`,
    secondary: `${defaultBtnStyle} bg-secondary text-black hover:bg-secondary-hover`,
    secondaryOutline: `${defaultBtnStyle} bg-transparent text-gray-400 border border-secondary hover:bg-secondary hover:text-gray-500`,
    info: `${defaultBtnStyle} bg-info text-white hover:bg-info-hover`,
    infoOutline: `${defaultBtnStyle} bg-transparent text-info border border-info hover:bg-info hover:text-white`,
    success: `${defaultBtnStyle} bg-success text-white hover:bg-success-hover`,
    successOutline: `${defaultBtnStyle} bg-transparent text-success border border-success hover:bg-success hover:text-white`,
    warning: `${defaultBtnStyle} bg-warning text-orange-100 hover:bg-warning-hover`,
    warningOutline: `${defaultBtnStyle} bg-transparent text-warning border border-warning hover:bg-warning hover:text-white`,
    danger: `${defaultBtnStyle} bg-danger text-white hover:bg-danger-hover`,
    dangerOutline: `${defaultBtnStyle} bg-transparent text-danger border border-danger hover:bg-danger hover:text-white`,
    ghost: `${defaultBtnStyle} bg-transparent text-black hover:bg-gray-100`,
  },
  ButtonSize: {
    sm: 'text-sm px-3 py-1',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-5 py-3',
  },
  Alert: {
    success: '...',
    error: '...',
  },
}
