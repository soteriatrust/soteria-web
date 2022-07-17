import * as React from "react";

function Twitter(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 20 16.25" {...props}>
      <path
        data-name="Path 1943"
        d="M20 1.924a8.548 8.548 0 01-2.362.647 4.077 4.077 0 001.8-2.266 8.194 8.194 0 01-2.6.993 4.1 4.1 0 00-7.092 2.8 4.222 4.222 0 00.1.935A11.606 11.606 0 011.395.744a4.1 4.1 0 001.26 5.48A4.049 4.049 0 01.8 5.722v.045A4.119 4.119 0 004.085 9.8a4.092 4.092 0 01-1.075.135 3.626 3.626 0 01-.776-.07 4.139 4.139 0 003.831 2.856 8.238 8.238 0 01-5.084 1.745A7.679 7.679 0 010 14.41a11.543 11.543 0 006.29 1.84A11.59 11.59 0 0017.96 4.583c0-.181-.006-.356-.015-.53A8.18 8.18 0 0020 1.924z"
        fill="currentColor"
      />
    </svg>
  );
}

const MemoTwitter = React.memo(Twitter);
export default MemoTwitter;
