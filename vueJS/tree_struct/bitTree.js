function Node(value) {
    this.value = value;
    this.leftNode = null;
    this.rightNode = null;  
}


/**
 * 二叉搜索树
 * 1、二叉搜索树规则为左侧节点值需要小于中间节点值，右侧需要大于中间节点值，因此适于查询搜索
 * @param {*} value
 */
function BTree(value) {
  this.root = new Node(value);
}

/**
 * 添加节点
 * 1、首先判断，当前节点value是否大于传入的value，大于放在右侧，小于放在左侧
 * 2、然后判断当前节点的左右节点是否为空，如果为空则直接当前节点创建一个新的node
 * @param {*} value
 */
BTree.prototype.add = function (value) {
  if (value >= this.root.value) {
      if (this.root.rightNode == null) {
            this.root.rightNode = new Node(value)
      }
  } else {
    if (this.root.leftNode == null) {
        this.root.leftNode = new Node(value)
    }
  }
};

let bTree = new BTree(10);
bTree.add(12)
bTree.add(9)

// let leftNode = new BTree(8);

// let rightNode = new BTree(12);

// bTree.leftNode = leftNode;
// bTree.rightNode = rightNode;

console.log("djxc", bTree);
