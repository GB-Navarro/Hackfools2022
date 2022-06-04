import styled from 'styled-components';
import Couriers from "./Couriers";
import react from "react";

export default function InitialScreen() {
//BREAK POINT !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
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
                    text: "Me sentindo miserável",
                    score:
                    {
                        courierCount: 30,
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

    let fariaLimer = 0;
    let drone = 0;
    let miliciano = 0;
    let empinaMoto = 0;
    let stalker = 0;
    let naoRecebe = 0;
    let coach = 0;
    let [screen, setScreen] = react.useState(1);
    let [higherScore, setHigherScore] = react.useState("");

    return (
        <>
            <Header> Delivery Match </Header>
            {
                screen === 1 ?
                    <>
                        <Main> Conte-nos como você quer que seja a sua experiência</Main>
                        {questions.map((question) => {
                            return (
                                <>
                                    <Box>
                                        <Text>{question.question}</Text>
                                        <Select onChange={(e) => {
                                        }}>
                                            {question.alternatives.map((alternative) => {
                                                return (
                                                    <>
                                                        <option onClick={() => {
                                                        }}>{alternative.text}</option>
                                                        {setCourierScore(
                                                            alternative.score.courierCount, alternative.score.courierType,
                                                            fariaLimer, drone, miliciano, empinaMoto, stalker, naoRecebe, coach
                                                        )}
                                                    </>
                                                )
                                            })}
                                        </Select>
                                    </Box>
                                </>
                            )
                        })}
                        <Box>
                            <Button onClick={() => {
                                let auxArray = [fariaLimer, drone, miliciano, empinaMoto, stalker, naoRecebe];
                                let aux = -9999;
                                for (let i = 0; i < auxArray.length; i++) {
                                    if (auxArray[i] > aux) {
                                        aux = auxArray[i];
                                    }
                                }
                                console.log(aux);
                                if (aux === coach) {
                                    setHigherScore("coach");
                                    setScreen(2);
                                } else if (aux === drone) {
                                    setHigherScore("drone");
                                    setScreen(2);
                                } else if (aux === "miliciano") {
                                    setHigherScore("miliciano");
                                    setScreen(2);
                                } else if (aux === "empinaMoto") {
                                    setHigherScore("empinaMoto");
                                    setScreen(2);
                                } else if (aux === "stalker") {
                                    setHigherScore("stalker");
                                    setScreen(2);
                                }else if (aux === "fariaLimer") {
                                    setHigherScore("fariaLimer");
                                    setScreen(2);
                                }
                            }}>Enviar</Button>
                        </Box>
                    </>
                    :
                    <Couriers type={higherScore}></Couriers>
            }


        </>
    )

    function setCourierScore(valueToSet, destinationType, fariaLimer, drone, miliciano, empinaMoto, stalker, naoRecebe, coach) {
        naoRecebe = naoRecebe;
        if (destinationType === "fariaLimer") {
            fariaLimer = valueToSet;
        } else if (destinationType === "drone") {
            drone = valueToSet;
        } else if (destinationType === "miliciano") {
            miliciano = valueToSet;
        } else if (destinationType === "empinaMoto") {
            empinaMoto = valueToSet;
        } else if (destinationType === "stalker") {
            stalker = valueToSet;
        } else if (destinationType === "naoRecebe") {
            naoRecebe = valueToSet;
        } else if (destinationType === "coach") {
            coach = valueToSet;
        }
    }
}

const Header = styled.header`
    background-color: #e68a2e;
    height: 10vh;
    display:flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 25px;
    color: #EDEEE9;
`

const Main = styled.main`
    display:flex;
    justify-content: center;
    padding-top:10vh;
    color: #EDEEE9;
    font-weight:bold;
    font-size:20px;
`
const Select = styled.select`
    width: 30vw;
    height: 3vh;
    background-color: #edeee9;
    border: 1px solid #edeee9;
    border-radius: 5px;
`
const Text = styled.p`
    padding-bottom:10px;
    color: #EDEEE9;
    font-weight: bold;
`
const Box = styled.div`
    padding-top: 5vh;
    display:flex;
    flex-direction: column;
    align-items: center;
    
`
const Button = styled.button`
    width: 10vw;
    height: 3vh;
    background-color: #edeee9;
    border: 1px solid #edeee9;
    border-radius: 5px;
    color: #e68a2e;
    font-weight: bold;
`

/*  
        Branco => #edeee9
        Vermelho => #9d1722
        Amarelo => #e68a2e
*/