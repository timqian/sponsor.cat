"use client";

import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  lightTheme,
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { infuraProvider } from 'wagmi/providers/infura'
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { AnalyticsWrapper } from './components/analytics';

import Footer from "./Footer";

const { chains, provider } = configureChains(
  [
    chain.mainnet,
    // chain.goerli,
    //, chain.polygon, chain.optimism, chain.arbitrum
  ],
  [
    infuraProvider({ apiKey: '4ab8efea600a40e69e014663d8706833' }),
    publicProvider(),
    // alchemyProvider({ alchemyId: "ZxjRdUkSVxkP-JAKDkmx5L1iTy3IViNR" }),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "Sponsor Cat",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider
            chains={chains}
            modalSize="compact"
            theme={lightTheme({
              accentColor: "rgb(30, 41, 59)",
              accentColorForeground: "white",
              borderRadius: "medium",
              fontStack: "system",
            })}
          >
            {children}
            <Footer />
          </RainbowKitProvider>
        </WagmiConfig>
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
