const doctorName = document.getElementById("doctorName");

window.onload = async function fetchData() {
    var uid = localStorage.getItem("mname")

    doctorName.innerText = uid;
}