import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleCheckBig, DollarSign, Users } from "lucide-react";


export default function Home() {
  return (
    <main className="sm:ml-14 p-4">
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center mb-2">
              <CardTitle className="text-gray-800 select-none">
                Total de Vendas
              </CardTitle>
              <DollarSign className="ml-auto w-4 h-4"/>
            </div>
            <CardDescription>
              Total de vendas em 90 dias.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">R$40.000,00</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center mb-2">
              <CardTitle className="text-gray-800 select-none">
                Novos clientes
              </CardTitle>
              <Users className="ml-auto w-4 h-4"/>
            </div>
            <CardDescription>
              Novos clientes em 30 dias
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">178</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center mb-2">
              <CardTitle className="text-gray-800 select-none">
                Pedidos hoje
              </CardTitle>
              <CircleCheckBig className="ml-auto w-4 h-4"/>
            </div>
            <CardDescription>
              Total de pedidos hoje
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">59</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center mb-2">
              <CardTitle className="text-gray-800 select-none">
                Pedidos hoje
              </CardTitle>
              <CircleCheckBig className="ml-auto w-4 h-4"/>
            </div>
            <CardDescription>
              Total de pedidos hoje
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">59</p>
          </CardContent>
        </Card>

      </section>

    </main>
  )
}
