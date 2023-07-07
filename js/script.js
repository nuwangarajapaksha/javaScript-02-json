function display(vehicle){
    const vehicleInfo = `
    <h1>Brand Model</h1>
    <img width="10%" height="10%" src="${vehicle.image}">
    <table class="table-danger">
        <tr>
            <th>Price: </th>
            <td>${vehicle.price}</td>
        </tr>
        <tr>
            <th>Brand: </th>
            <td>${vehicle.brand}</td>
        </tr>
        <tr>
            <th>Model: </th>
            <td>${vehicle.model}</td>
        </tr>
        <tr>
            <th>Year: </th>
            <td>${vehicle.year}</td>
        </tr>
        <tr>
            <th>Engine: </th>
        </tr>
        <tr>
            <td>Type: </td>
            <td>${vehicle.engine.type}</td>
        </tr>
        <tr>
            <td>Capacity: </td>
            <td>${vehicle.engine.capacity}</td>
        </tr>
        <tr>
            <th>Features: </th>
            <td>${vehicle.features[0]}<br>${vehicle.features[1]}<br>${vehicle.features[2]}</td>
        </tr>
        <tr>
            <th>Colour: </th>
            <td>${vehicle.colour}</td>
        </tr>
    </table>`
    document.querySelector(".container").innerHTML = vehicleInfo
}

const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function (){
    if (xhr.readyState === 4 && xhr.status === 200){
        console.log(JSON.parse(xhr.responseText));
        display(JSON.parse(xhr.responseText));
    }
}
xhr.open('GET','./js/vehicle.json');
xhr.send();