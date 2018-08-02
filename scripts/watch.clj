(require '[cljs.build.api :as b])

(b/watch "src"
  {:main 'starfield.core
   :output-to "out/starfield.js"
   :output-dir "out"})
