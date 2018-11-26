'use strict';

(function () {
  const team = document.querySelector('.team');
  const prev = team.querySelectorAll('.team__prev');
  const next = team.querySelectorAll('.team__next');
  const names = team.querySelectorAll('.team__name');

  names.forEach((item, i) => {
    switch (i) {
      case 0:
        prev[i].textContent = names[names.length - 1].textContent;
        next[i].textContent = names[i + 1].textContent;
        break;
      case (names.length - 1):
        prev[i].textContent = names[names.length - 2].textContent;
        next[i].textContent = names[0].textContent;
        break;
      default:
        prev[i].textContent = names[i - 1].textContent;
        next[i].textContent = names[i + 1].textContent;
        break;
    }
  });
})();
