import Image from "next/image";
import logo from "../public/images/jvngarcia-logo.png";


export default function Header(){
    return(
        <div className="relative bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center md:justify-start md:space-x-10">
                    <div className="flex justify-start w-100 lg:flex-none flex-1">
                        <a href="#">
                            <span className="sr-only">JVN Garcia</span>
                            <Image className="" src={logo} alt="Web programmer JVN Garcia" width={80} height={80} />
                        </a>
                    </div>
                    <div className="-mr-2 -my-2 md:hidden">
                        <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                        <span className="sr-only">Open menu</span>
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        </button>
                    </div>
                    <nav className="hidden md:flex justify-start space-x-10">

                        <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                            About me
                        </a>
                        <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                            Portfolio
                        </a>
                        <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                            Blog
                        </a>
                        <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900" aria-expanded="false">
                            Search jobs
                        </a>
                    </nav>
                    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                        <a href="#" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-9 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-pink hover:bg-pink-hover">
                            Contact
                        </a>
                    </div>`
                </div>
            </div>
        </div>
    );
}