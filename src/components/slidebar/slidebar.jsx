import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { SlidebarBox, LampImg } from "./slidebar.styled";
import lamp from "./assets/lamp.png";

export default function Slidebar() {
    return (
        <div style={{ maxWidth: "1314px", margin: "20px auto" }}>
            <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                slidesPerView={1}
                spaceBetween={20}
                grabCursor={true}
                style={{ height: "400px" }}
            >
                <SwiperSlide>
                    <SlidebarBox>
                        <div className="text-wrapper">
                            <span className="text-span">
                                Скидка 15% <br />
                                на все подвесные светильники <br />
                                <span className="text-data-span">до 5 февраля</span>
                            </span>
                        </div>

                        <div className="img-wrapper">
                            <LampImg src={lamp} alt="lamp" />
                        </div>
                    </SlidebarBox>
                </SwiperSlide>

                <SwiperSlide>
                    <SlidebarBox>
                        <div className="text-wrapper">
                            <span className="text-span">
                                Скидка 15% <br />
                                на все подвесные светильники <br />
                                <span className="text-data-span">до 5 февраля</span>
                            </span>
                        </div>

                        <div className="img-wrapper">
                            <LampImg src={lamp} alt="lamp" />
                        </div>
                    </SlidebarBox>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
