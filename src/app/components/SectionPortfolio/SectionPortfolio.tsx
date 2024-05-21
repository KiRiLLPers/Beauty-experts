'use client'

import React from 'react';
import styles from './SectionPortfolio.module.scss'
import photo1 from '../../../images/sectionPortfolio/sectionPortfolioPhoto1.png'
import photo2 from '../../../images/sectionPortfolio/sectionPortfolioPhoto2.png'
import photo3 from '../../../images/sectionPortfolio/sectionPortfolioPhoto3.png'
import photo4 from '../../../images/sectionPortfolio/sectionPortfolioPhoto4.png'
import photo5 from '../../../images/sectionPortfolio/sectionPortfolioPhoto5.png'
import photo6 from '../../../images/sectionPortfolio/sectionPortfolioPhoto6.png'
import photo7 from '../../../images/sectionPortfolio/sectionPortfolioPhoto7.png'
import photo8 from '../../../images/sectionPortfolio/sectionPortfolioPhoto8.png'
import photo9 from '../../../images/sectionPortfolio/sectionPortfolioPhoto9.png'
import photo10 from '../../../images/sectionPortfolio/sectionPortfolioPhoto10.png'
import photo11 from '../../../images/sectionPortfolio/sectionPortfolioPhoto11.png'
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
            {portfolioPhotos.map((photo, index) => <Image loading={'lazy'} src={photo} alt={`photo`} key={index}></Image>)}
        </div>
    </section>
}
