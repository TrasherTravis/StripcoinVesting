import React, {useState, useRef} from 'react';
import { Container, VestingButton } from './styles';
import ConnectVestingContent from 'components/connectVestingContent';
import Wallets from "../wallet-modal";
import {useWeb3React} from "@web3-react/core";
import {Web3Provider} from "@ethersproject/providers";

const VestingContent: React.FC<{ isMobile?: boolean, vestingPlan: number, vestingTime: number}> = ({ isMobile, vestingPlan , vestingTime}) => {
  const [connect, setConnect] = useState(false);
  const context = useWeb3React<Web3Provider>()
    const {deactivate, active} = context
    const walletRef = useRef(null);
    const connectMetaMask = () => {
        walletRef.current.openModal();
    };

    const walletDisconnect = () => {
        void deactivate();
    };
    const account: string = context.account === undefined ? null : context.account.slice(0, 5) + '...' + context.account.slice(-4);
    console.log(account, 'sddsdsds')
  return (
    <>
    <Wallets ref={walletRef}/>
    {!context?.account ? (<Container>
      <p>
        On this <strong>Vesting Dashboard</strong> you will see the details of your vesting schedule, and you will be
        able to withdraw STRIPCOIN tokens into your personal wallet once tokens have been unlocked as per the schedule.
      </p>
      <p>Start by connecting your wallet. Click here:</p>
      <span>
        <VestingButton name="CONNECT WALLET" isInactive={false} onClick={() => connectMetaMask()}>CONNECT WALLET</VestingButton>
      </span>
        
    </Container>) : <ConnectVestingContent vestingTime={vestingTime} vestingPlan={vestingPlan} address={context?.account} account={account} walletDisconnect={walletDisconnect} isMobile={isMobile}/>}
    </>
  );
};
export default VestingContent;
