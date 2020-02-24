---
layout: page
title: Partners
permalink: /partners/
---

Without our partners, Hackathons for Schools Association wouldn't be possible. They provide us with the resources and information that we use to run the highest quality hackathons and workshops in schools all across the country.

---

<div class="item-container">
  {%- for partner in site.data.partners -%}
  <div class="item">
    <img class="picture" src="/assets/img/partners/{{ partner.logo | relative_url }}" alt="picture of {{ partner.name }}">
    <div class="info">
      <a style="color=black;" href="{{ partner.site }}"><p class="name">{{ partner.name }}</p></a>
      <p class="description">{{ partner.description}}</p>
    </div>
  </div>
  {%- endfor -%}
</div>

---

## Interested in becoming one of our partners?
Please get in contact if you would like to join us as a partner! We will be happy to send you any more information that you require! We can be reached by [email](mailto:contact@hackathonsforschools.com "Email") or via any of our social media pages (below).
