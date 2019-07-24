export default function Header(state) { 
    return `
    <header class="container">
        <h2 class="pageHeader col-header animated fadeInLeft">${state.title}</h2>
    </header>
`;
}