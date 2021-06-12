import React from 'react'
import { Dropdown } from 'react-bootstrap'

import './customDropdown.scss'

interface Props {
  sort?: boolean,
  filter?: boolean,
  activeElement: string,
  sortingNames: Array<string>
  sortFn: (sorting: string) => void
}

export default function CustomDropdown(props: Props) {
  return (
    <Dropdown>
      <Dropdown.Toggle
        bsPrefix='dropdown-custom'
        variant='success'
      >
        {
          props.filter
          ?
            <>Filter <i className="bi bi-filter"></i></>
          :
            <>Sort <i className="bi bi-sort-alpha-up-alt"></i></>
        }
      </Dropdown.Toggle>

      <Dropdown.Menu
        align='right'
        bsPrefix='dropdown-menu dropdown-custom-menu'
      >
        {
          props.sortingNames.map((item, idx: number) => (
            <Dropdown.Item
              key={idx}
              bsPrefix='dropdown-custom__item dropdown-item'
              active={item === props.activeElement}
              onClick={() => props.sortFn(`${item}`)}
            >
              {item}
            </Dropdown.Item>
          ))
        }
      </Dropdown.Menu>
    </Dropdown>
  )
}
