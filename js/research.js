/* Shri Mandal Mahajan Panjrapole – Research / article reader */

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('articleModal');
  const content = document.getElementById('articleContent');
  const closeBtn = document.getElementById('articleClose');
  if (!modal || !content) return;

  const openArticle = card => {
    const tpl = card.querySelector('.article-full');
    if (!tpl) return;
    content.innerHTML = '';
    content.appendChild(tpl.content.cloneNode(true));
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeBtn?.focus();
  };

  const closeArticle = () => {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  document.querySelectorAll('.research-card[data-article]').forEach(card => {
    const trigger = card.querySelector('.article-open');
    const handler = e => { e.preventDefault(); openArticle(card); };
    trigger?.addEventListener('click', handler);
    // Also let a click anywhere on the card open it (but ignore other links/buttons)
    card.addEventListener('click', e => {
      if (e.target.closest('a')) return;
      if (e.target.closest('.article-open')) return;
      openArticle(card);
    });
  });

  closeBtn?.addEventListener('click', closeArticle);
  modal.addEventListener('click', e => { if (e.target === modal) closeArticle(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeArticle();
  });
});
