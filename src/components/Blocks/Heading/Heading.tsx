import React from 'react'
const Slide = require('react-reveal/Slide')

import './heading.scss'

interface Props {
  title: string,
  subTitle?: string
}

function Heading(props: Props) {
  return (
    <Slide top>
      <div className='brand-heading'>
        <h2 className='brand-heading__title'>
          {props.title}
        </h2>

        {
          props.subTitle &&
          <h6 className='brand-heading__sub-title'>
            {props.subTitle}
          </h6>
        }

        <span className='brand-heading__line'></span>
      </div>
    </Slide>
  )
}

export default Heading

