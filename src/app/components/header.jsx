import Image from 'next/image';
import svg from '../../../public/logo.svg';
import Link from 'next/link'


const Header = () => {
    return(
        <section>
            <div className="flex py-3 border-b-4 bg-slate-800 border-cyan-500 md:px-4">
                <Image width={50} height={50} src={svg} alt="logo" className="ml-2 mr-2  drop-shadow-2xl md:mr-10"/>

                <div className="flex gap-6 my-auto font-medium text-white md:text-xl md:gap-16">
                    <Link href="/derivatives" className="duration-200 hover:rotate-6 hover:text-3xl hover:cursor-pointer">Derivatives </Link>
                    <Link href="/integrals" className="duration-200 hover:rotate-6 hover:text-3xl hover:cursor-pointer">Integrals </Link>
                    <Link href="/ap_practice" className="duration-200 hover:rotate-6 hover:text-3xl hover:cursor-pointer">AP Practice </Link>
                </div>

            </div>

        </section>

        );

    };
export default Header;
