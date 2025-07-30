import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

export default function Reviews() {
  const reviews = [
    {
      name: "Алексей Михайлов",
      rating: 5,
      date: "15 января 2024",
      car: "BMW X5 2019",
      text: "Отличный сервис! Быстро диагностировали проблему с двигателем и качественно устранили. Мастера профессионалы своего дела. Цены адекватные, без накруток. Обязательно буду обращаться еще.",
      service: "Диагностика и ремонт двигателя"
    },
    {
      name: "Мария Козлова",
      rating: 5,
      date: "8 января 2024",
      car: "Toyota Camry 2020",
      text: "Делала ТО в этом автосервисе. Все четко, по времени, качественно. Объяснили что и зачем делают, показали старые детали. Очень довольна обслуживанием. Рекомендую!",
      service: "Техническое обслуживание"
    },
    {
      name: "Дмитрий Петров",
      rating: 5,
      date: "3 января 2024",
      car: "Audi A4 2018",
      text: "Ремонтировал ходовую часть. Работу выполнили качественно, в срок. Дали гарантию на все работы. Мастера знают свое дело, используют хорошие запчасти. Цена соответствует качеству.",
      service: "Ремонт ходовой части"
    },
    {
      name: "Елена Сидорова",
      rating: 5,
      date: "28 декабря 2023",
      car: "Mercedes C-Class 2017",
      text: "Обращалась с проблемой электрики. Быстро нашли неисправность и устранили. Работают аккуратно, все объясняют понятным языком. Сервис на высоком уровне.",
      service: "Ремонт электрики"
    },
    {
      name: "Игорь Волков",
      rating: 5,
      date: "22 декабря 2023",
      car: "Volkswagen Polo 2016",
      text: "Делал капитальный ремонт двигателя. Работа заняла время, но результат отличный. Двигатель работает как новый. Спасибо мастерам за профессионализм!",
      service: "Капитальный ремонт двигателя"
    },
    {
      name: "Анна Морозова",
      rating: 5,
      date: "18 декабря 2023",
      car: "Hyundai Solaris 2019",
      text: "Очень довольна сервисом! Быстро, качественно, по разумной цене. Мастера вежливые, все объясняют. Теперь буду обслуживаться только здесь.",
      service: "Замена тормозных колодок"
    },
    {
      name: "Сергей Новиков",
      rating: 5,
      date: "12 декабря 2023",
      car: "Ford Focus 2015",
      text: "Отличный автосервис! Профессиональная диагностика, качественный ремонт, адекватные цены. Работают быстро и аккуратно. Рекомендую всем знакомым.",
      service: "Ремонт трансмиссии"
    },
    {
      name: "Ольга Кузнецова",
      rating: 5,
      date: "5 декабря 2023",
      car: "Kia Rio 2018",
      text: "Делала развал-схождение и замену амортизаторов. Все сделали качественно, машина стала ехать намного лучше. Цены приемлемые, сервис отличный.",
      service: "Развал-схождение, замена амортизаторов"
    }
  ];

  const stats = [
    { number: "4.9", text: "Средняя оценка", icon: "Star" },
    { number: "500+", text: "Отзывов", icon: "MessageCircle" },
    { number: "98%", text: "Довольных клиентов", icon: "ThumbsUp" },
    { number: "5000+", text: "Обслуженных авто", icon: "Car" }
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
            Отзывы клиентов
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Мнения наших клиентов - лучшая реклама нашей работы
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={stat.icon as any} className="text-white" size={28} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-800 mb-4">Отзывы</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Что говорят наши клиенты</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
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
                  <Badge variant="outline" className="w-fit text-xs">
                    {review.service}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 italic">"{review.text}"</p>
                  <p className="text-sm text-gray-400">{review.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Review Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-blue-100 text-blue-800 mb-4">Оставить отзыв</Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Поделитесь своим мнением</h2>
              <p className="text-gray-600">Ваш отзыв поможет нам стать лучше</p>
            </div>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">Марка и модель автомобиля</label>
                    <Input placeholder="Например: Toyota Camry 2018" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Какую услугу оказывали</label>
                    <Input placeholder="Например: Диагностика двигателя" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Оценка</label>
                    <div className="flex space-x-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button key={star} type="button" className="text-gray-300 hover:text-orange-400 transition-colors">
                          <Icon name="Star" size={24} />
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Отзыв</label>
                    <Textarea placeholder="Расскажите о качестве обслуживания, работе мастеров, впечатлениях" rows={4} />
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить отзыв
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Станьте нашим довольным клиентом</h2>
          <p className="text-xl text-gray-300 mb-8">Запишитесь на обслуживание и убедитесь в качестве наших услуг</p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
            <Icon name="Phone" className="mr-2" size={20} />
            Записаться на ремонт
          </Button>
        </div>
      </section>
    </div>
  );
}