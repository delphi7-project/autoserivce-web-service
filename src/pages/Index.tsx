import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

export default function Index() {
  const services = [
    {
      icon: "Wrench",
      title: "Диагностика двигателя",
      description: "Компьютерная диагностика всех систем автомобиля"
    },
    {
      icon: "Settings",
      title: "Техническое обслуживание",
      description: "Плановое ТО согласно регламенту производителя"
    },
    {
      icon: "Zap",
      title: "Электрика",
      description: "Ремонт электрооборудования и электроники"
    },
    {
      icon: "Gauge",
      title: "Ходовая часть",
      description: "Ремонт подвески, рулевого управления, тормозов"
    },
    {
      icon: "Cog",
      title: "Трансмиссия",
      description: "Ремонт АКПП, МКПП, сцепления"
    },
    {
      icon: "Thermometer",
      title: "Система охлаждения",
      description: "Замена радиатора, термостата, помпы"
    }
  ];

  const reviews = [
    {
      name: "Алексей М.",
      rating: 5,
      text: "Отличный сервис! Быстро диагностировали и устранили проблему с двигателем.",
      car: "BMW X5"
    },
    {
      name: "Мария К.",
      rating: 5,
      text: "Профессиональный подход, честные цены. Рекомендую!",
      car: "Toyota Camry"
    },
    {
      name: "Дмитрий П.",
      rating: 5,
      text: "Качественный ремонт ходовой. Работают аккуратно и в срок.",
      car: "Audi A4"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Icon name="Car" className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">АвтоСервис Pro</h1>
              <p className="text-sm text-gray-600">Профессиональный ремонт</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-700 hover:text-orange-500 transition-colors">Услуги</a>
            <a href="#reviews" className="text-gray-700 hover:text-orange-500 transition-colors">Отзывы</a>
            <a href="#guarantees" className="text-gray-700 hover:text-orange-500 transition-colors">Гарантии</a>
            <a href="#contacts" className="text-gray-700 hover:text-orange-500 transition-colors">Контакты</a>
          </nav>
          <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
            Записаться
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-orange-500">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Современный автосервис
              <span className="block text-orange-300">полного цикла</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Все виды ремонта и обслуживания автомобилей, кроме покраски и кузовного ремонта. 
              Профессиональное оборудование и опытные мастера.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4">
                <Icon name="Phone" className="mr-2" size={20} />
                Записаться на ремонт
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4">
                <Icon name="Calculator" className="mr-2" size={20} />
                Рассчитать стоимость
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" className="fill-gray-100">
            <path d="M0,96L48,80C96,64,192,32,288,32C384,32,480,64,576,85.3C672,107,768,117,864,106.7C960,96,1056,64,1152,58.7C1248,53,1344,75,1392,85.3L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-800 mb-4">Наши услуги</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Полный спектр автоуслуг</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Предоставляем качественный ремонт и обслуживание всех систем автомобиля
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon as any} className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Image Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-blue-100 text-blue-800 mb-4">Почему мы?</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Современное оборудование и профессионалы
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Check" className="text-white" size={16} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Компьютерная диагностика</h3>
                    <p className="text-gray-600">Современные диагностические сканеры для всех марок автомобилей</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Check" className="text-white" size={16} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Оригинальные запчасти</h3>
                    <p className="text-gray-600">Работаем только с проверенными поставщиками качественных деталей</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Check" className="text-white" size={16} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Опытные мастера</h3>
                    <p className="text-gray-600">Специалисты с многолетним опытом и постоянным обучением</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/492002d2-fd4e-4a41-b509-21dc6feaabdc.jpg" 
                alt="Современный автосервис" 
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold text-orange-500">15+</div>
                <div className="text-gray-600">лет опыта</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-800 mb-4">Отзывы клиентов</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Что говорят наши клиенты</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <p className="text-sm text-gray-500">{review.car}</p>
                    </div>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" className="text-orange-400 fill-current" size={16} />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section id="guarantees" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Гарантии</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши гарантии качества</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" className="text-white" size={32} />
              </div>
              <h3 className="font-bold text-xl mb-2">12 месяцев</h3>
              <p className="text-gray-600">Гарантия на все виды работ</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" className="text-white" size={32} />
              </div>
              <h3 className="font-bold text-xl mb-2">В срок</h3>
              <p className="text-gray-600">Точное соблюдение сроков ремонта</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" className="text-white" size={32} />
              </div>
              <h3 className="font-bold text-xl mb-2">Качество</h3>
              <p className="text-gray-600">Сертифицированные специалисты</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="DollarSign" className="text-white" size={32} />
              </div>
              <h3 className="font-bold text-xl mb-2">Честные цены</h3>
              <p className="text-gray-600">Без скрытых доплат</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-orange-500 text-white mb-4">Контакты</Badge>
            <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-gray-300">Мы работаем для вас каждый день</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-gray-700 text-white">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Phone" className="text-white" size={24} />
                </div>
                <CardTitle>Телефон</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-orange-400">+7 (495) 123-45-67</p>
                <p className="text-gray-400">Ежедневно с 8:00 до 20:00</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700 text-white">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="MapPin" className="text-white" size={24} />
                </div>
                <CardTitle>Адрес</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">ул. Автомобильная, 15</p>
                <p className="text-gray-400">Москва, 115419</p>
                <p className="text-gray-400">Рядом с метро "Автозаводская"</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700 text-white">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Mail" className="text-white" size={24} />
                </div>
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">info@autoservice-pro.ru</p>
                <p className="text-gray-400">Ответим в течение часа</p>
              </CardContent>
            </Card>
          </div>
          
          <Separator className="my-12 bg-gray-700" />
          
          <div className="text-center">
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-12 py-4">
              <Icon name="Calendar" className="mr-2" size={20} />
              Записаться на диагностику
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Icon name="Car" className="text-white" size={20} />
              </div>
              <span className="text-xl font-bold">АвтоСервис Pro</span>
            </div>
            <p className="text-gray-400">© 2024 АвтоСервис Pro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}