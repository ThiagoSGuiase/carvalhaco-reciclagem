import Image from "next/image";

export default function BlogSection({ postagens }) {
  return (
    <section>
      <div>
        {postagens.slice( 0, 3 ).map (p => (
          <div key={p.id}>
            <Image src={p.image.url} alt={p.title} width={350} height={350} />
            <h2>{p.title}</h2>
            <span>{p.datePost}</span>
            <div>
              <span>{}</span>
              <span>{p.author}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}