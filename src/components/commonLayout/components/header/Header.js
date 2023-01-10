import React from 'react';
import './header.css';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="header-container">
      <div className="header-content">
        <div className="header-logo"></div>
        <div className="header-nav">
          <p>Our Service</p>
          <p>Why Us</p>
          <p>Testimonial</p>
          <p>FAQ</p>
        </div>
        <>
          <HamburgerIcon
            onClick={onOpen}
            w="24px"
            h="24px"
            className="drawer-button"
          />
          <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>
                <p className="drawer-nav__head">BCR</p>
              </DrawerHeader>
              <DrawerBody>
                <div className="drawer-nav__body">
                  <p>Our Service</p>
                  <p>Why Us</p>
                  <p>Testimonial</p>
                  <p>FAQ</p>
                </div>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      </div>
    </div>
  );
};

export default Header;
