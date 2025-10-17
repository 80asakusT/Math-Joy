"use client";

import { Bricolage_Grotesque } from "next/font/google";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FEEDBACK } from "@/contants/home";

const bricolageGrotesque = Bricolage_Grotesque({ subsets: ["latin"] });

export function Feedback() {
  return (
    <div className="flex flex-col items-center pt-32 px-5 md:px-0">
      <div
        className={`${bricolageGrotesque.className} text-[64px] leading-[80px] font-semibold`}
      >
        Cộng Đồng Chia sẻ
      </div>
      <div className="text-secondary text-center my-8 md:mt-2">
        Những đánh giá giúp chúng tôi tốt lên mỗi ngày
      </div>
      <div
        className="md:max-w-3xl max-w-sm lg:max-w-5xl xl:max-w-7xl mx-auto w-full"
      >
        <Swiper
          // slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          // pagination={{
          //   clickable: true,
          //   bulletClass: 'mb-4'
          // }}
          modules={[Autoplay]}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {FEEDBACK.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col p-8 gap-8 lg:rt-r-p-8 rounded-[40px] bg-[#F4F6F8] w-[340px] min-h-[240px]">
                <div>{item.feedback}</div>
                <div className="flex items-center gap-4">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="/images/home/img_23.png"
                  />
                  <div>
                    <div className="font-semibold">{item.name}</div>
                    <div className="text-secondary">{item.username}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}