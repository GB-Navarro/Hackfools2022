import styled from 'styled-components';
import Questions from "./Questions";
export default function InitialScreen() {
    return (
        <>
            <Header> Delivery Match </Header>
            <Main> Conte-nos como você quer que seja a sua experiência</Main>
            <Box>
                <Text>Pergunta 1</Text>
                <Input></Input>
            </Box>
            <Box>
                <Text>Pergunta 2</Text>
                <Input></Input>
            </Box>
            <Box>
                <Button>Enviar</Button>
            </Box>

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

const Input = styled.input`
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