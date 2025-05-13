export default defineNuxtPlugin(() => {
  const siteUrl = 'https://audentestech.com.br'
  const siteName = 'Audentes Tech'
  const siteDescription = 'Criação de sites profissionais, landing pages e aplicações web. Especialistas em desenvolvimento web com foco em performance e resultados.'

  const defaultMeta = {
    title: siteName,
    description: siteDescription,
    ogImage: `${siteUrl}/images/og-image.jpg`,
    twitterCard: 'summary_large_image'
  }

  const generateMeta = (meta: any = {}) => {
    const finalMeta = { ...defaultMeta, ...meta }
    
    return {
      title: finalMeta.title,
      meta: [
        { name: 'description', content: finalMeta.description },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: finalMeta.title },
        { property: 'og:description', content: finalMeta.description },
        { property: 'og:image', content: finalMeta.ogImage },
        { property: 'og:site_name', content: siteName },
        { property: 'twitter:card', content: finalMeta.twitterCard },
        { property: 'twitter:title', content: finalMeta.title },
        { property: 'twitter:description', content: finalMeta.description },
        { property: 'twitter:image', content: finalMeta.ogImage }
      ]
    }
  }

  return {
    provide: {
      generateMeta
    }
  }
})