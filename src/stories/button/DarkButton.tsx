import { CodeBlock } from '@/stories/utils/CodeBlock'
import { containerStyles, currentMappingStyles } from '@/stories/utils/styles'
import { CURRENT_VARIANT_MAPPING } from '@/lib/consts'
import Button from '@/components/Button'

const DarkButton = () => {
  return (
    <main style={containerStyles}>
      <h1>Dark Button</h1>

      <span style={currentMappingStyles}>{CURRENT_VARIANT_MAPPING}</span>

      <h2>Filled</h2>

      <div>
        <h4>Small Button</h4>
        <Button variant="dark" size="sm">
          Small Button
        </Button>
        <CodeBlock
          code={`<Button variant="dark" size="sm">Small Button</Button>`}
        />
      </div>

      <div>
        <h4>Medium Button</h4>
        <Button variant="dark" size="md">
          Medium Button
        </Button>
        <CodeBlock
          code={`<Button variant="dark" size="md">Medium Button</Button>`}
        />
      </div>

      <div>
        <h4>Large Button</h4>
        <Button variant="dark" size="lg">
          Large Button
        </Button>
        <CodeBlock
          code={`<Button variant="dark" size="lg">Large Button</Button>`}
        />
      </div>

      <h2>Outline</h2>

      <div>
        <h4>Small Button</h4>
        <Button variant="darkOutline" size="sm">
          Small Button
        </Button>
        <CodeBlock
          code={`<Button variant="darkOutline" size="sm">Small Button</Button>`}
        />
      </div>

      <div>
        <h4>Medium Button</h4>
        <Button variant="darkOutline" size="md">
          Medium Button
        </Button>
        <CodeBlock
          code={`<Button variant="darkOutline" size="md">Medium Button</Button>`}
        />
      </div>

      <div>
        <h4>Large Button</h4>
        <Button variant="darkOutline" size="lg">
          Large Button
        </Button>
        <CodeBlock
          code={`<Button variant="darkOutline" size="lg">Large Button</Button>`}
        />
      </div>
    </main>
  )
}

export default DarkButton
