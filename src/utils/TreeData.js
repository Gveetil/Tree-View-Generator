// Represents data in a tree structure
export default class TreeData {
    constructor() {
        this.root = new TreeNode()
    }

    // Adds a child to the tree
    addChild(parentId, id, name, value) {
        // Root node
        if (!parentId || parentId === id) {
            this.root.addChild(id, name, value)
        } else {
            // Find Parent Node
            const parentNode = this.root.findChildById(parentId)
            if (parentNode)
                parentNode.addChild(id, name, value)
        }
    }
}

// Represents a node in the tree
export class TreeNode {
    constructor(parent, id, name, value) {
        this.parent = parent
        this.id = id || 0;
        this.name = name;
        this.value = Number(value) || 0
        this.total = this.value
        this.childNodes = {};
        this.isRoot = parent && parent.id > 0 ? false : true
    }

    // Adds a child to this node
    addChild(childId, name, value) {
        this.childNodes[childId] = new TreeNode(this, childId, name, value)
        this.updateTotal()
    }

    // This method updates the total value for this node
    updateTotal() {
        this.total = this.value
        // Sum up child node values too 
        for (const id in this.childNodes) {
            this.total += this.childNodes[id].total;
        }
        // If a parent exists, update it's total as well
        if (this.parent)
            this.parent.updateTotal()
    }

    // Recursively finds a child node with the given id 
    findChildById(id) {
        const node = this.childNodes[id]
        // Node found
        if (node)
            return node

        // Search within child nodes
        for (const childId in this.childNodes) {
            const result = this.childNodes[childId].findChildById(id)
            // Node found 
            if (result)
                return result
        }
        return null
    }

}