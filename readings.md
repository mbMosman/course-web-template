---
layout: default
---

<header><h1>Readings</h1></header>

<main class="container">

{% assign readings = site.readings %}
{% for read in readings %}
  {% include reading_panel.html reading=read %}

{% else %}

  <p>No readings for this course.</p>

{% endfor %}

</main>
