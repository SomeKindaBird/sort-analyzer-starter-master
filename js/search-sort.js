// Library of Search & Sort Functions

// Use Bubble Sort algorithm to sort array argument
function bubbleSort(anArray) {
    for (let i = 0; i < anArray.length - 1; i++) {
        for (let n = 0; n < anArray.length - 1 - i; n++) {
            if (anArray[n] > anArray[n+1]) {
                let temp = anArray[n];
                anArray[n] = anArray[n+1];
                anArray[n+1] = temp;
            }
        }
    }
}

// Use Selection Sort algorithm to sort array argument
function selectionSort(anArray) {
    for (let i = 0; i < anArray.length - 1; i++) {

        let min = i;
        for (let n = i + 1; n < anArray.length; n++) {
            if (anArray[n] < anArray[min]) {
                min = n;
            }
        }

        let temp = anArray[min];
        anArray[min] = anArray[i];
        anArray[i] = temp;
    }
}

// Use Insertion Sort algorithm to sort array argument
function insertionSort(anArray) {
    for (let i = 1; i < anArray.length; i++) {
        let key = anArray[i];
        let n = i - 1;

        while (n >= 0 && anArray[n] > key) {
            anArray[n + 1] = anArray[n];
            n--;
        }
        anArray[n + 1] = key;
    }
}