/** @class ListNode Linked List Node */
function ListNode(value)
{
    this.value = value;
    this.next = null;
    this.prev = null;
}

/** @class List Linked List */
function List()
{
    this._length = 0;
    this.head = null;
    this.tail = null;

    Object.defineProperty(this, "length", {
      get: function(){
          return this._length;
      }
    });

    this.push = function(value)
    {
        if(this.head == null)
        {
            this.head = new ListNode(value);
            this.tail = this.head;
        }
        else
        {
            var curNode = this.tail;
            curNode.next = new ListNode(value);
            curNode.next.prev = curNode;
            this.tail = curNode.next;
        }

        this._length += 1;

        return true;
    }

    this.removeValue = function(value)
    {
        if(this.head == null)
            return false;

        if(this.head.value == value)
        {
            var node = this.head;
            this.head = this.head.next;
            node = null;
            this._length -= 1;
            return true;
        }

        var curNode = this.head.next;
        while(curNode != null)
        {
            if(curNode.value == value)
            {
                curNode.prev.next = curNode.next;

                console.log(curNode.prev.next);

                if(curNode == this.tail)
                    this.tail = curNode.prev;
                else
                    curNode.next.prev = curNode.prev;

                curNode = null;
                this._length -= 1;
                return true;
            }
            curNode = curNode.next;
        }
        return false;
    }

    /** @function {ListNode} removes the list node if found */
    this.removeNode = function(node)
    {
        if(node == null)
            return false;

        if(node == this.head)
        {
            this.head = this.head.next;
            this.head.prev = null;
            node = null;
            this._length -= 1;
            return true;
        }

        var curNode = this.head.next;
        while(curNode != null)
        {
            if(node == curNode)
            {
                node.prev.next = node.next;
                node = null;
                this._length -= 1;
                return true;
            }
            curNode = curNode.next;
        }

        return false;
    }


    this.eachNode = function(fn)
    {
        var curNode = this.head;
        do
        {
            fn(n);
            curNode = curNode.next;
        }while(curNode != null);

    }

    this.eachValue = function(fn)
    {
        var curNode = this.head;
        while(curNode != null)
        {
            var node = curNode.next;
            fn(curNode.value);
            curNode = node;
        }

    }

    this.log = function(n)
    {
        var curNode = this.head;

        while(curNode != null)
        {
            console.log(curNode.value);
            curNode = curNode.next;
        }
        return true;
    }
}

function TestList()
{
    var l = new List();

    l.push(1);
    l.push(2);
    l.push(3);
    l.push(5);
    l.push(8);
    l.push(13);

    return l;
}