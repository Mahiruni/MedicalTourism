import type { MetadataRoute } from 'next'
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'TenaBridge Medical Travel',
    short_name: 'TenaBridge',
    description: 'Medical travel coordination between Ethiopia and global care pathways.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fcfcfd',
    theme_color: '#0d1730',
  }
}
