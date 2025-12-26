import React from 'react';
import { BoxForCard, Catalog_back_box, CatalogDiv } from './Catalog.styled';
import BackArrowIcon from '../icons/src/Back.icon';
import ceil from './assets/ceil.png';
import lamp4 from './assets/lamp4.png';
import moder_lamp from './assets/modernlamp.png';
import svetilnik1 from './assets/svetilnik.png';
import svetilnik2 from './assets/svetilnik2.png';
import svetilnik3 from './assets/svetilnik3.png';



function Catalog(props) {
    return (
        <CatalogDiv>

            <Catalog_back_box>
                <div>
                    <span className='catalog_text'>Каталог</span>
                </div>
                <div>
                    <span className='all_catalog'>Весь каталог  <span className='arrow'> <BackArrowIcon /></span> </span>
                </div>
            </Catalog_back_box>

            <BoxForCard>
                <div className='card'>
                    <div className='name_price_box'>
                        <div>
                            <span>Люстры</span>
                        </div>
                        <div>
                            <span>От 540₽</span> <span className='arrow'> <BackArrowIcon/></span>
                        </div>
                    </div>

                    <div className='img_box'>
                        <img className="img" src={ceil} alt="ceil" />
                    </div>
                </div>
                
                <div className='card'>
                    <div className='name_price_box'>
                        <div>
                            <span>Светильники</span>
                        </div>
                        <div>
                            <span>От 540₽</span> <span className='arrow'> <BackArrowIcon /></span>
                        </div>
                    </div>

                    <div className='img_box'>
                        <img className="img" src={moder_lamp} alt="ceil" />
                    </div>
                </div>

                <div className='card'>
                    <div className='name_price_box'>
                        <div>
                            <span>Бра</span>
                        </div>
                        <div>
                            <span>От 540₽</span> <span className='arrow'> <BackArrowIcon /></span>
                        </div>
                    </div>

                    <div className='img_box'>
                        <img className="img" src={svetilnik1} alt="ceil" />
                    </div>
                </div>

                <div className='card'>
                    <div className='name_price_box'>
                        <div>
                            <span>Торшеры</span>
                        </div>
                        <div>
                            <span>От 540₽</span> <span className='arrow'> <BackArrowIcon /></span>
                        </div>
                    </div>

                    <div className='img_box'>
                        <img className="img" src={svetilnik2} alt="ceil" />
                    </div>
                </div>

                <div className='card'>
                    <div className='name_price_box'>
                        <div>
                            <span>Настольные лампы</span>
                        </div>
                        <div>
                            <span>От 540₽</span> <span className='arrow'> <BackArrowIcon /></span>
                        </div>
                    </div>

                    <div className='img_box'>
                        <img className="img" src={svetilnik3} alt="ceil" />
                    </div>
                </div>

                <div className='card'>
                    <div className='name_price_box'>
                        <div>
                            <span>Споты</span>
                        </div>
                        <div>
                            <span>Oт 540₽</span> <span className='arrow'> <BackArrowIcon /></span>
                        </div>
                    </div>

                    <div className='img_box'>
                        <img className="img" src={lamp4} alt="ceil" />
                    </div>
                </div>
            </BoxForCard>

            
            

            
        </CatalogDiv>

    );
}

export default Catalog;