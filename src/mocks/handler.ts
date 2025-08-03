import { rest } from "msw";
import data from "../data/db.json";
export const handlers = [
  rest.get(
    `http://localhost:3001/cryptoCurrency`,
    (req, res, ctx) => {
      return res(
          ctx.status(200),
          ctx.json([
            ...data.cryptoCurrency,
            {
              id: 11,
              iconURL: "",
              cryptoName: "BootCamp",
              type: "ETH",
              price: "$1,297.93",
              change: "-5.49%",
              marketCap: "$25.4T",
              Vol24H: "$11.5B",
              circulatingSupply: "122.60M ETH",
              profitloss: "+0.64%",
              isWatchlisted: false,
            },
          ])
        );
    }
 ),
  rest.get("http://localhost:3001/transactions",(req,res,ctx)=>{
        console.log(data.transactions)
        return res(ctx.status(200),
        ctx.json(data.transactions)
        );
    }),
    rest.get("http://localhost:3001/myportfolio", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        ...data.myPortfolio,
        {
          id: 10,
          iconURL: "",
          type: "BTC",
          cryptoName: "Bitcoin",
          currencyValue: "$34,000.00",
          profitLoss: "+1.06%",
        },
      ])
    );
  }),
  rest.get("http://localhost:3001/wallets", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(data.wallets));
  }),
  rest.get("http://localhost:3001/chooseCrypto", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(data.chooseCrypto)
    );
  }),
  rest.post("http://localhost:3001/transactions",(req,res,ctx)=>{
    return res(ctx.status(200),
    );
}),
rest.patch("http://localhost:3001/wallets/1", (req, res, ctx) => {
  return res(ctx.status(200));
}),
];
    
    

