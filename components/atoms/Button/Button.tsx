import Link from 'next/link'
import Image from 'next/image'
import Chevron from '@assets/icons/chevron-right.svg'
import clsx from 'clsx'
import { useMemo } from 'react'

interface IButton {
  to?: string
  type?: 'primary' | 'secondary'
  text: string
  target?: 'internal' | 'external'
  small?: boolean
}

export const Button = ({
  to,
  type = 'primary',
  text,
  target,
  small,
}: IButton) => {
  const classNames = useMemo(() => {
    return clsx(
      'btn',
      type === 'primary' && 'btn--primary',
      type === 'secondary' && 'btn--secondary',
      small && 'btn__small',
    )
  }, [type, small])

  if (target === 'internal') {
    return (
      <Link href={to} passHref>
        <button className={classNames}>
          <span className='text'>{text}</span>{' '}
          <Image className='icon' src={Chevron} width={18} height={18} />
        </button>
      </Link>
    )
  } else {
    return (
      <a href={to} target='_blank' rel='noreferrer'>
        <button className={classNames}>
          <span className='text'>{text}</span>{' '}
          <Image className='icon' src={Chevron} width={18} height={18} />
        </button>
      </a>
    )
  }
}
