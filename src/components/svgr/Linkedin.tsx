import * as React from "react";

function Linkedin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 18.025 18" {...props}>
      <g fill="currentColor">
        <path data-name="Path 1944" d="M2.4 0a2.4 2.4 0 102.4 2.4A2.406 2.406 0 002.4 0z" />
        <path
          data-name="Path 1945"
          d="M4.205 5.77H.599a.311.311 0 00-.311.311v11.608A.311.311 0 00.599 18h3.606a.311.311 0 00.311-.311V6.081a.311.311 0 00-.311-.311z"
        />
        <path
          data-name="Path 1946"
          d="M13.422 5.634a4.736 4.736 0 00-3.187 1.057v-.614a.311.311 0 00-.311-.311h-3.46a.311.311 0 00-.311.311V17.69a.311.311 0 00.311.311h3.6a.311.311 0 00.311-.311v-5.743c0-1.648.3-2.669 1.816-2.669 1.49 0 1.6 1.1 1.6 2.768v5.645a.311.311 0 00.311.311h3.6a.311.311 0 00.311-.311v-6.369c.009-2.645-.511-5.688-4.591-5.688z"
        />
      </g>
    </svg>
  );
}

const MemoLinkedin = React.memo(Linkedin);
export default MemoLinkedin;
