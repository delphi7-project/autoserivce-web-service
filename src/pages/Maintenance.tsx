import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

export default function Maintenance() {
  const maintenanceTypes = [
    {
      title: "ТО-1 (15 000 км)",
      description: "Базовое техническое обслуживание",
      price: "от 5000 ₽",
      services: [
        "Замена моторного масла",
        "Замена масляного фильтра",
        "Проверка уровней жидкостей",
        "Диагностика основных систем"
      ]
    },
    {
      title: "ТО-2 (30 000 км)",
      description: "Расширенное техническое обслуживание",
      price: "от 8000 ₽",
      services: [
        "Все работы ТО-1",
        "Замена воздушного фильтра",
        "Замена салонного фильтра",
        "Проверка тормозной системы",
        "Проверка подвески"
      ]
    },
    {
      title: "ТО-3 (60 000 км)",
      description: "Полное техническое обслуживание",
      price: "от 12000 ₽",
      services: [
        "Все работы ТО-2",
        "Замена свечей зажигания",
        "Замена топливного фильтра",
        "Проверка ремня ГРМ",
        "Замена тормозной жидкости"
      ]
    }
  ];

  const benefits = [
    {
      icon: "Shield",
      title: "Сохранение гарантии",
      description: "Регулярное ТО сохраняет заводскую гарантию на автомобиль"
    },
    {
      icon: "TrendingUp",
      title: "Увеличение ресурса",
      description: "Продлевает срок службы двигателя и других узлов"
    },
    {
      icon: "DollarSign",
      title: "Экономия средств",
      description: "Предотвращает дорогостоящие поломки в будущем"
    },
    {
      icon: "Zap",
      title: "Надежность",
      description: "Снижает риск внезапных поломок в дороге"
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
            Техническое обслуживание
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Регулярное ТО - залог долгой и надежной работы вашего автомобиля
          </p>
        </div>
      </section>

      {/* Maintenance Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-800 mb-4">Виды ТО</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Плановое техническое обслуживание</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Выполняем ТО согласно регламенту производителя с использованием качественных материалов
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {maintenanceTypes.map((type, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle className="text-xl text-gray-900">{type.title}</CardTitle>
                    <Badge className="bg-orange-100 text-orange-800">{type.price}</Badge>
                  </div>
                  <CardDescription className="text-gray-600">
                    {type.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {type.services.map((service, idx) => (
                      <li key={idx} className="flex items-start">
                        <Icon name="Check" className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-sm text-gray-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                    Записаться на ТО
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Преимущества</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Зачем нужно регулярное ТО</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={benefit.icon as any} className="text-white" size={28} />
                </div>
                <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-800 mb-4">График ТО</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Когда проводить ТО</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                  <div>
                    <h3 className="font-bold text-lg">Каждые 5 000 км</h3>
                    <p className="text-gray-600">Замена моторного масла и фильтра</p>
                  </div>
                  <Badge className="bg-orange-500 text-white">Критично</Badge>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <div>
                    <h3 className="font-bold text-lg">Каждые 15 000 км</h3>
                    <p className="text-gray-600">Базовое ТО + проверка систем</p>
                  </div>
                  <Badge className="bg-blue-500 text-white">Важно</Badge>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <div>
                    <h3 className="font-bold text-lg">Каждые 30 000 км</h3>
                    <p className="text-gray-600">Расширенное ТО + замена фильтров</p>
                  </div>
                  <Badge className="bg-green-500 text-white">Рекомендуется</Badge>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                  <div>
                    <h3 className="font-bold text-lg">Каждые 60 000 км</h3>
                    <p className="text-gray-600">Полное ТО + замена жидкостей</p>
                  </div>
                  <Badge className="bg-purple-500 text-white">Обязательно</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-orange-100 text-orange-800 mb-4">Качество работ</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Используем только качественные материалы
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Для технического обслуживания мы используем только оригинальные 
                  или качественные аналоговые запчасти и расходные материалы от 
                  проверенных производителей.
                </p>
                <p>
                  Все работы выполняются строго по регламенту производителя с 
                  соблюдением технологических процессов и использованием 
                  специального инструмента.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="flex items-center">
                  <Icon name="Check" className="text-green-500 mr-2" size={16} />
                  <span>Оригинальные масла</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Check" className="text-green-500 mr-2" size={16} />
                  <span>Качественные фильтры</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Check" className="text-green-500 mr-2" size={16} />
                  <span>Проверенные жидкости</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Check" className="text-green-500 mr-2" size={16} />
                  <span>Гарантия качества</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/947c5f17-5414-45af-9ba5-90eb26a9b125.jpg" 
                alt="Техническое обслуживание" 
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold text-orange-500">12</div>
                <div className="text-gray-600">месяцев гарантии</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Пора на ТО?</h2>
          <p className="text-xl text-gray-300 mb-8">Запишитесь на техническое обслуживание</p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
            <Icon name="Calendar" className="mr-2" size={20} />
            Записаться на ТО
          </Button>
        </div>
      </section>
    </div>
  );
}