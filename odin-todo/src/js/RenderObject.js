class RenderObject {

  constructor() {
    if (this.constructor == RenderObject) {
      throw new Error("Abstract classes can't be instantiated.");
    }
  }

  render() {
    throw new Error("Method 'say()' must be implemented.");
  }

}