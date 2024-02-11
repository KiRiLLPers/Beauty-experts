'use client'

import css from './SectionMain.module.scss'
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import photo from "../../../images/sectionMain/photo.png"
import photo1 from "../../../images/sectionMain/photo1.png"
import photo2 from "../../../images/sectionMain/photo2.png"
import photo3 from "../../../images/sectionMain/photo3.png"
import photo4 from "../../../images/sectionMain/photo4.png"
import photo5 from "../../../images/sectionMain/photo5.png"
import photo6 from "../../../images/sectionMain/photo6.png"
import photo7 from "../../../images/sectionMain/photo7.png"
import photo8 from "../../../images/sectionMain/photo8.png"
import photo9 from "../../../images/sectionMain/photo9.png"
export const SectionMain = () => {
    const photoLeft = [photo, photo1, photo2, photo7, photo8];
    const photoRight = [photo3, photo4, photo5, photo6, photo9];
    const upperPhotos = [...photoLeft, ...photoLeft];
    const lowerPhotos = [...photoRight, ...photoRight];

    const lowerSettings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3500,
        autoplaySpeed: 100,
        cssEase: "linear",
        arrows: false,
    };

    const upperSettings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3500,
        autoplaySpeed: 100,
        cssEase: "linear",
        arrows: false,
        rtl: true,
    };

    return (
        <section>
            <div className={`${css.mainSection}`}>
                <div
                    className={`bg-soft-light2 flex justify-between gap-[20px] max-h-[772px] overflow-hidden xl-max:justify-center`}>
                    <ul className={`flex flex-col gap-[32px] items-center py-[125px] max-w-[800px] lg-max:gap-[20px] lg-max:py-[48px] md-max:py-[40px]`}>
                        <li className={`h-[2px] w-full max-w-[120px] bg-soft-light2 ${css.fadeIn}`}>
                        </li>
                        <li>
                            <p className={`font-felidae text-56 leading-60 text-green text-center lg-max:text-32 lg-max:leading-40 ${css.slideInFromTop}`}>профессиональная</p>
                        </li>
                        <li>
                            <h1 className={`font-felidae lg-max:text-80 lg-max:leading-90 md-max:text-64 md-max:leading-78 ${css.fadeIn}`}>ИМИДЖ
                                СТУДИЯ</h1>
                        </li>
                        <li>
                            <p className={`text-grey text-18 text-center max-w-[520px] lg-max:text-14 ${css.slideInFromBottom}`}>Отражаем
                                индивидуальный стиль и подчеркиваем естественную красоту наших клиентов</p>
                        </li>
                        <li className={`h-[2px] w-full max-w-[120px] bg-soft-light2 ${css.fadeIn}`}></li>
                    </ul>
                    <div
                        className={`flex gap-[44px] flex-1 justify-center 2xl-max:gap-[24px] xl-max:hidden ${css.slideRight}`}>
                        <ul className={`flex flex-col gap-[44px] 2xl-max:gap-[24px] ${css.verticalSliderTop}`}>
                            {photoLeft.concat(photoLeft).map((photo, index) =>
                                <li key={index}>
                                    <Image
                                        className={`object-cover block min-w-[224px] h-[280px]`}
                                        src={photo}
                                        alt={`photo${index}`}
                                    >
                                    </Image>
                                </li>
                            )}
                        </ul>
                        <ul className={`flex flex-col gap-[44px] 2xl-max:gap-[24px] ${css.verticalSliderDown}`}>
                            {photoRight.concat(photoRight).map((photo, index) =>
                                <li key={index}>
                                    <Image
                                        className={`object-cover block min-w-[224px] h-[280px]`}
                                        src={photo}
                                        alt={`photo${index}`}
                                    >
                                    </Image>
                                </li>)}
                        </ul>
                    </div>
                </div>
            </div>
            <div className={`flex flex-col gap-[16px] overflow-hidden xl-min:hidden ${css.fadeIn}`}>
                <Slider {...upperSettings}>
                    {upperPhotos.map((photo, index) => <Image
                        key={index}
                        src={photo}
                        alt={`photo${index}`}
                        className={`object-cover block h-[260px] min-w-[238px] px-[8px]`}
                    >
                    </Image>)}
                </Slider>
                <Slider {...lowerSettings}>
                        {lowerPhotos.map((photo, index) => <Image
                            key={index}
                            src={photo}
                            alt={`photo${index}`}
                            className={`object-cover block h-[260px] min-w-[238px] px-[8px]`}
                        >
                        </Image>)}
                </Slider>
            </div>
        </section>
    )
}
