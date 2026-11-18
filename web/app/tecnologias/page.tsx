import tecnologias from '@/app/data/tecnologias.json';
import Image from 'next/image'

export default function Page() {
    return (
        <>
            <h2>Tecnologias Exploradas</h2>
            <ul>
                {tecnologias.map((tecnologia, i) => {
                    return <li key={i}><div>
                        <h1>{tecnologia.description + tecnologia.image}</h1>
                        <Image src={`tecnologias/${tecnologia.image}`} alt={tecnologia.title} width={200} height={200} unoptimized/>
                    </div></li>
                })}
            </ul>
        </>
    )
}