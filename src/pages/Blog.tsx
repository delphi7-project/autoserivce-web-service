import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "10 признаков того, что пора менять масло в двигателе",
      excerpt: "Узнайте основные сигналы, которые подает ваш автомобиль о необходимости замены моторного масла",
      content: "Моторное масло - это кровь вашего двигателя. Своевременная замена масла критически важна для долговечности мотора...",
      author: "Александр Петров",
      date: "20 января 2024",
      category: "Обслуживание",
      readTime: "5 мин",
      image: "/img/492002d2-fd4e-4a41-b509-21dc6feaabdc.jpg",
      tags: ["масло", "двигатель", "обслуживание"]
    },
    {
      id: 2,
      title: "Как подготовить автомобиль к зиме: полный чек-лист",
      excerpt: "Подробное руководство по подготовке автомобиля к зимнему сезону от наших экспертов",
      content: "Зимняя эксплуатация автомобиля требует особой подготовки. В этой статье мы расскажем обо всех необходимых процедурах...",
      author: "Михаил Сидоров",
      date: "18 января 2024",
      category: "Советы",
      readTime: "8 мин",
      image: "/img/947c5f17-5414-45af-9ba5-90eb26a9b125.jpg",
      tags: ["зима", "подготовка", "безопасность"]
    },
    {
      id: 3,
      title: "Диагностика Check Engine: что означает горящая лампочка",
      excerpt: "Разбираемся в причинах загорания индикатора Check Engine и способах решения проблем",
      content: "Лампочка Check Engine может загореться по множеству причин. Важно не игнорировать этот сигнал...",
      author: "Дмитрий Козлов",
      date: "15 января 2024",
      category: "Диагностика",
      readTime: "6 мин",
      image: "/img/492002d2-fd4e-4a41-b509-21dc6feaabdc.jpg",
      tags: ["диагностика", "check engine", "ошибки"]
    },
    {
      id: 4,
      title: "Когда менять тормозные колодки: признаки износа",
      excerpt: "Как определить степень износа тормозных колодок и когда их необходимо заменить",
      content: "Тормозная система - основа безопасности вашего автомобиля. Своевременная замена колодок критически важна...",
      author: "Александр Петров",
      date: "12 января 2024",
      category: "Безопасность",
      readTime: "4 мин",
      image: "/img/947c5f17-5414-45af-9ba5-90eb26a9b125.jpg",
      tags: ["тормоза", "колодки", "безопасность"]
    },
    {
      id: 5,
      title: "Выбор моторного масла: синтетика vs полусинтетика",
      excerpt: "Сравниваем различные типы моторных масел и помогаем сделать правильный выбор",
      content: "Выбор правильного моторного масла влияет на работу двигателя и его ресурс. Рассмотрим основные типы масел...",
      author: "Михаил Сидоров",
      date: "10 января 2024",
      category: "Обслуживание",
      readTime: "7 мин",
      image: "/img/492002d2-fd4e-4a41-b509-21dc6feaabdc.jpg",
      tags: ["масло", "синтетика", "выбор"]
    },
    {
      id: 6,
      title: "Признаки неисправности генератора автомобиля",
      excerpt: "Как распознать проблемы с генератором и что делать в случае его поломки",
      content: "Генератор обеспечивает электропитание всех систем автомобиля. Его неисправность может привести к серьезным проблемам...",
      author: "Дмитрий Козлов",
      date: "8 января 2024",
      category: "Электрика",
      readTime: "5 мин",
      image: "/img/947c5f17-5414-45af-9ba5-90eb26a9b125.jpg",
      tags: ["генератор", "электрика", "неисправности"]
    }
  ];

  const categories = ["Все", "Обслуживание", "Советы", "Диагностика", "Безопасность", "Электрика"];
  const popularTags = ["масло", "двигатель", "тормоза", "диагностика", "зима", "безопасность", "электрика", "обслуживание"];

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
            Блог автосервиса
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Полезные советы, инструкции и новости из мира автомобилей
          </p>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Icon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input 
                  placeholder="Поиск по блогу..." 
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
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
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <Badge className="bg-orange-100 text-orange-800 mb-4">Рекомендуем</Badge>
            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <img 
                    src={blogPosts[0].image} 
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-orange-500 text-white">{blogPosts[0].category}</Badge>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Icon name="User" className="mr-2" size={16} />
                    {blogPosts[0].author}
                    <Icon name="Calendar" className="ml-4 mr-2" size={16} />
                    {blogPosts[0].date}
                    <Icon name="Clock" className="ml-4 mr-2" size={16} />
                    {blogPosts[0].readTime}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{blogPosts[0].title}</h2>
                  <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {blogPosts[0].tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">#{tag}</Badge>
                    ))}
                  </div>
                  <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                    Читать полностью
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="text-center mb-12">
                <Badge className="bg-blue-100 text-blue-800 mb-4">Последние статьи</Badge>
                <h2 className="text-3xl font-bold text-gray-900">Полезные материалы</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts.slice(1).map((post) => (
                  <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden">
                    <div className="relative h-48">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary">{post.category}</Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex items-center text-xs text-gray-500 mb-2">
                        <Icon name="User" className="mr-1" size={14} />
                        {post.author}
                        <Icon name="Clock" className="ml-3 mr-1" size={14} />
                        {post.readTime}
                      </div>
                      <CardTitle className="text-lg line-clamp-2 group-hover:text-orange-600 transition-colors">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </CardDescription>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {post.tags.slice(0, 2).map((tag, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">#{tag}</Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">{post.date}</span>
                        <Button variant="outline" size="sm">
                          Читать
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  Загрузить еще статьи
                </Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Popular Tags */}
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Icon name="Tag" className="mr-2 text-orange-500" size={20} />
                      Популярные теги
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {popularTags.map((tag, index) => (
                        <Button key={index} variant="outline" size="sm" className="text-xs">
                          #{tag}
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Posts */}
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Icon name="Clock" className="mr-2 text-blue-500" size={20} />
                      Недавние статьи
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {blogPosts.slice(0, 3).map((post) => (
                        <div key={post.id} className="flex space-x-3">
                          <img 
                            src={post.image} 
                            alt={post.title}
                            className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
                              {post.title}
                            </h4>
                            <p className="text-xs text-gray-500">{post.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Newsletter */}
                <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-50 to-blue-50">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Icon name="Mail" className="mr-2 text-orange-500" size={20} />
                      Подписка на блог
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      Получайте новые статьи на email
                    </p>
                    <div className="space-y-3">
                      <Input placeholder="Ваш email" type="email" />
                      <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
                        Подписаться
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Contact */}
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <Icon name="MessageCircle" className="mr-2 text-green-500" size={20} />
                      Есть вопросы?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      Наши эксперты готовы помочь
                    </p>
                    <Button variant="outline" className="w-full">
                      <Icon name="Phone" className="mr-2" size={16} />
                      Задать вопрос
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Нужна помощь с автомобилем?</h2>
          <p className="text-xl text-gray-300 mb-8">Наши эксперты всегда готовы помочь</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              <Icon name="Phone" className="mr-2" size={20} />
              Записаться на диагностику
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}