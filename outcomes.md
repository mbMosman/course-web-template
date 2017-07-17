---
layout: default
---

<header><h1>Learning Outcomes</h1></header>

<main class="container">

{% assign outcomes = site.outcomes | sort: 'sort-order' %}
{% for outcome in outcomes %}
<div class="outcome {% cycle 'section-bg1', 'section-bg2' %}">

  <h2>{{ outcome.title }}</h2>
  <p>{{ outcome.content | markdownify }}</p>

</div>
{% else %}

  <p>No outcomes for this course.</p>

{% endfor %}

</main>
