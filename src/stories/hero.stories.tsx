import { CodeBlock } from './utils/CodeBlock'
import { CURRENT_VARIANT_MAPPING } from '@/lib/consts'
import { Story } from '@ladle/react'
import ArrowRightIcon from '@/assets/images/arrow-right.svg'
import ReactLogo from '@/assets/images/react.png'
import Hero from '@/components/Hero'
import './stories.css'

export const HeroStory: Story = () => {
  return (
    <main style={{ marginBottom: '2rem' }}>
      <div style={{ position: 'relative' }}>
        <h1>Hero</h1>
        <span className="current-mapping">{CURRENT_VARIANT_MAPPING}</span>
      </div>

      <Hero
        title="The only React library you'll ever need"
        description="Simplify your development with our comprehensive, easy-to-use, and highly customizable React components. Build stunning UIs faster and more efficiently."
        primaryLink="#"
        primaryLinkLabel="Get started"
        primaryLinkIcon={<ArrowRightIcon />}
        secondaryLink="#"
        secondaryLinkLabel="Learn more"
        image={ReactLogo}
      />

      <div className="container">
        <h2>Props</h2>

        <ul className="props-list">
          <li>
            <span className="prop">title</span>: string
          </li>
          <li>
            <span className="prop">description</span>: string
          </li>
          <li>
            <span className="prop">primaryLink?</span>: string (defaults to:
            undefined)
          </li>
          <li>
            <span className="prop">primaryLinkLabel?</span>: string (defaults
            to: 'Get Started')
          </li>
          <li>
            <span className="prop">primaryLinkIcon?</span>: React.ReactNode
            (defaults to: undefined)
          </li>
          <li>
            <span className="prop">secondaryLink?</span>: string (defaults to:
            undefined)
          </li>
          <li>
            <span className="prop">secondaryLinkLabel?</span>: string (defaults
            to: 'Learn more')
          </li>
          <li>
            <span className="prop">image?</span>: string | undefined (defaults
            to: undefined)
          </li>
        </ul>

        <h2>Code for the example above</h2>

        <CodeBlock
          style={{ marginTop: '-.25rem' }}
          code={`<Hero
  title="The only React library you'll ever need"
  description="Simplify your development with our comprehensive, easy-to-use, and highly customizable React components. Build stunning UIs faster and more efficiently."
  primaryLink="#"
  primaryLinkLabel="Get started"
  primaryLinkIcon={<ArrowRightIcon />}
  secondaryLink="#"
  secondaryLinkLabel="Learn more"
  image={ReactLogo}
/>`}
        />

        <i>
          Note: the button icon should be an SVG, but the image not. For
          example:
        </i>
        <CodeBlock
          style={{ marginTop: '-.25rem' }}
          showCopyButton={false}
          code={`import ArrowRightIcon from '@/assets/images/arrow-right.svg'
import ReactLogo from '@/assets/images/react.png'
`}
        />

        <i>
          Note: If you choose the 'vanilla' variant mapping, the hero will be
          rendered with the following class names (so you can style it
          accordingly):
        </i>
        <CodeBlock
          style={{ marginTop: '-.25rem' }}
          showCopyButton={false}
          code={`<section class="hero-container">
  <div class="hero-container__left">
    <h1 class="hero-container__title">
      The only React library you'll ever need
    </h1>
    <p class="hero-container__description">
      Simplify your development with our comprehensive, easy-to-use, and highly customizable React components.
      Build stunning UIs faster and more efficiently.
    </p>
    <a href="..." class="hero-container__primary-link">
      Get started
      <svg>...</svg>
    </a>
    <a href="..." class="hero-container__secondary-link">
      Learn more
    </a>
  </div>
  <div class="hero-container__right">
    <img alt="hero" src="...">
  </div>
</section>`}
        />
      </div>
    </main>
  )
}

HeroStory.storyName = 'Hero'
