import React from 'react'

import './statsLine.scss'

interface Props {
  stats: Array<{
    title: string,
    value: string,
    icon?: boolean,
    info?: string
  }>,
}

export default function StatsLine(props: Props) {
  return (
    <div className='line-stats'>
      <ul className='line-stats__list'>
        {
          props.stats.map((item, idx: number) => {
            return (
              <li
                className='line-stats__item'
                key={idx}
              >
                {
                  item.icon
                  ?
                  <div className='line-stats__item-extended'>
                    <img
                      className='line-stats__item-extended--image'
                      src={item.value}
                      alt={item.title}
                    />
                    <div className='line-stats__item-extended--content'>
                      <h6 className='line-stats__item-extended--title'>
                        {item.title}
                      </h6>

                      <h3 className='line-stats__item-extended--info'>
                        {item.info}
                      </h3>
                    </div>
                  </div>
                  :
                  <>
                    <h6 className='line-stats__item--title'>
                      {item.title}
                    </h6>

                    <h3 className='line-stats__item--info'>
                      {item.value}
                    </h3>
                  </>
                }
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
