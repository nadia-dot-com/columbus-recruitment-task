## Redux

# 1 store

```js
//weź typ zwracany przez rootReducer
// (type RootState = {
//   cart: CartState;
// })

export type RootState = ReturnType<typeof rootReducer>;

export const shopStore = createStore(rootReducer);
```

# 2 dodajemy provider i jeden store dla całej apki;

```js
    <Provider store={shopStore}>
    {children}
    <Provider/>
```

# 3 reducer

```js
export const CartAction = {
  ADD_TO_CART: "ADD_TO_CART",
  DELETE_FROM_CART: "DELETE_FROM_CART",
} as const;

type CartState = CartItem[]

export const cartHandlers = {
  [CartAction.ADD_TO_CART]: (
    state: CartState,
    payload: { product: Product; quantity?: number },
  ) => {
    console.log("Data send to API");

    const { product, quantity } = payload;

    const index = state.findIndex(
      (item) => item.articleNumber === product.articleNumber,
    );

    if (index !== -1) {
      const updated = [...state];

      updated[index] = {
        ...updated[index],
        quantity: updated[index].quantity + (quantity ?? 1),
      };
      return updated;
    }

    return [...state, { ...product, quantity: (quantity ?? 1)}];
  },
  [CartAction.DELETE_FROM_CART]: (
    state: CartState,
    payload: { articleNumber: string },
  ) => {
    const { [payload.articleNumber]: deletedCartItem, ...restState } = keyBy(
      state,
      "articleNumber",
    );

    return Object.values(restState);
  },
};

export const initialCart: CartState = [];

export const cartReducer = (
  state = initialCart,
  action: { type: keyof typeof CartAction; payload?: any },
) => {
  const handler = cartHandlers[action.type];

  return handler ? handler(state, action.payload) : state;
};
```

# 4 rootReducer

```js
export const rootReducer = combineReducers({
  cart: cartReducer,
});
```

# 5 use

```bash
const dispatch = useDispatch();
dispatch({ type: CartAction.ADD_TO_CART, payload: { product: product } });

const cart = useSelector((state: RootState) => state.cart);
```

## Schemat

- W dużym sklepie nie tworzysz wielu store'ów, tylko dzielisz stan na slices/reducery.

```js
{
  cart: {
    items: [...]
  },

  user: {
    profile: ...
  },

  products: {
    list: [...]
  },

  checkout: {
    shippingAddress: ...
  }
}
```

- Każda część ma własny reducer:

```js
cartReducer;
userReducer;
productsReducer;
checkoutReducer;
```

- a potem łączysz je:

```js
const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  products: productsReducer,
  checkout: checkoutReducer,
});
```

- i tworzysz jeden store:

```js
const store = createStore(rootReducer);
```
