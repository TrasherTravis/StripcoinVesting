import React from 'react';
import { ConnectWalletWidget, DisconnectButton } from './styles';

const VestingConnectWallet: React.FC<any> = ({ account, walletDisconnect }) => {
  return (
      <ConnectWalletWidget>
        <p>
          Your wallet is connected with address:
          <br />
          <a title="Click to open in Etherscan" style={{ marginLeft: '2em' }}>
            {account}<img src="images/ext.png" />
          </a>
        </p>
        <p style={{ color: '#bbbaba' }}>
          If you wish to disconnect your wallet, click here:
          <br />
          <DisconnectButton href="#" onClick={walletDisconnect}>Disconnect Wallet</DisconnectButton>
        </p>
      </ConnectWalletWidget>
  );
};
export default VestingConnectWallet;
