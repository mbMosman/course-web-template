---
title: Assessment 2
summary: "Short sentence or two that describes this assessment."
presentation: pie_chart
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus quis nisi vel bibendum. Pellentesque ac sapien nunc. Pellentesque turpis leo, maximus at felis fermentum, porta finibus quam. Donec tempus porta diam, vitae congue odio pellentesque et.



<script>
$(document).ready(function() {

    var colors = ['#00B016', '#00DC1B', '#FFAB00', '#E30B00', '#B00900'];
    var patterns = pattern.generate(colors);

    var chartData = {
        datasets: [{
            label: '{{ page.title }}',
            data: [40, 23, 25, 10, 2],
            backgroundColor: colors
        }],
        labels: ['A', 'B', 'C', 'D', 'F']
    };

    var ctx = $("#chart");
    var chart = new Chart(ctx, { type: 'pie', data: chartData, options: { responsive: false } });

    var patternSwitch = document.querySelector('#pattern-switch');
    patternSwitch.addEventListener('change', function (e) {
      var fill = (e.currentTarget.checked) ? patterns : colors;
      chart.data.datasets[0].backgroundColor = fill;
      chart.update();
    });
});
</script>
