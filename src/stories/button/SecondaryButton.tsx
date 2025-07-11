import Button from '@/components/Button'
import { CodeBlock } from '@/stories/utils/CodeBlock'

const SecondaryButton = () => {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <h1>Secondary Button</h1>

      <h2>Filled</h2>

      <div>
        <h4>Small Button</h4>
        <Button variant="secondary" size="sm">
          Small Button
        </Button>
        <CodeBlock
          code={`<Button variant="secondary" size="sm">Small Button</Button>`}
        />
      </div>

      <div>
        <h4>Medium Button</h4>
        <Button variant="secondary" size="md">
          Medium Button
        </Button>
        <CodeBlock
          code={`<Button variant="secondary" size="md">Medium Button</Button>`}
        />
      </div>

      <div>
        <h4>Large Button</h4>
        <Button variant="secondary" size="lg">
          Large Button
        </Button>
        <CodeBlock
          code={`<Button variant="secondary" size="lg">Large Button</Button>`}
        />
      </div>

      <h2>Outline</h2>

      <div>
        <h4>Small Button</h4>
        <Button variant="secondaryOutline" size="sm">
          Small Button
        </Button>
        <CodeBlock
          code={`<Button variant="secondaryOutline" size="sm">Small Button</Button>`}
        />
      </div>

      <div>
        <h4>Medium Button</h4>
        <Button variant="secondaryOutline" size="md">
          Medium Button
        </Button>
        <CodeBlock
          code={`<Button variant="secondaryOutline" size="md">Medium Button</Button>`}
        />
      </div>

      <div>
        <h4>Large Button</h4>
        <Button variant="secondaryOutline" size="lg">
          Large Button
        </Button>
        <CodeBlock
          code={`<Button variant="secondaryOutline" size="lg">Large Button</Button>`}
        />
      </div>
    </main>
  )
}

export default SecondaryButton
