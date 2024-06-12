import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  useMediaQuery,
  styled,
  Grid,
} from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { Product } from '../../types';
import { ProductCard } from '../ProductCard/ProductCard';
import { useTheme } from '@mui/material/styles';
import { customBreakpoints } from '../../theme/breakpoints.config';
import { customTypography } from '../../theme/typography.config';
import { CustomGrid } from '../CustomGrid';

type Props = {
  title: string;
  products: Product[];
};

export const ProductSliderFabric: React.FC<Props> = ({ title, products }) => {
  const [startIndex, setStartIndex] = useState(0);
  let productsPerRow = 4;
  const { sm, md, lg } = customBreakpoints.values;
  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up(lg));
  const isLaptop = useMediaQuery(theme.breakpoints.between(md, lg));
  const isTablet = useMediaQuery(theme.breakpoints.between(sm, md));
  const isMobile = useMediaQuery(theme.breakpoints.down(sm));

  switch (true) {
    case isDesktop:
      productsPerRow = 4;
      break;
    case isLaptop:
      productsPerRow = 3;
      break;
    case isTablet:
      productsPerRow = 2;
      break;
    case isMobile:
      productsPerRow = 1;
      break;
  }

  const handleClickPrev = () => {
    setStartIndex(Math.max(startIndex - 1, 0));
  };

  const handleClickNext = () => {
    setStartIndex(Math.min(startIndex + 1, products.length - productsPerRow));
  };

  const GridStyled = styled(Grid)({
    '&.MuiGrid-root': {
      flexBasis: 'auto',
    },
  });

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="h2" gutterBottom sx={customTypography.h2}>
          {title}
        </Typography>

        <Box>
          <Button onClick={handleClickPrev} disabled={startIndex === 0}>
            <ArrowBack />
          </Button>

          <Button
            onClick={handleClickNext}
            disabled={startIndex + productsPerRow >= products.length}
          >
            <ArrowForward />
          </Button>
        </Box>
      </Box>

      <Box display={'flex'} justifyContent={'center'}>
        <CustomGrid>
          {products
            .slice(startIndex, startIndex + productsPerRow)
            .map((product: Product) => (
              <GridStyled item xs={1} md={1} key={product.id}>
                <ProductCard product={product} key={product.id}></ProductCard>
              </GridStyled>
            ))}
        </CustomGrid>
      </Box>
    </Box>
  );
};
