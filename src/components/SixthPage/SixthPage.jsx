import React from "react";
import s from './SixthPage.module.scss';
import step_by_step5 from '../../assets/img/step_by_step5.svg';
import Cream from '../../assets/img/Cream.png';

const SixthPage = () => {

    return (
        <div className={s.stepFifth}>
            <div className={s.stepImg}><img src={step_by_step5} alt=""/></div>
            <div className={s.textBlock}>
                <div className={s.stepNumber}>Step 5</div>
                <div className={s.title}>Buy and Provide order ID<br/>
                    to our Manager
                </div>
                <div className={s.text}>Click the button GO TO AMAZON and Buy a Product
                    <ol>
                        <li>Mauris rutrum interdum condimentum.</li>
                        <li>Donec commodo quis arcu eget pretium.</li>
                    </ol>
                </div>
                <button className={s.agreeButton}>Agree and continue</button>
            </div>
            <div className={s.image}><img src={Cream} alt="Cream"/></div>
        </div>
    )
}
export default SixthPage;