import React from 'react'
import cx from 'classnames'
import {NavLink} from 'react-router-dom'

import Panel from './Panel'

const Navbar = () => {
  const activeClass = ''
  const pendingClass = ''

  return (
    <Panel className="sticky top-0 overflow-y-scroll flex flex-col item-start">
      <NavLink
        to="/"
        className={({isActive, isPending}) => cx(
          isPending ? pendingClass : isActive ? activeClass : '',
          'text-blue-500'
        )}
        style={({isActive, isPending}) => ({
          color: isPending ? 'red' : isActive ? 'green' : 'blue',
          fontWeight: (isPending || isActive) ? 'bold' : 'normal'
        })}
      >
        Buttons
      </NavLink>
      <NavLink
        to="/accordion"
        className={({isActive, isPending}) => cx(
          isPending ? pendingClass : isActive ? activeClass : '',
          'text-blue-500'
        )}
        style={({isActive, isPending}) => ({
          color: isPending ? 'red' : isActive ? 'green' : 'blue',
          fontWeight: (isPending || isActive) ? 'bold' : 'normal'
        })}
      >
        Accordion
      </NavLink>
      <NavLink
        to="/dropdown"
        className={({isActive, isPending}) => cx(
          isPending ? pendingClass : isActive ? activeClass : '',
          'text-blue-500'
        )}
        style={({isActive, isPending}) => ({
          color: isPending ? 'red' : isActive ? 'green' : 'blue',
          fontWeight: (isPending || isActive) ? 'bold' : 'normal'
        })}
      >
        Dropdown
      </NavLink>
      <NavLink
        to="/badge"
        className={({isActive, isPending}) => cx(
          isPending ? pendingClass : isActive ? activeClass : '',
          'text-blue-500'
        )}
        style={({isActive, isPending}) => ({
          color: isPending ? 'red' : isActive ? 'green' : 'blue',
          fontWeight: (isPending || isActive) ? 'bold' : 'normal'
        })}
      >
        Badge
      </NavLink>
    </Panel>
  )
}

export default Navbar
