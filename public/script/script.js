
const xhttp = new XMLHttpRequest();
const url='http://localhost:3000';


$(".delete-icon").click(function() {
    let indx = this.attributes.name.value;
    xhttp.open("POST", url + "/delete?index=" + indx);
    xhttp.send();
    xhttp.onreadystatechange = (e) => {
       window.location.href = url;
    }
    
});

