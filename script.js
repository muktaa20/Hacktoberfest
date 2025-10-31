function addContributor() {
      const name = document.getElementById('name').value.trim();
      const github = document.getElementById('github').value.trim();
      const list = document.getElementById('contributors');

      if (name && github) {
        const li = document.createElement('li');
        li.innerHTML = `💻 <a href="${github}" target="_blank">${name}</a>`;
        list.appendChild(li);
        document.getElementById('name').value = '';
        document.getElementById('github').value = '';
      } else {
        alert('Please fill out both fields!');
      }
    }