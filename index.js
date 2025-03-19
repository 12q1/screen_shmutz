import { setupCanvas } from './functions/canvasSetup.js';
import { drawEyelash } from './functions/drawEyelash.js';
import { drawClump } from './functions/drawClump.js';

// Setup canvas
const { canvas, ctx } = setupCanvas();

// Create UI buttons
function createButton(label, onClick, leftPosition) {
    const btn = document.createElement("button");
    btn.textContent = label;
    btn.style.position = "fixed";
    btn.style.bottom = "10px";
    btn.style.padding = "10px";
    btn.style.margin = "5px";
    btn.style.background = "rgba(0,0,0,0.7)";
    btn.style.color = "white";
    btn.style.border = "none";
    btn.style.cursor = "pointer";
    btn.style.zIndex = 10000;
    btn.style.left = leftPosition;
    btn.onclick = onClick;
    document.body.appendChild(btn);
    return btn;
}

const eyelashButton = createButton("Draw Eyelash", () => drawEyelash(ctx, canvas), "10px");
const clumpButton = createButton("Draw Clump", () => drawClump(ctx, canvas), "120px");
