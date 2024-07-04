import React from "react";
import Button from "./Button";

const CourseLink = (props) => {
  return (
    <>
      <div className="py-8 w-[350px] h-[462px] bg-categoryBg relative">
        <h3 className="text-2xl text-left ml-8">{props.title}</h3>
        <div className="items-center p-8 flex gap-2 border-b border-gray-500 mb-3">
          <p>
            {props.mission} ta <span className={props.opacity}>topshiriq</span>
          </p>
          <p>
            | {props.piece} ta <span className={props.opacity}>bo'lim</span>
          </p>
        </div>
        <p className="px-8">{props.describtion}</p>
        <Button
          class="bg-courseBtn absolute bottom-4 text-white p-3 text-lg ml-8 mt-3 rounded-sm"
          text="Kusrni boshlash →"
        />
      </div>
    </>
  );
};

export default CourseLink;
