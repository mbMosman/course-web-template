---
layout: page
---

<header><h1>Learning Experiences</h1></header>

<main class="container">

{% assign experiences = site.experiences | sort: 'sort-order' %}
{% for experience in experiences %}
<div class="experience {% cycle 'section-bg1', 'section-bg2' %}">

  <h2>{{ experience.title }}</h2>
  <p>{{ experience.summary }}</p>

</div>
{% else %}

  <p>No experiences for this course.</p>

{% endfor %}

</main>
