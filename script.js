let currentLayout = 'flex-default'; // Default layout
let gridColumns = 3; // Default grid columns
let gap = 10; // Default gap value
let flexDirection = 'row'; // Default flex direction

function changeLayout(layout) {
  currentLayout = layout;
  // Reset the visibility of controls and apply the relevant CSS
  toggleControls();
  updateCSS();
}

function toggleControls() {
  // Hide all controls first
  document.getElementById('flexDirectionControl').style.display = 'none';
  document.getElementById('gridColumnsControl').style.display = 'none';
  document.getElementById('gapControl').style.display = 'none';
  
  // Show the relevant controls based on the layout type
  switch (currentLayout) {
    case 'grid':
      document.getElementById('gridColumnsControl').style.display = 'block';
      document.getElementById('gapControl').style.display = 'block';
      break;
    case 'flex-default':
    case 'flex-row':
    case 'flex-col':
    case 'flex-center':
      document.getElementById('gapControl').style.display = 'block';
      document.getElementById('flexDirectionControl').style.display = 'block';
      break;
    default:
      break;
  }
}

function updateCSS() {
  const layoutBox = document.getElementById('layoutBox');
  const cssCodeDisplay = document.getElementById('cssCode');
  const gapValue = document.getElementById('gap').value;
  const flexDirectionValue = document.getElementById('flexDirection').value;
  const gridColumnsValue = document.getElementById('gridColumns').value;

  // Reset styles first
  layoutBox.style.display = '';
  layoutBox.style.flexDirection = '';
  layoutBox.style.gridTemplateColumns = '';
  layoutBox.style.flexWrap = '';
  layoutBox.style.justifyContent = '';
  layoutBox.style.alignItems = '';
  layoutBox.style.gap = '';

  switch (currentLayout) {
    case 'block':
      layoutBox.style.display = 'block';
      cssCodeDisplay.textContent = `
/* Block Layout */
#layoutBox {
  display: block;
}`;
      break;

    case 'inline':
      layoutBox.style.display = 'inline';
      cssCodeDisplay.textContent = `
/* Inline Layout */
#layoutBox {
  display: inline;
}`;
      break;

    case 'grid':
      layoutBox.style.display = 'grid';
      layoutBox.style.gridTemplateColumns = `repeat(${gridColumnsValue}, 1fr)`;
      layoutBox.style.gap = `${gapValue}px`;
      cssCodeDisplay.textContent = `
/* Grid Layout */
#layoutBox {
  display: grid;
  grid-template-columns: repeat(${gridColumnsValue}, 1fr);
  gap: ${gapValue}px;
}`;
      break;

    case 'flex-default':
      layoutBox.style.display = 'flex';
      layoutBox.style.gap = `${gapValue}px`;
      cssCodeDisplay.textContent = `
/* Default Flex Layout */
#layoutBox {
  display: flex;
  gap: ${gapValue}px;
}`;
      break;

    case 'flex-col':
      layoutBox.style.display = 'flex';
      layoutBox.style.flexDirection = 'column';
      layoutBox.style.gap = `${gapValue}px`;
      cssCodeDisplay.textContent = `
/* Flex Column Layout */
#layoutBox {
  display: flex;
  flex-direction: column;
  gap: ${gapValue}px;
}`;
      break;

    case 'flex-row':
      layoutBox.style.display = 'flex';
      layoutBox.style.flexDirection = 'row';
      layoutBox.style.gap = `${gapValue}px`;
      cssCodeDisplay.textContent = `
/* Flex Row Layout */
#layoutBox {
  display: flex;
  flex-direction: row;
  gap: ${gapValue}px;
}`;
      break;

    case 'flex-center':
      layoutBox.style.display = 'flex';
      layoutBox.style.flexDirection = 'row';
      layoutBox.style.justifyContent = 'center';
      layoutBox.style.alignItems = 'center';
      layoutBox.style.gap = `${gapValue}px`;
      cssCodeDisplay.textContent = `
/* Flex Centered Layout */
#layoutBox {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${gapValue}px;
}`;
      break;

    default:
      break;
  }
}
