---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% include base_path %}

{% if site.author.googlescholar %}
  <p class="archive__intro">You can also find my articles on <a href="{{ site.author.googlescholar }}">Google Scholar</a>.</p>
{% endif %}

<div class="software-grid">
  {% for post in site.publications reversed %}
    {% include archive-single-tile.html %}
  {% endfor %}
</div>
