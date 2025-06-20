import Spline from "@splinetool/react-spline";

export default function AboutSection() {
    return (
        <section className="w-full h-screen flex flex-row justify-center items-center relative">
            
            <div className="w-[950px] h-[700px] absolute left-[150]">
                {/* <h1 className="hero-title w-fit text-white text-[30px] rotate-270 absolute top-[600]">My Skills</h1> */}
            </div>

            <div className="w-[600px] h-[700px] bg-[rgba(17,17,17,0.4)] rounded-2xl shadow-lg absolute right-[150] p-[30px]">
                <p className="text-[20px] text-white">Миний нэрийг Бэлгүдэй гэдэг мэдээллийн технологийн чиглэлээр 'Indra Cyber Institute' 1 жилийн хугацаанд амжилттай суралцсан програмист мэргэжилтэй. <br /> Вэб хөгжүүлэлтийн чиглэлээр мэргэшсэн бөгөөд Javascript, React, Next.js, MongoDB, MySQL зэрэг технологиудаар олон төсөл дээр амжилттай ажилласан туршлагатай. Багаар хамтран ажиллах, асуудлыг шийдвэрлэх, цаг барих зэрэг чадвартай. <br /> Шинэлэг технологи судлах, тасралтгүй хөгжих эрмэлзэлтэй. Үүрэг хариуцлагаа ухамсарлаж, хугацаанд нь чанартай ажил гүйцэтгэхийг эрхэмлэдэг. <br /> Цаашид олон олон төсөлд оролцож, мэргэжлийн ур чадвараа улам хөгжүүлэх зорилготой.</p>
            </div>
            
        </section>
    );
}
