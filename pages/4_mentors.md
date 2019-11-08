---
layout: page
title: Mentors
feature-img: "assets/img/background.png"
permalink: /mentors/
styles:
    - /css/team.scss
---

## It wouldn't be possible to do any of what we do without our fantastic team of mentors!

### How can they help?

If you would like assistance with your event, you are more than welcome to make use of one of our fantastic mentors who will travel to you. All of the mentors will be able to assist with your student's technical issues throughout the event. They are well versed with the nature of hackathons, both as attendees and organisers, so have a wealth of experience.

### Who are the mentors?

<div class="person-container">
  {% for person in site.data.mentors %}
  <div class="person">
    <img class="picture" src="{{ person.picture | relative_url }}" alt="picture of {{ person.name }}">
    <div class="info">
      <p class="name">{{ person.name }}</p>
      <p class="location">{{ person.location }}</p>
      <div class="skills-container">
        {% for skill in person.skills %}
          <div class="skill {{ skill }}">{{ skill }}</div>
        {% endfor %}
      </div>
    </div>
  </div>
  {% endfor %}
</div>

<!-- define colours for each language, this must be inline because liquid does not work in SCSS -->
<style>{% for lang in site.data.lang_colours %}
.skill.{{ lang.name }} { color: {{ lang.fg_colour }}; background: {{ lang.bg_colour }}; } {% endfor %}
</style>
