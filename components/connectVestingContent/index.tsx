//@ts-nocheck
import React, {useEffect, useState} from 'react';
import {Container, ContentDiv, VestingTable, TableValues, WithdrawButton, StyledLink} from './styles';
import VestingConnectWallet from 'components/vestingConnectWallet';
import {vestingABI, tokenABI} from "../../contracts/abis";
import {vestingContract, STRIPCOIN} from "../../contracts/constants";
import Web3 from "web3";

interface Props {
    isMobile?: boolean;
    walletDisconnect: any;
    account: string,
    address: any,
    vestingPlan: number
    vestingTime: number
}

const ConnectVestingContent: React.FC<Props> = ({
                                                    isMobile,
                                                    walletDisconnect,
                                                    account,
                                                    address,
                                                    vestingPlan,
                                                    vestingTime
                                                }) => {
    const [vested, setVested] = useState();
    const [locked, setLocked] = useState();
    const [withdrawable, setWithdrawable] = useState();
    const web3 = new Web3(Web3.givenProvider);
    const VESTING_CONTRACT = new web3.eth.Contract(vestingABI, vestingContract);
    const Token: any = new web3.eth.Contract(tokenABI, STRIPCOIN);                                                    
    const aprDate: Date = new Date(vestingTime).toLocaleDateString();

    useEffect(() => {
        try {
            VESTING_CONTRACT?.methods.getLocked(address).call().then((locked) => {
                setLocked(locked);
                console.log(locked, 'locked')
            })
        } catch (e) {
            console.error('UNSUPPORTED CHAIN', e)
        }

    }, []);   
    
    useEffect(() => {
        try {
            VESTING_CONTRACT?.methods.getWithdrawable(address).call().then((withdraw) => {
                setWithdrawable(withdraw);
                console.log(withdraw, 'withdraw')
            })
        } catch (e) {
            console.error('UNSUPPORTED CHAIN', e)
        }

    }, []); 

    useEffect(() => {
        try {
            VESTING_CONTRACT?.methods.getVested(address).call().then((vested) => {
                setVested(vested);
                console.log(vested, 'vested')
            })
        } catch (e) {
            console.error('UNSUPPORTED CHAIN', e)
        }

    }, []);
    return (
        <>
            <VestingConnectWallet account={account} walletDisconnect={walletDisconnect}/>
            <Container>
                <ContentDiv>
                    <h3 style={{color: 'white'}}>Your Vesting Schedule Details:</h3>
                    <p style={{fontFamily: 'monospace'}}>
                        <strong>Schedule</strong>: <br/>
                        {vestingPlan === 0 || vestingPlan === 2 ?
                            <p>Starting from the ending of the presale, all tokens remain locked for 45 days, then 20%
                                will
                                be
                                gradually
                                unlocked per month. <br/>
                                Total vesting period is thus 6 months and 15 days, or 195 days.
                                There will be 4 stages to your vesting schedule.<br/></p>

                            :
                            <p>Stage 1: Initial Lockup Period: for the first 45 days all tokens remain locked.<br/>
                                Stage 2: 20% unlocked over the next 2 months and 15 days.<br/>
                                Stage 3: 10% unlocked over the next 5 months.<br/>
                                Stage 4: 10% unlocked monthly until all tokens unlocked.<br/>
                                Total vesting period is thus 16 months. </p>}
                    </p>
                    <VestingTable>
                        <tbody>
                        <tr>
                            <td>Initial vested amount:</td>
                            <TableValues className="tablevalues">{vested} STRIP</TableValues>
                        </tr>
                        <tr>
                            <td>Approximate date when 100% will be unlocked:</td>
                            <TableValues className="tablevalues">{aprDate}</TableValues>
                        </tr>
                        <tr>
                            <td>Amount currently locked:</td>
                            <TableValues className="tablevalues">{locked} STRIP</TableValues>
                        </tr>
                        <tr>
                            <td>Amount previously withdrawn:</td>
                            <TableValues className="tablevalues">10,000,000 STRIP</TableValues>
                        </tr>
                        <tr>
                            <td>Available for withdrawal now:</td>
                            <TableValues className="tablevalues" style={{color: '#00ff00'}}>
                                {withdrawable} STRIP
                            </TableValues>
                        </tr>
                        {/* if value here is 0 STRIP, change it's color to red  */}
                        </tbody>
                    </VestingTable>
                    <hr/>
                    <p>Click here to withdraw all STRIP tokens available for withdrawal:</p>
                    <span>
            <WithdrawButton name="WITHDRAW" isInactive={false} onClick={() => console.log('sddsds')}>
              WITHDRAW
            </WithdrawButton>
          </span>
                    <p style={{color: 'red'}}>
                        WARNING: your wallet doesn't have any ETH in it.
                        <br/> You won't be able to send the 'Withdraw transaction', because ETH is needed to pay for the
                        transaction fee. Click here to read our ETH Buing Guide:{' '}
                        <StyledLink href="#">...ETH Buying Guide...</StyledLink>
                    </p>
                    <p>
                        Once you click the WITHDRAW button above and confirm the 'Withdraw Transaction', any unlocked
                        tokens held by
                        the Vesting Contract will be transferred into your personal wallet. You are then free to
                        transfer or
                        exchange your tokens freely.
                    </p>
                </ContentDiv>
            </Container>
        </>
    );
};
export default ConnectVestingContent;
