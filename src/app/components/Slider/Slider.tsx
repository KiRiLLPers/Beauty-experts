'use client'

import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import {useEffect, useState} from "react";

interface SliderComponentProps {
    className?: string;
    settings: Settings;
    children: React.ReactNode;
}

export const SliderComponent: React.FC<SliderComponentProps> = ({ settings, children, className }) => {
    const [isSliderVisible, setIsSliderVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsSliderVisible(true);
        }, 0); // Adjust this delay time as needed

        return () => clearTimeout(timer);
    }, []);

    return isSliderVisible ? (<Slider {...settings} className={className}>
        {children}
    </Slider>) : null;
}

export default SliderComponent;
