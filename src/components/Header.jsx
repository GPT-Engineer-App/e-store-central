import React from "react";
import { Box, Heading, Spacer, Menu, MenuButton, MenuList, MenuItem, Button, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Input } from "@chakra-ui/react";

const Header = () => {
  const [catalogueLink, setCatalogueLink] = React.useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="gray.100" px={4} py={2} display="flex" alignItems="center">
      <Heading size="md">My Estore</Heading>
      <Spacer />
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Menu
        </MenuButton>
        <MenuList>
          <MenuItem>Menu Item 1</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} ml={4}>
          Catalogue
        </MenuButton>
        <MenuList>
          <MenuItem onClick={onOpen}>Enter Catalogue Link</MenuItem>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} ml={4}>
          Contact Us
        </MenuButton>
        <MenuList>
          <MenuItem>Contact Option 1</MenuItem>
          <MenuItem>Contact Option 2</MenuItem>
        </MenuList>
      </Menu>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Enter Catalogue Link</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input placeholder="Paste link here" value={catalogueLink} onChange={(e) => setCatalogueLink(e.target.value)} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Header;
