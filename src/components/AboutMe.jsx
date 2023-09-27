import style from './Index.module.css'
import btnStyle from '../components/Buttons/Buttons.module.css'
import {
  LogoJavaScript,
  LogoAstro,
  LogoReact,
  LogoTailwind,
  LogoFigma,
  LogoGit,
  LogoAdobe,
  LogoBlender,
  LogoAngular,
  LogoPhp,
  LogoNotion,
  LogoTypescript,
  LogoTiktok
} from './Icons'

export default function AboutMe () {
  return (
    <>
    <section className={style.containerMain}>
      <div className={style.containerCard}>
        <h3>Creador de contenido</h3>
        <h3>+310 seguidores</h3>
          <a target='_blank' rel='noreferrer' href="https://www.tiktok.com/@casvaru">
        <LogoTiktok/>
          </a>
      </div>
    </section>
  <section id='sobremi' className={style.containerAbout}>
    <div className={style.containerCardAbout}>
  <p>Diseñador y programador en <b className={style.javascript}>JavaScript</b> con <b>1 año</b> de experiencia enfocado en la creación de soluciones digitales enfocadas al <b>UI/UX</b>.</p>
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
  <div className={style.containerNextLearning}>
    <div className={style.containerCard}>
      <header>
        <h3>¿Qué estoy aprendiendo hoy?</h3>
      </header>
      <div>
      <div className={style.containerRoadMap}>
        <LogoAngular/>
        <LogoPhp/>
        <LogoTypescript/>
      </div>
      </div>
      <footer>
        <a
        target='_blank'
        rel='noreferrer'
        href="https://www.notion.so/casvaru/Programming-roadmap-19f7e64e0b2545dd9262f266dd93dfc3?pvs=4"
        className={btnStyle.btnCommonS}>Mi roadmap Notion</a>
      </footer>
    </div>
  </div>
  </section>
  </>
  )
}
