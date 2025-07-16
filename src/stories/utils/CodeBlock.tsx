import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism'
import './CodeBlock.css'

type Props = {
  code: string
  showCopyButton?: boolean
}

export const CodeBlock = ({ code, showCopyButton = true }: Props) => (
  <div className="code-block">
    {showCopyButton && (
      <button
        onClick={() => navigator.clipboard.writeText(code)}
        className="copy-button"
      >
        Copy
      </button>
    )}

    <SyntaxHighlighter
      language="tsx"
      style={materialLight}
      customStyle={{
        padding: '0.5rem',
        borderRadius: '8px',
        fontSize: '0.85rem',
      }}
    >
      {code}
    </SyntaxHighlighter>
  </div>
)
