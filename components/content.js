import * as pages from './pages'

export default function Content(state) {
    return `
    <main>
            ${pages[state.pageContent](state)}
    </main>
`;
}