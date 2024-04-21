'use client'
import {YMaps, Map, Placemark} from "@pbe/react-yandex-maps";
import css from './SectionMap.module.scss'

export const SectionMap = () => {
    const coordinates = [55.031629, 82.918902];
    const address = 'ул. Орджоникидзе, д. 23'
    return <section className={css.wrap}>
        <h2 className={`text-64 leading-70 font-felidae text-green pb-[40px] xl-max:text-56 xl-max:leading-60 lg-max:text-40 lg-max:leading-48 lg-max:pb-[32px] md-max:text-32 md-max:leading-36 md-max:pb-[16px]`}>Как
            нас
            найти?</h2>
        <div>
            <YMaps>
                <Map defaultState={{center: coordinates, zoom: 15}} width={`100%`} height={`100%`}>
                    <Placemark
                        geometry={coordinates}
                        properties={{
                            iconContent: address,
                        }}
                        options={{preset: 'islands#blackStretchyIcon'}}></Placemark>
                </Map>
            </YMaps>
        </div>
    </section>
}

