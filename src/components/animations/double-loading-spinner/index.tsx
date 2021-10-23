import {
  FirstRingVariants,
  SecondaryRingVariants
} from './framer-motion.config'
import { Container, FirstRing, SecondaryRing } from './styles'

export const DoubleLoadingSpinner = () => {
  return (
    <Container aria-busy="true" aria-live="polite">
      <FirstRing animate='animate' variants={FirstRingVariants}>
        <SecondaryRing animate='animate' variants={SecondaryRingVariants} />
      </FirstRing>
    </Container>
  )
}
