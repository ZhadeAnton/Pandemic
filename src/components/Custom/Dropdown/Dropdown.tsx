import React from 'react'
import { Dropdown } from 'react-bootstrap'

interface Props {
  flterTitle: string,
  onFilterItems: (filtering :string) => void
}

export default function FilterDropdown(props: Props) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success">
        Filter by: {props.flterTitle}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => props.onFilterItems('Default')}>
          Default
        </Dropdown.Item>

        <Dropdown.Item onClick={() => props.onFilterItems('Sale')}>
          Sale
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}
