document.addEventListener('DOMContentLoaded', function() {
    const notepadText = document.getElementById('notepadText');
    const saveButton = document.getElementById('saveButton');
    const savedNotes = document.getElementById('savedNotes');
  
    chrome.storage.sync.get(['notes'], function(result) {
      if (result.notes) {
        const notes = result.notes;
        notes.forEach(note => {
          const listItem = document.createElement('li');
          listItem.textContent = note;
          savedNotes.appendChild(listItem);
        });
      }
    });
  
    saveButton.addEventListener('click', function() {
      const textToSave = notepadText.value;
  
      chrome.storage.sync.get(['notes'], function(result) {
        const notes = result.notes || [];
        notes.push(textToSave);
        chrome.storage.sync.set({ 'notes': notes }, function() {
          alert('Note saved successfully!');
          savedNotes.innerHTML = ''; // Clear the existing list
          notes.forEach(note => {
            const listItem = document.createElement('li');
            listItem.textContent = note;
            savedNotes.appendChild(listItem);
          });
        });
      });
    });
  });
  