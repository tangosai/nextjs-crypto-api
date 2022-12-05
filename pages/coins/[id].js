import React from "react";
import axios from "axios";
const Id = ({ coins }) => {
  console.log(coins);
  return <div>{coins.name}</div>;
};

export default Id;

export async function getServerSideProps(context) {
  const { id } = context.query;
  const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
  const coins = await response.json();
  return {
    props: {
      coins,
    },
  };
}

// export const getStaticPath = async (context) =>{
//   const SlugQuery = await request({
//     query :
//   })
// }
