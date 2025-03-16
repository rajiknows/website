export default function Footer() {
    return (
        <div className="border-t border-[#262626] pt-8 pb-4">
            <div className="flex justify-between items-center">
                <div className="text-[#737373] text-xs">© 2025 Rajesh Jha</div>
                <div className="flex space-x-4">
                    <a
                        href="https://github.com/yourusername"
                        className="text-[#737373] text-xs hover:text-white transition-colors"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://twitter.com/yourusername"
                        className="text-[#737373] text-xs hover:text-white transition-colors"
                    >
                        Twitter
                    </a>
                    <a
                        href="https://linkedin.com/in/yourusername"
                        className="text-[#737373] text-xs hover:text-white transition-colors"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </div>
    );
}
