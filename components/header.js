import logo from '../public/jvngarcia-logo.png';


export default function Header(){
    return(
        <div className="relative bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                    <a href="#">
                    <span className="sr-only">Workflow</span>
                    <img className="h-8 w-auto sm:h-10" src="../public/jvngarcia-logo.png" alt="" />
                    </a>
                </div>
                <nav className="hidden md:flex space-x-10">
                    <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                    Proyectos
                    </a>

                    <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                    Contacto
                    </a>
                    <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                    Instagram
                    </a>
                </nav>
                
                </div>
            </div>
        </div>
    );
}