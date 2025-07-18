import { CodeBlock } from '@/stories/utils/CodeBlock'
import { containerStyles, currentMappingStyles } from '@/stories/utils/styles'
import { CURRENT_VARIANT_MAPPING } from '@/lib/consts'
import Button from '@/components/Button'

const DangerButton = () => {
  return (
    <main style={containerStyles}>
      <h1>Danger Button</h1>

      <span style={currentMappingStyles}>{CURRENT_VARIANT_MAPPING}</span>

      <h2>Filled</h2>

      <div>
        <h4>Small Button</h4>
        <Button variant="danger" size="sm">
          Small Button
        </Button>
        <CodeBlock
          code={`<Button variant="danger" size="sm">Small Button</Button>`}
        />
      </div>

      <div>
        <h4>Medium Button</h4>
        <Button variant="danger" size="md">
          Medium Button
        </Button>
        <CodeBlock
          code={`<Button variant="danger" size="md">Medium Button</Button>`}
        />
      </div>

      <div>
        <h4>Large Button</h4>
        <Button variant="danger" size="lg">
          Large Button
        </Button>
        <CodeBlock
          code={`<Button variant="danger" size="lg">Large Button</Button>`}
        />
      </div>

      <h2>Outline</h2>

      <div>
        <h4>Small Button</h4>
        <Button variant="dangerOutline" size="sm">
          Small Button
        </Button>
        <CodeBlock
          code={`<Button variant="dangerOutline" size="sm">Small Button</Button>`}
        />
      </div>

      <div>
        <h4>Medium Button</h4>
        <Button variant="dangerOutline" size="md">
          Medium Button
        </Button>
        <CodeBlock
          code={`<Button variant="dangerOutline" size="md">Medium Button</Button>`}
        />
      </div>

      <div>
        <h4>Large Button</h4>
        <Button variant="dangerOutline" size="lg">
          Large Button
        </Button>
        <CodeBlock
          code={`<Button variant="dangerOutline" size="lg">Large Button</Button>`}
        />
      </div>
    </main>
  )
}

export default DangerButton
