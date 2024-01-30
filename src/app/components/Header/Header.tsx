'use client'

import Image from "next/image";
import logo from '@/images/logo.svg'
import css from "./Header.module.scss";
import BurgerButton from "@/components/BurgerButton/BurgerButton";
import {useState} from "react";
const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleOpenMenu = () => {
        setIsOpen(!isOpen)
    }

    const menuTab = [
        ['УСЛУГИ', ['/']],
        ['СПЕЦИАЛИСТЫ', '/'],
        ['ПРОДУКЦИЯ', '/'],
        ['КОНТАКТЫ', '/']
    ]

    return (
        <>
            <header className={`w-full border-b border-b-soft-light ${css.header}`}>
                <div
                    className='max-w-[1440px] w-full px-16 py-6 flex justify-between items-center m-auto 2xl-max:px-[40px] xl-max:px-[20px] xl-max:py-[16px] lg-max:px-[16px]'>
                    <div className='flex'>
                        <ul className='flex gap-7 w-[536px] xl-max:hidden items-center'>
                            {menuTab.map(([title, url], index) => (
                                <li key={index} className='cursor-pointer hover:opacity-70'>
                                    {title}
                                </li>
                            ))}
                        </ul>
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
            <div className={`${css.menu} ${isOpen ? css.open : ''}`}>
                <ul>
                    <li className={`${css.menuItem} ${isOpen ? css.open : ''}`}>asdasd</li>
                    <li className={`${css.menuItem} ${isOpen ? css.open : ''}`}>asdasd</li>
                    <li className={`${css.menuItem} ${isOpen ? css.open : ''}`}>asdasd</li>
                    <li className={`${css.menuItem} ${isOpen ? css.open : ''}`}>asdasd</li>
                </ul>
            </div>
        </>
    )
}

export default Header;
