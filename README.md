# another-redux
Another redux

- Not-a-library/framework (TM)
- Rx for stream manipulation with many abilities including:
  + `denounce`, `throttle`, `distinctUntilChanged` etc
  + Reducers can be added/removed on demand, e.g. `compositeSubscription.add` in `componentWillMount` and  `compositeSubscription.clear` `componentDidUnmount`
- Class based action instead of the weirdness `{ type, payload }`
