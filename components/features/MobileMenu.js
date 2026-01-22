import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { MobileMenuChildren } from '@features'

import Chevron from '@assets/icons/chevron-right.svg'

export const MobileMenu = ({ open, menu }) => {
  const [submenu, setSubmenu] = useState(false)
  const setSubmenuState = () => {
    setSubmenu(!submenu)
  }

  return (
    <div className={open ? 'nav__mobile active' : 'nav__mobile'}>
      <div className='nav__mobile__menu'>
        {menu.map((nav) => {
          if (nav.children) {
            return (
              <div key={nav.id} className='nav__mobile__menu__children'>
                <div>
                  <Link href={nav.to} passHref>
                    <a className='nav__mobile__menu__item'>{nav.menu}</a>
                  </Link>
                  <MobileMenuChildren open={submenu} data={nav.children} />
                </div>
                <div
                  onClick={setSubmenuState}
                  className={submenu ? 'menu-icon active' : 'menu-icon'}
                >
                  <Image src={Chevron} width={24} height={24} />
                </div>
              </div>
            )
          } else {
            return (
              <Link key={nav.id} href={nav.to} passHref>
                <a className='nav__mobile__menu__item'>{nav.menu}</a>
              </Link>
            )
          }
        })}
      </div>
    </div>
  )
}
