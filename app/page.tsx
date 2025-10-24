import Card from "@/components/ui/Card";
import Sidebar from "@/components/Sidebar";
import { MdFastfood } from "react-icons/md";
import { PiBowlFood } from "react-icons/pi";
import { RiDrinks2Fill } from "react-icons/ri";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div>
        <Sidebar />
      </div>

      {/*main menu*/}
      <div>
        <h1 className="font-bold text-2xl my-5">Recomendation</h1>
        <div className="grid md:grid-cols-5 grid-cols-4 md:gap-5 gap-1">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      </div>
      {/*main menu*/}
      <div className=" flex m-2">
        <div className="flex m-2 px-5 basecolor rounded-full text-white text-center justify-center items-center cursor-pointer"><PiBowlFood /> <div>Food</div></div>
        <div className="flex m-2 px-5 basecolor rounded-full text-white text-center justify-center items-center cursor-pointer"><RiDrinks2Fill /> <div>Food</div></div>
        <div className="flex m-2 px-5 basecolor rounded-full text-white text-center justify-center items-center cursor-pointer"><MdFastfood /> <div>Food</div></div>
      </div>
      {/*main menu*/}
      <div>
        <h1 className="font-bold text-2xl my-5">Main Menu</h1>
        <div className="grid grid-cols-5 gap-5">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      </div>
    </div>
  );
}
