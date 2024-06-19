let interestChart = null;

function calculateCompoundInterest() {
    const initial = parseFloat(document.getElementById('initial').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100;
    const years = parseInt(document.getElementById('years').value);
    const monthly = parseFloat(document.getElementById('monthly').value);

    let totalValue = initial;
    let totalContribution = initial;
    const yearsList = [0];
    const valuesList = [initial];
    const contributions = [0];

    for (let i = 0; i < years; i++) {
        yearsList.push(i + 1);
        for (let j = 0; j < 12; j++) {
            totalValue += monthly;
            totalContribution += monthly;
        }
        totalValue *= (1 + rate);
        contributions.push(totalContribution);
        valuesList.push(totalValue);
    }

    document.getElementById('result').innerText = 
        `After ${years} years, your savings will be worth £${formatCurrency(totalValue)}, having earned interest of £${formatCurrency(totalValue - totalContribution)}.`;

    // Clear previous chart
    if (interestChart) {
        interestChart.destroy();
    }

    // Render the chart
    const ctx = document.getElementById('interestChart').getContext('2d');
    interestChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: yearsList,
            datasets: [{
                label: 'Total Value',
                data: valuesList,
                borderColor: '#657B76',
                fill: false
            }, {
                label: 'Total Contribution',
                data: contributions,
                borderColor: '#CB4B16',
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Years'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Amount (£)'
                    }
                }
            }
        }
    });

    // Render the table
    const tableBody = document.getElementById('resultTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = ''; // Clear previous results
    for (let i = 0; i < years; i++) {
        const row = tableBody.insertRow();
        const yearCell = row.insertCell(0);
        const valueCell = row.insertCell(1);
        const contributionCell = row.insertCell(2);

        yearCell.textContent = yearsList[i];
        valueCell.textContent = `£${formatCurrency(valuesList[i])}`;
        contributionCell.textContent = `£${formatCurrency(contributions[i])}`;
    }
}

function formatCurrency(value) {
    return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}
