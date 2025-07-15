import { CodeBlock } from '@/stories/utils/CodeBlock'
import { containerStyles, mappingStyles } from '@/stories/utils/styles'
import { CURRENT_VARIANT_MAPPING } from '@/lib/consts'
import Button from '@/components/Button'

const WarningButton = () => {
  return (
    <main style={containerStyles}>
      <h1>Warning Button</h1>

      <span style={mappingStyles}>{CURRENT_VARIANT_MAPPING}</span>

      <h2>Filled</h2>

      <div>
        <h4>Small Button</h4>
        <Button variant="warning" size="sm">
          Small Button
        </Button>
        <CodeBlock
          code={`<Button variant="warning" size="sm">Small Button</Button>`}
        />
      </div>

      <div>
        <h4>Medium Button</h4>
        <Button variant="warning" size="md">
          Medium Button
        </Button>
        <CodeBlock
          code={`<Button variant="warning" size="md">Medium Button</Button>`}
        />
      </div>

      <div>
        <h4>Large Button</h4>
        <Button variant="warning" size="lg">
          Large Button
        </Button>
        <CodeBlock
          code={`<Button variant="warning" size="lg">Large Button</Button>`}
        />
      </div>

      <h2>Outline</h2>

      <div>
        <h4>Small Button</h4>
        <Button variant="warningOutline" size="sm">
          Small Button
        </Button>
        <CodeBlock
          code={`<Button variant="warningOutline" size="sm">Small Button</Button>`}
        />
      </div>

      <div>
        <h4>Medium Button</h4>
        <Button variant="warningOutline" size="md">
          Medium Button
        </Button>
        <CodeBlock
          code={`<Button variant="warningOutline" size="md">Medium Button</Button>`}
        />
      </div>

      <div>
        <h4>Large Button</h4>
        <Button variant="warningOutline" size="lg">
          Large Button
        </Button>
        <CodeBlock
          code={`<Button variant="warningOutline" size="lg">Large Button</Button>`}
        />
      </div>
    </main>
  )
}

export default WarningButton
