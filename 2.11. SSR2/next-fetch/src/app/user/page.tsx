import { IUser } from "@/types/user"

async function getData(): Promise<IUser[]>{
    const res = await fetch ("http://localhost:2000/user")

    if (!res.ok) {
        throw new Error("Failed to fetch data")
    }

    return res.json()
}

export default async function UserPage() {
    const data = await getData()
    return (
        <div className="flex justify-center items-center pt-10">
            
            <table  className="border-collapse border border-slate-500 w-96 text-center">
                <thead >
                    <tr className="bg-slate-300">
                        <th className="min-w-[40px] border border-slate-400">No</th>
                        <th className="min-w-[200px] border border-slate-400">Username</th>
                        <th className="min-w-[200px] border border-slate-400">Email</th>
                        <th className="min-w-[40px] border border-slate-400 w-[40px]"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                    data.map((item, idx) => {
                        return(
                            <tr key={idx} className="border border-slate-400">
                                <td className="p-1 border border-slate-400">{idx +1}</td>
                                <td className="border border-slate-400">{item.username}</td>
                                <td className="border border-slate-400">{item.email}</td>
                                <td className="border border-slate-400">del</td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
        </div>
    )
}