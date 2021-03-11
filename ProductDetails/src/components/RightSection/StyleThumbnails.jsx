/* eslint-disable import/extensions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import { SelectedStyled } from '../../elements/RightSection/BottomSection.element.jsx';
// eslint-disable-next-line react/prop-types
const Style = ({
  style,
  getSelectedStyle,
  selectedStyleId,
  setBagClicked,
  index,
  getMainCurrent,
  setLikeClicked,
  setErrorMesShowed,
  setSizeQuantitySelected,
  getClickInteraction,
}) => {
  const thumbnailUrl = style.photos[0].thumbnail_url;

  const onHandleClick = () => {
    getSelectedStyle(style.style_id);
    setBagClicked(false);
    getMainCurrent(index);
    setLikeClicked(false);
    setErrorMesShowed(false);
    setSizeQuantitySelected(0);
    getClickInteraction('SelectedStyled');
  };

  return (
    <>
      <SelectedStyled
        src={thumbnailUrl}
        onClick={onHandleClick}
        curSelected={selectedStyleId === style.style_id}
      />
      {/* {
        selectedStyleId === style.style_id && <CheckMark />
      } */}
    </>
  );
};
export default Style;
