import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

export default function FAQ() {
  const faqCategories = [
    {
      title: "Общие вопросы",
      icon: "HelpCircle",
      questions: [
        {
          question: "Какие марки автомобилей вы обслуживаете?",
          answer: "Мы работаем со всеми марками легковых автомобилей: европейскими, японскими, корейскими, американскими и российскими. Наше диагностическое оборудование поддерживает более 150 марок автомобилей."
        },
        {
          question: "Сколько времени занимает диагностика?",
          answer: "Компьютерная диагностика занимает от 30 до 60 минут в зависимости от сложности проблемы. Комплексная диагностика может занять до 2 часов."
        },
        {
          question: "Предоставляете ли вы гарантию на работы?",
          answer: "Да, мы предоставляем гарантию 12 месяцев на все виды выполненных работ и 24 месяца на установленные запчасти (гарантия производителя)."
        },
        {
          question: "Можно ли записаться на определенное время?",
          answer: "Конечно! Мы работаем по предварительной записи. Вы можете записаться по телефону или через наш сайт на удобное для вас время."
        }
      ]
    },
    {
      title: "Цены и оплата",
      icon: "DollarSign",
      questions: [
        {
          question: "Как формируется стоимость ремонта?",
          answer: "Стоимость складывается из цены работ (согласно нашему прайсу) и стоимости запчастей. Мы всегда предоставляем подробную смету перед началом работ."
        },
        {
          question: "Какие способы оплаты вы принимаете?",
          answer: "Мы принимаем наличные, банковские карты, безналичный расчет для юридических лиц. Также возможна рассрочка платежа при крупном ремонте."
        },
        {
          question: "Можно ли получить скидку?",
          answer: "Да, у нас действует система скидок: 10% для постоянных клиентов, 5% для пенсионеров, до 20% для корпоративных клиентов."
        },
        {
          question: "Входит ли диагностика в стоимость ремонта?",
          answer: "Если вы делаете ремонт у нас, то стоимость диагностики засчитывается в общую стоимость работ."
        }
      ]
    },
    {
      title: "Запчасти и материалы",
      icon: "Package",
      questions: [
        {
          question: "Какие запчасти вы используете?",
          answer: "Мы используем оригинальные запчасти или качественные аналоги от проверенных производителей. Всегда согласовываем выбор запчастей с клиентом."
        },
        {
          question: "Можно ли привезти свои запчасти?",
          answer: "Да, вы можете привезти свои запчасти. В этом случае мы предоставляем гарантию только на выполненные работы, но не на запчасти."
        },
        {
          question: "Как долго ждать доставку запчастей?",
          answer: "Популярные запчасти обычно есть в наличии. Редкие детали заказываем под конкретный автомобиль - срок поставки от 1 до 7 дней."
        },
        {
          question: "Предоставляете ли документы на запчасти?",
          answer: "Да, на все запчасти мы предоставляем документы: чеки, гарантийные талоны, сертификаты качества."
        }
      ]
    },
    {
      title: "Техническое обслуживание",
      icon: "Settings",
      questions: [
        {
          question: "Как часто нужно проходить ТО?",
          answer: "Рекомендуем проходить ТО согласно регламенту производителя: обычно каждые 10-15 тысяч км или раз в год. Замену масла - каждые 5-7 тысяч км."
        },
        {
          question: "Что входит в базовое ТО?",
          answer: "Базовое ТО включает: замену моторного масла и фильтра, проверку уровней жидкостей, диагностику основных систем, визуальный осмотр."
        },
        {
          question: "Сохраняется ли гарантия при ТО у вас?",
          answer: "Да, при прохождении ТО у нас заводская гарантия на автомобиль сохраняется. Мы выдаем все необходимые документы."
        },
        {
          question: "Можно ли сделать ТО в день обращения?",
          answer: "Если есть свободное время и необходимые расходники в наличии - да. Но лучше записаться заранее для гарантированного обслуживания."
        }
      ]
    }
  ];

  const quickAnswers = [
    {
      question: "Режим работы",
      answer: "Пн-Пт: 8:00-20:00, Сб: 9:00-18:00, Вс: 10:00-16:00",
      icon: "Clock"
    },
    {
      question: "Адрес",
      answer: "ул. Чекменева, 27, Сочи",
      icon: "MapPin"
    },
    {
      question: "Телефоны",
      answer: "+7 (988) 235-66-88, +7 (921) 303-30-30",
      icon: "Phone"
    },
    {
      question: "Email",
      answer: "Stolidersochi@mail.ru",
      icon: "Mail"
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
            Часто задаваемые вопросы
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Ответы на самые популярные вопросы о наших услугах
          </p>
        </div>
      </section>

      {/* Quick Answers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-orange-100 text-orange-800 mb-4">Быстрые ответы</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Основная информация</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickAnswers.map((item, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Icon name={item.icon as any} className="text-white" size={20} />
                  </div>
                  <CardTitle className="text-lg">{item.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">FAQ</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Подробные ответы</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Найдите ответы на интересующие вас вопросы
            </p>
          </div>
          
          <div className="space-y-12">
            {faqCategories.map((category, index) => (
              <div key={index}>
                <div className="flex items-center justify-center mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <Icon name={category.icon as any} className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                </div>
                
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <Accordion type="single" collapsible className="w-full">
                      {category.questions.map((faq, idx) => (
                        <AccordionItem key={idx} value={`item-${index}-${idx}`}>
                          <AccordionTrigger className="text-left font-medium">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-600">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-orange-100 text-orange-800 mb-4">Нужна помощь?</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Не нашли ответ на свой вопрос?</h2>
            <p className="text-gray-600 mb-8">Свяжитесь с нами любым удобным способом</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" className="text-white" size={28} />
                </div>
                <CardTitle>Позвонить</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Получите консультацию по телефону</p>
                <Button className="bg-orange-500 hover:bg-orange-600">
                  Позвонить сейчас
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MessageCircle" className="text-white" size={28} />
                </div>
                <CardTitle>Написать</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Отправьте вопрос на email</p>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                  Написать письмо
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" className="text-white" size={28} />
                </div>
                <CardTitle>Приехать</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Посетите наш автосервис</p>
                <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white">
                  Построить маршрут
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Полезные советы</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Рекомендации автовладельцам</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Icon name="AlertTriangle" className="text-orange-500 mb-2" size={24} />
                <CardTitle className="text-lg">Когда обращаться в сервис</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Появились посторонние звуки</li>
                  <li>• Загорелись лампочки на панели</li>
                  <li>• Изменилось поведение автомобиля</li>
                  <li>• Подошел срок планового ТО</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Icon name="CheckCircle" className="text-green-500 mb-2" size={24} />
                <CardTitle className="text-lg">Как подготовиться к визиту</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Запишитесь заранее</li>
                  <li>• Подготовьте документы на авто</li>
                  <li>• Опишите проблему подробно</li>
                  <li>• Уберите ценные вещи из салона</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <Icon name="DollarSign" className="text-blue-500 mb-2" size={24} />
                <CardTitle className="text-lg">Как сэкономить на ремонте</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>• Проходите регулярное ТО</li>
                  <li>• Не откладывайте мелкий ремонт</li>
                  <li>• Используйте качественные масла</li>
                  <li>• Станьте постоянным клиентом</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Остались вопросы?</h2>
          <p className="text-xl text-gray-300 mb-8">Мы всегда готовы помочь и проконсультировать</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              <Icon name="Phone" className="mr-2" size={20} />
              Получить консультацию
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
              <Icon name="Calendar" className="mr-2" size={20} />
              Записаться на прием
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}