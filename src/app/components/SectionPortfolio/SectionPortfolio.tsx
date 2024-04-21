'use client'

import React, {useEffect, useRef, useState} from 'react';
import styles from './SectionPortfolio.module.scss'
import photo1 from '../../../../public/images/SectionPortfolio/photo1.png'
import photo2 from '../../../../public/images/SectionPortfolio/photo2.png'
import photo3 from '../../../../public/images/SectionPortfolio/photo3.png'
import photo4 from '../../../../public/images/SectionPortfolio/photo4.png'
import photo5 from '../../../../public/images/SectionPortfolio/photo5.png'
import photo6 from '../../../../public/images/SectionPortfolio/photo6.png'
import photo7 from '../../../../public/images/SectionPortfolio/photo7.png'
import photo8 from '../../../../public/images/SectionPortfolio/photo8.png'
import photo9 from '../../../../public/images/SectionPortfolio/photo9.png'
import photo10 from '../../../../public/images/SectionPortfolio/photo10.png'
import photo11 from '../../../../public/images/SectionPortfolio/photo11.png'
import Image from "next/image";

export const SectionPortfolio = () => {
    const portfolioPhotos = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9, photo10, photo11];

    return <section className={styles.wrap}>
        <p className={`font-felidae text-72 leading-80 text-white text-center xl-max:text-56 xl-max:leading-60 lg-max:text-40 lg-max:leading-44 md-max:text-32 md-max:leading-38`}>Мы
            заботимся о вас и вашей красоте, а
            наши работы —
            яркие
            доказательства этого</p>
        <div>
            {portfolioPhotos.map((photo, index) => <Image src={photo} alt={`photo`} key={index}></Image>)}
        </div>
    </section>
}
