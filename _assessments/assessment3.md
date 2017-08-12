---
title: Assessment 3
summary: "Short sentence or two that describes this assessment."
presentation: graph
---


Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus quis nisi vel bibendum. Pellentesque ac sapien nunc. Pellentesque turpis leo, maximus at felis fermentum, porta finibus quam. Donec tempus porta diam, vitae congue odio pellentesque et. Etiam volutpat sapien sed purus facilisis vestibulum. Nunc sollicitudin mauris vel nulla vehicula, vitae mollis dui malesuada. Aenean eget massa id nibh vestibulum tincidunt in vel diam. Donec ex ex, hendrerit nec fermentum fermentum, laoreet non nulla. Donec id tincidunt purus. Aliquam id risus ut diam pretium sagittis vel a ex. Nullam suscipit enim sit amet erat finibus efficitur. Cras ornare fermentum enim eu finibus. Fusce molestie commodo mi, in convallis purus. Proin magna nulla, imperdiet in arcu ut, pellentesque porta nisi. Suspendisse id sapien ut enim posuere vehicula. Nullam ultricies diam nibh, eu hendrerit ligula mollis sed.

<script>
$(document).ready(function() {

    var chartData = {
        datasets: [{
          label: '{{ page.title }}',
          data: [23, 40, 25, 10, 2]
        }],
        labels: ['A', 'B', 'C', 'D', 'F']
    };

    var ctx = $("#chart");
    var chart = new Chart(ctx, { type: 'line', data: chartData, options: { responsive: false } });

    var patternSwitch = document.querySelector('#pattern-switch');
    patternSwitch.addEventListener('change', function (e) {
      var fill = (e.currentTarget.checked) ? patterns : colors;
      chart.data.datasets[0].backgroundColor = fill;
      chart.update();
    });
});
</script>
