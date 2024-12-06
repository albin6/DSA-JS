// using recursion

function reverseQueue(queue) {
  if (queue.length === 0) {
    return;
  }
  const temp = queue.shift();
  reverseQueue(queue);
  queue.push(temp);
}

const q = [1, 2, 3, 4, 5];
reverseQueue(q);

console.log(q);
