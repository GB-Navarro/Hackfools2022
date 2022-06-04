import styled from 'styled-components';
import Couriers from "./Couriers";
import react from "react";

export default function InitialScreen() {

    const questions = [
        {
            id: 1,
            question: "Neste mês, estamos realizando uma campanha contra a fome na cidade de São Paulo fazendo doações de pizza para pessoas em situação vulnerável. Você deseja contribuir?",
            alternatives: [
                {
                    number: 1,
                    text: "Quero contribuir hoje mesmo!"
                },
                {
                    number: 2,
                    text: "Sim, mas contribuirei numa próxima."
                },
                {
                    number: 3,
                    text: "Infelizmente não consigo"
                },
                {
                    number: 4,
                    text: "Não"
                }
            ],
            answered: false
        },
        {
            id: 2,
            question: "Qual das seguintes opções você considera mais relevante para a sua entrega?",
            alternatives: [
                {
                    number: 1,
                    text: "Temperatura certa"
                },
                {
                    number: 2,
                    text: "Integridade da pizza"
                },
                {
                    number: 3,
                    text: "Cordialidade"
                },
                {
                    number: 4,
                    text: "Entretenimento"
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
                    text: "Extremamente"
                },
                {
                    number: 2,
                    text: "Muito"
                },
                {
                    number: 3,
                    text: "Médio"
                },
                {
                    number: 4,
                    text: "Pouco"
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
                    text: "Um veículo sem rodas"
                },
                {
                    number: 2,
                    text: "Um veículo com uma roda"
                },
                {
                    number: 3,
                    text: "Um veículo com duas rodas"
                },
                {
                    number: 4,
                    text: "Um veículo com quatro rodas"
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
                    text: "Claro, quero pra ontem"
                },
                {
                    number: 2,
                    text: "Só um pouco"
                },
                {
                    number: 3,
                    text: "Tô tranquilo"
                },
                {
                    number: 4,
                    text: "Sou do tempo da internet explorer, posso esperar"
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
                    text: "Claro, meu dia tem 48h"
                },
                {
                    number: 2,
                    text: "Aprender todas as dancinhas do tik tok conta como produtivo?"
                },
                {
                    number: 3,
                    text: "Não, fiquei o dia todo assistindo netflix"
                },
                {
                    number: 4,
                    text: "Me sentindo miserável"
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
                    text: "Sim, tenho mania de limpeza"
                },
                {
                    number: 2,
                    text: "Sim tomo banho todo dia"
                },
                {
                    number: 3,
                    text: "Não, mas sou cheirosinho(a)"
                },
                {
                    number: 4,
                    text: "Não passo nem fio dental"
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
                    text: "Totalmente"
                },
                {
                    number: 2,
                    text: "Em parte"
                },
                {
                    number: 3,
                    text: "Não muito"
                },
                {
                    number: 4,
                    text: "Não mesmo"
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
                    text: "Sou totalmente a favor"
                },
                {
                    number: 2,
                    text: "Apoio com ressalvas"
                },
                {
                    number: 3,
                    text: "Não acho que dê muito certo"
                },
                {
                    number: 4,
                    text: "Sou totalmente contra"
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
                    text: "Não, moro com mais pessoas"
                },
                {
                    number: 2,
                    text: "Não, moro meus filhos (mãe/pai de pet)"
                },
                {
                    number: 3,
                    text: "Sim, mas tenho câmera de segurança"
                },
                {
                    number: 4,
                    text: "Sim...🤨"
                }
            ],
            answered: false
        },
        
    ]

    const couriers = [
        {
            id: 1,
            nome: "",
            description: "",
            score: 0
        },
        {
            id: 2,
            nome: "",
            description: "",
            score: 0
        },
        {
            id: 3,
            nome: "",
            description: "",
            score: 0
        },
        {
            id: 4,
            nome: "",
            description: "",
            score: 0
        },
        {
            id: 5,
            nome: "",
            description: "",
            score: 0
        },
        {
            id: 6,
            nome: "",
            description: "",
            score: 0
        },

    ]

    const [screen, setScreen] = react.useState(2);

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
                                        console.log(e.target.value);
                                    }}>
                                        {question.alternatives.map((alternative) => {
                                            return (
                                                <>
                                                    <option>{alternative.text}</option>
                                                </>
                                            )
                                        })}
                                    </Select>
                                </Box>
                            </>
                        )
                    })}
                    <Box>
                        <Button>Enviar</Button>
                    </Box>
                </>
                :
                <Couriers></Couriers>
            }
            

        </>
    )
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