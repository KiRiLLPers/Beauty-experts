import css from './SectionMasters.module.scss'
import SliderComponent from "@/app/components/Slider/Slider";
import {masters} from "@/app/constants/masters";
import Image from "next/image";

export const SectionMasters = () => {
    console.log(masters)
    const settings = {
        slidesToShow: 3.5,
        arrows: true,
    }

    return <section className={css.wrap}>
        <p> У нас работают топовые стилисты и мастера, которые готовы предложить вам самые актуальные тенденции в мире
            красоты</p>
        <div>
            <SliderComponent settings={settings} className={``}>
                {masters.map((el, index) => {
                    return <ul>
                        <li>
                            <Image src={el.photo} alt={'photo'} height={460} width={322}></Image>
                        </li>
                        <li>{el.name}</li>
                        <li>{el.profile}</li>
                    </ul>
                })}
            </SliderComponent>
        </div>
    </section>
}
