// @ts-nocheck
navigator.locks.request('lock-powersync-26osex953j36.db', function() {
  postMessage('lock acquired from worker');

  return new Promise(resolve => {
    // Don't release the lock.
  });
});
