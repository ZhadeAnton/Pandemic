import React from 'react'
import cn from 'classnames'

import './statsList.scss'

interface Props {
  valueStyle: 'big' | 'medium' | 'small',
  stats: any,
}

export default function StatsList(props: Props) {
  return (
    <nav className='line-stats'>
      <ul className='line-stats__list'>
        {
          props.stats.map((item: any, idx: number) => {
            return (
              <li
                className={cn(
                    `line-stats__item${item.icon ? '-extended' : ''}`)}
                key={idx}
              >
                {
                  item.icon
                  ?
                    <img
                      className={cn(
                          `line-stats__item${item.icon ? '-extended' : ''}--image`)}
                      src={item.value}
                      alt={item.title}
                    />
                  :
                    null
                }
                <div className={
                  cn(`line-stats__item${item.icon ? '-extended' : ''}--content`)
                }>
                  <h6 className={
                    cn(`line-stats__item${item.icon ? '-extended' : ''}--title`)
                  }>
                    {item.title}
                  </h6>

                  {
                    item.icon
                    ?
                    <h3 className={cn(
                        `line-stats__item${item.icon ? '-extended' : ''}--info`,
                      props.valueStyle === 'big'
                        ? 'line-stats__item-extended--info-big' : '' ||
                        props.valueStyle === 'medium'
                        ? 'line-stats__item-extended--info-medium' : ''
                    )}>
                      {item.info}
                    </h3>
                    :
                    <h3 className={cn('line-stats__item--info',
                      props.valueStyle === 'big'
                        ? 'line-stats__item-extended--info-big' : null ||
                        props.valueStyle === 'medium'
                        ? 'line-stats__item-extended--info-medium' : null
                    )}>
                      {item.value}
                    </h3>
                  }
                </div>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}
