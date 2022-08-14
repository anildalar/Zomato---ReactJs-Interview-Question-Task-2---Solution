console.log('Its working');

//Define

//cv = currentValue
//cvi = currentValue Index
//nv = nextValue
//nvi = nextValue Index
function getOptimalTimeBrakeForRider (rider1){
    //console.log(rider1);
    var OptimalBreak=[];

    //Pseduo COde
    //1. Find the sum of all tasks from 0 to i

    let totalTime=0;
    for (let i = 0; i < rider1.length; i++) {
        totalTime += rider1[i];
    }
    console.log('Total Minuites of a Rider1',totalTime);

    //2. Find the sum i+1 to n

    rider1.forEach(function(currentValue, index, arr){
        console.log('cv',currentValue);
        console.log('cvi',index);
        
        if(arr[index+1] !== undefined){
            console.log('nv',arr[index+1]);
            console.log('nvi',index+1);
        }

        var sum_o_i = 0;
        for (let i = 0; i <= index; i++) {
            sum_o_i += arr[i];
        }

        //2. Find the sum i+1 to n

        var sum_i_n = 0;
        for (let i = (index+1); i < arr.length; i++) {
            sum_i_n += arr[i];
        }

        //Check if 
        /*
            The optimal time for a break is between two tasks i and i+1, when the sum
            of all tasks from 0 to i equals the sum i+1 to n.
        */
        if(sum_o_i == sum_i_n){
            OptimalBreak.push(index); //push the index no
        }
        console.log("The sum i+1 to n is, ",sum_i_n );
        console.log("The sum of all tasks from 0 to i, ",totalTime );
    });

    //Check if OptimalBreak is an array and not empty if not then set it to null
    if(OptimalBreak.length == 0){
        return null;
    }else{
        return OptimalBreak;
    }
    
}

//Callit
let OptimalTimeBrake = getOptimalTimeBrakeForRider([1,4,1,3,1]);
let OptimalTimeBrake2 = getOptimalTimeBrakeForRider([1,4,1,3]);

console.log('Optimal Time for Rider 1 with TimeSlot [1,4,1,3,1] is ',OptimalTimeBrake);
console.log('Optimal Time for Rider 2 with TimeSlot [1,4,1,3] is ',OptimalTimeBrake2);
