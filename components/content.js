import * as pages from './pages'

export default function Content(state) {
    return `
    <main>
        <div>
            <p>Is content working?</p>
            ${pages[state.pageContent](state)}
        </div>
    </main>
`;
}