import Image from 'next/image';
import svg from '../../../public/logo.svg';
import Link from 'next/link'


const Header = () => {
    return(
        <section>
            <div className="flex bg-[#D9D9D9] border-b-4 border-black md:px-4 py-3">
                <Image  width={50} height={50} src={svg} alt="logo" className="ml-2 mr-2 md:mr-10"/>

                <div className=" md:text-xl font-medium my-auto gap-6 md:gap-16 flex">
                    <Link href="/derivatives" className="hover:rotate-6 hover:text-3xl duration-200 hover:cursor-pointer">Derivatives </Link>
                    <Link href="/integrals" className="hover:rotate-6 hover:text-3xl duration-200 hover:cursor-pointer">Integrals </Link>
                    <Link href="/ap_practice" className="hover:rotate-6 hover:text-3xl duration-200 hover:cursor-pointer">AP Practice </Link>
                </div>

            </div>

        </section>

        );

    };
export default Header;