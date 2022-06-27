import React from 'react'
import Button from '../Button'
import classnames from 'classnames'
import './styles.css'

interface NavBarProps {
  links: Link[]
}

interface Link {
  name: string;
  href: string;
  active?: boolean;
}


const NavBar = ({ links }: NavBarProps) => (
  <div className="nav">
    <img alt="logo" src="/hatom.svg" />
    <ul className="links">
      {
        links.map(({ name, href, active }: Link, i) =>
          <li key={`li${i}`} className={classnames({ active })}>
            <a href={href}>{name}</a>
          </li>
        )
      }
    </ul>
    <div className="hidden md:block">
      <Button title="Apps"/>
    </div>
    <div className="flex md:hidden space-x-2 items-center">
      <img alt="elrond" src="elrond.svg" width="100"/>
      <img alt="menu" src="menu.svg" width="25"/>
    </div>
  </div>
)

export default NavBar;