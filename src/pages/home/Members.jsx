import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import member1 from "../../assets/images/member1.jpg";
import member2 from "../../assets/images/member2.jpg";
import member3 from "../../assets/images/member3.jpg";
import member4 from "../../assets/images/member4.jpg";
import member5 from "../../assets/images/member5.jpg";
import member6 from "../../assets/images/member6.jpg";

const Members = () => {
  return (
    <div className="mt-16 mb-10">
      <h2 className="text-4xl mb-4 font-bold">Our Recent team members</h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="border-[1px]">
          <img src={member1} alt="" />
          <div className="p-4">
            <p>Seniors</p>
            <h2 className="text-xl mb-4 font-semibold">Jim Moreana</h2>
            <p className="p-1 bg-[#9f0ee1] w-32 text-center rounded-xl text-white">
              Management
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="border-[1px]">
          <img src={member2} alt="" />
          <div className="p-4">
            <p>Seniors</p>
            <h2 className="text-xl mb-4 font-semibold">James Gardenar</h2>
            <p className="p-1 bg-[#9f0ee1] w-32 text-center rounded-xl text-white">
              Management
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="border-[1px]">
          <img src={member3} alt="" />
          <div className="p-4">
            <p>Inperrm</p>
            <h2 className="text-xl mb-4 font-semibold">Jone Doe</h2>
            <p className="p-1 bg-[#9f0ee1] w-32 text-center rounded-xl text-white">
              Management
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="border-[1px]">
          <img src={member4} alt="" />
          <div className="p-4">
            <p>Inperrm</p>
            <h2 className="text-xl mb-4 font-semibold">Jane Buffet</h2>
            <p className="p-1 bg-[#9f0ee1] w-32 text-center rounded-xl text-white">
              Management
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="border-[1px]">
          <img src={member5} alt="" />
          <div className="p-4">
            <p>Inperrm</p>
            <h2 className="text-xl mb-4 font-semibold">Jane Buffet</h2>
            <p className="p-1 bg-[#9f0ee1] w-32 text-center rounded-xl text-white">
              Management
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="border-[1px]">
          <img src={member6} alt="" />
          <div className="p-4">
            <p>Inperrm</p>
            <h2 className="text-xl mb-4 font-semibold">Jane Buffet</h2>
            <p className="p-1 bg-[#9f0ee1] w-32 text-center rounded-xl text-white">
              Management
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Members;
