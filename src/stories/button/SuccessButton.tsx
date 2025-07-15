import { CodeBlock } from '@/stories/utils/CodeBlock'
import { containerStyles, mappingStyles } from '@/stories/utils/styles'
import { CURRENT_VARIANT_MAPPING } from '@/lib/consts'
import Button from '@/components/Button'

const SuccessButton = () => {
  return (
    <main style={containerStyles}>
      <h1>Success Button</h1>

      <span style={mappingStyles}>{CURRENT_VARIANT_MAPPING}</span>

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
