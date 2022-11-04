import Layout from "../components/Layout"

export default function Jsx() {
    const titulo =  <h1>JSX um e conceito Central</h1>
    
    function subtitulo() {
        return <h2>{'muito legal'.toUpperCase()}</h2>
    }

    return(
        <Layout titulo='Entendendo o JSX'>
        <div>
           {titulo}
           {subtitulo()}
            <p>
                {JSON.stringify({nome: 'Diogo', idade: 30})}
            </p>
        </div>
        </Layout>

    )
}