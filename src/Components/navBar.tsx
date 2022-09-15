import styled from "styled-components";

function NavBar() {
    const Header = styled.header`
        align-items: center;
        background-color: #0a192f;
        backdrop-filter: blur(13.5px);
        width: 100%;
        height: 80px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        h1 {
            margin-left: 40px;
        }
        @media (max-width: 800px) {
            height: 100px;
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
        color: #8892b0;
        opacity: 1;
        @media (max-width: 800px) {
            opacity: 0;
        }
        span {
            color: #64fbda;
        }
    `;
    return (
        <Header>
            <h1>logo</h1>
            <Ul>
                <li>
                    <span>1.</span>sobre
                </li>
                <li>
                    <span>2.</span>projetos
                </li>
                <li>
                    <span>3.</span>contato
                </li>
                <button>Dowloads meu curriculo</button>
            </Ul>
        </Header>
    );
}

export default NavBar;
