import styled from "styled-components";

export default function Courier(props) {
    return (
        <>
            <Main>
                <CourierBox>
                    <TextBox>
                        <Text>Parabéns! Você deu match com o entregador</Text>
                        <SpecialText>{props.name}</SpecialText>
                    </TextBox>
                    <ImageBox>
                        <img src={props.img} />
                    </ImageBox>
                    <DescriptionBox>
                        <Text>
                            <h1>Descrição do seu match ❤️:</h1>
                            {splitString(props.description)}
                        </Text>
                    </DescriptionBox>
                </CourierBox>
            </Main>
            <SpaceBox></SpaceBox>
        </>
    )
}

function splitString(string) {
    let arr = string.split(",");
    return (
        <>
            {arr.map((element) => {
                return (
                    <>
                        <ItemBox>
                            <Icon>
                                <ion-icon name="checkbox"></ion-icon>
                            </Icon>
                            <p>{element}</p>
                        </ItemBox>
                    </>
                )
            })}
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
const SpecialText = styled.p`
    color: #edeee9;
    font-weight: bold;
    font-size: 40px;
    margin-top:20px;
    font-family: 'Pacifico', cursive;
`
const TextBox = styled.div`
    padding-top: 30px;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
`
const DescriptionBox = styled.div`
    padding-top: 50px;
    padding-left: 20px;
    padding-bottom: 50px;
    display:flex;
    justify-content: center;
`
const ImageBox = styled.div`
    padding-top: 30px;
    display:flex;
    justify-content:center;
    
    img{
        border-radius: 5px;
    }
`
const CourierBox = styled.div`
    margin-top: 350px;
    width: 50%;
    background: rgba( 230, 138, 46, 0.8 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 20px );
    -webkit-backdrop-filter: blur( 20px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
`
const SpaceBox = styled.div`
    margin-top:500px;
`
const ItemBox = styled.div`
    display:flex;
    margin-top: 10px;
`
const Icon = styled.div`
    color: #8FC549;
    margin-right: 5px;
`