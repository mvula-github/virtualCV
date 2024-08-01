/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, {useRef} from 'react'
import "./Work.css"
import { WORK_XP } from '../../utilities/data'
import WorkCard from './WorkCard/WorkCard'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Work = () => {

    const sliderRef = useRef(0);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll:1,
        arrows:false,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow:1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

  return (
    <section className='xp-container'>
        <h5>Work Experience</h5>

        <div className='xp-content'>
           <Slider ref={sliderRef} {...settings}>
                {WORK_XP.map((item) => (
                    <WorkCard key={item.title} details={item} />
                ))}
            </Slider>
        </div>

    </section>
  );
};

export default Work;