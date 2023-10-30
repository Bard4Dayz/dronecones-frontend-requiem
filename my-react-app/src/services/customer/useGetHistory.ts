import axios from "../axios";
import { BACKEND_URL_DEV } from "../../constants";
import { Order, FullCone, ProductType } from "../../types";

const dummyData: Order[] = [
  {
    cones: [
      {
        components: [
          { name: "Sugar", type: ProductType.CONE },
          { name: "Chocolate", type: ProductType.ICECREAM },
        ],
      },
    ],
    totalPrice: 500,
    timestamp: new Date(),
  },
  {
    cones: [
      {
        components: [
          { name: "Waffle", type: ProductType.CONE },
          { name: "Chocolate", type: ProductType.ICECREAM },
          { name: "Chocolate", type: ProductType.ICECREAM },
          { name: "Chocolate", type: ProductType.ICECREAM },
          { name: "Hot Fudge", type: ProductType.TOPPING },
          { name: "Sprinkles", type: ProductType.TOPPING },
        ],
      },
      {
        components: [
          { name: "Sugar", type: ProductType.CONE },
          { name: "Vanilla", type: ProductType.ICECREAM },
          { name: "Chocolate", type: ProductType.ICECREAM },
          { name: "Sprinkles", type: ProductType.TOPPING },
        ],
      },
      {
        components: [
          { name: "Waffle", type: ProductType.CONE },
          { name: "Vanilla", type: ProductType.ICECREAM },
          { name: "Vanilla", type: ProductType.ICECREAM },
          { name: "Hot Fudge", type: ProductType.TOPPING },
          { name: "Sprinkles", type: ProductType.TOPPING },
        ],
      },
    ],
    totalPrice: 1800,
    timestamp: new Date(),
  },
  {
    cones: [
      {
        components: [
          { name: "Sugar", type: ProductType.CONE },
          { name: "Vanilla", type: ProductType.ICECREAM },
          { name: "Sprinkles", type: ProductType.TOPPING },
        ],
      },
      {
        components: [
          { name: "Sugar", type: ProductType.CONE },
          { name: "Vanilla", type: ProductType.ICECREAM },
          { name: "Sprinkles", type: ProductType.TOPPING },
        ],
      },
    ],
    totalPrice: 1000,
    timestamp: new Date(),
  },
];

export default () => {
  axios.get(`${BACKEND_URL_DEV}/employee/drones`).then((response) => {
    console.log(response);
  });
  return dummyData;
};