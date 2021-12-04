let body = document.querySelector('body')
body.onwheel = function () {
    let newFont = ''; 
    let x = Math.floor(Math.random()*7);
    let r = Math.floor(Math.random()*256); 
    let g = Math.floor(Math.random()*256); 
    let b = Math.floor(Math.random()*256);
    let newColor = `rgb(${r},${g},${b})`
    switch (x){
      case 0:
        newFont = 'Times New Roman'; 
        break;
      case 1: 
        newFont = 'Florence, cursive'; 
        break;
      case 2:
        newFont = 'Verdana';
        break; 
      case 3:
        newFont = 'Courier New';
        break;
      case 4:
        newFont = 'Georgia'; 
        break;
      case 5:
          newFont = 'Palatino';
          break;
      case 6: 
          newFont = 'Impact';
          break;
    }
    //change background color
    body.style.background = newColor;
    //change logo text style
    body.style.fontFamily = newFont;
    //write
    document.getElementById('colorName').innerText = `${newColor}`;
}