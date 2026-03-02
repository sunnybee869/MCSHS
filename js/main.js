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
      { subject: 'Biology', score: 74, grade: 'B' },
      { subject: 'Chemistry', score: 81, grade: 'A' },
      { subject: 'Physics', score: 80, grade: 'A' },
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
    
  },
  '0000000004': {
    name: 'Adeyemi Elizabeth Folake',
    class: 'SS1B',
    term: '1st Term 2025',
    subjects: [
      { subject: 'Mathematics', score: 78, grade: 'B' },
      { subject: 'English Language', score: 85, grade: 'A' },
      { subject: 'Biology', score: 72, grade: 'B' },
      { subject: 'Chemistry', score: 68, grade: 'C' },
      { subject: 'Physics', score: 75, grade: 'B' },
      { subject: 'Agricultural Science', score: 80, grade: 'A' }
    ]
  },
  '0000000005': {
    name: 'Okafor Chukwuemeka',
    class: 'SS3A',
    term: '2nd Term 2025',
    subjects: [
      { subject: 'Mathematics', score: 95, grade: 'A' },
      { subject: 'English Language', score: 88, grade: 'A' },
      { subject: 'Biology', score: 91, grade: 'A' },
      { subject: 'Chemistry', score: 89, grade: 'A' },
      { subject: 'Physics', score: 94, grade: 'A' },
      { subject: 'Government', score: 86, grade: 'A' },
      { subject: 'Economics', score: 92, grade: 'A' }
    ]
  },
  '0000000006': {
    name: 'Williams Sarah Jane',
    class: 'SS2C',
    term: '1st Term 2025',
    subjects: [
      { subject: 'Mathematics', score: 65, grade: 'C' },
      { subject: 'English Language', score: 70, grade: 'B' },
      { subject: 'Biology', score: 68, grade: 'C' },
      { subject: 'Chemistry', score: 62, grade: 'C' },
      { subject: 'Physics', score: 60, grade: 'C' },
      { subject: 'Literature', score: 75, grade: 'B' }
    ]
  },
  '0000000007': {
    name: 'Bello Amina Oluwaseun',
    class: 'SS1A',
    term: '2nd Term 2025',
    subjects: [
      { subject: 'Mathematics', score: 82, grade: 'A' },
      { subject: 'English Language', score: 79, grade: 'B' },
      { subject: 'Biology', score: 85, grade: 'A' },
      { subject: 'Chemistry', score: 78, grade: 'B' },
      { subject: 'Physics', score: 80, grade: 'A' },
      { subject: 'Geography', score: 88, grade: 'A' }
    ]
  },
  '0000000008': {
    name: 'Chukwudi Precious Ada',
    class: 'SS3B',
    term: '1st Term 2025',
    subjects: [
      { subject: 'Mathematics', score: 88, grade: 'A' },
      { subject: 'English Language', score: 92, grade: 'A' },
      { subject: 'Biology', score: 85, grade: 'A' },
      { subject: 'Chemistry', score: 90, grade: 'A' },
      { subject: 'Physics', score: 87, grade: 'A' },
      { subject: 'Government', score: 94, grade: 'A' },
      { subject: 'Economics', score: 89, grade: 'A' }
    ]
  },
  '0000000009': {
    name: 'Okonkwo Victor Somtochi',
    class: 'SS2B',
    term: '2nd Term 2025',
    subjects: [
      { subject: 'Mathematics', score: 55, grade: 'D' },
      { subject: 'English Language', score: 60, grade: 'C' },
      { subject: 'Biology', score: 58, grade: 'D' },
      { subject: 'Chemistry', score: 52, grade: 'D' },
      { subject: 'Physics', score: 56, grade: 'D' },
      { subject: 'Agricultural Science', score: 62, grade: 'C' }
    ]
  },
  '0000000010': {
    name: 'Ojo Deborah Toluwanimi',
    class: 'SS1C',
    term: '1st Term 2025',
    subjects: [
      { subject: 'Mathematics', score: 91, grade: 'A' },
      { subject: 'English Language', score: 95, grade: 'A' },
      { subject: 'Biology', score: 88, grade: 'A' },
      { subject: 'Chemistry', score: 85, grade: 'A' },
      { subject: 'Physics', score: 90, grade: 'A' },
      { subject: 'Geography', score: 93, grade: 'A' }
    ]
  },
  '0000000011': {
    name: 'Uche Obinna Gregory',
    class: 'SS3C',
    term: '2nd Term 2025',
    subjects: [
      { subject: 'Mathematics', score: 72, grade: 'B' },
      { subject: 'English Language', score: 68, grade: 'C' },
      { subject: 'Biology', score: 70, grade: 'B' },
      { subject: 'Chemistry', score: 65, grade: 'C' },
      { subject: 'Physics', score: 68, grade: 'C' },
      { subject: 'Government', score: 74, grade: 'B' },
      { subject: 'Economics', score: 71, grade: 'B' }
    ]
  },
  '0000000012': {
    name: 'Nnamdi Faith Chidinma',
    class: 'SS2A',
    term: '1st Term 2025',
    subjects: [
      { subject: 'Mathematics', score: 84, grade: 'A' },
      { subject: 'English Language', score: 81, grade: 'A' },
      { subject: 'Biology', score: 79, grade: 'B' },
      { subject: 'Chemistry', score: 82, grade: 'A' },
      { subject: 'Physics', score: 78, grade: 'B' },
      { subject: 'Literature', score: 86, grade: 'A' }
    ]
  },
  '0000000013': {
    name: 'Ogbonna Joshua Ebuka',
    class: 'SS1B',
    term: '2nd Term 2025',
    subjects: [
      { subject: 'Mathematics', score: 67, grade: 'C' },
      { subject: 'English Language', score: 72, grade: 'B' },
      { subject: 'Biology', score: 65, grade: 'C' },
      { subject: 'Chemistry', score: 60, grade: 'C' },
      { subject: 'Physics', score: 63, grade: 'C' },
      { subject: 'Geography', score: 70, grade: 'B' }
    ]
  },
  '0000000014': {
    name: 'Abiodun Grace Yetunde',
    class: 'SS3A',
    term: '1st Term 2025',
    subjects: [
      { subject: 'Mathematics', score: 97, grade: 'A' },
      { subject: 'English Language', score: 94, grade: 'A' },
      { subject: 'Biology', score: 92, grade: 'A' },
      { subject: 'Chemistry', score: 96, grade: 'A' },
      { subject: 'Physics', score: 95, grade: 'A' },
      { subject: 'Literature', score: 91, grade: 'A' },
      { subject: 'History', score: 93, grade: 'A' }
    ]
  },
  '0000000015': {
    name: 'Eze Chukwudi Paul',
    class: 'SS2C',
    term: '2nd Term 2025',
    subjects: [
      { subject: 'Mathematics', score: 73, grade: 'B' },
      { subject: 'English Language', score: 77, grade: 'B' },
      { subject: 'Biology', score: 71, grade: 'B' },
      { subject: 'Chemistry', score: 68, grade: 'C' },
      { subject: 'Physics', score: 70, grade: 'B' },
      { subject: 'Agricultural Science', score: 75, grade: 'B' }
    ]
  },
  '0000000016': {
    name: 'Adamu Fatima Jumai',
    class: 'SS1C',
    term: '1st Term 2025',
    subjects: [
      { subject: 'Mathematics', score: 80, grade: 'A' },
      { subject: 'English Language', score: 83, grade: 'A' },
      { subject: 'Biology', score: 78, grade: 'B' },
      { subject: 'Chemistry', score: 75, grade: 'B' },
      { subject: 'Physics', score: 82, grade: 'A' },
      { subject: 'Geography', score: 85, grade: 'A' }
    ]
  },
  '0000000017': {
    name: 'Sanni Hameed Oladipo',
    class: 'SS3B',
    term: '2nd Term 2025',
    subjects: [
      { subject: 'Mathematics', score: 58, grade: 'D' },
      { subject: 'English Language', score: 62, grade: 'C' },
      { subject: 'Biology', score: 55, grade: 'D' },
      { subject: 'Chemistry', score: 50, grade: 'F' },
      { subject: 'Physics', score: 52, grade: 'D' },
      { subject: 'Government', score: 65, grade: 'C' },
      { subject: 'Economics', score: 60, grade: 'C' }
    ]
  },
  '0000000018': {
    name: 'Olumide Racheal Anuoluwapo',
    class: 'SS2B',
    term: '1st Term 2025',
    subjects: [
      { subject: 'Mathematics', score: 89, grade: 'A' },
      { subject: 'English Language', score: 93, grade: 'A' },
      { subject: 'Biology', score: 87, grade: 'A' },
      { subject: 'Chemistry', score: 85, grade: 'A' },
      { subject: 'Physics', score: 91, grade: 'A' },
      { subject: 'Literature', score: 90, grade: 'A' }
    ]
  },
  '0000000019': {
    name: 'Ayodele Michael Oluwafemi',
    class: 'SS1A',
    term: '2nd Term 2025',
    subjects: [
      { subject: 'Mathematics', score: 76, grade: 'B' },
      { subject: 'English Language', score: 80, grade: 'A' },
      { subject: 'Biology', score: 72, grade: 'B' },
      { subject: 'Chemistry', score: 69, grade: 'C' },
      { subject: 'Physics', score: 74, grade: 'B' },
      { subject: 'Geography', score: 78, grade: 'B' }
    ]
  },
  '0000000020': {
    name: 'Ibrahim Amina Bolanle',
    class: 'SS3C',
    term: '1st Term 2025',
    subjects: [
      { subject: 'Mathematics', score: 83, grade: 'A' },
      { subject: 'English Language', score: 87, grade: 'A' },
      { subject: 'Biology', score: 80, grade: 'A' },
      { subject: 'Chemistry', score: 84, grade: 'A' },
      { subject: 'Physics', score: 81, grade: 'A' },
      { subject: 'Government', score: 89, grade: 'A' },
      { subject: 'Economics', score: 86, grade: 'A' }
    ]
  }
};

// Admission status database
const admissionStatus = {
  'APP2025001': {
    name: 'Okwuegbulem Sunday',
    appliedClass: 'SS1',
    department: 'Science',
    applicationDate: '2025-01-15',
    status: 'Accepted',
    admissionNumber: 'MCSHS/2025/001'
  },
  'APP2025002': {
    name: 'Okwuegbulem Marvellous',
    appliedClass: 'SS1',
    department: 'Science',
    applicationDate: '2025-01-18',
    status: 'Accepted',
    admissionNumber: 'MCSHS/2025/002'
  },
  'APP2025003': {
    name: 'Fowode Success Bisola',
    appliedClass: 'SS1',
    department: 'Commercial',
    applicationDate: '2025-01-20',
    status: 'Pending',
    admissionNumber: null
  },
  'APP2025004': {
    name: 'Adeyemi Elizabeth Folake',
    appliedClass: 'SS1',
    department: 'Science',
    applicationDate: '2025-01-22',
    status: 'Accepted',
    admissionNumber: 'MCSHS/2025/003'
  },
  'APP2025005': {
    name: 'Okafor Chukwuemeka',
    appliedClass: 'SS1',
    department: 'Art',
    applicationDate: '2025-01-25',
    status: 'Accepted',
    admissionNumber: 'MCSHS/2025/004'
  },
  'APP2025006': {
    name: 'Williams Sarah Jane',
    appliedClass: 'SS1',
    department: 'Science',
    applicationDate: '2025-01-28',
    status: 'Rejected',
    admissionNumber: null
  },
  'APP2025007': {
    name: 'Bello Amina Oluwaseun',
    appliedClass: 'SS1',
    department: 'Commercial',
    applicationDate: '2025-02-01',
    status: 'Accepted',
    admissionNumber: 'MCSHS/2025/005'
  },
  'APP2025008': {
    name: 'Chukwudi Precious Ada',
    appliedClass: 'SS1',
    department: 'Science',
    applicationDate: '2025-02-03',
    status: 'Pending',
    admissionNumber: null
  },
  'APP2025009': {
    name: 'Okonkwo Victor Somtochi',
    appliedClass: 'SS1',
    department: 'Art',
    applicationDate: '2025-02-05',
    status: 'Accepted',
    admissionNumber: 'MCSHS/2025/006'
  },
  'APP2025010': {
    name: 'Ojo Deborah Toluwanimi',
    appliedClass: 'SS1',
    department: 'Science',
    applicationDate: '2025-02-08',
    status: 'Accepted',
    admissionNumber: 'MCSHS/2025/007'
  },
  'APP2025011': {
    name: 'Uche Obinna Gregory',
    appliedClass: 'SS1',
    department: 'Commercial',
    applicationDate: '2025-02-10',
    status: 'Rejected',
    admissionNumber: null
  },
  'APP2025012': {
    name: 'Nnamdi Faith Chidinma',
    appliedClass: 'SS1',
    department: 'Science',
    applicationDate: '2025-02-12',
    status: 'Accepted',
    admissionNumber: 'MCSHS/2025/008'
  },
  'APP2025013': {
    name: 'Ogbonna Joshua Ebuka',
    appliedClass: 'SS1',
    department: 'Art',
    applicationDate: '2025-02-15',
    status: 'Pending',
    admissionNumber: null
  },
  'APP2025014': {
    name: 'Abiodun Grace Yetunde',
    appliedClass: 'SS1',
    department: 'Science',
    applicationDate: '2025-02-18',
    status: 'Accepted',
    admissionNumber: 'MCSHS/2025/009'
  },
  'APP2025015': {
    name: 'Eze Chukwudi Paul',
    appliedClass: 'SS1',
    department: 'Commercial',
    applicationDate: '2025-02-20',
    status: 'Accepted',
    admissionNumber: 'MCSHS/2025/010'
  },
  'APP2025016': {
    name: 'Adamu Fatima Jumai',
    appliedClass: 'SS1',
    department: 'Science',
    applicationDate: '2025-02-22',
    status: 'Accepted',
    admissionNumber: 'MCSHS/2025/011'
  },
  'APP2025017': {
    name: 'Sanni Hameed Oladipo',
    appliedClass: 'SS1',
    department: 'Art',
    applicationDate: '2025-02-25',
    status: 'Rejected',
    admissionNumber: null
  },
  'APP2025018': {
    name: 'Olumide Racheal Anuoluwapo',
    appliedClass: 'SS1',
    department: 'Science',
    applicationDate: '2025-02-28',
    status: 'Pending',
    admissionNumber: null
  },
  'APP2025019': {
    name: 'Ayodele Michael Oluwafemi',
    appliedClass: 'SS1',
    department: 'Commercial',
    applicationDate: '2025-03-01',
    status: 'Accepted',
    admissionNumber: 'MCSHS/2025/012'
  },
  'APP2025020': {
    name: 'Ibrahim Amina Bolanle',
    appliedClass: 'SS1',
    department: 'Science',
    applicationDate: '2025-03-03',
    status: 'Accepted',
    admissionNumber: 'MCSHS/2025/013'
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
        
        // Calculate average score and determine pass/fail
        const totalScore = result.subjects.reduce((sum, item) => sum + item.score, 0);
        const averageScore = Math.round(totalScore / result.subjects.length);
        const passed = averageScore >= 50;
        
        // Calculate position by comparing with all students
        const allResults = Object.values(studentResults);
        const sortedResults = allResults.map(student => ({
          roll: Object.keys(studentResults).find(key => studentResults[key] === student),
          avg: student.subjects.reduce((sum, item) => sum + item.score, 0) / student.subjects.length
        })).sort((a, b) => b.avg - a.avg);
        
        const position = sortedResults.findIndex(r => r.roll === roll) + 1;
        
        let html = `
          <div style="background: #f5f5f5; padding: 1.5rem; border-radius: 8px; margin-top: 1.5rem;">
            <h3 style="color: #102770; margin-top: 0;">Your Results</h3>
            <p><strong>Name:</strong> ${result.name}</p>
            <p><strong>Class:</strong> ${result.class}</p>
            <p><strong>Term:</strong> ${result.term}</p>
            <p><strong>Position:</strong> ${position} out of ${allResults.length}</p>
            <p><strong>Average Score:</strong> ${averageScore}</p>
            <p><strong>Result:</strong> <span style="color: ${passed ? '#28a745' : '#dc3545'}; font-weight: bold;">${passed ? 'Passed' : 'Failed'}</span></p>
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

  // Admission status check handler
  const admissionForm = document.getElementById('admission-form');
  if (admissionForm) {
    admissionForm.addEventListener('submit', e => {
      e.preventDefault();
      const ref = document.getElementById('ref').value;
      const outputDiv = document.getElementById('admission-output');
      
      if (admissionStatus[ref]) {
        const status = admissionStatus[ref];
        let html = `
          <div style="background: #f5f5f5; padding: 1.5rem; border-radius: 8px; margin-top: 1.5rem;">
            <h3 style="color: #102770; margin-top: 0;">Your Admission Status</h3>
            <p><strong>Name:</strong> ${status.name}</p>
            <p><strong>Applied Class:</strong> ${status.appliedClass}</p>
            <p><strong>Department:</strong> ${status.department}</p>
            <p><strong>Application Date:</strong> ${status.applicationDate}</p>
            <p><strong>Status:</strong> 
        `;
        
        if (status.status === 'Accepted') {
          html += '<span style="color: #28a745; font-weight: bold;">Accepted</span></p>';
          if (status.admissionNumber) {
            html += `<p><strong>Admission Number:</strong> ${status.admissionNumber}</p>`;
          }
        } else if (status.status === 'Rejected') {
          html += '<span style="color: #dc3545; font-weight: bold;">Rejected</span></p>';
        } else {
          html += '<span style="color: #ffc107; font-weight: bold;">Pending</span></p>';
        }
        
        html += '</div>';
        outputDiv.innerHTML = html;
      } else {
        outputDiv.innerHTML = '<p style="color: red; margin-top: 1rem;"><strong>Error:</strong> No admission record found for reference number ' + ref + '. Please check and try again.</p>';
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