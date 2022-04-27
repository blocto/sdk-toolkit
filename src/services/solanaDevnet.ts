import BloctoSDK, { SolanaProviderInterface } from "@blocto/sdk";

export interface ExtendedSolanaProviderInterface
  extends SolanaProviderInterface {
  request: (params: { method: string; params?: any }) => Promise<any>;
}

export interface ExtendedSolaneBloctoSDK extends BloctoSDK {
  solana: ExtendedSolanaProviderInterface;
}

const isMainnet = process.env.REACT_APP_NETWORK === "mainnet";

const bloctoSDK = new BloctoSDK({
  solana: {
    net: isMainnet ? "mainnet-beta" : "devnet",
  },
}) as ExtendedSolaneBloctoSDK;

export { bloctoSDK };