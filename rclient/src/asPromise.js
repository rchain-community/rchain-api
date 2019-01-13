/* global exports */

// @flow

/*::
type Callback<T> = (any, T) => void;
type WithCallback<T> = Callback<T> => void;
 */

exports.asPromise = asPromise;
function asPromise/*:: <T>*/(calling /*: WithCallback<T>*/) /*: Promise<T> */{
  function executor(resolve, reject) {
    const callback = (err, result) => {
      if (err) { reject(err); }
      resolve(result);
    };

    calling(callback);
  }

  return new Promise(executor);
}
