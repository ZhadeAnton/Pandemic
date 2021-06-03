import React from 'react'
import { animated, useSpring } from 'react-spring'

interface Props {
  startNumber: number,
  finalNumber: number
}

export default function AnimatedNumber(props: Props) {
  const { number } = useSpring({
    reset: false,
    from: { number: props.startNumber },
    number: props.finalNumber,
    immediate: false
  })

  return (
    <animated.div>{number.to((n) => n.toFixed(2))}</animated.div>
  )
}
