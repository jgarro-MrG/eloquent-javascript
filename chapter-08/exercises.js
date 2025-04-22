/*
RETRY
Say you have a function primitiveMultiply that in 20 percent of cases multiplies two numbers
and in the other 80 percent of cases raises an exception of type MultiplicatorUnitFailure. 

Write a function that wraps this clunky function and just keeps trying until a call succeeds,
after which it returns the result.

Make sure you handle only the exceptions you are trying to handle.
*/

class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
    for (;;) {
        try {
          return primitiveMultiply(a, b);
        } catch (e) {
          if (!(e instanceof MultiplicatorUnitFailure))
            throw e;
        }
    }
}

// console.log(reliableMultiply(8, 8));
// → 64


// THE LOCKED BOX
const box = new class {
    locked = true;
    #content = []; //  It is a box with a lock. 
  
    unlock() { this.locked = false; }
    lock() { this.locked = true;  }
    get content() {
      if (this.locked) throw new Error("Locked!");
      return this.#content;
    }
  };
  /*
  There is an array in the box, but you can get at it only when the box is unlocked.
  Write a function called withBoxUnlocked that:
  - takes a function value as argument, 
  - unlocks the box, 
  - runs the function, and then 
  - ensures that the box is locked again before returning, 
  - regardless of whether the argument function returned normally or threw an exception.
  For extra points, 
    - make sure that if you call withBoxUnlocked when the box is already unlocked, the box stays unlocked.
  */  
  function withBoxUnlocked(body) {
    let locked = box.locked;
    if (locked) box.unlock();
      try {
        return body();
      } finally {
        if (locked) box.lock();
      }

  }
  
  withBoxUnlocked(() => {
    box.content.push("gold piece");
  });
  
  try {
    withBoxUnlocked(() => {
      throw new Error("Pirates on the horizon! Abort!");
    });
  } catch (e) {
    console.log("Error raised: " + e);
  }
  console.log(box.locked);
  // → true