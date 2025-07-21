console.log('KASC Clone Loaded');
function respondToSelection() {
  const messages = document.getElementById('chatbot-messages');
  const option = document.getElementById('chat-options').value;
  let response = '';

  switch (option) {
    case 'about':
      response = "Kongu Arts and Science College is a co-educational institution in Erode affiliated to Bharathiar University.";
      break;
    case 'courses':
      response = "Courses offered include B.Sc., BCA, B.Com., MCA, MBA and more in Arts and Science streams.";
      break;
    case 'admission':
      response = "For admission inquiries, visit: https://forms.gle/wNDRwLEiRfH7cvz86";
      break;
    case 'results':
      response = "You can check results at: https://kasc.ac.in/eseresults/";
      break;
    case 'contact':
      response = "Call 0424-2339933 or email helpdesk@kasc.ac.in";
      break;
    
  case 'infrastructure':
    response = `<ul>
      <li>Computer Centers</li>
      <li>Media Center</li>
      <li>Hostels: Boys and Girls</li>
      <li>Transport Facilities</li>
      <li>Library</li>
      <li>Sports & Physical Education</li>
    </ul>`;
    break;
  case 'activities':
    response = `<ul>
      <li>NSS, NCC, Youth Red Cross</li>
      <li>Cyber Club, ECO Club, Ethics Club</li>
      <li>Quiz Club, Fine Arts Club, Rotaract</li>
      <li>Entrepreneurship & Innovation Cells</li>
      <li>Women Development Cell, Alumni Association</li>
    </ul>`;
    break;

    default:
      response = "I'm not sure how to respond to that.";
  }

  messages.innerHTML += `<div><strong>User:</strong> ${option}</div>`;
  messages.innerHTML += `<div><strong>Bot:</strong> ${response}</div>`;
  messages.scrollTop = messages.scrollHeight;
}

function toggleChatbot() {
  const container = document.getElementById('chatbot-container');
  container.style.display = (container.style.display === 'none' || container.style.display === '') ? 'block' : 'none';
}

function toggleChatbot() {
  const container = document.getElementById('chatbot-container');
  container.style.display = (container.style.display === 'none' || container.style.display === '') ? 'block' : 'none';
}

function respondToSelection() {
  const messages = document.getElementById('chatbot-messages');
  const option = document.getElementById('chat-options').value;
  let response = '';

  switch (option) {
    case 'about':
      response = `<ul>
        <li><strong>The Trust:</strong> Kongu Vellalar Institute of Technology Trust</li>
        <li><strong>Office Bearers:</strong> Chairman, Secretary, Treasurer, and Executive Members</li>
        <li><strong>Governing Council:</strong> Includes academic and administrative leaders</li>
        <li><strong>Academic Council:</strong> Regulates curriculum and academic standards</li>
        <li><strong>Rules:</strong> Code of conduct for students and staff</li>
      </ul>`;
      break;
    case 'courses':
      response = `<ul>
        <li>B.Sc. Computer Science</li>
        <li>BCA - Computer Applications</li>
        <li>B.Com. (General / CA)</li>
        <li>BBA, BBA (CA)</li>
        <li>B.Sc. Mathematics, Biotech, Biochem, Fashion, Catering, Psychology</li>
        <li>M.Sc., M.Com., MCA, MBA</li>
        <li>Ph.D. and M.Phil Programs</li>
      </ul>`;
      break;
    case 'admission':
      response = "For admission inquiries, visit: <a href='https://forms.gle/wNDRwLEiRfH7cvz86' target='_blank'>Admission Form</a>";
      break;
    case 'results':
      response = "You can check results at: <a href='https://kasc.ac.in/eseresults/' target='_blank'>Exam Results</a>";
      break;
    case 'contact':
      response = "📞 Call: 0424-2339933<br>📧 Email: helpdesk@kasc.ac.in";
      break;
    
  case 'infrastructure':
    response = `<ul>
      <li>Computer Centers</li>
      <li>Media Center</li>
      <li>Hostels: Boys and Girls</li>
      <li>Transport Facilities</li>
      <li>Library</li>
      <li>Sports & Physical Education</li>
    </ul>`;
    break;
  case 'activities':
    response = `<ul>
      <li>NSS, NCC, Youth Red Cross</li>
      <li>Cyber Club, ECO Club, Ethics Club</li>
      <li>Quiz Club, Fine Arts Club, Rotaract</li>
      <li>Entrepreneurship & Innovation Cells</li>
      <li>Women Development Cell, Alumni Association</li>
    </ul>`;
    break;

    default:
      response = "Please select a valid option.";
  }

  messages.innerHTML += `<div><strong>User:</strong> ${option}</div>`;
  messages.innerHTML += `<div><strong>Bot:</strong><br>${response}</div>`;
  messages.scrollTop = messages.scrollHeight;
}
