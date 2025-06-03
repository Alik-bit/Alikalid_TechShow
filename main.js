// Navigation and tab logic
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

// ========== PHOTO GALLERY WITH LOCAL STORAGE ==========
const PHOTO_STORAGE_KEY = 'project_photos_v1';

function getStoredPhotos() {
  try {
    return JSON.parse(localStorage.getItem(PHOTO_STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function storePhotos(photos) {
  localStorage.setItem(PHOTO_STORAGE_KEY, JSON.stringify(photos));
}

function renderPhotoGallery() {
  const gallery = document.getElementById('photo-gallery');
  if (!gallery) return;
  gallery.innerHTML = '';
  const photos = getStoredPhotos();
  photos.forEach((photo, idx) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'photo-item';
    // Image element
    const img = document.createElement('img');
    img.src = photo;
    img.alt = 'Project Photo';
    // Delete button
    const del = document.createElement('button');
    del.className = 'delete-photo-btn';
    del.title = 'Delete photo';
    del.innerHTML = '✕';
    del.onclick = function() {
      deletePhoto(idx);
    };
    wrapper.appendChild(img);
    wrapper.appendChild(del);
    gallery.appendChild(wrapper);
  });
}

function addPhotos(files) {
  let photos = getStoredPhotos();
  let added = false;
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    if (!file.type.startsWith('image/')) continue;
    const reader = new FileReader();
    reader.onload = function(e) {
      photos.push(e.target.result);
      storePhotos(photos);
      renderPhotoGallery();
    };
    reader.readAsDataURL(file);
    added = true;
  }
  // If nothing was added, still refresh to show current photos
  if (!added) renderPhotoGallery();
}

function deletePhoto(idx) {
  let photos = getStoredPhotos();
  photos.splice(idx, 1);
  storePhotos(photos);
  renderPhotoGallery();
}

document.addEventListener('DOMContentLoaded', function () {
  // Photo gallery logic
  const addPhotoBtn = document.getElementById('add-photo-btn');
  const photoInput = document.getElementById('photo-input');

  if (addPhotoBtn && photoInput) {
    addPhotoBtn.addEventListener('click', function () {
      photoInput.value = ""; // reset to allow same file multiple times
      photoInput.click();
    });

    photoInput.addEventListener('change', function (event) {
      addPhotos(event.target.files);
    });
    renderPhotoGallery();
  } else {
    // Defensive: re-render on tab switch in case user navigates
    renderPhotoGallery();
  }
});
