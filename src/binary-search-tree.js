const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Tree {
  constructor(data) {
      this.data = data;
      this.leftTree = null;
      this.rightTree = null;
  }
}



class BinarySearchTree {
  constructor() {
      this.rootTree = null;
  }
  root() {
      return this.rootTree;
  }

  add(data) {

      const addData = (node, data) => { 
          if (!node) return new Tree(data) 

          if (node.data === data) return node.data 

          if (node.data > data) { 
              node.leftTree = addData(node.leftTree, data)
          } else {
              node.rightTree = addData(node.rightTree, data)
          }
          return node;
      }

      this.rootTree = addData(this.rootTree, data);  

  }

  has(data) {
      const searchValue = (node, data) => { 
          if (!node) return false 
          if (node.data === data) return true 

          if (node.data > data) {
              return searchValue(node.leftTree, data)
          } else {
              return searchValue(node.rightTree, data)
          }
      }
      return searchValue(this.rootTree, data) 
  }

  find(data) {
      const findValue = (node, data) => {
          if (!node) return null;
          if (node.data === data) return node;

          if (node.data > data) {
              return findValue(node.leftTree, data)
          } else {
              return findValue(node.rightTree, data)
          }
      }
      return findValue(this.rootTree, data);
  }

  remove(data) {

      const deleteValue = (node, data) => {
          if (!node) return null 

          if (node.data > data) {
              node.leftTree = deleteValue(node.leftTree, data) 
              return node; 
          } else if (node.data < data) {
              node.rightTree = deleteValue(node.rightTree, data)
              return node;
          } else { 
              if (!node.leftTree && !node.rightTree) return null 
              


              if (!node.leftTree) {
                  node = node.rightTree 
                  return node
              }
              if (!node.rightTree) {
                  node = node.leftTree  
                  return node
              }
               
              let minNodeRightTree = node.rightTree;
              while (minNodeRightTree.leftTree) {
                  minNodeRightTree = minNodeRightTree.leftTree
              }
              node.data = minNodeRightTree.data

              node.rightTree = deleteValue(node.rightTree, minNodeRightTree.data)

              return node;
          }
      }

      this.root = deleteValue(this.rootTree, data)
  }

  min() {
      if (!this.rootTree) return null;

      let min = this.rootTree;
      while (min.leftTree) { 
          min = min.leftTree
      }

      return min.data;
  }

  max() {
      if (!this.rootTree) return null;

      let max = this.rootTree;
      while (max.rightTree) {
          max = max.rightTree
      }
      return max.data
  }
}

module.exports = {
  BinarySearchTree
};