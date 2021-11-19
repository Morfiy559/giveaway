import React from "react";
import s from '../Steps.module.scss';
import step_by_step2 from '../../assets/img/step_by_step2.png';
import facebook_post from '../../assets/img/facebook_post.png';
import press_here_block from '../../assets/img/press_here_block.png';

const ThirdPage = () => {
    return (
        <div className={s.ThirdPage}>
            <div><img src={step_by_step2} alt="step_by_step2"/></div>
            <div className={s.textBlock}>
                <div className={s.stepNumber}>Step 2</div>
                <div className={s.title}>Share Facebook post</div>
                <div className={s.text}>To participate in this giveaway please share this giveaway offer with your friends. Not only your
                    friends will appreciate this offer but you will receive $10 Amazon Gift Card for each of your
                    friends that participates in this giveaway!
                </div>
                <button className={'buttonBlack'}>continue</button>
            </div>
            <div className={s.imagesBlock}>
                <div className={s.facebook_post}><img src={facebook_post} alt="facebook_post"/></div>
                <div className={s.press_here_block}><img src={press_here_block} alt="press_here_block"/></div>
            </div>
        </div>
    )
}
export default ThirdPage;