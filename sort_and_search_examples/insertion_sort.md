# Insertion Sort

## Sort Adımları

[22,27,16,2,18,6]

1. İlk iki elemana bakılır, 22<27 olduğundan sıralama değişmez.

2. Üçüncü elemana geçilir. 16<27 olduğundan 16 ve 27 yer değiştirir, 16<22 olduğundan 16 ve 22 de yer değiştirir: **[16,22,27,2,18,6]**

3. Dördüncü eleman için; 2<27, 2<22 ve 2<16 olduğundan: **[2,16,22,27,18,6]**

4. Beşinci eleman için; 18<27 ve 18<22 iken 18>16 ve 18>2 elde edilir. 27 ve 22 ile yer değiştirir: **[2,16,18,22,27,6]**

5. Altıncı eleman için; 6<27, 6<22, 6<18, 6<16 ve 6>2 olduğundan: **[2,6,16,18,22,27]**

## Big-O Gösterimi

$O(n^2)$

## 18 sayısı için time complexity:

Average Case

## [7,3,5,8,2,9,4,15,6] dizisi için ilk 4 adım:

1. İlk iki elemana bakılır. 3<7 olduğundan bu iki eleman yer değiştirir: **[3,7,5,8,2,9,4,15,6]**

2. Üçüncü eleman için; 5<7 ve 5>3 olduğundan ikinci ve üçüncü eleman yer değiştirir: **[3,5,7,8,2,9,4,15,6]**

3. Dördüncü eleman için; 8>7, 8>5 ve 8>3 olduğundan değişim olmaz.

4. Beşinci eleman için; 2<8, 2<7, 2<5 ve 2<3 olduğundan bu eleman listenin başına geçer: **[2,3,5,7,8,9,4,15,6]**