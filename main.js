// Navigation and Tab logic (from before)
function showSection(id) {
  document.querySelectorAll('main section').forEach(
    s => s.classList.remove('active')
  );
  document.getElementById(id).classList.add('active');
  document.getElementById('source-section').classList.remove('active');
}
function showSourceSection() {
  document.querySelectorAll('main section').forEach(
    s => s.classList.remove('active')
  );
  document.getElementById('source-section').classList.add('active');
}
function hideSourceSection() {
  document.getElementById('source-section').classList.remove('active');
  showSection('home');
}
function showTab(tab, btn) {
  document.querySelectorAll('.source-tab-content').forEach(
    t => t.classList.remove('active')
  );
  document.getElementById('tab-' + tab).classList.add('active');
  document.querySelectorAll('.source-tab-btn').forEach(
    b => b.classList.remove('active')
  );
  btn.classList.add('active');
}

// Image upload logic for Project Photos
document.addEventListener('DOMContentLoaded', function () {
  const addPhotoBtn = document.getElementById('add-photo-btn');
  const photoInput = document.getElementById('photo-input');
  const photoGallery = document.getElementById('photo-gallery');

  if (addPhotoBtn && photoInput && photoGallery) {
    addPhotoBtn.addEventListener('click', function () {
      photoInput.value = ""; // reset to allow same file multiple times
      photoInput.click();
    });

    photoInput.addEventListener('change', function (event) {
      const files = event.target.files;
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (!file.type.startsWith('image/')) continue;
        const reader = new FileReader();
        reader.onload = function (e) {
          const img = document.createElement('img');
          img.src = e.target.result;
          img.alt = 'Project Photo';
          photoGallery.appendChild(img);
        };
        reader.readAsDataURL(file);
      }
    });
  }
});
