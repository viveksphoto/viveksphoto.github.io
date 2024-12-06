//function to replace text inside the scope of table with id "bird-data". The data that is supposed by replaced is in the last column each row. "IN-GA" should be replaced by "Goa, India".
function replaceText() {
    var table = document.getElementById("bird-data");
    var rows = table.getElementsByTagName("tr");
    for (var i = 1; i < rows.length; i++) {
        
        lastCell = rows[i].getElementsByTagName("td")[rows[1].getElementsByTagName("td").length-1]
        lastCell.innerHTML = lastCell.innerHTML.replace("IN-GA", "Goa, India");
        lastCell.innerHTML = lastCell.innerHTML.replace("IN-MH", "Maharastra, India");
        lastCell.innerHTML = lastCell.innerHTML.replace("IN-GJ", "Gujarat, India");
        lastCell.innerHTML = lastCell.innerHTML.replace("IN-UL", "Uttrakhand, India");
    }
}

//call replaceText function when the page is loaded
window.onload = replaceText;