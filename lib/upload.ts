import fs from 'fs';
import path from 'path';

export async function upload(file: any){
    return new Promise(async (resolve, reject) => {
        if (file.name != 'undefined'){
            const id = crypto.randomUUID()
            var filename: any = file.name.replace(' ', '-').replace('_', '-')
            filename = `${id}-${filename}`
            const bytes = await file.arrayBuffer()
            fs.writeFileSync(path.join(process.cwd(), 'public/u/', filename), Buffer.from(bytes))
            resolve(`/u/${filename}`)
        }
        resolve(null)
    })
}

export async function remove(filename: any) {
    return new Promise(async (resolve, reject)=>{
        filename = filename.replace(`/u/`, '')
        if (fs.existsSync(path.join(process.cwd(), 'public/u/', filename)))
            await fs.rmSync(path.join(process.cwd(), 'public/u/', filename))
        resolve(true)
    })
}