import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

export default function About() {
  const achievements = [
    { number: "15+", text: "лет опыта" },
    { number: "5000+", text: "довольных клиентов" },
    { number: "50+", text: "видов услуг" },
    { number: "24/7", text: "поддержка клиентов" }
  ];

  const team = [
    {
      name: "Александр Петров",
      position: "Главный механик",
      experience: "20 лет опыта",
      specialization: "Диагностика двигателей"
    },
    {
      name: "Михаил Сидоров",
      position: "Мастер по ходовой",
      experience: "15 лет опыта",
      specialization: "Подвеска и тормоза"
    },
    {
      name: "Дмитрий Козлов",
      position: "Электрик",
      experience: "12 лет опыта",
      specialization: "Электрооборудование"
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
            О нашем автосервисе
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Более 15 лет мы предоставляем качественные услуги по ремонту автомобилей
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <Badge className="bg-orange-100 text-orange-800 mb-4">Наша история</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                СТО ЛИДЕР - ваш надежный партнер
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Наш автосервис был основан в 2009 году с целью предоставления качественных 
                  услуг по ремонту и обслуживанию автомобилей в Сочи. За годы работы мы 
                  заслужили доверие тысяч клиентов благодаря профессионализму наших мастеров 
                  и использованию современного оборудования.
                </p>
                <p>
                  Мы специализируемся на всех видах ремонта автомобилей, кроме покраски и 
                  кузовного ремонта. Наша команда состоит из опытных специалистов, которые 
                  постоянно повышают свою квалификацию и следят за новейшими технологиями 
                  в автомобильной индустрии.
                </p>
                <p>
                  Мы гордимся тем, что можем предложить нашим клиентам честные цены, 
                  качественный сервис и гарантию на все виды работ. Ваш автомобиль в 
                  надежных руках!
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/947c5f17-5414-45af-9ba5-90eb26a9b125.jpg" 
                alt="Наш автосервис" 
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>

          {/* Achievements */}
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-orange-500 mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-600">{achievement.text}</div>
              </div>
            ))}
          </div>

          {/* Team */}
          <div>
            <div className="text-center mb-12">
              <Badge className="bg-blue-100 text-blue-800 mb-4">Наша команда</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Профессионалы своего дела</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center border-0 shadow-lg">
                  <CardHeader>
                    <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="User" className="text-white" size={32} />
                    </div>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <CardDescription className="text-orange-600 font-semibold">
                      {member.position}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Badge variant="secondary">{member.experience}</Badge>
                      <p className="text-sm text-gray-600">{member.specialization}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-800 mb-4">Наши ценности</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Что нами движет</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Heart" className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Качество</h3>
              <p className="text-gray-600">
                Мы никогда не идем на компромиссы в вопросах качества работ и используемых материалов
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Клиентоориентированность</h3>
              <p className="text-gray-600">
                Каждый клиент для нас важен, мы стремимся превзойти ваши ожидания
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-2">Инновации</h3>
              <p className="text-gray-600">
                Мы постоянно внедряем новые технологии и методы работы для лучшего результата
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}