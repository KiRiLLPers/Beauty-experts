'use client'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css';

import styles from './SectionCarousel.module.scss'
import {carouselPhotos} from "@/app/constants/carousel";
import Image from "next/image";
import {Autoplay, Mousewheel} from "swiper/modules";

export const SectionCarousel = () => {
    return (
        <section className={styles.wrap}>
            <Swiper
                loop={true}
                mousewheel={true}
                modules={[Mousewheel, Autoplay]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}
                breakpoints={
                    {
                        1280: {
                            slidesPerView: 2.8,
                            spaceBetween: 50
                        },
                        744: {
                            slidesPerView: 2.2,
                            spaceBetween: 20
                        },
                        430: {
                            slidesPerView: 1.8,
                            spaceBetween: 20,
                        },
                        320: {
                            slidesPerView: 1.6,
                            spaceBetween: 10
                        }

                    }
                }
            >
                {carouselPhotos.map((el, index) => <SwiperSlide key={index}>
                    <Image src={el.photo} alt={el.text} className={`w-full h-full object-contain`}></Image>
                    <p className={`pt-[12px] text-14 leading-22 text-grey`}>{el.text}</p>
                </SwiperSlide>)}
            </Swiper>
        </section>
    );
}
