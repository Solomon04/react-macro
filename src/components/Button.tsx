import { FunctionComponent, ReactNode } from 'react'
import { classNames } from '../utils'

type Props = {
  variant: 'outline' | 'solid'
  type?: 'button' | 'submit' | 'reset'
  className?: string
  disabled?: boolean
  onClick?: () => void
  href?: string
  children: ReactNode
}

const Button: FunctionComponent<Props> = ({
  variant = 'solid',
  type = 'submit',
  className = '',
  disabled,
  children,
  onClick,
  href,
}) => {
  const cn = classNames(
    'tw-flex tw-justify-center tw-py-3 tw-font-medium tw-px-4 tw-rounded-lg tw-text-sm tw-tracking-tight tw-leading-tight',
    variant === 'solid'
      ? 'tw-bg-primary-900 tw-text-white hover:tw-bg-primary-800'
      : 'tw-text-primary-900 tw-border tw-border-primary-900 tw-bg-transparent',
    disabled ? 'tw-opacity-25 tw-cursor-not-allowed' : ''
  )

  return (
    <button type={type} className={cn} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
