import{S as sn,i as nn,s as an,B as ds,j as hs,m as xs,o as ys,p as tn,q as js,x as ws,u as vs,v as Es,ak as Cs,e as c,t as u,k as i,c as l,a as r,g as k,d as n,n as m,b as g,f as t,L as o,D as pn}from"../../chunks/vendor-dfb9df3e.js";import on from"./layout.svelte-b65b887a.js";import{I as Ds}from"../../chunks/Image-4d50732f.js";/* empty css                                                      */import"../../chunks/BackTo-f09ad798.js";import"../../chunks/global-164a8ca5.js";import"../../chunks/utils-419e8671.js";import"../../chunks/CornerTitle-3a53cda1.js";import"../../chunks/store-b0ba4c19.js";/* empty css                                                       */function en(z){let p,_,b,h,e,f,S,ps,D,os,es,q,x,Ns=`<code class="language-r">library<span class="token punctuation">(</span>tidyverse<span class="token punctuation">)</span>
library<span class="token punctuation">(</span>gridExtra<span class="token punctuation">)</span>
library<span class="token punctuation">(</span>grid<span class="token punctuation">)</span>
library<span class="token punctuation">(</span>ggplot2<span class="token punctuation">)</span>
library<span class="token punctuation">(</span>lattice<span class="token punctuation">)</span>
library<span class="token punctuation">(</span>osmdata<span class="token punctuation">)</span>
library<span class="token punctuation">(</span>sf<span class="token punctuation">)</span></code>`,O,P,cs,B,y,qs=`<code class="language-r">streets <span class="token operator">&lt;-</span> getbb<span class="token punctuation">(</span><span class="token string">"Springfield Missouri"</span><span class="token punctuation">)</span><span class="token percent-operator operator">%>%</span>
  opq<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
  add_osm_feature<span class="token punctuation">(</span>key <span class="token operator">=</span> <span class="token string">"highway"</span><span class="token punctuation">,</span>
                  value <span class="token operator">=</span> c<span class="token punctuation">(</span><span class="token string">"motorway"</span><span class="token punctuation">,</span> <span class="token string">"primary"</span><span class="token punctuation">,</span>
                            <span class="token string">"secondary"</span><span class="token punctuation">,</span> <span class="token string">"tertiary"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
  osmdata_sf<span class="token punctuation">(</span><span class="token punctuation">)</span>

small_streets <span class="token operator">&lt;-</span> getbb<span class="token punctuation">(</span><span class="token string">"Springfield Missouri"</span><span class="token punctuation">)</span><span class="token percent-operator operator">%>%</span>
  opq<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
  add_osm_feature<span class="token punctuation">(</span>key <span class="token operator">=</span> <span class="token string">"highway"</span><span class="token punctuation">,</span>
                  value <span class="token operator">=</span> c<span class="token punctuation">(</span><span class="token string">"residential"</span><span class="token punctuation">,</span> <span class="token string">"living_street"</span><span class="token punctuation">,</span>
                            <span class="token string">"unclassified"</span><span class="token punctuation">,</span>
                            <span class="token string">"service"</span><span class="token punctuation">,</span> <span class="token string">"footway"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
  osmdata_sf<span class="token punctuation">(</span><span class="token punctuation">)</span>

river <span class="token operator">&lt;-</span> getbb<span class="token punctuation">(</span><span class="token string">"Springfield Missouri"</span><span class="token punctuation">)</span><span class="token percent-operator operator">%>%</span>
  opq<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
  add_osm_feature<span class="token punctuation">(</span>key <span class="token operator">=</span> <span class="token string">"waterway"</span><span class="token punctuation">,</span> value <span class="token operator">=</span> <span class="token string">"river"</span><span class="token punctuation">)</span> <span class="token percent-operator operator">%>%</span>
  osmdata_sf<span class="token punctuation">(</span><span class="token punctuation">)</span></code>`,W,M,ls,G,w,Os=`<code class="language-r">right <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">93.175</span>
left <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">93.395</span>
bottom <span class="token operator">=</span> <span class="token number">37</span>
top <span class="token operator">=</span> <span class="token number">37.275</span></code>`,U,A,rs,J,R,us,K,v,Bs=`<code class="language-r">top_rect <span class="token operator">=</span> <span class="token punctuation">(</span>top <span class="token operator">+</span> bottom<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2.0035</span>
bot_rect <span class="token operator">=</span> bottom <span class="token operator">+</span> <span class="token number">.01</span>
box_height <span class="token operator">=</span> <span class="token punctuation">(</span>top_rect <span class="token operator">+</span> bot_rect<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span>
mid_box <span class="token operator">=</span> <span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span></code>`,Q,T,ks,V,E,Ws=`<code class="language-r">plot_bw <span class="token operator">&lt;-</span> ggplot<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  geom_sf<span class="token punctuation">(</span>data <span class="token operator">=</span> streets<span class="token operator">$</span>osm_lines<span class="token punctuation">,</span>
          inherit.aes <span class="token operator">=</span> <span class="token boolean">FALSE</span><span class="token punctuation">,</span>
          color <span class="token operator">=</span> <span class="token string">"#000000"</span><span class="token punctuation">,</span>
          size <span class="token operator">=</span> <span class="token number">.3</span><span class="token punctuation">,</span>
          alpha <span class="token operator">=</span> <span class="token number">.8</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  geom_sf<span class="token punctuation">(</span>data <span class="token operator">=</span> small_streets<span class="token operator">$</span>osm_lines<span class="token punctuation">,</span>
          inherit.aes <span class="token operator">=</span> <span class="token boolean">FALSE</span><span class="token punctuation">,</span>
          color <span class="token operator">=</span> <span class="token string">"#000000"</span><span class="token punctuation">,</span>
          size <span class="token operator">=</span> <span class="token number">.1</span><span class="token punctuation">,</span>
          alpha <span class="token operator">=</span> <span class="token number">.6</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  geom_sf<span class="token punctuation">(</span>data <span class="token operator">=</span> river<span class="token operator">$</span>osm_lines<span class="token punctuation">,</span>
          inherit.aes <span class="token operator">=</span> <span class="token boolean">FALSE</span><span class="token punctuation">,</span>
          color <span class="token operator">=</span> <span class="token string">"#000000"</span><span class="token punctuation">,</span>
          size <span class="token operator">=</span> <span class="token number">.2</span><span class="token punctuation">,</span>
          alpha <span class="token operator">=</span> <span class="token number">.5</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  coord_sf<span class="token punctuation">(</span>xlim <span class="token operator">=</span> c<span class="token punctuation">(</span>left<span class="token punctuation">,</span> right<span class="token punctuation">)</span><span class="token punctuation">,</span>
           ylim <span class="token operator">=</span> c<span class="token punctuation">(</span>bottom<span class="token punctuation">,</span> top<span class="token punctuation">)</span><span class="token punctuation">,</span>
           expand <span class="token operator">=</span> <span class="token boolean">FALSE</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  theme_void<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  theme<span class="token punctuation">(</span>
    plot.background <span class="token operator">=</span> element_rect<span class="token punctuation">(</span>fill <span class="token operator">=</span> <span class="token string">"#FFFFFF"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    panel.background <span class="token operator">=</span> element_rect<span class="token punctuation">(</span>fill <span class="token operator">=</span> <span class="token string">"#FFFFFF"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    plot.margin<span class="token operator">=</span>unit<span class="token punctuation">(</span>c<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">0.5</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"mm"</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span></code>`,X,d,is,H,ms,fs,N,bs,gs,Y,$,Gs=`<code class="language-r">map_bw <span class="token operator">&lt;-</span> plot_bw <span class="token operator">+</span>
  <span class="token comment"># big box</span>
  geom_rect<span class="token punctuation">(</span>
    aes<span class="token punctuation">(</span>
      xmax <span class="token operator">=</span> right <span class="token operator">-</span> <span class="token number">.005</span><span class="token punctuation">,</span>
      xmin <span class="token operator">=</span> left <span class="token operator">+</span> <span class="token number">.005</span><span class="token punctuation">,</span>
      ymin <span class="token operator">=</span> bottom <span class="token operator">+</span> <span class="token number">.005</span><span class="token punctuation">,</span>
      ymax <span class="token operator">=</span> top <span class="token operator">-</span> <span class="token number">.005</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    alpha <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
    color <span class="token operator">=</span> <span class="token string">"black"</span><span class="token punctuation">,</span>
    size <span class="token operator">=</span> <span class="token number">1</span>
  <span class="token punctuation">)</span> <span class="token operator">+</span>
  <span class="token comment"># smaller, label box</span>
  geom_rect<span class="token punctuation">(</span>
    aes<span class="token punctuation">(</span>
      xmax <span class="token operator">=</span> right <span class="token operator">-</span> <span class="token number">.01</span><span class="token punctuation">,</span>
      xmin <span class="token operator">=</span> left <span class="token operator">+</span> <span class="token number">.01</span><span class="token punctuation">,</span>
      ymin <span class="token operator">=</span> bot_rect<span class="token punctuation">,</span>
      ymax <span class="token operator">=</span> top_rect
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    alpha <span class="token operator">=</span> <span class="token number">.75</span><span class="token punctuation">,</span>
    color <span class="token operator">=</span> <span class="token string">"black"</span><span class="token punctuation">,</span>
    fill <span class="token operator">=</span> <span class="token string">"white"</span><span class="token punctuation">,</span>
    size <span class="token operator">=</span> <span class="token number">.6</span>
  <span class="token punctuation">)</span> <span class="token operator">+</span>
  <span class="token comment"># springfield</span>
  geom_text<span class="token punctuation">(</span>
    aes<span class="token punctuation">(</span>x <span class="token operator">=</span> mid_box<span class="token punctuation">,</span> y <span class="token operator">=</span> box_height <span class="token operator">+</span> <span class="token number">.002</span><span class="token punctuation">,</span>
        label <span class="token operator">=</span> <span class="token string">"SPRINGFIELD&#92;n"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    color <span class="token operator">=</span> <span class="token string">"black"</span><span class="token punctuation">,</span>
    family <span class="token operator">=</span> <span class="token string">"Lato"</span><span class="token punctuation">,</span>
    fontface <span class="token operator">=</span> <span class="token string">"bold"</span><span class="token punctuation">,</span>
    size <span class="token operator">=</span> <span class="token number">9</span>
  <span class="token punctuation">)</span> <span class="token operator">+</span>
  <span class="token comment"># a line that goes behind 'Missouri'</span>
  geom_segment<span class="token punctuation">(</span>aes<span class="token punctuation">(</span>
    x <span class="token operator">=</span> left <span class="token operator">+</span> <span class="token number">.03</span><span class="token punctuation">,</span>
    y <span class="token operator">=</span> <span class="token punctuation">(</span>top_rect <span class="token operator">+</span> bottom<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">,</span>
    xend <span class="token operator">=</span> right <span class="token operator">-</span> <span class="token number">.03</span><span class="token punctuation">,</span>
    yend <span class="token operator">=</span> <span class="token punctuation">(</span>top_rect <span class="token operator">+</span> bottom<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span> color <span class="token operator">=</span> <span class="token string">"black"</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  <span class="token comment"># Missouri label</span>
  geom_label<span class="token punctuation">(</span>
    aes<span class="token punctuation">(</span>x <span class="token operator">=</span> mid_box<span class="token punctuation">,</span> y <span class="token operator">=</span> box_height <span class="token operator">-</span> <span class="token number">.005</span><span class="token punctuation">,</span>
        label <span class="token operator">=</span> <span class="token string">"MISSOURI"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    color <span class="token operator">=</span> <span class="token string">"black"</span><span class="token punctuation">,</span>
    fill <span class="token operator">=</span> <span class="token string">"white"</span><span class="token punctuation">,</span>
    <span class="token comment"># alpha = .9,</span>
    label.size <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
    family <span class="token operator">=</span> <span class="token string">"Lato"</span><span class="token punctuation">,</span>
    <span class="token comment"># fontface = "thin",</span>
    size <span class="token operator">=</span> <span class="token number">7</span>
  <span class="token punctuation">)</span> <span class="token operator">+</span>
  <span class="token comment"># coords</span>
  geom_text<span class="token punctuation">(</span>
    aes<span class="token punctuation">(</span>x <span class="token operator">=</span> mid_box<span class="token punctuation">,</span> y <span class="token operator">=</span> box_height <span class="token operator">-</span> <span class="token number">.02</span><span class="token punctuation">,</span>
        label <span class="token operator">=</span> <span class="token string">"37.2090\xB0 N / 93.2923\xB0 W"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    color <span class="token operator">=</span> <span class="token string">"black"</span><span class="token punctuation">,</span>
    family <span class="token operator">=</span> <span class="token string">"Lato"</span><span class="token punctuation">,</span>
    size <span class="token operator">=</span> <span class="token number">4</span>
  <span class="token punctuation">)</span> <span class="token operator">+</span>
  <span class="token comment"># me!</span>
  geom_label<span class="token punctuation">(</span>
    aes<span class="token punctuation">(</span>
      x <span class="token operator">=</span> left <span class="token operator">+</span> <span class="token number">.035</span><span class="token punctuation">,</span>
      y <span class="token operator">=</span> top_rect <span class="token operator">+</span> <span class="token number">.005</span><span class="token punctuation">,</span>
      label <span class="token operator">=</span> <span class="token string">"Design: Connor Rothschild"</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    size <span class="token operator">=</span> <span class="token number">1.5</span><span class="token punctuation">,</span>
    color <span class="token operator">=</span> <span class="token string">"black"</span><span class="token punctuation">,</span>
    fill <span class="token operator">=</span> <span class="token string">"white"</span><span class="token punctuation">,</span>
    label.size <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
    family <span class="token operator">=</span> <span class="token string">"Lato"</span>
  <span class="token punctuation">)</span>

map_bw</code>`,Z,F,ss,j,_s,ns,L,Us=`<code class="language-r">plot_gold <span class="token operator">&lt;-</span> ggplot<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  geom_sf<span class="token punctuation">(</span>
    data <span class="token operator">=</span> streets<span class="token operator">$</span>osm_lines<span class="token punctuation">,</span>
    inherit.aes <span class="token operator">=</span> <span class="token boolean">FALSE</span><span class="token punctuation">,</span>
    color <span class="token operator">=</span> <span class="token string">"steelblue"</span><span class="token punctuation">,</span>
    size <span class="token operator">=</span> <span class="token number">.3</span><span class="token punctuation">,</span>
    alpha <span class="token operator">=</span> <span class="token number">.8</span>
  <span class="token punctuation">)</span> <span class="token operator">+</span>
  geom_sf<span class="token punctuation">(</span>
    data <span class="token operator">=</span> small_streets<span class="token operator">$</span>osm_lines<span class="token punctuation">,</span>
    inherit.aes <span class="token operator">=</span> <span class="token boolean">FALSE</span><span class="token punctuation">,</span>
    color <span class="token operator">=</span> <span class="token string">"#ffbe7f"</span><span class="token punctuation">,</span>
    size <span class="token operator">=</span> <span class="token number">.1</span><span class="token punctuation">,</span>
    alpha <span class="token operator">=</span> <span class="token number">.6</span>
  <span class="token punctuation">)</span> <span class="token operator">+</span>
  geom_sf<span class="token punctuation">(</span>
    data <span class="token operator">=</span> river<span class="token operator">$</span>osm_lines<span class="token punctuation">,</span>
    inherit.aes <span class="token operator">=</span> <span class="token boolean">FALSE</span><span class="token punctuation">,</span>
    color <span class="token operator">=</span> <span class="token string">"#ffbe7f"</span><span class="token punctuation">,</span>
    size <span class="token operator">=</span> <span class="token number">.2</span><span class="token punctuation">,</span>
    alpha <span class="token operator">=</span> <span class="token number">.5</span>
  <span class="token punctuation">)</span> <span class="token operator">+</span>
  coord_sf<span class="token punctuation">(</span>
    xlim <span class="token operator">=</span> c<span class="token punctuation">(</span>left<span class="token punctuation">,</span> right<span class="token punctuation">)</span><span class="token punctuation">,</span>
    ylim <span class="token operator">=</span> c<span class="token punctuation">(</span>bottom<span class="token punctuation">,</span> top<span class="token punctuation">)</span><span class="token punctuation">,</span>
    expand <span class="token operator">=</span> <span class="token boolean">FALSE</span>
  <span class="token punctuation">)</span> <span class="token operator">+</span>
  theme_void<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  theme<span class="token punctuation">(</span>
    plot.background <span class="token operator">=</span> element_rect<span class="token punctuation">(</span>fill <span class="token operator">=</span> <span class="token string">"#282828"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    panel.background <span class="token operator">=</span> element_rect<span class="token punctuation">(</span>fill <span class="token operator">=</span> <span class="token string">"#282828"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    plot.margin <span class="token operator">=</span> unit<span class="token punctuation">(</span>c<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">0.5</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"mm"</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span>

map_gold <span class="token operator">&lt;-</span> plot_gold <span class="token operator">+</span>
  geom_rect<span class="token punctuation">(</span>
    aes<span class="token punctuation">(</span>
      xmax <span class="token operator">=</span> right <span class="token operator">-</span> <span class="token number">.005</span><span class="token punctuation">,</span>
      xmin <span class="token operator">=</span> left <span class="token operator">+</span> <span class="token number">.005</span><span class="token punctuation">,</span>
      ymin <span class="token operator">=</span> bottom <span class="token operator">+</span> <span class="token number">.005</span><span class="token punctuation">,</span>
      ymax <span class="token operator">=</span> top <span class="token operator">-</span> <span class="token number">.005</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    alpha <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
    color <span class="token operator">=</span> <span class="token string">"white"</span><span class="token punctuation">,</span>
    size <span class="token operator">=</span> <span class="token number">1</span>
  <span class="token punctuation">)</span> <span class="token operator">+</span>
  geom_rect<span class="token punctuation">(</span>
    aes<span class="token punctuation">(</span>
      xmax <span class="token operator">=</span> right <span class="token operator">-</span> <span class="token number">.01</span><span class="token punctuation">,</span>
      xmin <span class="token operator">=</span> left <span class="token operator">+</span> <span class="token number">.01</span><span class="token punctuation">,</span>
      ymin <span class="token operator">=</span> bot_rect<span class="token punctuation">,</span>
      ymax <span class="token operator">=</span> top_rect
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    alpha <span class="token operator">=</span> <span class="token number">.5</span><span class="token punctuation">,</span>
    color <span class="token operator">=</span> <span class="token string">"#ffbe7f"</span><span class="token punctuation">,</span>
    fill <span class="token operator">=</span> <span class="token string">"#282828"</span><span class="token punctuation">,</span>
    size <span class="token operator">=</span> <span class="token number">.5</span>
  <span class="token punctuation">)</span> <span class="token operator">+</span>
  geom_text<span class="token punctuation">(</span>
    aes<span class="token punctuation">(</span>x <span class="token operator">=</span> mid_box<span class="token punctuation">,</span> y <span class="token operator">=</span> box_height <span class="token operator">+</span> <span class="token number">.002</span><span class="token punctuation">,</span>
        label <span class="token operator">=</span> <span class="token string">"SPRINGFIELD&#92;n"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    color <span class="token operator">=</span> <span class="token string">"white"</span><span class="token punctuation">,</span>
    family <span class="token operator">=</span> <span class="token string">"Lato"</span><span class="token punctuation">,</span>
    fontface <span class="token operator">=</span> <span class="token string">"bold"</span><span class="token punctuation">,</span>
    size <span class="token operator">=</span> <span class="token number">9</span>
  <span class="token punctuation">)</span> <span class="token operator">+</span>
  geom_segment<span class="token punctuation">(</span>aes<span class="token punctuation">(</span>
    x <span class="token operator">=</span> left <span class="token operator">+</span> <span class="token number">.03</span><span class="token punctuation">,</span>
    y <span class="token operator">=</span> <span class="token punctuation">(</span>top_rect <span class="token operator">+</span> bottom<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">,</span>
    xend <span class="token operator">=</span> right <span class="token operator">-</span> <span class="token number">.03</span><span class="token punctuation">,</span>
    yend <span class="token operator">=</span> <span class="token punctuation">(</span>top_rect <span class="token operator">+</span> bottom<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span>
  <span class="token punctuation">)</span><span class="token punctuation">,</span>
  color <span class="token operator">=</span> <span class="token string">"#ffbe7f"</span><span class="token punctuation">)</span> <span class="token operator">+</span>
  geom_label<span class="token punctuation">(</span>
    aes<span class="token punctuation">(</span>x <span class="token operator">=</span> mid_box<span class="token punctuation">,</span> y <span class="token operator">=</span> box_height <span class="token operator">-</span> <span class="token number">.005</span><span class="token punctuation">,</span>
        label <span class="token operator">=</span> <span class="token string">"MISSOURI"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    color <span class="token operator">=</span> <span class="token string">"white"</span><span class="token punctuation">,</span>
    fill <span class="token operator">=</span> <span class="token string">"#282828"</span><span class="token punctuation">,</span>
    <span class="token comment"># alpha = .9,</span>
    label.size <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
    family <span class="token operator">=</span> <span class="token string">"Lato"</span><span class="token punctuation">,</span>
    <span class="token comment"># fontface = "thin",</span>
    size <span class="token operator">=</span> <span class="token number">7</span>
  <span class="token punctuation">)</span> <span class="token operator">+</span>
  geom_text<span class="token punctuation">(</span>
    aes<span class="token punctuation">(</span>x <span class="token operator">=</span> mid_box<span class="token punctuation">,</span> y <span class="token operator">=</span> box_height <span class="token operator">-</span> <span class="token number">.02</span><span class="token punctuation">,</span>
        label <span class="token operator">=</span> <span class="token string">"37.2090\xB0 N / 93.2923\xB0 W"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    color <span class="token operator">=</span> <span class="token string">"white"</span><span class="token punctuation">,</span>
    family <span class="token operator">=</span> <span class="token string">"Lato"</span><span class="token punctuation">,</span>
    size <span class="token operator">=</span> <span class="token number">4</span>
  <span class="token punctuation">)</span> <span class="token operator">+</span>
  geom_label<span class="token punctuation">(</span>
    aes<span class="token punctuation">(</span>
      x <span class="token operator">=</span> left <span class="token operator">+</span> <span class="token number">.035</span><span class="token punctuation">,</span>
      y <span class="token operator">=</span> top_rect <span class="token operator">+</span> <span class="token number">.005</span><span class="token punctuation">,</span>
      label <span class="token operator">=</span> <span class="token string">"Design: Connor Rothschild"</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
    size <span class="token operator">=</span> <span class="token number">1.5</span><span class="token punctuation">,</span>
    color <span class="token operator">=</span> <span class="token string">"white"</span><span class="token punctuation">,</span>
    fill <span class="token operator">=</span> <span class="token string">"#282828"</span><span class="token punctuation">,</span>
    label.size <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
    family <span class="token operator">=</span> <span class="token string">"Lato"</span>
  <span class="token punctuation">)</span>

map_gold</code>`,as,I,ts;return F=new Ds({props:{alt:"A black and white map of Springfield, Missouri.",src:"../images/post/map-springfield/bw_map_springfield.png",width:"50%",centered:!0}}),I=new Ds({props:{alt:"A gold map of Springfield, Missouri.",src:"../images/post/map-springfield/gold_map_springfield.png",width:"50%",centered:!0}}),{c(){p=c("p"),_=u("In this post, I expand upon "),b=c("a"),h=u(`Christian
Burkhart`),e=u("\u2019s wonderful "),f=c("a"),S=u(`ggplot2tor
tutorial`),ps=u(` on streetmap
creation using ggplot2. My process differs slightly from his in that I
include text using `),D=c("code"),os=u("geom_label"),es=u(`, rather than PowerPoint, to create the
text annotations. (This was much more difficult!)`),q=i(),x=c("pre"),O=i(),P=c("p"),cs=u("First, per the tutorial, we load street (and river, etc). data:"),B=i(),y=c("pre"),W=i(),M=c("p"),ls=u(`Next, we define the plot limits, using the lat-long found in the last
step.`),G=i(),w=c("pre"),U=i(),A=c("p"),rs=u(`In my plot, I\u2019m going to create a text box to hold the city, state, and
lat/long combination.`),J=i(),R=c("p"),us=u(`We can create the parameters for this box through some manipulations of
the existing plot limits:`),K=i(),v=c("pre"),Q=i(),T=c("p"),ks=u(`Finally, we can create a black and white plot. This follows the same
structure as the ggplot2tor tutorial:`),V=i(),E=c("pre"),X=i(),d=c("p"),is=u("Finally, we can introduce our text elements using "),H=c("code"),ms=u("geom_text"),fs=u(` (as well
as borders using `),N=c("code"),bs=u("geom_rect"),gs=u(")."),Y=i(),$=c("pre"),Z=i(),hs(F.$$.fragment),ss=i(),j=c("p"),_s=u("And if we replicate that code with different colors, the possibilities are endless:"),ns=i(),L=c("pre"),as=i(),hs(I.$$.fragment),this.h()},l(s){p=l(s,"P",{});var a=r(p);_=k(a,"In this post, I expand upon "),b=l(a,"A",{href:!0,rel:!0});var $s=r(b);h=k($s,`Christian
Burkhart`),$s.forEach(n),e=k(a,"\u2019s wonderful "),f=l(a,"A",{href:!0,rel:!0});var Fs=r(f);S=k(Fs,`ggplot2tor
tutorial`),Fs.forEach(n),ps=k(a,` on streetmap
creation using ggplot2. My process differs slightly from his in that I
include text using `),D=l(a,"CODE",{});var Ls=r(D);os=k(Ls,"geom_label"),Ls.forEach(n),es=k(a,`, rather than PowerPoint, to create the
text annotations. (This was much more difficult!)`),a.forEach(n),q=m(s),x=l(s,"PRE",{class:!0});var Js=r(x);Js.forEach(n),O=m(s),P=l(s,"P",{});var Is=r(P);cs=k(Is,"First, per the tutorial, we load street (and river, etc). data:"),Is.forEach(n),B=m(s),y=l(s,"PRE",{class:!0});var Ks=r(y);Ks.forEach(n),W=m(s),M=l(s,"P",{});var zs=r(M);ls=k(zs,`Next, we define the plot limits, using the lat-long found in the last
step.`),zs.forEach(n),G=m(s),w=l(s,"PRE",{class:!0});var Qs=r(w);Qs.forEach(n),U=m(s),A=l(s,"P",{});var Ss=r(A);rs=k(Ss,`In my plot, I\u2019m going to create a text box to hold the city, state, and
lat/long combination.`),Ss.forEach(n),J=m(s),R=l(s,"P",{});var Ps=r(R);us=k(Ps,`We can create the parameters for this box through some manipulations of
the existing plot limits:`),Ps.forEach(n),K=m(s),v=l(s,"PRE",{class:!0});var Vs=r(v);Vs.forEach(n),Q=m(s),T=l(s,"P",{});var Ms=r(T);ks=k(Ms,`Finally, we can create a black and white plot. This follows the same
structure as the ggplot2tor tutorial:`),Ms.forEach(n),V=m(s),E=l(s,"PRE",{class:!0});var Xs=r(E);Xs.forEach(n),X=m(s),d=l(s,"P",{});var C=r(d);is=k(C,"Finally, we can introduce our text elements using "),H=l(C,"CODE",{});var As=r(H);ms=k(As,"geom_text"),As.forEach(n),fs=k(C,` (as well
as borders using `),N=l(C,"CODE",{});var Rs=r(N);bs=k(Rs,"geom_rect"),Rs.forEach(n),gs=k(C,")."),C.forEach(n),Y=m(s),$=l(s,"PRE",{class:!0});var Ys=r($);Ys.forEach(n),Z=m(s),xs(F.$$.fragment,s),ss=m(s),j=l(s,"P",{});var Ts=r(j);_s=k(Ts,"And if we replicate that code with different colors, the possibilities are endless:"),Ts.forEach(n),ns=m(s),L=l(s,"PRE",{class:!0});var Zs=r(L);Zs.forEach(n),as=m(s),xs(I.$$.fragment,s),this.h()},h(){g(b,"href","https://christianburkhart.de/"),g(b,"rel","nofollow"),g(f,"href","https://ggplot2tutor.com/streetmaps/streetmaps/"),g(f,"rel","nofollow"),g(x,"class","language-r"),g(y,"class","language-r"),g(w,"class","language-r"),g(v,"class","language-r"),g(E,"class","language-r"),g($,"class","language-r"),g(L,"class","language-r")},m(s,a){t(s,p,a),o(p,_),o(p,b),o(b,h),o(p,e),o(p,f),o(f,S),o(p,ps),o(p,D),o(D,os),o(p,es),t(s,q,a),t(s,x,a),x.innerHTML=Ns,t(s,O,a),t(s,P,a),o(P,cs),t(s,B,a),t(s,y,a),y.innerHTML=qs,t(s,W,a),t(s,M,a),o(M,ls),t(s,G,a),t(s,w,a),w.innerHTML=Os,t(s,U,a),t(s,A,a),o(A,rs),t(s,J,a),t(s,R,a),o(R,us),t(s,K,a),t(s,v,a),v.innerHTML=Bs,t(s,Q,a),t(s,T,a),o(T,ks),t(s,V,a),t(s,E,a),E.innerHTML=Ws,t(s,X,a),t(s,d,a),o(d,is),o(d,H),o(H,ms),o(d,fs),o(d,N),o(N,bs),o(d,gs),t(s,Y,a),t(s,$,a),$.innerHTML=Gs,t(s,Z,a),ys(F,s,a),t(s,ss,a),t(s,j,a),o(j,_s),t(s,ns,a),t(s,L,a),L.innerHTML=Us,t(s,as,a),ys(I,s,a),ts=!0},p:pn,i(s){ts||(ws(F.$$.fragment,s),ws(I.$$.fragment,s),ts=!0)},o(s){vs(F.$$.fragment,s),vs(I.$$.fragment,s),ts=!1},d(s){s&&n(p),s&&n(q),s&&n(x),s&&n(O),s&&n(P),s&&n(B),s&&n(y),s&&n(W),s&&n(M),s&&n(G),s&&n(w),s&&n(U),s&&n(A),s&&n(J),s&&n(R),s&&n(K),s&&n(v),s&&n(Q),s&&n(T),s&&n(V),s&&n(E),s&&n(X),s&&n(d),s&&n(Y),s&&n($),s&&n(Z),Es(F,s),s&&n(ss),s&&n(j),s&&n(ns),s&&n(L),s&&n(as),Es(I,s)}}}function cn(z){let p,_;const b=[z[0],Hs];let h={$$slots:{default:[en]},$$scope:{ctx:z}};for(let e=0;e<b.length;e+=1)h=ds(h,b[e]);return p=new on({props:h}),{c(){hs(p.$$.fragment)},l(e){xs(p.$$.fragment,e)},m(e,f){ys(p,e,f),_=!0},p(e,[f]){const S=f&1?tn(b,[f&1&&js(e[0]),f&0&&js(Hs)]):{};f&2&&(S.$$scope={dirty:f,ctx:e}),p.$set(S)},i(e){_||(ws(p.$$.fragment,e),_=!0)},o(e){vs(p.$$.fragment,e),_=!1},d(e){Es(p,e)}}}const Hs={layout:"blog",title:"Create a Streetmap of Any City in R",description:"Creating a beautiful streetmap of my hometown, exclusively in R",date:"2019-11-21",image:"map-springfield/header.png",archived:!0,tags:["r"]};function ln(z,p,_){return z.$$set=b=>{_(0,p=ds(ds({},p),Cs(b)))},p=Cs(p),[p]}class xn extends sn{constructor(p){super();nn(this,p,ln,cn,an,{})}}export{xn as default,Hs as metadata};
