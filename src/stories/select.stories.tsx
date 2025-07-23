import { CodeBlock } from './utils/CodeBlock'
import { CURRENT_VARIANT_MAPPING } from '@/lib/consts'
import { Story } from '@ladle/react'
import Select from '@/components/Select'
import './stories.css'
import { useState } from 'react'

export const SelectStory: Story = () => {
  const [country, setCountry] = useState('')

  return (
    <main className="container">
      <h1>Select</h1>

      <span className="current-mapping">{CURRENT_VARIANT_MAPPING}</span>

      <h2>Props</h2>

      <ul className="props-list">
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
          {`React.ChangeEvent<HTMLSelectElement>`}) ={`>`} void
        </li>
        <li>
          <span className="prop">options</span>:{' '}
          {`{value: string, label: string}[]`}
        </li>
        <li>
          <span className="prop">..props</span>: {`React.InputHTMLAttributes`}{' '}
          (any standard attribute for a select element, like required, disabled,
          readonly, etc.)
        </li>
      </ul>

      <h2>Examples</h2>

      <div style={{ marginBottom: '1rem' }}>
        <Select
          name="country"
          label="Country"
          helpText="Please select your country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          options={[
            { value: 'BE', label: 'Belgium' },
            { value: 'DE', label: 'Germany' },
            { value: 'NL', label: 'Netherlands' },
            { value: 'FR', label: 'France' },
          ]}
          required
        />

        <CodeBlock
          code={`<Select 
  name="country"
  label="Country"
  helpText="Please select your country"
  value={country}
  onChange={(e) => setCountry(e.target.value)}
  options={[
    { value: 'BE', label: 'Belgium' },
    { value: 'DE', label: 'Germany' },
    { value: 'NL', label: 'Netherlands' },
    { value: 'FR', label: 'France' },
  ]}
  required
/>`}
        />
      </div>

      <div>
        <h2>Note</h2>

        <div style={{ marginBottom: '2rem' }}>
          <p>
            If you choose the 'vanilla' variant mapping, the select element will
            be rendered using the following class names (so you can style it
            accordingly). For example:
          </p>

          <CodeBlock
            style={{ marginTop: '0.5rem' }}
            showCopyButton={false}
            code={`<div class="form-select-container">
  <label for="title" class="form-label">
    Country <span class="text-danger">*</span>
  </label>
  <p class="form-text">Please select your country</p>
  <select id="country" name="country" class="form-select" required="">
    <option value="" disabled=""></option>
    <option value="BE">Belgium</option>
    <option value="DE">Germany</option>
    <option value="NL">Netherlands</option>
    <option value="FR">France</option>
  </select>
</div>`}
          />
        </div>
      </div>
    </main>
  )
}

SelectStory.storyName = 'Select'
