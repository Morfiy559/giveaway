import React from "react";
import s from './SecondPage.module.scss';
import step_by_step from '../../assets/img/step_by_step.svg';
import Cream from '../../assets/img/Cream.png';

const SecondPage = () => {

    return (
        <div className={s.stepOne}>
            <div><img src={step_by_step} alt=""/></div>
            <div className={s.textBlock}>
                <div className={s.stepNumber}>Step 1</div>
                <div className={s.title}>Lorem ipsum dolor <br/>
                    sit amet
                </div>
                <div className={s.text}>Aliquam urna arcu, scelerisque vel viverra sed, pellentesque sit amet metus. Curabitur at luctus
                    massa. Vestibulum pretium sem tortor, vitae mattis odio accumsan vitae. Fusce id luctus erat:
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
export default SecondPage;