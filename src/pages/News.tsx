import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

export default function News() {
  const news = [
    {
      id: 1,
      title: "Новое диагностическое оборудование Launch X431 Pro",
      excerpt: "Мы приобрели современный мультимарочный сканер для более точной диагностики",
      content: "В нашем автосервисе появилось новейшее диагностическое оборудование Launch X431 Pro. Этот профессиональный сканер позволяет проводить диагностику всех систем автомобилей более чем 150 марок. Теперь мы можем еще быстрее и точнее определять неисправности.",
      date: "15 января 2024",
      category: "Оборудование",
      image: "/img/492002d2-fd4e-4a41-b509-21dc6feaabdc.jpg"
    },
    {
      id: 2,
      title: "Акция: скидка 20% на техническое обслуживание",
      excerpt: "До конца месяца действует специальная цена на все виды ТО",
      content: "Только до 31 января 2024 года мы предоставляем скидку 20% на все виды технического обслуживания. В акцию входят: замена масла и фильтров, проверка всех систем автомобиля, диагностика. Количество мест ограничено!",
      date: "10 января 2024",
      category: "Акции",
      image: "/img/947c5f17-5414-45af-9ba5-90eb26a9b125.jpg"
    },
    {
      id: 3,
      title: "Расширение штата: новый мастер по электрике",
      excerpt: "К нашей команде присоединился опытный специалист по автоэлектрике",
      content: "Мы рады сообщить о пополнении нашей команды! К нам присоединился Дмитрий Козлов - мастер по автоэлектрике с 12-летним опытом работы. Теперь мы можем выполнять еще более сложные работы по ремонту электрооборудования.",
      date: "5 января 2024",
      category: "Команда",
      image: "/img/492002d2-fd4e-4a41-b509-21dc6feaabdc.jpg"
    },
    {
      id: 4,
      title: "Новые услуги: установка сигнализаций и автозапуск",
      excerpt: "Теперь мы предлагаем установку и настройку охранных систем",
      content: "Расширяем спектр наших услуг! Теперь мы устанавливаем автосигнализации, системы автозапуска и другие охранные системы. Работаем с ведущими производителями: StarLine, Pandora, Sheriff. Гарантия на установку - 2 года.",
      date: "28 декабря 2023",
      category: "Услуги",
      image: "/img/947c5f17-5414-45af-9ba5-90eb26a9b125.jpg"
    },
    {
      id: 5,
      title: "Итоги 2023 года: более 2000 довольных клиентов",
      excerpt: "Подводим итоги уходящего года и благодарим наших клиентов",
      content: "2023 год стал для нас очень успешным! Мы обслужили более 2000 автомобилей, выполнили свыше 5000 различных работ. Средняя оценка наших услуг составила 4.9 из 5. Спасибо всем нашим клиентам за доверие!",
      date: "25 декабря 2023",
      category: "Итоги",
      image: "/img/492002d2-fd4e-4a41-b509-21dc6feaabdc.jpg"
    },
    {
      id: 6,
      title: "Зимняя подготовка автомобиля: полезные советы",
      excerpt: "Как подготовить автомобиль к зимнему сезону - советы наших мастеров",
      content: "Наши мастера подготовили для вас полезные советы по подготовке автомобиля к зиме: проверка аккумулятора, замена масла на зимнее, проверка антифриза, установка зимних шин. Приезжайте к нам для комплексной подготовки!",
      date: "20 декабря 2023",
      category: "Советы",
      image: "/img/947c5f17-5414-45af-9ba5-90eb26a9b125.jpg"
    }
  ];

  const categories = ["Все", "Оборудование", "Акции", "Команда", "Услуги", "Итоги", "Советы"];

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
            Новости автосервиса
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Следите за новостями, акциями и полезными советами
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className={index === 0 ? "bg-orange-500 hover:bg-orange-600" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <Badge className="bg-orange-100 text-orange-800 mb-4">Главная новость</Badge>
            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <img 
                    src={news[0].image} 
                    alt={news[0].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-orange-500 text-white">{news[0].category}</Badge>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Icon name="Calendar" className="mr-2" size={16} />
                    {news[0].date}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{news[0].title}</h2>
                  <p className="text-gray-600 mb-6">{news[0].content}</p>
                  <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                    Читать полностью
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Все новости</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Последние обновления</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.slice(1).map((article) => (
              <Card key={article.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">{article.category}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Icon name="Calendar" className="mr-2" size={16} />
                    {article.date}
                  </div>
                  <CardTitle className="text-lg line-clamp-2">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </CardDescription>
                  <Button variant="outline" size="sm" className="w-full">
                    Читать далее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Badge className="bg-orange-100 text-orange-800 mb-4">Подписка</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Не пропускайте новости</h2>
            <p className="text-gray-600 mb-8">
              Подпишитесь на нашу рассылку и получайте уведомления о новых акциях, 
              услугах и полезных советах по обслуживанию автомобиля
            </p>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input 
                    type="email" 
                    placeholder="Ваш email адрес"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-8">
                    <Icon name="Mail" className="mr-2" size={20} />
                    Подписаться
                  </Button>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  Мы не передаем ваши данные третьим лицам и не рассылаем спам
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Социальные сети</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Следите за нами</h2>
            <p className="text-gray-600">Больше новостей и фото наших работ в социальных сетях</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Facebook" className="text-white" size={24} />
                </div>
                <h3 className="font-bold mb-2">Facebook</h3>
                <p className="text-sm text-gray-600 mb-4">Новости и акции</p>
                <Button variant="outline" size="sm">Подписаться</Button>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Twitter" className="text-white" size={24} />
                </div>
                <h3 className="font-bold mb-2">ВКонтакте</h3>
                <p className="text-sm text-gray-600 mb-4">Фото работ</p>
                <Button variant="outline" size="sm">Подписаться</Button>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Instagram" className="text-white" size={24} />
                </div>
                <h3 className="font-bold mb-2">Instagram</h3>
                <p className="text-sm text-gray-600 mb-4">Истории из сервиса</p>
                <Button variant="outline" size="sm">Подписаться</Button>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MessageCircle" className="text-white" size={24} />
                </div>
                <h3 className="font-bold mb-2">Telegram</h3>
                <p className="text-sm text-gray-600 mb-4">Быстрые новости</p>
                <Button variant="outline" size="sm">Подписаться</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Нужна помощь с автомобилем?</h2>
          <p className="text-xl text-gray-300 mb-8">Запишитесь на диагностику или консультацию</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              <Icon name="Phone" className="mr-2" size={20} />
              Записаться на ремонт
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Задать вопрос
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}