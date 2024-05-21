'use client'

import css from './SectionMasters.module.scss'
import SliderComponent from "@/app/components/Slider/Slider";
import {masters} from "../../constants/masters";
import Image from "next/image";
import {useEffect, useRef, useState} from "react";
import Slider from "react-slick";
import {TeamCard} from "@/app/components/Modals/TeamCard/TeamCard";
import {Master} from "@/app/Types/Masters";

export const SectionMasters = () => {
    const [windowWidth, setWindowWidth] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(5);
    const [isOpenCard, setIsOpenCard] = useState(false)
    const [masterInfo, setMasterInfo] = useState<undefined | Master>(undefined)
    const [slide, setSlide] = useState(0);
    const sliderRef = useRef<Slider>(null);

    useEffect(() => {
        const updateWindowDimensions = () => {
            const newWidth = window.innerWidth;
            setWindowWidth(newWidth);
        }

        window.addEventListener('resize', updateWindowDimensions);

        updateWindowDimensions();

        return () => window.removeEventListener('resize', updateWindowDimensions);
    }, []);

    useEffect(() => {
        if (windowWidth >= 1441) {
            setSlidesToShow(5);
        } else if (windowWidth >= 1279) {
            setSlidesToShow(4);
        } else if (windowWidth >= 743) {
            setSlidesToShow(3);
        } else {
            setSlidesToShow(2);
        }
    }, [windowWidth]);

    const nextSlide = () => {
        sliderRef.current?.slickNext();
    };
    const prevSlide = () => {
        sliderRef.current?.slickPrev();
    };
    const handleOpenCard = (master: Master) => {
        setMasterInfo(master);
        setIsOpenCard(true);
        document.body.style.overflow = 'hidden';
    }

    const handleCloseCard = () => {
        setIsOpenCard(false)
        document.body.style.overflow = 'unset';
    }
    const settings = {
        slidesToShow: 5,
        arrows: false,
        infinite: false,
        slidesToScroll: 5,
        beforeChange(currentSlide: number, nextSlide: number) {
            setSlide(nextSlide);
        },
        dots: true,
        appendDots: (dots: any) => (
            <div>
                <div className={css.dotsWrap}>
                    <div
                        className={`${css.dots} xl-max:mr-[10px]`}
                    >
                        {dots}
                    </div>
                    <div className={`${css.buttons} xl-max:hidden`}>
                        <button className={`${css.prevButton} ${slide === 0 ? 'disabled' : ''}`}
                                onClick={prevSlide} disabled={slide === 0}></button>
                        <button
                            className={`${css.nextButton} ${slide >= (masters.length - slidesToShow) ? 'disabled' : ''}`}
                            onClick={nextSlide} disabled={slide >= (masters.length - slidesToShow)}></button>
                    </div>
                </div>
            </div>
        ),
        customPaging: (i: any) => (
            <div className={`${css.dot}`}></div>
        ),
        responsive: [{
            breakpoint: 1441,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
        }, {
            breakpoint: 1279,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
            {
                breakpoint: 743,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }]
    }
    return <section className={css.wrap} id='masters'>
        <p className={`font-felidae text-48 leading-50 text-green mb-[40px] xl-max:text-32 xl-max:leading-38 xl-max:mb-[32px] lg-max:text-20 lg-max:leading-26 lg-max:mb-[25px]`}>У
            нас
            работают топовые стилисты и
            мастера, которые
            готовы
            предложить вам самые актуальные тенденции в мире
            красоты</p>
        <div>
            <SliderComponent settings={settings} className={`relative flex flex-col-reverse`} ref={sliderRef}>
                {masters.map((master: Master, index) => {
                    return <ul key={index}>
                        <li className={`m-[10px] lg-max:m-[5px]`}>
                            <Image
                                loading={'lazy'}
                                src={master.photo}
                                alt={'photo'}
                                className={`
                                ${index % 2 === 0 ? 'h-[420px] xl-max:h-[360px] lg-max:h-[258px]' : 'h-[340px] xl-max:h-[280px] lg-max:h-[198px]'} 
                                object-cover 
                                w-[288px]
                                cursor-pointer 
                                ${css.image}`}
                                onClick={() => handleOpenCard(master)}
                            >
                            </Image>
                        </li>
                        <li className={`pt-[16px] font-felidae text-32 leading-42 text-green ml-[10px] lg-max:text-20 lg-max:leading-26`}>{master.name}</li>
                        <li className={`text-14 leading-22 text-grey ml-[10px] lg-max:text-12 lg-max:leading-22`}>{master.profile}</li>
                    </ul>
                })}
            </SliderComponent>
        </div>
        <TeamCard master={masterInfo} isOpen={isOpenCard} handleCloseCard={handleCloseCard}></TeamCard>
    </section>
}
