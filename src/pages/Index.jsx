import React, { useState } from "react";
import { Box, Heading, Text, Image, Grid, Button, Stack, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Badge } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "This is a sample product",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwMXxlbnwwfHx8fDE3MTI2NDE4MDV8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Product 2",
    description: "This is another sample product",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwMnxlbnwwfHx8fDE3MTI2NDE4MDV8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "Product 3",
    description: "This is a third sample product",
    price: 32.99,
    image: "https://images.unsplash.com/photo-1542319630-55fb7f7c944a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwM3xlbnwwfHx8fDE3MTI2NDE4MDV8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  const [cart, setCart] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <Box>
      <Box bg="gray.100" p={4} display="flex" justifyContent="space-between" alignItems="center">
        <Heading>My Estore</Heading>
        <Button leftIcon={<FaShoppingCart />} onClick={onOpen}>
          Cart ({cart.length})
        </Button>
      </Box>

      <Grid templateColumns="repeat(3, 1fr)" gap={6} p={4}>
        {products.map((product) => (
          <Box key={product.id} borderWidth={1} borderRadius="lg" overflow="hidden">
            <Image src={product.image} alt={product.name} />
            <Box p={4}>
              <Heading as="h3" size="md" mb={2}>
                {product.name}
              </Heading>
              <Text>{product.description}</Text>
              <Text fontWeight="bold" mt={2}>
                ${product.price}
              </Text>
              <Button mt={4} colorScheme="blue" onClick={() => addToCart(product)}>
                Add to Cart
              </Button>
            </Box>
          </Box>
        ))}
      </Grid>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Shopping Cart</DrawerHeader>
          <DrawerBody>
            <Stack spacing={4}>
              {cart.map((item) => (
                <Box key={item.id} display="flex" alignItems="center">
                  <Image src={item.image} alt={item.name} boxSize="50px" mr={4} />
                  <Box>
                    <Text fontWeight="bold">{item.name}</Text>
                    <Text>${item.price}</Text>
                  </Box>
                  <Badge ml="auto" colorScheme="red" cursor="pointer" onClick={() => removeFromCart(item.id)}>
                    Remove
                  </Badge>
                </Box>
              ))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Index;
