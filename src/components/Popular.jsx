import imgA from "../assets/images/popImgA.png";
import imgB from "../assets/images/popImgB.png";
import imgC from "../assets/images/popImgC.png";
import imgD from "../assets/images/popImgD.png";
import imgE from "../assets/images/popImgE.png";
import imgF from "../assets/images/popImgF.png";
import imgG from "../assets/images/popImgG.png";
import imgH from "../assets/images/popImgH.png";
import imgI from "../assets/images/popImgI.png";

import img1 from "../assets/images/popImg1.svg";
import img2 from "../assets/images/popImg2.svg";
import img3 from "../assets/images/popImg3.svg";
import img4 from "../assets/images/popImg4.svg";
import img5 from "../assets/images/popImg5.svg";
import img6 from "../assets/images/popImg6.svg";
import img7 from "../assets/images/popImg7.svg";
import img8 from "../assets/images/popImg8.svg";
import img9 from "../assets/images/popImg9.svg";

import starimg from "../assets/images/Star Copy 8.svg";
import popComImg from "../assets/images/Oval Copy 6.svg";
import PopDetail from "./PopDetail";

function Popular() {
  const imgArr = [
    {
      poster: imgA,
      userImg: img1,
    },
    {
      poster: imgB,
      userImg: img2,
    },
    {
      poster: imgC,
      userImg: img3,
    },
    {
      poster: imgD,
      userImg: img4,
    },
    {
      poster: imgE,
      userImg: img5,
    },
    {
      poster: imgF,
      userImg: img6,
    },
    {
      poster: imgG,
      userImg: img7,
    },
    {
      poster: imgH,
      userImg: img8,
    },
    {
      poster: imgI,
      userImg: img9,
    },
  ];
  let linkText = "Batafsil >";
  return (
    <div className="px-[165px] my-[97px] bg-departmentBg">
      <h2 className="mb-[38px] font-sfPro text-4xl">
        BO'LIMLAR <br />
        BO'YICHA KURSRLAR
      </h2>
      <div className="flex flex-wrap justify-between gap-10">
        {imgArr.map(function (data) {
          return (
            <div className="w-[350px] border bg-white relative">
              <img className="w-[350px] " src={data.poster} alt="" />
              <span className="absolute top-[180px] left-4 text-white bg-black outline outline-white rounded-xl text-xs px-2 py-1">
                PRO
              </span>
              <div className="p-6 border-b mb-5 ">
                <div className="flex gap-3 items-center mb-3">
                  <img src={data.userImg} alt="Course poster" />
                  <span>
                    <p>Personal Development Process</p>
                    <p>O’quv markaz</p>
                  </span>
                </div>
                <p className="mb-5">Python dasturlash tili</p>
                <PopDetail />
              </div>
              <div className="flex justify-between px-6 py-4">
                <div className="flex gap-3">
                  <img src={starimg} alt="" />
                  <p>100</p>
                  <div className="relative flex">
                    <img className="" src={popComImg} alt="commentor photo" />
                    <img
                      className="-ml-1"
                      src={popComImg}
                      alt="commentor photo"
                    />
                    <img
                      className="-ml-1"
                      src={popComImg}
                      alt="commentor photo"
                    />
                  </div>
                </div>
                <a href="/">{linkText}</a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Popular;
