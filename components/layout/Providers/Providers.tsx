"use client"; 

import { Provider } from "react-redux";
import { ErrorTracker } from "@/app/errorTracker";
import { CartProvider } from "@/features/cart/context/CartProvider";
import { store } from "@/redux-toolkit/store";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <Provider store={store}>
      <ErrorTracker />
        {children}
      </Provider>
    </CartProvider>
  );
}