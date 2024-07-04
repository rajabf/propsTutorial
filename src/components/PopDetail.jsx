import whitekDot from "../assets/images/RectangleWhite.png";
import blackDot from "../assets/images/RectangleBlack.png";

function PopDetail() {
  return (
    <div className="flex gap-1 items-center">
      <img className="w-7 h-2" src={blackDot} alt="" />
      <img className="w-7 h-2" src={blackDot} alt="" />
      <img className="w-7 h-2" src={blackDot} alt="" />
      <img className="w-7 h-2" src={whitekDot} alt="" />
      <p className="ml-2 text-gray-600">Murakkab kurs</p>
    </div>
  );
}

export default PopDetail;
