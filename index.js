class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    if (!this.root) {
      this.root = new Node(value)
    }
    else {
      let currentNode = this.root;
      while (true) {
        if (currentNode.value > value) {
          if (!currentNode.left) {
            currentNode.left = new Node(value)
            return this
          }
          currentNode = currentNode.left;
        }
        else {
          if (!currentNode.right) {
            currentNode.right = new Node(value)
            return this
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  lookup(value) {
    //O(log(n))
    if (!this.root) {
      return null
    }
    let currentNode = this.root;
    while (true) {
      if (currentNode.value === value) {
        return currentNode
      }
      if (!currentNode.right && !currentNode.left) {
        return null
      }
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      }
      else {
        currentNode = currentNode.right;
      }
    }
  }
  remove(value) {
    let currentNode = this.root;
    let parentNode = null;
    while (true) {
      if (!currentNode) {
        return null
      }
      if (currentNode.value === value) {
        let parent2;
        let curr2;
        if (currentNode.right) {
          parent2 = currentNode;
          curr2 = currentNode.right;
          if (curr2.left) {
            while (true) {
              if (curr2.left) {
                parent2 = curr2;
                curr2 = curr2.left;
              }
              else {
                parent2.left = null;
                break;
              }
            }
          }
          else {
            parent2.right = null
          }
        }
        else if (currentNode.left) {
          parent2 = currentNode;
          curr2 = currentNode.left;
          if (curr2.right) {
            while (true) {
              if (curr2.right) {
                parent2 = curr2;
                curr2 = curr2.right;
              }
              else {
                parent2.right = null;
                break;
              }
            }
          }
          else {
            parent2.left = null
          }
        }
        else {
          if (parentNode.left === currentNode) {
            parentNode.left = null
          }
          else {
            parentNode.right = null
          }
          return this
        }
        curr2.left = currentNode.left;
        curr2.right = currentNode.right;
        currentNode = curr2;
        if (currentNode.value > parentNode.value) {
          parentNode.right = currentNode;
        }
        else {
          parentNode.left = currentNode;
        }
        console.log(currentNode);
        return this
      }
      else if (currentNode.value > value) {
        parentNode = currentNode
        currentNode = currentNode.left
      }
      else {
        parentNode = currentNode
        currentNode = currentNode.right
      }
    }
  }
  // remove
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)

tree.insert(170)
tree.insert(30)
tree.insert(200)
tree.insert(15)
console.log(tree.lookup(170))
tree.insert(1)
console.log(JSON.stringify(traverse(tree.root)))
console.log(tree.remove(170))
console.log(JSON.stringify(traverse(tree.root)))
//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}





