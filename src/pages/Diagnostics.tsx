import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

export default function Diagnostics() {
  const diagnosticTypes = [
    {
      icon: "Cpu",
      title: "Компьютерная диагностика",
      description: "Полная диагностика всех электронных систем автомобиля",
      price: "от 2000 ₽",
      features: ["Считывание ошибок", "Анализ параметров", "Отчет о состоянии"]
    },
    {
      icon: "Wrench",
      title: "Диагностика двигателя",
      description: "Проверка работы двигателя и его систем",
      price: "от 2500 ₽",
      features: ["Компрессия цилиндров", "Система зажигания", "Топливная система"]
    },
    {
      icon: "Gauge",
      title: "Диагностика ходовой",
      description: "Проверка подвески, тормозов и рулевого управления",
      price: "от 1500 ₽",
      features: ["Подвеска", "Тормозная система", "Рулевое управление"]
    },
    {
      icon: "Zap",
      title: "Диагностика электрики",
      description: "Проверка электрооборудования и проводки",
      price: "от 1800 ₽",
      features: ["Генератор", "Стартер", "Проводка"]
    }
  ];

  const equipment = [
    "Сканеры Launch X431",
    "Осциллографы Hantek",
    "Мультиметры Fluke",
    "Компрессометры",
    "Эндоскопы",
    "Газоанализаторы"
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
            Компьютерная диагностика
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Точная диагностика - основа качественного ремонта
          </p>
        </div>
      </section>

      {/* Diagnostic Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-800 mb-4">Виды диагностики</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Полная диагностика автомобиля</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Используем современное оборудование для точного определения неисправностей
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {diagnosticTypes.map((type, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={type.icon as any} className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{type.title}</CardTitle>
                  <Badge className="w-fit bg-orange-100 text-orange-800">{type.price}</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4">
                    {type.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <Icon name="Check" className="text-green-500 mr-2" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Процесс диагностики</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Как проходит диагностика</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Прием автомобиля</h3>
              <p className="text-gray-600">Осмотр и опрос клиента о проблемах</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Подключение сканера</h3>
              <p className="text-gray-600">Считывание кодов ошибок и параметров</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Анализ данных</h3>
              <p className="text-gray-600">Интерпретация результатов диагностики</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Отчет клиенту</h3>
              <p className="text-gray-600">Подробный отчет с рекомендациями</p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-orange-100 text-orange-800 mb-4">Наше оборудование</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Современные диагностические системы
              </h2>
              <p className="text-gray-600 mb-6">
                Мы используем профессиональное оборудование ведущих мировых производителей, 
                что позволяет нам проводить точную диагностику автомобилей любых марок.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {equipment.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <Icon name="Check" className="text-green-500 mr-2" size={16} />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/492002d2-fd4e-4a41-b509-21dc6feaabdc.jpg" 
                alt="Диагностическое оборудование" 
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold text-orange-500">99%</div>
                <div className="text-gray-600">точность диагностики</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Нужна диагностика?</h2>
          <p className="text-xl text-gray-300 mb-8">Запишитесь на диагностику прямо сейчас</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              <Icon name="Phone" className="mr-2" size={20} />
              Записаться на диагностику
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
              <Icon name="Calculator" className="mr-2" size={20} />
              Рассчитать стоимость
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}