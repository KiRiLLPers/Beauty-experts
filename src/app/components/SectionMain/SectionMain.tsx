import css from './SectionMain.module.scss'
import Image from "next/image";
import photo from "../../../images/sectionMain/photo.svg"
import photo1 from "../../../images/sectionMain/photo1.svg"
import photo2 from "../../../images/sectionMain/photo2.svg"
import photo3 from "../../../images/sectionMain/photo3.svg"
import photo4 from "../../../images/sectionMain/photo4.svg"
import photo5 from "../../../images/sectionMain/photo5.svg"
import photo6 from "../../../images/sectionMain/photo6.svg"
export const SectionMain = () => {
    const photoLeft = [photo, photo1, photo2];
    const photoRight = [photo3, photo4, photo5, photo6];

    return (
        <section className={`${css.mainSection}`}>
            <div className={`bg-soft-light2 flex justify-between gap-[20px] max-h-[772px] overflow-hidden`}>
                <ul className={`flex flex-col gap-[32px] items-center py-[125px] max-w-[800px]`}>
                    <li className={`h-[2px] w-full max-w-[120px] bg-soft-light2`}>
                    </li>
                    <li>
                        <p className={`font-felidae text-56 leading-60 text-green text-center ${css.slideInFromTop}`}>профессиональная</p>
                    </li>
                    <li>
                        <h1 className={`font-felidae ${css.fadeIn}`}>ИМИДЖ СТУДИЯ</h1>
                    </li>
                    <li>
                        <p className={`text-grey text-18 text-center max-w-[520px] ${css.slideInFromBottom}`}>Отражаем индивидуальный стиль и подчеркиваем естественную красоту наших клиентов</p>
                    </li>
                    <li className={`h-[2px] w-full max-w-[120px] bg-soft-light2`}></li>
                </ul>
                <div className={`flex gap-[44px] flex-1 justify-center ${css.slideRight}`}>
                    <ul className={`flex flex-col gap-[44px] ${css.verticalSliderTop}`}>
                        {photoLeft.concat(photoLeft).map((photo, index) =>
                            <li key={index}><Image className={`w-[224px] h-[280px] object-cover block`} src={photo} alt={`photo${index}`}></Image></li>
                        )}
                    </ul>
                    <ul className={`flex flex-col gap-[44px] ${css.verticalSliderDown}`}>
                        {photoRight.concat(photoRight).map((photo, index) =>
                            <li key={index}><Image className={`w-[224px] h-[280px] object-cover block`} src={photo} alt={`photo${index}`}></Image></li>)}
                    </ul>
                </div>
            </div>
        </section>
    )
}
