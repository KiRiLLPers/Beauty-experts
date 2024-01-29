import css from "./Footer.module.scss";
const Footer = () => {
    const menuTab = [
        ['УСЛУГИ', ['/']],
        ['СПЕЦИАЛИСТЫ', '/'],
        ['ПРОДУКЦИЯ', '/'],
    ]

    return (
        <footer className={`bg-base-black min-h-[630px] py-[100px] px-[64px] flex flex-col justify-between text-white items-center 2xl-max:px-[40px] xl-max:px-[24px] xl-max:py-[80px] xl-max:min-h-[472px] lg-max:px-[16px] lg-max:py-[48px] ${css.footer}`}>
            <div className={`flex justify-between max-w-[1440px] w-full z-20 lg-max:hidden`}>
                <div className={`flex flex-col h-full gap-[34px] flex-1 xl-max:gap-0`}>
                    <h2 className='font-felidae xl-max:text-64 xl-max:leading-60'>Преображайтесь</h2>
                    <h2 className='font-felidae text-center xl-max:text-64 xl-max:leading-60'>у нас в салоне</h2>
                </div>
                <ul className='flex flex-col gap-[12px] justify-end text-white text-16 text-end lg-max:text-start'>
                    {menuTab.map(([title, url]) => <li className='cursor-pointer hover:opacity-70'>{title}</li>)}
                </ul>
            </div>
            <div className={`flex justify-between max-w-[868px] w-full lg-max:hidden`}>
                <ul className='flex flex-col gap-[8px]'>
                    <p className='text-16 text-grey uppercase mb-[8px] xl-max:text-14 xl-max:leading-24'>социальные сети</p>
                    <li className='font-felidae text-32 leading-36 text-white xl-max:text-24 xl-max:leading-30'>Instagram</li>
                    <li className='font-felidae text-32 leading-36 text-white xl-max:text-24 xl-max:leading-30'>WhatsApp</li>
                </ul>
                <ul className='max-w-[240px]'>
                    <p className='text-16 text-grey uppercase mb-[16px] xl-max:text-14 xl-max:leading-24'>адрес</p>
                    <li className='font-felidae text-32 leading-36 text-white xl-max:text-24 xl-max:leading-30'>г. Новосибирск, Орджоникидзе, 23, 2 этаж</li>
                </ul>
                <ul>
                    <p className='text-16 text-grey uppercase mb-[16px] xl-max:text-14 xl-max:leading-24'>телефон</p>
                    <li className='font-felidae text-32 leading-36 text-white xl-max:text-24 xl-max:leading-30'>+79139852373</li>
                </ul>
            </div>
            <div className={`lg-min:hidden grid w-full grid-cols-2 grid-rows-3 gap-[40px]`}>
                <div className={`col-span-2`}>
                    <h2 className={`font-felidae text-40 leading-44`}>Преображайтесь</h2>
                    <h2 className={`font-felidae text-40 leading-44 pl-[60px]`}>у нас в салоне</h2>
                </div>
                <ul className='flex flex-col gap-[8px] text-white text-14 text-end lg-max:text-start'>
                    {menuTab.map(([title, url]) => <li className='cursor-pointer hover:opacity-70'>{title}</li>)}
                </ul>
                <ul className='flex flex-col gap-[8px]'>
                    <p className='text-grey uppercase mb-[8px] text-12 leading-22'>социальные
                        сети</p>
                    <li className='font-felidae text-18 leading-20 text-white'>Instagram</li>
                    <li className='font-felidae text-18 leading-20 text-white'>WhatsApp</li>
                </ul>
                <ul className='max-w-[240px]'>
                    <p className='text-grey uppercase mb-[8px] text-12 leading-22'>адрес</p>
                    <li className='font-felidae text-18 leading-20 text-white'>г.
                        Новосибирск, Орджоникидзе, 23, 2 этаж
                    </li>
                </ul>
                <ul>
                    <p className='text-grey uppercase mb-[8px] text-12 leading-22'>телефон</p>
                    <li className='font-felidae text-18 leading-20 text-white'>+79139852373</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;
