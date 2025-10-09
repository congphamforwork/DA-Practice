function handleInput(val) {
  console.log("Value:", val);
}

const debounce = (callback, delayTime) => {
  let timeOutId;

  return function (...args) {
    clearTimeout(timeOutId);
    timeOutId = setTimeout(() => {
      callback(...args);
    }, delayTime);
  };
};

const debouncedHandleInput = debounce(handleInput, 500);

debouncedHandleInput("aaa");
debouncedHandleInput("bbb");
debouncedHandleInput("ccc");
