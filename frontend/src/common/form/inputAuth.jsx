import React from 'react'
import If from '../operador/if'
export default (props) => (
  <If test={!props.hide}>
    <div className='form-group has-feedback'>
      <input
        {...props.input}
        className='form-control'
        placeholder={props.placeholder}
        readOnly={props.readOnly}
        type={props.type}
      />
    </div>
  </If>
)
