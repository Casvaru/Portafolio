import style from './Header.module.css'
import { Logo, HamburgerMenu, HamburgerMenuClose } from '../Icons'
import { useState } from 'react'

export default function Header () {
  const [menuIsActive, setMenuIsActive] = useState(false)

  function handleClickMenu () {
    setMenuIsActive(!menuIsActive)
  }
  return (
    <header className={style.container}>
      <div className={style.containerLogo}>
        <a aria-label='Logo' href="https://www.casvaru.com"><Logo/></a>
      </div>
      <div>
      </div>
      <div>
        <div onClick={handleClickMenu} className={style.containerHamburgerNav} aria-haspopup="true">{menuIsActive ? <HamburgerMenuClose/> : <HamburgerMenu/>}</div>
        <nav>
          <ul className={menuIsActive ? style.containerNavIsActive : style.containerNav}>
            <li><a className={style.containerLink} href="/">Inicio</a></li>
            <li><a className={style.containerLink} href="demos">Demos</a></li>
            {/* <li><a className={style.containerLink} href="curriculum">Curriculum</a></li> */}
            <li><a className={style.containerLink} target='_blank' rel='noreferrer' href="https://blog.casvaru.com">Blog</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
