

function buildLinks(linkArray) {
        let link = './';
        let links = '';
        let x=0;

        linkArray.forEach(link => {
                if(linkArray[x] !== "Home")
                {
                        link = linkArray[x];
                }

                links += `
                        <a href="./${(link)}" data-navigo>
                        ${linkArray[x]}
                        </a>
                `;
                x++;
        })
        while(x < linkArray.length) {
                if(linkArray[x] !== "Home"){
                        link = linkArray[x];
                }
                
                links += `
                        <a href="./${(link)}" data-navigo>
                        ${linkArray[x]}
                        </a>
                `;
                x++;
        }
        return links;
};


export default function Navigation(state) {
        return `
<nav id="nav" class="animated fadeInLeft">
       ${buildLinks(state.links)}
</nav>
`;
}