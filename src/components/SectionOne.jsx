import style from './StyleOne.module.css'
import {
  LogoHtml,
  LogoCss,
  LogoJavaScript,
  LogoAstro,
  LogoReact,
  LogoFigma,
  LogoGit,
  LogoTailwind,
  LogoFirebase
} from './Icons'
import styleBtn from './Buttons/Buttons.module.css'

export default function SectionOne () {
  return (
  <>
    <div className={style.containerProjects}>
      <div className={style.containerDescriptionProject}>
        <h3 className={style.titleProject}>Secosenlinea.com</h3>
          <p className={style.descriptionProject}>Plataforma web que tiene como objetivo la centralización y fácil consumo para la verificación de los últimos resultados y secos de las loterías de Colombia.</p>
        <div className={style.containerLogos}>
          <LogoHtml/>
          <LogoCss/>
          <LogoJavaScript/>
          <LogoAstro/>
          <LogoReact/>
          <LogoFigma/>
          <LogoGit/>
          <LogoTailwind/>
          <LogoFirebase/>
        </div>
        <div className={style.containerLink}>
          <a target='_blank' rel='noreferrer' className={styleBtn.btnCommonS} href="https://www.secosenlinea.com">Ver web</a>
          <a target='_blank' rel='noreferrer' className={styleBtn.linkCommonS} href="https://github.com/AsvarApp/SecosEnLinea">Respositorio</a>
          <a target='_blank' rel='noreferrer' className={styleBtn.linkCommonS} href="https://www.figma.com/file/vkDrVLSq6Fs3xXs55Faukp/Secos-web?type=design&node-id=1%3A3&mode=design&t=9LLVo9ufvAtzmhLP-1">Figma</a>
        </div>
      </div>
    </div>
  </>
  )
}
