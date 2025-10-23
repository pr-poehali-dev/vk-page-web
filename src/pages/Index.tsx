import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import Logo from "@/components/Logo";
import { Link } from "react-router-dom";

const featuredArticles = [
  {
    id: 1,
    title: "Медитация с последствиями",
    excerpt: "Правда об Ананда Марге и не только. Разбираем систему поэтапного вовлечения в секты.",
    date: "15 октября 2024"
  },
  {
    id: 2,
    title: "Как работают «Уроки медитации»",
    excerpt: "Инструменты мягкой индоктринации и механизмы влияния на сознание.",
    date: "10 октября 2024"
  },
  {
    id: 3,
    title: "Распознать манипуляции",
    excerpt: "Противоречия в сектантских методиках и способы их выявления.",
    date: "5 октября 2024"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-black/10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <Logo size={48} />
            <span className="text-xl font-bold">Тёмная Марга</span>
          </Link>
          <div className="flex gap-8">
            <Link to="/" className="hover:opacity-60 transition-opacity font-semibold">Главная</Link>
            <Link to="/articles" className="hover:opacity-60 transition-opacity">Статьи</Link>
            <Link to="/about" className="hover:opacity-60 transition-opacity">О себе</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6">
        <section className="py-16 border-b border-black/10">
          <h1 className="text-5xl mb-4">
            Тёмная Марга
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Медитация с последствиями: правда об Ананда Марге и не только
          </p>
        </section>

        <section className="py-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl">Последние статьи</h2>
            <Link 
              to="/articles" 
              className="flex items-center gap-2 hover:opacity-60 transition-opacity"
            >
              <span>Все статьи</span>
              <Icon name="ArrowRight" size={20} />
            </Link>
          </div>

          <div className="space-y-6">
            {featuredArticles.map((article) => (
              <Card 
                key={article.id} 
                className="p-6 hover:shadow-lg transition-shadow border border-black/10"
              >
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <Icon name="FileText" size={24} className="opacity-60" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl mb-2">{article.title}</h3>
                    <p className="text-base text-muted-foreground mb-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground flex items-center gap-2">
                        <Icon name="Calendar" size={16} />
                        {article.date}
                      </span>
                      <button className="px-5 py-2 bg-black text-white hover:bg-black/80 transition-colors text-sm">
                        Читать
                      </button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-12 border-t border-black/10">
          <h2 className="text-3xl mb-8">О чём этот блог</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Icon name="Eye" size={28} />
              <h3 className="text-xl">Разоблачение</h3>
              <p className="text-muted-foreground text-sm">
                Анализ сектантских практик и методов манипуляции
              </p>
            </div>
            <div className="space-y-2">
              <Icon name="Shield" size={28} />
              <h3 className="text-xl">Защита</h3>
              <p className="text-muted-foreground text-sm">
                Способы распознавания и противодействия индоктринации
              </p>
            </div>
            <div className="space-y-2">
              <Icon name="Heart" size={28} />
              <h3 className="text-xl">Поддержка</h3>
              <p className="text-muted-foreground text-sm">
                Помощь тем, кто хочет выйти из секты
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/10 mt-16">
        <div className="max-w-4xl mx-auto px-6 py-6 text-center text-sm text-muted-foreground">
          <p>© 2024 Тёмная Марга. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;