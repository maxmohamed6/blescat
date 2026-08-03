---
layout: layouts/diario.njk
title: O diário de blescat
---

<div class="terminal">
    <div class="terminal-header">
        <span>C:\Users\maxmoh\blescat\diario</span>
        <span class="close-terminal">X</span>
    </div>

    <div class="terminal-body">
        <p>C:\Users\Max\blescat> muito pensamento cabeça de cimento.</p>
        <p>C:\Users\Max\blescat> <span class="cursor">█</span></p>

        <ul class="post-list">
            {% for post in collections.diario | reverse %}
                <li>
                    <a href="{{ post.url }}">
                        > [{{ post.date | date: "%d/%m/%Y %H:%M" }}] {{ post.data.title }}
                    </a>
                </li>
            {% endfor %}
        </ul>

    </div>
</div>