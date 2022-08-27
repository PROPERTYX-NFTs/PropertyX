import {showNotification} from '@mantine/notifications';
import {IconX} from "@tabler/icons";
import {useRouter} from "next/router";
import logo from '../assets/logo.png'

export default function Home() {
    const router = useRouter();
    function handleWalletClick(e) {
        e.preventDefault()
        if (typeof window.ethereum === 'undefined') {
            console.log('MetaMask is installed!');
            showNotification({
                title: 'Metamask not installed',
                message: 'Install metamask from chrome extension store',
                icon:<IconX/>,
                color:'red'
            })
            return;
        }
        window.ethereum.request({ method: 'eth_requestAccounts' });

        if(window.ethereum.selectedAddress!==null){
            router.push('/dashboard')
        }
    }

    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
            <img src={logo.src} width={"220px"} alt=""/>
            {/*<div className="text-3xl uppercase font-bold font-sans pb-5">My Property</div>*/}
            <button onClick={handleWalletClick}
                    className='text-xl text-white font-sans rounded-lg shadow-lg bg-blue-500 uppercase transition-all hover:-translate-y-0.5 px-5 py-2'>
                Connect to wallet
            </button>
        </div>
    )
}
