import React from 'react';
import { Why_Norlight } from '../why_norlight/why_norlight_styled';
import { AddWrapper, Wrapper } from './verified_brands.styled';
import BackArrowIcon from '../icons/src/Back.icon';
import { reklama1, reklama2, reklama3 } from './assets';

function Verified_brands(props) {
    return (
        <Wrapper>
            
            <Why_Norlight>
                <div className='title_back'>
                    <div><span className='text_settings'>Только проверенные бренды</span></div>

                    <div className='backward'> <span className='about_company'>Все товары<span className='arrow'><BackArrowIcon/></span> </span> </div>
                </div>

                <AddWrapper>
                    <div className='card'>
                        <img className="img" src={reklama1 } alt="reklama"  />
                    </div>

                    <div className='card'>
                        <img className="img" src={reklama2} alt="reklama" />
                    </div>

                    <div className='card'>
                        <img className="img" src={reklama3} alt="reklama" />
                    </div>

                    <div className='card'>
                        <img className="img" src={reklama1} alt="reklama" />
                    </div>
                    
                </AddWrapper>

            </Why_Norlight>
        </Wrapper>
    );
}

export default Verified_brands;