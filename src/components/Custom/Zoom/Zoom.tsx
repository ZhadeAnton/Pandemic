import React, { useState } from 'react'

import './zoom.scss'

interface Props {
  image: string
}

export default function Zoom(props: Props) {
  const [backgroundImage] = useState(`url(${props.image})`)
  const [backgroundPosition, setBackgroundPosition] = useState('0% 0%')

  const handleMouseMove: React.MouseEventHandler<HTMLElement> = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    const x = (e.pageX - left) / width * 100
    const y = (e.pageY - top) / height * 100
    setBackgroundPosition(`${x}% ${y}%`)
  }

  return (
    <figure
      onMouseMove={handleMouseMove}
      className='zoom'
      style={{backgroundImage, backgroundPosition}}>
      <img
        className='zoom__image'
        src={props.image}
      />
    </figure>
  )
}
