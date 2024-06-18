function calculateCompoundInterest() {
    const initial = parseFloat(document.getElementById('initial').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100;
    const years = parseInt(document.getElementById('years').value);
    const monthly = parseFloat(document.getElementById('monthly').value);

    let totalValue = initial;
    let totalContribution = initial;
    const yearsList = [];
    const valuesList = [];
    const contributions = [];

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
        `After ${years} years, your savings will be worth £${totalValue.toFixed(2)}, having earned interest of £${(totalValue - totalContribution).toFixed(2)}.`;

    // Render the chart
    const ctx = document.getElementById('interestChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: yearsList,
            datasets: [{
                label: 'Total Value',
                data: valuesList,
                borderColor: 'blue',
                fill: false
            }, {
                label: 'Total Contribution',
                data: contributions,
                borderColor: 'green',
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
}