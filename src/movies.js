/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arrMovies){
    
    let copyMovies = Array.from(arrMovies);

    function orderNames(a,b){
        if (a.title < b.title){
            return -1;
        } else if (a.title > b.title){
            return 1;
        } else {
            return 0;
        };
    };

    function orderYear(a,b){
        return a.year -b.year;
    };

    copyMovies.sort(orderNames);
    return copyMovies.sort(orderYear);
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average