function openPreview(img) {
    const preview = document.getElementById('imagePreview');
    const previewImg = document.getElementById('previewImage');
    const previewInfo = document.getElementById('previewInfo');

    const teamMember = img.closest('.team-member');
    const name = teamMember.querySelector('h3').textContent;
    const role = teamMember.querySelector('p').textContent;
    const description = teamMember.querySelector('p:nth-of-type(2)').textContent;

    previewImg.src = img.src;
    previewInfo.innerHTML = `<h3>${name}</h3><p>${role}</p><p>${description}</p>`;

    setTimeout(() => {
        preview.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }, 50);
}

function closePreview() {
    const preview = document.getElementById('imagePreview');
    preview.style.display = 'none';
    document.body.style.overflow = 'auto';
}

document.addEventListener('DOMContentLoaded', function () {
    const preview = document.getElementById('imagePreview');
    preview.addEventListener('click', function (e) {
        if (e.target === preview) {
            closePreview();
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && preview.style.display === 'flex') {
            closePreview();
        }
    });
}); 