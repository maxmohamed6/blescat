---
layout: layouts/base.njk
title: blescat
---

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css">

<div class="container">

    <aside id="left-box" style="margin-right: 0px;">

        <div style="text-align: center;">
            <img class="pfp" src="/images/pfp-gif.gif" style="width: 150px; border: 3px solid white; border-radius: 5px" alt = "blescat's pfp">

            <h1> "blescat" </h1>
            <p> webdev | artista </p>
            <p> <span id="idade"></span> 🇧🇷 </p>

            <img src="https://em-content.zobj.net/source/serenityos/392/flag-brazil_1f1e7-1f1f7.png" width="20" height="18" style="margin-bottom: -5px; font-weight: bold">
            <span id="relogio"></span>

        </div>
<br>

        <div style="border: 2px solid white; padding: 20px; text-align: center; margin-right: 20%; margin-left: 20%;">
            <h3>site button:</h3>
            <img style="max-width: 100%; height: auto;" src="/images/blescat-button-ears.png" alt = "blescat's button">

            <textarea style="max-width: 100%; height: auto;">"<a href="https://blescat.neocities.org/"><img style="margin-top: 6px;" src="/images/blescat-button-ears.png" alt = "blescat's button" width="88" height="31"></a>"</textarea>
        </div>

<br>

        <h3 style="margin-bottom: -20px; text-align: center;">ouvindo agora</h3>

        <div class="mp3-player" style="text-align: center; margin: 0 auto;">

            <img src="/images/mp3-player.svg" alt="MP3 Player">

            <div class="screen-mp3">
                <div id="song">
                
                <iframe src="https://petracoding.github.io/neocities/widgets/lastfm?center=1&marquee=1&font-family=Courier New&font-size=10px&color=#2a2a2a&username=blescat&swapPositions=0&&center=1&delimiter=-&underline=0" frameborder="0" title="Last.Fm Status"></iframe>

                </div>
                <div id="artist"></div>
            </div>

        </div>

<br>

        <h3 style=" text-align: center;">onde me encontro</h3>

        <div style="border: 2px solid white; padding: 20px; margin: 20px">
            <p ><strong>> <a class="cool-link" href = "https://steamcommunity.com/id/blescat/">steam</a></strong></p>

            <p ><strong>> <a href = "https://www.tiktok.com/@blescat?lang=pt-BR">tiktok</a></strong></p>

            <p ><strong>> <a href = "https://x.com/bblescat">twitter</a></strong></p>

            <p ><strong>> <a href = "https://open.spotify.com/user/maxmohamed?si=879939c1776846ce">spotify</a></strong></p>

            <p ><strong>> <a href = "https://letterboxd.com/blescat">letterboxd</a></strong></p>
            <p ><strong>> <a href = "https://blescat.newgrounds.com">newgrounds</a></strong></p>
        
        </div>
    </aside>
    









    <main id="right-box">

        <div style="border: 2px solid white; width: 75%; margin: 0 auto;">

            <div class="welcome" style="">

                <img src="/images/welcome-bgless.gif">

            </div>

            <div>

                <p style="margin: 50px; margin-top: 0; text-align: center;">
                    Bem-vindo(a) ao meu pequeno canto da internet! 
                </p>

                <p style="margin: 50px; margin-top: 0; text-align: center;">
                    Este é um pequeno espaço onde reúno tudo o que faz parte do meu mundo: pensamentos, projetos, artes e outras coisas que resolvo compartilhar. Se quiser saber um pouco mais sobre quem sou, dê uma olhada na aba <a href="/sobre-mim/">Sobre mim</a>.
                </p>

            </div>

        </div>

<br>


        <div style="border: 2px solid white; width: 75%; margin: 0 auto;">

            <h2 style="text-align: center;">atualizações</h2>

        </div>


        <div style="border: 2px solid white; width: 75%; margin: 0 auto;">


            <div class="arte">

                <h3 style=" text-align: center;">🎨 Última arte 🎨</h3>

                <p style="text-align: center;"><a href="/arte">Todas as artes</a></p>

                {% assign artes = collections.arte | sort: "date" %}
                {% assign ultima_arte = artes | last %}

                <a href="{{ ultima_arte.data.image }}" class="glightbox art-card">

                    <img src="{{ ultima_arte.data.image }}" alt="{{ ultima_arte.data.title }}">

                </a>


            </div>

            

        </div>

<br>


        <div style="border: 2px solid white; width: 75%; margin: 0 auto;">


            <div>

                <h3 style=" text-align: center;">📓 Diário 📓</h3>

                <p style="text-align: center;"><a href="/diario">Todos os posts do dário</a></p>

                <ul class="post-list">
                    {% for post in collections.diario | reverse | slice: 0, 5 %}
                        <li>
                            <a href="{{ post.url }}">
                                > [{{ post.date | date: "%d/%m/%Y %H:%M" }}] {{ post.data.title }}
                            </a>
                        </li>
                    {% endfor %}
                </ul>

            </div>

            

        </div>

        


    </main>
    

</div>

<script src="https://cdn.jsdelivr.net/npm/glightbox/dist/js/glightbox.min.js"></script>

<script>
    const lightbox = GLightbox({
        selector: '.glightbox'
    });
</script>