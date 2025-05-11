var _this = this;
var panel = document.querySelectorAll('.panel');
panel.forEach(function (element) {
    element.addEventListener('click', function () {
        _this.removeClassList();
        element.classList.add('active');
    });
});
function removeClassList() {
    panel.forEach(function (element) {
        element.classList.remove('active');
    });
}
