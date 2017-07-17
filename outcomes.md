---
layout: page
---

<header><h1>Learning Outcomes</h1></header>

<main class="container">

{% assign outcomes = site.outcomes | sort: 'sort-order' %}
{% assign course_outcomes = site.data.course_outcomes | sort: 'sort-order' %}

{% for course_outcome in course_outcomes %}
<div class="panel panel-default">

  <div class="panel-heading">
    <h2 class="panel-title">{{ course_outcome.text }}</h2>
  </div>
  <ul class="list-group">

  {% assign match_found = false %}
  {% for outcome in outcomes %}
    {% if  outcome.course_outcome == course_outcome.id %}
      {% assign match_found = true %}
      <li class="list-group-item"><a class="block-link" href="{{ outcome.url }}"><div class="outcome">
      <h3 class="panel-title">{{ outcome.title }}</h3>
      {{ outcome.content | markdownify }}
      </div></a></li>
    {% endif %}
  {% endfor %}
  {% if match_found == false %}
    <li class="list-group-item">No supporting module outcomes found.</li>
  {% endif %}
  </ul>
</div>
{% else %}

  <p>No course outcomes configured for this course.</p>

{% endfor %}

</main>
