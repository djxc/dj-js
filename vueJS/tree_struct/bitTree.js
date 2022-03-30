
/**
 * 二叉搜索树
 * 1、二叉搜索树规则为左侧节点值需要小于中间节点值，右侧需要大于中间节点值，因此适于查询搜索
 * @param {*} value 
 */
function BTree(value) {
    this.value = value
    this.leftNode = null
    this.rightNode = null   
}

/**
 * 添加节点
 * 1、首先判断，当前节点value是否为空，
 * 2、当前值是否大于当前节点的值，大于放在右侧，小于放在左侧
 * @param {*} value 
 */
BTree.prototype.add = function(value) {
    if (this.value === null) {
        
    } else {
        if (value >= this.value) {
    
        } else {
    
        }
    }
}






let bTree = new BTree(10)

let leftNode = new BTree(8)

let rightNode = new BTree(12)

bTree.leftNode = leftNode;
bTree.rightNode = rightNode
