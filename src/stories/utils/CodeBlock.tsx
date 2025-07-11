import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism'
import './CodeBlock.css'

export const CodeBlock = ({ code }: { code: string }) => (
  <div className="code-block">
    <button
      onClick={() => navigator.clipboard.writeText(code)}
      className="copy-button"
    >
      Copy
    </button>

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
