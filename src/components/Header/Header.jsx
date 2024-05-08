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
            <li>
              <a
                className={style.containerLink}
                href="/"
                aria-label='Enlace para regresar al inicio de la página'
                >Inicio</a></li>
            <li>
              <a
                className={style.containerLink}
                href="demos"
                aria-label='Ir a la página de mis demos y pruebas'
                >Demos</a></li>
            <li>
              <a
                className={style.containerLink}
                href="curriculum"
                aria-label='Enalce para ver mi Hoja de vida o curriculum en formato PDF'
                >Curriculum</a></li>
            <li>
              <a
                className={style.containerLink}
                target='_blank'
                rel='noreferrer'
                href="https://blog.casvaru.com"
                aria-label='Enlace para visitar mi blog'
                >Blog</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
