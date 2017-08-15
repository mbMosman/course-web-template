---
title: Assessment 1
summary: "Short sentence or two that describes this assessment."
presentation: bar_chart
---


Etiam volutpat sapien sed purus facilisis vestibulum. Nunc sollicitudin mauris vel nulla vehicula, vitae mollis dui malesuada. Aenean eget massa id nibh vestibulum tincidunt in vel diam. Donec ex ex, hendrerit nec fermentum fermentum, laoreet non nulla. Donec id tincidunt purus.

<script>
$(document).ready(function() {

    var colors = ['#00B016', '#00DC1B', '#FFAB00', '#E30B00', '#B00900'];
    var patterns = pattern.generate(colors);

    var chartData = {
        datasets: [{
          label: '{{ page.title }}',
          data: [23, 40, 25, 10, 2],
          backgroundColor: colors
        }],
        labels: ['A', 'B', 'C', 'D', 'F']
    };

    var ctx = $("#chart");
    var chart = new Chart(ctx, { type: 'bar', data: chartData, options: { responsive: false } });

    var patternSwitch = document.querySelector('#pattern-switch');
    patternSwitch.addEventListener('change', function (e) {
      var fill = (e.currentTarget.checked) ? patterns : colors;
      chart.data.datasets[0].backgroundColor = fill;
      chart.update();
    });
});
</script>
