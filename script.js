// Helper function: replaces content inside #out
function render (html) {
  document.getElementById('out').innerHTML = html
}

/* -------------------------------
   Demo 1: Click (counter)
-------------------------------- */
let clickCount = 0

document.getElementById('btnClick').addEventListener('click', () => {
  
  clickCount++
  
   render(`<p> You clicked ${clickCount} times on the button</p>`)
})


/* --------------------------------------
   Demo 2: Double-click (toggle highlight)
--------------------------------------- */
const dblCard = document.getElementById('dblCard')

   dblCard.addEventListener('dblclick', () => {
      dblCard.classList.toggle('activated')
      const state = dblCard.classList.contains('activated') ? 'ON' : 'OFF'
      render(`<p>Double-click highlight is <strong> ${state}</strong>.</p>`)
   })

/* --------------------------------
   Demo 3: Keypress (show key/code)
--------------------------------- */

const kbKey = document.getElementById('kbKey')
const kbCode = document.getElementById('kbCode')

document.addEventListener('keydown', (e) => {
   kbKey.textContent = e.key === ' ' ? '(space)' : e.key
   kbCode.textContent = e.code
})


/* ----------------------------------------
   Demo 4: Show Time (12-hour format + day)
----------------------------------------- */


/* -------------------------
   Utility: Clear output
-------------------------- */
document.getElementById('btnClear').addEventListener('click', () => {
  render('<span class="text-secondary">Output cleared.</span>')
  clickCount = 0;
})

/* -------------------------------
   Event Listener Challenge: Option A
-------------------------------- */

// Step 1: create a hover counter variable
let hoverCount = 0;

// Step 2: select the card
const hoverCard = dblCard; // using existing dblCard

// Step 3: mouse enters the card
hoverCard.addEventListener('mouseenter', () => {
  hoverCard.classList.add('activated');  // highlight
  hoverCount++;                           // increase counter
  render(`<p>Card hovered <strong>${hoverCount}</strong> times!</p>`); // output
});

// Step 4: mouse leaves the card
hoverCard.addEventListener('mouseleave', () => {
  hoverCard.classList.remove('activated'); // remove highlight
  render('<p>The mouse has left the card.</p>'); // output leave message
});

/* -------------------------------
   Event Listener Challenge: Option B
-------------------------------- */

const scrollBar = document.getElementById('scrollBar');

function updateScrollBar() {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolledPercent = Math.round((scrollTop / scrollHeight) * 100);
  scrollBar.style.width = scrolledPercent + "%";
  scrollBar.textContent = scrolledPercent + "%"; // show % inside the bar
}


// Run on page load
updateScrollBar();

// Update on scroll
window.addEventListener('scroll', updateScrollBar);

/* -------------------------------
   Event Listener Challenge: Option C
-------------------------------- */

const liveInput = document.getElementById('liveInput');
const neutralMessage = 'Output will appear here…';

// On input
liveInput.addEventListener('input', () => {
  const text = liveInput.value.trim();
  if (text) {
    render(`<p>Hello, <strong>${text}</strong>!</p>`);
  } else {
    render(`<span class="text-secondary">${neutralMessage}</span>`);
  }
});

// On focus
liveInput.addEventListener('focus', () => {
  liveInput.classList.add('border', 'border-primary', 'shadow-sm');
});

// On blur
liveInput.addEventListener('blur', () => {
  liveInput.classList.remove('border', 'border-primary', 'shadow-sm');
  if (!liveInput.value.trim()) {
    render(`<span class="text-secondary">${neutralMessage}</span>`);
  }
});