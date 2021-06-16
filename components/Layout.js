import Navbarr from "./Navbarr";
import Footer from './Footer';


export default function Layout({ children }) {
    return (
        <div>
            <Navbarr />
            {children}
            <Footer />
        </div>
    );
}