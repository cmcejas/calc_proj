import Header from './components/header';
import Image from 'next/image';
import bg from '../../public/bg_final.svg';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className="relative flex-grow">
        <Image
          priority
          layout="lg:fill"
          objectFit="cover"
          src={bg}
          alt="landing"
        />
      </div>
    </main>
  );
}
