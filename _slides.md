---
theme: neat
author: Manon Carbonnel
layout: cover
animatedBackground: true
---

# Reinforcement Learning for Stochastic Continuous Dynamics:A Model-Free, Value-Based Approach

Haruki Settai, Naoya Takeishi, Takehisa Yairi

---
layout: full
---

Haruki Settai, Naoya Takeishi, Takehisa Yairi

<!--
今回は強化学習の導入の話．必要な事前知識であるマルコフ決定過程について，そのモチベーションと，簡単な定義を導入します．
-->


---
layout: default
maxDepth: 1
layout: full
---

<div style="font-size: 0.7em;">
  <Toc />
</div>


---

# Overview

---
fonts:
  sans: 'Zen Maru Gothic'
layout: full
---

## TD;LR

<span style="background: linear-gradient(transparent 60%, #ffff66 60%);">強化学習</span>を"ダイナミクスが<span style="background: linear-gradient(transparent 60%, #a0e7f5 60%);">確率微分方程式</span>で記述されている系"に適用するためのアルゴリズムを提案した。<br>

<v-click>- <span style="background: linear-gradient(transparent 60%, #ffff66 60%);">強化学習(RL)</span><br></v-click>
<v-click>　<strong>・意思決定を行うための機械学習手法</strong>。ロボットの制御やLLMの学習, 将棋AIなどで使われる。<br></v-click>
<v-click>　・従来は<span style="font-weight: bold;">状態遷移が離散的な系上の最適化問題</span>として定式化されている。<br></v-click>

<div v-click.hide>
<v-clicks>
<div>
<figure style="position: absolute; top: 54%; right: 20%; width: 300px;">
  <img  src="./figures/rl.gif">
  <figcaption style="font-size: 0.8em; word-wrap: break-word; text-align: center; width: 200px; position: absolute; top: 102%; left: 20%;">RLの学習の様子
  </figcaption>
</figure>
</div>

<div>
- <span style="background: linear-gradient(transparent 60%, #a0e7f5 60%);">確率微分方程式(SDE)</span><br>
　<strong>・ノイズがのった微分方程式</strong>。
</div>

<div>
<figure style="position: absolute; top: 59%; right: 60%; width: 300px;">
  <img  src="./figures/sde.png">
  <figcaption style="font-size: 0.8em; word-wrap: break-word; text-align: center; width: 200px; position: absolute; top: 102%; left: 20%;">SDE
  </figcaption>
</figure>
</div>

</v-clicks>
</div>

<div v-after>
- <span style="background: linear-gradient(transparent 60%, #a0e7f5 60%);">確率微分方程式(SDE)</span><br>
　<strong>・ノイズがのった微分方程式</strong>。
</div>


<v-click>
<div style="border: 2px solid #000; padding: 10px; margin: 10px auto; background-color:rgb(243, 255, 243);">
<strong>工学的な視点からの補足</strong><br>
確率最適制御では, 目的関数などに様々な仮定をおいて最適な制御を解析的に求めるが, 提案手法は同じ目的関数をデータ駆動で解く。
解析的に望ましい仮定を一切置く必要がなく, 現実の複雑なモデルでも最適な制御を見つけられる。<br>
確率最適制御と強化学習の橋渡し的な研究。
</div>
</v-click>

<v-click>
<div style="border: 2px solid #000; padding: 10px; margin: 10px auto; background-color: rgb(255, 235, 240);">
<strong>先行研究との差分</strong><br>
先行研究ではダイナミクスの方程式が具体的にわかっていないと学習できず, 振り子のようなオモチャに応用が限定されていた。
提案手法では, ダイナミクスの方程式をまったく知る必要がないため連続的な系ならなんでも適用できる。
</div>
</v-click>


<style>
.slidev-vclick-hidden {
  display: none;
}
</style>

<!--
発表用コメントをここに書く
-->

---
fonts:
  sans: 'Zen Maru Gothic'
---

## モチベーション

<div v-click.hide>
  <div v-click.hide>
    <div v-click.hide>
      <div v-click.hide>
        <!-- MDP1 -->
        <div v-click.hide>
          <figure style="position: absolute; top: 30%; left: 10%; width: 350px; text-align: center;">
            <img src="./figures/mdp1.png" style="width: 100%;">
            <figcaption style="font-size: 1.0em; text-align: center; width: 200px; position: absolute; top: 102%; left: 20%;">
              強化学習の舞台
            </figcaption>
          </figure>
        </div>
        <!-- MDP2 -->
        <div v-after>
          <figure style="position: absolute; top: 30%; left: 10%; width: 350px; text-align: center;">
            <img src="./figures/mdp2.png" style="width: 100%;">
            <figcaption style="font-size: 1.0em; text-align: center; width: 200px; position: absolute; top: 102%; left: 20%;">
              強化学習の舞台
            </figcaption>
          </figure>
        </div>
      </div>
      <!-- MDP3 -->
      <div v-after>
        <figure style="position: absolute; top: 30%; left: 10%; width: 350px; text-align: center;">
          <img src="./figures/mdp3.png" style="width: 100%;">
          <figcaption style="font-size: 1.0em; text-align: center; width: 200px; position: absolute; top: 102%; left: 20%;">
            強化学習の舞台
          </figcaption>
        </figure>
      </div>
    </div>
    <div v-after>
      <figure style="position: absolute; top: 30%; left: 10%; width: 350px; text-align: center;">
        <img src="./figures/mdp5.png" style="width: 100%;">
        <figcaption style="font-size: 1.0em; text-align: center; width: 200px; position: absolute; top: 102%; left: 20%;">
          強化学習の舞台
        </figcaption>
      </figure>
    </div>
  </div>
  <div v-after>
    <figure style="position: absolute; top: 30%; left: 10%; width: 350px; text-align: center;">
      <img src="./figures/mdp6.png" style="width: 100%;">
      <figcaption style="font-size: 1.0em; text-align: center; width: 200px; position: absolute; top: 102%; left: 20%;">
        強化学習の舞台
      </figcaption>
    </figure>
  </div>
</div>
<div v-after>
  <figure style="position: absolute; top: 30%; left: 10%; width: 350px; text-align: center;">
    <img src="./figures/mdp8.png" style="width: 100%;">
    <figcaption style="font-size: 1.0em; text-align: center; width: 200px; position: absolute; top: 102%; left: 20%;">
      強化学習の舞台
    </figcaption>
  </figure>
</div>

<v-click>
<figure style="position: absolute; top: 15%; left: 20%; width: 150px; text-align: center;">
  <img src="./figures/othello.png" style="width: 100%;">
</figure>
</v-click>

<v-click>
<figure style="position: absolute; top: 77%; left: 15%; width: 230px; text-align: center;">
  <img src="./figures/rep_mat.png" style="width: 100%;">
</figure>
<figcaption style="font-size: 1.0em; text-align: center; width: 200px; position: absolute; top: 92%; left: 18%;">
  ダイナミクスを支配する式
</figcaption>
</v-click>


<v-click>
<figure style="position: absolute; top: 12%; left: 65%; width: 120px; text-align: center;">
  <img src="./figures/rl.gif" style="width: 100%;">
</figure>
</v-click>

<v-click>
<figure style="position: absolute; top: 35%; left: 58%; width: 250px; text-align: center;">
  <img src="./figures/continuous.png" style="width: 100%;">
  <figcaption style="font-size: 1.0em; text-align: center; width: 200px; position: absolute; top: 102%; left: 20%;">
    状態が連続的に発展
  </figcaption>
</figure>
</v-click>

<v-click>
<figure style="position: absolute; top: 75%; left: 58%; width: 250px; text-align: center;">
  <img src="./figures/sde_eq.png" style="width: 100%;">
  <figcaption style="font-size: 1.0em; text-align: center; width: 200px; position: absolute; top: 102%; left: 20%;">
    ダイナミクスを支配する式
  </figcaption>
</figure>
</v-click>

<v-click>
  <!-- 赤い四角 -->
  <div style="
    position: absolute;
    top: 10%;        /* 左上端（rl.gifより少し上） */
    left: 57%;
    width: 280px;    /* continuous.png と sde_eq.png をカバーする幅 */
    height: 75%;     /* 下まで広く囲む */
    border: 4px solid red;
    border-radius: 10px;
    box-sizing: border-box;
    z-index: 10;
  ">
  </div>

  <!-- 注釈 -->
  <div style="
    position: absolute;
    top: 3%;
    left: 60.5%;
    font-size: 1.1em;
    font-weight: bold;
    background: white;
    padding: 4px 8px;
    border-radius: 4px;
    border: 1px solid red;
    color: red;
  ">
    こっちのほうが自然では？
  </div>
</v-click>

<v-click>
  <figure style="position: absolute; top: 40%; left: 46%; width: 90px; text-align: center;">
    <img src="./figures/supset.png" style="width: 100%;">
    <figcaption style="font-size: 0.8em">
      実は元の問題に含まれてる
    </figcaption>
  </figure>
</v-click>

<v-clicks>
  <div style="font-size: 0.9em; position: absolute; bottom: 9%; left: 55%; width: 90%; line-height: 1.2;">
    ⇒連続系でも普通の強化学習を適用できる
  </div>
  <div style="font-size: 0.9em; position: absolute; bottom: 1%; left: 55%; width: 90%; line-height: 1.2;">
    ⇒離散でも連続でも使えるということは, 連続に固有の<br>　情報は切り捨てられていて活用できていないということ
  </div>
</v-clicks>
