import { Folder } from "lucide-react";

export default function Portfolio() {
    return (
        <>
            <h3 className="text-base font-medium text-white mb-3">Portfolio</h3>
            <div className="grid grid-cols-2 gap-3 mb-16">
                <a
                    href="/software"
                    className="text-[#e4e4e4] rounded-lg bg-[#141414] p-4 flex justify-between items-center border border-[#262626] hover:border-[#404040] transition-colors"
                >
                    <span className="text-sm font-normal">Projects</span>
                    <Folder
                        size={18}
                        strokeWidth={1.5}
                        className="text-[#a3a3a3]"
                    />
                </a>
                <a
                    href="/blog"
                    className="text-[#e4e4e4] rounded-lg bg-[#141414] p-4 flex justify-between items-center border border-[#262626] hover:border-[#404040] transition-colors"
                >
                    <span className="text-sm font-normal">Blog</span>
                    <Folder
                        size={18}
                        strokeWidth={1.5}
                        className="text-[#a3a3a3]"
                    />
                </a>
                <a
                    href="/work"
                    className="text-[#e4e4e4] rounded-lg bg-[#141414] p-4 flex justify-between items-center border border-[#262626] hover:border-[#404040] transition-colors"
                >
                    <span className="text-sm font-normal">Work</span>
                    <Folder
                        size={18}
                        strokeWidth={1.5}
                        className="text-[#a3a3a3]"
                    />
                </a>
                <a
                    href="/website"
                    className="text-[#e4e4e4] rounded-lg bg-[#141414] p-4 flex justify-between items-center border border-[#262626] hover:border-[#404040] transition-colors"
                >
                    <span className="text-sm font-normal">Website</span>
                    <Folder
                        size={18}
                        strokeWidth={1.5}
                        className="text-[#a3a3a3]"
                    />
                </a>
            </div>
        </>
    );
}
