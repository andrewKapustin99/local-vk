import logo from '../img/blue-logo-png.png';
import photo from '../img/Wa4vBSHaZI4(1).jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return(
        <header className="main-header">
            <div className="header__container">
                <div className="header__logo">
                    <img className="logo" src={logo} alt="Logo" />
                </div>

                <div className="header__info">
                    <div className="info__wrapp">
                        <div className="info__time" id="time"></div>
                        <div className="info__date" id="day"></div>
                    </div>
                </div>

                <div className="header__settings" id="dropBtn">
                <div className="settings__wrap">
                    <div className="setting__name">
                        <h5>Andrew</h5>
                    </div>
                    <div className="setting__photo">
                        <img src={photo} alt="" />
                    </div>
                    <div className="setting__arrow" id="arrow">
                        <FontAwesomeIcon icon={faChevronDown}/>
                    </div>
                </div>
                
                <div className="drop_menu hide" id="dropMenu">
                    <span>Settings</span>
                    <div className="line"></div>
                    <a href="#">Settings</a>
                    <a href="#">Help</a>
                    <div className="line"></div>
                    <a href="#">Выйти</a>
                </div>

            </div>

            </div>
        </header>
        // <img src={logo} />
    );
}

const dropBtn = document.getElementById('dropBtn');
console.log(dropBtn);
dropBtn.addEventListener('click', function(e){
    e.preventDefault();
    document.getElementById('arrow').classList.toggle('arrow_up')
    document.getElementById('dropMenu').classList.toggle('hide')
})

export default Header