// Задачка с 1 лекции "Введение в программирование" 2 человека идут навстречу друг другу и 
// от первого бежит собока к 2му человеку. Нужно найти сколько раз собака сделает пробежек.
// На растоянии 10 между людьми, цикл должен остановится.
// У меня на калькуляторе получилось 6 пробежек (я считал немного по другому), здесь в программе 5.

Ferst_Friend_Speed = 1;
Second_Friend_Speed = 2;
Friend = 1;
Dog_Speed = 3;
length = 10000;
count_dog = 0;
time = 0;
Minimum_length = 10
       while(length>Minimum_length){
        if (Friend = 1){
         time = length / (Second_Friend_Speed + Dog_Speed)
         Friend = 2;
        };
       time = length / (Ferst_Friend_Speed + Dog_Speed)
       Friend = 1;   
       length = length - (Ferst_Friend_Speed + Second_Friend_Speed) * time;
       count_dog++;
       };

console.log(count_dog);