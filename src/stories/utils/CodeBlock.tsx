import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism'
import './CodeBlock.css'

type Props = {
  code: string
  language?: string
  showCopyButton?: boolean
  style?: React.CSSProperties
}

export const CodeBlock = ({
  code,
  language = 'tsx',
  showCopyButton = true,
  style,
}: Props) => (
  <div className="code-block" style={style}>
    {showCopyButton && (
      <button
        onClick={() => navigator.clipboard.writeText(code)}
        className="copy-button"
      >
        Copy
      </button>
    )}

    <SyntaxHighlighter
      language={language}
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
