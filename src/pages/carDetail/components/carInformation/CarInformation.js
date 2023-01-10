import React from 'react';
import './carInformation.css';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import carImage from '../../../../assets/images/avanza_car.png';
import { PeopleIcon } from './Dummy';

const CarInformation = () => {
  return (
    <div className="car-information__container">
      <div className="car-information__content">
        <div className="car-content__header">Tentang Paket</div>
        <div className="car-content__desc">
          <div className="car-desc__header">Include</div>
          <div className="car-desc__info">
            <ul>
              <li>
                Apa saja yang termasuk dalam paket misal durasi max 12 jam
              </li>
              <li>Sudah termasuk bensin selama 12 jam</li>
              <li>Sudah termasuk Tiket Wisata</li>
              <li>Sudah termasuk pajak</li>
            </ul>
          </div>
        </div>
        <div className="car-content__desc">
          <div className="car-desc__header">Exclude</div>
          <div className="car-desc__info">
            <ul>
              <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
              <li>
                Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                20.000/jam
              </li>
              <li>Tidak termasuk akomodasi penginapan</li>
            </ul>
          </div>
        </div>
        <Accordion allowToggle>
          <AccordionItem border="none" className="car-content__desc">
            <AccordionButton padding="0" className="car-accordion__button">
              <div className="car-desc__header">
                Refund, Reschedule, Overtime
              </div>
              <AccordionIcon w="24px" h="24px" />
            </AccordionButton>
            <AccordionPanel pb={4} padding="0">
              <div className="car-desc__info">
                <ul>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>
                    Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                    20.000/jam
                  </li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                </ul>
              </div>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="car-information__card">
        <img src={carImage} alt="innova-car" />
        <div className="car-card__header">
          <p>Innova</p>
          <div className="car-card__people">
            <PeopleIcon /> <p>6 - 8 orang</p>
          </div>
        </div>
        <div className="car-card__price">
          <p>Total</p>
          <p>Rp 500.000</p>
        </div>
      </div>
    </div>
  );
};

export default CarInformation;
