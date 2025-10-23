import Icon from "@/components/ui/icon";
import Logo from "@/components/Logo";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-black/10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <Logo size={48} />
            <span className="text-xl font-bold">Тёмная Марга</span>
          </Link>
          <div className="flex gap-8">
            <Link to="/" className="hover:opacity-60 transition-opacity">Главная</Link>
            <Link to="/articles" className="hover:opacity-60 transition-opacity">Статьи</Link>
            <Link to="/about" className="hover:opacity-60 transition-opacity font-semibold">О себе</Link>
          </div>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-4xl mb-6">О себе</h1>

        <div className="prose prose-lg max-w-none space-y-4 text-base">
          <p>
            Этот блог посвящён анализу и разбору сектантских практик, методов манипуляции сознанием 
            и способов защиты от деструктивного влияния.
          </p>

          <p>
            Основное внимание уделяется организации <strong>Ананда Марга</strong> и другим группам, 
            использующим техники постепенного вовлечения через медитацию, йогу и духовные практики.
          </p>

          <h2 className="text-3xl mt-10 mb-5">Миссия проекта</h2>

          <ul className="space-y-3 list-none pl-0">
            <li className="flex gap-3">
              <Icon name="CheckCircle" size={20} className="shrink-0 mt-1" />
              <span>Информировать о механизмах работы сект и методах индоктринации</span>
            </li>
            <li className="flex gap-3">
              <Icon name="CheckCircle" size={20} className="shrink-0 mt-1" />
              <span>Помогать распознавать манипуляции и противоречия в учениях</span>
            </li>
            <li className="flex gap-3">
              <Icon name="CheckCircle" size={20} className="shrink-0 mt-1" />
              <span>Поддерживать тех, кто хочет выйти из-под влияния секты</span>
            </li>
            <li className="flex gap-3">
              <Icon name="CheckCircle" size={20} className="shrink-0 mt-1" />
              <span>Создавать пространство для обсуждения и обмена опытом</span>
            </li>
          </ul>

          <h2 className="text-3xl mt-10 mb-5">Темы блога</h2>

          <div className="grid gap-5 mt-6">
            <div className="border border-black/10 p-5">
              <h3 className="text-xl mb-2">Механизмы вовлечения</h3>
              <p className="text-muted-foreground text-sm">
                Как работают «уроки медитации» и другие инструменты мягкой индоктринации
              </p>
            </div>
            <div className="border border-black/10 p-5">
              <h3 className="text-xl mb-2">Анализ практик</h3>
              <p className="text-muted-foreground text-sm">
                Разбор техник, используемых для контроля сознания и поведения
              </p>
            </div>
            <div className="border border-black/10 p-5">
              <h3 className="text-xl mb-2">Помощь и поддержка</h3>
              <p className="text-muted-foreground text-sm">
                Практические рекомендации для выхода из деструктивных групп
              </p>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-black/10">
            <p className="text-muted-foreground text-sm">
              Если у вас есть вопросы или вы хотите поделиться своей историей — свяжитесь через ВКонтакте.
            </p>
          </div>
        </div>
      </main>

      <footer className="border-t border-black/10 mt-16">
        <div className="max-w-4xl mx-auto px-6 py-6 text-center text-sm text-muted-foreground">
          <p>© 2024 Тёмная Марга. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;