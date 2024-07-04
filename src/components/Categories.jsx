import Button from "./Button";
import CategoryLink from "./CategoryLink";

import pcImg from "../assets/images/pcImg.svg";
import paletteImg from "../assets/images/palette.svg";
import buisnessImg from "../assets/images/buisness.svg";
import moneyImg from "../assets/images/money.svg";
import chartimg from "../assets/images/chart.svg";
import medalImg from "../assets/images/medal.svg";
import shieldImg from "../assets/images/shield.svg";
import healthImg from "../assets/images/health.svg";

const Categories = () => {
  let linkArr = [
    {
      img: pcImg,
      text: "Dasturlash",
    },
    {
      img: paletteImg,
      text: "Dizayn",
    },
    {
      img: buisnessImg,
      text: "Biznes",
    },
    {
      img: moneyImg,
      text: "Buxgalteriya",
    },
    {
      img: chartimg,
      text: "Marketing",
    },
    {
      img: medalImg,
      text: "Menejment",
    },
    {
      img: shieldImg,
      text: "Xavfsizlik",
    },
    {
      img: healthImg,
      text: "Salomatlik",
    },
  ];
  return (
    <>
      <div className="px-165 py-10 pb-[137px] bg-categoryBg">
        <div className="mb-20 flex justify-between">
          <h2 className="text-3xl">Top kategoriyalar</h2>
          <Button
            class="border border-allBtnClr py-2 px-8 text-allBtnClr rounded-md hover:shadow-lg"
            text="Barchasi"
          />
        </div>

        <div className="flex flex-wrap justify-between gap-10">
          {linkArr.map((data) => {
            return (
              <CategoryLink
                class="flex py-5 px-12 gap-2 w-[230px] rounded-sm items-center hover:shadow-xl bg-white"
                src={data.img}
                text={data.text}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Categories;
