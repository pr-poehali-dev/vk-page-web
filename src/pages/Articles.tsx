import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const articles = [
  {
    id: 1,
    title: "Медитация с последствиями",
    excerpt: "Правда об Ананда Марге и не только. Разбираем систему поэтапного вовлечения в секты.",
    date: "15 октября 2024",
    readTime: "8 мин"
  },
  {
    id: 2,
    title: "Как работают «Уроки медитации»",
    excerpt: "Инструменты мягкой индоктринации и механизмы влияния на сознание.",
    date: "10 октября 2024",
    readTime: "6 мин"
  },
  {
    id: 3,
    title: "Распознать манипуляции",
    excerpt: "Противоречия в сектантских методиках и способы их выявления.",
    date: "5 октября 2024",
    readTime: "10 мин"
  },
  {
    id: 4,
    title: "Помощь выходящим из секты",
    excerpt: "Практические рекомендации для тех, кто хочет освободиться от влияния секты.",
    date: "1 октября 2024",
    readTime: "12 мин"
  }
];

const Articles = () => {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-black/10">
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">БЛОГ</Link>
          <div className="flex gap-8">
            <Link to="/" className="hover:opacity-60 transition-opacity">Главная</Link>
            <Link to="/articles" className="hover:opacity-60 transition-opacity font-semibold">Статьи</Link>
            <Link to="/about" className="hover:opacity-60 transition-opacity">О себе</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-6xl mb-4">Статьи</h1>
        <p className="text-xl text-muted-foreground mb-16">Разбор сектантских практик и методов защиты</p>

        <div className="space-y-12">
          {articles.map((article) => (
            <Card key={article.id} className="p-8 hover:shadow-lg transition-shadow border border-black/10">
              <div className="flex items-start gap-4 mb-4">
                <Icon name="FileText" size={24} className="mt-1 opacity-60" />
                <div className="flex-1">
                  <h2 className="text-3xl mb-2">{article.title}</h2>
                  <p className="text-lg text-muted-foreground mb-4">{article.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <Icon name="Calendar" size={16} />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <Icon name="Clock" size={16} />
                      {article.readTime}
                    </span>
                  </div>
                </div>
              </div>
              <button className="mt-4 px-6 py-2 bg-black text-white hover:bg-black/80 transition-colors">
                Читать
              </button>
            </Card>
          ))}
        </div>
      </main>

      <footer className="border-t border-black/10 mt-24">
        <div className="max-w-4xl mx-auto px-6 py-8 text-center text-sm text-muted-foreground">
          <p>© 2024 Тёмная Марга. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Articles;
