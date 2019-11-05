---
layout: page
title: Team
feature-img: "assets/img/background.png"
permalink: /team/
styles:
    - /css/team.scss
---

<div class="person-container">
  {% for person in site.data.core_team %}
  <div class="person">
    <img class="picture" src="{{ person.picture | relative_url }}" alt="picture of {{ person.name }}">
    <div class="info">
      <p class="name">{{ person.name }}</p>
      <p class="role">{{ person.role }}</p>
      <p class="location">{{ person.location }}</p>
    </div>
  </div>
  {% endfor %}
</div>
