---
layout: layouts/fotografia.njk
title: Fotos de blescat
---

<div class="darkroom">
    <div class="camera">

        <img class="camera-image" src="/images/camera3bgless2.png">

        <div class="camera-screen">

            <div class="photos">

                {% for art in collections.fotografia %}


                <a href="{{ fotos.data.image }}" class="glightbox art-card">

                    <img src="{{ fotos.data.image }}" alt="{{ fotos.data.title }}">

                    <span>{{ fotos.data.title }}</span>

                </a>

                {% endfor %}

            </div>
        

        </div>

    </div>

</div>