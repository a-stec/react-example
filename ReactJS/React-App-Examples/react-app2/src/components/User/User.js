import './User.css';
import styleUser from './User.module.css';

function User() {
    return (
        <div id="User">
            <h2 className="username">Сидоров Иван Петрович</h2>
            <div className="contacts">
                <h3 className="heading">Контакты</h3>
                <address className="address">
                    <a href="tel:88005553535" className={styleUser.link}>+78005553535</a>
                    <a href="mailto:test@mail.ru" className={styleUser.link}>test@mail.ru</a>
                </address>
            </div>
        </div>
    );
}

export default User;
