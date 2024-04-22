
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"

export function CreateContact(){
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="bg-blue-500 hover:bg-blue-600 transition duration-300 h-[50px] w-[50px] rounded-full fixed left-5 bottom-[70px] flex justify-center items-center font-bold text-[18px] text-white cursor-pointer">+</div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[800px] ">
            <DialogHeader className="font-iransans">
                <DialogTitle>اضافه کردن اطلاعات</DialogTitle>
                <DialogDescription>
                    لطفا اطلاعات خود را برای ثبت در سایت کامل کنید
                </DialogDescription>
            </DialogHeader>
                <div className="w-full flex font-iransans ">
                    <div className="w-1/2 border-l-[1px] border-[#00000023] flex flex-col gap-2 py-2 pl-5">
                        <div>
                            <Label htmlFor="name" className="text-right font-semibold text-[12px]">نام کامل</Label>
                            <Input id="name" placeholder="نام کامل خود را وارد کنید" />
                        </div>
                        <div>
                            <Label htmlFor="mail" className="text-right font-semibold text-[12px]">پست اینترنتی</Label>
                            <Input id="mail" placeholder="پست اینترنتی خود را وارد کنید" />
                        </div>
                        <div>
                            <Label htmlFor="mail" className="text-right font-semibold text-[12px]">شماره همراه</Label>
                            <Input id="mail" placeholder="شماره همراه خود را وارد کنید" />
                        </div>
                        <div>
                            <Label htmlFor="mail" className="text-right font-semibold text-[12px]">شغل</Label>                
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="شغل خود را انتخاب کنید"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="p">برنامه نویس</SelectItem>
                                        <SelectItem value="d">طراح</SelectItem>
                                        <SelectItem value="b">بازار یاب</SelectItem>
                                        <SelectItem value="g">گیمر</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Label htmlFor="mail" className="text-right font-semibold text-[12px]">عکس</Label>
                            <Input type="file"/>
                        </div>
                        <div>
                            <Label htmlFor="mail" className="text-right font-semibold text-[12px]">بنر</Label>
                            <Input type="file"/>
                        </div>
                    </div>
                    <div className="w-1/2 flex flex-col gap-2 py-2 pr-5">
                        <div>
                            <Label htmlFor="name" className="text-right font-semibold text-[12px]">ایدی تلگرام</Label>
                            <Input id="name" placeholder="ایدی خود را وارد کنید" />
                        </div>
                        <div>
                            <Label htmlFor="name" className="text-right font-semibold text-[12px]">ایدی اینستاگرام</Label>
                            <Input id="name" placeholder="ایدی خود را وارد کنید" />
                        </div>
                        <div>
                            <Label htmlFor="name" className="text-right font-semibold text-[12px]">ایدی دیسکورد</Label>
                            <Input id="name" placeholder="ایدی خود را وارد کنید" />
                        </div>
                        <div>
                            <Label htmlFor="name" className="text-right font-semibold text-[12px]">ایدی فیسبوک</Label>
                            <Input id="name" placeholder="ایدی خود را وارد کنید" />
                        </div>
                        <div>
                            <Label htmlFor="name" className="text-right font-semibold text-[12px]">ایدی توییتر</Label>
                            <Input id="name" placeholder="ایدی خود را وارد کنید" />
                        </div>
                        <div>
                            <Label htmlFor="name" className="text-right font-semibold text-[12px]">ایدی لینکدین</Label>
                            <Input id="name" placeholder="ایدی خود را وارد کنید" />
                        </div>
                    </div>
                </div>

                <DialogFooter>
                    <Button type="submit" className="font-iransans">ثبت تغییرات</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}