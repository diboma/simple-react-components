import Checkbox from '@/components/Checkbox'
import { CURRENT_VARIANT_MAPPING } from '@/lib/consts'
import { CodeBlock } from '@/stories/utils/CodeBlock'
import { Story } from '@ladle/react'
import './stories.css'

export const CheckboxStory: Story = () => {
  return (
    <main className="container">
      <h1>Checkbox</h1>

      <span className="current-mapping">{CURRENT_VARIANT_MAPPING}</span>

      <h2>Props</h2>

      <ul className="props-list">
        <li>
          <span className="prop">id</span>: string (defaults to: 'checkDefault')
        </li>
        <li>
          <span className="prop">label?</span>: string | null (defaults to:
          null)
        </li>
        <li>
          <span className="prop">value?</span>: string (defaults to: '')
        </li>
        <li>
          <span className="prop">className?</span>: string (defaults to: '')
        </li>
        <li>
          <span className="prop">onChange?</span>: (event:
          React.ChangeEventHandler{`<HTMLInputElement>`}) ={`>`} void
        </li>
        <li>
          <span className="prop">..props</span>:{' '}
          {`React.InputHTMLAttributes<HTMLInputElement>`} (any standard
          attribute for an input element, like checked, disabled, etc.)
        </li>
      </ul>

      <h2>Examples</h2>

      <div style={{ marginBottom: '1rem' }}>
        <Checkbox
          id="check-default"
          label="Default checkbox"
          value="remember-me"
          onChange={() => {
            alert('Checkbox clicked')
          }}
        />
        <CodeBlock
          code={`<Checkbox
  id="check-default"
  label="Default checkbox"
  value="remember-me"
  onChange={() => { alert('Checkbox clicked') }}
/>`}
        />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <Checkbox
          id="check-checked"
          label="Checked state"
          value="remember-me"
          checked
        />
        <CodeBlock
          code={`<Checkbox
  id="check-checked"
  label="Checked state"
  value="remember-me"
  checked
/>`}
        />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <Checkbox
          id="check-disabled"
          label="Disabled checkbox"
          value="remember-me"
          disabled
        />
        <CodeBlock
          code={`<Checkbox
  id="check-disabled"
  label="Disabled checkbox"
  value="remember-me"
  disabled
/>`}
        />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <Checkbox
          id="disabled-checked"
          label="Disabled checked"
          value="remember-me"
          checked
          disabled
        />
        <CodeBlock
          code={`<Checkbox
  id="disabled-checked"
  label="Disabled checked"
  value="remember-me"
  disabled
  checked
/>`}
        />
      </div>

      <div>
        <h2>Note</h2>
        <p>
          If you choose the 'vanilla' variant mapping, the checkboxes will be
          rendered using the Bootstrap class names (so you can style it
          accordingly). For example:
        </p>

        <CodeBlock
          showCopyButton={false}
          code={`<div class="form-check">
  <input type="checkbox" class="form-check-input" value="yes" id="remember-me">
  <label class="form-check-label" for="remember-me">
    Remember me
  </label>
</div>
`}
        />
      </div>
    </main>
  )
}

CheckboxStory.storyName = 'Checkbox'
