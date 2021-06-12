function dice1() {
const rdm1 = Math.random()
let m = rdm1 * 6
if ( m >= 1) {
    let floor = (Math.floor(m)+ 1);
    //console.log("this is dice 1 = " + floor)
    return floor
} else if (m < 1) {
    let floor = (Math.floor(m) + 1);
    //console.log("this is dice 1 = " + floor)
    return floor
}
}
dice1()

function dice2() {
    const rdm2 = (Math.random() * Math.random()) 
    let m = rdm2 * 6
    if ( m >= 1) {
        let floor = (Math.floor(m)+ 1);
       //console.log("this is dice 2 = " + floor)
        return floor

    } else if (m < 1) {
        let floor = (Math.floor(m) + 1);
       //console.log("this is dice 2 = " + floor)
        return floor

    }
    }
    
dice2()


const r1 = dice1();
const r2 = dice2();
console.log(r1);
console.log(r2);


if ( r1 < r2) {
    console.log( r2 + " is bigger than " + r1);
  } else if (r1 > r2) {
    console.log( r2 + " is smaller than " + r1);
  } else     {
    console.log( r2 + " is equal to " + r1);

  }
