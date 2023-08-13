import React from "react";

interface Props {
  technologyFeatures: string[];
}

function Technology_tag({ technologyFeatures }: Props) {
  return (
    <div className="w-full h-auto flex flex-row items-center flex-wrap mt-[10px] ">
      <div
        className={`tag ${
          technologyFeatures.includes("html") ? "" : " hidden"
        } bg-[#E54F24] text-white px-[13px] rounded-lg mb-[10px] mr-[10px]`}
      >
        Html
      </div>
      <div
        className={`tag ${
          technologyFeatures.includes("css") ? "" : " hidden"
        } bg-[#2062AF] text-white px-[13px] rounded-lg mb-[10px] mr-[10px] `}
      >
        Css
      </div>
      <div
        className={`tag ${
          technologyFeatures.includes("javascript") ? "" : " hidden"
        } bg-[#F0DB4F]    text-black px-[13px] rounded-lg mb-[10px] mr-[10px]`}
      >
        Javascript
      </div>

      <div
        className={`tag ${
          technologyFeatures.includes("tailwind") ? "" : " hidden"
        } bg-[#4ad7f0]    text-[#258899] px-[13px] rounded-lg mb-[10px] mr-[10px]`}
      >
        Tailwind
      </div>

      <div
        className={`tag ${
          technologyFeatures.includes("react") ? "" : " hidden"
        }  bg-[#83e0f8]    text-[#226879] px-[13px] rounded-lg mb-[10px] mr-[10px]`}
      >
        React
      </div>

      <div
        className={`tag ${
          technologyFeatures.includes("reactnative") ? "" : " hidden"
        } bg-[#83e0f8]    text-[#1b859f] px-[13px] rounded-lg mb-[10px] mr-[10px]`}
      >
        React Native
      </div>

      <div
        className={`tag ${
          technologyFeatures.includes("tauri") ? "" : " hidden"
        } bg-[#FFC131]    text-[#44a1ab] px-[13px] rounded-lg mb-[10px] mr-[10px]`}
      >
        Tauri
      </div>

      <div
        className={`tag ${
          technologyFeatures.includes("redux") ? "" : " hidden"
        }  bg-[#764ABC]    text-white px-[13px] rounded-lg mb-[10px] mr-[10px]`}
      >
        Redux
      </div>
      <div
        className={`tag ${
          technologyFeatures.includes("reactquery") ? "" : " hidden"
        }  bg-[#FF4154]    text-white px-[13px] rounded-lg mb-[10px] mr-[10px]`}
      >
        ReactQuery
      </div>

      <div
        className={`tag ${
          technologyFeatures.includes("typescript") ? "" : " hidden"
        }  bg-[#2D79C7]    text-[#b0cae4] px-[13px] rounded-lg mb-[10px] mr-[10px]`}
      >
        TypeScript
      </div>
      <div
        className={`tag ${
          technologyFeatures.includes("nextjs") ? "" : " hidden"
        }  bg-[#13224a]    text-[#fdfdfd]  px-[13px] rounded-lg mb-[10px] mr-[10px]`}
      >
        NextJs
      </div>
      <div
        className={`tag ${
          technologyFeatures.includes("nodejs") ? "" : " hidden"
        }  bg-[#79B562]    text-[#fdfdfd] px-[13px] rounded-lg mb-[10px] mr-[10px]`}
      >
        NodeJs
      </div>
      <div
        className={`tag ${
          technologyFeatures.includes("golang") ? "" : " hidden"
        }  bg-[#00ACD7]    text-[#fdfdfd] px-[13px] rounded-lg mb-[10px] mr-[10px]`}
      >
        Go
      </div>
      <div
        className={`tag ${
          technologyFeatures.includes("gin") ? "" : " hidden"
        }  bg-[#0090D1]    text-[#f1db4b] px-[13px] rounded-lg mb-[10px] mr-[10px]`}
      >
        Gin
      </div>
      <div
        className={`tag ${
          technologyFeatures.includes("expressjs") ? "" : " hidden"
        }  bg-[#333331]    text-gray-300 px-[13px] rounded-lg mb-[10px] mr-[10px]`}
      >
        ExpressJs
      </div>

      <div
        className={`tag ${
          technologyFeatures.includes("mongodb") ? "" : " hidden"
        }  bg-[#10AA50]    text-[#fdfdfd]  px-[13px] rounded-lg mb-[10px] mr-[10px]`}
      >
        MongoDb
      </div>
      <div
        className={`tag ${
          technologyFeatures.includes("firebase") ? "" : " hidden"
        }  bg-[#e9b422]    text-[#fdfdfd]  px-[13px] rounded-lg mb-[10px] mr-[10px]`}
      >
        Firebase
      </div>
      <div
        className={`tag ${
          technologyFeatures.includes("postgresql") ? "" : " hidden"
        }  bg-[#336791]    text-[#fdfdfd]  px-[13px] rounded-lg mb-[10px] mr-[10px]`}
      >
        PostgreSQL
      </div>
      <div
        className={`tag ${
          technologyFeatures.includes("mysql") ? "" : " hidden"
        }  bg-[#01526A]    text-[#fdfdfd] px-[13px] rounded-lg mb-[10px] mr-[10px] `}
      >
        MySQL
      </div>
      <div
        className={`tag ${
          technologyFeatures.includes("framermotion") ? "" : " hidden"
        }  bg-[#ff13ffd3]   text-[#fdfdfd] px-[13px] rounded-lg mb-[10px] mr-[10px]`}
      >
        Framer Motion
      </div>
      <div
        className={`tag ${
          technologyFeatures.includes("graphql") ? "" : " hidden"
        }   bg-[#E632AD]     text-[#fdfdfd] px-[13px] rounded-lg mb-[10px] mr-[10px]`}
      >
        Graphql
      </div>
      <div
        id="cursive"
        className={`tag ${
          technologyFeatures.includes("jwt") ? "" : " hidden"
        }  bg-[#000000]    text-[#fdfdfd] flex flex-row font-semibold px-[13px] rounded-lg mb-[10px] mr-[10px]`}
      >
        <span className=" text-[#CB37F2] mr-[3px]">Json</span>
        <span className=" text-[#00B0E5]  mr-[3px]">Web</span>
        <span className=" text-[#EE0156]">Tocken</span>
      </div>
      <div
        className={`tag ${
          technologyFeatures.includes("prisma") ? "" : " hidden"
        }  bg-[#123A50]    text-[#fdfdfd]  px-[13px] rounded-lg mb-[10px] mr-[10px]`}
      >
        Prisma
      </div>
      <div
        className={`tag ${
          technologyFeatures.includes("docker") ? "" : " hidden"
        }  bg-[#2496ED]    text-[#fdfdfd]  px-[13px] rounded-lg mb-[10px] mr-[10px]`}
      >
        Docker
      </div>
      <div
        className={`tag ${
          technologyFeatures.includes("stripe") ? "" : " hidden"
        }  bg-[#665BFF]    text-[#fdfdfd]  px-[13px] rounded-lg mb-[10px] mr-[10px]`}
      >
        Stripe
      </div>
      <div
        className={`tag ${
          technologyFeatures.includes("expo") ? "" : " hidden"
        }  bg-[#422EDF]  text-[#fdfdfd]  px-[13px] rounded-lg mb-[10px] mr-[10px]`}
      >
        Expo
      </div>
    </div>
  );
}

export default Technology_tag;
