import 'react-awesome-button/dist/styles.css';
import { AwesomeButton } from "react-awesome-button";
import { FaStar } from 'react-icons/fa';
import './Header.css';
import { Fade, Slide } from 'react-awesome-reveal';
import wallpaper from '../assets/wallpaper.jpg'; // Importar a imagem

function Header() {
    const handleOverviewClick = () => {
        const overviewSection = document.getElementById('overview-section');
        if (overviewSection) {
            overviewSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="page-header">
            <div className="vulcan-container">
                <Fade>
                    <p className="Vulcan">Vulcan Menu</p>
                </Fade>
            </div>
            <Fade>
                <p className="description">Protect yourself and improve your GTA Online experience.</p>
            </Fade>
            <Slide direction="up">
                <AwesomeButton className="aws-btn" type="primary" before={<FaStar />} onPress={handleOverviewClick}>Overview</AwesomeButton>
            </Slide>
            <Fade>
            <div className="header-image-container"> {/* Novo div para a imagem */}
                <img src={wallpaper} alt="Wallpaper" className="header-image" /> {/* Imagem */}
            </div>
        </Fade>
        </div>
    );
}

export default Header;