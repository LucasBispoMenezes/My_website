import { BiMenuAltRight } from "react-icons/bi";
import logo from "../img/logo.png";
import { Ul, Header } from "./css/navbar";
const value = {
    color: "#64fbda",
    size: "45px",
};

function NavBar() {
    return (
        <Header>
            <section>
                <img src={logo} alt="" />
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
                </Ul>
                <button hidden={true}>
                    <BiMenuAltRight {...value} />
                </button>
            </section>
        </Header>
    );
}

export default NavBar;
