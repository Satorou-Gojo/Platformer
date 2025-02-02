const collisionBlocks = [
    // Left ground platform (includes base and elevation)
    { x: 0, y: 460, width: 1024, height: 116 },
    { x: 505, y: 370, width: 5024, height: 116 },
    { x: 350, y: 450, width: 10, height: 116 },
    { x: 360, y: 444, width: 10, height: 116 },
    { x: 370, y: 438, width: 10, height: 116 },
    { x: 380, y: 432, width: 10, height: 116 },
    { x: 390, y: 426, width: 10, height: 116 },
    { x: 400, y: 420, width: 10, height: 116 },
    { x: 410, y: 414, width: 10, height: 116 },
    { x: 420, y: 408, width: 10, height: 116 },
    { x: 430, y: 402, width: 10, height: 116 },
    { x: 440, y: 396, width: 10, height: 116 },
    { x: 450, y: 390, width: 10, height: 116 },
    { x: 460, y: 384, width: 10, height: 116 },
    { x: 470, y: 378, width: 10, height: 116 },
    { x: 480, y: 372, width: 10, height: 116 },
    { x: 490, y: 372, width: 10, height: 116 },
    { x: 500, y: 372, width: 10, height: 116 },
  ];
  
  // Game boundaries
  const boundaries = {
    left: 0,
    right: 1024,
    top: 0,
    bottom: 576
  };