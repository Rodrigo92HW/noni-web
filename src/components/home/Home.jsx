import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Autoplay, EffectCreative } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../../styles.css";

const Home = () => {

    const [thumbsSwiper, setThumbsSwiper] = useState('');

    return (
    <div className='home'>
        <div className='swiperHome'>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[Autoplay, FreeMode, Navigation, Thumbs, EffectCreative]}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                effect={"creative"}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: ["-120%", 0, -500],
                    },
                    next: {
                        shadow: true,
                        translate: ["120%", 0, -500],
                    },
                }}
                className="mySwiper2"
            >
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt='chicken'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt='scary'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt='team'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt='other'/>
                </SwiperSlide>
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt='chicken'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt='scary'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt='team'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt='other'/>
                </SwiperSlide>
            </Swiper>
        <div className='noniTitle'>
            <img className='noniIcon' src='https://i.imgur.com/uJBYjYr.png' alt='noniIcon' height='150px' width='135px'/>
            <h1>NoNi Games</h1>
        </div>
        <div className='teamDescription'>
            <div>
                Noni Games Studio es una innovadora compañía de videojuegos enfocada en crear experiencias inmersivas con tecnología de punta y narraciones cautivadoras. Tenemos una gran pasión por los juegos y un compromiso con la calidad. Estamos comprometidos a crear juegos que no solo sean divertidos y entretenidos, sino también estimulantes y socialmente conscientes, con un enfoque en la diversidad y la inclusión.
            </div>
            <br />
            <br />
            <div>
                Nos especializamos en la producción de proyectos y desarrollos independientes e indies donde unificamos todo tipo de géneros (terror, aventura, acción entre otros), diseño de personajes, niveles, modelado y animación 3D y 2D con acompañamiento de música ambiental e inmersiva. 
            </div>
        </div>
        </div>
    </div>
    )
}

export default Home;