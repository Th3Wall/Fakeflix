import { takeLatest, all, put, call } from "redux-saga/effects";
import { authActionTypes } from "./auth.types";
import { signInFailure, signInSuccess, signOutFailure, signOutSuccess } from "./auth.actions";
import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";
import WalletConnectProvider from "@walletconnect/web3-provider";
import WalletLink from "walletlink";

const contractABI = require("../../contracts/Flowtys.json");
const contractABIPolygon = require("../../contracts/FlowtysCollabDrops.json");
const contractABIMorphys = require("../../contracts/Morphys.json");

const walletLink = new WalletLink({
  appName: "Flowtys+",
  appLogoUrl: "/favicon.ico",
  darkMode: true,
});
const walletConnectProvider = new WalletConnectProvider({
  infuraId: process.env.REACT_APP_INFURA_APP_ID,
});
// Initialize a Web3 Provider object
const coinbaseProvider = walletLink.makeWeb3Provider(
  `https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_APP_ID}`,
  1
);

export function* getSnapshotFromUserAuth(address) {
	try {
    const web3Provider = new Web3(
      `wss://mainnet.infura.io/ws/v3/${process.env.REACT_APP_INFURA_APP_ID}`
    );
    const web3ProviderPolygon = new Web3(
      `https://polygon-rpc.com`
    );
    const contract = new web3Provider.eth.Contract(
      contractABI.abi,
      process.env.REACT_APP_CONTRACT_FLOWTYS
    );
    const contractPolygon = new web3ProviderPolygon.eth.Contract(
      contractABIPolygon.abi,
      process.env.REACT_APP_CONTRACT_FLOWTYS_DROPS
    );
    const contractMorphys = new web3ProviderPolygon.eth.Contract(
      contractABIMorphys.abi,
      process.env.REACT_APP_CONTRACT_MORPHYS
    );
    const balance = yield call(contract.methods.balanceOf(address).call);
    if (parseInt(balance) > 0) {
      yield put(signInSuccess({ id: address }));
      return;
    }
    const balanceMorphys = yield call(contractMorphys.methods.balanceOf(address).call);
    if (parseInt(balanceMorphys) > 0) {
      yield put(signInSuccess({ id: address }));
      return;
    }
    const balanceTicket = yield call(contractPolygon.methods.balanceOf(address, 1).call);
    if (!parseInt(balanceTicket)) {
      yield put(signInFailure('You do not have Flowtys/Morphys/Ticket in your wallet, gent 🎩'));
      return;
    }
		yield put(signInSuccess({ id: address }));
	} catch (e) {
		yield put(signInFailure(e.message));
	}
}

export function* signInAnonymously() {
	try {
		const user  = { id : 1 };
		yield getSnapshotFromUserAuth(user);
	} catch (e) {
		yield put(signInFailure(e.message));
	}
}

export function* connectMetamask() {
	try {
    yield call(detectEthereumProvider);
    const accounts = yield call(window.ethereum.request, { method: "eth_requestAccounts" });
    yield getSnapshotFromUserAuth(accounts[0]);
	} catch (e) {
		yield put(signInFailure(e.message));
	}
}

export function* connectWalletConnect() {
	try {
    yield call(walletConnectProvider.enable);
    const web3 = new Web3(walletConnectProvider);
    const accounts = yield call(web3.eth.getAccounts);
    yield getSnapshotFromUserAuth(accounts[0]);
	} catch (e) {
		yield put(signInFailure(e.message));
	}
}

export function* connectCoinbaseConnect() {
	try {
    const accounts = yield call(coinbaseProvider.request, { method: "eth_requestAccounts" });
    yield getSnapshotFromUserAuth(accounts[0]);
	} catch (e) {
		yield put(signInFailure(e.message));
	}
}

export function* signInWithNiftyWallet({payload: { accessToken, tokenType }}) {
	try {
		const { username } = yield (yield fetch('https://api.niftygateway.com/v1/me/', {
      method: 'GET',
      headers: new Headers({
        'Authorization': `${tokenType} ${accessToken}`, 
        'Content-Type': 'application/json'
      }), 
    })).json();
		const { count } = yield (yield fetch(`https://api.niftygateway.com/v1/users/${username}/nifties/?contractAddress=0x52607cb9c342821ea41ad265b9bb6a23bea49468&limit=1`)).json();

    if (count > 0) {
      yield put(signInSuccess({ id: username }));
    }
	} catch (e) {
    console.log(e)
		yield put(signInFailure(e.message));
	}
}

export function* checkIfUserIsAuthenticated(){
	try {
    let web3;
    if (window.ethereum) {
      web3 = new Web3(window.ethereum);
    } else if (window.web3) {
      web3 = new Web3(window.web3.currentProvider);
    }

    // Check if User is already connected by retrieving the accounts
    let accounts = [];
    if (web3) {
      accounts = yield call(web3.eth.getAccounts);
    }
    web3 = new Web3(walletConnectProvider);
    accounts = (!accounts || !accounts.length) ? yield call(web3.eth.getAccounts) : accounts;
		if (!accounts || !accounts.length) return;
		yield getSnapshotFromUserAuth(accounts[0]);
	} catch (e) {
		yield put(signInFailure(e.message));
	}
}

export function* signOut(){
	try {
		yield put(signOutSuccess());
	} catch (e) {
		yield put(signOutFailure(e.message));
	}
}

export function* onCheckUserSession(){
	yield takeLatest(authActionTypes.CHECK_USER_SESSION, checkIfUserIsAuthenticated);
}

export function* onMetaMaskSignInStart(){
	yield takeLatest(authActionTypes.METAMASK_SIGN_IN_START, connectMetamask);
}

export function* onWalletConnectSignInStart(){
	yield takeLatest(authActionTypes.WALLETCONNECT_SIGN_IN_START, connectWalletConnect);
}

export function* onCoinbaseSignInStart(){
	yield takeLatest(authActionTypes.COINBASE_SIGN_IN_START, connectCoinbaseConnect);
}

export function* onSignOutStart(){
	yield takeLatest(authActionTypes.SIGN_OUT_START, signOut);
}

export function* onNiftySignInStart(){
	yield takeLatest(authActionTypes.NIFTYWALLET_SIGN_IN_START, signInWithNiftyWallet);
}

export function* authSagas() {
	yield all([
		call(onCheckUserSession),
		call(onMetaMaskSignInStart),
    call(onWalletConnectSignInStart),
    call(onCoinbaseSignInStart),
    call(onNiftySignInStart),
		call(onSignOutStart),
	]);
}