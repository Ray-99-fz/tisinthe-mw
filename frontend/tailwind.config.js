
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],

    theme: {
        extend: {
            colors: {
                primary: 'var(--primary)',
                'primary-dark': 'var(--primary-dark)',

                background: 'var(--background)',
                surface: 'var(--surface)',

                text: {
                    primary: 'var(--text-primary)',
                    secondary: 'var(--text-secondary)',
                },

                border: 'var(--border)',
            },
        },
    },

    plugins: [],
}
