import React from 'react';
import { Wrapper } from '../why_norlight/why_norlight_styled';
import { Cards, Why_Norlight } from './popular.styled';
import BackArrowIcon from '../icons/src/Back.icon';
import Basket from '../icons/src/Basket.icon';
import ceil from './assets/ceil.png'

function Popular(props) {
    return (
        <Wrapper>
            <Why_Norlight>
                <div className='title_back'>
                    <div><span className='text_settings'>Популярные товары</span></div>

                    <div className='backward'> <span className='about_company'>Все товары<span className='arrow'><BackArrowIcon /></span></span> </div>
                </div>

            </Why_Norlight>


            <Cards>
                <div className='card'>
                    <div className='img_wrapper'>
                        <div className='img_box'>
                            <img className='img' src={ceil} alt="ceil" />
                        </div>
                    </div>

                    {/* <button className='like'><LikeIcon/></button> */}

                    <span>Встраиваемый <br /> светильник Novotech</span>

                    <div className='price_basket'>
                        <div className='priceses'>
                            <span className='previous_price'><del>6 990₽</del></span>
                            <span className='price'>7 000₽</span>

                        </div>

                        <button><Basket /></button>
                    </div>
                </div>

                <div className='card'>
                    <div className='img_wrapper'>
                        <div className='img_box'>
                            <img className='img' src={ceil} alt="ceil" />
                        </div>
                    </div>

                    {/* <button className='like'><LikeIcon/></button> */}

                    <span>Встраиваемый <br /> светильник Novotech</span>

                    <div className='price_basket'>
                        <div className='priceses'>
                            <span className='previous_price'><del>6 990₽</del></span>
                            <span className='price'>7 000₽</span>

                        </div>

                        <button><Basket /></button>
                    </div>
                </div>

                <div className='card'>
                    <div className='img_wrapper'>
                        <div className='img_box'>
                            <img className='img' src={ceil} alt="ceil" />
                        </div>
                    </div>

                    {/* <button className='like'><LikeIcon/></button> */}

                    <span>Встраиваемый <br /> светильник Novotech</span>

                    <div className='price_basket'>
                        <div className='priceses'>
                            <span className='previous_price'><del>6 990₽</del></span>
                            <span className='price'>7 000₽</span>

                        </div>

                        <button><Basket /></button>
                    </div>
                </div>


                <div className='card'>
                    <div className='img_wrapper'>
                        <div className='img_box'>
                            <img className='img' src={ceil} alt="ceil" />
                        </div>
                    </div>

                    {/* <button className='like'><LikeIcon/></button> */}

                    <span>Встраиваемый <br /> светильник Novotech</span>

                    <div className='price_basket'>
                        <div className='priceses'>
                            <span className='previous_price'><del>6 990₽</del></span>
                            <span className='price'>7 000₽</span>

                        </div>

                        <button><Basket /></button>
                    </div>
                </div>


                <div className='card'>
                    <div className='img_wrapper'>
                        <div className='img_box'>
                            <img className='img' src={ceil} alt="ceil" />
                        </div>
                    </div>

                    {/* <button className='like'><LikeIcon/></button> */}

                    <span>Встраиваемый <br /> светильник Novotech</span>

                    <div className='price_basket'>
                        <div className='priceses'>
                            <span className='previous_price'><del>6 990₽</del></span>
                            <span className='price'>7 000₽</span>

                        </div>

                        <button><Basket /></button>
                    </div>
                </div>

                <div className='card'>
                    <div className='img_wrapper'>
                        <div className='img_box'>
                            <img className='img' src={ceil} alt="ceil" />
                        </div>
                    </div>

                    {/* <button className='like'><LikeIcon/></button> */}

                    <span>Встраиваемый <br /> светильник Novotech</span>

                    <div className='price_basket'>
                        <div className='priceses'>
                            <span className='previous_price'><del>6 990₽</del></span>
                            <span className='price'>7 000₽</span>

                        </div>

                        <button><Basket /></button>
                    </div>
                </div>


                <div className='card'>
                    <div className='img_wrapper'>
                        <div className='img_box'>
                            <img className='img' src={ceil} alt="ceil" />
                        </div>
                    </div>

                    {/* <button className='like'><LikeIcon/></button> */}

                    <span>Встраиваемый <br /> светильник Novotech</span>

                    <div className='price_basket'>
                        <div className='priceses'>
                            <span className='previous_price'><del>6 990₽</del></span>
                            <span className='price'>7 000₽</span>

                        </div>

                        <button><Basket /></button>
                    </div>
                </div>


                <div className='card'>
                    <div className='img_wrapper'>
                        <div className='img_box'>
                            <img className='img' src={ceil} alt="ceil" />
                        </div>
                    </div>

                    {/* <button className='like'><LikeIcon/></button> */}

                    <span>Встраиваемый <br /> светильник Novotech</span>

                    <div className='price_basket'>
                        <div className='priceses'>
                            <span className='previous_price'><del>6 990₽</del></span>
                            <span className='price'>7 000₽</span>

                        </div>
                        <button><Basket /></button>
                    </div>
                </div>
            </Cards>
        </Wrapper>
    );
}

export default Popular;