import Button from '@/components/Button'
import { CodeBlock } from '@/stories/utils/CodeBlock'
import { containerStyles, mappingStyles } from '@/stories/utils/styles'

const SuccessButton = () => {
  const currentMapping = import.meta.env.VITE_VARIANT_MAPPING || 'VANILLA'

  return (
    <main style={containerStyles}>
      <h1>Success Button</h1>

      <span style={mappingStyles}>{currentMapping}</span>

      <h2>Filled</h2>

      <div>
        <h4>Small Button</h4>
        <Button variant="success" size="sm">
          Small Button
        </Button>
        <CodeBlock
          code={`<Button variant="success" size="sm">Small Button</Button>`}
        />
      </div>

      <div>
        <h4>Medium Button</h4>
        <Button variant="success" size="md">
          Medium Button
        </Button>
        <CodeBlock
          code={`<Button variant="success" size="md">Medium Button</Button>`}
        />
      </div>

      <div>
        <h4>Large Button</h4>
        <Button variant="success" size="lg">
          Large Button
        </Button>
        <CodeBlock
          code={`<Button variant="success" size="lg">Large Button</Button>`}
        />
      </div>

      <h2>Outline</h2>

      <div>
        <h4>Small Button</h4>
        <Button variant="successOutline" size="sm">
          Small Button
        </Button>
        <CodeBlock
          code={`<Button variant="successOutline" size="sm">Small Button</Button>`}
        />
      </div>

      <div>
        <h4>Medium Button</h4>
        <Button variant="successOutline" size="md">
          Medium Button
        </Button>
        <CodeBlock
          code={`<Button variant="successOutline" size="md">Medium Button</Button>`}
        />
      </div>

      <div>
        <h4>Large Button</h4>
        <Button variant="successOutline" size="lg">
          Large Button
        </Button>
        <CodeBlock
          code={`<Button variant="successOutline" size="lg">Large Button</Button>`}
        />
      </div>
    </main>
  )
}

export default SuccessButton
