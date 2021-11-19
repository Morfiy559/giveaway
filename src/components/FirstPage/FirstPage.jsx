import React from "react";
import s from './FirstPage.module.scss';
import bigTreatment from '../../assets/img/bigTreatment.png';
import arrowUp from '../../assets/img/arrowUp.svg';
import arrowDown from '../../assets/img/arrowDown.svg';
import treatment from '../../assets/img/treatment.png';
import treatment2 from '../../assets/img/treatment2.png';
import treatment3 from '../../assets/img/treatment3.png';
import star from '../../assets/img/star.svg';
import amazonPrime from '../../assets/img/amazonPrime.svg';

const FirstPage = () => {

    const stars = [];
    for(let i=0;i<5;i++){
        stars.push(<img src={star} alt={'star'}/>)
    }

    return (
        <div>
            <div className={s.Preview}>
                <div className={s.imageBlock}>
                    <div className={s.carousel}>
                        <img className={s.arrows} src={arrowUp} alt=""/>
                        <div className={s.images}>
                            <div className={`${s.imageWrapper} ${s.activeImageWrapper}`}><img src={treatment} alt=""/>
                            </div>
                            <div className={s.imageWrapper}><img src={treatment2} alt=""/></div>
                            <div className={s.imageWrapper}><img src={treatment3} alt=""/></div>
                        </div>
                        <img className={s.arrows} src={arrowDown} alt=""/>
                    </div>
                    <img className={s.image} src={bigTreatment} alt="bigTreatment"/>
                </div>
                <div className={s.infoBlock}>
                    <div className={s.starsBlock}>
                        <div>BEST SELLER</div>
                        <div>{stars} <span>(1731 reviews)</span></div>
                    </div>
                    <div className={s.title}>Acne Treatment Cystic Acne heals, repairs & renews</div>
                    <div className={s.descriptionTitle}>Description:</div>
                    <div className={s.description}>Addictively refreshing gel-cream leaves skin
                        plump, dewy, glowing.</div>
                    <div className={s.itemsLeft}>items left: 12</div>
                    <div className={s.line}/>
                    <div className={s.price}><span>us$25.89</span> $0.00 FREE</div>
                    <button>Select</button>
                    <div className={s.logoAmazonPrime}><img src={amazonPrime} alt="amazonPrime"/></div>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}
export default FirstPage;