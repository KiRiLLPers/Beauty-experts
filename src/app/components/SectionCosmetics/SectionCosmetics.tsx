import Image from "next/image";
import photo1 from '../../../../public/images/sectionCosmetics/photo1.png'
import photo2 from '../../../../public/images/sectionCosmetics/photo2.png'
import css from './SectionCosmetics.module.scss'

export const SectionCosmetics = () => {
    return <section className={css.wrap}>
        <h2 className={`font-felidae text-green text-48 leading-50 max-w-[652px] pb-[12px] xl-max:text-40 xl-max:leading-44 xl-max:pb-[8px] lg-max:text-28 lg-max:leading-32`}>У
            нас в салоне можно
            приобрести
            качественную
            уходовую косметику</h2>
        <p className={`text-grey text-16 leading-24 max-w-[546px] pb-[44px] lg-max:text-14 lg-max:leading-22 lg-max:pb-[32px]`}>Мы
            стремимся к высочайшему качеству,
            поэтому
            используем косметику
            от ведущих производителей</p>
        <ul>
            <li>
                <h3 className={`font-felidae text-green text-64 leading-70 pb-[8px] 2xl-max:text-56 2xl-max:leading-60 xl-max:text-40 xl-max:leading-44`}>Nashi</h3>
                <p className={`text-grey text-16 leading-24 pb-[20px] xl-max:text-14 xl-max:leading-22`}>Итальянский
                    бренд, который создаёт продукты для
                    ухода за
                    волосами и кожей, основанные на масле
                    арганы. Все средства бренда не имеют в составе хлорида натрия, фосфатов, сульфатов и парабенов.</p>
                <Image src={photo1} alt={'photo'} className={`xl-max:w-[186px]`}></Image>
            </li>
            <li>
                <h3 className={`font-felidae text-green text-64 leading-70 pb-[8px] 2xl-max:text-56 2xl-max:leading-60 xl-max:text-40 xl-max:leading-44 `}>Evo</h3>
                <p className={`text-grey text-16 leading-24 pb-[20px] xl-max:text-14 xl-max:leading-22`}>Профессиональная
                    косметика для ухода за
                    волосами, лицом и телом — простая и эффективная в
                    использовании. Бренд EVO популярен среди людей, которые бережно относятся к своему здоровью.</p>
                <Image src={photo2} alt={'photo'} className={`xl-max:w-[186px]`}></Image>
            </li>
        </ul>
    </section>
}
