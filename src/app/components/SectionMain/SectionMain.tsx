import css from './SectionMain.module.scss'
import Image from "next/image";
import SliderComponent from "../../components/Slider/Slider";
import photo from "../../../../public/images/sectionMain/photo.png"
import photo1 from "../../../../public/images/sectionMain/photo1.png"
import photo2 from "../../../../public/images/sectionMain/photo2.png"
import photo3 from "../../../../public/images/sectionMain/photo3.png"
import photo4 from "../../../../public/images/sectionMain/photo4.png"
import photo5 from "../../../../public/images/sectionMain/photo5.png"
import photo6 from "../../../../public/images/sectionMain/photo6.png"
import photo7 from "../../../../public/images/sectionMain/photo7.png"
import photo8 from "../../../../public/images/sectionMain/photo8.png"
import photo9 from "../../../../public/images/sectionMain/photo9.png"

export const SectionMain = () => {
    const photoLeft = [photo, photo1, photo2, photo7, photo8];
    const photoRight = [photo3, photo4, photo5, photo6, photo9];
    const upperPhotos = [...photoLeft, ...photoLeft];
    const lowerPhotos = [...photoRight, ...photoRight];

    const lowerHorizontalSettings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3500,
        autoplaySpeed: 100,
        cssEase: "linear",
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const upperHorizontalSettings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3500,
        autoplaySpeed: 100,
        cssEase: "linear",
        arrows: false,
        rtl: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const leftVerticalSettings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3500,
        autoplaySpeed: 100,
        cssEase: "linear",
        vertical: true,
        arrows: false,
    };

    const rightVerticalSettings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3500,
        autoplaySpeed: 100,
        cssEase: "linear",
        vertical: true,
        arrows: false,
        rtl: true
    };

    return (
        <section>
            <div className={`${css.mainSection}`}>
                <div
                    className={`bg-soft-light2 flex justify-between gap-[20px] max-h-[772px] overflow-hidden xl-max:justify-center`}>
                    <ul className={`flex flex-col gap-[32px] items-center py-[125px] max-w-[800px] lg-max:gap-[20px] lg-max:py-[48px] md-max:py-[40px]`}>
                        <li className={`h-[1px] w-full max-w-[120px] bg-soft-light ${css.fadeIn}`}>
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
                        <li className={`h-[1px] w-full max-w-[120px] bg-soft-light ${css.fadeIn}`}></li>
                    </ul>
                    <div
                        className={`flex gap-[44px] flex-1 justify-center 2xl-max:gap-[24px] xl-max:hidden ${css.fadeIn}`}>
                        <SliderComponent className={`flex flex-col`} settings={leftVerticalSettings}>
                            {upperPhotos.map((photo, index) =>
                                <Image
                                    key={index}
                                    className={`object-cover block min-w-[224px] h-[280px] my-[22px] box-border 2xl-max:my-[12px]`}
                                    src={photo}
                                    alt={`photo${index}`}
                                >
                                </Image>)}
                        </SliderComponent>
                        <SliderComponent className={`flex flex-col`} settings={rightVerticalSettings}>
                            {lowerPhotos.map((photo, index) =>
                                <Image
                                    key={index}
                                    className={`object-cover block min-w-[224px] h-[280px] my-[22px] box-border 2xl-max:my-[12px]`}
                                    src={photo}
                                    alt={`photo${index}`}
                                >
                                </Image>)}
                        </SliderComponent>
                    </div>
                </div>
            </div>
            <div className={`flex flex-col gap-[16px] overflow-hidden xl-min:hidden lg-max:gap-[8px] ${css.fadeIn}`}>
                <SliderComponent settings={upperHorizontalSettings}>
                    {upperPhotos.map((photo, index) =>
                        <Image
                            key={index}
                            src={photo}
                            alt={`photo${index}`}
                            className={`object-cover block h-[260px] min-w-[238px] px-[8px] box-border lg-max:min-w-[140px] lg-max:h-[180px] lg-max:px-[4px] md-max:min-w-[120px] md-max:h-[160px]`}
                        >
                        </Image>)}
                </SliderComponent>
                <SliderComponent settings={lowerHorizontalSettings}>
                    {lowerPhotos.map((photo, index) =>
                        <Image
                            key={index}
                            src={photo}
                            alt={`photo${index}`}
                            className={`object-cover block h-[260px] min-w-[238px] px-[8px] box-border lg-max:min-w-[140px] lg-max:h-[180px] lg-max:px-[4px] md-max:min-w-[120px] md-max:h-[160px]`}
                        >
                        </Image>)}
                </SliderComponent>
            </div>
        </section>
    )
}
