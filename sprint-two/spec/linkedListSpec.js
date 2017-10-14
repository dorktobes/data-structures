describe('linkedList', function() {
  var linkedList;

  beforeEach(function() {
    linkedList = LinkedList();
  });

  it('should have a head and tail', function() {
    expect(linkedList).to.have.property('head');
    expect(linkedList).to.have.property('tail');
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function() {
    expect(linkedList.addToTail).to.be.a('function');
    expect(linkedList.removeHead).to.be.a('function');
    expect(linkedList.contains).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    linkedList.addToTail(4);
    expect(linkedList.tail.value).to.equal(4);
    linkedList.addToTail(5);
    expect(linkedList.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.head.value).to.equal(4);
    linkedList.removeHead();
    expect(linkedList.head.value).to.equal(5);
  });

  it('should return the value of the former head when removeHead is called', function() {
    linkedList.addToTail(4);
    expect(linkedList.removeHead()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.addToTail(7);
    expect(linkedList.contains(4)).to.equal(true);
    expect(linkedList.contains(5)).to.equal(true);
    expect(linkedList.contains(7)).to.equal(true);
    expect(linkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.removeHead();
    expect(linkedList.contains(4)).to.equal(false);
  });
  
  it('should add a node when addToHead is called', function() {
    linkedList.addToTail(1);
    linkedList.addToTail(2);
    linkedList.addToTail(3);
    linkedList.addToHead(7);
    expect(linkedList.contains(7)).to.equal(true);
  });
  it('should add a node to head when addToHead is called', function() {
    linkedList.addToTail(1);
    linkedList.addToTail(2);
    linkedList.addToTail(3);
    linkedList.addToHead(7);
    expect(linkedList.removeHead()).to.equal(7);
  });
  
  it('should return tail when removeTail() is called', function() {
    linkedList.addToTail(1);
    linkedList.addToTail(2);
    linkedList.addToTail(3);
    expect(linkedList.removeTail()).to.equal(3);
  });
  
  it('should not contain tail when removeTail() is called', function() {
    linkedList.addToTail(1);
    linkedList.addToTail(2);
    linkedList.addToTail(3);
    linkedList.removeTail();
    expect(linkedList.contains(3)).to.equal(false);
  });
  it('should add a node to the linked List when insertBehind is called', function() {
    linkedList.addToTail(1);
    linkedList.addToTail(2);
    linkedList.addToTail(3);
    linkedList.insertBehind(2, 4);
    expect(linkedList.contains(4)).to.equal(true);
  });
  it('should place node in appropriate spot when insertBehind is called', function() {
    linkedList.addToTail(1);
    linkedList.addToTail(2);
    linkedList.addToTail(3);
    linkedList.insertBehind(2, 4);
    linkedList.removeTail();
    expect(linkedList.removeTail()).to.equal(4);
  });

  // add more tests here to test the functionality of linkedList
});
