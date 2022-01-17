import { getRenderer } from '/home/runner/work/Medad-ai.github.io/Medad-ai.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/transport/renderer.js';
import { initJssCs } from '/home/runner/work/Medad-ai.github.io/Medad-ai.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/transport/setup-jss.js';initJssCs();
import { installTheme } from '/home/runner/work/Medad-ai.github.io/Medad-ai.github.io/.codedoc/content/theme.ts';installTheme();
import { countCards } from '/home/runner/work/Medad-ai.github.io/Medad-ai.github.io/.codedoc/node_modules/@codedoc/coding-blog-plugin/dist/es5/components/article-card/count-cards.js';countCards();
import { codeSelection } from '/home/runner/work/Medad-ai.github.io/Medad-ai.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/selection.js';codeSelection();
import { sameLineLengthInCodes } from '/home/runner/work/Medad-ai.github.io/Medad-ai.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/same-line-length.js';sameLineLengthInCodes();
import { initHintBox } from '/home/runner/work/Medad-ai.github.io/Medad-ai.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-hint/index.js';initHintBox();
import { initCodeLineRef } from '/home/runner/work/Medad-ai.github.io/Medad-ai.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-ref/index.js';initCodeLineRef();
import { initSmartCopy } from '/home/runner/work/Medad-ai.github.io/Medad-ai.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/smart-copy.js';initSmartCopy();
import { copyHeadings } from '/home/runner/work/Medad-ai.github.io/Medad-ai.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/heading/copy-headings.js';copyHeadings();
import { contentNavHighlight } from '/home/runner/work/Medad-ai.github.io/Medad-ai.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/contentnav/highlight.js';contentNavHighlight();
import { loadDeferredIFrames } from '/home/runner/work/Medad-ai.github.io/Medad-ai.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/transport/deferred-iframe.js';loadDeferredIFrames();
import { smoothLoading } from '/home/runner/work/Medad-ai.github.io/Medad-ai.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/transport/smooth-loading.js';smoothLoading();
import { tocHighlight } from '/home/runner/work/Medad-ai.github.io/Medad-ai.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toc-highlight.js';tocHighlight();
import { postNavSearch } from '/home/runner/work/Medad-ai.github.io/Medad-ai.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/search/post-nav/index.js';postNavSearch();
import { copyLineLinks } from '/home/runner/work/Medad-ai.github.io/Medad-ai.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/code/line-links/copy-line-link.js';copyLineLinks();
import { gatherFootnotes } from '/home/runner/work/Medad-ai.github.io/Medad-ai.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/footnote/gather-footnotes.js';gatherFootnotes();
import { CollapseControl } from '/home/runner/work/Medad-ai.github.io/Medad-ai.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/collapse/collapse-control.js';
import { GithubSearch } from '/home/runner/work/Medad-ai.github.io/Medad-ai.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/misc/github/search.js';
import { ToCToggle } from '/home/runner/work/Medad-ai.github.io/Medad-ai.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/toggle/index.js';
import { DarkModeSwitch } from '/home/runner/work/Medad-ai.github.io/Medad-ai.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/darkmode/index.js';
import { ConfigTransport } from '/home/runner/work/Medad-ai.github.io/Medad-ai.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/transport/config.js';
import { ArticleCard } from '/home/runner/work/Medad-ai.github.io/Medad-ai.github.io/.codedoc/node_modules/@codedoc/coding-blog-plugin/dist/es5/components/article-card/index.js';
import { Author } from '/home/runner/work/Medad-ai.github.io/Medad-ai.github.io/.codedoc/node_modules/@codedoc/coding-blog-plugin/dist/es5/components/author/index.js';
import { ToCPrevNext } from '/home/runner/work/Medad-ai.github.io/Medad-ai.github.io/.codedoc/node_modules/@codedoc/core/dist/es6/components/page/toc/prevnext/index.js';

const components = {
  '0gj/iMRrQPM2TJIIudLH8Q==': CollapseControl,
  'Uon/tgepNFPU42VaeQCFDQ==': GithubSearch,
  '46r3mMs7hbURD1vyCgS5YA==': ToCToggle,
  'fRvxtjMRUTWpG8Ttg2jMfA==': DarkModeSwitch,
  '12OBEq7TcGk3+1SwCj9TSw==': ConfigTransport,
  'namXvzMkfIG82LE2oTes1Q==': ArticleCard,
  'NlDJTH+dAxo7HadGUVjZfg==': Author,
  'rTJNK6rukhd539z3clkdUw==': ToCPrevNext
};

const renderer = getRenderer();
const ogtransport = window.__sdh_transport;
window.__sdh_transport = function(id, hash, props) {
  if (hash in components) {
    const target = document.getElementById(id);
    renderer.render(renderer.create(components[hash], props)).after(target);
    target.remove();
  }
  else if (ogtransport) ogtransport(id, hash, props);
}
