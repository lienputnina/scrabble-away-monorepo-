import type { FC } from 'react';

import { IconProps, DefaultPropValues } from '../types';

export const NotificationsInactive: FC<IconProps> = ({
  size = DefaultPropValues.SIZE,
  fill = DefaultPropValues.FILL,
}) => (
  <div style={{ width: size, height: size }}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 96 960 960">
      <path
        fill={fill}
        d="M160 856v-80h80V496q0-83 50-147.5T420 264v-28q0-25 17.5-42.5T480 176q25 0 42.5 17.5T540 236v28q80 20 130 84.5T720 496v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400 896h160q0 33-23.5 56.5T480 976ZM320 776h320V496q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z"
      />
    </svg>
  </div>
);
