---
layout: page
title: Member Events
permalink: /events/
---

Here are all the upcoming member events happening around the UK! 

---
## Calendar 

<div class="item-container">
  {%- for partner in site.data.events -%}
  <div class="item">
    <img class="picture" src="{{ partner.logo | relative_url }}" alt="picture of {{ partner.name }}">
    <div class="info">
      <a style="color=black;" href="{{ partner.site }}"><p class="name">{{ partner.name }}</p></a>
      <p class="date">{{ partner.date}}</p>
      <p class="description">{{ partner.description}}</p>
    </div>
  </div>
  {%- endfor -%}
</div>

---

## Interested in becoming a member event?
Please get in contact if you would like to become a member event! We'd love to help you make the most out of your event. Get in touch by [email](mailto:contact@hackathonsforschools.com "Email").
