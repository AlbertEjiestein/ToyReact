class ElementWrapper {
  constructor(type) {
    this.root = document.createElement(type);
  }
  setAttribute(name, value) {
    this.root.setAttribute(name, value);
  }
  appendChild(child) {
    this.root.appendChild(child.root);
  }
}

class TextWrapper {
  constructor(content) {
    this.root = document.createTextNode(content);
  }
}

export class Component {
  constructor() {
    this._root = null;
    this.props = Object.create(null); // 由于自定义组件无法使用setAttribute设置属性，因此使用props保存起来然后让其子元素使用
    this.children = []; // 同样，自定义组件无法使用appendChild元素，因此暂时保存
  }
  setAttribute(name, value) {
    this.props[name] = value;
  }
  appendChild(component) {
    this.children.push(component);
  }
  get root() {
    if(!this._root) {
      this._root = this.render().root;
    }
    return this._root;
  }
}

export function createElement(type, attributes, ...children) {
  let e;
  if(typeof type === "string") {
    e = new ElementWrapper(type);
  } else {
    e = new type();
  }
  for(let name in attributes) {
    e.setAttribute(name, attributes[name]);
  }
  let insertChildren = children => {
    for(let child of children) {
      if(typeof child === "string") {
        child = new TextWrapper(child);
      }
      if(typeof child === "object" && child instanceof Array) {
        insertChildren(child);
      } else {
        e.appendChild(child);
      }
    }
  }
  insertChildren(children);
  
  return e;
}

export function render(component, parentComponent) {
  parentComponent.appendChild(component.root);
}