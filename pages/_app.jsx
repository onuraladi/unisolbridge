import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { ThirdwebProvider } from "@thirdweb-dev/react/solana";
import "../styles/globals.css";

// Change the network to the one you want to use: "mainnet-beta", "testnet", "devnet", "localhost" or your own RPC endpoint
const network = "devnet";

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider network={network} 
    authConfig={{
      authUrl:"/api/auth",
      domain: "onur.org",
      loginRedirect: "/",
    }}>
      <WalletModalProvider>
        <Component {...pageProps} />
      </WalletModalProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
