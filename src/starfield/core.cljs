;; TODO: What if we use time since start as the mutation?
;; TODO: Can we add a spaceship with some turning on a sin based on time?

(ns starfield.core)

(def canvas (js/document.getElementById "canvas"))
(def canvas-ctx (.getContext canvas "2d"))
(def canvas-width (.-width canvas))
(def canvas-height (.-height canvas))
(def origin-x (/ canvas-width 2))
(def origin-y (/ canvas-height 2))
(def z-ratio 180)
(def z-max 32)

(defn clear-canvas []
  (doto canvas-ctx
    (aset "fillStyle" "black")
    (.fillRect 0 0 (.-width canvas) (.-height canvas))))

(defn rgb-str [shade]
  (str "rgb(" shade "," shade "," shade ")"))

(defn draw-rect [{[x y] :pos size :size shade :shade}]
  (doto canvas-ctx
    (aset "fillStyle" (rgb-str (js/parseInt shade)))
    (.fillRect x y size size)))

(defn plot-star [[star-x star-y star-z]]
  "Projects 3d star into 2d plot"
  (let [k (/ z-ratio star-z)
        x (+ (* star-x k) origin-x)
        y (+ (* star-y k) origin-y)
        z-projection (- 1 (/ star-z z-max))]
    {:pos [x y]
     :size (* z-projection 3)
     :shade (* z-projection 255)}))

(defn rand-star
  ([] (rand-star (rand-int z-max)))
  ([z]
    [(- (rand-int 50) 25) (- (rand-int 50) 25) z]))

(defn create-stars [count]
  (for [_ (range count)] (rand-star)))

(defn move-forward [stars]
  (for [star stars
        :let [[x y z] star
              shifted-z (- z 0.15)]]
    (if (< shifted-z 0)
      (rand-star z-max)
      [x y shifted-z])))

(defn draw [stars]
  (do
    (clear-canvas)
    (doseq [plot (map plot-star stars)]
        (draw-rect plot))))

(defn ^:export init []
  (let [stars (atom (create-stars 500))]
    (.setInterval js/window #(draw (swap! stars move-forward)) 15)))
