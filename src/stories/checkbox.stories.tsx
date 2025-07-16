import { CodeBlock } from '@/stories/utils/CodeBlock'
import { containerStyles, currentMappingStyles } from '@/stories/utils/styles'
import { CURRENT_VARIANT_MAPPING } from '@/lib/consts'
import { Story } from '@ladle/react'
import Checkbox from '@/components/Checkbox'

export const CheckboxStory: Story = () => {
  return (
    <main style={containerStyles}>
      <h1>Checkbox</h1>

      <span style={currentMappingStyles}>{CURRENT_VARIANT_MAPPING}</span>

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
        <i>
          Note: If you choose the 'vanilla' variant mapping, the checkbox will
          be rendered with the following class names (so you can style it
          accordingly):
        </i>
        <CodeBlock
          showCopyButton={false}
          code={`<div class="form-check">
  <input class="form-check-input" type="checkbox" value="remember-me" id="check-default">
  <label class="form-check-label" for="check-default">
    Default checkbox
  </label>
</div>
`}
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
    </main>
  )
}

CheckboxStory.storyName = 'Checkbox'
