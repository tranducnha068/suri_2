document.addEventListener('keydown', function (e) {
  if (
    e.key === 'F12' ||
    (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'C')) ||
    (e.ctrlKey && e.key === 'U')
  ) {
    e.preventDefault();
    alert("Không được đâu Trần ơi 😎");
  }
});

document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
  alert("Không được click chuột phải đâu nha 😏");
});