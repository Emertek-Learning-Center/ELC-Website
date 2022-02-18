const gridDisplay = document.querySelector('#custom-grid')
let courses = [
    {
        "title": "Introduction To Programming",
        "description": "All the basic concept of programming (Variables, Data Structure, Data Types, ...)",
        "linkPDF": "https://zmwarelab.sharepoint.com/:f:/s/Emertek-LearningCenter/EpVJjDoFApFOjbQpPPlyHMwBRo88oa8fv0s9y1O4dXsd_A?e=hZ1yn5",
        "linkDOCX": "https://zmwarelab.sharepoint.com/:w:/s/Emertek-LearningCenter/EWcTUO3Ar3xBrWwH3YDHdzUBFT-0UrtqbozqrJ0SwKY_sA?e=1Z1tOU",
        "linkPPTX": "https://zmwarelab.sharepoint.com/:p:/s/Emertek-LearningCenter/EXBa0qEOhNhLpdB1rgve66MByyLC37NheduBXri5js8JBg?e=F0u4hy",
        "color": ""
    },
    {
        "title": "Introduction To JavaScript",
        "description": "Implenting the concepts learned in the previous course using JavaScript language",
        "linkPDF": "https://zmwarelab.sharepoint.com/:f:/s/Emertek-LearningCenter/Erbi6jLtVy9KozVKmxiRvoIB3CZmY1gFtBq5F7SnliQgpw?e=2Wn0Iv",
        "linkDOCX": "https://zmwarelab.sharepoint.com/:f:/s/Emertek-LearningCenter/EpI0_OWZ-OhAjarEv9WyHTEBa5Puja5Os7GJ7DlsG9cJEg?e=b4Yc8E",
        "linkPPTX": "https://zmwarelab.sharepoint.com/:p:/s/Emertek-LearningCenter/ERKIN5qW0ZNGp9lgRGimnCYBEj5EmpYwtXHEu7k_KzAGOw?e=Ge26YE",
        "color": "#FFCB77"
    },
    {
        "title": "Introduction To Node JS",
        "description": "The fundamentals of NodeJS",
        "linkPDF": "https://zmwarelab.sharepoint.com/:f:/s/Emertek-LearningCenter/Ek4mzCGjMclJkYDDuG45BloBHsDhyG_C6AosOT1Y7sw18g?e=ujM0Rr",
        "linkDOCX": "https://zmwarelab.sharepoint.com/:f:/s/Emertek-LearningCenter/Ekql2k141bpKjz64jGg9_VsBuol38T49QzGlyPr5CL0aAw?e=ytKipb",
        "linkPPTX": "aaaaaaaa",
        "color": "#172121"
    },
    {
        "title": "Introduction To React JS",
        "description": "Basics of React JS library",
        "linkPDF": "https://zmwarelab.sharepoint.com/:f:/s/Emertek-LearningCenter/ElGtT9Li7xxAstCzaGb7e44BC91sqjSfxdDW8AtH11-Gtg?e=8CLss0",
        "linkDOCX": "https://zmwarelab.sharepoint.com/:f:/s/Emertek-LearningCenter/EjELS9NDCrJAqEU_tmlkGWQBQuaGAg9kyPLWMJ1x4KJ60Q?e=n0EpIk",
        "linkPPTX": "aaaaaaaa",
        "color": "#32908f"
    },
    {
        "title": "Introduction To Python",
        "description": ">Basics of Python programming language",
        "linkPDF": "https://zmwarelab.sharepoint.com/:f:/s/Emertek-LearningCenter/Emqi-XCEbw1NkgOLUT7xdZ4B7YKr1pWSjdCsVGS_DYqvyA?e=Wjm4hZ",
        "linkDOCX": "https://zmwarelab.sharepoint.com/:f:/s/Emertek-LearningCenter/EtI1_X6l4dxIjzeQYKk4hJMBZ49j79EmHGdzn0qDsaJmMw?e=xQYGS7",
        "linkPPTX": "aaaaaaaa",
        "color": "#EEB902"
    }
]

const generateCourseCard = courseObject=> {
    return `
    <div class="custom-card">
        <div class="card-side-color" style="background-color: ${courseObject.color};"></div>
        <div class="cardHeader">
        <h3>${courseObject.title}</h3>
        </div>
        <div class="courseBody">
        <p>${courseObject.description}</p>
        </div>
        <div class="courseFooter">
        <a href="${courseObject.linkPDF}" target="_blank" class="button">PDF ↗</a>
        <a href="${courseObject.linkDOCX}" target="_blank" class="button">DOCx ↗</a>
        <a href="${courseObject.linkPPTX}" target="_blank" class="button">PPTx ↗</a>
        </div>
    </div>
    `
}

courses.map(course=> {
    gridDisplay.innerHTML += generateCourseCard(course)
})
