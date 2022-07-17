import * as React from "react";

function Telegram(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="20" height="16" viewBox="0 0 20 16.667" {...props}>
      <path
        d="M7.848 10.984l-.331 4.653a1.157 1.157 0 00.924-.448l2.219-2.121 4.6 3.368c.843.47 1.438.223 1.665-.776l3.017-14.143C20.21.27 19.491-.217 18.669.089L.928 6.881c-1.211.47-1.193 1.145-.206 1.451l4.536 1.411L15.795 3.15c.5-.328.947-.147.576.182z"
        fill="currentColor"
      />
    </svg>
  );
}

const MemoTelegram = React.memo(Telegram);
export default MemoTelegram;
