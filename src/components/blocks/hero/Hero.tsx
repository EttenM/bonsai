"use client";
import Image from "next/image";
import image1 from "@/img/hero/image1.png";
import image2 from "@/img/hero/image2.png";
import "./hero.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { useEffect } from "react";
import { ApolloQueryResult, gql, useQuery } from "@apollo/client";
gsap.registerPlugin(useGSAP);
type Props = {
  data: any;
};
// const Hero = (props: Props) => {
//   const t = useTranslations("HomePage.Hero");
//   const title = t("title").split(" ");

//   useGSAP(() => {
//     const tl = gsap.timeline();
//     tl.fromTo(
//       ".hero_image1_container",
//       {
//         xPercent: -100,
//       },
//       {
//         visibility: "visible",
//         xPercent: 0,
//         duration: 1.5,
//         ease: "ease",
//       },
//       "1"
//     )
//       .fromTo(
//         ".hero_image2_container",
//         {
//           xPercent: 100,
//         },
//         {
//           visibility: "visible",
//           xPercent: 0,
//           duration: 1.5,
//           ease: "ease",
//         },
//         "1"
//       )
//       .to(
//         ".hero_title span",
//         {
//           opacity: 1,
//           duration: 0.5,
//           stagger: 0.25,
//           ease: "sine",
//         },
//         "2"
//       )
//       .to(
//         ".hero_description",
//         {
//           opacity: 1,
//           duration: 0.5,
//           ease: "sine",
//         },
//         "3"
//       )
//       .fromTo(
//         ".header",
//         {
//           yPercent: -100,
//         },
//         {
//           visibility: "visible",
//           yPercent: 0,
//           duration: 0.5,
//           ease: "sine",
//         },
//         "3"
//       );
//   }, []);

//   return (
//     <section className="hero_section">
//       <div className="hero_image1_container">
//         <Image
//           src={image1}
//           alt="hero_image1"
//           className="hero_image1"
//           priority
//         />
//       </div>
//       <div className="hero_image2_container">
//         <Image
//           src={image2}
//           alt="hero_image2"
//           className="hero_image2"
//           priority
//         />
//       </div>

//       <h1 className="hero_title">
//         {title.map((word, index) => (
//           <span key={index}>{word}</span>
//         ))}
//         {/* {t("title")} */}
//         {/* <span>create</span> <span>your</span> <span>interior</span>{" "}
//         <span>space.</span> */}
//       </h1>

//       <div className="hero_description">
//         <h3 className="hero_description_title">
//           {t("hero_description_title")}
//           {/* Customized furniture  */}
//         </h3>
//         <p className="hero_description_text">
//           {t("hero_description_text")}
//           {/* In building furniture we are always confident to make customers always
//           satisfied with our work, therefore we have a good value rating */}
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Hero;

const Hero = ({ data }: Props) => {
  // const GetPosts = gql`
  //   query GetPosts {
  //     landingPages {
  //       nodes {
  //         heroBlock {
  //           title
  //           images {
  //             leftImage {
  //               node {
  //                 sourceUrl
  //               }
  //             }
  //             rightImage {
  //               node {
  //                 sourceUrl
  //               }
  //             }
  //           }
  //           rightText {
  //             text
  //             title
  //           }
  //         }
  //       }
  //     }
  //   }
  // `;
  // const { loading, error, data } = useQuery(GetPosts);
  // console.log("data", data);
  // if (loading) return "Loading...";
  // if (error) return `Error! ${error.message}`;
  const end_data = data.landingPages.nodes[0].heroBlock;

  // const t = useTranslations("HomePage.Hero");
  const title = data.landingPages.nodes[0].heroBlock.title.split(" ");

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".hero_image1_container",
      {
        xPercent: -100,
      },
      {
        visibility: "visible",
        xPercent: 0,
        duration: 1.5,
        ease: "ease",
      },
      "1"
    )
      .fromTo(
        ".hero_image2_container",
        {
          xPercent: 100,
        },
        {
          visibility: "visible",
          xPercent: 0,
          duration: 1.5,
          ease: "ease",
        },
        "1"
      )
      .to(
        ".hero_title span",
        {
          opacity: 1,
          duration: 0.5,
          stagger: 0.25,
          ease: "sine",
        },
        "2"
      )
      .to(
        ".hero_description",
        {
          opacity: 1,
          duration: 0.5,
          ease: "sine",
        },
        "3"
      )
      .fromTo(
        ".header",
        {
          yPercent: -100,
        },
        {
          visibility: "visible",
          yPercent: 0,
          duration: 0.5,
          ease: "sine",
        },
        "3"
      );
  }, []);

  return (
    <section className="hero_section">
      <div className="hero_image1_container">
        <Image
          src={end_data.images.leftImage.node.sourceUrl}
          alt="hero_image1"
          className="hero_image1"
          width={840}
          height={840}
          priority
        />
      </div>
      <div className="hero_image2_container">
        <Image
          src={end_data.images.rightImage.node.sourceUrl}
          alt="hero_image2"
          className="hero_image2"
          width={840}
          height={840}
          priority
        />
      </div>

      <h1 className="hero_title">
        {title.map((word: any, index: any) => (
          <span key={index}>{word}</span>
        ))}
        {/* {t("title")} */}
        {/* <span>create</span> <span>your</span> <span>interior</span>{" "}
        <span>space.</span> */}
      </h1>

      <div className="hero_description">
        <h3 className="hero_description_title">
          {end_data.rightText.title}
          {/* {t("hero_description_title")} */}
          {/* Customized furniture  */}
        </h3>
        <p className="hero_description_text">
          {end_data.rightText.text}

          {/* {t("hero_description_text")} */}
          {/* In building furniture we are always confident to make customers always
          satisfied with our work, therefore we have a good value rating */}
        </p>
      </div>
    </section>
  );
};

export default Hero;
