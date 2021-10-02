import React, {useEffect, useReducer, useState} from "react";
import {Background, Content, Image} from '../libs/styles'
import Head from 'next'
import Header from "components/header/index";
import ConnectWallet from "components/connectWallet/connect-wallet";
import Index from "components/walletBalance";
import BuyForm from "components/buyForm/buyForm";
import Presale from "../components/welcomeToPresale";
import {useWeb3React} from "@web3-react/core";
import {Web3Provider} from "@ethersproject/providers";
import Web3 from 'web3';
import {parseValue, countdown} from "../libs/timer";
import {change} from "../libs/changeNet";
import {presaleABI, vestingABI} from "../contracts/abis";
import {presaleContract, vestingContract} from "../contracts/constants";
import VestingContent from "components/vestingContent";
import ConnectVestingContent from "components/connectVestingContent";

export const AppContext = React.createContext({});
const initialState = {
    balance: 0,
}

function reducer(state, action) {
    switch (action.type) {
        case "UPDATE_BALANCE":
            return {
                balance: action.data
            }
        default:
            return initialState;
    }
}

const IndexPage = (props) => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [days, setDays] = useState<number>(0);
    const [hours, setHours] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);
    const [outdated, setIsOutdated] = useState<boolean>(false);
    const [vestingPlan, setVestingPlan] = useState<number | null>(null);
    const [vestingTimeABC, setVestingTimeABC] = useState<number | null>(null);

    const context = useWeb3React<Web3Provider>();
    const web3 = new Web3(Web3.givenProvider);

    //get interval from contract -> ms
    const PRESALE_CONTRACT = new web3.eth.Contract(presaleABI as any, presaleContract);
    const VESTING_CONTRACT = new web3.eth.Contract(vestingABI as any, vestingContract);

    const getVestingPlan: () => void = async () => {
        if (context.account) {
            const rqVestingPlan = await VESTING_CONTRACT.methods.getVestingPlan(context.account).call();
            const rqTimeLeft =  await  VESTING_CONTRACT.methods.startTime().call();
            const parsed = parseInt(rqTimeLeft) * 1000 + (rqVestingPlan === 0 || rqVestingPlan === 2 ? 195  * 24 * 60 * 60 * 1000 : 480 * 24 * 60 * 60 * 1000);
            setVestingTimeABC(parsed);
            setVestingPlan(parseFloat(rqVestingPlan));
        }
        return;
    }

    console.log(vestingTimeABC)



    useEffect(() => {
        if (context.account) change();
        getVestingPlan();
    }, [context])


    useEffect(() => {
        const compare = source => {
            if (source) setIsMobile(true);
            else setIsMobile(false);
        };


        void (async () => {
            let interval = 0
            await PRESALE_CONTRACT.methods.PERIOD().call().then(r => interval = parseInt(r))
            const getData = parseValue(interval);
            countdown({getData, setDays, setMinutes, setSeconds, setHours, setIsOutdated});
            console.log(interval)
        })();

        let interval: number = 0;

        const media = window.matchMedia('(max-width: 1200px)');
        compare(media.matches);
        media.addListener((e) => {
            compare(e.matches);
        });
    }, []);


    const timeLeft: string = outdated ? 'Expired' : days + 'd' + ':' + hours + 'h' + ':' + minutes + 'm' + ':' + seconds + 's';

    return (
        <>
            <AppContext.Provider value={{state, dispatch}}>
                <Background>
                    <Content isMobile={isMobile}>
                        <Header isMobile={isMobile} vesting={true}/>
                        <VestingContent isMobile={isMobile} vestingPlan={vestingPlan} vestingTime={vestingTimeABC}/>
                        <Image src='images/logo.png' alt='logo' isMobile={isMobile} vesting={true}/>
                    </Content>
                </Background>
            </AppContext.Provider>
        </>
    );
};

export default IndexPage;
