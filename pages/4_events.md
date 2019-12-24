---
layout: page
title: Member Events
permalink: /events/
---

Here are all the upcoming member events happening around the UK! 

---
## Calendar 

<div class="item-container">
  {%- for event in site.data.events -%}
  <div class="item">
    <img class="picture" src="{{ event.logo | relative_url }}" alt="picture of {{ event.name }}">
    <div class="info">
      <a style="color=black;" href="{{ event.site }}"><p class="name">{{ event.name }}</p></a>
      <p class="date">{{ event.date}}</p>
      <p class="description">{{ event.description}}</p>
    </div>
  </div>
  {%- endfor -%}
</div>

---

## Interested in becoming a member event?
Please get in contact if you would like to become a member event! We'd love to help you make the most out of your event. Get in touch by [email](mailto:contact@hackathonsforschools.com "Email").
