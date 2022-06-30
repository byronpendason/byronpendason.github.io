<nav>
  <ul>
  {% for item in site.header_pages %}
    <li><a class="{% if page.url == item.link %}active{% endif %}" href="{{item.link}}">{{item.title}}</a></li>
  {% endfor %}
  </ul>
</nav>

{{ content }}
