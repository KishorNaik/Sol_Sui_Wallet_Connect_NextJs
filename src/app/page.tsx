"use client";

import Image from "next/image";
import {
  addressEllipsis,
  ConnectButton,
  ErrorCode,
  formatSUI,
  SuiChainId,
  useAccountBalance,
  useWallet,
} from "@suiet/wallet-kit";

export default function Home() {
  // Use Sui Wallet Hook
  const wallet = useWallet();
  const { balance } = useAccountBalance();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex w-full flex-col items-center justify-center gap-2">
        <h1 className="my-4">Sui Wallet Connect POC</h1>

        <ConnectButton />

        {!wallet.connected ? (
          <p className="my-8">Connect DApp with Sui wallet from now!</p>
        ) : (
          <div className="my-8">
            <div>
              <p>current wallet: {wallet.adapter?.name}</p>
              <p>
                wallet status:{" "}
                {wallet.connecting
                  ? "connecting"
                  : wallet.connected
                  ? "connected"
                  : "disconnected"}
              </p>
              <p>
                wallet address: {addressEllipsis(wallet.account?.address ?? "")}
              </p>
              <p>current network: {wallet.chain?.name}</p>
              <p>
                wallet balance:{" "}
                {formatSUI(balance ?? 0, {
                  withAbbr: false,
                })}{" "}
                SUI
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
