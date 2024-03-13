import React from 'react';

type PropType = {
  selected: boolean;
  image: string;
  onClick: () => void;
};

export default function Thumb({ selected, image, onClick }: PropType) {
  return (
    <div
      className={'embla-thumbs__slide'.concat(
        selected ? ' embla-thumbs__slide--selected' : '',
      )}
    >
      <button
        onClick={onClick}
        type="button"
        className="embla-thumbs__slide__button"
      >
        <img
          src={image}
          alt={`Thumbnail`}
          className="embla-thumbs__slide__image"
        />
      </button>
    </div>
  );
}
