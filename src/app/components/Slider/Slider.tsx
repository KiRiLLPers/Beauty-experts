'use client'

import Slider, {Settings} from "react-slick";
import "slick-carousel/slick/slick.css";
import {useEffect, useState} from "react";

interface SliderComponentProps {
    className?: string;
    settings: Settings;
    children: React.ReactNode;
}

export const SliderComponent: React.FC<SliderComponentProps> = ({settings, children, className}) => {
    return <Slider {...settings} className={className}>
        {children}
    </Slider>;
}

export default SliderComponent;
