import React from 'react';
import { Cards, Why_Norlight, Wrapper } from './why_norlight_styled';
import BackArrowIcon from '../icons/src/Back.icon';
import Big_Assorti from '../icons/src/Big_Assorti.icon';
import DostavkaIcon from '../icons/src/Dostavka.icon';
import MoneyIcon from '../icons/src/Money.icon';
import SvgComponent from '../icons/src/Dostavka.icon';

function Why_norlight(props) {
    return (
        <Wrapper>
            <Why_Norlight>
                <div className='title_back'>
                    <div><span className='text_settings'>Почему NORNLIGHT?</span></div>

                    <div className='backward'> <span className='about_company'>О компании<span className='arrow'><BackArrowIcon /></span></span> </div>
                </div>
            </Why_Norlight>

            <Cards>
                <div className='big-assorti'>
                    <div className='centralize_box'>
                        <div className='svg_box'>
                        <Big_Assorti />
                        </div>
                        <div className='textes_box'>
                            <div>
                            <b>Большой <br /> ассортимент</b>
                            </div>
                            <div>
                            <p>Более 1000 товаров</p>
                            </div>
                        </div>

                    </div>

                </div>

                <div className='big-assorti'>
                    <div className='centralize_box'>
                        <div className='svg_box'>
                            <Big_Assorti />
                        </div>
                        <div className='textes_box'>
                            <div>
                                <b>Большой <br /> ассортимент</b>
                            </div>
                            <div>
                                <p>Более 1000 товаров</p>
                            </div>
                        </div>

                    </div>

                </div>

                <div className='big-assorti'>
                    <div className='centralize_box'>
                        <div className='svg_box'>
                            <Big_Assorti />
                        </div>
                        <div className='textes_box'>
                            <div>
                                <b>Большой <br /> ассортимент</b>
                            </div>
                            <div>
                                <p>Более 1000 товаров</p>
                            </div>
                        </div>

                    </div>

                </div>

                <div className='big-assorti'>
                    <div className='centralize_box'>
                        <div className='svg_box'>
                            <Big_Assorti />
                        </div>
                        <div className='textes_box'>
                            <div>
                                <b>Большой <br /> ассортимент</b>
                            </div>
                            <div>
                                <p>Более 1000 товаров</p>
                            </div>
                        </div>

                    </div>

                </div>

            </Cards>

        </Wrapper>
    );
}

export default Why_norlight;