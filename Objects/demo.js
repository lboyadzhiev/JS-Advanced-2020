let particles = [];

function setup() {
   createCanvas(400, 3000);
}

function draw() {
   backgroudn(0);

   for(let i = 0;  i < 5; i++) {
      let p = new particles();
      particles.push(p);
   }

   for (let i = particles.length - 1; i >= 0; i--) {
      particles[i].update();
      particles[i].show();

      if (particles[i]. finished()) {
         particles.splice(i, 1);
      }
   }
}

