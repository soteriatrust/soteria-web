import * as React from "react";

function ArrowLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" {...props}>
      <defs>
        <linearGradient id="prefix__a" x1={0.5} x2={0.5} y2={1} gradientUnits="objectBoundingBox">
          <stop offset={0} stopColor="#b1891d" />
          <stop offset={1} stopColor="#efc659" />
        </linearGradient>
      </defs>
      <g data-name="Group 547">
        <g data-name="Group 12">
          <g data-name="Group 11" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth={2}>
            <path data-name="Line 2" d="M15 19.875l8.5 7.875" />
            <path data-name="Line 3" d="M15 19.875L23.5 12" />
          </g>
        </g>
      </g>
    </svg>
  );
}

const MemoArrowLeft = React.memo(ArrowLeft);
export default MemoArrowLeft;
