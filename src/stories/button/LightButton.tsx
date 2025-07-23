import Button from '@/components/Button'
import { CURRENT_VARIANT_MAPPING } from '@/lib/consts'
import { CodeBlock } from '@/stories/utils/CodeBlock'
import '../stories.css'

const LightButton = () => {
  return (
    <main className="container">
      <h1>Light Button</h1>

      <span className="current-mapping">{CURRENT_VARIANT_MAPPING}</span>

      <h2>Filled</h2>

      <div>
        <h4>Small Button</h4>
        <Button variant="light" size="sm">
          Small Button
        </Button>
        <CodeBlock
          code={`<Button variant="light" size="sm">Small Button</Button>`}
        />
      </div>

      <div>
        <h4>Medium Button</h4>
        <Button variant="light" size="md">
          Medium Button
        </Button>
        <CodeBlock
          code={`<Button variant="light" size="md">Medium Button</Button>`}
        />
      </div>

      <div>
        <h4>Large Button</h4>
        <Button variant="light" size="lg">
          Large Button
        </Button>
        <CodeBlock
          code={`<Button variant="light" size="lg">Large Button</Button>`}
        />
      </div>

      <h2>Outline</h2>

      <div>
        <h4>Small Button</h4>
        <Button variant="lightOutline" size="sm">
          Small Button
        </Button>
        <CodeBlock
          code={`<Button variant="lightOutline" size="sm">Small Button</Button>`}
        />
      </div>

      <div>
        <h4>Medium Button</h4>
        <Button variant="lightOutline" size="md">
          Medium Button
        </Button>
        <CodeBlock
          code={`<Button variant="lightOutline" size="md">Medium Button</Button>`}
        />
      </div>

      <div>
        <h4>Large Button</h4>
        <Button variant="lightOutline" size="lg">
          Large Button
        </Button>
        <CodeBlock
          code={`<Button variant="lightOutline" size="lg">Large Button</Button>`}
        />
      </div>
    </main>
  )
}

export default LightButton
