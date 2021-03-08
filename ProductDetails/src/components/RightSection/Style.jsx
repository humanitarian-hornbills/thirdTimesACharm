/* eslint-disable import/extensions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import { SelectedStyled } from '../../elements/RightSection/BottomSection.element.jsx';
// eslint-disable-next-line react/prop-types
const Style = ({
  style, getSelectedStyle, selectedStyleId, getClicked, getLikeClicked,
}) => {
  const thumbnailUrl = style.photos[0].thumbnail_url;

  const onHandleClick = () => {
    getSelectedStyle(style.style_id);
    getClicked(true);
    getLikeClicked(true);
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
