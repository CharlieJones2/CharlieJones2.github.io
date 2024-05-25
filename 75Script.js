document.addEventListener('DOMContentLoaded', function() {
    loadData();
});

function loadData() {
    fetch('75hardtemplate.csv')
        .then(response => response.text())
        .then(csvText => {
            const data = csvToArray(csvText);
            displayData(data);
        });
}

function csvToArray(str, delimiter = ',') {
    const rows = str.trim().split('\n');
    const headers = rows[0].split(delimiter);
    const arr = rows.slice(1).map(row => {
        const values = row.split(delimiter);
        return headers.reduce((object, header, index) => {
            object[header] = values[index];
            return object;
        }, {});
    });
    return arr;
}

function displayData(data) {
    const dataDiv = document.getElementById('data');
    dataDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
}

function updateTasks() {
    const form = document.getElementById('tracker-form');
    const formData = new FormData(form);
    const person = formData.get('person');
    const currentDate = new Date().toLocaleDateString('en-GB').replace(/\//g, '-');

    const tasks = {
        1: formData.get('task1') !== null,
        2: formData.get('task2') !== null,
        3: formData.get('task3') !== null,
        4: formData.get('task4') !== null,
        5: formData.get('task5') !== null,
        6: formData.get('task6') !== null,
    };

    fetch('75hardtemplate.csv')
        .then(response => response.text())
        .then(csvText => {
            let data = csvToArray(csvText);
            data = data.map(row => {
                if (row.date === currentDate && row.person === person) {
                    Object.keys(tasks).forEach(taskNum => {
                        if (tasks[taskNum]) {
                            row.completed = 1;
                        }
                    });
                }
                return row;
            });
            saveData(data);
        });
}

function saveData(data) {
    const csvContent = arrayToCsv(data);
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = '75hardtemplate.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    document.getElementById('message').textContent = 'Tasks updated successfully!';
}

function arrayToCsv(data) {
    const headers = Object.keys(data[0]);
    const rows = data.map(row => headers.map(header => row[header]).join(','));
    return [headers.join(','), ...rows].join('\n');
}
