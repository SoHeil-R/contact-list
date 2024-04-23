import MongoDb from "@/lib/mongodb";
import contacts from "@/lib/models/contacts"

import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest){
    try {
        await MongoDb()
        let data = await request.json()
        console.log(data)
        console.log(data.name)
        let contactCount = await contacts.countDocuments({ name: { $regex: data.name, $options: "i" } });
        let contactlist;
        if (data.name.length > 0)
            contactlist = await contacts.find({ name: { $regex: data.name, $options: "i" } }, {createdAt: 0, updatedAt: 0, __v: 0});
        else
            contactlist = await contacts.find({}, {createdAt: 0, updatedAt: 0, __v: 0}).limit(data.limit);
        return NextResponse.json({data: contactlist, count: contactCount})
    } catch (e: any) {
        console.log(e.message)
        return NextResponse.json({message: "server_error"})
    }
}