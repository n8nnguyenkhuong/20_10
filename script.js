onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);

  // Autoplay nhạc nếu có tham số
  const params = new URLSearchParams(window.location.search);
  if (params.get('autoplay') === '1') {
    const audio = document.getElementById('bg-music');
    // Phát nhạc ngay lập tức như trong love.html
    audio.play().catch(err => {
      console.log('Autoplay blocked:', err);
    });
  }
};