import css from "./Footer.module.scss";
import Link from "next/link";

const Footer = () => {
    const menuTab = [
        ['УСЛУГИ', '/#services'],
        ['СПЕЦИАЛИСТЫ', '/#masters'],
        ['ПРОДУКЦИЯ', '/#cosmetics'],
    ]

    return (
        <footer
            className={`bg-base-black min-h-[630px] py-[100px] px-[64px] flex flex-col justify-between text-white items-center 2xl-max:px-[40px] xl-max:px-[24px] xl-max:py-[80px] xl-max:min-h-[472px] lg-max:px-[16px] lg-max:py-[48px] ${css.footer}`}
            id='footer'>
            <div className={`flex justify-between max-w-[1440px] w-full z-20 lg-max:hidden`}>
                <div className={`flex flex-col h-full gap-[34px] flex-1 xl-max:gap-0`}>
                    <h2 className='font-felidae xl-max:text-64 xl-max:leading-60'>Преображайтесь</h2>
                    <h2 className='font-felidae text-center xl-max:text-64 xl-max:leading-60'>у нас в салоне</h2>
                </div>
                <ul className='flex flex-col gap-[12px] justify-end text-white text-16 text-end lg-max:text-start'>
                    {menuTab.map(([title, url]) => <li className='cursor-pointer hover:opacity-70'><Link
                        href={url}>{title}</Link></li>)}
                </ul>
            </div>
            <div className={`flex justify-between max-w-[868px] w-full lg-max:hidden`}>
                <ul className='flex flex-col gap-[8px]'>
                    <p className='text-16 text-grey uppercase mb-[8px] xl-max:text-14 xl-max:leading-24'>социальные
                        сети</p>
                    <li className='font-felidae text-32 leading-36 text-white xl-max:text-24 xl-max:leading-30 cursor-pointer hover:opacity-70'>
                        <a href='https://www.instagram.com/beauty__experts?igsh=bHQ1Mmdia3ExMW00&utm_source=qr'
                           target={'_blank'}>Instagram</a></li>
                    <li className='font-felidae text-32 leading-36 text-white xl-max:text-24 xl-max:leading-30 cursor-pointer hover:opacity-70'>
                        <a href='https://wa.me/79139852373' target={'_blank'}>WhatsApp</a></li>
                </ul>
                <ul className='max-w-[240px]'>
                    <p className='text-16 text-grey uppercase mb-[16px] xl-max:text-14 xl-max:leading-24'>адрес</p>
                    <li className='font-felidae text-32 leading-36 text-white xl-max:text-24 xl-max:leading-30'>г.
                        Новосибирск, Орджоникидзе, 23, 2 этаж
                    </li>
                </ul>
                <ul>
                    <p className='text-16 text-grey uppercase mb-[16px] xl-max:text-14 xl-max:leading-24'>телефон</p>
                    <li className='font-felidae text-32 leading-36 text-white xl-max:text-24 xl-max:leading-30 cursor-pointer hover:opacity-70'>
                        <a href="tel:+79139852373">+79139852373</a></li>
                </ul>
            </div>
            <div className={`lg-min:hidden grid w-full grid-cols-2 grid-rows-3 gap-[40px]`}>
                <div className={`col-span-2`}>
                    <h2 className={`font-felidae text-40 leading-44`}>Преображайтесь</h2>
                    <h2 className={`font-felidae text-40 leading-44 pl-[60px]`}>у нас в салоне</h2>
                </div>
                <ul className='flex flex-col gap-[8px] text-white text-14 text-end lg-max:text-start'>
                    {menuTab.map(([title, url]) => <li className='cursor-pointer hover:opacity-70'><Link
                        href={url}>{title}</Link></li>)}
                </ul>
                <ul className='flex flex-col gap-[8px]'>
                    <p className='text-grey uppercase mb-[8px] text-12 leading-22'>социальные
                        сети</p>
                    <li className='font-felidae text-18 leading-20 text-white cursor-pointer hover:opacity-70'><a
                        href='https://www.instagram.com/beauty__experts?igsh=bHQ1Mmdia3ExMW00&utm_source=qr'
                        target={'_blank'}>Instagram</a></li>
                    <li className='font-felidae text-18 leading-20 text-white cursor-pointer hover:opacity-70'><a
                        href='https://wa.me/79139852373' target={'_blank'}>WhatsApp</a></li>
                </ul>
                <ul className='max-w-[240px]'>
                    <p className='text-grey uppercase mb-[8px] text-12 leading-22'>адрес</p>
                    <li className='font-felidae text-18 leading-20 text-white'>г.
                        Новосибирск, Орджоникидзе, 23, 2 этаж
                    </li>
                </ul>
                <ul>
                    <p className='text-grey uppercase mb-[8px] text-12 leading-22'>телефон</p>
                    <li className='font-felidae text-18 leading-20 text-white '><a
                        href="tel:+79139852373">+79139852373</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;
