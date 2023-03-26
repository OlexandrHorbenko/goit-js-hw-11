// js/btnLoadMore.js
const btnLoadMore = document.querySelector('.load-more');

export function showbtnLoadMore() {
  btnLoadMore.classList.remove('hidden');
}

export function hidebtnLoadMore() {
  btnLoadMore.classList.add('hidden');
}
