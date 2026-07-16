import MobileMenu from "./MobileMenu";
import { sitePath } from "./site-paths";

const services = [
  ["01", "3D-друк", "Від одиничної деталі до малої серії"],
  ["02", "3D-моделювання", "Створимо модель за ескізом або зразком"],
  ["03", "Прототипування", "Перевірка форми й механіки до виробництва"],
  ["04", "Малі серії", "Стабільна якість кожного виробу"],
];

const works = [
  ["prototype", "Корпуси", "Технічні прототипи", "cases", "/category-previews/cases.webp"],
  ["figure", "Іграшки", "Рухомі анімовані фігурки", "toys", "/category-previews/toys.webp"],
  ["detail", "Деталі", "Функціональні вироби", "parts", "/category-previews/parts.webp"],
  ["decor", "Декор", "Вази та топпери", "decor", "/category-previews/decor.webp"],
  ["home", "Речі для дому", "Затискачі, підставки й органайзери", "home", "/category-previews/home.webp"],
  ["merch", "Мерч", "Брендовані речі, які хочеться носити", "merch", "/category-previews/merch.webp"],
];

export default function Home() {
  return (
    <>
      <a className="skipLink" href="#main-content">Перейти до вмісту</a>
      <header className="nav shell">
        <a className="wordmark" href="#top" aria-label="FILAX3D — на головну">
          FILAX<span>3D</span>
        </a>
        <nav aria-label="Головна навігація">
          <a href="#services">Послуги</a><a href="#works">Каталог</a><a href="#materials">Матеріали</a>
        </nav>
        <MobileMenu />
        <a className="mobileContact" href="#contact">Контакти</a>
        <a className="navCta" href="https://t.me/Filax3d" target="_blank" rel="noreferrer">Обговорити проєкт <span>↗</span></a>
      </header>

      <main id="main-content">
      <section className="hero shell" id="top">
        <div className="heroCopy">
          <p className="eyebrow"><i /> 3D PRINTING STUDIO · UKRAINE</p>
          <h1>Друкуємо те,<br />що ще вчора<br />було <em>ідеєю.</em></h1>
          <p className="lead">Перетворюємо ескізи, файли та сміливі задуми на точні фізичні об’єкти — від першого прототипу до готової серії.</p>
          <div className="heroActions">
            <a className="primary" href="https://t.me/Filax3d" target="_blank" rel="noreferrer">Розрахувати проєкт <b>↗</b></a>
            <a className="textLink" href="#works">Дивитися роботи <span>↓</span></a>
          </div>
          <p className="ctaHint">Для оцінки надішліть модель, фото або ескіз із розмірами</p>
        </div>
        <div className="heroVisual">
          <div className="orbit orbitOne" />
          <div className="monogramCrop"><img src={sitePath("/filax3d-logo.png")} width="1254" height="1254" alt="Монограма FILAX3D" /></div>
          <span className="coordinate top">ВИРОБНИЦТВО · УКРАЇНА</span>
          <span className="coordinate bottom">PRECISION / LAYER BY LAYER</span>
        </div>
      </section>

      <section className="proof shell" aria-label="Ключові переваги">
        <article><span>01</span><b>Від однієї деталі</b><p>Прототипи та малі серії</p></article>
        <article><span>02</span><b>Перевірка моделі</b><p>До запуску у виробництво</p></article>
        <article><span>03</span><b>5 типів матеріалів</b><p>Під задачу та навантаження</p></article>
        <article><span>04</span><b>Доставка по Україні</b><p>Готових виробів</p></article>
      </section>

      <div className="ticker" aria-hidden="true"><div>3D PRINTING <i /> MODELING <i /> PROTOTYPING <i /> SMALL BATCHES <i /> FILAX3D <i /> 3D PRINTING <i /> MODELING</div></div>

      <section className="section shell servicesSection" id="services">
        <div className="sectionHead"><p className="eyebrow"><i /> МОЖЛИВОСТІ</p><h2 className="singleLineTitle">Від цифрової моделі до речі у ваших руках.</h2><p>Беремо на себе весь шлях: підготовку, друк, постобробку та контроль.</p></div>
        <div className="serviceGrid">
          {services.map(([n, title, text]) => <article className="service" key={n}><span>{n}</span><div className={`serviceObject object${n}`}><b /></div><h3>{title}</h3><p>{text}</p><a href="https://t.me/Filax3d" target="_blank" rel="noreferrer" aria-label={`${title} — дізнатися більше`}>↗</a></article>)}
        </div>
      </section>

      <section className="works section" id="works">
        <div className="shell sectionHead worksHead"><div><p className="eyebrow"><i /> КАТАЛОГ ІДЕЙ</p><h2>Речі говорять<br />краще за слова.</h2></div><a className="textLink" href="https://t.me/Filax3d" target="_blank" rel="noreferrer">Показати свою ідею <span>↗</span></a></div>
        <div className="workGrid shell">
          {works.map(([kind, title, text, slug, cover], i) => <a className={`work work${i + 1}`} key={kind} href={sitePath(`/catalog/${slug}/`)} aria-label={`${title}: відкрити категорію`}><div className="workPhoto"><img src={sitePath(cover)} alt="" loading={i > 2 ? "lazy" : "eager"} /></div><div className="workMeta"><span>0{i + 1}</span><div><h3>{title}</h3><p>{text}</p></div><b>→</b></div></a>)}
        </div>
      </section>

      <section className="materials section shell" id="materials">
        <div className="sectionHead"><p className="eyebrow"><i /> МАТЕРІАЛИ</p><h2 className="singleLineTitle">Матеріал під задачу, а не навпаки.</h2></div>
        <div className="materialRail">{[['PLA','Макети, декор, прототипи'],['PETG','Функціональні деталі та корпуси'],['TPU','Гнучкі елементи й захист'],['ABS','Міцні технічні вироби'],['RESIN','Мініатюри та дрібна деталізація']].map(([a,b],i)=><article key={a}><div className={`swatch swatch${i}`}><span /></div><h3>{a}</h3><p>{b}</p></article>)}</div>
        <p className="materialNote">Не знаєте, що обрати? Підберемо матеріал за призначенням, навантаженням і бажаною поверхнею.</p>
      </section>

      <section className="brief section shell" aria-labelledby="brief-title">
        <div><p className="eyebrow"><i /> ШВИДКИЙ РОЗРАХУНОК</p><h2 id="brief-title">Що надіслати<br />для оцінки.</h2></div>
        <div className="briefItems"><span>STL / STEP / OBJ</span><span>Фото або ескіз</span><span>Габарити</span><span>Кількість</span><span>Призначення деталі</span><span>Бажаний термін</span></div>
        <div className="briefAction"><p>Навіть якщо моделі ще немає — опишіть ідею. Допоможемо визначити наступний крок.</p><a className="primary" href="https://t.me/Filax3d" target="_blank" rel="noreferrer">Надіслати запит <b>↗</b></a></div>
      </section>

      <section className="contact shell" id="contact">
        <div><p className="eyebrow"><i /><span className="contactPromptDesktop">Є ІДЕЯ?</span><span className="contactPromptMobile">ГОТОВІ НАДАТИ ІДЕЇ ФОРМУ?</span></p><h2>Давайте надамо<br />їй <em>форму.</em></h2></div>
        <div className="contactLinks"><a href="https://t.me/Filax3d" target="_blank" rel="noreferrer" aria-label="Telegram — Filax 3D"><span className="contactIcon" aria-hidden="true">➤</span><span className="contactLabel">Telegram</span><b>Filax 3D ↗</b></a><a href="viber://chat?number=%2B380936417695" aria-label="Viber — Filax 3D"><span className="contactIcon viberIcon" aria-hidden="true"><img src="https://cdn.simpleicons.org/viber/FFFFFF" alt="" /></span><span className="contactLabel">Viber</span><b>Filax 3D ↗</b></a><a href="tel:+380936417695" aria-label="Зателефонувати: 093 641 76 95"><span className="contactIcon" aria-hidden="true">☎</span><span className="contactLabel">Телефон</span><b>093 641 76 95</b></a><p className="studioLocation">Студія 3D-друку на Чайках.</p></div>
      </section>
      </main>

      <footer className="shell"><a className="wordmark" href="#top">FILAX<span>3D</span></a><p>3D PRINTING STUDIO · {new Date().getFullYear()} · <a href="https://commons.wikimedia.org/wiki/File:3D_print_timelapse.webm" target="_blank" rel="noreferrer">VIDEO CC BY-SA 3.0</a></p><a href="#top">Вгору ↑</a></footer>
    </>
  );
}
