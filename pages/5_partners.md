---
layout: page
title: Partners
permalink: /partners/
---

<div class="person-container">
  {%- for partner in site.data.partners -%}
  <div class="person">
    <img class="picture" src="{{ partner.logo | relative_url }}" alt="picture of {{ partner.name }}">
    <div class="info">
      <a style="color=black;" href="{{ partner.site }}"><p class="name">{{ partner.name }}</p></a>
      <p class="location">{{ partner.description}}</p>
    </div>
  </div>
  {%- endfor -%}
</div>

---

## Interested in becoming one of our partners?
Please get in contact if you would like to join us as a partner! We will be happy to send you any more information that you require, get in touch by using any of the links at the bottom of the site, or by using [this link](mailto:contact@hackathonsforschools.com "Email").
