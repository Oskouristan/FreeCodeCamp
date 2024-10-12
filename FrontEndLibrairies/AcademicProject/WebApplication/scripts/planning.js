fetch('planning.json')
    .then(response => response.json())
    .then(data => {
        let container = document.getElementById('planning-container');
        data.days.forEach(day => {
            let table = `
                <div class="col-md-6 mb-4">
                    <div class="card">
                        <div class="card-header bg-anthracite text-white">
                            <h5>${day.day}</h5>
                            <p>${day.date}</p>
                        </div>
                        <div class="card-body p-0">
                            <table class="table table-striped table-hover table-bordered mb-0">
                                <tbody>`;
            
            day.schedule.forEach(event => {
                table += `
                    <tr>
                        <td width="30%">${event.time}</td>
                        <td width="70%">${event.event}</td>
                    </tr>`;
            });

            table += `</tbody></table></div></div></div>`;
            container.innerHTML += table;
        });
    });
