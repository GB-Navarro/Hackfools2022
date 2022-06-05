import logo from "./assets/images/logo.png"
import styled from "styled-components"
export default function Header() {
    return (
        <>
            <HeaderContainer>
                <img src={logo} />
                <h1>Delivery Match</h1>
            </HeaderContainer>

        </>
    )
}

const HeaderContainer = styled.div`
    height: 15vh;
    display:flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 50px;
    font-family: 'Pacifico', cursive;
    color: #EDEEE9;
    background: rgba( 230, 138, 46, 0.8 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 20px );
    -webkit-backdrop-filter: blur( 20px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );

    img{
        width:75px;
        height:75px;
        margin-right: 30px;
    }
`