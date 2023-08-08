import style from './Index.module.css'
import {
  LogoJavaScript,
  LogoAstro,
  LogoReact,
  LogoTailwind,
  LogoFigma,
  LogoGit,
  LogoAdobe,
  LogoBlender
} from './Icons'

export default function AboutMe () {
  return (
  <div id='sobremi' className={style.containerAbout}>
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
    </div>
  </div>
  )
}
