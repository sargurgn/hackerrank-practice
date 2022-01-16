function closureExample() {
    for (var index = 1; index <= 5; index++) {
        function closure(i) {
            setTimeout(function () {
                console.log(i)
            }, i * 1000)
        }
        closure(index)
    }
}
closureExample()