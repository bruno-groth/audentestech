/**
 * Composable para acessar a URL base do site
 * @returns {string} URL base configurada nas variáveis de ambiente
 */
export const useSiteUrl = () => {
  const config = useRuntimeConfig()
  return config.public.siteUrl
}

/**
 * Gera URL completa para uma rota específica
 * @param {string} path - Caminho da rota (ex: '/sobre')
 * @returns {string} URL completa
 */
export const useFullUrl = (path: string = '') => {
  const siteUrl = useSiteUrl()
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return `${siteUrl}${cleanPath}`
}
