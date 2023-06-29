import style from './StyleTwo.module.css'
import {
  LogoHtml,
  LogoCss,
  LogoJavaScript,
  LogoGit,
  LogoCordova
} from './Icons'
import styleBtn from './Buttons/Buttons.module.css'

export default function SectionOne () {
  return (
  <>
    <div className={style.containerProjects}>
      <div className={style.containerDescriptionProject}>
        <h3 className={style.titleProject}>MoneyBeam</h3>
          <p className={style.descriptionProject}>Aplicación mobile enfocada en la productivad y finanzas, facilitando calcular grandes cantidades de dinero solo contando el valor de cada billete. (Valores en peso colombiano)</p>
        <div className={style.containerLogos}>
          <LogoHtml/><LogoCss/><LogoJavaScript/><LogoGit/><LogoCordova/>
        </div>
        <div className={style.containerLink}>
        <a className={styleBtn.btnCommonS} href="https://drive.google.com/file/d/1YPr7v6r-7WmfLuOTAUJKt8tFsoilcDNZ/view?usp=sharing">Descargar APK</a>
          <a target='_blank' rel='noreferrer' className={styleBtn.linkCommonS} href="https://contadordinero.vercel.app/">Ver web</a>
          <a target='_blank' rel='noreferrer' className={styleBtn.linkCommonS} href="https://github.com/Casvaru/Moneybeam">Respositorio</a>
          <a target='_blank' rel='noreferrer' className={styleBtn.linkCommonS} href="https://www.figma.com/file/ID0VLlGzLNY3HAXjk9RXOz/MoneyBeam?type=design&node-id=0%3A1&mode=design&t=s2AshOptzdLmVcdM-1">Figma</a>
        </div>
      </div>
      <div className={style.containerImagePhone}>
        <img src="./moneybeam.png" alt="" />
      </div>
    </div>
  </>
  )
}
