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
        <h2 className='brand-heading--title'>
          {props.title}
        </h2>

        {
          props.subTitle &&
          <h6 className='brand-heading--sub-title'>
            {props.subTitle}
          </h6>
        }

        <span className='brand-heading--line'></span>
      </div>
    </Slide>
  )
}

export default Heading

