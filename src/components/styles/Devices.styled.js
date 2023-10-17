import styled from "styled-components";

// ---------- Size Screen ----------

export const device = {
  xs: `(max-width):768px`,
  sm: `(min-width: 768px)`,
  md: `(min-width: 992px)`,
  lg: `(min-width: 1200px)`
};

// ---------- Grid ----------------
const getGridTemplate = (grid) => {
  if (!grid) return;
  const nbrCol = grid.nbrCol;
  const gapX = grid.gapX;
  const gapY = grid.gapY;
  return `
   grid-template-columns:repeat(${nbrCol}, 1fr);
   column-gap: ${gapX};
   row-gap: ${gapY};
  `;
};

const getHeightCol = (height) => {
  if (!height) return;
  return `
    height:${height}px;
  `;
};


export const Container = styled.div`
  display: grid;
  ${({ $xs }) => $xs && getGridTemplate($xs)};

  @media only screen and (${device.sm}){
    ${({ $sm }) => $sm && getGridTemplate($sm)};
  }

  @media only screen and (${device.md}){
    ${({ $md }) => $md && getGridTemplate($md)};
  }

  @media only screen and (${device.lg}){
    ${({ $lg }) => $lg && getGridTemplate($lg)};
  }

`;

export const Column = styled.div`
    ${({ $xs }) => getHeightCol($xs)};

    @media only screen and (${device.sm}){
      ${({ $sm }) => $sm && getHeightCol($sm)};
    }

    @media only screen and (${device.md}){
      ${({ $md }) => $md && getHeightCol($md)};
    }

    @media only screen and (${device.lg}){
      ${({ $lg }) => $lg && getHeightCol($lg)};
    }
`;
