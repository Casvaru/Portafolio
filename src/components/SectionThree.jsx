import style from './StyleThree.module.css'
import {
  LogoBlender,
  LogoIllustrator,
  LogoPhotoshop,
  LogoPremiere
} from './Icons'
import styleBtn from './Buttons/Buttons.module.css'

export default function SectionOne () {
  return (
  <>
    <div className={style.containerProjects}>
      <div className={style.containerDescriptionProject}>
        <h3 className={style.titleProject}>BV Forms</h3>
          <p className={style.descriptionProject}>Diseño de piezas publicitarias para diversas aplicaciones, onboarding y carouseles de la Playstore aportando un diseño más moderno y minimalista pero conservando su identidad.</p>
        <div className={style.containerLogos}>
          <LogoIllustrator/>
          <LogoPhotoshop/>
          <LogoPremiere/>
          <LogoBlender/>
        </div>
        <div className={style.containerLink}>
          <a target='_blank' rel='noreferrer' className={styleBtn.btnCommonS} href="https://www.behance.net/gallery/152597889/Bv-Forms-New-Design">Behance</a>
        </div>
      </div>
        <video className={style.videoBg} autoPlay loop muted>
          <source src='./bvforms.mp4' />
        </video>
    </div>
  </>
  )
}
