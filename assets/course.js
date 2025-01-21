let currentLectureIndex = 0;
let courseData = {};
let prevBtn = document.getElementById('prev-btn')
let nxtBTn = document.getElementById('next-btn')

async function loadCourseDetails() {
  try {
    let response = await fetch('./assets/data.json');
    let data = await response.json();

    let selectedIndex = localStorage.getItem('selectedCourse');
    if (selectedIndex === null) {
      window.location.href = './index.html';
      return;
    }

    courseData = data[selectedIndex];
    renderLectures();
    renderFiles();
    loadLecture(currentLectureIndex);
  } catch (error) {
    console.error('Error loading course details:', error);
    alert('Failed to load course details. Please try again later.');
  }
}

function renderLectures() {
  let lecturesContainer = document.getElementById('lectures');
  lecturesContainer.innerHTML = '';
  courseData.lecturlist.forEach((lecture, index) => {
    let lectureItem = document.createElement('div');
    lectureItem.classList.add('lecture-item');
    lectureItem.innerHTML = `
      <span>${lecture.lecturename}</span>
      <button onclick="loadLecture(${index})" class="logobackground">Play</button>
    `;
    lecturesContainer.appendChild(lectureItem);
  });
}

function renderFiles() {
  let filesContainer = document.getElementById('files');
  filesContainer.innerHTML = '';
  courseData.attachedfiles.forEach((file) => {
    let fileItem = document.createElement('div');
    fileItem.classList.add('file-item');
    fileItem.innerHTML = `
      <span>${file.filename}</span>
      <a href="${file.fileURL}" target="_blank">Download</a>
    `;
    filesContainer.appendChild(fileItem);
  });
}

function loadLecture(index) {
  currentLectureIndex = index;
  let lecture = courseData.lecturlist[index];
  let videoFrame = document.getElementById('video-frame');
  videoFrame.src = lecture.lectureURL;
  if (!lecture.lectureURL) {
    alert('Video URL is not available. Please try another lecture.');
  }
}

prevBtn.addEventListener('click', () => {
  if (currentLectureIndex > 0) {
    loadLecture(--currentLectureIndex);
    prevBtn.disabled = false;
  } else {
    alert('No previous lectures available.');
prevBtn.disabled = true;

  }
});

nxtBTn.addEventListener('click', () => {
  if (currentLectureIndex < courseData.lecturlist.length - 1) {
    loadLecture(++currentLectureIndex);
  } else {
    alert('No more lectures available.');
  }
});

loadCourseDetails();