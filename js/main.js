// JavaScript for interactive behavior: form submission handlers

function ajaxForm(form, url, method='POST') {
  if (!form) return;
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const data = new FormData(form);
    const opts = { method };
    if (method.toUpperCase() === 'POST') {
      opts.body = data;
    }
    try {
      const res = await fetch(url + (method.toUpperCase()==='GET'?('?'+new URLSearchParams(data)):''), opts);
      const text = await res.text();
      alert(text);
    } catch (err) {
      console.error('Request failed', err);
      alert('An error occurred');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  ajaxForm(document.getElementById('contact-form'), '/contact');
  ajaxForm(document.getElementById('login-form'), '/login');
  ajaxForm(document.getElementById('signup-form'), '/signup');

  const resultsForm = document.getElementById('results-form');
  if (resultsForm) {
    resultsForm.addEventListener('submit', async e => {
      e.preventDefault();
      const roll = document.getElementById('roll').value;
      try {
        const res = await fetch('/results?roll='+encodeURIComponent(roll));
        if (res.ok) {
          const data = await res.json();
          document.getElementById('results-output').innerHTML = '<h3>Your Results</h3><pre>'+JSON.stringify(data,null,2)+'</pre>';
        } else if (res.status === 400) {
          const msg = await res.text();
          document.getElementById('results-output').innerHTML = '<p style="color:red;">'+msg+'</p>';
        } else {
          document.getElementById('results-output').innerHTML = '<p>No results found</p>';
        }
      } catch (err) {
        console.error(err);
        document.getElementById('results-output').innerHTML = '<p>Error fetching results</p>';
      }
    });
  }
  // menu toggle
  const menuBtn = document.getElementById('menu-toggle');
  const mainNav = document.getElementById('main-nav');
  if (menuBtn && mainNav) {
    menuBtn.addEventListener('click', () => {
      mainNav.classList.toggle('hidden');
      menuBtn.classList.toggle('open');
    });
  }

  // animate stats numbers (homepage only)
  const stats = document.querySelectorAll('#stats .number');
  if (stats.length) {
    stats.forEach(el => {
      const target = +el.dataset.target;
      let count = 0;
      const step = Math.ceil(target / 100);
      const interval = setInterval(() => {
        count += step;
        if (count >= target) {
          el.textContent = target;
          clearInterval(interval);
        } else {
          el.textContent = count;
        }
      }, 15);
    });
  }
});