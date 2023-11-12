/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface Generic {
  title: string 
}

class Component <T> {
  constructor (public props:T) {

  }
}

class Page extends Component<Generic> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};