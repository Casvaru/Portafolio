import style from './Index.module.css'
import {
  LogoJavaScript,
  LogoAstro,
  LogoReact,
  LogoTailwind,
  LogoFigma,
  LogoGit,
  LogoAdobe,
  LogoBlender,
  LogoNotion
} from './Icons'

export default function AboutMe () {
  return (
    <>
  <section id='sobremi' className={style.containerAbout}>
    <div className={style.containerCardAbout}>
  <p>
    <span className={style.scrollReveal}>Soy un diseñador web freelance de Colombia especializado en <strong>Diseño UI UX</strong> de sitios web y apps, apasionado en crear sistemas de diseños, experiencias visuales, seguir las pautas de accesibilidad <strong>WCAG</strong> y optimizar el rendimiento de tu web.</span></p>
  <div className={style.containerNextLearning}>
    <div className={style.containerCard}>
      <h3>Mis herramientas</h3>
      <div className={style.containerRoadMap}>
        <LogoJavaScript/>
        <LogoAstro/>
        <LogoReact/>
        <LogoTailwind/>
        <LogoGit/>
        <LogoFigma/>
        <LogoAdobe/>
        <LogoBlender/>
        <LogoNotion/>
      </div>
    </div>
      {/* <footer>
        <a
        target='_blank'
        rel='noreferrer'
        href="https://www.notion.so/casvaru/Programming-roadmap-19f7e64e0b2545dd9262f266dd93dfc3?pvs=4"
        className={btnStyle.btnCommonS}>Mi roadmap Notion</a>
      </footer> */}
    </div>
  </div>
  </section>
  </>
  )
}
