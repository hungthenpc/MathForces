const ratingClass = r =>
  r < 1200 ? 'rating-easy' :
  r < 2000 ? 'rating-medium' :
  r < 2700 ? 'rating-hard'  : 'rating-expert';

let activeTags = new Set();
let currentMin = 800, currentMax = 3500, currentSort = 'newest', currentSearch = '';

function filtered() {
  let arr = PROBLEMS.filter(p => {
    if (p.rating < currentMin || p.rating > currentMax) return false;
    // AND logic: problem must have ALL selected tags
    if (activeTags.size > 0) {
      const problemTags = new Set(p.tags);
      for (const tag of activeTags) {
        if (!problemTags.has(tag)) return false;
      }
    }
    if (currentSearch && !p.title.toLowerCase().includes(currentSearch.toLowerCase())) return false;
    return true;
  });

  arr.sort((a, b) => {
    switch (currentSort) {
      case 'newest':
        return new Date(b.createdAt) - new Date(a.createdAt);
      case 'oldest':
        return new Date(a.createdAt) - new Date(b.createdAt);
      case 'rating-asc':
        return a.rating - b.rating;
      case 'rating-desc':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });
  return arr;
}

function renderGrid() {
  const probs = filtered();
  document.getElementById('countLabel').textContent = `${probs.length} problem${probs.length !== 1 ? 's' : ''}`;

  const grid = document.getElementById('problemGrid');
  grid.innerHTML = probs.length === 0
    ? `<div style="color:var(--text-muted);font-size:13px;grid-column:1/-1;padding:40px 0;text-align:center;">No problems match the current filters.</div>`
    : probs.map((p, i) => `
    <div class="problem-card" style="animation-delay:${i*0.04}s;cursor:pointer;" onclick="window.location.href='problem.html?id=${p.id}'">
      <div class="card-body">${p.content}</div>
      <div class="card-footer">
        <div class="card-title" >${p.title}</div>
        <div class="card-meta">
          <span class="card-rating ${ratingClass(p.rating)}">${p.rating}</span>
          <div class="card-tags">
            ${p.tags.map(t => `<span class="card-tag">${t}</span>`).join('')}
          </div>
        </div>
      </div>
    </div>`).join('');

  renderPagination();
  renderChips();

  // Re-trigger MathJax to render new content
  if (window.MathJax) {
    MathJax.typesetPromise([grid]).catch(err => console.error('MathJax error:', err));
  }
}

function renderChips() {
  const el = document.getElementById('activeFilters');
  const chips = [];
  if (currentMin !== 800 || currentMax !== 3500)
    chips.push(`<div class="filter-chip">rating ${currentMin}–${currentMax} <span class="chip-remove" data-clear="rating">×</span></div>`);
  activeTags.forEach(t =>
    chips.push(`<div class="filter-chip">${t} <span class="chip-remove" data-clear-tag="${t}">×</span></div>`)
  );
  if (currentSearch)
    chips.push(`<div class="filter-chip">search: "${currentSearch}" <span class="chip-remove" data-clear="search">×</span></div>`);
  el.innerHTML = chips.join('');

  el.querySelectorAll('.chip-remove').forEach(btn => {
    btn.addEventListener('click', () => {
      const c = btn.dataset.clear, ct = btn.dataset.clearTag;
      if (c === 'rating') {
        currentMin = 800; currentMax = 3500;
        document.getElementById('ratingMin').value = 800;
        document.getElementById('ratingMax').value = 3500;
      }
      if (ct) {
        activeTags.delete(ct);
        document.querySelector(`.tag-toggle[data-tag="${ct}"]`)?.classList.remove('active');
      }
      if (c === 'search') {
        currentSearch = '';
        document.getElementById('searchInput').value = '';
      }
      renderGrid();
    });
  });
}

function renderPagination() {
  const probs = filtered();
  const perPage = 9;
  const totalPages = Math.max(1, Math.ceil(probs.length / perPage));
  const el = document.getElementById('pagination');
  
  let html = '';
  for (let i = 1; i <= totalPages; i++) {
    html += `<button class="page-btn${i === 1 ? ' active' : ''}">${i}</button>`;
  }
  el.innerHTML = html;
}

// EVENT LISTENERS
document.querySelectorAll('.tag-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const tag = btn.dataset.tag;
    if (activeTags.has(tag)) {
      activeTags.delete(tag);
      btn.classList.remove('active');
    } else {
      activeTags.add(tag);
      btn.classList.add('active');
    }
  });
});

document.getElementById('applyBtn').addEventListener('click', () => {
  currentMin = parseInt(document.getElementById('ratingMin').value) || 800;
  currentMax = parseInt(document.getElementById('ratingMax').value) || 3500;
  currentSort = document.getElementById('sortSelect').value;
  renderGrid();
});

document.getElementById('sortSelect').addEventListener('change', () => {
  currentSort = document.getElementById('sortSelect').value;
  renderGrid();
});

document.getElementById('searchBtn').addEventListener('click', () => {
  currentSearch = document.getElementById('searchInput').value.trim();
  renderGrid();
});

document.getElementById('searchInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    currentSearch = e.target.value.trim();
    renderGrid();
  }
});

// INITIAL RENDER
renderGrid();