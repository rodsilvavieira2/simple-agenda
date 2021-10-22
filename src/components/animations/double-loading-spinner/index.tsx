import { HtmlHTMLAttributes } from 'react'

import {
  FirstRingVariants,
  SecondaryRingVariants
} from './framer-motion.config'
import { Container, FirstRing, SecondaryRing } from './styles'

type DoubleLoadingSpinnerProps = HtmlHTMLAttributes<HTMLDivElement>

export const DoubleLoadingSpinner = (props: DoubleLoadingSpinnerProps) => {
  return (
    <Container aria-busy="true" aria-live="polite" {...props}>
      <FirstRing variants={FirstRingVariants}>
        <SecondaryRing variants={SecondaryRingVariants} />
      </FirstRing>
    </Container>
  )
}
