// @ts-nocheck
navigator.locks.request('worker-lock', function() {
  postMessage('lock acquired from worker');

  return new Promise(resolve => {
    // Don't release the lock.
  });
});