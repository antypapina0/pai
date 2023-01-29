var addbutton = document.querySelector("#przycisk");
var table = document.querySelector("#tabela");

addbutton.addEventListener('click', function() {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    table.innerHTML = `
    <tr>
        <td>${day}</td>
        <td>${month}</td>
        <td>${year}</td>
    </tr> `;
});