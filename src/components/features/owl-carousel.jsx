import React, { useRef } from 'react';
import Carousel from 'react-owl-carousel2';

// let prevPath;
function OwlCarousel(props) {
    const { adClass, options } = props;
    const carouselRef = useRef(null);
    const defaultOptions = {
        items: 3,
        loop: false,
        margin: 0,
        responsiveClass: "true",
        nav: false,
        navText: ['<i class="d-icon-angle-left">', '<i class="d-icon-angle-right">'],
        navElement: "button",
        dots: false,
        smartSpeed: 400,
        autoplay: false,
        autoHeight: false
        // autoplayTimeout: 5000,
    };

    let settings = Object.assign({}, defaultOptions, options);

    return (
        props.children ?
            props.children.length > 0 || (props.children && props.children.length === undefined) ?
                <Carousel ref={carouselRef} className={`owl-carousel ${adClass}`} options={settings}>
                    {props.children}
                </Carousel >
                : ""
            : ""
    );
}

export default React.memo(OwlCarousel);