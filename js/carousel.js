<script>
  const track = document.querySelector('.carousel-track');
  const cards = document.querySelectorAll('.card');
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');

  let index = 0;
  const cardWidth = cards[0].offsetWidth + 24;

  next.addEventListener('click', () => {
    if (index < cards.length - 1) {
      index++;
      track.style.transform = `translateX(-${index * cardWidth}px)`;
    }
  });

  prev.addEventListener('click', () => {
    if (index > 0) {
      index--;
      track.style.transform = `translateX(-${index * cardWidth}px)`;
    }
  });
</script>