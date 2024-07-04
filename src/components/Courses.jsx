import React from "react";
import Button from "./Button";
import CourseLink from "./CourseLink";
import { data } from "autoprefixer";

const Courses = () => {
  let courseDetails = [
    {
      title: "JAVA",
      mission: 128,
      piece: 38,
      opacity: "opacity-60",
      describtion:
        "Java - silno tipirovannyy obyektno orientirovann yysag yazyk programmirovaniya, razrabotannyy kompaniey Sun Microsystems. V nastoyashchee vremya proekt matlenejit OpenSource i rasprof ranya yaetsya po litsenzii GPL. V OpenJDK vnosyat vklad krupnye kompanii, sochi kak - Oracle, RedHat, IBM, Google",
    },
    {
      title: "PYTHON",
      mission: 122,
      piece: 13,
      opacity: "opacity-60",
      describtion: `Python - vysokourovnevyy yazyk programirova niya obshchego naznacheniya, orientirovannyy na povyshenie proizvoditelnosti razrabotchika i chitaemosti koda. Syntaxxd Python minimalis tichen. V toni vremya standartnaya biblioteka vklyuchaet bolshoy ob'yom poleznyx fonksiyont`,
    },
    {
      title: "GO",
      mission: 122,
      piece: 13,
      opacity: "opacity-60",
      describtion: `Go - kompilyumemyy multilogo yazyk program movaniya, razrabotannyy vnutri kompanii Google. Razrabotka Go nachalas v sentabr 2007 goda, ego neposredstvennym projektirovaniem zanima lis Robert Grizmer, Rob Pikk i Ken Thompson, zanimavshiesya do etogo proektom razrabotki `,
    },
  ];
  return (
    <div className="px-165 py-10 pb-[137px] bg-white">
      <div className="mb-20 flex justify-between">
        <h2 className="text-3xl">Barcha kurslar</h2>
        <Button
          class="border border-black py-2 px-8 text-black rounded-md hover:shadow-lg"
          text="Barchasi"
        />
      </div>
      <div className="flex gap-10 justify-between">
        {courseDetails.map((data) => {
          return (
            <CourseLink
              title={data.title}
              mission={data.mission}
              piece={data.piece}
              opacity={data.opacity}
              describtion={data.describtion}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Courses;
