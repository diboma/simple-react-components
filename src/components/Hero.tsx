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
  const containerStyle = variantMap?.Hero?.container
  const containerLeftStyle = variantMap?.Hero?.left
  const containerRightStyle = variantMap?.Hero?.right
  const titleStyle = variantMap?.Hero?.title
  const descriptionStyle = variantMap?.Hero?.description
  const primaryLinkStyle = variantMap?.Hero?.primaryLink
  const primaryIconStyle = variantMap?.Hero?.primaryIcon
  const secondaryLinkStyle = variantMap?.Hero?.secondaryLink

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
