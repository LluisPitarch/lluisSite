import React from 'react';
import styled from 'styled-components';

const ColorIcon = styled.path`
  fill: #e58f46;
`;

const ColorBg = styled.path`
  fill: #232323;
`;

export const github = (
  <svg viewBox="0 0 128 128">
    <ColorIcon
      className="none"
      d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></ColorIcon>
    <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm-.743-.55M28.93 94.535c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm-.575-.618M31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm0 0M34.573 101.373c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm0 0M39.073 103.324c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm0 0M44.016 103.685c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm0 0M48.614 102.903c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
  </svg>
);

export const whiteGitHub = (
  <svg viewBox="0 0 128 128">
    <path
      className="none"
      style={{ fill: 'white' }}
      d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path>
    <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm-.743-.55M28.93 94.535c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm-.575-.618M31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm0 0M34.573 101.373c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm0 0M39.073 103.324c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm0 0M44.016 103.685c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm0 0M48.614 102.903c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
  </svg>
);

export const linkedin = (
  <svg viewBox="0 0 128 128">
    <ColorIcon
      className="cls-1"
      d="M116,3H12a8.91,8.91,0,0,0-9,8.8V116.22A8.91,8.91,0,0,0,12,125H116a8.93,8.93,0,0,0,9-8.81V11.77A8.93,8.93,0,0,0,116,3Z"></ColorIcon>
    <ColorBg
      className="cls-2"
      d="M21.06,48.73H39.17V107H21.06Zm9.06-29a10.5,10.5,0,1,1-10.5,10.49,10.5,10.5,0,0,1,10.5-10.49"></ColorBg>
    <ColorBg
      className="cls-2"
      d="M50.53,48.73H67.89v8h.24c2.42-4.58,8.32-9.41,17.13-9.41C103.6,47.28,107,59.35,107,75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87,7.36-10.87,15V107H50.53Z"></ColorBg>
  </svg>
);

export const whiteLinkedin = (
  <svg viewBox="0 0 128 128">
    <path
      style={{ fill: 'white' }}
      className="cls-1"
      d="M116,3H12a8.91,8.91,0,0,0-9,8.8V116.22A8.91,8.91,0,0,0,12,125H116a8.93,8.93,0,0,0,9-8.81V11.77A8.93,8.93,0,0,0,116,3Z"></path>
    <path
      className="cls-2"
      d="M21.06,48.73H39.17V107H21.06Zm9.06-29a10.5,10.5,0,1,1-10.5,10.49,10.5,10.5,0,0,1,10.5-10.49"></path>
    <path
      className="cls-2"
      d="M50.53,48.73H67.89v8h.24c2.42-4.58,8.32-9.41,17.13-9.41C103.6,47.28,107,59.35,107,75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87,7.36-10.87,15V107H50.53Z"></path>
  </svg>
);

export const burgerIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 84 68">
    <ColorIcon
      className="cls-1"
      d="M6,0A6,6,0,0,0,6,12H78A6,6,0,0,0,78,0ZM6,28A6,6,0,0,0,6,40H78a6,6,0,0,0,0-12ZM6,56A6,6,0,0,0,6,68H78a6,6,0,0,0,0-12Z"
    />
  </svg>
);

export const closeIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74.03 74.05">
    <ColorIcon
      className="cls-1"
      d="M45.2,37,72.33,9.88A5.78,5.78,0,1,0,64.15,1.7L37,28.83,9.88,1.7A5.78,5.78,0,0,0,1.7,9.88L28.83,37,1.7,64.15a5.81,5.81,0,0,0,4.05,9.9A5.48,5.48,0,0,0,9.8,72.33L37,45.2,64.15,72.33a5.76,5.76,0,0,0,4,1.72,5.52,5.52,0,0,0,4.06-1.72,5.78,5.78,0,0,0,0-8.18Z"
    />
  </svg>
);

export const externalLink = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 438.536 438.536">
    <ColorIcon
      d="M414.41,24.123C398.333,8.042,378.963,0,356.315,0H82.228C59.58,0,40.21,8.042,24.126,24.123
		C8.045,40.207,0.003,59.576,0.003,82.225v274.084c0,22.647,8.042,42.018,24.123,58.102c16.084,16.084,35.454,24.126,58.102,24.126
		h274.084c22.648,0,42.018-8.042,58.095-24.126c16.084-16.084,24.126-35.454,24.126-58.102V82.225
		C438.532,59.576,430.49,40.204,414.41,24.123z M365.449,228.402c0,7.994-3.717,13.606-11.136,16.844
		c-2.471,0.951-4.859,1.427-7.139,1.427c-5.134,0-9.418-1.811-12.847-5.424l-41.11-41.112L140.764,352.599
		c-3.621,3.614-7.9,5.425-12.85,5.425c-4.952,0-9.235-1.811-12.851-5.425l-29.121-29.126c-3.617-3.61-5.426-7.901-5.426-12.847
		c0-4.944,1.809-9.229,5.426-12.843l152.462-152.464l-41.113-41.112c-5.902-5.52-7.233-12.178-3.999-19.985
		c3.234-7.421,8.852-11.136,16.846-11.136h137.037c4.948,0,9.232,1.81,12.854,5.428c3.613,3.614,5.421,7.898,5.421,12.847V228.402z"
    />
  </svg>
);
