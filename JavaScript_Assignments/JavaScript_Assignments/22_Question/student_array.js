// The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

function sortArrayMinMax(array_name){
    let sorted_array = array_name.sort();
    console.log("Sorted array:", sorted_array);

    // Find Min
    let min_value = Math.min(...sorted_array);
    console.log("Minimum Value from array is", min_value);

    // Find Max
    let max_value = Math.max(...sorted_array);
    console.log("Maximum Value from array is", max_value);
}

sortArrayMinMax(ages);

// Find the median age(one middle item or two middle items divided by two)

function findMedian(ages) {
    ages.sort(function(a, b) { return a - b });
    var n = ages.length;
    if (n % 2 === 0) {
      return (ages[n/2] + ages[n/2 - 1])/2;
    } else {
      return ages[Math.floor(n/2)];
    }
}

console.log("Median of ages is", findMedian(ages))

// Find the average age(all items divided by number of items)

function findAverage(arr) {
    let sum = 0;
    for (let i=0; i < arr.length; i++){
        sum += arr[i];
    }
    let avg_array = sum / arr.length;
    return avg_array;
}

console.log("Average of an array", findAverage(ages));

// Find the range of the ages(max minus min)

function findRange(arr) {
    // Find Min
    let min_value = Math.min(...arr);
    // Find Max
    let max_value = Math.max(...arr);
    // Find Range
    let range = max_value - min_value;
    console.log("Range of given array", range);
}

findRange(ages);

// Compare the value of (min - average) and (max - average), use abs() method

function compareMinavgMaxavg(arr) {
    // Find Min
    let min_value = Math.min(...arr);
    // Find Max
    let max_value = Math.max(...arr);
    // avg
    let avg = findAverage(arr);

    if ((Math.abs(min_value) - Math.abs(avg)) > (Math.abs(max_value) - Math.abs(avg))){
        console.log("Min - Average is greater than Max - Average");
    } else {
        console.log("Max - Average is greater than Min - Average");
    }
}

compareMinavgMaxavg(ages);