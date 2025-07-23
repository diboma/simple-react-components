import Button from '@/components/Button'
import { CURRENT_VARIANT_MAPPING } from '@/lib/consts'
import { CodeBlock } from '@/stories/utils/CodeBlock'
import '../stories.css'

const DarkButton = () => {
  return (
    <main className="container">
      <h1>Dark Button</h1>

      <span className="current-mapping">{CURRENT_VARIANT_MAPPING}</span>

      <h2>Props</h2>

      <ul className="props-list">
        <li>
          <span className="prop">type?</span>: 'button' | 'submit' | 'reset
        </li>
        <li>
          <span className="prop">variant?</span>: 'dark' | 'darkOutline'
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

      <h2>Examples: Outline</h2>

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

      <div>
        <h2>Note</h2>
        <p>
          If you choose the 'vanilla' variant mapping, the buttons will be
          rendered using the Bootstrap class names (so you can style it
          accordingly). For example:
        </p>

        <CodeBlock
          style={{ marginTop: '0.5rem' }}
          showCopyButton={false}
          code={`<button type="button" class="btn btn-dark btn-sm">
  Small Button
</button>`}
        />
      </div>
    </main>
  )
}

export default DarkButton
