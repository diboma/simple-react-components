import Badge from '@/components/Badge'
import { CURRENT_VARIANT_MAPPING } from '@/lib/consts'
import { CodeBlock } from '@/stories/utils/CodeBlock'
import { Story } from '@ladle/react'
import './stories.css'

export const BadgeStory: Story = () => {
  return (
    <main className="container">
      <h1>Badge</h1>

      <span className="current-mapping">{CURRENT_VARIANT_MAPPING}</span>

      <div style={{ marginBottom: '1rem' }}>
        <Badge variant="primary">primary</Badge>
        <CodeBlock code={`<Badge variant="primary">primary</Badge>`} />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <Badge variant="secondary">secondary</Badge>
        <CodeBlock code={`<Badge variant="secondary">secondary</Badge>`} />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <Badge variant="success">success</Badge>
        <CodeBlock code={`<Badge variant="success">success</Badge>`} />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <Badge variant="danger">danger</Badge>
        <CodeBlock code={`<Badge variant="danger">danger</Badge>`} />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <Badge variant="warning">warning</Badge>
        <CodeBlock code={`<Badge variant="warning">warning</Badge>`} />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <Badge variant="info">info</Badge>
        <CodeBlock code={`<Badge variant="info">info</Badge>`} />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <Badge variant="light">light</Badge>
        <CodeBlock code={`<Badge variant="light">light</Badge>`} />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <Badge variant="dark">badge</Badge>
        <CodeBlock code={`<Badge variant="dark">badge</Badge>`} />
      </div>
    </main>
  )
}

BadgeStory.storyName = 'Badge'
