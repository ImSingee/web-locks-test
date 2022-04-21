function output(message) {
  document.getElementById('output').textContent += message + '\n';
}

(async function() {
  const results = await navigator.locks.query();
  output(JSON.stringify(results, null, 2));

  const worker = new Worker('./locks-worker.js');
  worker.addEventListener('message', function({ data }) {
    output(data);
  });
  
  // @ts-ignore
  navigator.locks.request('window-lock', function() {
    output('lock acquired from window');
  
    return new Promise(resolve => {
      // Don't release the lock.
    });
  });
})();
