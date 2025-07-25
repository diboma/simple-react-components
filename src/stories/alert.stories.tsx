import Alert from '@/components/Alert'
import { CURRENT_VARIANT_MAPPING } from '@/lib/consts'
import { CodeBlock } from '@/stories/utils/CodeBlock'
import { Story } from '@ladle/react'
import './stories.css'

export const AlertStory: Story = () => {
  return (
    <main className="container">
      <h1>Alert</h1>

      <span className="current-mapping">{CURRENT_VARIANT_MAPPING}</span>

      <h2>Props</h2>

      <ul className="props-list">
        <li>
          <span className="prop">variant?</span>: 'primary' | 'secondary' |
          'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | null |
          undefined
        </li>
        <li>
          <span className="prop">className?</span>: string (defaults to: '')
        </li>
        <li>
          <span className="prop">children?</span>: React.ReactNode
        </li>
      </ul>

      <h2>Examples</h2>

      <div style={{ marginBottom: '1rem' }}>
        <Alert variant="primary">This is a primary alert!</Alert>
        <CodeBlock
          code={`<Alert variant="primary">This is a primary alert!</Alert>`}
        />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <Alert variant="secondary">This is a secondary alert!</Alert>
        <CodeBlock
          code={`<Alert variant="secondary">This is a secondary alert!</Alert>`}
        />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <Alert variant="success">This is a success alert!</Alert>
        <CodeBlock
          code={`<Alert variant="success">This is a success alert!</Alert>`}
        />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <Alert variant="danger">This is a danger alert!</Alert>
        <CodeBlock
          code={`<Alert variant="danger">This is a danger alert!</Alert>`}
        />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <Alert variant="warning">This is a warning alert!</Alert>
        <CodeBlock
          code={`<Alert variant="warning">This is a warning alert!</Alert>`}
        />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <Alert variant="info">This is a info alert!</Alert>
        <CodeBlock
          code={`<Alert variant="info">This is an info alert!</Alert>`}
        />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <Alert variant="light">This is a light alert!</Alert>
        <CodeBlock
          code={`<Alert variant="light">This is a light alert!</Alert>`}
        />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <Alert variant="dark">This is a dark alert!</Alert>
        <CodeBlock
          code={`<Alert variant="dark">This is a dark alert!</Alert>`}
        />
      </div>

      <div>
        <h2>Note</h2>
        <div style={{ marginBottom: '2rem' }}>
          <p>
            If you choose the 'vanilla' variant mapping, the alerts will be
            rendered using the Bootstrap class names (so you can style it
            accordingly). For example:
          </p>

          <CodeBlock
            style={{ marginTop: '0.5rem' }}
            showCopyButton={false}
            code={`<div class="alert alert-primary" role="alert">
  This is a primary alert!
</div>`}
          />
        </div>
      </div>
    </main>
  )
}

AlertStory.storyName = 'Alert'
