import Button from '@/components/Button'
import { CURRENT_VARIANT_MAPPING } from '@/lib/consts'
import { CodeBlock } from '@/stories/utils/CodeBlock'
import '../stories.css'

const WarningButton = () => {
  return (
    <main className="container">
      <h1>Warning Button</h1>

      <span className="current-mapping">{CURRENT_VARIANT_MAPPING}</span>

      <h2>Props</h2>

      <ul className="props-list">
        <li>
          <span className="prop">type?</span>: 'button' | 'submit' | 'reset
        </li>
        <li>
          <span className="prop">variant?</span>: 'warning' | 'warningOutline'
        </li>
        <li>
          <span className="prop">size?</span>: 'sm' | 'md' | 'lg' | null |
          undefined
        </li>
        <li>
          <span className="prop">onClick?</span>: (event: React.MouseEvent
          {`<HTMLButtonElement>`}) ={`>`} void
        </li>
        <li>
          <span className="prop">className?</span>: string (defaults to: '')
        </li>
        <li>
          <span className="prop">children?</span>: React.ReactNode
        </li>
      </ul>

      <h2>Examples: Filled</h2>

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

      <h2>Examples: Outline</h2>

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
