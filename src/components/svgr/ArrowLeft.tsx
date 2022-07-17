import * as React from "react";

function ArrowLeft(props: any) {
  return (
    <svg
      width={16}
      height={25}
      viewBox='0 0 16 25'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M12.2.8l3.6 3.6-8.4 8.4 8.4 8.4-3.6 3.6-12-12z'
        fill='currentColor'
        fillRule='evenodd'
      />
    </svg>
  );
}

export default ArrowLeft;
