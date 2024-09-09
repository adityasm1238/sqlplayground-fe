import { Container } from "reactstrap";

const Footer = () => {
    return(
        <footer className="bg-white sticky-footer">
            <Container>
                <div className="text-center my-auto copyright"><span>Copyright © SQL Playground 2024</span></div>
            </Container>
        </footer>
    );
}

export default Footer;