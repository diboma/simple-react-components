import theme from './tailwind.theme.ts'

export default {
  theme: {
    extend: {
      colors: {
        primary: theme.primary || '#3b82f6',
        'primary-hover': theme.primaryHover || '#2563eb',
        secondary: theme.secondary || '#e5e7eb',
        'secondary-hover': theme.secondaryHover || '#d1d5db',
        info: theme.info || '#0dcaf0',
        'info-hover': theme.infoHover || '#0ba5d3',
        success: theme.success || '#10b981',
        'success-hover': theme.successHover || '#059669',
        warning: theme.warning || '#f59e0b',
        'warning-hover': theme.warningHover || '#d97706',
        danger: theme.danger || '#ef4444',
        'danger-hover': theme.dangerHover || '#dc2626',
        text: theme.text || '#111827',
        background: theme.background || '#f9fafb',
        border: theme.border || '#e5e7eb',
        shadow: theme.shadow || 'rgba(0, 0, 0, 0.1)',
      },
    },
  },
}
