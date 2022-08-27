import {useRouter} from "next/router";
import logo from '../../assets/logo.png'
import Link from "next/link";
function Dashboard(){
    const router = useRouter()
    if(process.browser){
        if(window.ethereum.selectedAddress === null){
                router.replace('/')

        }
    }
    return (
        <>
        {/*<nav className="h-[70px] w-full flex items-center pt-3">*/}
        {/*    <div className="flex items-center w-full space-x-8 px-5 text justify-between">*/}

        {/*    </div>*/}
        {/*</nav>*/}
            <div className="h-screen flex justify-around items-center">
                <div className="text-3xl">
                    <Link href={"/marketplace"}>
                        Marketplace
                    </Link>
                </div>
                <img src={logo.src} height="80px" width={350} alt=""/>

                <div className="text-3xl">
                    <Link href={"/property"}>
                        Property details
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Dashboard;