import React from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "../ui/card";
import {CircleDollarSign, DollarSign} from "lucide-react";
import {Avatar, AvatarImage} from "../ui/avatar";
import {AvatarFallback} from "@radix-ui/react-avatar";

const Sales = () => {
  return (
    <Card className=" w-full md:w1/2">
      <CardHeader>
        <div className="flex items-center justify-center">
          <CardTitle className="text-lg sm:text-xl text-gray-600">Overview vendas</CardTitle>
          <CircleDollarSign className="ml-auto w-4 h-4" />
        </div>
        <CardDescription>Novos clientes nas últimas 24 horas</CardDescription>
      </CardHeader>

      <CardContent>
        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com/caiofaabio.png" />
            <AvatarFallback>CF</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:text-base font-semibold">Caio Fabio</p>
            <span className="text-[12px] sm:text-sm text-gray400">faabio.caio@gmail.com</span>
          </div>
        </article>

        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com/caiofaabio.png" />
            <AvatarFallback>CF</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:text-base font-semibold">Caio Fabio</p>
            <span className="text-[12px] sm:text-sm text-gray400">faabio.caio@gmail.com</span>
          </div>
        </article>

        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com/caiofaabio.png" />
            <AvatarFallback>CF</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:text-base font-semibold">Caio Fabio</p>
            <span className="text-[12px] sm:text-sm text-gray400">faabio.caio@gmail.com</span>
          </div>
        </article>
      </CardContent>
    </Card>
  );
};

export default Sales;
