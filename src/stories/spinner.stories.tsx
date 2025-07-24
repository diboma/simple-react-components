import Spinner from '@/components/Spinner'
import { Story } from '@ladle/react'
import { CodeBlock } from './utils/CodeBlock'
import { CURRENT_VARIANT_MAPPING } from '@/lib/consts'
import './stories.css'

export const SpinnerStory: Story = () => {
  return (
    <main className="container">
      <h1>Spinner</h1>

      <span className="current-mapping">{CURRENT_VARIANT_MAPPING}</span>

      <h2>Props</h2>

      <ul className="props-list">
        <li>
          <span className="prop">variant?</span>: 'primary' | 'secondary' |
          'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | null |
          undefined
        </li>
        <li>
          <span className="prop">size?</span>: 'sm' | 'md' | 'lg' (defaults to:
          'md')
        </li>
        <li>
          <span className="prop">className?</span>: string (defaults to: '')
        </li>
      </ul>

      <h2>Examples</h2>

      <h3>Primary</h3>

      <div style={{ marginBottom: '1rem' }}>
        <div className="spinner-container">
          <Spinner variant="primary" size="sm" />
          <Spinner variant="primary" />
          <Spinner variant="primary" size="lg" />
        </div>
        <CodeBlock
          code={`<Spinner variant="primary" size="sm" />
<Spinner variant="primary" />
<Spinner variant="primary" size="lg" />`}
        />
      </div>

      <h3>Secondary</h3>

      <div style={{ marginBottom: '1rem' }}>
        <div className="spinner-container">
          <Spinner variant="secondary" size="sm" />
          <Spinner variant="secondary" />
          <Spinner variant="secondary" size="lg" />
        </div>
        <CodeBlock
          code={`<Spinner variant="secondary" size="sm" />
<Spinner variant="secondary" />
<Spinner variant="secondary" size="lg" />`}
        />
      </div>

      <h3>Success</h3>

      <div style={{ marginBottom: '1rem' }}>
        <div className="spinner-container">
          <Spinner variant="success" size="sm" />
          <Spinner variant="success" />
          <Spinner variant="success" size="lg" />
        </div>
        <CodeBlock
          code={`<Spinner variant="success" size="sm" />
<Spinner variant="success" />
<Spinner variant="success" size="lg" />`}
        />
      </div>

      <h3>Danger</h3>

      <div style={{ marginBottom: '1rem' }}>
        <div className="spinner-container">
          <Spinner variant="danger" size="sm" />
          <Spinner variant="danger" />
          <Spinner variant="danger" size="lg" />
        </div>
        <CodeBlock
          code={`<Spinner variant="danger" size="sm" />
<Spinner variant="danger" />
<Spinner variant="danger" size="lg" />`}
        />
      </div>

      <h3>Warning</h3>

      <div style={{ marginBottom: '1rem' }}>
        <div className="spinner-container">
          <Spinner variant="warning" size="sm" />
          <Spinner variant="warning" />
          <Spinner variant="warning" size="lg" />
        </div>
        <CodeBlock
          code={`<Spinner variant="warning" size="sm" />
<Spinner variant="warning" />
<Spinner variant="warning" size="lg" />`}
        />
      </div>

      <h3>Info</h3>

      <div style={{ marginBottom: '1rem' }}>
        <div className="spinner-container">
          <Spinner variant="info" size="sm" />
          <Spinner variant="info" />
          <Spinner variant="info" size="lg" />
        </div>
        <CodeBlock
          code={`<Spinner variant="info" size="sm" />
<Spinner variant="info" />
<Spinner variant="info" size="lg" />`}
        />
      </div>

      <h3>Light</h3>

      <div style={{ marginBottom: '1rem' }}>
        <div className="spinner-container">
          <Spinner variant="light" size="sm" />
          <Spinner variant="light" />
          <Spinner variant="light" size="lg" />
        </div>
        <CodeBlock
          code={`<Spinner variant="light" size="sm" />
<Spinner variant="light" />
<Spinner variant="light" size="lg" />`}
        />
      </div>

      <h3>Dark</h3>

      <div style={{ marginBottom: '1rem' }}>
        <div className="spinner-container">
          <Spinner variant="dark" size="sm" />
          <Spinner variant="dark" />
          <Spinner variant="dark" size="lg" />
        </div>
        <CodeBlock
          code={`<Spinner variant="dark" size="sm" />
<Spinner variant="dark" />
<Spinner variant="dark" size="lg" />`}
        />
      </div>

      <div>
        <h2>Note</h2>
        <p>
          If you choose the 'vanilla' variant mapping, the spinner will be
          rendered using the Bootstrap class names (so you can style it
          accordingly). For example:
        </p>

        <CodeBlock
          style={{ marginTop: '0.5rem' }}
          showCopyButton={false}
          code={`<div class="spinner-border text-primary" 
     style="width: 2rem; height: 2rem;" 
     role="status">
  <span class="visually-hidden">Loading...</span>
</div>`}
        />
      </div>
    </main>
  )
}

SpinnerStory.storyName = 'Spinner'
