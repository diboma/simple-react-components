import Button from '@/components/Button'
import { CodeBlock } from '@/stories/utils/CodeBlock'
import { containerStyles, mappingStyles } from '@/stories/utils/styles'

const PrimaryButton = () => {
  const currentMapping = import.meta.env.VITE_VARIANT_MAPPING || 'VANILLA'

  return (
    <main style={containerStyles}>
      <h1>Primary Button</h1>

      <span style={mappingStyles}>{currentMapping}</span>

      <h2>Filled</h2>

      <div>
        <h4>Small Button</h4>
        <Button variant="primary" size="sm">
          Small Button
        </Button>
        <CodeBlock
          code={`<Button variant="primary" size="sm">Small Button</Button>`}
        />
      </div>

      <div>
        <h4>Medium Button</h4>
        <Button variant="primary" size="md">
          Medium Button
        </Button>
        <CodeBlock
          code={`<Button variant="primary" size="md">Medium Button</Button>`}
        />
      </div>

      <div>
        <h4>Large Button</h4>
        <Button variant="primary" size="lg">
          Large Button
        </Button>
        <CodeBlock
          code={`<Button variant="primary" size="lg">Large Button</Button>`}
        />
      </div>

      <h2>Outline</h2>

      <div>
        <h4>Small Button</h4>
        <Button variant="primaryOutline" size="sm">
          Small Button
        </Button>
        <CodeBlock
          code={`<Button variant="primaryOutline" size="sm">Small Button</Button>`}
        />
      </div>

      <div>
        <h4>Medium Button</h4>
        <Button variant="primaryOutline" size="md">
          Medium Button
        </Button>
        <CodeBlock
          code={`<Button variant="primaryOutline" size="md">Medium Button</Button>`}
        />
      </div>

      <div>
        <h4>Large Button</h4>
        <Button variant="primaryOutline" size="lg">
          Large Button
        </Button>
        <CodeBlock
          code={`<Button variant="primaryOutline" size="lg">Large Button</Button>`}
        />
      </div>
    </main>
  )
}

export default PrimaryButton
