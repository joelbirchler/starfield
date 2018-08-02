// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('starfield.core');
goog.require('cljs.core');
starfield.core.canvas = (function (){var G__4482 = "canvas";
return document.getElementById(G__4482);
})();
starfield.core.canvas_ctx = starfield.core.canvas.getContext("2d");
starfield.core.canvas_width = starfield.core.canvas.width;
starfield.core.canvas_height = starfield.core.canvas.height;
starfield.core.origin_x = (starfield.core.canvas_width / (2));
starfield.core.origin_y = (starfield.core.canvas_height / (2));
starfield.core.z_ratio = (180);
starfield.core.z_max = (32);
starfield.core.clear_canvas = (function starfield$core$clear_canvas(){
var G__4484 = starfield.core.canvas_ctx;
(G__4484["fillStyle"] = "black");

G__4484.fillRect((0),(0),starfield.core.canvas.width,starfield.core.canvas.height);

return G__4484;
});
starfield.core.rgb_str = (function starfield$core$rgb_str(shade){
return [cljs.core.str("rgb("),cljs.core.str(shade),cljs.core.str(","),cljs.core.str(shade),cljs.core.str(","),cljs.core.str(shade),cljs.core.str(")")].join('');
});
starfield.core.draw_rect = (function starfield$core$draw_rect(p__4485){
var map__4490 = p__4485;
var map__4490__$1 = ((cljs.core.seq_QMARK_(map__4490))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__4490):map__4490);
var vec__4491 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4490__$1,cljs.core.constant$keyword$pos);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4491,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4491,(1),null);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4490__$1,cljs.core.constant$keyword$size);
var shade = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__4490__$1,cljs.core.constant$keyword$shade);
var G__4492 = starfield.core.canvas_ctx;
(G__4492["fillStyle"] = starfield.core.rgb_str((function (){var G__4493 = shade;
return parseInt(G__4493);
})()));

G__4492.fillRect(x,y,size,size);

return G__4492;
});
starfield.core.plot_star = (function starfield$core$plot_star(p__4494){
var vec__4496 = p__4494;
var star_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4496,(0),null);
var star_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4496,(1),null);
var star_z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4496,(2),null);

var k = (starfield.core.z_ratio / star_z);
var x = ((star_x * k) + starfield.core.origin_x);
var y = ((star_y * k) + starfield.core.origin_y);
var z_projection = ((1) - (star_z / starfield.core.z_max));
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$pos,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs.core.constant$keyword$size,(z_projection * (3)),cljs.core.constant$keyword$shade,(z_projection * (255))], null);
});
starfield.core.rand_star = (function starfield$core$rand_star(){
var G__4498 = arguments.length;
switch (G__4498) {
case 0:
return starfield.core.rand_star.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return starfield.core.rand_star.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

starfield.core.rand_star.cljs$core$IFn$_invoke$arity$0 = (function (){
return starfield.core.rand_star.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int(starfield.core.z_max));
});

starfield.core.rand_star.cljs$core$IFn$_invoke$arity$1 = (function (z){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.rand_int((50)) - (25)),(cljs.core.rand_int((50)) - (25)),z], null);
});

starfield.core.rand_star.cljs$lang$maxFixedArity = 1;
starfield.core.create_stars = (function starfield$core$create_stars(count){
var iter__4227__auto__ = (function starfield$core$create_stars_$_iter__4506(s__4507){
return (new cljs.core.LazySeq(null,(function (){
var s__4507__$1 = s__4507;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__4507__$1);
if(temp__4425__auto__){
var s__4507__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__4507__$2)){
var c__4225__auto__ = cljs.core.chunk_first(s__4507__$2);
var size__4226__auto__ = cljs.core.count(c__4225__auto__);
var b__4509 = cljs.core.chunk_buffer(size__4226__auto__);
if((function (){var i__4508 = (0);
while(true){
if((i__4508 < size__4226__auto__)){
var _ = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4225__auto__,i__4508);
cljs.core.chunk_append(b__4509,starfield.core.rand_star.cljs$core$IFn$_invoke$arity$0());

var G__4512 = (i__4508 + (1));
i__4508 = G__4512;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__4509),starfield$core$create_stars_$_iter__4506(cljs.core.chunk_rest(s__4507__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__4509),null);
}
} else {
var _ = cljs.core.first(s__4507__$2);
return cljs.core.cons(starfield.core.rand_star.cljs$core$IFn$_invoke$arity$0(),starfield$core$create_stars_$_iter__4506(cljs.core.rest(s__4507__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4227__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(count));
});
starfield.core.move_forward = (function starfield$core$move_forward(stars){
var iter__4227__auto__ = (function starfield$core$move_forward_$_iter__4523(s__4524){
return (new cljs.core.LazySeq(null,(function (){
var s__4524__$1 = s__4524;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__4524__$1);
if(temp__4425__auto__){
var s__4524__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__4524__$2)){
var c__4225__auto__ = cljs.core.chunk_first(s__4524__$2);
var size__4226__auto__ = cljs.core.count(c__4225__auto__);
var b__4526 = cljs.core.chunk_buffer(size__4226__auto__);
if((function (){var i__4525 = (0);
while(true){
if((i__4525 < size__4226__auto__)){
var star = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4225__auto__,i__4525);
var vec__4531 = star;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4531,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4531,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4531,(2),null);
var shifted_z = (z - 0.15);
cljs.core.chunk_append(b__4526,(((shifted_z < (0)))?starfield.core.rand_star.cljs$core$IFn$_invoke$arity$1(starfield.core.z_max):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,shifted_z], null)));

var G__4533 = (i__4525 + (1));
i__4525 = G__4533;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__4526),starfield$core$move_forward_$_iter__4523(cljs.core.chunk_rest(s__4524__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__4526),null);
}
} else {
var star = cljs.core.first(s__4524__$2);
var vec__4532 = star;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4532,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4532,(1),null);
var z = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__4532,(2),null);
var shifted_z = (z - 0.15);
return cljs.core.cons((((shifted_z < (0)))?starfield.core.rand_star.cljs$core$IFn$_invoke$arity$1(starfield.core.z_max):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,shifted_z], null)),starfield$core$move_forward_$_iter__4523(cljs.core.rest(s__4524__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4227__auto__(stars);
});
starfield.core.draw = (function starfield$core$draw(stars){
starfield.core.clear_canvas();

var seq__4538 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(starfield.core.plot_star,stars));
var chunk__4539 = null;
var count__4540 = (0);
var i__4541 = (0);
while(true){
if((i__4541 < count__4540)){
var plot = chunk__4539.cljs$core$IIndexed$_nth$arity$2(null,i__4541);
starfield.core.draw_rect(plot);

var G__4542 = seq__4538;
var G__4543 = chunk__4539;
var G__4544 = count__4540;
var G__4545 = (i__4541 + (1));
seq__4538 = G__4542;
chunk__4539 = G__4543;
count__4540 = G__4544;
i__4541 = G__4545;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__4538);
if(temp__4425__auto__){
var seq__4538__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__4538__$1)){
var c__4254__auto__ = cljs.core.chunk_first(seq__4538__$1);
var G__4546 = cljs.core.chunk_rest(seq__4538__$1);
var G__4547 = c__4254__auto__;
var G__4548 = cljs.core.count(c__4254__auto__);
var G__4549 = (0);
seq__4538 = G__4546;
chunk__4539 = G__4547;
count__4540 = G__4548;
i__4541 = G__4549;
continue;
} else {
var plot = cljs.core.first(seq__4538__$1);
starfield.core.draw_rect(plot);

var G__4550 = cljs.core.next(seq__4538__$1);
var G__4551 = null;
var G__4552 = (0);
var G__4553 = (0);
seq__4538 = G__4550;
chunk__4539 = G__4551;
count__4540 = G__4552;
i__4541 = G__4553;
continue;
}
} else {
return null;
}
}
break;
}
});
starfield.core.init = (function starfield$core$init(){
var stars = (function (){var G__4555 = starfield.core.create_stars((500));
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__4555) : cljs.core.atom.call(null,G__4555));
})();
return window.setInterval(((function (stars){
return (function (){
return starfield.core.draw(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(stars,starfield.core.move_forward));
});})(stars))
,(15));
});
goog.exportSymbol('starfield.core.init', starfield.core.init);
