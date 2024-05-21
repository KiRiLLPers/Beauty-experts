'use client'

import hairPhoto1 from '../../../../../images/sectionService/hairdressing/hairdressingPhoto1.png'
import hairPhoto2 from '../../../../../images/sectionService/hairdressing/hairdressingPhoto2.png'
import hairPhoto3 from '../../../../../images/sectionService/hairdressing/hairdressingPhoto3.png'
import cosmetologyPhoto1 from '../../../../../images/sectionService/cosmetology-massage/cosmetologyPhoto1.png'
import cosmetologyPhoto2 from '../../../../../images/sectionService/cosmetology-massage/cosmetologyPhoto2.png'
import cosmetologyPhoto3 from '../../../../../images/sectionService/cosmetology-massage/cosmetologyPhoto3.png'
import makeupPhoto1 from '../../../../../images/sectionService/makeup/makeupPhoto1.png'
import makeupPhoto2 from '../../../../../images/sectionService/makeup/makeupPhoto2.png'
import makeupPhoto3 from '../../../../../images/sectionService/makeup/makeupPhoto3.png'
import manicurePhoto1 from '../../../../../images/sectionService/manicure/manicurePhoto1.png'
import manicurePhoto2 from '../../../../../images/sectionService/manicure/manicurePhoto2.png'
import manicurePhoto3 from '../../../../../images/sectionService/manicure/manicurePhoto3.png'
import Image, {StaticImageData} from "next/image";
import css from './SectionMain.module.scss'

type SectionMainProps = {
    id: keyof Content
}

type Section = {
    title: string,
    description: string,
    photos: StaticImageData[]
};

type Content = {
    hairdressing: Section
    'cosmetology-massage': Section
    makeup: Section
    manicure: Section
}
export default function SectionMain({id}: SectionMainProps) {
    const content: Content = {
        hairdressing: {
            title: 'Парикмахерские услуги',
            description: 'Мы предлагаем широкий спектр парихмахерских услуг, которые помогут подчеркнуть красоту ваших волос',
            photos: [hairPhoto1, hairPhoto2, hairPhoto3]
        },
        'cosmetology-massage': {
            title: 'Косметология и массаж',
            description: 'Мы предоставляем большой выбор услуг по уходу за кожей лица и тела, а также расслабляющие процедуры',
            photos: [cosmetologyPhoto1, cosmetologyPhoto2, cosmetologyPhoto3],
        },
        makeup: {
            title: 'Услуги макияжа',
            description: 'Наши визажисты создают настоящие шедевры, позволяя нашим клиенткам выглядеть великолепно в любой ситуации',
            photos: [makeupPhoto1, makeupPhoto2, makeupPhoto3]
        },
        manicure: {
            title: 'Ногтевой сервис',
            description: 'Наши опытные мастера ногтевого сервиса проведут процедуру маникюра или педикюра в комфортной обстановке безопасно и качественно',
            photos: [manicurePhoto1, manicurePhoto2, manicurePhoto3]
        }
    };

    return <section className={`${css.wrap} border-b border-b-soft-light`}>
        <div className={`bg-soft-light2 ${css.wrapper}`}>
            <h1 className={`uppercase font-felidae text-120 leading-120 text-green 2xl-max:text-100 2xl-max:leading-100 xl-max:text-64 xl-max:leading-70 xl-max:max-w-[587px] lg-max:text-40 lg-max:leading-44 md-max:text-32 md-max:leading-38`}>{content[id].title}</h1>
            <div>
                <p className={`max-w-[397px] text-grey text-16 leading-24 xl-max:text-14 xl-max:leading-22 xl-max:max-w-[220px] lg-max:max-w-[300px]`}>{content[id].description}</p>
                {content[id].photos.map((photo: StaticImageData, index: number) => {
                    return <Image loading={'lazy'} key={index} src={photo} alt={'photo'} className={`${index === 0
                        ? '2xl-max:w-[304px] 2xl-max:h-[200px] xl-max:w-[166px] xl-max:h-[130px] lg-max:w-[128px] lg-max:h-[85px] md-max:w-[102px] md-max:h-[68px]'
                        : index === 1
                            ? '2xl-max:w-[140px] 2xl-max:h-[140px] xl-max:w-[100px] xl-max:h-[100px] lg-max:w-[64px] lg-max:h-[64px] md-max:w-[50px] md-max:h-[50px]'
                            : index === 2
                                ? '2xl-max:w-[340px] 2xl-max:h-[440px] xl-max:w-[209px] xl-max:h-[290px] lg-max:w-[160px] lg-max:h-[212px] md-max:w-[132px] md-max:h-[180px]' : ''}`}/>
                })}
            </div>
        </div>
    </section>
}
