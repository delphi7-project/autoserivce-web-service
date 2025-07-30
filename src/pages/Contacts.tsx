import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

export default function Contacts() {
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
            Контакты
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Свяжитесь с нами любым удобным способом
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" className="text-white" size={28} />
                </div>
                <CardTitle>Телефоны</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-xl font-bold text-orange-500">+7 (988) 235-66-88</p>
                  <p className="text-xl font-bold text-orange-500">+7 (921) 303-30-30</p>
                  <p className="text-gray-600">Ежедневно с 8:00 до 20:00</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" className="text-white" size={28} />
                </div>
                <CardTitle>Адрес</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-lg font-semibold">ул. Чекменева, 27</p>
                  <p className="text-gray-600">Сочи, 354024</p>
                  <p className="text-sm text-gray-500">Рядом с магазином "Все для сада и огорода"</p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" className="text-white" size={28} />
                </div>
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-lg font-semibold">Stolidersochi@mail.ru</p>
                  <p className="text-gray-600">Ответим в течение часа</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Badge className="bg-orange-100 text-orange-800 mb-4">Свяжитесь с нами</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Отправьте нам сообщение</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Имя</label>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Телефон</label>
                    <Input placeholder="+7 (___) ___-__-__" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Марка и модель автомобиля</label>
                  <Input placeholder="Например: Toyota Camry 2018" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Сообщение</label>
                  <Textarea placeholder="Опишите проблему или интересующую услугу" rows={4} />
                </div>
                <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить сообщение
                </Button>
              </form>
            </div>

            <div>
              <Badge className="bg-blue-100 text-blue-800 mb-4">Режим работы</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Мы работаем для вас</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                  <span className="font-medium">Понедельник - Пятница</span>
                  <span className="text-orange-500 font-bold">8:00 - 20:00</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                  <span className="font-medium">Суббота</span>
                  <span className="text-orange-500 font-bold">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                  <span className="font-medium">Воскресенье</span>
                  <span className="text-orange-500 font-bold">10:00 - 16:00</span>
                </div>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Экстренная помощь</h3>
                <p className="text-gray-600 mb-4">
                  Если ваш автомобиль сломался в дороге, мы можем организовать эвакуацию 
                  и экстренный ремонт.
                </p>
                <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
                  <Icon name="Phone" className="mr-2" size={16} />
                  Вызвать эвакуатор
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-orange-100 text-orange-800 mb-4">Как нас найти</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Наше местоположение</h2>
            <p className="text-gray-600">Мы находимся в удобном месте с хорошей транспортной доступностью</p>
          </div>
          
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Icon name="MapPin" className="text-gray-400 mx-auto mb-4" size={48} />
              <p className="text-gray-600">Здесь будет интерактивная карта</p>
              <p className="text-sm text-gray-500">ул. Чекменева, 27, Сочи</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}