function getCurriedOnLoad(existingScript, callback) {
  const previousOnload = existingScript.onload || (() => {});
  const curriedOnLoad = () => {
    previousOnload();
    callback();
  };

  return curriedOnLoad;
}

export default getCurriedOnLoad;
