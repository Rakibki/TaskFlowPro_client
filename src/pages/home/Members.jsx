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
    <div className="mt-10">
      <h2 className="text-4xl font-bold">Our Recent team members</h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={member1} alt="" />
          <p>Seniors</p>
          <h2>Jim Moreana</h2>
          <p>Management</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Members;
