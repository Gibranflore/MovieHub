import { MovieGrid } from "./MovieGrid"

export const App = () => {
    return <>
        <body class="bg-gradient-to-r from-slate-900 to-slate-700">
        <header class="bg-slate-950">
            <h1 class="text-red-600 text-3xl"> MovieHub </h1>
        </header>
        <main>
            <MovieGrid />
        </main>
        </body>
    </>
}