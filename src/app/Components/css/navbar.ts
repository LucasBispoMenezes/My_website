import styled from 'styled-components'

const Header = styled.header`
section {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    height: 100%;
}
position: fixed;
align-items: center;
background-color: rgba(10, 25, 47, 0.8);
width: 100%;
height: 80px;
display: flex;
flex-direction: row;
justify-content: space-between;
@media (max-width: 800px) {
    height: 100px;
}
`
const Ul = styled.ul`
z-index: 0;
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
`

export { Ul, Header }
