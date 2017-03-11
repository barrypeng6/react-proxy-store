# React Proxy Store

Reactjs reactive store with ES6 Proxy 🔥🔥🔥

## Installation

```command
> npm install react-proxy-store
```

## Usage

```javascript
// choose one
const ObserverState = require('react-proxy-store') //es5
import ObserverState from 'react-proxy-store' //es6

class App extends Component {
  constructor() {
    super();

    const initialState = {
      num: 0
    }
    this.state = Observer(initialState, this.update.bind(this))
  }
  update() {
    this.forceUpdate()
  }
  componentDidMount() {
    this.state.num = 1  
  }
  render() {
    return (
      <div>{ this.state.num }</div>
    )
  }
}
// re-render and num = 1
```

## License

MIT
