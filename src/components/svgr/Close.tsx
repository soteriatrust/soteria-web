import * as React from "react";

function Close(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" {...props}>
      <g data-name="Group 550">
        <g data-name="Group 549">
          <g data-name="Group 520">
            <g data-name="Group 512">
              <g data-name="Group 511">
                <path
                  data-name="Path 2311"
                  d="M57.305 60.86l-38.89-38.892a2 2 0 012.828-2.828l38.89 38.89a2 2 0 01-2.828 2.83z"
                  fill="#fff"
                />
              </g>
            </g>
          </g>
          <g data-name="Group 521">
            <g data-name="Group 512">
              <g data-name="Group 511">
                <path
                  data-name="Path 2311"
                  d="M21.243 60.86l38.89-38.89a2 2 0 00-2.828-2.83l-38.89 38.892a2 2 0 102.828 2.828z"
                  fill="#fff"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

const MemoClose = React.memo(Close);
export default MemoClose;
