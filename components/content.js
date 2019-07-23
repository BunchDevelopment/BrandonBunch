import * as pages from './pages'

export default function Content(state) {
    return `
    <main>
        <div>
            ${pages[state.pageContent](state)}
        </div>
    </main>
`;
}