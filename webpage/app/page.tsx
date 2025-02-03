import './globals.css';
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div >
      <div className="grid items-center justify-items-center min-h-screen sm:p-20"> 
        <Image 
          src={"/banner.jpg"}
          alt="background"
          fill={true}
          quality={100}
          className="background"
        />
        <h1 className="text-white drop-shadow text-7xl">MIKEZAY</h1>
        <Link href="https://linktr.ee/mikezay" className='button-72'>
          Linktree
        </Link>
        <iframe src="https://www.youtube.com/embed/DQDaSLIRsKI" allowFullScreen width="800" height="450"/>
      </div>
    </div>
  );
}
