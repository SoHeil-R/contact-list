'use client';
import Image from "next/image";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react";
import { useRouter } from "next/navigation";

export function CreateContact({changeData} : any){
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [phones, setPhones]: any = useState([]);
    const [pid, setPid] = useState('');
    const [platform, setPlatform] = useState('');
    const [socials, setSocials]: any = useState([]);

    function addPhone() {
        setPhones((pr: any)=>{
            let ophone = [...pr];
            ophone.push({key: ophone.length + 1,  value: ''});
            return ophone;
        })
    }

    function removePhone(key: number){
        let index = phones.findIndex((e: any)=> e.key === key);
        setPhones((pr: any)=>{
            let ophone = [...pr];
            ophone.splice(index, 1);
            return ophone;
        })
    }

    function addSoicals(){
        if (pid.length <= 0 || platform.length <= 0) return;
        setSocials((pr: any)=>{
            let oSocials = [...pr];
            oSocials.push({username: pid, platform: platform});
            return oSocials;
        })
        setPid('');
    }

    function removeSoicals(index: number){
        setSocials((pr: any)=>{
            let oSocials = [...pr];
            oSocials.splice(index, 1);
            return oSocials;
        })
    }

    async function createRequest(e: any){
        e.preventDefault();
        let formdata = new FormData(e.currentTarget);
        formdata.append('socials', JSON.stringify(socials));
        let response = await fetch('/api/create', {
            method: 'POST',
            body: formdata
        });
        let result = await response.json();
        changeData((pr: number)=>{return pr + 1});
        setOpen(false)
        setPhones([])
        setSocials([])
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <div className="bg-blue-500 hover:bg-blue-600 transition duration-300 h-[50px] w-[50px] rounded-full fixed left-5 bottom-[70px] flex justify-center items-center font-bold text-[18px] text-white cursor-pointer">+</div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[920px] ">
            <DialogHeader className="font-iransans">
                <DialogTitle>اضافه کردن اطلاعات</DialogTitle>
                <DialogDescription>
                    لطفا اطلاعات خود را برای ثبت در سایت کامل کنید
                </DialogDescription>
            </DialogHeader>
                <form onSubmit={createRequest}>
                    <div className="w-full flex font-iransans">
                        <div className="w-1/2 border-l-[1px] border-[#00000023] flex flex-col gap-2 py-2 pl-5">
                            <div>
                                <Label className="text-right font-semibold text-[12px]">نام کامل</Label>
                                <Input name="name" placeholder="نام کامل خود را وارد کنید" required />
                            </div>
                            <div>
                                <Label className="text-right font-semibold text-[12px]">پست اینترنتی</Label>
                                <Input type="email" name="mail" placeholder="پست اینترنتی خود را وارد کنید" required/>
                            </div>
                            <div>
                                <Label className="text-right font-semibold text-[12px]">شماره همراه</Label>
                                <div className="flex gap-2">
                                    <Input type="number" name="phone" placeholder="شماره همراه خود را وارد کنید" required/>
                                    <Button type="button" className="font-iransans" onClick={addPhone}>اضافه کردن</Button>
                                </div>
                                <div className={"flex flex-col gap-2 "+ (phones.length > 0 && "mt-2")}>
                                    {
                                        phones.map((table: any, index: number)=>(
                                            <div className="flex gap-2" key={`phone_${index}`}>
                                                <Input type="number" name="phone" placeholder="شماره همراه خود را وارد کنید" required value={phones[index].value} onChange={(e:any)=>{
                                                    setPhones((pr: any)=>{
                                                        let ophone = [...pr];
                                                        ophone[index].value = e.currentTarget.value;
                                                        return ophone;
                                                    })
                                                }}/>
                                                <Button type="button" className="font-iransans" variant="destructive" onClick={()=>removePhone(table.key)}>حذف کردن</Button>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div>
                                <Label className="text-right font-semibold text-[12px]">شغل</Label>                
                                <Select name="job" required>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="شغل خود را انتخاب کنید"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="برنامه نویس">برنامه نویس</SelectItem>
                                            <SelectItem value="طراح">طراح</SelectItem>
                                            <SelectItem value="بازاریاب">بازار یاب</SelectItem>
                                            <SelectItem value="گیمر">گیمر</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <Label className="text-right font-semibold text-[12px]">عکس</Label>
                                <Input type="file" name="avatar" required/>
                            </div>
                            <div>
                                <Label className="text-right font-semibold text-[12px]">بنر</Label>
                                <Input type="file" name="banner" required/>
                            </div>
                        </div>
                        <div className="w-1/2 flex flex-col gap-2 py-2 pr-5">
                            <div className="flex flex-col gap-2">
                                <Label className="text-right font-semibold text-[12px]">پلتفرم های اجتماعی</Label>
                                <div className="flex gap-1">
                                    <Select value={platform} onValueChange={setPlatform} required>
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder="پلتفرم ها"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="telegram">تلگرام</SelectItem>
                                                <SelectItem value="instagram">اینستاگرام</SelectItem>
                                                <SelectItem value="facebook">فیس بوک</SelectItem>
                                                <SelectItem value="linkedin">لینکداین</SelectItem>
                                                <SelectItem value="whatsapp">واتساپ</SelectItem>
                                                <SelectItem value="others">غیره</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    <Input placeholder={platform == "others" ? "لینک شبکه اجتماعی را وارد کنید" : "ایدی خود را وارد کنید"} value={pid}  onChange={(e: any)=>setPid(e.target.value)}/>
                                    <Button type="button" className="font-iransans" onClick={addSoicals}>اضافه کردن</Button>
                                </div>
                            </div>
                            {
                                socials.map((table: any, index: number)=>(
                                    <div className="flex gap-1" key={`socials_${index}`}>
                                        <div className="bg-[#96969636] w-[60px] flex justify-center items-center rounded-md p-1">
                                            <Image width={40} height={25} src={`/images/${table.platform}.png`} alt="" className="rounded-full"/>
                                        </div>
                                        <Input className="h-full" placeholder="ایدی یا لینک پلتفرم را قرار دهید" value={socials[index].username} onChange={(e)=>{
                                            setSocials((pr: any)=>{
                                                let oSocials = [...pr];
                                                oSocials[index].username = e.target.value;
                                                return oSocials;
                                            })
                                        }} />
                                        <Button type="button" className="font-iransans" onClick={()=>removeSoicals(index)} variant={"destructive"}>حذف کردن</Button>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit" className="font-iransans">ثبت تغییرات</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}