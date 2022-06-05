import styled from "styled-components";

import Courier from "./Courier";

import coach from "./assets/images/coach.png";
import farialimer from "./assets/images/farialimer.jpg";
import drone from "./assets/images/drone.png";
import miliciano from "./assets/images/miliciano.jpeg";
import stalker from "./assets/images/stalker.jpg";

export default function Couriers(props) {

    const couriers = [
        {
            id: 1,
            nome: "José Safra",
            type: "Faria limer",
            img: "",
            description: "Demora a entregar, 50% de chance de te convencer a investir na empresa do pai, 30% de chance de te fazer acreditar na meritocracia, Pede 10% de gorjeta, Cheiroso, Entrega a pizza intacta.",
            score: 0
        },
        {
            id: 2,
            nome: "Christian Cardoso",
            type: "Coach",
            img: "",
            description: "Dark coach, Vampirista quântico, Hipnólogo, Palestrante, Trader, Influencer, Ativista moral, Tiktoker, Vende curso de JavaScript Espiritual, Entregador.",
            score: 0
        },
        {
            id: 3,
            nome: "Pepedrone",
            type: "Drone",
            img: "",
            description: "Ágil, Não pede gorjeta, Estabilidade questionável, 60% de chance de danificar a pizza, Avisa quando chega.",
            score: 0
        },
        {
            id: 4,
            nome: "Adriano",
            type: "Miliciano",
            img: "",
            description: "Razoavelmente rápido (corta caminho), 25% de chance de comer 2 pedaços da pizza (aumenta para até 90% a depender do horário), 80% de chance de te vender Gatonet, Pede 30% de gorjeta, Joga a pizza no porta-malas.",
            score: 0
        },
        {
            id: 5,
            nome: "Cleiton",
            type: "empinaMoto",
            img: "",
            description: "Entrega quase instantânea, Deixa claro quando está chegando (Placa arrasta no chão), Chavoso, Pede 10% de gorjeta, 60% de chance de cuspir na sua pizza, 15% de chance de te assaltar (aumenta para 70% caso a entrega seja a noite).",
            score: 0
        },
        {
            id: 6,
            nome: "Joe",
            type: "Stalker",
            img: "",
            description: "Chega rápido mas demora a entregar, Se apaixona a primeira vista, Não pede gorjeta (mas pede seu número e redes sociais), 80% de chance de clonar o seu cartão, 10% de chance de te perseguir pelo resto da sua vida. ",
            score: 0
        },

    ]

    return (
        <>
            <Courier name={couriers[1].nome} img={coach} description={couriers[1].description}/>
        </>
    )

}



