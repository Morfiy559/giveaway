import React from "react";
import s from './FirstPage.module.scss';
import bigTreatment from '../../assets/img/bigTreatment.png';
import arrowUp from '../../assets/img/arrowUp.svg';
import arrowDown from '../../assets/img/arrowDown.svg';
import treatment from '../../assets/img/treatment.png';
import treatment2 from '../../assets/img/treatment2.png';
import treatment3 from '../../assets/img/treatment3.png';

const FirstPage = () => {
    return (
        <div>
            <div className={s.Preview}>
                <div className={s.imageBlock}>
                    <div className={s.carousel}>
                        <img src={arrowUp} alt=""/>
                        <div className={s.images}>
                            <div className={`${s.imageWrapper} ${s.activeImageWrapper}`}><img src={treatment} alt=""/></div>
                            <div className={s.imageWrapper}><img src={treatment2} alt=""/></div>
                            <div className={s.imageWrapper}><img src={treatment3} alt=""/></div>
                        </div>
                        <img src={arrowDown} alt=""/>
                    </div>
                    <img className={s.image} src={bigTreatment} alt="bigTreatment"/>
                </div>
                <div>

                </div>
            </div>
            <div>

            </div>
        </div>
    )
}
export default FirstPage;