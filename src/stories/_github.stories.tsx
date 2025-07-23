import './stories.css'

export const GitHubStory = () => (
  <main className="container">
    <h1>Simple React Components</h1>

    <ul style={{ fontSize: '1.1rem' }}>
      <li>
        👉 Use the navigation menu on the right to preview the components.
      </li>

      <li style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
        👁️{' '}
        <a
          href="https://github.com/diboma/simple-react-components"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: '1.1rem',
            display: 'block',
            textDecoration: 'underline',
          }}
        >
          View the repository on GitHub
        </a>
      </li>
    </ul>
  </main>
)

GitHubStory.storyName = 'Github Repository'
