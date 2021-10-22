import { LinkProps } from 'react-router-dom'

import { Container } from './styles'

export const Link = (props: LinkProps) => {
  return <Container role="menuitem" {...props} />
}
