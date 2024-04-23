import Image from "next/image";

import { Skeleton } from "@/components/ui/skeleton"

export function Loading(){
    return (
        <>
            <Skeleton className="w-full h-[250px] bg-[#EAEAEA]"/>
            <Skeleton className="w-full h-[250px] bg-[#EAEAEA]"/>
            <Skeleton className="w-full h-[250px] bg-[#EAEAEA]"/>
            <Skeleton className="w-full h-[250px] bg-[#EAEAEA]"/>
            <Skeleton className="w-full h-[250px] bg-[#EAEAEA]"/>
            <Skeleton className="w-full h-[250px] bg-[#EAEAEA]"/>
            <Skeleton className="w-full h-[250px] bg-[#EAEAEA]"/>
            <Skeleton className="w-full h-[250px] bg-[#EAEAEA]"/>
            <Skeleton className="w-full h-[250px] bg-[#EAEAEA]"/>
            <Skeleton className="w-full h-[250px] bg-[#EAEAEA]"/>
            <Skeleton className="w-full h-[250px] bg-[#EAEAEA]"/>
            <Skeleton className="w-full h-[250px] bg-[#EAEAEA]"/>
        </>
    )
}

export function UserCard({name, mail, phone, job, avatar, banner, socials} : any){
    return (
        <div className="bg-[#EAEAEA] rounded-md overflow-hidden flex flex-col relative drop-shadow-md">
            <div className="bg-black w-full h-[100px] overflow-hidden relative bg-center bg-cover" style={{ backgroundImage: `url(${banner})` }}></div>
            <div className="rounded-full absolute top-[25px] right-[20px] border-[3px] border-[#EAEAEA]">
                <Image width={100} height={100} src={avatar} alt="" className="rounded-full h-[100px] w-[100px]"/>
            </div>
            <div className="w-full mt-[25px] flex py-1 gap-3 px-8">
                <div className="w-2/3">
                    <div className="flex items-center gap-2 font-iransans">
                        <span className="font-bold text-[20px]">{name}</span>
                        <span className="font-semibold text-[10px]">{job}</span>
                    </div>
                    <div className="font-mono text-[15px]">{mail}</div>
                </div>
                <div className="w-1/3 flex justify-center items-center">
                    <div className="bg-[#d6d6d65b] px-4 py-3 rounded-md font-bold font-iransans">{phone}+</div>
                </div>
            </div>
            <div className="w-full px-4 py-1">
                <div className="w-full h-full border-t-[1px] border-[#00000023] flex flex-row gap-2 justify-center items-center py-3">
                    {
                        Object.entries<any>(socials).map(([key, value]: [string, string]) => {
                            if (value && value?.length > 0){
                                return (
                                    <a target="_blank" href="https://google.com" className="bg-[#adadad2c] hover:bg-[#adadad86] w-12 h-12 p-[5px] rounded-sm cursor-pointer transition duration-300" key={key+value}>
                                        <Image width={1000} height={1000} src={`/images/${key}.png`} alt="" className="rounded-full"/>
                                    </a>
                                )
                            }else
                            return null
                        })
                        // socials.telegram.length > 0 && (

                        // )
                    }

                </div>
            </div>
        </div>
    )
}