class Node{
    constructor(v = null, pointer = null){
        this.val=v;
        this.pointer=pointer;
    }
    set value(v){
        this._val=v;
    }
    get value(){
        return this._val;
    }
    set pointer(point){
        this._pointer=point;
    }
    get pointer(){
        return this._pointer;
    }
}

class LinkedList{
    constructor(headNode=null){
        this.headNode=headNode;
    }
    append(val){
        const newNode = new Node(val)
        if(this.headNode == null){
            this.headNode=newNode;
        } else{
            let activeNode = this.headNode;
            while(activeNode.pointer != null){
                activeNode = activeNode.pointer;
            }
            activeNode.pointer = newNode;
        }
    }
    prepend(val){
        const newNode = new Node(val);
        if(this.headNode==null){
            this.headNode=newNode
        } else{
            newNode.pointer = this.headNode;
            this.headNode = newNode;
        }
    }
    size(){
        let counter = 0;
        if(this.headNode != null){
            let activeNode = this.headNode;
            while(activeNode != null){
                counter ++;
                activeNode = activeNode.pointer;
            }
        }
        return counter;
    }
    head(){
        if(this.headNode != null){
            return this.headNode;
        } else{
            return "No Head Node Found";
        }
    }
    tail(){
        if(this.headNode != null){
            let activeNode = this.headNode;
            while(activeNode.pointer != null){
                activeNode = activeNode.pointer;
            }
            return activeNode;
        } else{
            return "No Nodes in this List";
        }
    }
    at(index){
        let counter = 0;
        let activeNode = this.headNode;
        while(counter != index){
            if(activeNode == null){
                return "No Value at Index";
            }
            activeNode = activeNode.pointer;
            counter ++;
        }
        return activeNode;
    }
    pop(){
        let activeNode = this.headNode;
        while(activeNode.pointer.pointer != null){
            activeNode = activeNode.pointer;
        }
        let returnPointer = activeNode.pointer;
        activeNode.pointer = null;
        return returnPointer;
    }
    contains(value){
        let activeNode = this.headNode;
        while(activeNode != null){
            if (activeNode.val == value){
                return true;
            }
            activeNode = activeNode.pointer;
        }
        return false;
    }
    find(value){
        let activeNode = this.headNode;
        let counter=0;
        while(activeNode != null){
            if(activeNode.val == value){
                return counter;
            }
            activeNode = activeNode.pointer;
            counter ++;
        }
        return "Not Found";
    }
    toString(){
        let activeNode = this.headNode;
        let string = `(${activeNode.val})`;
        activeNode = activeNode.pointer;
        while(activeNode != null){
            let newString = ` -> (${activeNode.val})`
            string = string.concat(newString);
            activeNode = activeNode.pointer;
            
        }
        let nullString = ` -> null`;
        string = string.concat(nullString);
        return string;
    }
}

const linkedList = new LinkedList();

linkedList.prepend("John");
linkedList.prepend("Sally");
linkedList.append("Pedro");
linkedList.prepend("Carlotta");
linkedList.size();
console.log(linkedList.toString());