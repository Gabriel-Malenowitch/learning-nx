const containerElement = document.getElementById('super_best_better_better_than_better_html_tag_off_all_world');
let count = 0

setInterval(() => {
    if(containerElement) {
        containerElement.innerHTML = `Count: ${count}`
        count++
    }
}, 1000)