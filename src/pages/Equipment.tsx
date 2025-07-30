import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

export default function Equipment() {
  const equipmentCategories = [
    {
      title: "Диагностическое оборудование",
      icon: "Cpu",
      items: [
        {
          name: "Launch X431 Pro",
          description: "Профессиональный мультимарочный сканер",
          features: ["Все марки авто", "Онлайн обновления", "Осциллограф"]
        },
        {
          name: "Bosch KTS 560",
          description: "Диагностический тестер премиум класса",
          features: ["Быстрая диагностика", "Точные измерения", "Отчеты"]
        },
        {
          name: "Hantek DSO5102P",
          description: "Цифровой осциллограф",
          features: ["100 МГц", "2 канала", "USB интерфейс"]
        }
      ]
    },
    {
      title: "Подъемное оборудование",
      icon: "ArrowUp",
      items: [
        {
          name: "Подъемник 4-стоечный",
          description: "Грузоподъемность 5 тонн",
          features: ["Безопасность", "Надежность", "Удобство работы"]
        },
        {
          name: "Подъемник 2-стоечный",
          description: "Для легковых автомобилей",
          features: ["3.5 тонны", "Электрогидравлика", "Автоблокировка"]
        },
        {
          name: "Домкраты подкатные",
          description: "Профессиональные домкраты",
          features: ["2-3 тонны", "Низкий подхват", "Быстрый подъем"]
        }
      ]
    },
    {
      title: "Инструменты и оборудование",
      icon: "Wrench",
      items: [
        {
          name: "Пневмоинструмент",
          description: "Профессиональный пневматический инструмент",
          features: ["Высокая мощность", "Надежность", "Эргономичность"]
        },
        {
          name: "Компрессор винтовой",
          description: "Производительность 500 л/мин",
          features: ["Тихая работа", "Экономичность", "Автоматика"]
        },
        {
          name: "Сварочное оборудование",
          description: "Аргонодуговая и полуавтоматическая сварка",
          features: ["Высокое качество", "Точность", "Универсальность"]
        }
      ]
    },
    {
      title: "Стенды и приборы",
      icon: "Settings",
      items: [
        {
          name: "Стенд развал-схождения",
          description: "3D стенд Hunter HawkEye Elite",
          features: ["Высокая точность", "Быстрая настройка", "Отчеты"]
        },
        {
          name: "Балансировочный станок",
          description: "Для колес до R24",
          features: ["Автоматические режимы", "Точность 1г", "ЖК дисплей"]
        },
        {
          name: "Шиномонтажный станок",
          description: "Автоматический станок",
          features: ["R13-R26", "Бережная установка", "Быстрота"]
        }
      ]
    }
  ];

  const advantages = [
    {
      icon: "Award",
      title: "Современное оборудование",
      description: "Используем только профессиональное оборудование ведущих мировых производителей"
    },
    {
      icon: "Zap",
      title: "Высокая точность",
      description: "Точная диагностика и качественный ремонт благодаря современным технологиям"
    },
    {
      icon: "Clock",
      title: "Быстрое обслуживание",
      description: "Современное оборудование позволяет выполнять работы быстро и качественно"
    },
    {
      icon: "Shield",
      title: "Безопасность",
      description: "Все оборудование сертифицировано и соответствует стандартам безопасности"
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
            Наше оборудование
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Современное профессиональное оборудование для качественного ремонта
          </p>
        </div>
      </section>

      {/* Equipment Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-800 mb-4">Оборудование</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Профессиональные инструменты</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Мы инвестируем в лучшее оборудование для качественного обслуживания
            </p>
          </div>
          
          <div className="space-y-16">
            {equipmentCategories.map((category, index) => (
              <div key={index}>
                <div className="flex items-center justify-center mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <Icon name={category.icon as any} className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {category.items.map((item, idx) => (
                    <Card key={idx} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                      <CardHeader>
                        <CardTitle className="text-lg text-gray-900">{item.name}</CardTitle>
                        <CardDescription className="text-gray-600">
                          {item.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {item.features.map((feature, featureIdx) => (
                            <li key={featureIdx} className="flex items-center text-sm text-gray-600">
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
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Преимущества</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Почему мы используем лучшее оборудование</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={advantage.icon as any} className="text-white" size={28} />
                </div>
                <h3 className="font-bold text-lg mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-orange-100 text-orange-800 mb-4">Инвестиции</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Постоянное обновление парка оборудования
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Мы регулярно инвестируем в обновление и модернизацию нашего 
                  оборудования, чтобы предоставлять услуги на самом высоком уровне. 
                  Современные технологии позволяют нам работать быстрее, точнее и качественнее.
                </p>
                <p>
                  Наши мастера проходят регулярное обучение работе с новым оборудованием, 
                  что гарантирует профессиональное выполнение всех видов работ.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-2xl font-bold text-orange-500">5М+</div>
                  <div className="text-sm text-gray-600">инвестировано в оборудование</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow">
                  <div className="text-2xl font-bold text-blue-600">2024</div>
                  <div className="text-sm text-gray-600">год последнего обновления</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/492002d2-fd4e-4a41-b509-21dc6feaabdc.jpg" 
                alt="Современное оборудование" 
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold text-orange-500">100%</div>
                <div className="text-gray-600">современное оборудование</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-800 mb-4">Бренды</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Мы работаем с лучшими</h2>
            <p className="text-gray-600">Оборудование от ведущих мировых производителей</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {['Launch', 'Bosch', 'Hunter', 'Hantek', 'Fluke', 'Snap-on'].map((brand, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="text-xl font-bold text-gray-700">{brand}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Убедитесь в качестве нашего оборудования</h2>
          <p className="text-xl text-gray-300 mb-8">Приезжайте на экскурсию по нашему автосервису</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              <Icon name="Eye" className="mr-2" size={20} />
              Записаться на экскурсию
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
              <Icon name="Phone" className="mr-2" size={20} />
              Задать вопрос
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}