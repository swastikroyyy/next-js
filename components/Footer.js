import styled from 'styled-components';
const FooterSection = styled.div`
 height:60x;
background: #000;
color: #fff;
display:flex;
justify-content: center;
align-items: center;
`;



const Footer = () => {
    return (
        <FooterSection>
            <h2>COPYRIGHT &copy; 2021</h2>
            <p>Next 2021 All Rights Reserved</p>

        </FooterSection>
    )
}

export default Footer;
