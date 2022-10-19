/** Exercise 01 - Coins **/


console.log("Input the number");
process.stdin.setEncoding('utf8');
var number;
process.stdin.on('readable', function(number) {
    number = process.stdin.read();
    
    if (number !== null && 0<number && number<=10) 
    {
        let text=number.toString();
        const myarray=text.split(".");
        let num1=myarray[0];
        let num2=myarray[1];
        // 15.75 
        let quarter=0; //25's
        let dime=0; //10's
        let pennie=0; // 1's

        let n=num2;
        console.log(typeof(n/25));
        if(n)
        {
            if(n/25!=0)
            {
                quarter+=Math.trunc(n/25);
                n=n%25
            }
            if(n/10!=0)
            {
                dime+=Math.trunc(n/10);
                n=n%10;
            }
            if(n)
            {
                pennie+=n;
            }
        }

        console.log((parseInt(num1)?parseInt(num1)+' dollars'+' ':'')+ (quarter? quarter+' quarters'+' ':'')+(dime? dime+' dimes'+' ': '')+(pennie?pennie+' pennies'+'':''));
        process.exit();

    }
    else{
        console.log("Enter a valid number");
    }
    }
)

    


