import React from "react";
import st from './FifthPage.module.scss';
import s from '../Steps.module.scss';
import step_by_step4 from '../../assets/img/step_by_step4.svg';
import picture_giveaway_color from '../../assets/img/picture_giveaway_color.png';
import gift from '../../assets/img/gift.svg';


const FifthPage = () => {
    return (
        <div className={s.ThirdPage}>
            <div><img src={step_by_step4} alt="step_by_step2"/></div>
            <div className={s.textBlock}>
                <div className={s.stepNumber}>Step 4</div>
                <div className={s.title}>How to Buy a Product
                    with 100% BONUS!
                </div>
                <div className={`${s.text} ${st.list}`}>
                    <div className={st.listItems}>
                        <div className={st.listItem}>
                            <div className={st.circle}>1</div>
                            <div>You need to Buy our Product on Amazon at the <br/>specified price $20.89!</div>
                        </div>
                        <div className={st.listItem}>
                            <div className={st.circle}>2</div>
                            <div>After the purchase - Send us your Order Number or <br/> the Screenshot to our manager in FB
                                Messenger
                            </div>
                        </div>
                        <div className={st.listItem}>
                            <div className={st.circle}>3</div>
                            <div>When you receive the product please use it and <br/> share product reviews</div>
                        </div>
                        <div className={st.listItem}>
                            <div className={st.circle}>4</div>
                            <div>We will send you the 25$ Amazon Gift Card code <br/>    within 24 hours after we get short
                                review from you.
                            </div>
                        </div>
                        <div className={st.listItem}>
                            <div className={st.circle}><img src={gift} alt="gift"/></div>
                            <div>As a result, you will receive
                                our Product Free!
                            </div>
                        </div>
                    </div>
                </div>
                <button className={`buttonBlack`}>Get offer</button>


            </div>
            <div className={s.imagesBlock}>
                <div className=''><img src={picture_giveaway_color} alt=""/></div>
                {/*<div className={s.facebook_post}><img src={facebook_post} alt="facebook_post"/></div>*/}
                {/*<div className={s.press_here_block}><img src={press_here_block} alt="press_here_block"/></div>*/}
            </div>
        </div>
    )
}
export default FifthPage;