/* ============================================================================
   Protocol Institute — brand.js (v1.1.0)
   The shared BEHAVIOR substrate. Pair with brand.css so artifacts stop
   re-implementing (and re-bugging) the same interactive chrome.

   Zero-dependency, no build step. Drop in once:
       <script src="brand.js" defer></script>
   It auto-wires by markup convention:

   1) Mobile menu     — <button class="pi-hamburger" data-pi-menu="#id"> toggles
                         the <nav class="pi-mobile-menu" id="id">. Links close it.
   2) Gutter spy      — <nav class="pi-gutter"> links (href="#section") get
                         .is-active for the section in view (IntersectionObserver).
   3) On-dark flip    — any element with [data-pi-dark-aware] gains .pi-on-dark
                         while it vertically overlaps a [data-pi-surface="dark"]
                         section, so its text/contrast stays legible over dark
                         hero / CTA bands. (Also flips the .pi-gutter automatically.)

   For slide decks (reveal.js etc.) call PIBrand.onDark(el, isDarkBg) yourself on
   slide change — see llms.txt.
   ============================================================================ */
(function (global) {
  'use strict';

  function ready(fn){ document.readyState !== 'loading' ? fn() : document.addEventListener('DOMContentLoaded', fn); }

  /* 1) Mobile menu ------------------------------------------------------- */
  function wireMenus(){
    document.querySelectorAll('[data-pi-menu]').forEach(function(btn){
      var menu = document.querySelector(btn.getAttribute('data-pi-menu'));
      if(!menu) return;
      btn.addEventListener('click', function(){
        var open = menu.classList.toggle('is-open');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
      menu.addEventListener('click', function(e){
        if(e.target.closest('a')){ menu.classList.remove('is-open'); btn.setAttribute('aria-expanded','false'); }
      });
    });
  }

  /* 2) Gutter scroll-spy -------------------------------------------------- */
  function wireSpy(){
    document.querySelectorAll('.pi-gutter').forEach(function(gutter){
      var links = [].slice.call(gutter.querySelectorAll('a[href^="#"]'));
      if(!links.length || !('IntersectionObserver' in global)) return;
      var map = {};
      links.forEach(function(a){ var s = document.getElementById(a.getAttribute('href').slice(1)); if(s) map[s.id] = a; });
      var obs = new IntersectionObserver(function(entries){
        entries.forEach(function(en){
          if(en.isIntersecting){
            links.forEach(function(a){ a.classList.remove('is-active'); });
            if(map[en.target.id]) map[en.target.id].classList.add('is-active');
          }
        });
      }, { rootMargin:'-45% 0px -50% 0px', threshold:0 });
      Object.keys(map).forEach(function(id){ obs.observe(document.getElementById(id)); });
    });
  }

  /* 3) On-dark flip ------------------------------------------------------- */
  function darkSurfaces(){ return [].slice.call(document.querySelectorAll('[data-pi-surface="dark"]')); }
  function overlapsDark(el, surfaces){
    var r = el.getBoundingClientRect(), cy = (r.top + r.bottom) / 2;
    return surfaces.some(function(s){ var sr = s.getBoundingClientRect(); return sr.top <= cy && sr.bottom >= cy; });
  }
  function wireDarkAware(){
    var aware = [].slice.call(document.querySelectorAll('[data-pi-dark-aware], .pi-gutter'));
    if(!aware.length) return;
    var surfaces = darkSurfaces();
    if(!surfaces.length) return;
    function sync(){ aware.forEach(function(el){ el.classList.toggle('pi-on-dark', overlapsDark(el, surfaces)); }); }
    global.addEventListener('scroll', sync, { passive:true });
    global.addEventListener('resize', sync);
    sync();
  }

  /* Public helper for non-scroll contexts (e.g. reveal.js slide changes) --- */
  var PIBrand = {
    onDark: function(el, isDark){ if(el) el.classList.toggle('pi-on-dark', !!isDark); },
    refresh: function(){ wireDarkAware(); }
  };

  ready(function(){ wireMenus(); wireSpy(); wireDarkAware(); });
  global.PIBrand = PIBrand;
})(window);
