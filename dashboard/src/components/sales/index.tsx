import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleDollarSign } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";


  export function Sales(){
    return (
      <Card className="flex-1">
        <CardHeader>
          <div className="flex items-center justify-center">
            <CardTitle className="text-lg sm:text-xl text-gray-800">
              Últimos clientes
            </CardTitle>
            <CircleDollarSign className="ml-auto text-green-700 w-5 h-5"/>
          </div>
          <CardDescription>
            Novos clientes nas últimas 24 horas
          </CardDescription>
        </CardHeader>

        <CardContent>
          <article className="flex items-center gap-2 border-b py-2">
            <Avatar className="w-10 h-10">
              <AvatarImage src="https://github.com/Jreng7.png"/>
              <AvatarFallback>DV</AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-start ml-2">
              <p className="text-zinc-800 text-sm sm:text-base font-semibold">Josué Ribeiro</p>
              <span className="text-gray-500 text-[13px]">jr.waydev@gmail.com</span>
            </div>
          </article>

          <article className="flex items-center gap-2 border-b py-2">
            <Avatar className="w-10 h-10">
              <AvatarImage src="https://github.com/Jreng7.png"/>
              <AvatarFallback>DV</AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-start ml-2">
              <p className="text-zinc-800 text-sm sm:text-base font-semibold">Josué Ribeiro</p>
              <span className="text-gray-500 text-[13px]">jr.waydev@gmail.com</span>
            </div>
          </article>

          <article className="flex items-center gap-2 border-b py-2">
            <Avatar className="w-10 h-10">
              <AvatarImage src="https://github.com/Jreng7.png"/>
              <AvatarFallback>DV</AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-start ml-2">
              <p className="text-zinc-800 text-sm sm:text-base font-semibold">Josué Ribeiro</p>
              <span className="text-gray-500 text-[13px]">jr.waydev@gmail.com</span>
            </div>
          </article>
        </CardContent>
      </Card>
    ) 
  }