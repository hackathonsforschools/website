---
layout: page
title: Mentors
feature-img: "assets/img/background.png"
permalink: /mentors/
---

## It wouldn't be possible to do any of what we do without our fantastic team of mentors!

### How can they help?

If you would like assistance with your event, you are more than welcome to make use of one of our fantastic mentors who will travel to you. All of the mentors will be able to assist with your student's technical issues throughout the event. They are well versed with the nature of hackathons, both as attendees and organisers, so have a wealth of experience.

### Who are the mentors?

<table>
    <tr>
        <th>Name</th>
        <th>Picture</th>
        <th>Location</th>
    </tr>
    {% for person in site.data.mentors %}
    <tr>
        <td>{{ person.name }}</td>
        <td><img style="max-width: 30vw" src="{{ person.picture }}"></td>
        <td>{{ person.location }}</td>
    </tr>
    {% endfor %}
</table>