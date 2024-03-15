import Image from "next/image"
import logo from "../../public/logo.png"



export default function TopMenu(){
    return(
        <nav className="flex justify-between h-20 bg-dark-blue">
            <div className="flex justify-center items-center pl-5">
                <Image 
                    priority
                    src={logo}
                    alt="CoverageStop Logo"
                    width={200}
                />
            </div>
            <div className="flex justify-between items-center w-100">
                <div>Home</div>
                <div>About</div>
                <div>Contact</div>
            </div>
            <div className="bg-yellow-main w-20 flex justify-center items-center">Login</div>
        </nav>
    )
}