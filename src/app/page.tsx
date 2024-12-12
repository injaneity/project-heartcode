"use client"

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import ReactPlayer from "react-player";


export default function Home() {
  return(
    <div>
      <h1 className="flex justify-center font-bold text-4xl p-6">VIDEOS ABOUT DRUGS</h1>
      <div className="flex flex-row justify-center gap-12 pb-6">
        <ReactPlayer 
          url={'https://www.youtube.com/watch?v=-ioRfcDYLlE?mute=1'}
        />
    
        <ReactPlayer 
          url={'https://www.youtube.com/watch?v=9nrSdKjIA-U?mute-1'}
        />
      </div>
      
      <Card>
  <CardHeader>
    <CardTitle>Hi, im joelys</CardTitle>
    <CardDescription>fun fact I am in girl guides</CardDescription>
  </CardHeader>
</Card>
<Card>
  <CardHeader>
    <CardTitle>Hi, im vania</CardTitle>
    <CardDescription>fun fact im in ncdcc</CardDescription>
  </CardHeader>
</Card>
    </div>
  );
}
