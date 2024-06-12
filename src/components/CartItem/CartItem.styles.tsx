import { Box, IconButton, Stack, styled } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { Link } from 'react-router-dom';

export const CartItemWrapper = styled(Box)(({ theme }) => ({
  boxSizing: 'border-box',
  // maxWidth: '756px',
  border: '1px solid',
  borderRadius: '16px',
  background: theme.palette.white.main,
}));

export const ContentContainer = styled(Stack)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: 'auto',
  [theme.breakpoints.up('xs')]: {
    margin: '16px',
  },
  [theme.breakpoints.up('sm')]: {
    margin: '24px',
  },
}));

export const ContainerLeftSide = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  [theme.breakpoints.up('xs')]: {
    marginBottom: '16px',
  },
}));

export const ContainerRightSide = styled(Stack)(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

export const DeleteButton = styled(IconButton)({
  width: '16px',
  height: '16px',
});

export const DeleteIcon = styled(ClearIcon)(({ theme }) => ({
  color: theme.palette.primary.main,

  '&:hover': {
    color: theme.palette.secondary.main,
  },

  transition: 'all 300ms',
}));

export const ProductImage = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '80px',
  height: '80px',
});

export const Image = styled('img')({
  width: 'auto',
  height: '66px',
});

export const ProductName = styled(Link)(({ theme }) => ({
  fontFamily: 'Mont',
  fontSize: '14px',
  textDecoration: 'none',

  '&:visited': {
    color: theme.palette.primary.main,
  },

  [theme.breakpoints.up('xs')]: {
    maxWidth: '128px',
  },
  [theme.breakpoints.up('sm')]: {
    maxWidth: '176px',
  },
  [theme.breakpoints.up('sm')]: {
    maxWidth: '336px',
  },
}));

export const ProductQuantity = styled(Box)({
  display: 'flex',
  boxSizing: 'border-box',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '96px',
  height: '32px',
});

export const IconButtonQuantityPlus = styled(IconButton)({
  padding: 0,
  backgroundImage: `url(${'img/slider-button-default-plus.svg'})`,
  width: '32px',
  height: '32px',
});

export const IconButtonQuantityMinus = styled(IconButton)(() => ({
  padding: 0,
  backgroundImage: `url(${'img/slider-button-disabled-minus.svg'})`,
  width: '32px',
  height: '32px',

  '&:focus': {
    backgroundImage: `url(${'img/slider-button-focus-minus.svg'})`,
  },
}));
