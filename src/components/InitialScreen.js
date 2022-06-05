import Couriers from "./Couriers";
import Question from "./Question"
import Header from "./Header.js";

import styled from 'styled-components';
import react from "react";

export default function InitialScreen() {

    const questions = [
        {
            id: 2,
            question: "Qual das seguintes opções você considera mais relevante para a sua entrega?",
            alternatives: [
                {
                    number: 1,
                    text: "Temperatura certa",
                    score:
                    {
                        courierCount: 20,
                        courierType: "empinaMoto"
                    }
                },
                {
                    number: 2,
                    text: "Integridade da pizza",
                    score:
                    {
                        courierCount: 40,
                        courierType: "coach"
                    }
                },
                {
                    number: 3,
                    text: "Cordialidade",
                    score:
                    {
                        courierCount: 10,
                        courierType: "fariaLimer"
                    }

                },
                {
                    number: 4,
                    text: "Entretenimento",
                    score:
                    {
                        courierCount: 50,
                        courierType: "coach"
                    }
                }
            ],
            answered: false
        },
        {
            id: 3,
            question: "O quão você valoriza serviços que buscam inovações tecnológicas?",
            alternatives: [
                {
                    number: 1,
                    text: "Extremamente",
                    score:
                    {
                        courierCount: 40,
                        courierType: "drone"
                    }
                },
                {
                    number: 2,
                    text: "Muito",
                    score:
                    {
                        courierCount: 20,
                        courierType: "fariaLimer"
                    }
                },
                {
                    number: 3,
                    text: "Médio",
                    score:
                    {
                        courierCount: 10,
                        courierType: "fariaLimer"
                    }
                },
                {
                    number: 4,
                    text: "Pouco",
                    score:
                    {
                        courierCount: 10,
                        courierType: "miliciano"
                    }
                }
            ],
            answered: false
        },
        {
            id: 4,
            question: "Que tipo de veículo você gostaria que fizesse sua entrega?",
            alternatives: [
                {
                    number: 1,
                    text: "Um veículo sem rodas",
                    score:
                    {
                        courierCount: 40,
                        courierType: "drone"
                    }
                },
                {
                    number: 2,
                    text: "Um veículo com uma roda",
                    score:
                    {
                        courierCount: 40,
                        courierType: "empinaMoto"
                    }
                },
                {
                    number: 3,
                    text: "Um veículo com duas rodas",
                    score:
                    {
                        courierCount: 10,
                        courierType: "fariaLimer"
                    }
                },
                {
                    number: 4,
                    text: "Um veículo com quatro rodas",
                    score:
                    {
                        courierCount: 10,
                        courierType: "miliciano"
                    }
                }
            ],
            answered: false
        },
        {
            id: 5,
            question: "Você está com pressa?",
            alternatives: [
                {
                    number: 1,
                    text: "Claro, quero pra ontem",
                    score:
                    {
                        courierCount: 40,
                        courierType: "empinaMoto"
                    }
                },
                {
                    number: 2,
                    text: "Só um pouco",
                    score:
                    {
                        courierCount: 10,
                        courierType: "miliciano"
                    }
                },
                {
                    number: 3,
                    text: "Tô tranquilo",
                    score:
                    {
                        courierCount: 20,
                        courierType: "fariaLimer"
                    }
                },
                {
                    number: 4,
                    text: "Sou do tempo do internet explorer, posso esperar",
                    score:
                    {
                        courierCount: 30,
                        courierType: "fariaLimer"
                    }
                }
            ],
            answered: false
        },
        {
            id: 6,
            question: "Você está se sentindo motivado/produtivo hoje?",
            alternatives: [
                {
                    number: 1,
                    text: "Claro, meu dia tem 48h",
                    score:
                    {
                        courierCount: 20,
                        courierType: "fariaLimer"
                    }
                },
                {
                    number: 2,
                    text: "Aprender todas as dancinhas do tik tok conta como produtivo?",
                    score:
                    {
                        courierCount: 20,
                        courierType: "stalker"
                    }
                },
                {
                    number: 3,
                    text: "Não, fiquei o dia todo assistindo netflix",
                    score:
                    {
                        courierCount: 10,
                        courierType: "coach"
                    }
                },
                {
                    number: 4,
                    text: "Não, sou um fracasso😩",
                    score:
                    {
                        courierCount: 40,
                        courierType: "coach"
                    }
                }
            ],
            answered: false
        },
        {
            id: 7,
            question: "Você é uma pessoa higiênica?",
            alternatives: [
                {
                    number: 1,
                    text: "Sim, tenho mania de limpeza",
                    score:
                    {
                        courierCount: 20,
                        courierType: "fariaLimer"
                    }
                },
                {
                    number: 2,
                    text: "Sim tomo banho todo dia",
                    score:
                    {
                        courierCount: 20,
                        courierType: "fariaLimer"
                    }
                },
                {
                    number: 3,
                    text: "Não, mas sou cheirosinho(a)",
                    score:
                    {
                        courierCount: 10,
                        courierType: "stalker"
                    }
                },
                {
                    number: 4,
                    text: "Não passo nem fio dental",
                    score:
                    {
                        courierCount: 20,
                        courierType: "empinaMoto"
                    }
                }
            ],
            answered: false
        },
        {
            id: 8,
            question: "Você apoia a LGPD (Lei Geral de Proteção de Proteção de Dados)?",
            alternatives: [
                {
                    number: 1,
                    text: "Totalmente",
                    score:
                    {
                        courierCount: 5,
                        courierType: "fariaLimer"
                    }
                },
                {
                    number: 2,
                    text: "Em parte",
                    score:
                    {
                        courierCount: 10,
                        courierType: "fariaLimer"
                    }
                },
                {
                    number: 3,
                    text: "Não muito",
                    score:
                    {
                        courierCount: 10,
                        courierType: "drone"
                    }
                },
                {
                    number: 4,
                    text: "Não mesmo",
                    score:
                    {
                        courierCount: 50,
                        courierType: "stalker"
                    }
                }
            ],
            answered: false
        },
        {
            id: 9,
            question: "Você apoia o armamento da população?",
            alternatives: [
                {
                    number: 1,
                    text: "Sou totalmente a favor",
                    score:
                    {
                        courierCount: 60,
                        courierType: "miliciano"
                    }
                },
                {
                    number: 2,
                    text: "Apoio com ressalvas",
                    score:
                    {
                        courierCount: 10,
                        courierType: "empinaMoto"
                    }
                },
                {
                    number: 3,
                    text: "Não acho que dê muito certo",
                    score:
                    {
                        courierCount: 10,
                        courierType: "coach"
                    }
                },
                {
                    number: 4,
                    text: "Sou totalmente contra",
                    score:
                    {
                        courierCount: 10,
                        courierType: "coach"
                    }
                }
            ],
            answered: false
        },
        {
            id: 10,
            question: "Você mora sozinho?",
            alternatives: [
                {
                    number: 1,
                    text: "Não, moro com mais pessoas",
                    score:
                    {
                        courierCount: 10,
                        courierType: "drone"
                    }
                },
                {
                    number: 2,
                    text: "Não, moro meus filhos (mãe/pai de pet)",
                    score:
                    {
                        courierCount: 10,
                        courierType: "fariaLimer"
                    }
                },
                {
                    number: 3,
                    text: "Sim, mas tenho câmera de segurança",
                    score:
                    {
                        courierCount: 10,
                        courierType: "stalker"
                    }
                },
                {
                    number: 4,
                    text: "Sim...🤨",
                    score:
                    {
                        courierCount: 20,
                        courierType: "empinaMoto"
                    }
                }
            ],
            answered: false
        },

    ]

    let [screen, setScreen] = react.useState(1);
    let [higherScore, setHigherScore] = react.useState("");

    return (
        <>
            <Header />
            {
                screen === 1 ?
                    <>
                        <Main>
                            <h1>Conte-nos como você quer que seja a sua experiência</h1>
                            <Section>
                                {questions.map((question) => {
                                    return (
                                        <>
                                            <Question text={question.question} alternatives={question.alternatives}/> 
                                        </>
                                    )
                                })}
                                <Box>
                                    <Button>Enviar</Button>
                                </Box>
                            </Section>
                        </Main>
                    </>
                    :
                    <Couriers type={higherScore}></Couriers>
            }
        </>
    )
}

const Main = styled.main`
    display:flex;
    flex-direction: column;
    align-items: center;
    padding-top:10vh;
    color: #EDEEE9;
    font-weight:bold;
    font-size:30px;
    font-family: 'Indie Flower', cursive;

    h1{
        margin-bottom:50px;
    }
`
const Section = styled.section`
    width: 60%;
    background: rgba( 110, 23, 34, 0.8 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 20px );
    -webkit-backdrop-filter: blur( 20px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    margin-bottom:100px;
`
const Box = styled.div`
    padding-top: 5vh;
    display:flex;
    flex-direction: column;
    align-items: center;
`
const Button = styled.button`
    width: 10vw;
    height: 7vh;
    background-color: #e68a2e;
    border: 1px solid #edeee9;
    border-radius: 5px;
    color: #edeee9;
    font-weight: bold;
    margin-bottom: 50px;
    font-family:'Pacifico', cursive;
    font-size:20px;
`