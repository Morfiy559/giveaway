import React from "react";
import st from './FourthPage.module.scss';
import s from '../Steps.module.scss';
import step_by_step3 from '../../assets/img/step_by_step3.png';
import picture_giveaway_color from '../../assets/img/picture_giveaway_color.png';

const FourthPage = () => {
    return (
        <div className={s.ThirdPage}>
            <div><img src={step_by_step3} alt="step_by_step2"/></div>
            <div className={s.textBlock}>
                <div className={s.stepNumber}>Step 3</div>
                <div className={s.title}>Amazon Prime</div>
                <div className={s.text}>Do you have an Amazon Prime account?
                    <br/><br/>
                    To be able to participate in this giveaway you need to have Amazon Prime.
                </div>
                <div className={st.buttonsBlock}>
                    <button className={`buttonBlack ${st.buttonSmall}`}>Yes, i have</button>
                    <button className={`buttonBlack ${st.buttonSmall} ${st.greyColor}`}>no, i don’t have</button>
                </div>

            </div>
            <div className={s.imagesBlock}>
                <div className=''><img src={picture_giveaway_color} alt=""/></div>
                {/*<div className={s.facebook_post}><img src={facebook_post} alt="facebook_post"/></div>*/}
                {/*<div className={s.press_here_block}><img src={press_here_block} alt="press_here_block"/></div>*/}
            </div>
        </div>
    )
}
export default FourthPage;