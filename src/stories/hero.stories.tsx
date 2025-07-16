import { CodeBlock } from './utils/CodeBlock'
import { CURRENT_VARIANT_MAPPING } from '@/lib/consts'
import { currentMappingStyles } from './utils/styles'
import { Story } from '@ladle/react'
import ArrowRightIcon from '@/assets/images/arrow-right.svg'
import Hero from '@/components/Hero'
import ReactLogo from '@/assets/images/react.png'

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
      <svg>...</svg>
    </a>
    <a href="/?story=hero--hero" class="hero-container__secondary-link">
      Learn more
    </a>
  </div>
  <div class="hero-container__right">
    <img alt="hero" src="...">
  </div>
</section>`}
      />
    </main>
  )
}

HeroStory.storyName = 'Hero'
