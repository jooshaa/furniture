import React from 'react';
import { Why_Norlight, Wrapper } from '../verified_brands/verified_brands.styled';
import BackArrowIcon from '../icons/src/Back.icon';
import { Home1, Home2, Home3 } from './assets';
import { Cards } from './Houses.styled';
import { TopRightArrow } from '../icons';


function Houses(props) {
    return (
        <Wrapper>
            <Why_Norlight>
                <div className='title_back'>
                    <div><span className='text_settings'>Блог</span></div>

                    <div className='backward'> <span className='about_company'>Перейти в блог<span className='arrow'><BackArrowIcon /></span> </span> </div>
                </div>
            </Why_Norlight>

            <Cards>
                <div className='card'>
                    <div className='img_box'>
                        <img className='img' src={Home2} alt="" />

                    </div>

                    <div className='text_icon_box'>
                        <span className='text'>Как правильно освещать дом  <br /> снаружи?</span>
                        <span><TopRightArrow /></span>
                    </div>

                    <span className='data'>01.01.2024</span>

                     <hr  className='hr'/>
                </div>

                <div className='card'>
                    <div className='img_box'>
                        <img className='img' src={Home1} alt="" />

                    </div>

                    <div className='text_icon_box'>
                        <span className='text'>Как правильно освещать дом  <br /> снаружи?</span>
                        <span><TopRightArrow /></span>
                    </div>

                    <span className='data'>01.01.2024</span>

                    <hr className='hr' />
                </div>

                <div className='card'>
                    <div className='img_box'>
                        <img className='img' src={Home3} alt="" />

                    </div>

                    <div className='text_icon_box'>
                        <span className='text'>Как правильно освещать дом  <br /> снаружи?</span>
                        <span><TopRightArrow /></span>
                    </div>

                    <span className='data'>01.01.2024</span>

                    <hr className='hr' />

                </div>

                
                
            </Cards>


            
        </Wrapper>
    );
}

export default Houses;