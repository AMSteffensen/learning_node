console.log('hello')

var item = document.getElementById('remove').addEventListener('click', function() {
    var value = document.getElementById('item').value;
    console.log(item.value)

    // if (value) {
    //     removeItem(value);
    // }
})


function removeItem(value) {
    console.log(value)
}
