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
