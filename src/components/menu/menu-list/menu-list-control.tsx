import { useRef } from 'react'

import { useOutsideClick } from '../../../hooks'
import { MenuListProps } from './../menu.types'
import { menuVariants } from './menu-motion.config'
import { Container } from './styles'

import { useMenuContext } from '..'

export const MenuListControl = ({
  children,
  menuPosition = 'bottom'
}: MenuListProps) => {
  const { toggleMenuOpen } = useMenuContext()

  const menuListRef = useRef<HTMLDivElement>(null)

  useOutsideClick({
    ref: menuListRef,
    handler: () => toggleMenuOpen()
  })

  return (
    <Container
      role="menu"
      variants={menuVariants}
      initial="enter"
      animate="center"
      exit="exit"
      menuPosition={menuPosition}
      ref={menuListRef}
    >
      {children}
    </Container>
  )
}
