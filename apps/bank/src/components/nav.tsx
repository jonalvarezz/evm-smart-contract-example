type Props = {
  appName: string;
  onConnect?: () => void;
  address?: string | null | undefined;
};

export function Nav({ appName, address, onConnect }: Props) {
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Bank size={42} />
            </div>
            <h1 className="ml-1 text-white font-semibold text-lg">{appName}</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <div className="relative ml-3">
                {address == null ? (
                  <button
                    type="button"
                    onClick={onConnect}
                    className="bg-gray-900 flex items-center text-white rounded-md px-3 py-2 text-sm font-medium"
                  >
                    <span className="mr-2">
                      <MetaMaskIcon width={20} />
                    </span>
                    Connect wallet
                  </button>
                ) : (
                  <div className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium">
                    {address}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Bank({ size = 32 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 72 72"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill="#9B9B9A" d="M16 26H56V60H16z" />
      <path fill="#D0CFCE" d="M14 22H58V26H14z" />
      <path fill="#FFF" d="M19.5 26L21.5525 26 21.5525 60 19.5 60" />
      <path fill="#FFF" d="M24.9331 26L26.9708 26 26.9708 60 24.9331 60" />
      <path fill="#FFF" d="M47.0669 60L45.0177 60 45.0177 26 47.0669 26" />
      <path fill="#FFF" d="M52.5 60L50.4816 60 50.4816 26 52.5 26" />
      <path fill="#D0CFCE" d="M36 12L19 22 53 22z" />
      <path fill="#92D3F5" d="M31.5 50H40.5V60H31.5z" />
      <circle cx={36} cy={35} r={5} fill="#FCEA2B" />
      <path
        fill="none"
        stroke="#F4AA41"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M36.948 34.262c-.098-.38-.52-.666-1.027-.666h0c-.579 0-1.048.373-1.048.834 0 .461.47.835 1.048.835l-.021.003c.579 0 1.048.374 1.048.835 0 .46-.469.835-1.048.835h0c-.507 0-.93-.287-1.027-.667"
      />
      <path
        fill="none"
        stroke="#F4AA41"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M35.9106 33.5958L35.9106 32.8"
      />
      <path
        fill="none"
        stroke="#F4AA41"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M35.9106 37.7333L35.9106 36.9375"
      />
      <g fill="none" stroke="#000" strokeMiterlimit={10}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 26H56V60H16z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14 22H58V26H14z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19.5 26L22.5 26 22.5 60 19.5 60"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M24.9331 26L27.9331 26 27.9331 60 24.9331 60"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M47.0669 60L44.0669 60 44.0669 26 47.0669 26"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M52.5 60L49.5 60 49.5 26 52.5 26"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M36 12L19 21.7491 53 21.7491z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M31.5 50H40.5V60H31.5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M36 60L36 50"
        />
        <circle cx={36} cy={35} r={5} strokeWidth={2} />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M36.948 34.262c-.098-.38-.52-.666-1.027-.666h0c-.579 0-1.048.373-1.048.834 0 .461.47.835 1.048.835l-.021.003c.579 0 1.048.374 1.048.835 0 .46-.469.835-1.048.835h0c-.507 0-.93-.287-1.027-.667"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M35.9106 33.5958L35.9106 32.8"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M35.9106 37.7333L35.9106 36.9375"
        />
      </g>
    </svg>
  );
}

import Image from 'next/image';
import imageSrc from './metamask.png';

function MetaMaskIcon(props: { width?: number }) {
  const { width = 32 } = props;

  return <Image src={imageSrc} width={width} height={width} alt="" />;
}

export const metamaskImageSrc = imageSrc;
