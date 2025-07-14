export default {
  primary: '#3b82f6',
  primaryHover: '#2563eb',
  secondary: '#e5e7eb',
  secondaryHover: '#d1d5db',
  info: '#0dcaf0',
  infoHover: '#0ba5d3',
  success: '#10b981',
  successHover: '#059669',
  warning: '#f59e0b',
  warningHover: '#d97706',
  danger: '#ef4444',
  dangerHover: '#dc2626',
  text: '#111827',
  background: '#f9fafb',
  border: '#e5e7eb',
  shadow: 'rgba(0, 0, 0, 0.1)',
  fontFamily: {
    sans: 'Inter, sans-serif',
    serif: 'Merriweather, serif',
    mono: 'Fira Code, monospace',
  },
}

export const defaultTailwindStyles = {
  button: `
    rounded-md px-4 py-2 text-sm font-medium focus-visible:ring-gray-300
    focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 
    cursor-pointer shadow-sm active:scale-95 transition duration-100
  `,
  alert: `
    rounded-md px-4 py-3 text-sm font-medium border shadow-sm
    transition-opacity duration-200
  `,
  badge: `
    inline-block px-2.5 py-0.5 text-xs font-medium rounded-full 
    border border-transparent shadow-sm transition-colors duration-200
  `,
}
