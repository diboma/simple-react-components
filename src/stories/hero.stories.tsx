import { CodeBlock } from './utils/CodeBlock'
import { CURRENT_VARIANT_MAPPING } from '@/lib/consts'
import { currentMappingStyles } from './utils/styles'
import { Story } from '@ladle/react'
import ArrowRightIcon from '@/assets/images/arrow-right.svg'
import Hero from '@/components/Hero'
import ReactLogo from '@/assets/images/react.png'
import { Code } from 'node_modules/@ladle/react/typings-for-build/app/src/ui'

export const HeroStory: Story = () => {
  return (
    <main>
      <div style={{ position: 'relative' }}>
        <h1>Hero</h1>
        <span style={currentMappingStyles}>{CURRENT_VARIANT_MAPPING}</span>
      </div>

      <Hero
        title="The only React library you'll ever need"
        description="Simplify your development with our comprehensive, easy-to-use, and highly customizable React components. Build stunning UIs faster and more efficiently."
        primaryLink="/?story=hero--hero"
        primaryLinkLabel="Get started"
        primaryLinkIcon={<ArrowRightIcon />}
        secondaryLink="/?story=hero--hero"
        secondaryLinkLabel="Learn more"
        image={ReactLogo}
      />

      <CodeBlock
        code={`<Hero
  title="The only React library you'll ever need"
  description="Simplify your development with our comprehensive, easy-to-use, and highly customizable React components. Build stunning UIs faster and more efficiently."
  primaryLink="/?story=hero--hero"
  primaryLinkLabel="Get started"
  primaryLinkIcon={<ArrowRightIcon />}
  secondaryLink="/?story=hero--hero"
  secondaryLinkLabel="Learn more"
  image={reactIcon}
/>`}
      />

      <br></br>
      <i>
        Note: the button icon should be an SVG, but the image not. For example:
      </i>
      <CodeBlock
        style={{ marginTop: '-.25rem' }}
        showCopyButton={false}
        code={`import ArrowRightIcon from '@/assets/images/arrow-right.svg'
import ReactLogo from '@/assets/images/react.png'`}
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
    <a href="/?story=hero--hero" class="hero-container__primary-link">
      Get started
      <svg class="-mr-1 ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
      </svg>
    </a>
    <a href="/?story=hero--hero" class="hero-container__secondary-link">
      Learn more
    </a>
  </div>
  <div class="hero-container__right">
    <img alt="hero" src="/@fs/C:/Users/Dirk/Desktop/simple-react-components/src/assets/images/react.svg">
  </div>
</section>`}
      />
    </main>
  )
}

HeroStory.storyName = 'Hero'
