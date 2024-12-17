function changeLayout(layout) {
    const layoutBox = document.getElementById('layoutBox');
    const cssCodeDisplay = document.getElementById('cssCode');
  
    // Reset the layout box before applying new layout
    layoutBox.style.display = '';
    layoutBox.style.flexDirection = '';
    layoutBox.style.gridTemplateColumns = '';
    
    // Apply new layout
    switch(layout) {
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
        layoutBox.style.gridTemplateColumns = 'repeat(3, 1fr)';
        cssCodeDisplay.textContent = `
  /* Grid Layout */
  #layoutBox {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }`;
        break;
      case 'flex-col':
        layoutBox.style.display = 'flex';
        layoutBox.style.flexDirection = 'column';
        cssCodeDisplay.textContent = `
  /* Flex Column Layout */
  #layoutBox {
    display: flex;
    flex-direction: column;
  }`;
        break;
      case 'flex-row':
        layoutBox.style.display = 'flex';
        layoutBox.style.flexDirection = 'row';
        cssCodeDisplay.textContent = `
  /* Flex Row Layout */
  #layoutBox {
    display: flex;
    flex-direction: row;
  }`;
        break;
      default:
        break;
    }
  }
  