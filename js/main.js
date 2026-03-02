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

// Sample student results database
const studentResults = {
  '0000000001': {
    name: 'Okwuegbulem Sunday',
    class: 'SS3A',
    term: '2nd Term 2025',
    subjects: [
      { subject: 'Mathematics', score: 90, grade: 'A' },
      { subject: 'English Language', score: 100, grade: 'A' },
      { subject: 'Biology', score: 100, grade: 'A' },
      { subject: 'Chemistry', score: 100, grade: 'A' },
      { subject: 'Physics', score: 100, grade: 'A' },
      { subject: 'Literature', score: 100, grade: 'A' },
      { subject: 'History', score: 100, grade: 'A' }
    ]
    
  },
  '0000000002': {
    name: 'Okwuegbulem Marvellous',
    class: 'SS3B',
    term: '2nd Term 2025',
    subjects: [
      { subject: 'Mathematics', score: 100, grade: 'A' },
      { subject: 'English Language', score: 80, grade: 'A' },
      { subject: 'Biology', score: 75, grade: 'B' },
      { subject: 'Chemistry', score: 81, grade: 'A' },
      { subject: 'Physics', score: 77, grade: 'B' },
      { subject: 'Government', score: 83, grade: 'A' },
      { subject: 'Economics', score: 79, grade: 'A' }
    ]
  },
  '0000000003': {
    name: 'Fowode Success Bisola',
    class: 'SS2A',
    term: '2nd Term 2025',
    subjects: [
      { subject: 'Mathematics', score: 90, grade: 'A' },
      { subject: 'English Language', score: 87, grade: 'A' },
      { subject: 'Biology', score: 86, grade: 'A' },
      { subject: 'Chemistry', score: 84, grade: 'A' },
      { subject: 'Physics', score: 88, grade: 'A' },
      { subject: 'Agricultural Science', score: 82, grade: 'A' }
    ]
    
  }
};
document.addEventListener('DOMContentLoaded', () => {
  ajaxForm(document.getElementById('contact-form'), '/contact');
  ajaxForm(document.getElementById('login-form'), '/login');
  ajaxForm(document.getElementById('signup-form'), '/signup');

  const resultsForm = document.getElementById('results-form');
  if (resultsForm) {
    resultsForm.addEventListener('submit', e => {
      e.preventDefault();
      const roll = document.getElementById('roll').value;
      const outputDiv = document.getElementById('results-output');
      
      if (studentResults[roll]) {
        const result = studentResults[roll];
        let html = `
          <div style="background: #f5f5f5; padding: 1.5rem; border-radius: 8px; margin-top: 1.5rem;">
            <h3 style="color: #102770; margin-top: 0;">Your Results</h3>
            <p><strong>Name:</strong> ${result.name}</p>
            <p><strong>Class:</strong> ${result.class}</p>
            <p><strong>Term:</strong> ${result.term}</p>
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
              <thead style="background: #102770; color: #fff;">
                <tr>
                  <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Subject</th>
                  <th style="padding: 0.75rem; text-align: center; border: 1px solid #ddd;">Score</th>
                  <th style="padding: 0.75rem; text-align: center; border: 1px solid #ddd;">Grade</th>
                </tr>
              </thead>
              <tbody>
        `;
        
        result.subjects.forEach(item => {
          const gradeColor = item.grade === 'A' ? '#28a745' : (item.grade === 'B' ? '#ffc107' : '#dc3545');
          html += `
            <tr>
              <td style="padding: 0.75rem; border: 1px solid #ddd;">${item.subject}</td>
              <td style="padding: 0.75rem; border: 1px solid #ddd; text-align: center;">${item.score}</td>
              <td style="padding: 0.75rem; border: 1px solid #ddd; text-align: center; color: ${gradeColor}; font-weight: bold;">${item.grade}</td>
            </tr>
          `;
        });
        
        html += `
              </tbody>
            </table>
          </div>
        `;
        outputDiv.innerHTML = html;
      } else {
        outputDiv.innerHTML = '<p style="color: red; margin-top: 1rem;"><strong>Error:</strong> No results found for roll number ' + roll + '. Please check and try again.</p>';
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