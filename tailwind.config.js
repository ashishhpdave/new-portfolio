tailwind.config = {
    theme:{

        extend:{
            gridTemplateColumns:{
                'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
            },
            fontFamily:{
                Outfit: ["Outfit", "sans-serif"],
                Ovo: ["Ovo", "serif"]
            },
            animation:{
                spin_slow: 'spin 6s linear infinite'
            },
            colors:{
                lightHover: '#fcf4ff',
                darkHover: '#2a004a'
            }
        }   
    }
}