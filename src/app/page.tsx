"use client"

import ReactPlayer from "react-player";
import * as React from "react"
import { CarouselSize } from "@/components/carouselsize";

export default function Home() {
  return (
    <div>
      <div className="justify-center flex">
        <h1 className="font-bold text-4xl p-6">TYPES OF DRUGS</h1>
      </div>
      <div className="justify-center flex">
        <CarouselSize />
      </div>
      <h1 className="flex justify-center font-bold text-4xl p-6">VIDEOS ABOUT DRUGS</h1>
      <div className="flex flex-row justify-center gap-12 pb-6">
        <ReactPlayer
          url={'https://www.youtube.com/watch?v=-ioRfcDYLlE?mute=1'}
        />

        <ReactPlayer
          url={'https://www.youtube.com/watch?v=9nrSdKjIA-U?mute-1'}
        />
      </div>
    </div>
  );
}
