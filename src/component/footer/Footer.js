import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
    return (
        <footer>
            <div className="container">
                <p>All Right Reserved &copy; Ahmed Araby</p>
                <div className="social-media">
                    <a target={"_blank"} href="https://github.com/Araby99">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a target={"_blank"} href="https://www.linkedin.com/in/ahmed-mohamed-araby/">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer