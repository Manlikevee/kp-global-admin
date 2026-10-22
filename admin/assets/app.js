(function () {
  var P = {
    dashboard: '<rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/>',
    members: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-3.6 3-6 6.5-6s6.5 2.4 6.5 6M16 4.5a3.5 3.5 0 010 7M18 14c2.2.6 3.5 2.6 3.5 6"/>',
    ministries: '<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/>',
    events: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    prayer: '<path d="M12 20s-8-5-8-11a4.5 4.5 0 018-2.8A4.5 4.5 0 0120 9c0 6-8 11-8 11z"/>',
    giving: '<rect x="3" y="6" width="18" height="14" rx="2"/><path d="M3 10h18M16 15h2"/>',
    bible: '<path d="M4 4h7a3 3 0 013 3v13a2 2 0 00-2-2H4z"/><path d="M20 4h-3a3 3 0 00-3 3v13a2 2 0 012-2h4z"/>',
    sermons: '<circle cx="12" cy="12" r="9"/><path d="M10 8.5l5 3.5-5 3.5z"/>',
    praise: '<path d="M12 3l2.4 5.6L20 11l-5.6 2.4L12 19l-2.4-5.6L4 11l5.6-2.4z"/><path d="M19 3v3M17.5 4.5h3"/>',
    stories: '<circle cx="12" cy="12" r="9" stroke-dasharray="3 3"/><circle cx="12" cy="12" r="3.5"/>',
    announce: '<path d="M3 10v4h4l8 5V5L7 10z"/><path d="M18 9a4 4 0 010 6"/>',
    notify: '<path d="M6 16V11a6 6 0 1112 0v5l2 2H4z"/><path d="M10 21h4"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19"/>',
    moon: '<path d="M20 14.5A8 8 0 019.5 4 8 8 0 1020 14.5z"/>',
    out: '<path d="M9 4H5v16h4M16 8l4 4-4 4M20 12H9"/>',
    panel: '<rect x="3" y="4" width="18" height="16" rx="3"/><path d="M9 4v16"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    search: '<circle cx="11" cy="11" r="6.5"/><path d="M16 16l4 4"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    edit: '<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13.5 6.5l4 4"/>',
    trash: '<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/>',
    eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
    x: '<path d="M6 6l12 12M18 6L6 18"/>',
    back: '<path d="M15 5l-7 7 7 7"/>',
    play: '<path d="M8 5.5v13l11-6.5z"/>',
    lock: '<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18"/>',
    upload: '<path d="M12 16V4M7 9l5-5 5 5M4 20h16"/>',
    pin: '<path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0113 0c0 5.4-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/>'
  };
  function ic(n) { return '<svg class="i" viewBox="0 0 24 24">' + P[n] + '</svg>' }
  window.kpIcon = ic;

  var G = [
    ['Overview', [['dashboard', 'Dashboard', 'dashboard']]],
    ['Church management', [['members', 'Members', 'members'], ['ministries', 'Departments & Ministries', 'ministries'], ['events', 'Events & Services', 'events'], ['prayer-requests', 'Prayer Requests', 'prayer', 12], ['giving', 'Giving & Offerings', 'giving']]],
    ['App content', [['bible-devotionals', 'Bible & Devotionals', 'bible'], ['sermons-media', 'Sermons & Media', 'sermons'], ['praise-reports', 'Praise Reports', 'praise', 5], ['stories', 'Stories', 'stories'], ['announcements', 'Announcements', 'announce']]],
    ['Communication', [['notifications', 'Notifications', 'notify'], ['settings', 'Settings', 'settings']]]
  ];
  var root = document.documentElement, app = document.getElementById('app'), side = document.getElementById('side'), cur = document.body.dataset.page;
  function esc(s) { return s.replace(/&/g, '&amp;') }
  function dark() { var t = root.getAttribute('data-theme'); return t ? t === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches }
  function fill() { document.querySelectorAll('[data-i]').forEach(function (e) { e.innerHTML = ic(e.dataset.i) }) }
  var tb = document.getElementById('theme');
  function paint() { if (tb) { tb.innerHTML = ic(dark() ? 'sun' : 'moon'); tb.setAttribute('aria-label', dark() ? 'Switch to light mode' : 'Switch to dark mode') } }
  if (tb) tb.onclick = function () { var n = dark() ? 'light' : 'dark'; root.setAttribute('data-theme', n); try { localStorage.setItem('kp-theme', n) } catch (e) { } paint() };

  if (side) {
    side.innerHTML = '<div class="sb"><div class="brand"><img class="logo" src="assets/logo.png" alt="KP Global logo"><span>KP Global<small>Administration Portal</small></span><button class="sq" id="collapse" aria-label="Collapse sidebar">' + ic('panel') + '</button></div><label class="search">' + ic('search') + '<input id="sq" placeholder="Search…" aria-label="Search sections"><kbd>/</kbd></label><nav id="nav" aria-label="Main"></nav><div class="foot"><div class="av">AD</div><div><b>Church Admin</b><span>Super admin</span></div><a class="out" href="login.html" aria-label="Log out" title="Log out">' + ic('out') + '</a></div></div>';
    var nav = document.getElementById('nav');
    function draw(f) {
      f = (f || '').toLowerCase(); var h = '';
      G.forEach(function (g) {
        var it = g[1].filter(function (x) { return x[1].toLowerCase().indexOf(f) > -1 }); if (!it.length) return;
        h += '<div class="grp">' + g[0] + '</div>';
        it.forEach(function (x) { h += '<a class="nav' + (x[0] === cur ? ' on' : '') + '" href="' + x[0] + '.html" title="' + esc(x[1]) + '"' + (x[0] === cur ? ' aria-current="page"' : '') + '>' + ic(x[2]) + '<span>' + esc(x[1]) + '</span>' + (x[3] ? '<em class="b">' + x[3] + '</em>' : '') + '</a>' });
      });
      nav.innerHTML = h;
    }
    draw();
    var sq = document.getElementById('sq'); sq.oninput = function () { draw(sq.value) };
    try { if (localStorage.getItem('kp-mini') === '1') app.classList.add('mini') } catch (e) { }
    document.getElementById('collapse').onclick = function () { app.classList.toggle('mini'); try { localStorage.setItem('kp-mini', app.classList.contains('mini') ? '1' : '0') } catch (e) { } };
    var hm = document.getElementById('ham'); if (hm) { hm.innerHTML = ic('menu'); hm.onclick = function () { app.classList.add('open') } }
    document.getElementById('scrim').onclick = function () { app.classList.remove('open') };
    document.addEventListener('keydown', function (e) { if (e.key === '/' && !/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)) { e.preventDefault(); sq.focus() } });
  }

  /* text filter: works on table rows and any [data-item] */
  document.querySelectorAll('input.q').forEach(function (q) {
    q.oninput = function () {
      var v = q.value.toLowerCase();
      document.querySelectorAll('.tbl tbody tr, [data-item]').forEach(function (r) { r.dataset.hit = r.textContent.toLowerCase().indexOf(v) > -1 ? '1' : '0'; apply(r) });
    };
  });
  /* status filter chips: <div class="seg" data-target="#id"><button data-f="active">… items carry data-s="active" */
  function apply(r) {
    var seg = r.closest('[data-scope]') ? document.querySelector('.seg[data-target="#' + r.closest('[data-scope]').id + '"]') : null;
    var f = seg ? (seg.querySelector('.on') || {}).dataset : null; f = f ? f.f : 'all';
    var okS = f === 'all' || !r.dataset.s || r.dataset.s === f;
    r.hidden = !(okS && r.dataset.hit !== '0');
  }
  document.querySelectorAll('.seg[data-target]').forEach(function (seg) {
    seg.addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) return;
      seg.querySelectorAll('button').forEach(function (x) { x.classList.toggle('on', x === b) });
      document.querySelectorAll(seg.dataset.target + ' [data-s]').forEach(apply);
    });
  });
  /* tabs: <div class="seg" data-tabs> buttons data-tab="x" + panels [data-panel="x"] */
  document.querySelectorAll('[data-tabs]').forEach(function (t) {
    t.addEventListener('click', function (e) {
      var b = e.target.closest('button[data-tab]'); if (!b) return;
      t.querySelectorAll('button').forEach(function (x) { x.classList.toggle('on', x === b) });
      document.querySelectorAll('[data-panel]').forEach(function (p) { if (p.closest('[data-tabscope]') === t.closest('[data-tabscope]')) p.hidden = p.dataset.panel !== b.dataset.tab });
    });
  });

  /* toast + confirm dialog */
  function toast(msg) {
    var t = document.createElement('div'); t.className = 'toast'; t.setAttribute('role', 'status');
    t.innerHTML = ic('check') + '<span></span>'; t.querySelector('span').textContent = msg;
    document.body.appendChild(t); setTimeout(function () { t.remove() }, 2600);
  }
  window.kpToast = toast;
  document.addEventListener('click', function (e) {
    var a = e.target.closest('[data-toast]'); if (!a) return;
    e.preventDefault(); toast(a.dataset.toast);
    if (a.dataset.hide) { var el = a.closest(a.dataset.hide); if (el) el.hidden = true }
    if (a.dataset.go) setTimeout(function () { location.href = a.dataset.go }, 900);
  });
  document.addEventListener('click', function (e) {
    var a = e.target.closest('[data-confirm]'); if (!a) return;
    e.preventDefault();
    var d = document.createElement('dialog');
    d.innerHTML = '<h2></h2><p></p><div class="acts"><button class="btn" value="no">Cancel</button><button class="btn p" value="yes"></button></div>';
    d.querySelector('h2').textContent = a.dataset.confirm; d.querySelector('p').textContent = a.dataset.msg || 'This can’t be undone.';
    var go = d.querySelector('.p'); go.textContent = a.dataset.yes || 'Delete';
    d.addEventListener('click', function (ev) { var b = ev.target.closest('button'); if (!b) return; d.close(); d.remove(); if (b.value === 'yes') { toast(a.dataset.done || 'Done'); if (a.dataset.go) setTimeout(function () { location.href = a.dataset.go }, 900) } });
    document.body.appendChild(d); d.showModal();
  });

  /* create / edit forms: same page. ?edit=1 fills the fields and swaps wording */
  var form = document.querySelector('form[data-saved]');
  if (form) {
    if (/[?&]edit=1/.test(location.search)) {
      document.body.classList.add('is-edit');
      form.querySelectorAll('[data-edit]').forEach(function (el) { var v = el.dataset.edit; if (el.type === 'checkbox') el.checked = v === '1'; else el.value = v });
      document.querySelectorAll('[data-te]').forEach(function (el) { el.textContent = el.dataset.te });
      document.title = document.title.replace(/^[^·]+/, form.dataset.editTitle + ' ');
    }
    form.onsubmit = function (e) { e.preventDefault(); toast(form.dataset.saved); setTimeout(function () { location.href = form.dataset.next }, 900) };
  }
  /* notification compose preview + schedule toggle */
  var nt = document.getElementById('nt'), nm = document.getElementById('nm');
  if (nt && nm) {
    var pt = document.getElementById('pt'), pm = document.getElementById('pm'), cnt = document.getElementById('cnt');
    var up = function () { pt.textContent = nt.value || 'Notification title'; pm.textContent = nm.value || 'Your message appears here.'; cnt.textContent = nm.value.length + '/140' };
    nt.oninput = nm.oninput = up; up();
    document.querySelectorAll('input[name=when]').forEach(function (r) { r.onchange = function () { document.getElementById('sched').hidden = r.value !== 'later' } });
  }
  /* settings tabs */
  document.querySelectorAll('.vtabs').forEach(function (v) {
    v.addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) return;
      v.querySelectorAll('button').forEach(function (x) { x.classList.toggle('on', x === b) });
      document.querySelectorAll('[data-sp]').forEach(function (p) { p.hidden = p.dataset.sp !== b.dataset.t });
    });
  });
  /* file drop label */
  document.querySelectorAll('.drop input[type=file]').forEach(function (i) { i.onchange = function () { if (i.files[0]) i.closest('.drop').querySelector('em').textContent = i.files[0].name } });

  var hi = document.getElementById('hi'); if (hi) { var d = new Date(), h = d.getHours(); hi.textContent = (h < 12 ? 'Good morning' : h < 18 ? 'Good afternoon' : 'Good evening') + ', Admin!'; document.getElementById('dt').textContent = d.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }) }
  fill(); paint();
})();
