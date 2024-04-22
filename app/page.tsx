import Image from "next/image";
import { Input } from "@/components/ui/input"

export default function Home() {
    return (
        <main>
            <div className="bg-red-400 w-full h-24 flex">
                <div className="w-1/4 bg-blue-400 h-full flex justify-center items-center">
                    <span className="font-iransans text-[20px] ">دفترچه تلفن</span>
                </div>
                <div className="w-2/4 bg-blue-500 h-full flex justify-center items-center">
                    <Input className="w-[80%] text-center font-iransans" type="text" placeholder="دنبال شخص خاصی میگریدی؟" />
                </div>
            </div>
        </main>
    );
}
