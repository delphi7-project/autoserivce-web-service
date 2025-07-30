import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

export default function Careers() {
  const vacancies = [
    {
      title: "Автомеханик",
      department: "Ремонт двигателей",
      type: "Полная занятость",
      salary: "от 80 000 ₽",
      experience: "от 3 лет",
      requirements: [
        "Опыт ремонта двигателей от 3 лет",
        "Знание устройства современных автомобилей",
        "Умение работать с диагностическим оборудованием",
        "Ответственность и внимательность"
      ],
      responsibilities: [
        "Диагностика и ремонт двигателей",
        "Замена расходных материалов",
        "Консультирование клиентов",
        "Ведение документации"
      ]
    },
    {
      title: "Мастер по ходовой части",
      department: "Подвеска и тормоза",
      type: "Полная занятость",
      salary: "от 70 000 ₽",
      experience: "от 2 лет",
      requirements: [
        "Опыт ремонта подвески от 2 лет",
        "Знание тормозных систем",
        "Умение работать с подъемным оборудованием",
        "Физическая выносливость"
      ],
      responsibilities: [
        "Ремонт подвески автомобилей",
        "Замена тормозных колодок и дисков",
        "Развал-схождение колес",
        "Шиномонтажные работы"
      ]
    },
    {
      title: "Автоэлектрик",
      department: "Электрооборудование",
      type: "Полная занятость",
      salary: "от 75 000 ₽",
      experience: "от 3 лет",
      requirements: [
        "Опыт работы автоэлектриком от 3 лет",
        "Знание электрических схем автомобилей",
        "Умение работать с мультиметром и осциллографом",
        "Аккуратность в работе"
      ],
      responsibilities: [
        "Диагностика электрооборудования",
        "Ремонт генераторов и стартеров",
        "Установка сигнализаций",
        "Ремонт проводки"
      ]
    }
  ];

  const benefits = [
    {
      icon: "DollarSign",
      title: "Достойная зарплата",
      description: "Конкурентная оплата труда + премии за качество работы"
    },
    {
      icon: "Clock",
      title: "Удобный график",
      description: "5/2 с 8:00 до 17:00, без переработок и ночных смен"
    },
    {
      icon: "GraduationCap",
      title: "Обучение и развитие",
      description: "Оплачиваемые курсы повышения квалификации"
    },
    {
      icon: "Shield",
      title: "Социальные гарантии",
      description: "Официальное трудоустройство, отпуск, больничные"
    },
    {
      icon: "Users",
      title: "Дружный коллектив",
      description: "Работа в команде профессионалов своего дела"
    },
    {
      icon: "Award",
      title: "Карьерный рост",
      description: "Возможность стать бригадиром или мастером участка"
    }
  ];

  const requirements = [
    "Профильное образование или опыт работы",
    "Ответственность и пунктуальность",
    "Желание развиваться в профессии",
    "Коммуникабельность",
    "Физическая выносливость",
    "Внимательность к деталям"
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
            Работа в СТО ЛИДЕР
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Присоединяйтесь к команде профессионалов автосервиса
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-800 mb-4">Почему мы?</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Преимущества работы у нас</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Мы создаем комфортные условия для профессионального роста наших сотрудников
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={benefit.icon as any} className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Вакансии</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Открытые позиции</h2>
            <p className="text-gray-600">Актуальные вакансии в нашем автосервисе</p>
          </div>
          
          <div className="space-y-8">
            {vacancies.map((vacancy, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-2xl text-gray-900 mb-2">{vacancy.title}</CardTitle>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="outline">{vacancy.department}</Badge>
                        <Badge variant="outline">{vacancy.type}</Badge>
                        <Badge className="bg-green-100 text-green-800">{vacancy.salary}</Badge>
                        <Badge variant="secondary">Опыт: {vacancy.experience}</Badge>
                      </div>
                    </div>
                    <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 md:ml-4">
                      Откликнуться
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Требования:</h4>
                      <ul className="space-y-2">
                        {vacancy.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start text-gray-600">
                            <Icon name="Check" className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Обязанности:</h4>
                      <ul className="space-y-2">
                        {vacancy.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start text-gray-600">
                            <Icon name="ArrowRight" className="text-blue-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* General Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-orange-100 text-orange-800 mb-4">Требования</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Общие требования к кандидатам</h2>
            </div>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Мы ищем людей, которые:</h3>
                    <ul className="space-y-3">
                      {requirements.map((req, index) => (
                        <li key={index} className="flex items-start">
                          <Icon name="Check" className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                          <span className="text-gray-600">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Мы предлагаем:</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-start">
                        <Icon name="Star" className="text-orange-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                        Стабильную работу в растущей компании
                      </li>
                      <li className="flex items-start">
                        <Icon name="Star" className="text-orange-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                        Современное оборудование и инструменты
                      </li>
                      <li className="flex items-start">
                        <Icon name="Star" className="text-orange-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                        Дружный коллектив и поддержку коллег
                      </li>
                      <li className="flex items-start">
                        <Icon name="Star" className="text-orange-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                        Возможности для профессионального роста
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-blue-100 text-blue-800 mb-4">Отклик</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Отправить резюме</h2>
              <p className="text-gray-600">Заполните форму, и мы свяжемся с вами в ближайшее время</p>
            </div>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Имя *</label>
                      <Input placeholder="Ваше имя" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Фамилия *</label>
                      <Input placeholder="Ваша фамилия" required />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Телефон *</label>
                      <Input placeholder="+7 (___) ___-__-__" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <Input type="email" placeholder="your@email.com" required />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Желаемая позиция</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
                      <option value="">Выберите позицию</option>
                      <option value="mechanic">Автомеханик</option>
                      <option value="suspension">Мастер по ходовой части</option>
                      <option value="electrician">Автоэлектрик</option>
                      <option value="other">Другая позиция</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Опыт работы</label>
                    <Textarea placeholder="Расскажите о своем опыте работы, образовании и навыках" rows={4} />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Дополнительная информация</label>
                    <Textarea placeholder="Любая дополнительная информация, которую вы хотели бы сообщить" rows={3} />
                  </div>
                  
                  <div className="flex items-center">
                    <input type="checkbox" id="agreement" className="mr-2" required />
                    <label htmlFor="agreement" className="text-sm text-gray-600">
                      Я согласен на обработку персональных данных
                    </label>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить резюме
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact HR */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Есть вопросы о вакансиях?</h2>
          <p className="text-xl text-gray-300 mb-8">Свяжитесь с нашим HR-менеджером для получения подробной информации</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              <Icon name="Phone" className="mr-2" size={20} />
              Позвонить HR
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