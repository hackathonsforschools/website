---
layout: page
title: Resources
permalink: /resources/
---

All of these headings are a link to their own pages where you can learn more!

---

<div class="item-container">
  {% for resource in site.data.resources %}
    <div class="resource-container">
      <br><a class="resource-button" href="{{ resource.link }}">{{ resource.name }}</a><br>
    </div>
  {% endfor %}
</div>

## Other Resources

Our friends over at Hackathon Hackers Europe (HHEU) have a wonderful wiki on how to organise your own hackathon. Find it at [hack.athon.uk](https://hack.athon.uk/organise/gettingstarted/).
