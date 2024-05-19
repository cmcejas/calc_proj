import Header from './components/header';
import Image from 'next/image';
import bg from '../../public/bg_final.svg';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Header />
      <div className="lg:hidden">
        <Image
          priority
          layout="responsive"
          width={1920}
          height={1080}
          objectFit="cover"
          src={bg}
          alt="landing"
        />
      </div>

      <div className="hidden min-h-screen lg:visible lg:flex lg:flex-col">
        <div className="relative flex-grow">
          <Image
            priority
            layout="fill"
            objectFit="cover"
            src={bg}
            alt="landing"
          />
        </div>
      </div>
    </main>
  );
}
