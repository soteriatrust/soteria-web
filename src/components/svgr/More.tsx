import * as React from "react";

function More(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" {...props}>
      <g transform="translate(3 3)" fill="#c3c3c3" data-name="Group 147">
        <circle data-name="Ellipse 9" cx={2} cy={2} r={2} transform="translate(10 10)" />
        <circle data-name="Ellipse 10" cx={2} cy={2} r={2} transform="translate(2 10)" />
        <circle data-name="Ellipse 11" cx={2} cy={2} r={2} transform="translate(18 10)" />
      </g>
    </svg>
  );
}

const MemoMore = React.memo(More);
export default MemoMore;
