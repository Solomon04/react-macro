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
    'flex justify-center py-3 font-medium px-4 rounded-lg text-sm tracking-tight leading-tight',
    variant === 'solid'
      ? ' bg-primary-900 text-white hover:bg-primary-800'
      : 'text-primary-900 border border-primary-900 bg-transparent',
    disabled ? 'opacity-25 cursor-not-allowed' : ''
  )

  return (
    <button type={type} className={cn} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
