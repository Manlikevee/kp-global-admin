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
    pin: '<path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0113 0c0 5.4-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/>',
    branch: '<path d="M4 21V9l8-5 8 5v12"/><path d="M9 21v-6h6v6M12 9v2"/>',
    worker: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-3.6 3-6 6.5-6 1.4 0 2.6.4 3.6 1M15.5 18l2 2 4-4"/>',
    clip: '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1M9 11h6M9 15h4"/>',
    home: '<path d="M3 11l9-7 9 7M5 10v10h14V10"/><path d="M10 20v-5h4v5"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5"/>',
    file: '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 13h6M9 17h4"/>',
    link: '<path d="M10 14a4 4 0 005.7 0l3-3a4 4 0 00-5.7-5.7l-1 1M14 10a4 4 0 00-5.7 0l-3 3A4 4 0 0011 18.7l1-1"/>',
    copy: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2h2"/>',
    phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A15 15 0 013 6a2 2 0 012-2z"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
    power: '<path d="M12 3v9M6.5 6.5a8 8 0 1011 0"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    refresh: '<path d="M20 11a8 8 0 00-14.5-4M4 4v4h4M4 13a8 8 0 0014.5 4M20 20v-4h-4"/>',
    swap: '<path d="M4 8h14l-3-3M20 16H6l3 3"/>'
  };
  function ic(n) { return '<svg class="i" viewBox="0 0 24 24">' + P[n] + '</svg>' }
  window.kpIcon = ic;

  /* ---------- roles + navigation (frontend demo only: no real auth) ---------- */
  var ROLES = {
    super: { label: 'Super admin', name: 'Church Admin', ini: 'AD', home: 'dashboard.html', sub: 'Administration Portal' },
    branch: { label: 'Branch admin', name: 'Pst. Daniel Okoro', ini: 'DO', home: 'branch-dashboard.html', sub: 'Branch Admin Portal' },
    worker: { label: 'Worker', name: 'Ruth Bello', ini: 'RB', home: 'worker-dashboard.html', sub: 'Worker Portal' },
    member: { label: 'Member', name: 'Grace Adeyemi', ini: 'GA', home: 'member-dashboard.html', sub: 'Member Portal' }
  };
  var NAV = {
    super: [
      ['Overview', [['dashboard.html', 'Dashboard', 'dashboard']]],
      ['Church management', [['branches.html', 'Branches', 'branch'], ['members.html', 'Members', 'members'], ['workers.html', 'Workers', 'worker'], ['ministries.html', 'Departments & Ministries', 'ministries'], ['events.html', 'Events & Services', 'events'], ['prayer-requests.html', 'Prayer Requests', 'prayer', 12], ['giving.html', 'Giving & Offerings', 'giving']]],
      ['App content', [['bible-devotionals.html', 'Devotionals', 'bible'], ['bible-management.html', 'Bible Management', 'file'], ['sermons-media.html', 'Sermons & Media', 'sermons'], ['praise-reports.html', 'Praise Reports', 'praise', 5], ['stories.html', 'Stories', 'stories'], ['announcements.html', 'Announcements', 'announce']]],
      ['Communication', [['notifications.html', 'Notifications', 'notify'], ['settings.html', 'Settings', 'settings']]]
    ],
    branch: [
      ['Overview', [['branch-dashboard.html', 'Dashboard', 'dashboard']]],
      ['My branch', [['members.html', 'Members', 'members'], ['workers.html', 'Workers', 'worker'], ['workers.html?tab=applications', 'Worker Applications', 'clip', 3]]],
      ['Content', [['events.html', 'Events', 'events'], ['sermons-media.html', 'Sermons & Media', 'sermons'], ['announcements.html', 'Announcements', 'announce'], ['notifications.html', 'Notifications', 'notify']]]
    ],
    worker: [
      ['Serve', [['worker-dashboard.html#top', 'Dashboard', 'dashboard'], ['worker-dashboard.html#updates', 'Updates', 'announce'], ['worker-dashboard.html#sermons', 'Sermons', 'sermons'], ['worker-dashboard.html#events', 'Events', 'events'], ['worker-dashboard.html#devotionals', 'Devotionals', 'bible'], ['worker-dashboard.html#notifications', 'Notifications', 'notify', 2], ['worker-dashboard.html#profile', 'My Profile', 'user']]],
      ['Account', [['login.html', 'Logout', 'out']]]
    ],
    member: [
      ['Welcome', [['member-dashboard.html#top', 'Home', 'home'], ['member-dashboard.html#updates', 'Updates', 'announce'], ['member-dashboard.html#sermons', 'Sermons', 'sermons'], ['member-dashboard.html#events', 'Events', 'events'], ['member-dashboard.html#devotionals', 'Devotionals', 'bible'], ['member-dashboard.html#branches', 'Branches', 'branch'], ['member-dashboard.html#notifications', 'Notifications', 'notify', 3]]],
      ['Get involved', [['apply-worker.html', 'Apply to Become a Worker', 'worker'], ['member-dashboard.html#profile', 'My Profile', 'user']]],
      ['Account', [['login.html', 'Logout', 'out']]]
    ]
  };
  var stored = ''; try { stored = localStorage.getItem('kp-role') || '' } catch (e) { }
  /* role/branch/worker/member pages set data-role; shared admin pages follow the last super/branch choice */
  var role = document.body.dataset.role || (stored === 'branch' ? 'branch' : 'super');
  if (!ROLES[role]) role = 'super';
  if (document.body.dataset.role) { try { localStorage.setItem('kp-role', role) } catch (e) { } }
  window.kpRole = role;

  var root = document.documentElement, app = document.getElementById('app'), side = document.getElementById('side'), cur = document.body.dataset.page;
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;') }
  window.kpEsc = esc;
  window.kpBytes = function (n) { if (n < 1024) return n + ' B'; if (n < 1048576) return (n / 1024).toFixed(1) + ' KB'; if (n < 1073741824) return (n / 1048576).toFixed(2) + ' MB'; return (n / 1073741824).toFixed(2) + ' GB' };
  window.kpInitials = function (n) { return n.split(/\s+/).filter(function (w) { return /^[A-Za-z0-9]/.test(w) }).slice(0, 2).map(function (w) { return w[0].toUpperCase() }).join('') };
  function dark() { var t = root.getAttribute('data-theme'); return t ? t === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches }
  function fill() { document.querySelectorAll('[data-i]').forEach(function (e) { e.innerHTML = ic(e.dataset.i) }) }
  var tb = document.getElementById('theme');
  function paint() { if (tb) { tb.innerHTML = ic(dark() ? 'sun' : 'moon'); tb.setAttribute('aria-label', dark() ? 'Switch to light mode' : 'Switch to dark mode') } }
  if (tb) tb.onclick = function () { var n = dark() ? 'light' : 'dark'; root.setAttribute('data-theme', n); try { localStorage.setItem('kp-theme', n) } catch (e) { } paint() };

  if (side) {
    var R = ROLES[role], lite = role === 'worker' || role === 'member';
    var opts = Object.keys(ROLES).map(function (k) { return '<option value="' + k + '"' + (k === role ? ' selected' : '') + '>' + ROLES[k].label + '</option>' }).join('');
    side.setAttribute('aria-label', 'Sidebar');
    side.innerHTML = '<div class="sb"><div class="brand"><img class="logo" src="assets/logo.png" alt="KP Global logo"><span>KP Global<small>' + R.sub + '</small></span><button class="sq" id="collapse" type="button">' + ic('panel') + '</button></div>' +
      (lite ? '' : '<label class="search">' + ic('search') + '<input id="sq" placeholder="Search…" aria-label="Search sections"><kbd>/</kbd></label>') +
      '<nav id="nav" aria-label="Main"></nav>' +
      '<div class="demo"><label for="role">Demo: preview as</label><select id="role" class="fs">' + opts + '</select></div>' +
      '<div class="foot"><div class="av">' + R.ini + '</div><div><b>' + esc(R.name) + '</b><span>' + R.label + '</span></div><a class="out" href="login.html" aria-label="Log out" title="Log out">' + ic('out') + '</a></div></div>';
    var nav = document.getElementById('nav');
    var curFile = (location.pathname.split('/').pop() || '').replace(/\.html$/, '') || cur;
    function isOn(href) {
      var h = href.split('#'), f = h[0].split('?'), file = f[0].replace(/\.html$/, '');
      if (file !== cur) return false;
      if (h[1]) { var first = NAV[role][0][1][0][0] === href; return location.hash ? location.hash === '#' + h[1] : first }
      var apps = /tab=applications/.test(location.search);
      if (f[1]) return apps;
      return !(role === 'branch' && file === 'workers' && apps);
    }
    function draw(f) {
      f = (f || '').toLowerCase(); var h = '';
      NAV[role].forEach(function (g) {
        var it = g[1].filter(function (x) { return x[1].toLowerCase().indexOf(f) > -1 }); if (!it.length) return;
        h += '<div class="grp">' + g[0] + '</div>';
        it.forEach(function (x) { var on = isOn(x[0]); h += '<a class="nav' + (on ? ' on' : '') + '" href="' + x[0] + '" title="' + esc(x[1]) + '"' + (on ? ' aria-current="page"' : '') + '>' + ic(x[2]) + '<span>' + esc(x[1]) + '</span>' + (x[3] ? '<em class="b">' + x[3] + '</em>' : '') + '</a>' });
      });
      nav.innerHTML = h;
    }
    draw();
    window.addEventListener('hashchange', function () { draw() });
    var sq = document.getElementById('sq'); if (sq) sq.oninput = function () { draw(sq.value) };
    document.getElementById('role').onchange = function () { var k = this.value; try { localStorage.setItem('kp-role', k) } catch (e) { } location.href = ROLES[k].home };

    /* ---------- sidebar toggle: desktop collapse/expand + mobile drawer ---------- */
    var mq = matchMedia('(max-width:860px)'), tg = document.getElementById('collapse'), hm = document.getElementById('ham');
    try { if (localStorage.getItem('kp-mini') === '1') app.classList.add('mini') } catch (e) { }
    function sync() {
      var mob = mq.matches, mini = app.classList.contains('mini'), open = app.classList.contains('open');
      var expanded = mob ? open : !mini;
      var lbl = mob ? (open ? 'Close menu' : 'Open menu') : (mini ? 'Expand sidebar' : 'Collapse sidebar');
      [tg, hm].forEach(function (b) { if (!b) return; b.setAttribute('aria-expanded', String(expanded)); b.setAttribute('aria-controls', 'side'); b.setAttribute('aria-label', lbl); b.title = lbl });
      tg.innerHTML = ic(mob ? 'x' : 'panel');
      if (hm) hm.innerHTML = ic('menu');
      side.inert = mob && !open;
      app.dataset.sidebar = mob ? (open ? 'drawer-open' : 'drawer-closed') : (mini ? 'collapsed' : 'expanded');
    }
    function closeDrawer(back) { app.classList.remove('open'); sync(); if (back && hm) hm.focus() }
    function toggle() {
      if (mq.matches) { if (app.classList.contains('open')) closeDrawer(true); else { app.classList.add('open'); sync(); tg.focus() } }
      else { app.classList.toggle('mini'); try { localStorage.setItem('kp-mini', app.classList.contains('mini') ? '1' : '0') } catch (e) { } sync() }
    }
    tg.onclick = toggle; if (hm) hm.onclick = toggle;
    document.getElementById('scrim').onclick = function () { closeDrawer(true) };
    nav.addEventListener('click', function (e) { if (mq.matches && e.target.closest('a')) closeDrawer(false) });
    var onMq = function () { app.classList.remove('open'); sync() };
    if (mq.addEventListener) mq.addEventListener('change', onMq); else mq.addListener(onMq);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mq.matches && app.classList.contains('open')) { closeDrawer(true); return }
      if (e.key === 'Tab' && mq.matches && app.classList.contains('open')) {
        var f = side.querySelectorAll('a[href],button,input,select'); if (!f.length) return;
        var a = f[0], z = f[f.length - 1];
        if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus() } else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus() }
      }
      if (sq && e.key === '/' && !/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)) { e.preventDefault(); sq.focus() }
    });
    sync();
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
  function toast(msg, type) {
    var t = document.createElement('div'); t.className = 'toast' + (type === 'err' ? ' err' : ''); t.setAttribute('role', type === 'err' ? 'alert' : 'status');
    t.innerHTML = ic(type === 'err' ? 'x' : 'check') + '<span></span>'; t.querySelector('span').textContent = msg;
    document.body.appendChild(t); setTimeout(function () { t.remove() }, type === 'err' ? 4200 : 2600);
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


  /* ---------- shared UI helpers for the demo pages ---------- */
  document.addEventListener('click', function (e) {
    var o = e.target.closest('[data-open]');
    if (o) { var d = document.querySelector(o.dataset.open); if (d && d.showModal) { e.preventDefault(); d.showModal() } }
    var c = e.target.closest('[data-close]'); if (c) { var dd = c.closest('dialog'); if (dd) dd.close() }
    if (e.target.tagName === 'DIALOG' && e.target.hasAttribute('data-modal')) {
      var r = e.target.getBoundingClientRect();
      if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) e.target.close();
    }
  });
  /* kpConfirm({title,msg,yes,danger}, onYes): accessible confirmation dialog */
  window.kpConfirm = function (o, cb) {
    var d = document.createElement('dialog'); d.setAttribute('role', 'alertdialog'); d.setAttribute('data-modal', '');
    d.innerHTML = '<h2></h2><p></p><div class="acts"><button class="btn" type="button" value="no">Cancel</button><button class="btn p" type="button" value="yes"></button></div>';
    d.querySelector('h2').textContent = o.title; d.querySelector('p').textContent = o.msg || '';
    var y = d.querySelector('.p'); y.textContent = o.yes || 'Confirm'; if (o.danger) { y.classList.remove('p'); y.classList.add('dg') }
    d.addEventListener('click', function (ev) { var b = ev.target.closest('button'); if (!b) return; var ok = b.value === 'yes'; d.close(); d.remove(); if (ok && cb) cb() });
    d.addEventListener('cancel', function () { setTimeout(function () { d.remove() }, 0) });
    document.body.appendChild(d); d.showModal(); d.querySelector('button').focus();
  };
  /* kpValidate(form): inline messages, aria-invalid; returns true when valid */
  function fieldMsg(el) {
    var v = el.value.trim();
    if (el.required && !v) return el.tagName === 'SELECT' ? 'Please choose an option.' : 'This field is required.';
    if (!v) return '';
    if (el.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) return 'Enter a valid email, e.g. name@example.com.';
    if (el.type === 'tel' && !/^\+?[0-9][0-9\s\-()]{6,17}$/.test(v)) return 'Enter a valid phone number, e.g. +234 803 555 0142.';
    if (el.minLength > 0 && v.length < el.minLength) return 'Please write at least ' + el.minLength + ' characters (' + v.length + ' so far).';
    return '';
  }
  function showMsg(el) {
    var lab = el.closest('label'); if (!lab) return true;
    var er = lab.querySelector('.err');
    if (!er) { er = document.createElement('small'); er.className = 'err'; er.id = 'err-' + Math.random().toString(36).slice(2, 8); lab.appendChild(er) }
    var m = fieldMsg(el); er.textContent = m; er.hidden = !m;
    if (m) { el.setAttribute('aria-invalid', 'true'); el.setAttribute('aria-describedby', er.id) } else { el.removeAttribute('aria-invalid'); el.removeAttribute('aria-describedby') }
    return !m;
  }
  window.kpValidate = function (form) {
    if (!form.dataset.live) { form.dataset.live = '1'; form.addEventListener('input', function (e) { if (e.target.getAttribute('aria-invalid')) showMsg(e.target) }); form.addEventListener('change', function (e) { if (e.target.getAttribute('aria-invalid')) showMsg(e.target) }) }
    var ok = true, first = null;
    form.querySelectorAll('input:not([type=file]):not([type=checkbox]):not([type=radio]),select,textarea').forEach(function (el) { if (!showMsg(el)) { ok = false; if (!first) first = el } });
    if (first) first.focus();
    return ok;
  };
  window.kpClearErrors = function (form) { form.querySelectorAll('.err').forEach(function (e) { e.hidden = true; e.textContent = '' }); form.querySelectorAll('[aria-invalid]').forEach(function (e) { e.removeAttribute('aria-invalid') }) };

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
