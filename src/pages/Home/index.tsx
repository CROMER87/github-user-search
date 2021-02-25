import { Link } from 'react-router-dom';
import Button from '../../core/components/Button';
import './styles.scss';

const Home = () => (
    <div>
        <div className="home-content">
            <h3>Desafio do Capítulo 3, <br /> Bootcamp DevSuperior</h3>
        </div>
        <div className="text-subtitle">
            <p>
                Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior. <br /><br />
                Favor observar as instruções passadas no capítulo sobre a <br /> elaboração deste projeto. <br /><br />
                Este design foi adaptado a partir de Ant Design System for Figma, de <br /> Mateusz Wierzbicki:
                <a href=" ">&nbsp;antforfigma@gmail.com</a>
            </p>
            <Link to="/search">
                <Button text="Começar" />
            </Link>
        </div>
    </div>



);

export default Home;

