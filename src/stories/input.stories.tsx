import { CURRENT_VARIANT_MAPPING } from '@/lib/consts'
import { Story } from '@ladle/react'
import Input from '@/components/Input'
import './stories.css'
import { CodeBlock } from './utils/CodeBlock'

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
          <span className="prop">label</span>: string
        </li>
        <li>
          <span className="prop">name</span>: string
        </li>
        <li>
          <span className="prop">helpText?</span>: string | undefined
        </li>
        <li>
          <span className="prop">value</span>: string | number | readonly
          string[] | undefined
        </li>
        <li>
          <span className="prop">onChange</span>: ( e:{' '}
          {`React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>`}) ={`>`}{' '}
          void
        </li>
        <li>
          <span className="prop">..props</span>: {`React.InputHTMLAttributes`}{' '}
          (any standard attribute for an input element, like checked, disabled,
          readonly, etc.)
        </li>
      </ul>

      <h2>Examples</h2>

      <div style={{ marginBottom: '1rem' }}>
        <h3>Text input</h3>

        <Input
          type="text"
          label="Title"
          name="title"
          value=""
          onChange={() => {}}
        />

        <CodeBlock
          code={`<Input 
  type="text"
  label="Title"
  name="title"
  value=""
  onChange={() => {}}
/>`}
        />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <h3>Textarea</h3>

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
      </div>
    </main>
  )
}

InputStory.storyName = 'Input'
