import React from 'react';
import Arrow from './styles/Arrows.styled';

export default function Arrows({ numPicture, ordPicture, handleClickArrowUp, handleClickArrowDown }) {
  if(numPicture==1){
    return
  }else{
    return(
      <>
        <Arrow  id="arrowDown" onClick={handleClickArrowDown} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 80" fill="none">
            <path d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z" fill="white"/>
        </Arrow>

        <Arrow id="arrowUp" onClick={handleClickArrowUp} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 80" fill="none">
          <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" fill="white"/>
        </Arrow>

        <span id='numerotation'>{ordPicture}/{numPicture}</span>
      </>
    )

  }
}
