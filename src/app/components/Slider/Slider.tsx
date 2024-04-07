'use client'

import Slider, {Settings} from "react-slick";
import "slick-carousel/slick/slick.css";
import styles from './Slider.module.scss'
import React, {useRef} from "react";

interface SliderComponentProps {
    className?: string;
    settings: Settings;
    children: React.ReactNode;
    ref: any
}

const SliderComponent = React.forwardRef<Slider, SliderComponentProps>(
    ({settings, children, className}, ref) => { // Замените sliderRef props на ref
        return <Slider {...settings} className={`${className}`} ref={ref}>
            {children}
        </Slider>
    }
);

export default SliderComponent;
