import { future } from 'mdx-deck/themes'
import atomDark from 'react-syntax-highlighter/styles/prism/atom-dark'

import prismRuby from 'react-syntax-highlighter/languages/prism/ruby'
import prismElixir from 'react-syntax-highlighter/languages/prism/elixir'
import prismJavascript from 'react-syntax-highlighter/languages/prism/javascript'
import prismJSX from 'react-syntax-highlighter/languages/prism/jsx'
import prismCSS from 'react-syntax-highlighter/languages/prism/css'
import prismSASS from 'react-syntax-highlighter/languages/prism/sass'
import prismJSON from 'react-syntax-highlighter/languages/prism/json'
import prismSQL from 'react-syntax-highlighter/languages/prism/sql'
import prismDocker from 'react-syntax-highlighter/languages/prism/docker'
import prismYAML from 'react-syntax-highlighter/languages/prism/yaml'

export default {
  ...future,
  prism: {
    style: atomDark,
    languages: {
      ruby: prismRuby,
      elixir: prismElixir,
      javascript: prismJavascript,
      jsx: prismJSX,
      css: prismCSS,
      sass: prismSASS,
      json: prismJSON,
      sql: prismSQL,
      docker: prismDocker,
      yaml: prismYAML,
    }
  }
}
