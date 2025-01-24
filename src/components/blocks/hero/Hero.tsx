import Image from "next/image";
import image1 from "@/img/hero/image1.png";
import image2 from "@/img/hero/image2.png";
import "./hero.scss";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="hero_section">
      <Image src={image1} alt="hero_image1" className="hero_image1" />
      <Image src={image2} alt="hero_image2" className="hero_image2" />

      <h1 className="hero_title">
        <span>create</span> <span>your</span> <span>interior</span>{" "}
        <span>space.</span>
      </h1>

      <div className="hero_description">
        <h3 className="hero_description_title">Customized furniture </h3>
        <p className="hero_description_text">
          In building furniture we are always confident to make customers always
          satisfied with our work, therefore we have a good value rating
        </p>
      </div>
    </section>
  );
};

export default Hero;
