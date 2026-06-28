/* Mandal Mahajan – Donation Page */

document.addEventListener('DOMContentLoaded', () => {
  const amountCards = document.querySelectorAll('.amount-card');
  const customInput = document.getElementById('customAmount');
  const donateBtn = document.getElementById('donateBtn');

  amountCards.forEach(card => {
    const select = () => {
      amountCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      if (customInput) customInput.value = '';
    };
    card.addEventListener('click', select);
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        select();
      }
    });
  });

  customInput?.addEventListener('input', () => {
    amountCards.forEach(c => c.classList.remove('selected'));
  });

  donateBtn?.addEventListener('click', () => {
    const selected = document.querySelector('.amount-card.selected');
    const custom = customInput?.value;
    let amount = custom || (selected ? selected.dataset.amount : null);

    if (!amount) {
      showToast('Please select or enter a donation amount.');
      return;
    }

    showToast(`Thank you for your generous donation of ₹${amount}! Your support saves lives.`);
  });
});

function showToast(message) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  toast.setAttribute('role', 'alert');
  Object.assign(toast.style, {
    position: 'fixed',
    bottom: '2rem',
    left: '50%',
    transform: 'translateX(-50%)',
    background: '#3a2f20',
    color: '#fff',
    padding: '1rem 2rem',
    borderRadius: '12px',
    boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
    zIndex: '10000',
    fontWeight: '600'
  });

  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
