import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled(motion.ul)`
  list-style: none;

  > li + li {
    margin-top: 0.5rem;
  }
`
