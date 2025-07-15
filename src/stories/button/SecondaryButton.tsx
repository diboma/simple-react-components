import { CodeBlock } from '@/stories/utils/CodeBlock'
import { containerStyles, mappingStyles } from '@/stories/utils/styles'
import { CURRENT_VARIANT_MAPPING } from '@/lib/consts'
import Button from '@/components/Button'

const SecondaryButton = () => {
  return (
    <main style={containerStyles}>
      <h1>Secondary Button</h1>

      <span style={mappingStyles}>{CURRENT_VARIANT_MAPPING}</span>

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
