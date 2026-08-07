---
layout: layouts/arte.njk
title: A arte de blescat
---

    <div class="window-paint">
    <div class="title-bar">
        <div class="title-text">artes-de-blescat.bmp - Blespaint</div>
        <div class="title-controls">
        <button class="win-btn">_</button>
        <button class="win-btn">🗖</button>
        <button class="win-btn close-btn">X</button>
        </div>
    </div>

    <div class="menu-bar">
        <span><u>A</u>rquivo</span>
        <span><u>E</u>ditar</span>
        <span><u>E</u>xibir</span>
        <span>I<u>m</u>agem</span>
        <span><u>C</u>ores</span>
        <span><u>A</u>juda</span>
    </div>

    <div class="main-area">
        <div class="toolbox">
        <div class="tool-grid">
            <div class="tool-icon selected">⬚</div>
            <div class="tool-icon">✂</div>
            <div class="tool-icon">✎</div>
            <div class="tool-icon">🪣</div>
            <div class="tool-icon">╱</div>
            <div class="tool-icon">🖌</div>
            <div class="tool-icon">🖨</div>
            <div class="tool-icon">▱</div>
            <div class="tool-icon">🛈</div>
            <div class="tool-icon">⭘</div>
            <div class="tool-icon">▢</div>
            <div class="tool-icon">⬭</div>
        </div>
        </div>

        <div class="canvas-area">
            <div class="gallery">

                {% for art in collections.arte%}

                

                <a href="{{ art.data.image }}" class="glightbox art-card">

                    <img src="{{ art.data.image }}" alt="{{ art.data.title }}">

                    <span>{{ art.data.title }}</span>

                </a>

                {% endfor %}

            </div>

        </div>
    </div>

    <div class="color-box">
        <div class="current-colors">
        <div class="color-preview"></div>
        </div>
        <div class="color-palette">
        <div class="color-square" style="background: #000;"></div>
        <div class="color-square" style="background: #808080;"></div>
        <div class="color-square" style="background: #800000;"></div>
        <div class="color-square" style="background: #808000;"></div>
        <div class="color-square" style="background: #008000;"></div>
        <div class="color-square" style="background: #008080;"></div>
        <div class="color-square" style="background: #000080;"></div>
        <div class="color-square" style="background: #800080;"></div>
        <div class="color-square" style="background: #fff; border: 1px solid #999;"></div>
        <div class="color-square" style="background: #c0c0c0;"></div>
        <div class="color-square" style="background: #ff0000;"></div>
        <div class="color-square" style="background: #ffff00;"></div>
        <div class="color-square" style="background: #00ff00;"></div>
        <div class="color-square" style="background: #00ffff;"></div>
        <div class="color-square" style="background: #0000ff;"></div>
        <div class="color-square" style="background: #ff00ff;"></div>
        </div>
    </div>
    </div>