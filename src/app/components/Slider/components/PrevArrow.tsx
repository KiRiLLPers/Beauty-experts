import React from "react";

interface ArrowProps {
    className?: string,
    style?: React.CSSProperties,
    onClick?: () => void
}

export const PrevArrow: React.FC<ArrowProps> = (props) => {
    const {className, onClick} = props;
    return (
        <div
            className={`${className} custom-class`} // в custom-class будет ваш CSS стиль
            onClick={onClick}
        >
            Prev
        </div>
    );
}
