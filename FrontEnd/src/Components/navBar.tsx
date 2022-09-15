import styled from "styled-components";

function NavBar() {
    const Header = styled.header`
    background-color: #0A192F;
    backdrop-filter: blur( 13.5px );
        width: 100%;
        height: 70px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        h1 {
            margin-left: 40px;
        }
    `;
    const Ul = styled.ul`
    list-style: none;
        display: flex;
        flex-direction: row;
        margin-right: 40px;
        justify-content: space-around;
        align-items: center;
        width: 591px;
        height: 40px;
        color: #8892B0;
        span{
        color: #64FBDA;}
    `;
    return (
        <Header>
            <h1>logo</h1>
            <Ul>
                <li><span>1.</span>sobre</li>
                <li><span>2.</span>projetos</li>
                <li><span>3.</span>contato</li>
                <button>Dowloads meu curriculo</button>
            </Ul>
        </Header>
    );
}

export default NavBar;
