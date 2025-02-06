"use client"

import './globals.css';
import Image from 'next/image'
import Link from 'next/link'
import '@geist-ui/core'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"



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

        <Popover>
          <PopoverTrigger className='button-72'>Youtube</PopoverTrigger>
          <PopoverContent>
            <div className='justify-items-center'>
                    <iframe src="https://www.youtube.com/embed/DQDaSLIRsKI" width="800" height="450"/>
            </div>
          </PopoverContent>
        </Popover>

        <Popover>
          <PopoverTrigger className='button-72'>Spotify</PopoverTrigger>
          <PopoverContent>
            <div>
              <iframe src="https://open.spotify.com/embed/artist/5b5IWd6FFzq9Ij6etGsktH?utm_source=generator" width="100%" height="352" 
                  frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
          </PopoverContent>
        </Popover>

        <Link href="https://www.instagram.com/micha_zsmn/" className='button-72'>Instagram</Link>

      </div>
    </div>
  );
}
