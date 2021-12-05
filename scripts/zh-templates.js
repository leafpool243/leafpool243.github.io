class header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="navbar">
            <div class="container flex">
                <h1 class="navtitle">琥珀翼的網站</h1>
                <nav>
                    <ul>
                        <li><a href="/zh-hant/index.html">首頁</a></li>
                        <li><a href="/zh-hant/about.html">關於</a></li>
                        <li><a href="/zh-hant/amberwing-says.html">琥珀翼說</a></li>
                        <li class="dropdown">
                            <a class="dropbtn">語言</a>
                            <ul class="dropdown-content">
                                <li><a lang="en" href="/index.html">English</a></li>
                                <li><a lang="zh-Hant" href="/zh-hant/index.html">繁體中文</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        `;
    };
};

customElements.define("aw-header", header)