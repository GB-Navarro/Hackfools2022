import styled from "styled-components";
import coach from "./assets/images/coach.png";
import farialimer from "./assets/images/farialimer.jpg";
import drone from "./assets/images/drone.png";
import miliciano from "./assets/images/miliciano.jpeg";
import stalker from "./assets/images/stalker.jpg";

export default function Couriers(props) {
    console.log(props);
    const couriers = [
        {
            id: 1,
            nome: "José Safra",
            type: "Faria limer",
            img: "",
            description: "Demora a entregar, 50% de chance de te convencer a investir na empresa do pai, 30% de chance de te fazer acreditar na meritocracia, pede 10% de gorjeta, é cheiroso e irá entregar a pizza intacta.",
            score: 0
        },
        {
            id: 2,
            nome: "Christian Cardoso",
            type: "Coach",
            img: "",
            description: "Dark coach, vampirista quântico, hipnólogo, palestrante, trader, influencer, ativista moral, tiktoker e entregador.",
            score: 0
        },
        {
            id: 3,
            nome: "Pepedrone",
            type: "Drone",
            img: "",
            description: "Ágil, não pede gorjeta, estabilidade questionável, 60% de chance de danificar a pizza, avisa quando chega.",
            score: 0
        },
        {
            id: 4,
            nome: "Adriano",
            type: "Miliciano",
            img: "",
            description: "Razoavelmente rápido(corta caminho), 25% de chance de comer 2 pedaços da pizza (aumenta para 90% caso a entrega seja entre 11-13h e 19-21h), 80% de chance de te vender um gato, pede 30% de gorjeta, joga a pizza no porta-malas.",
            score: 0
        },
        {
            id: 5,
            nome: "Cleiton",
            type: "empinaMoto",
            img: "",
            description: "Entrega quase instantânea, deixa claro quando está chegando, estiloso, pede 10% de gorjeta, 60% de chance de cuspir na sua pizza, 15% de chance de te assaltar(aumenta para 70% caso a entrega seja a noite).",
            score: 0
        },
        {
            id: 6,
            nome: "Joe",
            type: "Stalker",
            img: "",
            description: "Chega rápido mas demora a entregar, se apaixona a primeira vista, não pede gorjeta(mas pede seu número e redes sociais), 80% de chance de clonar o seu cartão, 10% de chance de te perseguir pelo resto da sua vida. ",
            score: 0
        },

    ]

    return (
        <>
            {render(props.type)}
        </>
    )

    function render(type){
        if(type === "fariaLimer"){
            return (
                <>
                    <Main>
                        <CourierBox>
                            <TextBox>
                                <Text>Parabéns! Você deu match com o entregador</Text>
                                <Text>{couriers[0].nome}</Text>
                            </TextBox>
                            <ImageBox>
                                <img src={farialimer} />
                            </ImageBox>
                            <Box>
                                <Text>{couriers[0].description}</Text>          
                            </Box>
                        </CourierBox>
                    </Main>
                </>
            )
        }else if(type === "drone"){
            return (
                <>
                    <Main>
                        <CourierBox>
                            <TextBox>
                                <Text>Parabéns! Você deu match com o entregador</Text>
                                <Text>{couriers[2].nome}</Text>
                            </TextBox>
                            <ImageBox>
                                <img src={drone} />
                            </ImageBox>
                            <Box>
                                <Text>{couriers[2].description}</Text>          
                            </Box>
                        </CourierBox>
                    </Main>
                </>
            )
        }else if(type === "miliciano"){
            return (
                <>
                    <Main>
                        <CourierBox>
                            <TextBox>
                                <Text>Parabéns! Você deu match com o entregador</Text>
                                <Text>{couriers[3].nome}</Text>
                            </TextBox>
                            <ImageBox>
                                <img src={miliciano} />
                            </ImageBox>
                            <Box>
                                <Text>{couriers[3].description}</Text>          
                            </Box>
                        </CourierBox>
                    </Main>
                </>
            )
        }else if(type === "empinaMoto"){
            return (
                <>
                    <Main>
                        <CourierBox>
                            <TextBox>
                                <Text>Parabéns! Você deu match com o entregador</Text>
                                <Text>{couriers[4].nome}</Text>
                            </TextBox>
                            <ImageBox>
                                <img src={coach} />
                            </ImageBox>
                            <Box>
                                <Text>{couriers[4].description}</Text>          
                            </Box>
                        </CourierBox>
                    </Main>
                </>
            )
        }else if(type === "stalker"){
            return (
                <>
                    <Main>
                        <CourierBox>
                            <TextBox>
                                <Text>Parabéns! Você deu match com o entregador</Text>
                                <Text>{couriers[5].nome}</Text>
                            </TextBox>
                            <ImageBox>
                                <img src={stalker} />
                            </ImageBox>
                            <Box>
                                <Text>{couriers[5].description}</Text>          
                            </Box>
                        </CourierBox>
                    </Main>
                </>
            )
        }else if(type === "coach"){
            return (
                <>
                    <Main>
                        <CourierBox>
                            <TextBox>
                                <Text>Parabéns! Você deu match com o entregador</Text>
                                <Text>{couriers[1].nome}</Text>
                            </TextBox>
                            <ImageBox>
                                <img src={coach} />
                            </ImageBox>
                            <Box>
                                <Text>{couriers[1].description}</Text>          
                            </Box>
                        </CourierBox>
                    </Main>
                </>
            )
        }
    }
}



const Main = styled.main`
    height: 100vh;
    display:flex;
    justify-content: center;
    align-items: center;
`
const Text = styled.p`
    color: #edeee9;
    font-weight: bold;
    font-size: 20px;
`
const TextBox = styled.div`
    padding-top: 30px;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
`
const Box = styled.div`
    padding-top: 50px;
    padding-left: 20px;
`
const CourierBox = styled.div`
    width: 50%;
    height: 80vh;
    background-color: #e68a2e;
    border-radius: 5px;
`
const ImageBox = styled.div`
    padding-top: 30px;
    display:flex;
    justify-content:center;
    
    img{
        border-radius: 5px;
    }
`