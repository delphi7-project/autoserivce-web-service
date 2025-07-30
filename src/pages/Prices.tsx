import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

export default function Prices() {
  const priceCategories = [
    {
      title: "Диагностика",
      services: [
        { name: "Компьютерная диагностика", price: "2000 ₽" },
        { name: "Диагностика двигателя", price: "2500 ₽" },
        { name: "Диагностика ходовой части", price: "1500 ₽" },
        { name: "Диагностика электрики", price: "1800 ₽" },
        { name: "Комплексная диагностика", price: "3500 ₽" }
      ]
    },
    {
      title: "Техническое обслуживание",
      services: [
        { name: "ТО-1 (15 000 км)", price: "от 5000 ₽" },
        { name: "ТО-2 (30 000 км)", price: "от 8000 ₽" },
        { name: "ТО-3 (60 000 км)", price: "от 12000 ₽" },
        { name: "Замена масла и фильтра", price: "от 2000 ₽" },
        { name: "Замена всех фильтров", price: "от 3000 ₽" }
      ]
    },
    {
      title: "Ремонт двигателя",
      services: [
        { name: "Замена свечей зажигания", price: "от 1500 ₽" },
        { name: "Замена ремня ГРМ", price: "от 8000 ₽" },
        { name: "Ремонт головки блока", price: "от 25000 ₽" },
        { name: "Капитальный ремонт", price: "от 80000 ₽" },
        { name: "Замена прокладки ГБЦ", price: "от 15000 ₽" }
      ]
    },
    {
      title: "Ходовая часть",
      services: [
        { name: "Замена амортизаторов (пара)", price: "от 4000 ₽" },
        { name: "Замена стоек стабилизатора", price: "от 2000 ₽" },
        { name: "Замена шаровых опор", price: "от 3000 ₽" },
        { name: "Замена рулевых наконечников", price: "от 2500 ₽" },
        { name: "Развал-схождение", price: "от 2000 ₽" }
      ]
    },
    {
      title: "Тормозная система",
      services: [
        { name: "Замена тормозных колодок", price: "от 2500 ₽" },
        { name: "Замена тормозных дисков", price: "от 4000 ₽" },
        { name: "Замена тормозной жидкости", price: "от 1500 ₽" },
        { name: "Ремонт тормозных суппортов", price: "от 5000 ₽" },
        { name: "Прокачка тормозов", price: "от 1000 ₽" }
      ]
    },
    {
      title: "Электрика",
      services: [
        { name: "Замена генератора", price: "от 8000 ₽" },
        { name: "Замена стартера", price: "от 6000 ₽" },
        { name: "Ремонт проводки", price: "от 2000 ₽" },
        { name: "Замена аккумулятора", price: "от 1000 ₽" },
        { name: "Установка сигнализации", price: "от 15000 ₽" }
      ]
    }
  ];

  const discounts = [
    { condition: "Постоянным клиентам", discount: "10%" },
    { condition: "Пенсионерам", discount: "5%" },
    { condition: "При комплексном ремонте", discount: "15%" },
    { condition: "Корпоративным клиентам", discount: "20%" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Icon name="Car" className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">СТО ЛИДЕР</h1>
              <p className="text-sm text-gray-600">Профессиональный ремонт</p>
            </div>
          </Link>
          <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
            Записаться
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Цены на услуги
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Честные и прозрачные цены без скрытых доплат
          </p>
        </div>
      </section>

      {/* Price Tables */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-800 mb-4">Прайс-лист</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Стоимость услуг</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Цены указаны за работу без учета стоимости запчастей
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {priceCategories.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 flex items-center">
                    <Icon name="Wrench" className="mr-2 text-orange-500" size={20} />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableBody>
                      {category.services.map((service, idx) => (
                        <TableRow key={idx}>
                          <TableCell className="font-medium">{service.name}</TableCell>
                          <TableCell className="text-right font-bold text-orange-600">
                            {service.price}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Discounts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-800 mb-4">Скидки</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Специальные предложения</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {discounts.map((discount, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{discount.discount}</span>
                  </div>
                  <CardTitle className="text-lg">{discount.condition}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Скидка на все виды работ</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-blue-100 text-blue-800 mb-4">Важная информация</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Условия и гарантии</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-green-600">
                    <Icon name="Check" className="mr-2" size={20} />
                    Что включено в цену
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Диагностика неисправности</li>
                    <li>• Выполнение работ</li>
                    <li>• Гарантия на работы 12 месяцев</li>
                    <li>• Консультации по эксплуатации</li>
                    <li>• Рекомендации по обслуживанию</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-orange-600">
                    <Icon name="AlertTriangle" className="mr-2" size={20} />
                    Дополнительно оплачивается
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Стоимость запчастей и расходников</li>
                    <li>• Дополнительные работы (по согласованию)</li>
                    <li>• Эвакуация автомобиля</li>
                    <li>• Срочное выполнение работ (+50%)</li>
                    <li>• Работы в выходные дни (+30%)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Нужна точная стоимость?</h2>
          <p className="text-xl text-gray-300 mb-8">Получите персональный расчет для вашего автомобиля</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              <Icon name="Calculator" className="mr-2" size={20} />
              Рассчитать стоимость
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
              <Icon name="Phone" className="mr-2" size={20} />
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}