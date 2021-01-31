
const xhttp = new XMLHttpRequest();
const url='http://localhost:3000';


$(".delete-icon").click(function() {
    let indx = this.attributes.name.value;
    xhttp.open("POST", url + "/delete?index=" + indx);
    xhttp.send();
    xhttp.onreadystatechange = (e) => {
       window.location.href = url;  //Server wont redirect the page since the request is from ajex request.
    }                               //So we waiting for response and redirect(here refresh) the page by our own.
});

