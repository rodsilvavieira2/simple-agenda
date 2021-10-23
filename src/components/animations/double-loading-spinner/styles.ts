import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  inset: 0;
  height: 100%;
  width: 100%;
`

export const FirstRing = styled(motion.div)`
  display: inline-block;
  position: relative;

  height: 7rem;
  width: 7rem;

  border: 15px solid ${(props) => props.theme.colors.primary};
  border-radius: 7rem;

  border-top-color: ${(props) => props.theme.colors.secondary};
  border-bottom-color: ${(props) => props.theme.colors.secondary}; ;
`

export const SecondaryRing = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;

  border: 13px solid ${(props) => props.theme.colors.primary};
  border-radius: 50%;

  border-top-color: ${(props) => props.theme.colors.secondary};
  border-bottom-color: ${(props) => props.theme.colors.secondary}; ;
`
