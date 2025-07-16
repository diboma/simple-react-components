import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CURRENT_VARIANT_MAPPING } from '@/lib/consts.ts'

async function loadApp() {
  let AppComponent

  switch (CURRENT_VARIANT_MAPPING) {
    case 'bootstrap':
      await import('@/assets/scripts/bootstrap.ts')
      AppComponent = (await import('./App-bootstrap.tsx')).default
      break
    case 'tailwind':
      await import('@/assets/styles/tailwind.css')
      AppComponent = (await import('./App-tailwind.tsx')).default
      break
    case 'vanilla':
    default:
      await import('@/assets/styles/vanilla.css')
      AppComponent = (await import('./App-vanilla.tsx')).default
      break
  }

  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <AppComponent />
    </StrictMode>
  )
}

loadApp()
