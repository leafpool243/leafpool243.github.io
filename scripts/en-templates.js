class header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="navbar">
            <div class="container flex">
                <h1 class="navtitle">AmberWing&rsquo;s Website</h1>
                <nav>
                    <ul>
                        <li><a href="/index.html">Home</a></li>
                        <li><a href="/about.html">About</a></li>
                        <li><a href="/amberwing-says.html">AmberWing says</a></li>
<!--                        <li class="dropdown">
                            <a class="dropbtn">Languages</a>
                            <ul class="dropdown-content">
                                <li><a lang="en" href="/index.html">English</a></li>
                                <li><a lang="zh-Hant" href="/zh-hant/index.html">繁體中文</a></li>
                            </ul>
                        </li>-->
                    </ul>
                </nav>
            </div>
        </div>
        `;
    };
};

customElements.define("aw-header", header)
