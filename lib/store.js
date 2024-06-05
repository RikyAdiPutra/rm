import { create } from "zustand";
import _ from "lodash";

export const useStore = create((set) => ({
  cart: [],
  updateCart: (itemId, cartValue, name, img, total) =>
    set((state) => {
      const itemIndex = _.findIndex(state.cart, { id: itemId });

      if (itemIndex !== -1) {
        const updateCart = [...state.cart];
        updateCart[itemIndex] = {
          id: itemId,
          name: name,
          price: cartValue,
          img: img,
          total: total,
          totalPriceItem: cartValue * total,
        };
        return {
          cart: updateCart,
        };
      }
      return {
        cart: [
          ...state.cart,
          {
            id: itemId,
            name: name,
            price: cartValue,
            img: img,
            total: total,
            totalPriceItem: cartValue * total,
          },
        ],
      };
    }),
  test: () => console.log("test"),
}));
