import styled from "styled-components";
import coach from "./assets/images/coach.png";

export default function Couriers() {
    return (
        <>
            <Main>
                <CourierBox>
                    <TextBox>
                        <Text>Parabéns! Você deu match com o entregador</Text>
                        <Text>NOME</Text>
                    </TextBox>
                    <ImageBox>
                        <img src={coach} />
                    </ImageBox>
                    <TextBox>
                        <Text>Descrição do seu entregador: </Text>
                    </TextBox>
                </CourierBox>
            </Main>
        </>
    )
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