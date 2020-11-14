import { createElement,  Component, render } from './toy-react'

class Mycomponent extends Component {
  render() {
    return <div>
      <div>my component</div>
      {this.children}
    </div>
  }
}

// let a = <div id="a" class="b">
//   <div>aaa</div>
//   <div>bbb</div>
//   <div>ccc</div>
// </div>

// document.body.appendChild(a)

let a = <Mycomponent id="a" class="b">
  <div>aaa</div>
  <div>bbb</div>
  <div>ccc</div>
</Mycomponent>;

render(a, document.body);