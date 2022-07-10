import { SlideType, Slide } from "../Slide";
import { Slider, SwiperSlide, SwiperProps } from "../Slider";

interface SlideSliderProps {
    slides: SlideType[];
}

export function SlideSlider({ slides }: SlideSliderProps) {
    
    const settings: SwiperProps = {
        spaceBetween: 50,
        slidesPerView: 3,
        navigation: true,
        pagination: {
            clickable: true,
        },
        draggable: true,
        loop: false,
    };

    return(
        <Slider settings={settings}>
            {slides.map((slide) => (
                <SwiperSlide key={slide.title}>
                    <Slide slide={slide} />
                </SwiperSlide>
            ))}
        </Slider>
    )
}