import * as React from "react";

function ArrowRight(props:any) {
  return (
    <svg
      width={16}
      height={25}
      viewBox='0 0 16 25'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M3.8.8L.2 4.4l8.4 8.4-8.4 8.4 3.6 3.6 12-12z'
        fill='currentColor'
        fillRule='evenodd'
      />
    </svg>
  );
}

export default ArrowRight;
