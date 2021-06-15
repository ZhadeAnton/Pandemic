import React, { useState, useEffect } from 'react'

import './zoom.scss'
import { IShopItem } from '../../../Interfaces/ShopInterfaces'

import Badge from '../Badge/Badge'

interface Props {
  image: IShopItem['imageFull'],
  sale: IShopItem['sale']
}

export default function Zoom(props: Props) {
  useEffect(() => {
    setBackgroundImage(`url(${props.image})`)
    setBackgroundPosition('0% 0%')
  }, [props.image])

  const [backgroundImage, setBackgroundImage] = useState(`url(${props.image})`)
  const [backgroundPosition, setBackgroundPosition] = useState('0% 0%')

  const handleMouseMove: React.MouseEventHandler<HTMLElement> = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect()
    const x = (e.pageX - left) / width * 100
    const y = (e.pageY - top) / height * 100
    setBackgroundPosition(`${x}% ${y}%`)
  }

  return (
    <figure
      className='zoom'
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setBackgroundPosition('0% 0%')}
      style={{backgroundImage, backgroundPosition}}>
      <img
        className='zoom__image'
        src={props.image}
      />

      {
        props.sale
        ?
         <div className='zoom__badge'>
           <Badge title='Sale'/>
         </div>
        :
         null
      }
    </figure>
  )
}
