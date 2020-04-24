---
layout: page
title: Team
permalink: /team/
---

Here's the awesome people behind Hackathons for Schools!

<div class="item-container">
  {% for person in site.data.core_team %}
  <div class="item">
    <img class="team-picture" src="/assets/img/team/{{ person.picture | relative_url }}" alt="picture of {{ person.name }}">
    <div class="info">
    <hr>
      <p class="name">{{ person.name }}</p>
      <p class="role">{{ person.role }}</p>
      <p class="location">{{ person.location }}</p>
      <hr>
    </div>
  </div>
  {% endfor %}
</div>
