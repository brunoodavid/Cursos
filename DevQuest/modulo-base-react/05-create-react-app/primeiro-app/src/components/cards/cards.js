import Card from '../card/card'

const Cards = () => {
    return (
        <div>
            <h2>Meus cards</h2>
            
            <div>
                <Card>
                    <h3>Titulo card 1</h3>
                    <p>Esse é um texto do card 1</p>
                </Card>

                <Card>
                    <h3>Titulo card 2</h3>
                    <p>Esse é um texto do card 1</p>
                </Card>

                <Card>
                    <h3>Titulo card 3</h3>
                    <p>Esse é um texto do card 1</p>
                </Card>
            </div>
        </div>
    )
}

export default Cards