import Image from "next/image";
import photo from '../../../images/sectionAbout/about.png'
import css from './SectionAbout.module.scss'

export const SectionAbout = () => {
    return (
        <section className={`${css.about}`}>
            <div className={`${css.about__wrap}`}>
                <h1 className={`font-felidae text-56 leading-60 text-green text-center max-w-[872px] xl-max:text-40 xl-max:leading-44 lg-max:text-28 lg-max:leading-34 md-max:text-24 md-max:leading-30`}
                >
                    Мы&nbsp;создаём идеальное место <br/> для вашего полного преображения</h1>
                <Image
                    src={photo}
                    alt={`photo`}
                    className={`object-cover max-w-[396px] h-[440px] z-50 xl-max:w-[296px] xl-max:h-[320px] md-max:w-[160px] md-max:h-[220px]`}
                >
                </Image>
                <p className={`text-18 max-w-[748px] text-center text-grey leading-26 xl-max:text-16 xl-max:leading-24 xl-max:max-w-[578px] md-max:text-14 md-max:leading-22`}>Благодаря
                    нашим навыкам и
                    преданности делу,
                    мы
                    заслужили доверие
                    многих
                    клиентов, которые постоянно
                    возвращаются к нам и с удовольствием
                    рекомендуют нас своим близким и друзьям
                </p>
            </div>
            <div>
                <h2 className={`font-felidae text-soft-light2`}>ИДЕАЛЬНОЕ МЕСТО</h2>
                <h2 className={`font-felidae text-soft-light2`}>ИДЕАЛЬНОЕ МЕСТО</h2>
            </div>
        </section>
    )
}
