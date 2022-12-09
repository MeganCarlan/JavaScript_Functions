console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");


// function printOdds(count) {

//     if (count < 0) {
//         count = count * -1;
//     }

//     for (let i=0; i<=count; i++) {

       
//         if(i%2 == 1) {
//             console.log(i);
//         }
//     }
// }

function printOdds(count) {

    if(count > 0) {
        for (let i=0; i<=count; i++) {
            if(i%2 != 0) {
                console.log(i);
            }
        }
    } else if (count < 0) {
        for (let i=0; i>=count; i--) {
            if(i%2 != 0) {
                console.log(i);
            }          
              
        }
    }
}

printOdds(-5);


// Exercise 2 Section
// console.log("EXERCISE 2:\n==========\n");


// function checkAge(userName="user", age) {
//     let aboveSixteen = `Congrats ${userName}, you can drive!`;
//     let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;
    
//     if (!age) {
//         console.log("not valid age");
//     } else if (age < 16) {
//         console.log(belowSixteen);
//     }
//     else {
//         console.log(aboveSixteen);
//     }
// }

// checkAge("Megan", 25);

// function checkCoordinates(x,y) {
//  if(x==0 && y==0) {
//     console.log(`(${x},${y}) is on the x and y axis`);
//  } else if(x==0) {
//     console.log(`(${x},${y}) is on the x axis`);
//  } else if(y==0) {
//     console.log(`(${x},${y}) is on the y axis`);
//  } else if(x<0 && y>0) {
//     console.log(`(${x},${y}) is in Quadrant 1`);
//  } else if (x>0 && y>0) {
//     console.log(`(${x},${y}) is in Quadrant 2`);
//  } else if (x<0 && y<0) {
//     console.log(`(${x},${y}) is in Quadrant 3`);
//  } else {
//     console.log(`(${x},${y}) is in Quadrant 4`);
//  }
// }

// checkCoordinates(3,-1);


// function checkTriangle(side1,side2,side3) {
//     if(side1 + side2 <= side3 || side2 + side3 <= side1 || side1 + side3 <= side2) {
//         console.log(`Sides ${side1}, ${side2}, ${side3} make an invalid triangle`);
//     } else if ( side1 == side2 && side1 == side3) {
//         console.log(`Sides ${side1}, ${side2}, ${side3} make an equilateral triangle`);
//     } else if (side1 == side2 || side2 == side3 || side1 == side3) {
//         console.log(`Sides ${side1}, ${side2}, ${side3} make an isosceles triangle`);
//     } else {
//         console.log(`Sides ${side1}, ${side2}, ${side3} make a scalene triangle`);
//     }
// }

// checkTriangle(1,2,2.5);

function checkUsage(planLimit,day,usage) {
    let daysUsed= day;
    let daysRemaining = 30 - day;
    let averageDailyUse = usage/day;
    let averageDailyAllowed = planLimit/30;
    let exceedBy = (30 * averageDailyUse) - planLimit;
    let underBy = planLimit - (30 * averageDailyUse);
    let dataRemaining = planLimit - usage;
    let recUsePerDay = dataRemaining/daysRemaining;
    if (averageDailyUse > averageDailyAllowed) {
         console.log(`${daysUsed} days used, ${daysRemaining} days remaining. Average daily use: ${averageDailyUse} GB/day. You are EXCEEDING your average daily use (${averageDailyAllowed} GB/Day), continuing this high usage, you'll exceed your data plan by ${exceedBy} GB. To stay below your data plan, us no more than ${recUsePerDay} GB/day. `)
    } else if (averageDailyUse < averageDailyAllowed) {
        console.log(`${daysUsed} days used, ${daysRemaining} days remaining. Average daily use: ${averageDailyUse} GB/day. You are UNDER your average daily use (${averageDailyAllowed} GB/Day), continuing this  usage, you'll go under your data plan by ${underBy} GB. To use all of your data plan, use no more than ${recUsePerDay} GB/day. `)
    } else if (averageDailyUse == averageDailyAllowed) {
        console.log(`${daysUsed} days used, ${daysRemaining} days remaining. Average daily use: ${averageDailyUse} GB/day. You are on track to use your average daily use (${averageDailyAllowed} GB/Day), continuing this usage, you'll use your data. To stay below your data plan, use no more than ${recUsePerDay.toFixed(2)} GB/day. `)
    }

}

checkUsage(100,15,50);