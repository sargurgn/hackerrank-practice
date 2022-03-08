function myPromiseAll(promises) {
    const result = [];
    return new Promise((resolve, reject) => {
        promises.forEach((p, i) => {
            p.then((res) => {
                result.push(res);
                if (i === promises.length - 1) {
                    resolve(result);
                }
            }).catch((err) => reject(err))
        });
    }) 
    
}

myPromiseAll([Promise.resolve('hi'), Promise.resolve('hello')]).then((res) => console.log(res));
Promise.all([Promise.resolve('hi'), Promise.resolve('hello')]).then((res) => console.log(res));
