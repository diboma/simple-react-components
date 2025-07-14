import { Story } from '@ladle/react'
import PrimaryButton from './button/PrimaryButton'
import SecondaryButton from './button/SecondaryButton'
import InfoButton from './button/InfoButton'
import SuccessButton from './button/SuccessButton'
import WarningButton from './button/WarningButton'
import DangerButton from './button/DangerButton'
import LightButton from './button/LightButton'
import DarkButton from './button/DarkButton'

export const Primary: Story = () => <PrimaryButton />
Primary.storyName = '01 Primary'

export const Secondary: Story = () => <SecondaryButton />
Secondary.storyName = '02 Secondary'

export const Success: Story = () => <SuccessButton />
Success.storyName = '03 Success'

export const Danger: Story = () => <DangerButton />
Danger.storyName = '04 Danger'

export const Warning: Story = () => <WarningButton />
Warning.storyName = '05 Warning'

export const Info: Story = () => <InfoButton />
Info.storyName = '06 Info'

export const Light: Story = () => <LightButton />
Light.storyName = '07 Light'

export const Dark: Story = () => <DarkButton />
Dark.storyName = '08 Dark'
