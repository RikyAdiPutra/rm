import { NextResponse } from "next/server";
import Midtrans from "midtrans-client";
import _ from "lodash";

let snap = new Midtrans.Snap({
  isProduction: false,
  serverKey: process.env.SERVER_KEY,
  clientKey: process.env.NEXT_PUBLIC_CLIENT_KEY,
});

// untuk mendapatkan data
export function GET() {
  return NextResponse.json({
    message: "Payment API",
    data: [
      {
        id: 1,
        name: "Payment 1",
        description: "Integration Midtrans",
      },
    ],
  });
}

// untuk membuat data
export async function POST(req) {
  const data = await req.json();
  if (data.length === 0) {
    throw new Error("data not found");
  }

  const itemDetails = data.map((item) => {
    return {
      key: item.id,
      id: item.id,
      name: item.name,
      price: _.ceil(parseFloat(item.price.toString())),
      quantity: item.quantity,
    };
  });

  const grossAmount = _.sumBy(
    itemDetails,
    (item) => item.price * item.quantity
  );
  const parameter = {
    item_details: [itemDetails],
    transaction_details: {
      order_id: _.random(100000, 999999),
      gross_amount: grossAmount,
    },
  };

  // const parameter = {
  //   item_details: [
  //     {
  //       id: _.random(100000, 99999),
  //       price: 2000,
  //       quantity: 1,
  //       name: "ini name",
  //     },
  //   ],
  //   transaction_details: {
  //     order_id: _.random(100000, 999999),
  //     gross_amount: 2000,
  //   },
  // };

  const token = await snap.createTransactionToken(parameter);
  console.log(parameter);
  return NextResponse.json({
    token,
  });
}
