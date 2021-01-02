const ampBoilerplate =
  '<style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>'

module.exports = (html) => {
  // CSSを一つのstyleタグにまとめる
  let styleConcat = ''
  html = html.replace(/<style.*?>(.*?)<\/style>/gi, (_match, main) => {
    styleConcat += main
    return ''
  })
  html = html.replace(
    '</head>',
    `<style amp-custom>${styleConcat}</style></head>`
  )

  // charsetを消す
  html = html.replace(/@charset "UTF-8";/gi, '')

  // AMP HTMLしか使わないので、amphtmlのlinkは消す
  html = html.replace(/<link[^>]*rel="(?:amphtml)?"[^>]*>/gi, '')

  // ⚡マークをHTMLタグに追加
  html = html.replace(/<html/gi, '<html ⚡ id="html"')

  // baseタグを上に持ってくる
  let baseTag = ''
  html = html.replace(/<base href="(.*?)">/gi, (_match) => {
    baseTag = _match
    return ''
  })
  html = html.replace('</title>', `</title>${baseTag}`)

  // preloadとprefetchタグを消す
  html = html.replace(/<link[^>]*rel="(?:preload|prefetch)?"[^>]*>/gi, '')

  // ld+json以外のJSを消す
  html = html.replace(
    /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    (match) => {
      if (
        match.includes('type="application/json"') ||
        match.includes('type="application/ld+json"') ||
        match.includes('cdn.ampproject.org')
      ) {
        return match.replace(/&quot;/g, '"')
      }
      return ''
    }
  )

  // AMP用script読み込み準備
  const ampScript =
    '<script async src="https://cdn.ampproject.org/v0.js"></script>'

  // AMPボイラープレートとAMP用scriptをheadの終了直前には
  html = html.replace('</head>', ampScript + ampBoilerplate + '</head>')

  return html
}
