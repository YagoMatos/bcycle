import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default (props) => (
  <ul className='sidebar-menu'>
    <MenuItem path='/' label='DASHBOARD' icon='dashboard' />
    <MenuTree label='CADASTRO' icon='edit'>
      <MenuItem path='billingCycles' label='CICLO DE PAGAMENTO' icon='usd' />
    </MenuTree>
  </ul>
)
