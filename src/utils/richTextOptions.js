import React from 'react'

function getOptions() {
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title[`en-US`]
        const url = node.data.target.fields.file[`en-US`].url
        return <img alt={alt} src={url} />
      }
    }
  }

  return options
}

export { getOptions }
