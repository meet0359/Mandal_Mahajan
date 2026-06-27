/* Mandal Mahajan – Monitoring Dashboard */

document.addEventListener('DOMContentLoaded', () => {
  animateProgressBars();
  animateChartBars();
});

function animateProgressBars() {
  const bars = document.querySelectorAll('.progress-fill[data-width]');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.width = entry.target.dataset.width + '%';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  bars.forEach(bar => {
    bar.style.width = '0%';
    observer.observe(bar);
  });
}

function animateChartBars() {
  const bars = document.querySelectorAll('.chart-bar[data-height]');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.height = entry.target.dataset.height + '%';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  bars.forEach(bar => {
    bar.style.height = '0%';
    observer.observe(bar);
  });
}

function animateFundBars() {
  const bars = document.querySelectorAll('.fund-bar-fill[data-width]');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.width = entry.target.dataset.width + '%';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  bars.forEach(bar => {
    bar.style.width = '0%';
    observer.observe(bar);
  });
}

document.addEventListener('DOMContentLoaded', animateFundBars);
