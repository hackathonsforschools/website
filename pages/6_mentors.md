---
layout: page
title: Mentors
permalink: /mentors/
hide: true
---

## It wouldn't be possible to do any of what we do without our fantastic team of mentors!

### How can they help?

If you would like assistance with your event, you are more than welcome to make use of one of our fantastic mentors who will travel to you. All of the mentors will be able to assist with your student's technical issues throughout the event. They are well versed with the nature of hackathons, both as attendees and organisers, so have a wealth of experience.

Each mentor has their own unique set of skills and areas of expertise. To help you find the most suitable mentor to assist you, look out for badges like this: <span class="skill skill-java">Java</span>. Each mentor has chosen their top skills which they are happy to help people with.

### Who are the mentors?

<div class="item-container">
  {%- for person in site.data.mentors -%}
  <div class="item">
    <img class="picture" src="/assets/img/team/{{ person.picture | relative_url }}" alt="picture of {{ person.name }}">
    <div class="info">
      <p class="name">{{ person.name }}</p>
      <p class="location">{{ person.location }}</p>
      <div class="skills-container">
        {%- for id in person.skills -%}
          {%- assign details = site.data.skills[id] -%}
          <div class="skill skill-{{ id }}" title="{{ details.desc }}">{{ details.name }}</div>
        {% endfor %}
      </div>
    </div>
  </div>
  {%- endfor -%}
</div>

### What do their skills mean?

<table>
  <thead><tr>
      <th>Skill</th>
      <th>Description</th>
  </tr></thead>
  <tbody>
{% for skill in site.data.skills %}
  {%- assign id = skill[0] %} {% assign details = skill[1] -%}
  <tr><td>
    <div class="skill skill-{{id}}">{{ details.name }}</div>
  </td><td>
    {{details.desc}}
  </td></tr>
{% endfor %}
  </tbody>
</table>

<!-- define colours for each language, this must be inline because liquid does not work in SCSS -->
<style>
{% for skill in site.data.skills %}
  {%- assign id = skill[0] -%}
  {%- assign details = skill[1] -%}
  .skill.skill-{{ id }} { color: {{ details.fg_colour }}; background: {{ details.bg_colour }}; }
{% endfor %}
</style>
