
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Apple-inspired premium colors
				'deep-black': '#000000',
				'pure-white': '#FFFFFF',
				'system-blue': '#007AFF',
				'charcoal': '#1C1C1E',
				'platinum': '#F2F2F7',
				'silver': '#8E8E93',
				'midnight-blue': '#000428',
				'electric-blue': '#004e92',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				'display': ['SF Pro Display', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
				'body': ['SF Pro Text', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
			},
			fontSize: {
				'display-xl': ['6rem', { lineHeight: '0.9', letterSpacing: '-0.02em' }],
				'display-lg': ['4rem', { lineHeight: '1.0', letterSpacing: '-0.02em' }],
				'display-md': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
				'display-sm': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px) scale(0.95)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0) scale(1)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px) rotateY(0deg)'
					},
					'33%': {
						transform: 'translateY(-10px) rotateX(10deg)'
					},
					'66%': {
						transform: 'translateY(-5px) rotateZ(5deg)'
					}
				},
				'glow': {
					'0%, 100%': {
						boxShadow: '0 0 20px rgba(0, 122, 255, 0.3)'
					},
					'50%': {
						boxShadow: '0 0 40px rgba(0, 122, 255, 0.6)'
					}
				},
				'parallax-float': {
					'0%, 100%': {
						transform: 'translateY(0px) translateZ(0px) rotateY(0deg)'
					},
					'50%': {
						transform: 'translateY(-20px) translateZ(10px) rotateY(180deg)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in-up': 'fade-in-up 0.8s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite alternate',
				'parallax-float': 'parallax-float 8s ease-in-out infinite',
			},
			transform: {
				'preserve-3d': 'preserve-3d',
			},
			perspective: {
				'1000': '1000px',
				'1500': '1500px',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
