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
      <div className="flex flex-row justify-center">
        <ReactPlayer 
          url={'https://www.youtube.com/watch?v=n_Dv4JMiwK8?mute=1'}
          playing={true}
        />
    
        <ReactPlayer 
          url={'https://www.youtube.com/watch?v=eRXE8Aebp7s&mute=1'}
          playing={true}
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
