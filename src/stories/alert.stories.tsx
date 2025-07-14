import { CodeBlock } from '@/stories/utils/CodeBlock'
import { containerStyles, mappingStyles } from '@/stories/utils/styles'
import { Story } from '@ladle/react'
import Alert from '@/components/Alert'

export const AlertStory: Story = () => {
  const currentMapping = import.meta.env.VITE_VARIANT_MAPPING || 'VANILLA'

  return (
    <main style={containerStyles}>
      <h1>Alert</h1>

      <span style={mappingStyles}>{currentMapping}</span>

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
    </main>
  )
}

AlertStory.storyName = 'Alert'
