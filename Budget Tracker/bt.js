document.getElementById('addExpense').addEventListener('click', function() {
    const amount = parseFloat(document.getElementById('amount').value) || 0;
  
    chrome.storage.sync.get(['total'], function(budget) {
      const newTotal = (budget.total || 0) + amount;
      chrome.storage.sync.set({ 'total': newTotal }, function() {
        document.getElementById('total').textContent = newTotal;
      });
    });
  });
  