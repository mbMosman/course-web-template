---
layout: page
---

<h1>Learning Experiences</h1>

<div>
{% assign experiences = site.experiences %}
{% for ex in experiences %}
  {% include experience_panel.html experience=ex %}

{% else %}

  <p>No experiences for this course.</p>

{% endfor %}
</div>
