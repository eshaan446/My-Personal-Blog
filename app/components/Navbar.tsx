import Link from "next/link"
import { FaLinkedin, FaTwitter, FaGithub, FaFilePdf, FaCode } from "react-icons/fa"

export default function Navbar() {
    return (
        <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
            <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
                <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
                    <Link href="/" className="text-white/90 no-underline hover:text-white">Eshaan Pandey</Link>
                </h1>
                <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl">
                    <Link title="View Linkedin"className="text-white/90 hover:text-white" href="https://www.linkedin.com/in/eshaan-pandey-6b6680209/">
                        <FaLinkedin />
                    </Link>
                    <Link title="View Github" className="text-white/90 hover:text-white" href="https://github.com/eshaan446">
                        <FaGithub />
                    </Link>
                    <Link title="Twitter" className="text-white/90 hover:text-white" href="https://twitter.com/eshaan540">
                        <FaTwitter />
                    </Link>
                    <Link  title="View Leetcode Profile"className="text-white/90 hover:text-white" href="https://leetcode.com/eshaan446/">
                        <FaCode />
                    </Link>
                    <Link title="View Resume" className="text-white/90 hover:text-white" href="https://drive.google.com/file/d/1F3mB89SZbaMDPFhjURnIzsr11p9Ms3H3/view?usp=share_link">
                        <FaFilePdf />
                    </Link>
                </div>
            </div>
        </nav>
    )
}
