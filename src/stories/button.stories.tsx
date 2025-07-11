import { Story } from '@ladle/react'
import PrimaryButton from './button/PrimaryButton'
import SecondaryButton from './button/SecondaryButton'
import InfoButton from './button/InfoButton'
import SuccessButton from './button/SuccessButton'
import WarningButton from './button/WarningButton'
import DangerButton from './button/DangerButton'
import GhostButton from './button/GhostButton'

export const Primary: Story = () => <PrimaryButton />
Primary.storyName = '01 Primary'

export const Secondary: Story = () => <SecondaryButton />
Secondary.storyName = '02 Secondary'

export const Info: Story = () => <InfoButton />
Info.storyName = '03 Info'

export const Success: Story = () => <SuccessButton />
Success.storyName = '04 Success'

export const Warning: Story = () => <WarningButton />
Warning.storyName = '05 Warning'

export const Danger: Story = () => <DangerButton />
Danger.storyName = '06 Danger'

export const Ghost: Story = () => <GhostButton />
Ghost.storyName = '07 Ghost'
