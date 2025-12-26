import React from 'react';
import { FooterWrapper } from './Footer.styled';

import PaymentLogos from '../../assets/payments.png';
import { Vk } from '../../components';

function Footer(props) {
    return (
        <FooterWrapper>
            <div className='container1'>
                <div className='column1'>
                    <div className='img_box'>
                        <img className='logo_img' src="/logo-foot.svg" alt="logo" />
                    </div>
                    <a className='tel' href="tel:88008904656">8 (800) 890-46-56</a>
                    <div>
                        <img src={PaymentLogos} alt="Payments" />

                    </div>
                    <a href="/">Политика конфидециальности</a>
                    <a href="/">Пользовательское соглашение</a>

                    <div className='social'>
                        <Vk />
                        <Vk />
                        <Vk />
                    </div>
                </div>

                <div className='column1'>
                    <div className='img_box'>
                        <h2>Покупателям</h2>
                    </div>
                    <div className='client'>
                        <span>O компании</span>
                        <span>Доставка и оплата</span>
                        <span>Возврат</span>
                        <span>Гарантии</span>
                        <span>Контакты</span>
                        <span>Блог</span>
                    </div>
                

                </div>

                <div className='column1'>
                    <div className='img_box'>
                        <h2>Товары</h2>
                    </div>
                    <div className='client'>
                        <span> Люстры</span>
                        <span>Доставка и оплата</span>
                        <span>Светильники</span>
                        <span>Бра</span>
                        <span>Торшеры</span>
                        <span>Комплектуюшие</span>
                    </div>
                </div>

                <div className='column1'>
                    <div className='client'>

                        <div></div>
                        <div></div>
                        <div></div>
                        <span> Споты</span>
                        <span>Трековые светильники</span>
                        <span>Уличные светильники</span>
                        <span>Технические светильники</span>
                        <span>Светодиодные ленты</span>
                    </div>
                </div>
            </div>
        </FooterWrapper>
    );
}

export default Footer;

{/* <div style={{ display: "flex", flexDirection: "column", maxWidth: "400px" }}>
    <img src='/logo-foot.svg' alt='Logo Footer' />
    <a href="tel:88008904656">8 (800) 890-46-56</a>

    <img src={PaymentLogos} alt="Payments" />

    <a href="/">Политика конфидециальности</a>
    <a href="/">Пользовательское соглашение</a>
    </div> */}