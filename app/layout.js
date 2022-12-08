"use client";

import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  lightTheme,
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
// import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

import Nav from "./Nav3";
import Footer from "./Footer";

const { chains, provider } = configureChains(
  [
    chain.mainnet,
    chain.goerli,
    //, chain.polygon, chain.optimism, chain.arbitrum
  ],
  [
    // alchemyProvider({ alchemyId: "ZxjRdUkSVxkP-JAKDkmx5L1iTy3IViNR" }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
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
            <Nav />
            {children}
            <Footer />
          </RainbowKitProvider>
        </WagmiConfig>
      </body>
    </html>
  );
}
