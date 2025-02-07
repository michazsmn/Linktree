import './globals.css';
import Image from 'next/image'
import Link from 'next/link'
import '@geist-ui/core'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"



export default function Home() {
  return (
    <div className='pt-40'>
        <Image 
          src={"/banner.jpg"}
          alt="background"
          fill={true}
          quality={100}
          className="background"
        />
      <div className="grid items-center gap-10 justify-items-center">

        <Image
          src={"/mikezayeffects.jpg"}
          alt="profilbild"
          quality={100}
          width={120}
          height={120}
          className='profilepic'
        />

        <div>
          <h1 className="text-stone-200 drop-shadow text-xl">MIKEZAY</h1>
          <h1 className="text-stone-400 drop-shadow text-xl">producer</h1>
        </div>
        
        <div className="grid items-center gap-6">

          <Popover>
            <PopoverTrigger className='button-27'>Youtube</PopoverTrigger>
            <PopoverContent className='bg-black border-gray-800 rounded-3xl'>
              <div className='justify-items-center'>
                      <iframe src="https://www.youtube.com/embed/DQDaSLIRsKI" width="640" height="360"/>
              </div>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger className='button-27'>Spotify</PopoverTrigger>
            <PopoverContent className='bg-black border-gray-800 rounded-3xl'> 
              <div>
                <iframe src="https://open.spotify.com/embed/artist/5b5IWd6FFzq9Ij6etGsktH?utm_source=generator" width="500" height="400"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
              </div>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger className='button-27'>Soundcloud</PopoverTrigger>
            <PopoverContent className='bg-black border-gray-800 rounded-3xl'> 
              <iframe width="500" height="300" allow="autoplay" 
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1977936351&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"> 
              </iframe>

            </PopoverContent>
          </Popover>

          <Link href="https://www.instagram.com/micha_zsmn/" className='button-27'>Instagram</Link>

        </div>

        
      </div>
    </div>
  );
}
