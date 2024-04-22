import Image from "next/image";

export function UserCard(){
    return (
        <div className="bg-[#EAEAEA] rounded-md overflow-hidden flex flex-col relative drop-shadow-md">
            <div className="bg-black w-full h-[100px] overflow-hidden relative bg-[url('/images/banner.png')] bg-center bg-cover">
                {/* <div className="scale-100">
                    <Image width={1000} height={1000} src={'/images/soli.png'} alt=""/>
                </div> */}
            </div>
            <div className="h-[100px] w-[100px] rounded-full absolute top-[25px] right-[20px] border-[3px] border-[#EAEAEA]">
                <Image width={1000} height={1000} src={'/images/soli.png'} alt="" className="rounded-full"/>
            </div>
            <div className="w-full mt-[25px] flex py-1 gap-3 px-8">
                <div className="w-2/3">
                    <div className="flex items-center gap-2 font-iransans">
                        <span className="font-bold text-[20px]">سهیل رضایی</span>
                        <span className="font-semibold text-[10px]">برنامه نویس</span>
                    </div>
                    <div className="font-mono text-[15px]">soheil@gmail.com </div>
                </div>
                <div className="w-1/3 flex justify-center items-center">
                    <div className="bg-[#d6d6d65b] px-4 py-3 rounded-md font-bold font-iransans">989011455635+</div>
                </div>
            </div>
            <div className="w-full px-4 py-1">
                <div className="w-full h-full border-t-[1px] border-[#00000023] flex flex-row gap-2 justify-center items-center py-3">
                    <div className="bg-[#2aa2da2c] hover:bg-[#2aa2da63] w-12 h-12 p-[5px] rounded-sm cursor-pointer transition duration-300">
                        <Image width={1000} height={1000} src={'/images/telegram.png'} alt="" className="rounded-full"/>
                    </div>
                    <div className="bg-[#2aa2da2c] hover:bg-[#2aa2da63] w-12 h-12 p-[5px] rounded-sm cursor-pointer transition duration-300">
                        <Image width={1000} height={1000} src={'/images/telegram.png'} alt="" className="rounded-full"/>
                    </div>
                    <div className="bg-[#2aa2da2c] hover:bg-[#2aa2da63] w-12 h-12 p-[5px] rounded-sm cursor-pointer transition duration-300">
                        <Image width={1000} height={1000} src={'/images/telegram.png'} alt="" className="rounded-full"/>
                    </div>
                    <div className="bg-[#2aa2da2c] hover:bg-[#2aa2da63] w-12 h-12 p-[5px] rounded-sm cursor-pointer transition duration-300">
                        <Image width={1000} height={1000} src={'/images/telegram.png'} alt="" className="rounded-full"/>
                    </div>
                </div>
            </div>
        </div>
    )
}