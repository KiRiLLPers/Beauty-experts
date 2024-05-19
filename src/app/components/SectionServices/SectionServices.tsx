import css from './SectionServices.module.scss'
import hairdresser from '../../../images/icons/hairdresser.svg'
import manicure from '../../../images/icons/manicure.svg'
import visagiste from '../../../images/icons/visagiste.svg'
import cosmetologist from '../../../images/icons/cosmetologist.svg'
import Image from "next/image";
import Link from "next/link";

export const SectionServices = () => {
    const services = [
        {
            id: 1,
            icon: hairdresser,
            name: 'Парихмахерские услуги',
            text: 'Мы предлагаем широкий спектр парихмахерских услуг, которые помогут подчеркнуть красоту ваших волос',
            url: '/service/hairdressing',
        },
        {
            id: 1,
            icon: manicure,
            name: 'Ногтевой сервис',
            text: 'Наши опытные мастера ногтевого сервиса проведут процедуру маникюра или педикюра в комфортной обстановке безопасно и качественно',
            url: '/service/manicure',
        },
        {
            id: 1,
            icon: visagiste,
            name: 'Макияж',
            text: 'Визажисты создают настоящие шедевры, позволяя нашим клиенткам выглядеть великолепно в любой ситуации',
            url: '/service/makeup',
        },
        {
            id: 1,
            icon: cosmetologist,
            name: 'Косметология и массаж',
            text: 'Мы предоставляем большой выбор услуг по уходу за кожей лица и тела, а также расслабляющие процедуры',
            url: '/service/cosmetology-massage',
        },
    ]
    return <section className={css.wrap} id='services'>
        <h2 className={`font-felidae text-green text-56 leading-60 xl-max:text-48 xl-max:leading-54 lg-max:text-40 lg-max:leading-48`}>Наши
            услуги</h2>
        <div>
            {services.map((service, index) => <ul key={index}>
                <Image src={service.icon} alt={service.name}
                       className={`w-[36px] h-[36px] xl-max:w-[26px] xl-max:h-[26px]`}></Image>
                <li className={`font-felidae text-green text-36 leading-40 xl-max:text-24 xl-max:leading-28`}>{service.name}</li>
                <li className={`text-grey text-14 leading-22 text-center`}>{service.text}</li>
                <li>
                    <button className={`text-14 leading-24 text-green`}><Link href={service.url}>ПОДРОБНЕЕ</Link>
                    </button>
                </li>
            </ul>)}
        </div>
    </section>
}
