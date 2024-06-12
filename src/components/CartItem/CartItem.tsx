import Container from '../Container/Container';
import {
  CartItemWrapper,
  ContainerLeftSide,
  ContainerRightSide,
  ContentContainer,
  DeleteIcon,
  IconButtonQuantityMinus,
  IconButtonQuantityPlus,
  Image,
  ProductImage,
  ProductName,
  ProductQuantity,
} from './CartItem.styles.tsx';
import { IconButton, Typography, styled } from '@mui/material';
import React from 'react';
import { ProductInCart } from '../../types/ProductInCart.ts';
import { Link } from 'react-router-dom';
import {
  changeQuantityOnOneProduct,
  deleteProductFromCart,
  getUserCart,
} from '../../utils/useFetchData.ts';
import { useCartContext } from '../../hooks/useCartContext.ts';

type Props = {
  currentPoduct: ProductInCart;
};

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.element.main,
  border: '1px solid {theme.palette.element.main}',
  borderRadius: '50%',
  ':hover, :focus': {
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
  },
}));

const CartItem: React.FC<Props> = ({ currentPoduct }) => {
  const { product, quantity, productId } = currentPoduct;
  const { setCart } = useCartContext();

  const handeleDelete = async () => {
    await deleteProductFromCart(product.id);
    setCart(await getUserCart());
  };

  const handleChangeQuantityMinus = async () => {
    const newQuantity = quantity - 1;

    if (newQuantity === 0 || newQuantity < 0) {
      await deleteProductFromCart(productId);
    } else {
      await changeQuantityOnOneProduct(productId, newQuantity);
    }

    setCart(await getUserCart());
  };

  const handleChangeQuantityPlus = async () => {
    const newQuantity = quantity + 1;
    await changeQuantityOnOneProduct(productId, newQuantity);

    setCart(await getUserCart());
  };

  return (
    <Container>
      <CartItemWrapper>
        <ContentContainer
          spacing={{ xs: 2, sm: 3, md: 4 }}
          direction={{ xs: 'column', sm: 'row' }}
        >
          <ContainerLeftSide
            spacing={{ xs: 2, sm: 3 }}
            direction={{ xs: 'row' }}
          >
            <StyledIconButton onClick={handeleDelete}>
              <DeleteIcon />
            </StyledIconButton>
            <Link to={`/${product.category}/${product.slug}`}>
              <ProductImage
                sx={{
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.1)',
                  },
                }}
              >
                <Image src={product.images[0]} />
              </ProductImage>
            </Link>

            <ProductName
              to={`/${product.category}/${product.slug}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Typography variant="body1">{product.name}</Typography>
            </ProductName>
          </ContainerLeftSide>

          <ContainerRightSide spacing={{ sm: 3 }} direction={{ xs: 'row' }}>
            <ProductQuantity>
              <IconButtonQuantityMinus onClick={handleChangeQuantityMinus} />
              <Typography variant="body1">{quantity}</Typography>
              <IconButtonQuantityPlus onClick={handleChangeQuantityPlus} />
            </ProductQuantity>

            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              {`${product.price}`}
            </Typography>
          </ContainerRightSide>
        </ContentContainer>
      </CartItemWrapper>
    </Container>
  );
};

export default CartItem;
