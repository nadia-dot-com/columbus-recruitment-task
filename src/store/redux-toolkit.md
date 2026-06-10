## Redux Toolkit

# 0

```js
//poza React
store.subscribe(() => console.log(store.getState()));

//debug / niskopoziomowo
store.dispatch(incremented());
```

# 1. Provider

```js
    <Provider store={store}>
    {children}
    <Provider/>
```

# 2. Store

```js
export type RootState = ReturnType<typeof store.getState>

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
});
```

# 3. Slice

```js
type CartState = CartItem[];

const initialCart: CartState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialCart,
  reducers: {
    addToCart: (
      state: CartState,
      action: PayloadAction<{ product: Product; quantity?: number }>,
    ) => {
      console.log("Data send to API");

      const { product, quantity } = action.payload;

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

      return [...state, { ...product, quantity: quantity ?? 1 }];
    },

    deleteFromCart: (
      state: CartState,
      action: PayloadAction<{ articleNumber: string }>,
    ) => {
      const { [action.payload.articleNumber]: deletedCartItem, ...restState } =
        keyBy(state, "articleNumber");

      return Object.values(restState);
    },
  },
});

//Redux Toolkit automatycznie zamienia każdy reducer
// na action creator i wrzuca je do:
export const {addToCart, deleteFromCart} = cartSlice.actions;
```

# 4. use

```js
<Provider store={store}>
        {children}
</Provider>

const dispatch = useDispatch();
dispatch(addToCart({ product }));

 const cart = useSelector((state: RootState) => state.cart);
```
