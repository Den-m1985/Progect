numbers = [1,2,3,4,5,6];
size = numbers.length
for (index = 0;index < size/2; index++) {
    t = numbers[index]
    numbers[index] = numbers [size - 1 - index];
    numbers [size - 1 - index] = t; 
};
       
console.log(numbers);

// Меняем массив зеркально