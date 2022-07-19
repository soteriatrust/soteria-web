import * as React from "react";

function Hamburger(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 80 80" {...props}>
      <g data-name="Group 550">
        <g data-name="Group 513">
          <g data-name="Group 512">
            <g data-name="Group 511">
              <path
                data-name="Path 2311"
                d="M67 26H12a2 2 0 010-4h55a2 2 0 010 4z"
                fill="#fff"
              />
            </g>
          </g>
        </g>
        <g data-name="Group 516">
          <g data-name="Group 515">
            <g data-name="Group 514">
              <path
                data-name="Path 2312"
                d="M40 42H12a2 2 0 010-4h28a2 2 0 010 4z"
                fill="#fff"
              />
            </g>
          </g>
        </g>
        <g data-name="Group 519">
          <g data-name="Group 518">
            <g data-name="Group 517">
              <path
                data-name="Path 2313"
                d="M67 58H12a2 2 0 010-4h55a2 2 0 010 4z"
                fill="#fff"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

const MemoHamburger = React.memo(Hamburger);
export default MemoHamburger;
