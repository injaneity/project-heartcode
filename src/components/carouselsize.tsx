import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button";

export function CarouselSize() {
    return (
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-lg"
      >
        <CarouselContent>
          <CarouselItem className="md:basis-1/2 lg:basis-1/2">
            <div className="p-1">
              <Card>
                <CardHeader>
                  <CardTitle>
                    <span className="flex text-xl font-semibold justify-center">
                      METH
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-m">Also known as Ice, Glass, Crystal, Speed, Quartz, Ice Cream, Hirropon, Ya ba, Shabu or Syabu.</span>
                </CardContent>
                <CardContent>
                  <div className="flex justify-center">
                    <Button><a href="https://www.sana.org.sg/methamphetamine/">Read More</a></Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/2">
            <div className="p-1">
              <Card>
                <CardHeader>
                  <CardTitle>
                    <span className="flex text-xl font-semibold justify-center">HEROIN</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-m">Also known as White, Smack, Junk, Powder, Putih, Medicine, Ubat</span>
                </CardContent>
                <CardContent>
                  <div className="flex justify-center">
                    <Button><a href="https://www.sana.org.sg/heroin/">Read More</a></Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/2">
            <div className="p-1">
              <Card>
                <CardHeader>
                  <CardTitle>
                    <span className="flex text-xl font-semibold justify-center">NPS</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-m">New Psychoactive Substances or NPS, were listed as Class A controlled drugs.
                  </span>
                </CardContent>
                <CardContent>
                  <div className="flex justify-center">
                    <Button><a href="https://www.sana.org.sg/new-psychoactive-substances/">Read More</a></Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/2">
            <div className="p-1">
              <Card>
                <CardHeader>
                  <CardTitle>
                    <span className="flex text-xl font-semibold justify-center">CANNABIS</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-m">Also known as Marijuana, Pot, Grass, Joint, Ganja, Hashish, Weed</span>
                </CardContent>
                <CardContent>
                  <div className="flex justify-center">
                    <Button><a href="https://www.sana.org.sg/cannabis/">Read More</a></Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/2">
            <div className="p-1">
              <Card>
                <CardHeader>
                  <CardTitle>
                    <span className="flex text-xl font-semibold justify-center">COCAINE</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-m">Also known as Crack, Snow and Coke
                  </span>
                </CardContent>
                <CardContent>
                  <div className="flex justify-center">
                    <Button><a href="https://www.sana.org.sg/cocaine-2/">Read More</a></Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/2">
            <div className="p-1">
              <Card>
                <CardHeader>
                  <CardTitle>
                    <span className="flex text-xl font-semibold justify-center">KETAMINE</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-m">Also known as K, Special K, Vitamin K, Kit Kat</span>
                </CardContent>
                <CardContent>
                  <div className="flex justify-center">
                    <Button><a href="https://www.sana.org.sg/ketamine-2/">Read More</a></Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/2">
            <div className="p-1">
              <Card>
                <CardHeader>
                  <CardTitle>
                    <span className="flex text-xl font-semibold justify-center">INHALANTS</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-m">Also known as Glue-Sniffing, Solvent Abuse, Solvent Inhalation, Solvent Sniffing</span>
                </CardContent>
                <CardContent>
                  <div className="flex justify-center">
                    <Button><a href="https://www.sana.org.sg/inhalants-2/">Read More</a></Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    )
  }