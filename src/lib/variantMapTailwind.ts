import { defaultTailwindStyles as styles } from '../../tailwind.theme.ts'

export default {
  Button: {
    primary: `${styles.button} bg-primary text-white hover:bg-primary-hover`,
    primaryOutline: `${styles.button} bg-transparent text-primary border border-primary hover:bg-primary hover:text-white`,
    secondary: `${styles.button} bg-secondary text-black hover:bg-secondary-hover`,
    secondaryOutline: `${styles.button} bg-transparent text-gray-400 border border-secondary hover:bg-secondary hover:text-gray-500`,
    success: `${styles.button} bg-success text-white hover:bg-success-hover`,
    successOutline: `${styles.button} bg-transparent text-success border border-success hover:bg-success hover:text-white`,
    danger: `${styles.button} bg-danger text-white hover:bg-danger-hover`,
    dangerOutline: `${styles.button} bg-transparent text-danger border border-danger hover:bg-danger hover:text-white`,
    warning: `${styles.button} bg-warning text-orange-100 hover:bg-warning-hover`,
    warningOutline: `${styles.button} bg-transparent text-warning border border-warning hover:bg-warning hover:text-white`,
    info: `${styles.button} bg-info text-white hover:bg-info-hover`,
    infoOutline: `${styles.button} bg-transparent text-info border border-info hover:bg-info hover:text-white`,
    light: `${styles.button} bg-gray-100 text-gray-800 border border-gray-300 hover:bg-gray-200`,
    lightOutline: `${styles.button} bg-transparent text-gray-800 border border-gray-300 hover:bg-gray-100`,
    dark: `${styles.button} bg-gray-800 text-white hover:bg-gray-700`,
    darkOutline: `${styles.button} bg-transparent text-gray-800 border border-gray-800 hover:bg-gray-700 hover:text-white`,
  },
  ButtonSize: {
    sm: 'text-sm px-3 py-1',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-5 py-3',
  },
  Alert: {
    primary: `${styles.alert} bg-blue-100 text-blue-800 border-blue-300`,
    secondary: `${styles.alert} bg-gray-200 text-gray-800 border-gray-300`,
    success: `${styles.alert} bg-green-100 text-green-800 border-green-300`,
    danger: `${styles.alert} bg-red-100 text-red-800 border-red-300`,
    warning: `${styles.alert} bg-yellow-100 text-yellow-800 border-yellow-300`,
    info: `${styles.alert} bg-cyan-100 text-cyan-800 border-cyan-300`,
    light: `${styles.alert} bg-gray-100 text-gray-700 border-gray-200`,
    dark: `${styles.alert} bg-gray-800 text-white border-gray-700`,
  },
  Badge: {
    primary: `${styles.badge} bg-primary text-white`,
    secondary: `${styles.badge} bg-secondary text-black`,
    success: `${styles.badge} bg-success text-white`,
    danger: `${styles.badge} bg-danger text-white`,
    warning: `${styles.badge} bg-warning text-orange-100`,
    info: `${styles.badge} bg-info text-white`,
    light: `${styles.badge} bg-gray-100 text-gray-800`,
    dark: `${styles.badge} bg-gray-800 text-white`,
  },
  Checkbox: {
    container: 'flex items-center mb-4',
    input: `w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm 
            focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800
            focus:ring-2 dark:bg-gray-700 dark:border-gray-600`,
    label: 'ms-2 text-sm font-medium text-gray-900 dark:text-gray-300',
  },
  Hero: {
    container: `mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0`,
    left: `mr-auto place-self-center lg:col-span-7`,
    right: `hidden lg:col-span-5 lg:mt-0 lg:flex`,
    title: `xl:text-6x mb-4 max-w-2xl text-4xl leading-none font-extrabold tracking-tight md:text-5xl`,
    description: `mb-6 max-w-2xl font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl`,
    primaryLink: `bg-primary hover:bg-primary-hover focus:ring-primary-300 mr-3 inline-flex items-center 
                  justify-center rounded-lg px-5 py-3 text-center text-base font-medium text-white focus:ring-4`,
    primaryIcon: `-mr-1 ml-2 text-white`,
    secondaryLink: `border-secondary hover:bg-secondary-hover inline-flex items-center justify-center rounded-lg 
                    border px-5 py-3 text-center text-base font-medium text-gray-900 focus:ring-4 focus:ring-gray-100`,
  },
  Input: {
    input: `w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none`,
    label: 'mb-1 block font-medium text-gray-700',
    helpText: 'mb-2 text-sm text-gray-500',
    asterisk: 'text-red-500',
  },
  Select: {
    container: 'w-full mx-auto mb-4',
    label: `mb-2 block font-medium text-gray-700`,
    asterisk: 'text-red-500',
    helpText: `my2 text-sm text-gray-500`,
    select: `bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5`,
  },
}
