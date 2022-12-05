import fs from 'fs';

const fileInput = fs.readFileSync('input.txt', 'utf-8').toString().trim().split('\n');
const getEachCaloriesForEachElf = () => {
  // We get a text file, and a elf is the amount of lines there is numbers and stops with a blank line break
  // We want to get each elf's calories

  // We could go for each line and add calories until we hit a blank line
  // And when we hit a blank line we add it to the index and continue with next elf

  let index = 0;
  const elvesCalories: number[] = [];
  for (let i = 0; i < fileInput.length; i++) {
    const calories = parseInt(fileInput[i]);
    if (isNaN(calories)) {
      index++;
    } else {
      elvesCalories[index] = elvesCalories[index] ? elvesCalories[index] + calories : calories;
    }
  }
  return elvesCalories;
};

const solution1 = () => {
  return Math.max(...getEachCaloriesForEachElf());
};

const solution2 = () => {
  const topThreeAmounts = getEachCaloriesForEachElf()
    .sort((a, b) => b - a)
    .slice(0, 3);
  return topThreeAmounts.reduce((a, c) => a + c, 0);
};

console.log(`Solution: ${solution1()}, solution2: ${solution2()}`);
