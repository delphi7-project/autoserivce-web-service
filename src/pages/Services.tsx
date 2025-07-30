import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      icon: "Wrench",
      title: "Диагностика двигателя",
      description: "Компьютерная диагностика всех систем автомобиля с использованием современного оборудования",
      price: "от 2000 ₽",
      time: "30-60 мин"
    },
    {
      icon: "Settings",
      title: "Техническое обслуживание",
      description: "Плановое ТО согласно регламенту производителя с заменой расходных материалов",
      price: "от 5000 ₽",
      time: "2-4 часа"
    },
    {
      icon: "Zap",
      title: "Ремонт электрики",
      description: "Диагностика и ремонт электрооборудования, замена проводки, ремонт генератора",
      price: "от 1500 ₽",
      time: "1-3 часа"
    },
    {
      icon: "Gauge",
      title: "Ходовая часть",
      description: "Ремонт подвески, амортизаторов, рулевого управления, тормозной системы",
      price: "от 3000 ₽",
      time: "2-6 часов"
    },
    {
      icon: "Cog",
      title: "Ремонт трансмиссии",
      description: "Ремонт АКПП, МКПП, замена сцепления, ремонт карданного вала",
      price: "от 8000 ₽",
      time: "4-8 часов"
    },
    {
      icon: "Thermometer",
      title: "Система охлаждения",
      description: "Замена радиатора, термостата, помпы, промывка системы охлаждения",
      price: "от 2500 ₽",
      time: "1-3 часа"
    },
    {
      icon: "Fuel",
      title: "Топливная система",
      description: "Чистка форсунок, замена топливного фильтра, ремонт топливного насоса",
      price: "от 2000 ₽",
      time: "1-2 часа"
    },
    {
      icon: "Wind",
      title: "Система выхлопа",
      description: "Замена глушителя, катализатора, ремонт выхлопной системы",
      price: "от 3500 ₽",
      time: "2-4 часа"
    }
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
            Наши услуги
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Полный спектр услуг по ремонту и обслуживанию автомобилей
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon as any} className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">
                    {service.description}
                  </CardDescription>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Цена:</span>
                      <Badge variant="secondary">{service.price}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Время:</span>
                      <Badge variant="outline">{service.time}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Нужна консультация?</h2>
          <p className="text-xl text-gray-300 mb-8">Свяжитесь с нами для получения подробной информации</p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
            <Icon name="Phone" className="mr-2" size={20} />
            Позвонить сейчас
          </Button>
        </div>
      </section>
    </div>
  );
}