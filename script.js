// Simple fake chart for now
const ctx = document.getElementById('priceChart').getContext('2d');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["1h", "2h", "3h", "4h", "5h", "6h"],
    datasets: [{
      label: "BTC Price",
      data: [42000, 42100, 41900, 42300, 42600, 42120],
      borderWidth: 2,
      borderColor: "#000",
      tension: 0.4,
      fill: false
    }]
  },
  options: {
    plugins: { legend: { display: false }},
    scales: { x: { grid: { display: false }}, y: { grid: { display: false }}}
  }
});
