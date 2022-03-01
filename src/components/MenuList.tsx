import React from 'react'
import { MenuItemInterface } from 'helpers/types'

import { Menu, MenuItem, ListItemText, ListItemIcon } from '@mui/material'

interface Props {
  ariaLabel: string
  anchor: HTMLElement | null
  setAnchor: React.Dispatch<React.SetStateAction<HTMLElement | null>>
  data: MenuItemInterface[]
}

export const MenuList = (props: Props) => {
  const { ariaLabel, anchor, setAnchor, data } = props

  return (
    <Menu
      anchorEl={anchor}
      open={Boolean(anchor)}
      onClose={() => setAnchor(null)}
      MenuListProps={{
        'aria-labelledby': ariaLabel,
      }}
    >
      {data.map((item, index) => (
        <MenuItem onClick={item.onSubmit} key={new Date().toString() + index}>
          {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
          <ListItemText>{item.name}</ListItemText>
        </MenuItem>
      ))}
    </Menu>
  )
}
