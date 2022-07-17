import * as React from "react";

function Facebook(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 10.385 20" {...props}>
      <path
        d="M6.742 20v-9.122h3.061l.459-3.556h-3.52V5.051c0-1.029.285-1.731 1.762-1.731h1.882V.139A25.513 25.513 0 007.643 0C4.928 0 3.07 1.657 3.07 4.7v2.622H0v3.556h3.07V20z"
        fill="currentColor"
      />
    </svg>
  );
}

const MemoFacebook = React.memo(Facebook);
export default MemoFacebook;
