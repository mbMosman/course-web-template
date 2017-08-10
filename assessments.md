---
layout: page
---

<h1>Assessments</h1>

<div>
{% assign assessments = site.assessments %}
{% for assess in assessments %}
  {% include assessment_panel.html assessment=assess %}

{% else %}

  <p>No assessments for this course.</p>

{% endfor %}
</div>
