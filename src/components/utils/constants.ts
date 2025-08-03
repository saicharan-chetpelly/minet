import DashboardImage from "../../../public/assets/images/dashboard.svg"
import PortfolioImage from "../../../public/assets/images/portfolio.svg"
import TradeImage from "../../../public/assets/images/trade.svg"
import NotificationImage from "../../../public/assets/images/notification.svg"
import LogoutImage from "../../../public/assets/images/logout.svg"
import DashboardImageFill from "../../../public/assets/images/dashboard-fill.svg"
import PortfolioImageFill from "../../../public/assets/images/portfolio-fill.svg"
import TradeImageFill from "../../../public/assets/images/trade-fill.svg"
import NotificationImageFill from "../../../public/assets/images/notification-fill.svg"
import LogoutImageFill from "../../../public/assets/images/logout-fill.svg"


export const BUY="BUY"
export const SELL="SELL"
export const ALLASSETS="All Assets"
export const TABLE_HEAD_NAME="Name"
export const TABLE_HEAD_PRICE="Price"
export const TABLE_HEAD_CHANGE="Change"
export const TABLE_HEAD_MARKETCAP="MarketCap"
export const TABLE_HEAD_WATCH="Watch"
export const SEARCH_ALL_ASSETS="Search all assets"
export const TRADE="Trade"
export const LEGAL="Legal & Privacy"
export const CAREERS="Careers"
export const COPY="© 2021 Minet"
export const DASHBOARD="Dashboard"
export const NEED_HELP="NEED HELP"
export const footerList=["English","Hindi"]
export const EMPTY_STATEMENT="You don’t own any crypto. Send yourself some crypto to get started."
export const VIEW_ALL = "View All"
export const RECENT_TRANSACTION="Recent transactions"
export const GO_TO_USD_COIN="GO TO USD COIN"
export const CHIP_LABEL="24 h"
export const MAIN_TEXT="Watchlist"
export const OPTION_TEXT="Discover assets"
export const EDIT_TEXT="View Watchlist"
export const TOTAL_BALANCE="Total Balance"
export const MY_WALLLETS="My wallets"
export const WATCHLIST="Watchlist"
export const  DISCOVER_ASSETS="Discover assets"
export const ABOUT = "About"
export const CRYPTOCONTENT =`The world’s first cryptocurrency, Bitcoin is stored and
exchanged securely on the internet through a digital ledger
known as a blockchain. Bitcoins are divisible into smaller units
known as satoshis each satoshi is worth 0.00000001 bitcoin.`
export const RESOURCES = "Resources"
export const PRICE_CORRELATION_WITH = "Price correlation with"
export const FROM = "From"
export const MARKET_CAP = 'Market cap'
export const Vol24H = "Vol. 24H"
export const CIRCULATING_SUPPLY = "Circulating Supply"
export const ADDED_TO_WATCHLIST = "ADDED TO WATCHLIST"
export const CURRENT_VALUE = "Current Value"
export const OVERVIEW = "Overview"
export const WALLET = "Wallet"
export const BITCOIN_TOTALBAL = "0.0234510 BTC ($85,553.73)"
export const ETHEREUM_TOTALBAL = "0.5234510 ETH ($648.54)"
export const TAB_MENU_LIST = ["1H", "24H", "1W", "1M", "1Y", "ALL"]
export const TAB_MENU_VALUES = ["hour","day","week","month","year","all"]
export const OFFICIAL_WEBSITE = "Official Website"
export const MOVES_TIGHTLY_TOGETHER = "Moves tightly together"
export const TOTAL_INVESTMENT = 'Total Investment'
export const BITCOIN = "Bitcoin"
export const WHITE_PAPER = "White Paper"
export const YOU_ARE_BUYING="You are buying"
export const BUY_NOW="BUY NOW"
export const DEFAULT="Default"
export const BUY_CRYPTO="Buy Crypto"
export const CHOOSE_CRYPTO="Choose crypto"
export const PAYMENT_METHOD="Payment Method"
export const AMOUNT_DETAILS="Amount details"
export const BUY_MAX="Buy max"
export const BTC="BTC"
export const SELECT_SPEED_DELIVERY="Select speed delivery"
export const TRANSACTION_FEE="Transaction Fees"
export const PAYMENT_MESSAGE="Purchase is completed, please check your balance in your crypto wallet"
export const CRYPTO_BUTTON="BUY CRYPTO"
export const PAYMENT_SUCCESS="Purchase is completed, please check your balance in your crypto wallet"
export const PAYMENT_FAIL="Purchase is failed due to low balance"
export const CHECKOUT="Checkout"
export const MYPORTFOLIOVALUE = "My PortFolio Value"
export const PURCHASED = "Purchased"
export const NOT_PURCHASED = "Failed"


export const navigationList =[
    {   
        title:"Dashboard",
        path:DashboardImage,
        filled:DashboardImageFill,
        function:()=>{console.log("my dashboard")}

    },
    {
        title:"My Portfolia",
        path:PortfolioImage,
        filled:PortfolioImageFill,
        function:()=>{console.log("myportfolio")}

    },
    {
        title:"Trade",
        path:TradeImage,
        filled:TradeImageFill,
        function:()=>{console.log("Trade")}

    },
    {
        title:"Notifications",
        path:NotificationImage,
        filled:NotificationImageFill,
        function:()=>{console.log("notification")}

    },
    {
        title:"Log-Out",
        path:LogoutImage,
        filled:LogoutImageFill,
        function:()=>{console.log("logout")}

    },
        
       
]

export const BitcoinGraphProfitdata = [
    {
      xAxislabel: "JUN 8",
      totalInvestment: 4000,
      Bitcoin: 1,
    },
    {
      xAxislabel: "JUN 15",
      totalInvestment: 9050,
      Bitcoin: 4000,
    },
    {
      xAxislabel: "JUN 22",
      totalInvestment: 8500,
      Bitcoin: 3500,
    },
    {
      xAxislabel: "JUN 29",
      totalInvestment: 8900,
      Bitcoin: 8000,
    },
    {
      xAxislabel: "JUL 6",
      totalInvestment: 11500,
      Bitcoin: 3500,
    },
    {
      xAxislabel: "JUL 13",
      totalInvestment: 11000,
      Bitcoin: 4500,
    },
  ];

  export const BitcoinGraphLossdata = [
    {
      xAxislabel: "JUN 8",
      totalInvestment: 4000,
      Bitcoin: 1,
    },
    {
      xAxislabel: "JUN 15",
      totalInvestment: 9050,
      Bitcoin: 3000,
    },
    {
      xAxislabel: "JUN 22",
      totalInvestment: 8500,
      Bitcoin: 4000,
    },
    {
      xAxislabel: "JUN 29",
      totalInvestment: 8900,
      Bitcoin: 9000,
    },
    {
      xAxislabel: "JUL 6",
      totalInvestment: 11500,
      Bitcoin: 5000,
    },
    {
      xAxislabel: "JUL 13",
      totalInvestment: 11000,
      Bitcoin: 500,
    },
  ];
  export const deliveryTypes=[
    {
        id:0,
        time:"2-5 minutes",
        type:"Instant",
    },
    {
        id:1,
        time:"4 hours",
        type:"Faster"
    },
    {
        id:2,
        time:"120 hours",
        type:"Fast"
    }
]
export const transactionHistoryStepper=
    {
        step1: {
            0: "Payment method",
            1: "Visa credit ...8845"
        },
        step2:{
            0:"Delivery fees",
            1:"0.001 BTC"
        },
        step3:{
            0:"Deposit to",
            1:"Bitcoin wallet"
        }
    }
 export const formatCurrency= new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      });
