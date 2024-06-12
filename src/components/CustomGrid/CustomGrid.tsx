import { Box, useMediaQuery } from '@mui/material';
import { ReactNode } from 'react';
import { customBreakpoints } from '../../theme/breakpoints.config';
import { useTheme } from '@mui/material/styles';

interface Columns {
  DT: number;
  LT: number;
  TB: number;
}

type Props = {
  children: ReactNode;
  columns?: Columns;
};

export const CustomGrid: React.FC<Props> = ({
  children,
  columns = {
    DT: 4,
    LT: 3,
    TB: 2,
  },
}) => {
  const { sm, md, lg } = customBreakpoints.values;
  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up(lg)); // 1200px and up
  const isLaptop = useMediaQuery(theme.breakpoints.between(md, lg)); // 640px to 1199px
  const isTablet = useMediaQuery(theme.breakpoints.between(sm, md)); // 640px to 1199px
  const isMobile = useMediaQuery(theme.breakpoints.down(sm)); // up to 639p

  interface GridProps {
    gridTemplateColumns: string;
  }

  const getGridProps = (): GridProps => {
    switch (true) {
      case isDesktop:
        return {
          gridTemplateColumns: `repeat(${columns.DT}, 1fr)`,
        };
      case isLaptop:
        return {
          gridTemplateColumns: `repeat(${columns.LT}, 1fr)`,
        };
      case isTablet:
        return {
          gridTemplateColumns: `repeat(${columns.TB}, 1fr)`,
        };
      case isMobile:
        return {
          gridTemplateColumns: `1fr`,
        };
      default:
        return {
          gridTemplateColumns: `repeat(${columns.DT}, 1fr)`,
        };
    }
  };

  return (
    <Box
      sx={{
        width: 0,
        display: 'grid',
        justifyContent: 'center',
        placeItems: 'center',
        columnGap: '16px',
        rowGap: '40px',
      }}
      {...getGridProps()}
    >
      {children}
    </Box>
  );
};
