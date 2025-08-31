import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  
  const courses = [
    {
      id: 1,
      title: 'Подготовка к ВПР',
      subjects: ['Математика', 'Русский язык', 'Окружающий мир'],
      grade: '4-6 класс',
      duration: '3 месяца',
      price: '12000₽',
      description: 'Комплексная подготовка к Всероссийским проверочным работам'
    },
    {
      id: 2,
      title: 'ОГЭ интенсив',
      subjects: ['Математика', 'Русский язык', 'Физика', 'Обществознание'],
      grade: '9 класс',
      duration: '6 месяцев',
      price: '24000₽',
      description: 'Полный курс подготовки к основному государственному экзамену'
    },
    {
      id: 3,
      title: 'ЕГЭ профиль',
      subjects: ['Математика', 'Физика', 'Информатика'],
      grade: '11 класс',
      duration: '8 месяцев',
      price: '32000₽',
      description: 'Профильная подготовка к единому государственному экзамену'
    }
  ];

  const teachers = [
    {
      name: 'Анна Сергеевна',
      subject: 'Математика',
      experience: '12 лет',
      education: 'МГУ им. М.В. Ломоносова',
      achievement: 'Средний балл учеников: 89'
    },
    {
      name: 'Дмитрий Александрович', 
      subject: 'Русский язык',
      experience: '8 лет',
      education: 'МПГУ им. В.И. Ленина',
      achievement: '95% сдают на "отлично"'
    },
    {
      name: 'Елена Викторовна',
      subject: 'Физика',
      experience: '15 лет', 
      education: 'МФТИ',
      achievement: 'Призёр олимпиад'
    }
  ];

  const reviews = [
    {
      name: 'Мария Петрова',
      grade: '9 класс',
      text: 'Благодаря занятиям в центре сдала ОГЭ на отлично! Преподаватели объясняют очень доступно.',
      rating: 5
    },
    {
      name: 'Андрей Смирнов',
      grade: '11 класс', 
      text: 'Поступил в желаемый вуз! Подготовка к ЕГЭ была на высшем уровне.',
      rating: 5
    }
  ];

  const pricingPlans = [
    {
      title: 'Базовый',
      price: '8000₽',
      duration: 'месяц',
      features: [
        '8 занятий в месяц',
        'Индивидуальные консультации',
        'Материалы для подготовки',
        'Тестирование'
      ]
    },
    {
      title: 'Стандарт',
      price: '12000₽', 
      duration: 'месяц',
      features: [
        '12 занятий в месяц',
        'Персональный куратор',
        'Все материалы включены',
        'Еженедельное тестирование',
        'Разбор ошибок'
      ],
      popular: true
    },
    {
      title: 'Интенсив',
      price: '18000₽',
      duration: 'месяц', 
      features: [
        '20 занятий в месяц',
        'Личный преподаватель',
        'VIP поддержка 24/7',
        'Ежедневное тестирование',
        'Психологическая подготовка'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="GraduationCap" size={32} className="text-primary" />
              <span className="text-xl font-bold text-foreground">ЭкзаменЦентр</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#courses" className="text-foreground hover:text-primary transition-colors">Курсы</a>
              <a href="#teachers" className="text-foreground hover:text-primary transition-colors">Преподаватели</a>
              <a href="#pricing" className="text-foreground hover:text-primary transition-colors">Цены</a>
              <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
              <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
              <DialogTrigger asChild>
                <Button>Записаться</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Запись на консультацию</DialogTitle>
                  <DialogDescription>
                    Оставьте заявку, и мы свяжемся с вами в течение часа
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" placeholder="Введите ваше имя" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" placeholder="+7 (999) 123-45-67" />
                  </div>
                  <div>
                    <Label htmlFor="course">Интересующий курс</Label>
                    <Input id="course" placeholder="ВПР, ОГЭ, ЕГЭ..." />
                  </div>
                  <Button className="w-full">Записаться на консультацию</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-accent to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-accent-foreground">
                Готовим к экзаменам с гарантией результата
              </h1>
              <p className="text-xl mb-8 text-accent-foreground/80">
                ВПР, ОГЭ, ЕГЭ — качественная подготовка с опытными преподавателями. 
                Средний балл наших учеников на 25% выше городского
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
                  <DialogTrigger asChild>
                    <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                      <Icon name="Calendar" className="mr-2" size={20} />
                      Записаться на пробное занятие
                    </Button>
                  </DialogTrigger>
                </Dialog>
                <Button size="lg" variant="outline" className="border-accent-foreground/20 text-accent-foreground hover:bg-white/10">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Получить консультацию
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-64 bg-white/20 rounded-lg shadow-2xl flex items-center justify-center">
                <Icon name="BookOpen" size={80} className="text-accent-foreground/60" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Наши курсы</h2>
            <p className="text-xl text-foreground/70">Выберите подходящую программу подготовки</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map(course => (
              <Card key={course.id} className="hover:shadow-lg transition-shadow bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {course.title}
                    <Badge variant="secondary">{course.grade}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-card-foreground/70 mb-4">{course.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm">
                      <Icon name="BookOpen" size={16} className="mr-2 text-primary" />
                      {course.subjects.join(', ')}
                    </div>
                    <div className="flex items-center text-sm">
                      <Icon name="Clock" size={16} className="mr-2 text-primary" />
                      {course.duration}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{course.price}</span>
                    <Button>Записаться</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teachers Section */}
      <section id="teachers" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Наши преподаватели</h2>
            <p className="text-xl text-foreground/70">Опытные педагоги с подтверденными результатами</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teachers.map((teacher, index) => (
              <Card key={index} className="bg-card border-border">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="User" size={24} className="text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{teacher.name}</CardTitle>
                      <p className="text-primary font-medium">{teacher.subject}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <Icon name="Award" size={16} className="mr-2 text-muted-foreground" />
                      Опыт: {teacher.experience}
                    </div>
                    <div className="flex items-center text-sm">
                      <Icon name="GraduationCap" size={16} className="mr-2 text-muted-foreground" />
                      {teacher.education}
                    </div>
                    <div className="flex items-center text-sm">
                      <Icon name="Star" size={16} className="mr-2 text-secondary" />
                      {teacher.achievement}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Стоимость обучения</h2>
            <p className="text-xl text-foreground/70">Выберите подходящий тарифный план</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative bg-card border-border ${plan.popular ? 'ring-2 ring-primary' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground">Популярный</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{plan.title}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground">/{plan.duration}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Icon name="Check" size={16} className="mr-3 text-accent" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full mt-6 ${plan.popular ? '' : 'variant-outline'}`}>
                    Выбрать план
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Отзывы учеников</h2>
            <p className="text-xl text-foreground/70">Что говорят о нас наши студенты</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-secondary mr-1" />
                    ))}
                  </div>
                  <p className="text-card-foreground/80 mb-4">"{review.text}"</p>
                  <div>
                    <p className="font-medium">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.grade}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-accent-foreground">Свяжитесь с нами</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon name="MapPin" size={20} className="mr-3 text-primary" />
                  <span className="text-accent-foreground">г. Москва, ул. Образовательная, д. 15</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Phone" size={20} className="mr-3 text-primary" />
                  <span className="text-accent-foreground">+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={20} className="mr-3 text-primary" />
                  <span className="text-accent-foreground">info@examcenter.ru</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" size={20} className="mr-3 text-primary" />
                  <span className="text-accent-foreground">Пн-Пт: 9:00-21:00, Сб-Вс: 10:00-18:00</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-accent-foreground">Оставьте заявку</h3>
              <div className="space-y-4">
                <Input placeholder="Ваше имя" className="bg-white/90 border-border text-foreground" />
                <Input placeholder="Телефон" className="bg-white/90 border-border text-foreground" />
                <Textarea placeholder="Сообщение" className="bg-white/90 border-border text-foreground" />
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Отправить заявку
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary/10 py-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="GraduationCap" size={24} className="text-primary" />
              <span className="text-lg font-bold text-foreground">ЭкзаменЦентр</span>
            </div>
            <p className="text-muted-foreground text-center">
              © 2024 ЭкзаменЦентр. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;