function fibonacci(num) {

    var fib = [0, 1]
            for (i=0; i<=num; i++){
                var a = fib[i]
                var b = fib[i+1]
                var aux = a + b
                fib.push(aux)
            }
    return(fib[num])
    }
console.log(fibonacci(10))