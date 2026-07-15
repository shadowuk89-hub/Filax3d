import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { categories, type CategoryKey } from "../catalog-data";

export function generateStaticParams() {
  return Object.keys(categories).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = categories[slug as CategoryKey];
  if (!category) return {};
  return { title: `${category.kicker} — FILAX3D`, description: category.intro, alternates: { canonical: `/catalog/${slug}` } };
}

export default async function CatalogCategory({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categories[slug as CategoryKey];
  if (!category) notFound();

  return <>
    <a className="skipLink" href="#catalog-main">Перейти до вмісту</a>
    <header className="catalogNav shell">
      <a className="wordmark" href="/">FILAX<span>3D</span></a>
      <a className="catalogBack" href="/#works">← Усі категорії</a>
      <a className="navCta" href="https://t.me/Filax3d" target="_blank" rel="noreferrer">Обговорити проєкт <span>↗</span></a>
    </header>
    <main id="catalog-main" className="catalogPage" tabIndex={-1}>
    <section className="catalogHero shell">
      <p className="eyebrow"><i /> {category.kicker}</p>
      <h1>{category.title}</h1>
      <p>{category.intro}</p>
    </section>
    <p className="catalogNotice shell">Добірка ілюструє можливі вироби та напрямки друку. Фінальний вигляд, розмір і матеріал узгоджуємо перед замовленням.</p>
    <section className="catalogGrid shell" aria-label={category.kicker}>
      {category.items.map((item, i) => {
        const [name, note, image, tags] = item as [string, string, string, string[]];
        return <a className="productCard" href={`https://t.me/Filax3d?text=${encodeURIComponent(`Вітаю! Цікавить: ${name}`)}`} target="_blank" rel="noreferrer" key={`${name}-${i}`}>
          <div className="productImage"><img src={image} alt={name} loading={i > 1 ? "lazy" : "eager"} />{image.endsWith(".gif") && <b className="motionBadge">ANIMATED</b>}</div>
          <div className="productInfo"><span>0{i + 1} · ПРИКЛАД МОЖЛИВОГО ВИРОБУ</span><h2>{name}</h2><p>{note}</p><div>{tags.map(tag => <b key={tag}>{tag}</b>)}</div><em>Запитати в Telegram ↗</em></div>
        </a>;
      })}
    </section>
    <section className="catalogCta shell"><div><p className="eyebrow"><i /> ВЛАСНА ІДЕЯ</p><h2>Не знайшли потрібне?<br /><em>Надрукуємо ваше.</em></h2></div><div><p>Надішліть фото, ескіз, модель або просто опишіть задум. Підкажемо матеріал і наступний крок.</p><a className="primary" href="https://t.me/Filax3d" target="_blank" rel="noreferrer">Написати Filax 3D <b>↗</b></a></div></section>
    </main>
    <footer className="shell"><a className="wordmark" href="/">FILAX<span>3D</span></a><p>Фотографії у каталозі — ілюстративні приклади можливостей 3D-друку.</p><a href="/">На головну ↑</a></footer>
  </>;
}
