'use client'

import Image from "next/image";
import { TypographyH1 } from "@/components/ui-typography/TypographyH1";
import { TypographyBlockquote } from "@/components/ui-typography/TypographyBlockquote";
import { TypographyH2 } from "@/components/ui-typography/TypographyH2";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Counter from "@/components/Counter";
import Script from "next/script";

//code area

//select the counter type (example: Pomodoro, Short Pause or Long Pause)
function selectCounter(countdownType){
     countdownType =  Number;
    
    countdownType == 1 ? console.log('foi 1! ') : console.log("Não foi...");


};

//start the counter

//pause the counter




export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-6 py-12 bg-gradient-to-tr from-purple-900 to-red-700 ">
      <h1 className="scroll-m-20 text-white text-4xl font-extrabold tracking-tight lg:text-5x ">
        Bem-vindo ao Pomo<b className="text-black text-4xl">do</b>it
      </h1>
      <Card className="mt-12 select-none min-w-60 ">
        <CardHeader>
          <CardTitle></CardTitle>
          <CardDescription></CardDescription>
          <div>
            <Button
              onClick={selectCounter(1)}
              className="hover:bg-gradient-to-tr from-purple-900 to-red-700 hover:text-white"
              variant="outlined"
            >
              Pomodoro
            </Button>
            <Button
              className="hover:bg-gradient-to-tr from-purple-900 to-red-700 hover:text-white"
              variant="outlined"
            >
              Pausa
            </Button>
            <Button
              className="hover:bg-gradient-to-tr from-purple-900 to-red-700 hover:text-white"
              variant="outlined"
            >
              Pausa Longa
            </Button>
          </div>
        </CardHeader>
        <CardContent className="select-none  ">
          <section className="flex flex-col">
            <Counter/>
            <div className='flex justify-center ' >
        <h1 id='minuteCounter' className=" scroll-m-20 self-center text-7xl
        font-extrabold tracking-tight lg:text-9xl mb-8">
            20
        </h1>
        <h1 id='pointerDivider' className=" scroll-m-20 self-center text-7xl
        font-extrabold tracking-tight lg:text-9xl mb-8">
            :
        </h1>
        <h1 id='secondCounter' className=" scroll-m-20 self-center text-7xl
        font-extrabold tracking-tight lg:text-9xl mb-8">
            00
        </h1>
        <Script type="text/javascript" src="/assets/js/code.js"></Script>

        </div>

            <Button className="bg-gradient-to-tr from-purple-900 to-red-700">
              Iniciar
            </Button>
          </section>
        </CardContent>
        <CardFooter className="justify-between items-center">
          <p>By Saraivx</p>
          <Avatar>
            <AvatarImage src="https://github.com/jsaraivx.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </CardFooter>
      </Card>


    </main>
  );
}
