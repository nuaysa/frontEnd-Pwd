import Link from "next/link";
import Wrapper from "./wrapper";
import { FaBlogger } from "react-icons/fa";

export default function Navbar() {
    return(
        <div className="h-20 sticky top-0 text-black bg-white">
            <Wrapper>
                <Link href="/" className="flex items-center gap-2">
                <FaBlogger className="w-11 h-11 text-[#D85F30]"/>
                <span className="self-center text-2xl font-bold  whitespace-nowrap">
                Blogger
                </span>
                </Link>
            </Wrapper>
        </div>
    )
}