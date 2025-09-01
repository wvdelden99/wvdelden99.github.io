// Components
import Header from "../nav/Header";
import Footer from "../nav/Footer";


export default function Layout({children}) {
    return (
        <div className="wrapper">
            <Header />

            {children}

            <Footer />
        </div>
    )
}
