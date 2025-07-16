import { containerStyles } from './utils/styles'

export const GitHubStory = () => (
  <main style={containerStyles}>
    <h1>Simple React Components</h1>

    <a
      href="https://github.com/diboma/simple-react-components"
      target="_blank"
      rel="noopener noreferrer"
      style={{ fontSize: '1.2rem', padding: '1rem', display: 'block' }}
    >
      👉 View the repository on GitHub
    </a>
  </main>
)

GitHubStory.storyName = 'Github Repository'
