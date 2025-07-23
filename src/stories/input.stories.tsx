import { CodeBlock } from './utils/CodeBlock'
import { CURRENT_VARIANT_MAPPING } from '@/lib/consts'
import { Story } from '@ladle/react'
import Input from '@/components/Input'
import './stories.css'

export const InputStory: Story = () => {
  return (
    <main className="container">
      <h1>Input</h1>

      <span className="current-mapping">{CURRENT_VARIANT_MAPPING}</span>

      <h2>Props</h2>

      <ul className="props-list">
        <li>
          <span className="prop">type</span>: React.HTMLInputTypeAttribute |
          'textarea'
        </li>
        <li>
          <span className="prop">name</span>: string
        </li>
        <li>
          <span className="prop">label?</span>: string | undefined (defaults to:
          undefined)
        </li>
        <li>
          <span className="prop">helpText?</span>: string | undefined (defaults
          to: undefined)
        </li>
        <li>
          <span className="prop">value?</span>: string | number | readonly
          string[] | undefined (defaults to: '')
        </li>
        <li>
          <span className="prop">onChange</span>: ( e:{' '}
          {`React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>`}) ={`>`}{' '}
          void
        </li>
        <li>
          <span className="prop">..props</span>: {`React.InputHTMLAttributes`}{' '}
          (any standard attribute for an input element, like required, disabled,
          readonly, etc.)
        </li>
      </ul>

      <h2>Example: Text input</h2>

      <div style={{ marginBottom: '1rem' }}>
        <Input
          type="text"
          label="Title"
          name="title"
          value=""
          onChange={() => {}}
          required
          helpText="This is a required field"
        />

        <CodeBlock
          code={`<Input 
  type="text"
  label="Title"
  name="title"
  value=""
  onChange={() => {}}
  required
/>`}
        />

        <h3>Note</h3>

        <p>
          If you choose the 'vanilla' variant mapping, the input will be
          rendered with the following class names (so you can style it
          accordingly):
        </p>
        <CodeBlock
          style={{ marginTop: '0.5rem' }}
          showCopyButton={false}
          code={`<div style="margin-bottom: 1rem;">
  <label for="title" class="form-label">
    Title <span class="text-danger">*</span>
  </label>
  <p class="form-text">This is a required field</p>
  <input
    type="text"
    id="title"
    name="title"
    class="form-control"
    value="">
</div>`}
        />
      </div>

      <h2>Example: Textarea</h2>

      <div style={{ marginBottom: '1rem' }}>
        <Input
          type="textarea"
          label="Description"
          name="description"
          value=""
          onChange={() => {}}
        />

        <CodeBlock
          code={`<Input 
  type="textarea"
  label="Description"
  name="description"
  value=""
  onChange={() => {}}
/>`}
        />

        <h3>Note</h3>
        <p>
          If you choose the 'vanilla' variant mapping, the textarea will be
          rendered with the following class names (so you can style it
          accordingly):
        </p>
        <CodeBlock
          style={{ marginTop: '0.5rem' }}
          showCopyButton={false}
          code={`<div style="margin-bottom: 1rem;">
  <label for="title" class="form-label">
    Description
  </label>
  <textarea
    id="description"
    name="description"
    class="form-control"></textarea>
</div>`}
        />
      </div>
    </main>
  )
}

InputStory.storyName = 'Input'
