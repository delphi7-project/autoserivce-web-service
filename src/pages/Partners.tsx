import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

export default function Partners() {
  const partnerTypes = [
    {
      title: "Поставщики запчастей",
      icon: "Package",
      description: "Надежные поставщики оригинальных и качественных запчастей",
      partners: [
        { name: "AutoParts Pro", description: "Оригинальные запчасти для европейских авто" },
        { name: "JapanCar", description: "Запчасти для японских и корейских автомобилей" },
        { name: "RusAuto", description: "Запчасти для отечественных автомобилей" }
      ]
    },
    {
      title: "Производители оборудования",
      icon: "Settings",
      description: "Ведущие мировые производители диагностического оборудования",
      partners: [
        { name: "Launch Tech", description: "Диагностическое оборудование" },
        { name: "Bosch", description: "Профессиональные инструменты" },
        { name: "Hunter Engineering", description: "Стенды развал-схождения" }
      ]
    },
    {
      title: "Страховые компании",
      icon: "Shield",
      description: "Партнерство со страховыми компаниями для ремонта по ОСАГО и КАСКО",
      partners: [
        { name: "РЕСО-Гарантия", description: "Ремонт по ОСАГО и КАСКО" },
        { name: "Ингосстрах", description: "Прямое урегулирование убытков" },
        { name: "АльфаСтрахование", description: "Партнерская программа" }
      ]
    },
    {
      title: "Автосалоны",
      icon: "Car",
      description: "Сотрудничество с официальными дилерами автомобилей",
      partners: [
        { name: "Toyota Центр", description: "Гарантийное обслуживание Toyota" },
        { name: "Hyundai Мотор", description: "Сервисное обслуживание Hyundai" },
        { name: "Volkswagen Центр", description: "Партнерство по обслуживанию VW" }
      ]
    }
  ];

  const benefits = [
    {
      icon: "TrendingUp",
      title: "Взаимный рост",
      description: "Развиваемся вместе, увеличивая объемы и качество услуг"
    },
    {
      icon: "Users",
      title: "Расширение клиентской базы",
      description: "Привлекаем новых клиентов через партнерские программы"
    },
    {
      icon: "Award",
      title: "Повышение качества",
      description: "Используем лучшие материалы и оборудование партнеров"
    },
    {
      icon: "Handshake",
      title: "Долгосрочные отношения",
      description: "Строим надежные партнерские отношения на годы вперед"
    }
  ];

  const partnershipTypes = [
    {
      title: "Поставщик запчастей",
      description: "Стать нашим поставщиком автозапчастей и расходных материалов",
      requirements: [
        "Наличие сертификатов качества",
        "Конкурентные цены",
        "Быстрая доставка",
        "Гарантия на продукцию"
      ]
    },
    {
      title: "Страховая компания",
      description: "Партнерство по ремонту автомобилей по страховым случаям",
      requirements: [
        "Лицензия на страховую деятельность",
        "Прозрачная система расчетов",
        "Быстрое урегулирование",
        "Качественный сервис"
      ]
    },
    {
      title: "Автосалон",
      description: "Сотрудничество по гарантийному и послегарантийному обслуживанию",
      requirements: [
        "Официальный дилерский статус",
        "Соблюдение стандартов производителя",
        "Квалифицированный персонал",
        "Современное оборудование"
      ]
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
            Наши партнеры
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Сотрудничаем с лучшими компаниями для качественного обслуживания
          </p>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-800 mb-4">Партнерство</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши партнеры</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Мы работаем с проверенными компаниями для обеспечения высокого качества услуг
            </p>
          </div>
          
          <div className="space-y-16">
            {partnerTypes.map((type, index) => (
              <div key={index}>
                <div className="flex items-center justify-center mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <Icon name={type.icon as any} className="text-white" size={24} />
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900">{type.title}</h3>
                    <p className="text-gray-600 mt-2">{type.description}</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {type.partners.map((partner, idx) => (
                    <Card key={idx} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                      <CardHeader>
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl font-bold text-gray-600">{partner.name.charAt(0)}</span>
                        </div>
                        <CardTitle className="text-lg">{partner.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{partner.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Преимущества</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Преимущества партнерства</h2>
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

      {/* Become Partner */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-800 mb-4">Стать партнером</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Хотите стать нашим партнером?</h2>
            <p className="text-gray-600">Рассмотрим различные варианты сотрудничества</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {partnershipTypes.map((type, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{type.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {type.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-gray-900 mb-3">Требования:</h4>
                  <ul className="space-y-2 mb-6">
                    {type.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start text-gray-600">
                        <Icon name="Check" className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                        {req}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                    Подать заявку
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-blue-100 text-blue-800 mb-4">Заявка</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Заявка на партнерство</h2>
              <p className="text-gray-600">Заполните форму, и мы свяжемся с вами для обсуждения условий сотрудничества</p>
            </div>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Название компании *</label>
                      <Input placeholder="ООО 'Ваша компания'" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Сфера деятельности *</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" required>
                        <option value="">Выберите сферу</option>
                        <option value="parts">Поставка запчастей</option>
                        <option value="equipment">Оборудование</option>
                        <option value="insurance">Страхование</option>
                        <option value="dealer">Автосалон</option>
                        <option value="other">Другое</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Контактное лицо *</label>
                      <Input placeholder="Имя и фамилия" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Должность</label>
                      <Input placeholder="Директор, менеджер и т.д." />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Телефон *</label>
                      <Input placeholder="+7 (___) ___-__-__" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <Input type="email" placeholder="company@email.com" required />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Веб-сайт</label>
                    <Input placeholder="https://yourcompany.com" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Предложение о сотрудничестве *</label>
                    <Textarea 
                      placeholder="Опишите ваше предложение: какие услуги/товары предлагаете, условия сотрудничества, преимущества" 
                      rows={4} 
                      required 
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Дополнительная информация</label>
                    <Textarea 
                      placeholder="Любая дополнительная информация о вашей компании" 
                      rows={3} 
                    />
                  </div>
                  
                  <div className="flex items-center">
                    <input type="checkbox" id="agreement" className="mr-2" required />
                    <label htmlFor="agreement" className="text-sm text-gray-600">
                      Я согласен на обработку персональных данных и коммерческой информации
                    </label>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Вопросы о партнерстве?</h2>
          <p className="text-xl text-gray-300 mb-8">Свяжитесь с нашим менеджером по развитию бизнеса</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              <Icon name="Phone" className="mr-2" size={20} />
              Позвонить менеджеру
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
              <Icon name="Mail" className="mr-2" size={20} />
              Написать письмо
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}