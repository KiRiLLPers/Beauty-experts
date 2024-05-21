'use client'

import Image from "next/image";
import {Master} from "@/app/Types/Masters";
import css from './TeamCard.module.scss';
type TeamCardProps = {
    master: Master | undefined;
    isOpen: boolean;
    handleCloseCard: any,
}

export const TeamCard = ({master, isOpen, handleCloseCard}: TeamCardProps) => {

    const handleCloseButtonClick = () => {
        handleCloseCard();
    }
    return <div className={`${css.wrap} ${isOpen ? css.open : ''}`}>
        <div className={css.wrapper}>
                <Image src={master?.photo} alt={master?.name ?? ''} loading={'lazy'}
                       className={`w-[100%] max-w-[542px] h-max max-h-[720px] xl-max:max-w-[100%] object-cover bg-bottom`}></Image>
            <div>
                <h2 className={`font-felidae text-72 leading-72 text-green max-w-[408px] pb-[78px] xl-max:hidden`}>Эксперты
                    студии</h2>
                <ul>
                    <li className={`text-grey text-16 leading-26 lg-max:text-14 lg-max:leading-24`}>{master?.profile}</li>
                    <li className={`font-felidae text-green text-52 leading-60 pb-[16px] xl-max:pb-[8px] lg-max:text-40 lg-max:leading-44`}>{master?.name}</li>
                    <li className={`text-grey text-16 leading-26 lg-max:text-14 lg-max:leading-24`}>{master?.description}</li>
                </ul>
                <span
                    className={`text-green font-felidae text-24 leading-34 pt-[24px]`}>{master?.experience}<Image loading={'lazy'}
                    src={master?.icon} alt={'icon'}/></span>
            </div>
            <button onClick={handleCloseButtonClick}></button>
        </div>
    </div>
}
