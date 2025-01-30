import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[200px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 text-6xl">
      Welcome to my page!
      <iframe src="https://www.youtube.com/embed/DQDaSLIRsKI" allowFullScreen width="800" height="450"/>
    </div>
    
  );
}
