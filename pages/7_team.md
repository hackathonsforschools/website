---
layout: page
title: Team
permalink: /team/
---

<div class="item-container">
  {% for person in site.data.core_team %}
  <div class="item">
    <img class="picture" src="/assets/img/team/{{ person.picture | relative_url }}" alt="picture of {{ person.name }}">
    <div class="info">
      <p class="name">{{ person.name }}</p>
      <p class="role">{{ person.role }}</p>
      <p class="location">{{ person.location }}</p>
    </div>
  </div>
  {% endfor %}
</div>
