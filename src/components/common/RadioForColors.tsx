'use client';

import { CommonColor } from './CartProvider';

interface RadioGroupProps {
  colors: CommonColor[];
  onSelectColor: (color: CommonColor) => void;
  selectedColor: CommonColor | null;
  labelText?: string;
  selectedColorName?: string;
}

export default function RadioGroup({
  colors,
  onSelectColor,
  selectedColor,
  labelText = 'Color -',
  selectedColorName = selectedColor ? selectedColor.name : '',
}: RadioGroupProps) {
  return (
    <div className="flex flex-col gap-4 pt-4">
      <p className="text-xl font-medium mr-auto">
        {labelText} {selectedColorName}
      </p>
      <div className="flex gap-4">
        {colors?.map((color) => (
          <div
            key={color.id}
            className={`flex items-center cursor-pointer ${
              selectedColor && selectedColor.id === color.id
                ? 'border-2 border-border rounded-md p-[2px]'
                : ''
            }`}
            onClick={() => {
              onSelectColor(color);
            }}
          >
            <span
              style={{ backgroundColor: color.hexCode }}
              className="w-8 h-8 border border-border rounded-md cursor-pointer mr-auto"
            ></span>
          </div>
        ))}
      </div>
    </div>
  );
}
