import Image from "next/image";
import { Input } from "@/components/ui/input"
import { UserCard } from "@/components/contact/card";
import { CreateContact } from "@/components/contact/createContact";

export default function Home() {
    return (
        <>
            <div className="w-full h-[70px] flex bg-[#EAEAEA]">
                <div className="w-1/4 h-full"></div>
                <div className="w-2/4 h-full flex justify-center items-center">
                    <Input className="w-[80%] text-center font-iransans" type="text" placeholder="دنبال شخص خاصی میگردی؟" />
                </div>
            </div>
            <div className="w-screen h-[830px] py-5 relative overflow-x-hidden ">
                <div className="w-full grid grid-cols-4 gap-5 px-10">
                    <UserCard />
                    <UserCard />
                </div>
                <CreateContact />
            </div>
            <div className="w-full h-[50px] bg-[#EAEAEA] flex px-8">
                <div className="w-1/3 flex justify-start items-center gap-2 font-iransans text-[13px] text-gray-600">طراحی شده توسط سهیل رضایی | <span>نسخه (1.0.0)</span></div>
                <div className="w-1/3 flex justify-center items-center font-iransans text-gray-800"> دفترچه تلفن سوشیال</div>
            </div>
        </>
    );
}
