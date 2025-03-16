import { Lamp, Twitter } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="mt-8 mb-8 h-[20px] w-full flex justify-between items-center">
            <Link
                href="/"
                className="text-[#e4e4e4] text-base font-medium hover:text-white transition-colors"
            >
                Home
            </Link>
            <div className="flex space-x-6">
                <Link
                    href="/Twitter"
                    className="text-[#a3a3a3] text-sm font-normal hover:text-white transition-colors"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="24"
                        height="20"
                        viewBox="0 0 48 48"
                    >
                        <polygon
                            fill="#616161"
                            points="41,6 9.929,42 6.215,42 37.287,6"
                        ></polygon>
                        <polygon
                            fill="#fff"
                            fill-rule="evenodd"
                            points="31.143,41 7.82,7 16.777,7 40.1,41"
                            clip-rule="evenodd"
                        ></polygon>
                        <path
                            fill="#616161"
                            d="M15.724,9l20.578,30h-4.106L11.618,9H15.724 M17.304,6H5.922l24.694,36h11.382L17.304,6L17.304,6z"
                        ></path>
                    </svg>
                </Link>
                <button className="text-[#a3a3a3] text-sm font-normal hover:text-white transition-colors">
                    <Lamp size={20} strokeWidth={1.5} />
                </button>
            </div>
        </div>
    );
}
