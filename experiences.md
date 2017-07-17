---
layout: default
---

<header><h1>Learning Experiences</h1></header>

<main class="container">

{% assign experiences = site.experiences %}
{% for ex in experiences %}
  {% include experience_panel.html experience=ex %}

{% else %}

  <p>No experiences for this course.</p>

{% endfor %}

</main>
