"use client"

import './globals.css';
import Image from 'next/image'
import Link from 'next/link'
import '@geist-ui/core'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

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

        <Collapsible>
          <CollapsibleTrigger className='button-72'>Youtube</CollapsibleTrigger>
          <CollapsibleContent>
            <iframe src="https://www.youtube.com/embed/DQDaSLIRsKI" allowFullScreen width="800" height="450"/>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible>
          <CollapsibleTrigger className='button-72'>Spotify</CollapsibleTrigger>
          <CollapsibleContent>
          <iframe src="https://open.spotify.com/embed/artist/5b5IWd6FFzq9Ij6etGsktH?utm_source=generator" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </CollapsibleContent>
        </Collapsible>

        <Link href="https://www.instagram.com/micha_zsmn/" className='button-72'>Instagram</Link>

      </div>
    </div>
  );
}
