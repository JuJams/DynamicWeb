import React from 'react'
import Badge from '../components/Badge'

const BadgePage = () => {
  return (
    <div>
      <h1>Badge Component</h1>
      
      <div>
        <Badge>Default Badge</Badge>
        <Badge variant="primary">Primary</Badge>
        <Badge variant="success">Success</Badge>
      </div>

      <div>
        <Badge size="sm">Small</Badge>
        <Badge size="md">Medium</Badge>
        <Badge size="lg">Large</Badge>
      </div>
    </div>
  )
}

export default BadgePage
