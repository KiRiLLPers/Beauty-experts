'use client'

import Image from "next/image";
import logo from '@/images/logo.svg'
import css from "./Header.module.scss";
import BurgerButton from "@/components/BurgerButton/BurgerButton";
import {useEffect, useState} from "react";
import Link from "next/link";
const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleOpenMenu = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const menuTab = [
        ['Услуги', '/'],
        ['Специалисты', '/'],
        ['Продукция', '/'],
        ['Контакты', '/']
    ]

    return (
        <>
            <header className={`w-full border-b border-b-soft-light ${css.header}`}>
                <div
                    className='max-w-[1440px] w-full px-16 py-6 flex justify-between items-center m-auto 2xl-max:px-[40px] xl-max:px-[20px] xl-max:py-[16px] lg-max:px-[16px]'>
                    <div className='flex'>
                        <nav className='flex gap-7 w-[536px] xl-max:hidden items-center'>
                            {menuTab.map(([title, url], index) => (
                                <Link href={url} key={index} className='cursor-pointer hover:opacity-70 uppercase'>
                                    {title}
                                </Link>
                            ))}
                        </nav>
                        <BurgerButton isOpen={isOpen} handleOpenMenu={handleOpenMenu}></BurgerButton>
                    </div>
                    <div className='flex-1 ml-[40px] xl-max:ml-0 xl-max:flex xl-max:justify-center'>
                        <Image src={logo} alt='logo'
                               className='object-cover cursor-pointer lg-max:ml-7 md-max:w-[112px]'></Image>
                    </div>
                    <ul className='flex gap-x-[16px] items-center lg-max:gap-x-[8px]'>
                        <li className='pr-[24px] xl-max:hidden'>
                            <a href="tel:+79139852373" className='text-16 leading-26'>+79139852373</a>
                        </li>
                        <li className='w-[40px] h-[40px] flex justify-center items-center bg-soft-light2 rounded-[100px] lg-max:w-[32px] lg-max:h-[32px]'>
                            <a className={`${css.instagram} lg-max:w-[16px] lg-max:h-[16px]`} href='/'></a>
                        </li>
                        <li className='w-[40px] h-[40px] flex justify-center items-center bg-soft-light2 rounded-[100px] lg-max:w-[32px] lg-max:h-[32px]'>
                            <a className={`${css.whatsApp} lg-max:w-[16px] lg-max:h-[16px]`} href='/'></a>
                        </li>
                    </ul>
                </div>
            </header>
            <div className={`${css.menu} ${isOpen ? css.open : ''} flex justify-center items-center`}>
                <ul className={`flex flex-col justify-center items-center gap-[40px] md-max:gap-[24px]`}>
                    <li className={``}></li>
                    {menuTab.map(([title, url], index) =>
                        <li
                        className={`${css.menuItem} ${isOpen ? css.open : ''} cursor-pointer font-felidae text-56 h-full leading-60 text-green lg-max:text-48 lg-max:leading-54 md-max:text-40 md-max:leading-44`}
                        key={index}
                        >
                            {title}
                        </li>)}
                    <li className={``}></li>
                </ul>
            </div>
        </>
    )
}

export default Header;
