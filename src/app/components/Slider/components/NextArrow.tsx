import React from "react";

interface ArrowProps {
    className?: string,
    style?: React.CSSProperties,
    onClick?: () => void
}

export const NextArrow: React.FC<ArrowProps> = (props) => {
    const {className, onClick} = props;
    return (
        <div
            className={`${className}`} // в custom-class будет ваш CSS стиль
            onClick={onClick}
        >
            Next
        </div>
    );
}
