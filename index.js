class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
this.items.push(item);
this.items.sort(function(a, b) {return a - b});
  }

  get(pos) {
    if (this.items[pos]) return this.items[pos];
    else throw new Error('OutOfBounds');
  }


  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;

const sortedList = new SortedList();
sortedList.add(4) 
sortedList.add(3)
console.log(sortedList.items)  
//console.log(sortedList.get(5))
console.log(sortedList.get(0))
//console.log(sortedList.length)