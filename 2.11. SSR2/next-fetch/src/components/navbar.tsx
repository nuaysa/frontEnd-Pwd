import Link from "next/link";
// import { Allan } from "next/font/google"

export default function Navbar () {
    return(
        <div className="h-[60px] gap-10 bg-indigo-500 flex justify-center text-white font-semibold items-center">
            <Link href={"/"}>Home</Link>
            <Link href={"/user"}>User</Link>
            <Link href={"/user/register"}>Register</Link>
        </div>
    )
}