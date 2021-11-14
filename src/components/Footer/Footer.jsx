import React from "react";
import s from './Footer.module.scss';
import Vector from '../../assets/img/Vector.svg';
import fastfood from '../../assets/img/fastfood.svg';
import bag from '../../assets/img/bag.svg';
import chat from '../../assets/img/chat.svg';
import coin from '../../assets/img/coin.svg';

const Footer = () => {

    return (
        <div className={s.Footer}>
            <div className={s.circlesBlock}>
                <div className={s.title}>How does it work?</div>
                <div className={s.circles}>
                    <div className={`${s.circle} ${s.bigText}`}>Easy <br/>
                        as <br/>
                        1-2-3
                    </div>
                    <div><img src={Vector} alt="arrow"/></div>
                    <div className={s.circleBlock}>
                        <div className={s.circle}><img src={fastfood} alt={'fastfood'}/></div>
                        <div className={s.text}>Choose product</div>
                    </div>
                    <div><img src={Vector} alt="arrow"/></div>
                    <div className={s.circleBlock}>
                        <div className={s.circle}><img src={bag} alt={'bag'}/></div>
                        <div className={s.text}>Buy product</div>
                    </div>
                    <div><img src={Vector} alt="arrow"/></div>
                    <div className={s.circleBlock}>
                        <div className={s.circle}><img src={chat} alt={'chat'}/></div>
                        <div className={s.text}>Test and share review</div>
                    </div>
                    <div><img src={Vector} alt="arrow"/></div>
                    <div className={s.circleBlock}>
                        <div className={s.circle}><img src={coin} alt={'coin'}/></div>
                        <div className={s.text}>Get 100% money back</div>
                    </div>

                </div>
            </div>
            <div className={s.links}>
                <div className={s.linkBlock}>
                    <div className={s.boldText}>Privacy and Terms</div>
                    <div>Privacy Policy</div>
                    <div>Terms of use</div>
                </div>
                <div className={s.linkBlock}>
                    <div className={s.boldText}>Need Help?</div>
                    <div>mail@gmail.com</div>
                </div>
                <div className={s.linkBlock}>
                    <div className={s.boldText}>Social</div>
                    <div>Facebook</div>
                    <div>Instagram</div>
                </div>
            </div>
            <div className={s.CopyRight}>© All Rights Reserved</div>

        </div>
    )
}
export default Footer;