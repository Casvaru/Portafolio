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
        <Logo/>
      </div>
      <div>
      </div>
      <div>
        <div onClick={handleClickMenu} className={style.containerHamburgerNav}>{menuIsActive ? <HamburgerMenuClose/> : <HamburgerMenu/>}</div>
        <nav>
          <ul className={menuIsActive ? style.containerNavIsActive : style.containerNav}>
            <li><a className={style.containerLink} href="#inicio">Inicio</a></li>
            <li><a className={style.containerLink} href="#sobremi">Sobre mi</a></li>
            <li><a className={style.containerLink} href="#proyectos">Proyectos</a></li>
            <li><a className={style.containerLink} href="#experiencia">Experiencia</a></li>
            <li><a className={style.containerLink} target='_blank' rel='noreferrer' href="https://blog.casvaru.com">Blog</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
