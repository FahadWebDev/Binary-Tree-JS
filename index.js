console.log("------ Start Project ------")

function Node() {
  let value = null;
  let left = null;
  let right = null;
  return { value, left, right }
}

function BinaryTree() {
  let root = null;

  const isEmpty = () => root === null;

  const getRoot = () => root;

  const insertNode = (root, node) => {
    if (node.value < root.value) {
      if (root.left) {
        insertNode(root.left, node)
      }
      else {
        root.left = node
      }
    }
    else if (node.value > root.value) {
      if (root.right) {
        insertNode(root.right, node)
      }
      else {
        root.right = node
      }
    }
  }

  const addNode = (value) => {
    let newNode = new Node();
    newNode.value = value

    if (isEmpty()) {
      root = newNode
    }
    else {
      insertNode(root, newNode)
    }
    return newNode
  }

  const searchByValue = (value, rootNode = root) => {
    if (!rootNode) {
      return "Not Found"
    }
    if (rootNode.value === value) {
      return rootNode
    }
    if (rootNode.value > value) {
      return searchByValue(value, rootNode.left)
    }
    if (rootNode.value > value) {
      return searchByValue(value, rootNode.right)
    }
  }

  const dfsPreOrder = (rootNode = root) => {
    if (rootNode) {
      console.log(rootNode.value)
      dfsPreOrder(rootNode.left)
      dfsPreOrder(rootNode.right)
    }
  }
  const dfsInOrder = (rootNode = root) => {
    if (rootNode) {
      dfsInOrder(rootNode.left)
      console.log(rootNode.value)
      dfsInOrder(rootNode.right)
    }
  }
  const dfsPostOrder = (rootNode = root) => {
    if (rootNode) {
      dfsPostOrder(rootNode.left)
      dfsPostOrder(rootNode.right)
      console.log(rootNode.value)
    }
  }

  const bfs = () => {
    const queue = []
    queue.push(root)

    while (queue.length > 0) {
      const currentNode = queue.shift()
      console.log(currentNode.value)
      if (currentNode.left) {
        queue.push(currentNode.left)
      }
      if (currentNode.right) {
        queue.push(currentNode.right)
      }
    }
  }

  const min = (rootNode = root) => {
    if (rootNode.left) {
      return min(rootNode.left)
    }
    else {
      return rootNode.value
    }
  }

  const max = (rootNode = root) => {
    if (rootNode.right) {
      return max(rootNode.right)
    }
    else {
      return rootNode.value
    }
  }
  return { isEmpty, addNode, getRoot, searchByValue, dfsPreOrder, dfsInOrder, dfsPostOrder, bfs, min, max }

}
const binaryTree = new BinaryTree();

console.log("isEmpty", binaryTree.isEmpty())
console.log("Adding a new node", binaryTree.addNode(5))
console.log("Adding a new node", binaryTree.addNode(4))
console.log("Adding a new node", binaryTree.addNode(3))
console.log("Adding a new node", binaryTree.addNode(2))
console.log("Adding a new node", binaryTree.addNode(10))
console.log("Adding a new node", binaryTree.addNode(12))
console.log("Get Root node", binaryTree.getRoot())
console.log("Search By Value", binaryTree.searchByValue(5))
console.log("Search By Value", binaryTree.searchByValue(4))
console.log("Search By DFS Pre-Order", binaryTree.dfsPreOrder())
console.log("Search By DFS In-Order", binaryTree.dfsInOrder())
console.log("Search By DFS Post-Order", binaryTree.dfsPostOrder())
console.log("Search By BFS", binaryTree.bfs())
console.log("Search Min Value", binaryTree.min())
console.log("Search Max Value", binaryTree.max())