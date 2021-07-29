import Image from "next/image";

export default function BlogSection({ postagens }) {
  return (
    <section>
      <div>
        {postagens.map (p => (
          <div key={p.id}>
            <h2>{p.title}</h2>
            <Image src={p.image.url} alt={p.title} width={300} height={300} />
          </div>
        ))}
      </div>
    </section>
  )
}