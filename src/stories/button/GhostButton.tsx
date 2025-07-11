import Button from '@/components/Button'
import { CodeBlock } from '@/stories/utils/CodeBlock'

const GhostButton = () => {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <h1>Ghost Button</h1>

      <div>
        <h4>Small Button</h4>
        <Button variant="ghost" size="sm">
          Small Button
        </Button>
        <CodeBlock
          code={`<Button variant="ghost" size="sm">Small Button</Button>`}
        />
      </div>

      <div>
        <h4>Medium Button</h4>
        <Button variant="ghost" size="md">
          Medium Button
        </Button>
        <CodeBlock
          code={`<Button variant="ghost" size="md">Medium Button</Button>`}
        />
      </div>

      <div>
        <h4>Large Button</h4>
        <Button variant="ghost" size="lg">
          Large Button
        </Button>
        <CodeBlock
          code={`<Button variant="ghost" size="lg">Large Button</Button>`}
        />
      </div>
    </main>
  )
}

export default GhostButton
