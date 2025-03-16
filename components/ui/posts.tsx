import { ArrowUpRight } from "lucide-react";

export default function Posts() {
    const posts = [
        {
            title: "Building a real-time analytics dashboard",
            date: "Feb 12, 2025",
            url: "/blog/analytics-dashboard",
        },
        {
            title: "Modern approaches to distributed systems",
            date: "Jan 28, 2025",
            url: "/blog/distributed-systems",
        },
        {
            title: "Web3 payment systems: A practical guide",
            date: "Jan 05, 2025",
            url: "/blog/web3-payments",
        },
    ];

    return (
        <>
            <h3 className="text-base font-medium text-white mb-3">Posts</h3>
            <div className="flex flex-col gap-1 mb-16">
                {posts.map((post, index) => (
                    <a
                        key={index}
                        href={post.url}
                        className="text-[#e4e4e4] rounded-lg bg-[#141414] p-4 flex justify-between items-center border border-[#262626] hover:border-[#404040] transition-colors"
                    >
                        <div className="flex flex-col">
                            <span className="text-sm font-normal">
                                {post.title}
                            </span>
                            <span className="text-xs text-[#737373] mt-1">
                                {post.date}
                            </span>
                        </div>
                        <ArrowUpRight
                            size={16}
                            strokeWidth={1.5}
                            className="text-[#a3a3a3]"
                        />
                    </a>
                ))}
            </div>
        </>
    );
}
