import { getActiveVariantMap } from '@/lib/variantSelector'

type Props = {
  title: string
  description: string
  primaryLink?: string
  primaryLinkLabel?: string
  primaryLinkIcon?: React.ReactNode | undefined
  secondaryLink?: string
  secondaryLinkLabel?: string
  image?: string | undefined
}

const Hero = ({
  title,
  description,
  primaryLink = undefined,
  primaryLinkLabel = 'Get started',
  primaryLinkIcon = undefined,
  secondaryLink = undefined,
  secondaryLinkLabel = 'Learn more',
  image = undefined,
}: Props) => {
  const variantMap = getActiveVariantMap()

  const containerStyle = variantMap
    ? variantMap?.Hero?.container
    : 'hero-container'

  const containerLeftStyle = variantMap
    ? variantMap?.Hero?.left
    : 'hero-container__left'

  const containerRightStyle = variantMap
    ? variantMap?.Hero?.right
    : 'hero-container__right'

  const titleStyle = variantMap
    ? variantMap?.Hero?.title
    : 'hero-container__title'

  const descriptionStyle = variantMap
    ? variantMap?.Hero?.description
    : 'hero-container__description'

  const primaryLinkStyle = variantMap
    ? variantMap?.Hero?.primaryLink
    : 'hero-container__primary-link'

  const primaryIconStyle = variantMap
    ? variantMap?.Hero?.primaryIcon
    : 'hero-container__primary-icon'

  const secondaryLinkStyle = variantMap
    ? variantMap?.Hero?.secondaryLink
    : 'hero-container__secondary-link'

  return (
    <section className={containerStyle}>
      <div className={containerLeftStyle}>
        <h1 className={titleStyle}>{title}</h1>
        <p className={descriptionStyle}>{description}</p>
        {primaryLink && (
          <a href={primaryLink} className={primaryLinkStyle}>
            {primaryLinkLabel}
            {primaryLinkIcon && (
              <span className={primaryIconStyle}>{primaryLinkIcon}</span>
            )}
          </a>
        )}
        {secondaryLink && (
          <a href={secondaryLink} className={secondaryLinkStyle}>
            {secondaryLinkLabel}
          </a>
        )}
      </div>
      {image && (
        <div className={containerRightStyle}>
          <img src={image} style={{ width: '100%' }} alt="hero image" />
        </div>
      )}
    </section>
  )
}

export default Hero
