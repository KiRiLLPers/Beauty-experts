import css from './SectionMain.module.scss'
import Image from "next/image";
import photo from "../../../images/sectionMain/sectionMainPhoto.png"
import photo1 from "../../../images/sectionMain/sectionMainPhoto1.png"
import photo2 from "../../../images/sectionMain/sectionMainPhoto2.png"
import photo3 from "../../../images/sectionMain/sectionMainPhoto3.png"
import photo4 from "../../../images/sectionMain/sectionMainPhoto4.png"
import photo5 from "../../../images/sectionMain/sectionMainPhoto5.png"
import photo6 from "../../../images/sectionMain/sectionMainPhoto6.png"
import photo7 from "../../../images/sectionMain/sectionMainPhoto7.png"
import photo8 from "../../../images/sectionMain/sectionMainPhoto8.png"
import photo9 from "../../../images/sectionMain/sectionMainPhoto9.png"

export const SectionMain = () => {
    const photoLeft = [photo, photo1, photo2, photo7, photo8];
    const photoRight = [photo3, photo4, photo5, photo6, photo9];
    const photoTracks = [[...photoLeft, ...photoLeft], [...photoRight, ...photoRight]];

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
                        className={`flex gap-[36px] flex-1 justify-center 2xl-max:gap-[20px] xl-max:hidden ${css.fadeIn}`}>
                        {photoTracks.map(photos => (
                            <div key={photos[0].src} className={`flex shrink-0 flex-col self-start ${css.verticalTrack}`}>
                                {photos.map((photo, index) => (
                                    <Image
                                        loading="lazy"
                                        key={index}
                                        className="object-cover w-[224px] h-[280px] my-[11px] 2xl-max:my-[6px]"
                                        src={photo}
                                        alt={index < photos.length / 2 ? `photo${index}` : ""}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={`flex flex-col gap-[12px] overflow-hidden xl-min:hidden lg-max:gap-[6px] ${css.fadeIn}`}>
                {photoTracks.map(photos => (
                    <div key={photos[0].src} className={`flex w-max ${css.horizontalTrack}`}>
                        {photos.map((photo, index) => (
                            <Image
                                loading="lazy"
                                key={index}
                                sizes="(max-width: 429px) 120px, (max-width: 743px) max(140px, 25vw), max(238px, 25vw)"
                                className="object-cover w-[25vw] h-[260px] min-w-[238px] px-[8px] lg-max:min-w-[140px] lg-max:h-[180px] lg-max:px-[4px] md-max:min-w-[120px] md-max:h-[160px]"
                                src={photo}
                                alt={index < photos.length / 2 ? `photo${index}` : ""}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </section>
    )
}
