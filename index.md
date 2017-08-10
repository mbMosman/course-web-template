---
layout: page
title: Home
---

# Welcome to {{ site.data.course_info.number }} {{ site.data.course_info.name }}

## Course Description
{{ site.data.course_info.course_description | markdownify }}


## Course Goals
{% include course_goal_list.html %}


## Text Book{% if site.data.textbooks.size > 1 %}s{% endif %}
{% include textbook_list.html %}


## Course Staff

### Instructor{% if site.data.instructors.size > 1 %}s{% endif %}
{% include instructor_list.html %}

{% assign count_student_instructors = site.data.student_instructors.size %}
{% if count_student_instructors > 0 %}

### Assistant Instructor{% if count_student_instructors > 1 %}s{% endif %}
{% include student_instructor_list.html %}
{% endif %}
