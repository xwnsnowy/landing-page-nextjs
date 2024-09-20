import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import Image from "next/image";

const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-20 overflow-x-clip">
      <div className="container">
        <div className="max-w-[540px] mx-auto md:max-w-none">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="text-center text-3xl md:text-[54px] md:leading-[54px] font-extrabold  bg-gradient-to-b from-slate-500 to-[#001E80] text-transparent bg-clip-text my-5">
            A more effective way to track progress
          </h2>
          <p className="section-description">
            Effortlessly turn your ideas into a fully functional, responsive,
            SaaS website in just minutes with this template.
          </p>
        </div>

        <div className="relative">
          <Image src={productImage} alt="Product Image" className="mt-5" />
          <Image
            src={pyramidImage}
            alt="Pyramid Image"
            height={262}
            className="hidden md:block absolute -right-36 -top-32"
          />
          <Image
            src={tubeImage}
            alt="Tube Image"
            height={248}
            className="hidden md:block absolute bottom-24 -left-36"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
