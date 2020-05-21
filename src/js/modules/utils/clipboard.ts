export const clipboard = (() => {
  const _copyURL = () => {
    const url = location.href
    const tempElm = document.createElement('div')
    tempElm.appendChild(document.createElement('pre')).textContent = url

    const style = tempElm.style
    style.position = 'fixed'
    style.left = '-100%'

    document.body.appendChild(tempElm)
    document.getSelection()?.selectAllChildren(tempElm)
    document.execCommand('copy')
    document.body.removeChild(tempElm)
  }

  return {
    copyURL: _copyURL,
  }
})()
