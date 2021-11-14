import s from './Header.module.scss';
import treatment from '../../assets/img/banner_picture.svg'

const Header = () => {
    return (
        <div className={s.Header}>
           <div>
               <div className={s.title}>Autumn Giveaways for FREE</div>
               <div className={s.text}>Participate in Autumn Giveaway and
                   treat yourself <br/>
                   to nice and refreshing
                   cosmetics for free
               </div>
           </div>
            <div><img src={treatment} alt="treatment"/></div>
        </div>
    );
}

export default Header;
