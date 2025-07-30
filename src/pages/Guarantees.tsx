import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

export default function Guarantees() {
  const guaranteeTypes = [
    {
      icon: "Shield",
      title: "Гарантия на работы",
      period: "12 месяцев",
      description: "Полная гарантия на все виды выполненных работ",
      details: [
        "Бесплатное устранение дефектов",
        "Повторная диагностика за наш счет",
        "Компенсация расходов на эвакуацию",
        "Предоставление справки для страховой"
      ]
    },
    {
      icon: "Wrench",
      title: "Гарантия на запчасти",
      period: "24 месяца",
      description: "Гарантия производителя на все установленные детали",
      details: [
        "Замена бракованных деталей",
        "Возврат стоимости при заводском браке",
        "Помощь в гарантийных вопросах",
        "Ведение базы установленных деталей"
      ]
    },
    {
      icon: "Clock",
      title: "Гарантия сроков",
      period: "100%",
      description: "Соблюдение согласованных сроков выполнения работ",
      details: [
        "Скидка 10% при нарушении сроков",
        "Предварительная оценка времени",
        "Уведомления о ходе работ",
        "Приоритетное обслуживание при задержке"
      ]
    },
    {
      icon: "DollarSign",
      title: "Ценовая гарантия",
      period: "Фиксированная",
      description: "Цена не изменится после начала работ",
      details: [
        "Предварительная смета",
        "Согласование дополнительных работ",
        "Никаких скрытых доплат",
        "Возможность отказа от доп. услуг"
      ]
    }
  ];

  const conditions = [
    {
      title: "Условия гарантии на работы",
      items: [
        "Гарантия действует при соблюдении рекомендаций по эксплуатации",
        "Использование рекомендованных масел и жидкостей",
        "Своевременное прохождение планового ТО",
        "Обращение при первых признаках неисправности",
        "Сохранение документов о выполненных работах"
      ]
    },
    {
      title: "Гарантия не распространяется на",
      items: [
        "Повреждения в результате ДТП или неправильной эксплуатации",
        "Естественный износ расходных материалов",
        "Поломки из-за использования некачественного топлива",
        "Повреждения от внешних факторов (коррозия, механические повреждения)",
        "Работы, выполненные в других сервисах"
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
            Гарантии качества
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Мы уверены в качестве наших услуг и предоставляем полные гарантии
          </p>
        </div>
      </section>

      {/* Guarantee Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-800 mb-4">Наши гарантии</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Полная защита ваших интересов</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Мы предоставляем комплексные гарантии на все виды услуг
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {guaranteeTypes.map((guarantee, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={guarantee.icon as any} className="text-white" size={32} />
                  </div>
                  <CardTitle className="text-xl text-gray-900">{guarantee.title}</CardTitle>
                  <Badge className="bg-green-100 text-green-800 mx-auto">{guarantee.period}</Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-4 text-center">
                    {guarantee.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {guarantee.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <Icon name="Check" className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Процедура</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Как воспользоваться гарантией</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Обращение</h3>
              <p className="text-gray-600">Свяжитесь с нами при обнаружении проблемы</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Диагностика</h3>
              <p className="text-gray-600">Бесплатная проверка гарантийного случая</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Устранение</h3>
              <p className="text-gray-600">Бесплатное устранение дефектов</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Контроль</h3>
              <p className="text-gray-600">Проверка качества выполненных работ</p>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-800 mb-4">Условия</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Условия предоставления гарантии</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {conditions.map((condition, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 flex items-center">
                    <Icon name={index === 0 ? "CheckCircle" : "XCircle"} 
                          className={`mr-2 ${index === 0 ? 'text-green-500' : 'text-red-500'}`} 
                          size={20} />
                    {condition.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {condition.items.map((item, idx) => (
                      <li key={idx} className="flex items-start text-gray-600">
                        <Icon name={index === 0 ? "Check" : "X"} 
                              className={`mr-2 mt-0.5 flex-shrink-0 ${index === 0 ? 'text-green-500' : 'text-red-500'}`} 
                              size={16} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 mb-4">Документы</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Гарантийные документы</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="FileText" className="text-white" size={28} />
                </div>
                <CardTitle>Гарантийный талон</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Официальный документ с печатью и подписью, подтверждающий гарантийные обязательства
                </p>
                <Badge variant="outline">Выдается после работ</Badge>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Receipt" className="text-white" size={28} />
                </div>
                <CardTitle>Акт выполненных работ</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Подробный перечень всех выполненных работ с указанием использованных материалов
                </p>
                <Badge variant="outline">Обязательный документ</Badge>
              </CardContent>
            </Card>
            
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" className="text-white" size={28} />
                </div>
                <CardTitle>Сертификат качества</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Документ, подтверждающий соответствие выполненных работ стандартам качества
                </p>
                <Badge variant="outline">По запросу</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Работаем с полной ответственностью</h2>
          <p className="text-xl text-gray-300 mb-8">Доверьте ремонт профессионалам с гарантией качества</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              <Icon name="Phone" className="mr-2" size={20} />
              Записаться на ремонт
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
              <Icon name="FileText" className="mr-2" size={20} />
              Скачать гарантийный талон
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}