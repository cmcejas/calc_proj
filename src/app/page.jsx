import Header from './components/header';
import Image from 'next/image';
import bg from '../../public/bg_final.svg';

export default function Home() {
  return (
    <main>
      <div className="min-h-screen min-w-screen bg-gradient-to-b from-transparent to-white">
        <Header />

        <Image priority className="" src={bg} alt="landing"/>


      </div>
    </main>
      );
}
