---
theme: neat
layout: cover
colorSchema: light
coverLogo: figures/UTokyo.png
coverTitle: "A Temporal Difference Method for Stochastic Continuous Dynamics"
coverAuthor: Haruki Settai
lineNumbers: true
---

<div style="font-size: 0.9em; position: absolute; bottom: -10%; left: 0%; width: 90%; line-height: 1.2;">
  Supervised by Takehisa Yairi, Naoya Takeishi
</div>

<v-click>
<div style="font-size: 1.3em; position: absolute; top: -20%; left: 2%; width: 65%; line-height: 1.2; color: red;">
    <strong>The most foundational method in Reinforcement Learning</strong>
</div>
<figure style="position: absolute; top: 17%; left: 3%; width: 525px; text-align: center;">
  <img src="./figures/title_bar1.png" style="width: 100%;">
</figure>
</v-click>
<v-click>
<div style="font-size: 1.3em; position: absolute; top: 80%; left: 2%; width: 65%; line-height: 1.2; color: rgb(51, 51, 255);">
    <strong>The system is governed by a Stochastic Differential Equation</strong>
</div>
<figure style="position: absolute; top: 35%; left: 0.2%; width: 800px; text-align: center;">
  <img src="./figures/title_bar2.png" style="width: 100%;">
</figure>
</v-click>
<v-click>
<div style="font-size: 1.7em; position: absolute; top: 140%; left: 11%; width: 100%; line-height: 1.2;">
    <strong>Reformulated Reinforcement Learning in continuous systems</strong><br>
    <strong>which was traditionally formulated in discrete systems</strong>
</div>
</v-click>

---
maxDepth: 2
---

<div style="font-size: 1.2em;">
  <Toc depth="2" />
</div>

---
layout: section
subject: Overview
---

# Overview

---
layout: default
headerEnable: true
headerTitle: Overview
headerLogo: figures/UTokyo.png
---

## Key Contributions
We propose the first model-free reinforcement learning algorithm for continuous-time systems whose dynamics are governed by stochastic differential equations.

<div v-click.hide>
<v-clicks>
<div>
<strong>Reinforcement Learning (RL)</strong><br>
- <strong class="accent">A machine learning framework for decision-making</strong>, widely used in robotics, game AI, and LLM training.<br>
- Traditionally formulated as an optimization problem over systems with <strong class="accent">discrete state transitions</strong>.<br>

<figure style="position: absolute; top: 59%; right: 60%; width: 250px; text-align: center;">
  <img src="./figures/rl.gif" style="width: 100%;">
  <figcaption style="font-size: 1.2em; word-wrap: break-word; margin-top: 4px;">
    training process of RL
  </figcaption>
</figure>
</div>

<div>
<strong>Stochastic Differential Equation (SDE)</strong><br>
- <strong class="danger">A differential equation</strong> with randomness.

<figure style="position: absolute; top: 59%; right: 20%; width: 300px; text-align: center;">
  <img src="./figures/sde.png" style="width: 100%;">
  <figcaption style="font-size: 1.2em; word-wrap: break-word; margin-top: -6px;">
    paths of SDE
  </figcaption>
</figure>
</div>

</v-clicks>
</div>

<div v-after>
<strong>Reinforcement Learning (RL)</strong><br>
- <strong class="accent">A machine learning framework for decision-making</strong>, widely used in robotics, game AI, and LLM training.<br>
- Traditionally formulated as an optimization problem over systems with <strong class="accent">discrete state transitions</strong>.<br>
<strong>Stochastic Differential Equation (SDE)</strong><br>
- <strong class="danger">A differential equation</strong> with randomness.

  <div style="border: 2px solid #000; padding: 10px; margin: 15px auto; background-color:rgb(243, 255, 243);">
  <strong>Engineering Perspective</strong><br>
  Bridges stochastic control and RL: Both target the same objective — the former relies on analytical solutions under assumptions, whereas the latter (ours) learns purely from data without such assumptions.
  </div>
</div>

<v-click>
<div style="border: 2px solid #000; padding: 10px; margin: 10px auto; background-color: rgb(255, 235, 240);">
<strong>Difference from Previous Work</strong><br>
Prior works require explicit knowledge of the system dynamics, limiting applications to toy problems like pendulums.<br>
In contrast, our method requires no knowledge of the dynamics and can be applied to any continuous system.
</div>
</v-click>


<style>
.slidev-vclick-hidden {
  display: none;
}
</style>


---
layout: two-cols
headerEnable: true
headerTitle: Overview
headerLogo: figures/UTokyo.png
---

## Motivation

::left::
**Standard RL Framework**


<div v-click.hide>
  <div v-click.hide>
    <div v-click.hide>
      <div v-click.hide>
        <div v-click.hide>
          <v-click>
            <figure style="position: absolute; top: 30%; left: 8%; width: 350px; text-align: center;">
              <img src="./figures/mdp1.png" style="width: 100%;">
              <figcaption style="font-size: 0.8em; text-align: center; width: 200px; position: absolute; top: 102%; left: 20%;">
              Markov Decision Process (MDP)
              </figcaption>
            </figure>
          </v-click>
        </div>
        <div v-after>
          <figure style="position: absolute; top: 30%; left: 8%; width: 350px; text-align: center;">
            <img src="./figures/mdp2.png" style="width: 100%;">
            <figcaption style="font-size: 0.8em; text-align: center; width: 200px; position: absolute; top: 102%; left: 20%;">
            Markov Decision Process (MDP)
            </figcaption>
          </figure>
        </div>
      </div>
      <div v-after>
        <figure style="position: absolute; top: 30%; left: 8%; width: 350px; text-align: center;">
            <img src="./figures/mdp3.png" style="width: 100%;">
            <figcaption style="font-size: 0.8em; text-align: center; width: 200px; position: absolute; top: 102%; left: 20%;">
            Markov Decision Process (MDP)
            </figcaption>
        </figure>
      </div>
    </div>
    <div v-after>
        <figure style="position: absolute; top: 30%; left: 8%; width: 350px; text-align: center;">
        <img src="./figures/mdp4_5.png" style="width: 100%;">
        <figcaption style="font-size: 0.8em; text-align: center; width: 200px; position: absolute; top: 102%; left: 20%;">
        Markov Decision Process (MDP)
        </figcaption>
        </figure>
    </div>
  </div>
  <div v-after>
    <figure style="position: absolute; top: 30%; left: 8%; width: 350px; text-align: center;">
      <img src="./figures/mdp6.png" style="width: 100%;">
      <figcaption style="font-size: 0.8em; text-align: center; width: 200px; position: absolute; top: 102%; left: 20%;">
      Markov Decision Process (MDP)
      </figcaption>
    </figure>
  </div>
</div>
<div v-after>
  <figure style="position: absolute; top: 30%; left: 8%; width: 350px; text-align: center;">
      <img src="./figures/mdp7_10.png" style="width: 100%;">
      <figcaption style="font-size: 0.8em; text-align: center; width: 200px; position: absolute; top: 102%; left: 20%;">
      Markov Decision Process (MDP)
      </figcaption>
  </figure>
</div>

<v-click>
<figure style="position: absolute; top: 25%; left: 5%; width: 150px; text-align: center;">
  <img src="./figures/othello.png" style="width: 100%;">
</figure>
</v-click>

<v-click>
<figure style="position: absolute; top: 76%; left: 12%; width: 200px; text-align: center;">
  <img src="./figures/rep_mat.png" style="width: 100%;; margin-bottom: 0.5em;">
  <figcaption style="font-size: 0.8em; white-space: nowrap;">
    <strong>Model: Transition Probability Matrix</strong>
  </figcaption>
</figure>
</v-click>

::right::

**Real-World Dynamics**

<v-click>
<figure style="position: absolute; top: 25%; left: 55%; width: 90px; text-align: center;">
  <img src="./figures/rl.gif" style="width: 100%;">
</figure>
</v-click>

<v-click>
<figure style="position: absolute; top: 40%; left: 62.5%; width: 220px; text-align: center;">
  <img src="./figures/continuous.png" style="width: 100%;">
  <figcaption style="font-size: 0.8em; text-align: center; width: 200px; position: absolute; top: 102%; left: 10%;">
    Controlled Diffusion Process
    </figcaption>
</figure>
</v-click>

<v-click>
<figure style="position: absolute; top: 77%; left: 62%; width: 250px; text-align: center;">
  <img src="./figures/sde_eq.png" style="width: 100%; margin-bottom: 0.5em;">
  <figcaption style="font-size: 0.8em; white-space: nowrap;">
    <strong>Model: &mu;, &sigma;</strong>
  </figcaption>
</figure>
</v-click>

<div v-click.hide>
    <v-click>
    <div style="
        position: absolute;
        top: 17%;
        left: 50%;
        width: 410px;
        height: 70%;
        border: 3px solid red;
        border-radius: 0px;
        box-sizing: border-box;
        z-index: 10;
    ">
    </div>
    <div style="
        position: absolute;
        top: 10.5%;
        left: 50%;
        width: 410px;
        font-size: 0.8em;
        font-weight: bold;
        background: white;
        padding: 4px 8px;
        border-radius: 0px;
        border: 3px solid red;
        color: red;
        box-sizing: border-box;
        text-align: center;
    ">
    Can we formulate RL within the framework of this system?
    </div>
    </v-click>
</div>
<div v-after>
  <figure style="position: absolute; top: 48%; left: 46%; width: 80px; text-align: center;">
    <img src="./figures/supset.png" style="width: 100%;">
    <figcaption style="position: absolute; top: 110%; left: -70%; font-size: 0.8em; white-space: nowrap;">
    Actually, this is just a special case<br>of the original problem.
    </figcaption>
  </figure>
</div>


<v-click>
<Arrow :x1="600" :y1="435" :x2="369" :y2="471.75" :width="3" class="text-red-500" />
  <svg width="800" height="600" style="position: absolute; top: 0; left: 0; pointer-events: none;">
    <text
        x="487.49"
        y="436.70"
        transform="rotate(-9, 487.49, 436.70)"
        text-anchor="middle"
        dominant-baseline="central"
        font-size="7"
        fill="red"
    >
        transformable*
    </text>
  </svg>
  <div style="font-size: 0.8em; position: absolute; top: 15%; left: 73%; width: 26%; line-height: 1.2;">
    *In continuous time, the object being transformed is the infinitesimal generator, not the transition probability matrix.  The RL framework still applies in the same way.
  </div>
</v-click>


<v-clicks>
  <div style="font-size: 0.9em; position: absolute; bottom: 9%; left: 55%; width: 90%; line-height: 1.2;">
    &rArr; Actually, MDPs also include continuous systems.
  </div>
  <div style="font-size: 0.9em; position: absolute; bottom: 1.5%; left: 55%; width: 45%; line-height: 1.2;">
    &rArr; But by restricting to continuous systems, a more efficient method must exist.
  </div>
</v-clicks>


---
layout: default
headerEnable: true
headerTitle: Overview
headerLogo: figures/UTokyo.png
---

## Contribution

<script setup>
import AnimatedArrow from './layouts/AnimatedArrow.vue'
</script>

<div v-click.hide>
  <div v-click.hide>
    <figure style="position: absolute; top: 18%; left: 5%; width: 300px; text-align: center;">
      <img src="./figures/RL_methods.png" style="width: 100%;">
      <figcaption style="font-size: 0.8em; text-align: center; width: 200px; position: absolute; top: 102%; left: 15%;">
        RL Algorithms
      </figcaption>
    </figure>
    <figure style="position: absolute; top: 90%; left: 30%; width: 300px; text-align: center;">
      <img src="./figures/uparrow.png" style="width: 2%;">
    </figure>
    <div style="font-size: 1.0em; position: absolute; top: 93%; left: 25%; width: 65%; line-height: 1.2;">
      <strong>The method in title</strong>
    </div>
    <figure style="position: absolute; top: 24%; left: 26%; width: 300px; text-align: center;">
      <img src="./figures/downarrow2.png" style="width: 2%;">
    </figure>
    <div style="font-size: 1.0em; position: absolute; top: 20%; left: 25%; width: 65%; line-height: 1.2;">
      <strong>The most popular and successful method in RL</strong>
    </div>
  </div>

  <div v-after>
    <figure style="position: absolute; top: 90%; left: 30%; width: 300px; text-align: center;">
      <img src="./figures/uparrow.png" style="width: 2%;">
    </figure>
    <div style="font-size: 1.0em; position: absolute; top: 93%; left: 25%; width: 65%; line-height: 1.2;">
      <strong>The method in title</strong>
    </div>
    <figure style="position: absolute; top: 24%; left: 26%; width: 300px; text-align: center;">
      <img src="./figures/downarrow2.png" style="width: 2%;">
    </figure>
    <div style="font-size: 1.0em; position: absolute; top: 20%; left: 25%; width: 65%; line-height: 1.2;">
      <strong>The most popular and successful method in RL</strong>
    </div>
    <figure style="position: absolute; top: 74.0%; left: 37%; width: 70px; text-align: center; z-index: 1;">
      <img src="./figures/unexploited_continuity.png" style="width: 100%;">
    </figure>
    <div>
      <AnimatedArrow
        id="arrow1"
        :points="[
          [300, 520],
          [300, 530],
          [222, 530]
        ]"
        :stroke-width="4"
        color="#589EFB"
        :glass="true"
      />
    </div>
    <figure style="position: absolute; top: 18%; left: 5%; width: 300px; text-align: center;">
      <img src="./figures/RL_methods_dtd.png" style="width: 100%;">
      <figcaption style="font-size: 0.8em; text-align: center; width: 200px; position: absolute; top: 102%; left: 15%;">
        RL Algorithms
      </figcaption>
    </figure>
    <div style="font-size: 0.9em; position: absolute; top: 67%; left: 46%; width: 45%; line-height: 1.2;">
    <strong>1. Proposed Method</strong><br>
      We propose a method to incorporate the continuity of the dynamics into TD methods, without requiring knowledge of the dynamics itself. We refer to this method as dTD (differentiable TD).<div style="height: 0.3em;"></div>
    <strong>2. Analysis</strong><br>
      We show that the smoother the underlying model is, the faster the convergence is compared to existing methods.
    </div>
  </div>
</div>
<div v-after>
  <figure style="position: absolute; top: 90%; left: 30%; width: 300px; text-align: center;">
    <img src="./figures/uparrow.png" style="width: 2%;">
  </figure>
  <div style="font-size: 1.0em; position: absolute; top: 93%; left: 25%; width: 65%; line-height: 1.2;">
    <strong>The method in title</strong>
  </div>
  <figure style="position: absolute; top: 24%; left: 26%; width: 300px; text-align: center;">
    <img src="./figures/downarrow2.png" style="width: 2%;">
  </figure>
  <div style="font-size: 1.0em; position: absolute; top: 20%; left: 25%; width: 65%; line-height: 1.2;">
    <strong>The most popular and successful method in RL</strong>
  </div>
  <figure style="position: absolute; top: 74.0%; left: 37%; width: 70px; text-align: center; z-index: 1;">
    <img src="./figures/unexploited_continuity.png" style="width: 100%;">
  </figure>
  <div>
    <AnimatedArrow
      id="arrow1"
      :points="[
        [300, 520],
        [300, 530],
        [222, 530]
      ]"
      :stroke-width="4"
      color="#589EFB"
      :glass="true"
    />
  </div>
  <figure style="position: absolute; top: 18%; left: 5%; width: 300px; text-align: center;">
    <img src="./figures/RL_methods_dtd2.png" style="width: 100%;">
    <figcaption style="font-size: 0.8em; text-align: center; width: 200px; position: absolute; top: 102%; left: 15%;">
      RL Algorithms
    </figcaption>
  </figure>
  <div style="font-size: 0.9em; position: absolute; top: 67%; left: 46%; width: 45%; line-height: 1.2;">
  <strong>1. Proposed Method</strong><br>
    We propose a method to incorporate the continuity of the dynamics into TD methods, without requiring knowledge of the dynamics itself. We refer to this method as dTD (differentiable TD).<div style="height: 0.3em;"></div>
  <strong>2. Analysis</strong><br>
    We show that the smoother the underlying model is, the faster the convergence is compared to existing methods.
  </div>
  <div>
    <AnimatedArrow
      id="arrow2"
      :points="[
        [176, 520],
        [176, 476.8],
        [104.5, 476.8],
        [104.5, 457],
      ]"
      :stroke-width="4"
      color="#589EFB"
      :glass="true"
    />
  </div>
  <div>
    <AnimatedArrow
      id="arrow3"
      :points="[
        [104.5, 420],
        [104.5, 406],
        [147, 406],
        [147, 208]
      ]"
      :stroke-width="4"
      color="#589EFB"
      :glass="true"
    />
  </div>
  <div style="font-size: 0.9em; position: absolute; top: 25%; left: 31%; width: 45%; line-height: 1.2;">
  <strong>3. Experiment</strong><br>
    We compare the conventional TD-based PPO and our proposed dTD-based PPO using the Brax simulator, and show that the proposed method achieves improved performance.<br>
  </div>

  <figure style="position: absolute; top: 42%; left: 40%; width: 300px; text-align: center;">
    <img src="./figures/brax.gif" style="width: 100%;">
    <figcaption style="font-size: 0.8em; white-space: nowrap;">
    brax simulator
    </figcaption>
  </figure>
</div>

---
layout: section
subject: Preliminaries on RL
---

# Preliminaries on RL

---
layout: two-cols
headerEnable: true
headerTitle: Preliminaries on RL
headerLogo: figures/UTokyo.png
---


<div v-click.hide>
  <div v-click.hide>
    <div v-click.hide>
      <v-click>
        <figure style="position: absolute; top: 30%; left: 8%; width: 350px; text-align: center;">
          <img src="./figures/rl_concept1.png" style="width: 80%;">
        </figure>
      </v-click>
    </div>
    <div v-after>
      <figure style="position: absolute; top: 30%; left: 8%; width: 350px; text-align: center;">
        <img src="./figures/rl_concept2.png" style="width: 80%;">
      </figure>
    </div>
  </div>
  <div v-after>
    <figure style="position: absolute; top: 30%; left: 8%; width: 350px; text-align: center;">
        <img src="./figures/rl_concept3.png" style="width: 80%;">
    </figure>
    <div style="font-size: 1.3em; position: absolute; top: 62%; left: 37%; width: 65%; line-height: 1.2; color: red;">
      Choose the biggest one
    </div>
  </div>
</div>
<div v-after>
  <figure style="position: absolute; top: 30%; left: 8%; width: 350px; text-align: center;">
      <img src="./figures/rl_concept4.png" style="width: 80%;">
  </figure>
</div>


---
layout: two-cols
headerEnable: true
headerTitle: Preliminaries on RL
headerLogo: figures/UTokyo.png
---

**TD method**

::left::

**Discrete**

<div v-click.hide>
  <figure style="position: absolute; top: 15%; right: 5%; width: 300px; text-align: center;">
    <img src="./figures/RL_methods_td.png" style="width: 100%;">
  </figure>
  <div v-click.hide>
    <div v-click.hide>
      <div v-click.hide>
        <div v-click.hide>
          <div v-click.hide>
            <div v-click.hide>
              <div v-click.hide>
                <div v-click.hide>
                  <div v-click.hide>
                    <div v-click.hide>
                      <div v-click.hide>
                        <div v-click.hide>
                          <div v-click.hide>
                            <div v-click.hide>
                              <v-click>
                                <figure style="position: relative; top: 0%; left: 0%; width: 220px; text-align: center;">
                                    <img src="./figures/mdp1.png" style="width: 100%;">
                                    <figcaption style="font-size: 0.8em; text-align: center; width: 200px; position: absolute; top: 102%; left: 0%;">
                                    MDP
                                    </figcaption>
                                </figure>
                              </v-click>
                            </div>
                            <div v-after>
                              <figure style="position: relative; top: 0%; left: 0%; width: 220px; text-align: center;">
                                <img src="./figures/mdp2.png" style="width: 100%;">
                                <figcaption style="font-size: 0.8em; text-align: center; width: 200px; position: absolute; top: 102%; left: 0%;">
                                MDP
                                </figcaption>
                              </figure>
                            </div>
                          </div>
                          <div v-after>
                            <figure style="position: relative; top: 0%; left: 0%; width: 220px; text-align: center;">
                              <img src="./figures/mdp3.png" style="width: 100%;">
                              <figcaption style="font-size: 0.8em; text-align: center; width: 200px; position: absolute; top: 102%; left: 0%;">
                              MDP
                              </figcaption>
                            </figure>
                          </div>
                        </div>
                        <div v-after>
                          <figure style="position: relative; top: 0%; left: 0%; width: 220px; text-align: center;">
                            <img src="./figures/mdp4_5.png" style="width: 100%;">
                            <figcaption style="font-size: 0.8em; text-align: center; width: 200px; position: absolute; top: 102%; left: 0%;">
                            MDP
                            </figcaption>
                          </figure>
                        </div>
                      </div>
                      <div v-after>
                        <figure style="position: relative; top: 0%; left: 0%; width: 220px; text-align: center;">
                          <img src="./figures/mdp6.png" style="width: 100%;">
                          <figcaption style="font-size: 0.8em; text-align: center; width: 200px; position: absolute; top: 102%; left: 0%;">
                          MDP
                          </figcaption>
                        </figure>
                      </div>
                    </div>
                    <div v-after>
                      <figure style="position: relative; top: 0%; left: 0%; width: 220px; text-align: center;">
                        <img src="./figures/mdp7_10.png" style="width: 100%;">
                        <figcaption style="font-size: 0.8em; text-align: center; width: 200px; position: absolute; top: 102%; left: 0%;">
                        MDP
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                  <div v-after>
                    <figure style="position: relative; top: 0%; left: 0%; width: 220px; text-align: center;">
                      <img src="./figures/mdp7_10.png" style="width: 100%;">
                      <figcaption style="font-size: 0.8em; text-align: center; width: 200px; position: absolute; top: 102%; left: 0%;">
                      MDP
                      </figcaption>
                    </figure>
                    <figure style="position: absolute; top: 39.4%; left: 26%; width: 150px; text-align: center;">
                      <img src="./figures/rep_mat.png" style="width: 100%;">
                      <figcaption style="font-size: 0.8em; text-align: center; width: 200px; position: absolute; top: 120%; left: -15%;">
                      Model
                      </figcaption>
                    </figure>
                  </div>
                </div>
                <div v-after>
                  <figure style="position: relative; top: 0%; left: 0%; width: 220px; text-align: center;">
                    <img src="./figures/mdp_value.png" style="width: 100%;">
                    <figcaption style="font-size: 0.8em; text-align: center; width: 200px; position: absolute; top: 102%; left: 0%;">
                    MDP
                    </figcaption>
                  </figure>
                  <figure style="position: absolute; top: 39.4%; left: 26%; width: 150px; text-align: center;">
                    <img src="./figures/rep_mat.png" style="width: 100%;">
                    <figcaption style="font-size: 0.8em; text-align: center; width: 200px; position: absolute; top: 120%; left: -15%;">
                    Model
                    </figcaption>
                  </figure>
                  <figure style="position: absolute; top: 61%; left: 14%; width: 80px; text-align: center;">
                    <img src="./figures/value_fn.png" style="width: 100%;">
                    <figcaption style="font-size: 1.2em; position: absolute; top: -25%; left: -125%; font-size: 0.8em; white-space: nowrap;">
                    <strong>Value function:</strong>
                    </figcaption>
                  </figure>
                  <div style="font-size: 0.9em; position: absolute; top: 60.3%; left: 22%; width: 200px; text-align: center;">
                    ←What we want to know
                  </div>
                </div>
              </div>
              <div v-after>
                <figure style="position: relative; top: 0%; left: 0%; width: 220px; text-align: center;">
                  <img src="./figures/mdp_value2.png" style="width: 100%;">
                  <figcaption style="font-size: 0.8em; text-align: center; width: 200px; position: absolute; top: 102%; left: 0%;">
                  MDP
                  </figcaption>
                </figure>
                <figure style="position: absolute; top: 39.4%; left: 26%; width: 150px; text-align: center;">
                  <img src="./figures/rep_mat.png" style="width: 100%;">
                  <figcaption style="font-size: 0.8em; text-align: center; width: 200px; position: absolute; top: 120%; left: -15%;">
                  Model
                  </figcaption>
                </figure>
                <figure style="position: absolute; top: 61%; left: 14%; width: 80px; text-align: center;">
                  <img src="./figures/value_fn.png" style="width: 100%;">
                  <figcaption style="font-size: 1.2em; position: absolute; top: -25%; left: -125%; font-size: 0.8em; white-space: nowrap;">
                  <strong>Value function:</strong>
                  </figcaption>
                </figure>
                <div style="font-size: 0.9em; position: absolute; top: 60.3%; left: 22%; width: 200px; text-align: center;">
                  ←What we want to know
                </div>
              </div>
            </div>
            <div v-after>
              <figure style="position: relative; top: 0%; left: 0%; width: 220px; text-align: center;">
                <img src="./figures/mdp_value3.png" style="width: 100%;">
                <figcaption style="font-size: 0.8em; text-align: center; width: 200px; position: absolute; top: 102%; left: 0%;">
                MDP
                </figcaption>
              </figure>
              <figure style="position: absolute; top: 39.4%; left: 26%; width: 150px; text-align: center;">
                <img src="./figures/rep_mat.png" style="width: 100%;">
                <figcaption style="font-size: 0.8em; text-align: center; width: 200px; position: absolute; top: 120%; left: -15%;">
                Model
                </figcaption>
              </figure>
              <figure style="position: absolute; top: 61%; left: 14%; width: 80px; text-align: center;">
                <img src="./figures/value_fn.png" style="width: 100%;">
                <figcaption style="font-size: 1.2em; position: absolute; top: -25%; left: -125%; font-size: 0.8em; white-space: nowrap;">
                <strong>Value function:</strong>
                </figcaption>
              </figure>
              <div style="font-size: 0.9em; position: absolute; top: 60.3%; left: 22%; width: 200px; text-align: center;">
                ←What we want to know
              </div>
            </div>
          </div>
          <div v-after>
            <figure style="position: relative; top: 0%; left: 0%; width: 220px; text-align: center;">
              <img src="./figures/mdp_value4.png" style="width: 100%;">
              <figcaption style="font-size: 0.8em; text-align: center; width: 200px; position: absolute; top: 102%; left: 0%;">
              MDP
              </figcaption>
            </figure>
            <figure style="position: absolute; top: 39.4%; left: 26%; width: 150px; text-align: center;">
              <img src="./figures/rep_mat.png" style="width: 100%;">
              <figcaption style="font-size: 0.8em; text-align: center; width: 200px; position: absolute; top: 120%; left: -15%;">
              Model
              </figcaption>
            </figure>
            <figure style="position: absolute; top: 61%; left: 14%; width: 80px; text-align: center;">
              <img src="./figures/value_fn.png" style="width: 100%;">
              <figcaption style="font-size: 1.2em; position: absolute; top: -25%; left: -125%; font-size: 0.8em; white-space: nowrap;">
              <strong>Value function:</strong>
              </figcaption>
            </figure>
            <div style="font-size: 0.9em; position: absolute; top: 60.3%; left: 22%; width: 200px; text-align: center;">
              ←What we want to know
            </div>
          </div>
        </div>
        <div v-after>
          <figure style="position: relative; top: 0%; left: 0%; width: 220px; text-align: center;">
            <img src="./figures/mdp_value5.png" style="width: 100%;">
            <figcaption style="font-size: 0.8em; text-align: center; width: 200px; position: absolute; top: 102%; left: 0%;">
            MDP
            </figcaption>
          </figure>
          <figure style="position: absolute; top: 39.4%; left: 26%; width: 150px; text-align: center;">
            <img src="./figures/rep_mat.png" style="width: 100%;">
            <figcaption style="font-size: 0.8em; text-align: center; width: 200px; position: absolute; top: 120%; left: -15%;">
            Model
            </figcaption>
          </figure>
          <figure style="position: absolute; top: 61%; left: 14%; width: 80px; text-align: center;">
            <img src="./figures/value_fn.png" style="width: 100%;">
            <figcaption style="font-size: 1.2em; position: absolute; top: -25%; left: -125%; font-size: 0.8em; white-space: nowrap;">
            <strong>Value function:</strong>
            </figcaption>
          </figure>
          <div style="font-size: 0.9em; position: absolute; top: 60.3%; left: 22%; width: 200px; text-align: center;">
            ←What we want to know
          </div>
        </div>
      </div>
      <div v-after>
        <figure style="position: relative; top: 0%; left: 0%; width: 220px; text-align: center;">
          <img src="./figures/mdp_value5.png" style="width: 100%;">
          <figcaption style="font-size: 0.8em; text-align: center; width: 200px; position: absolute; top: 102%; left: 0%;">
          MDP
          </figcaption>
        </figure>
        <figure style="position: absolute; top: 39.4%; left: 26%; width: 150px; text-align: center;">
          <img src="./figures/rep_mat.png" style="width: 100%;">
          <figcaption style="font-size: 0.8em; text-align: center; width: 200px; position: absolute; top: 120%; left: -15%;">
          Model
          </figcaption>
        </figure>
        <figure style="position: absolute; top: 61%; left: 14%; width: 80px; text-align: center;">
          <img src="./figures/value_fn.png" style="width: 100%;">
          <figcaption style="font-size: 1.2em; position: absolute; top: -25%; left: -125%; font-size: 0.8em; white-space: nowrap;">
          <strong>Value function:</strong>
          </figcaption>
        </figure>
        <div style="font-size: 0.9em; position: absolute; top: 60.3%; left: 22%; width: 200px; text-align: center;">
          ←What we want to know
        </div>
        <figure style="position: absolute; top: 67%; left: 15.6%; width: 260px; text-align: center;">
          <img src="./figures/bellman.png" style="width: 100%;">
          <figcaption style="font-size: 1.2em; position: absolute; top: -10%; left: -45%; font-size: 0.8em; white-space: nowrap;">
          <strong>Bellman equation:</strong>
          </figcaption>
        </figure>
        <div style="font-size: 0.9em; position: absolute; top: 66.3%; left: 38%; width: 400px; text-align: center;">
          ←Value function have to satisfy this equation
        </div>
      </div>
    </div>
    <div v-after>
      <figure style="position: relative; top: 0%; left: 0%; width: 220px; text-align: center;">
        <img src="./figures/mdp_value5_nn.png" style="width: 100%;">
        <figcaption style="font-size: 0.8em; text-align: center; width: 200px; position: absolute; top: 102%; left: 0%;">
        MDP
        </figcaption>
      </figure>
      <figure style="position: absolute; top: 39.4%; left: 26%; width: 150px; text-align: center;">
        <img src="./figures/rep_mat.png" style="width: 100%;">
        <figcaption style="font-size: 0.8em; text-align: center; width: 200px; position: absolute; top: 120%; left: -15%;">
        Model
        </figcaption>
      </figure>
      <figure style="position: absolute; top: 61%; left: 14%; width: 80px; text-align: center;">
        <img src="./figures/value_fn.png" style="width: 100%;">
        <figcaption style="font-size: 1.2em; position: absolute; top: -25%; left: -125%; font-size: 0.8em; white-space: nowrap;">
        <strong>Value function:</strong>
        </figcaption>
      </figure>
      <div style="font-size: 0.9em; position: absolute; top: 60.3%; left: 22%; width: 200px; text-align: center;">
        ←What we want to know
      </div>
      <figure style="position: absolute; top: 67%; left: 15.6%; width: 260px; text-align: center;">
        <img src="./figures/bellman.png" style="width: 100%;">
        <figcaption style="font-size: 1.2em; position: absolute; top: -10%; left: -45%; font-size: 0.8em; white-space: nowrap;">
        <strong>Bellman equation:</strong>
        </figcaption>
      </figure>
      <div style="font-size: 0.9em; position: absolute; top: 66.3%; left: 38%; width: 400px; text-align: center;">
        ←Value function have to satisfy this equation
      </div>
      <figure style="position: absolute; top: 72.5%; left: 13.8%; width: 320px; text-align: center;">
        <img src="./figures/true_loss.png" style="width: 100%;">
        <figcaption style="font-size: 1.2em; position: absolute; top: 18%; left: -32%; font-size: 0.8em; white-space: nowrap;">
        <strong>(True) TD Loss:</strong>
        </figcaption>
      </figure>
      <div style="font-size: 0.9em; position: absolute; top: 73.3%; left: 37%; width: 400px; text-align: center;">
        ←What we want to minimize
      </div>
    </div>
    <v-click>
      <figure style="position: absolute; top: 74.1%; left: 20.5%;">
        <img src="./figures/circ.png" style="width: 60%;">
      </figure>
      <div style="font-size: 0.9em; position: absolute; top: 77%; left: 42.8%; width: 400px; text-align: center;">
        But intractable due to <span style="color: red;">unknown dynamics</span>
      </div>
    </v-click>
  </div>
  <div v-after>
    <figure style="position: relative; top: 0%; left: 0%; width: 220px; text-align: center;">
      <img src="./figures/mdp_value6.png" style="width: 100%;">
      <figcaption style="font-size: 0.8em; text-align: center; width: 200px; position: absolute; top: 102%; left: 0%;">
      MDP
      </figcaption>
    </figure>
    <figure style="position: absolute; top: 39.4%; left: 26%; width: 150px; text-align: center;">
      <img src="./figures/rep_mat.png" style="width: 100%;">
      <figcaption style="font-size: 0.8em; text-align: center; width: 200px; position: absolute; top: 120%; left: -15%;">
      Model
      </figcaption>
    </figure>
    <figure style="position: absolute; top: 61%; left: 14%; width: 80px; text-align: center;">
      <img src="./figures/value_fn.png" style="width: 100%;">
      <figcaption style="font-size: 1.2em; position: absolute; top: -25%; left: -125%; font-size: 0.8em; white-space: nowrap;">
      <strong>Value function:</strong>
      </figcaption>
    </figure>
    <div style="font-size: 0.9em; position: absolute; top: 60.3%; left: 22%; width: 200px; text-align: center;">
      ←What we want to know
    </div>
    <figure style="position: absolute; top: 67%; left: 15.6%; width: 260px; text-align: center;">
      <img src="./figures/bellman.png" style="width: 100%;">
      <figcaption style="font-size: 1.2em; position: absolute; top: -10%; left: -45%; font-size: 0.8em; white-space: nowrap;">
      <strong>Bellman equation:</strong>
      </figcaption>
    </figure>
    <div style="font-size: 0.9em; position: absolute; top: 66.3%; left: 38%; width: 400px; text-align: center;">
      ←Value function have to satisfy this equation
    </div>
    <figure style="position: absolute; top: 72.5%; left: 13.8%; width: 320px; text-align: center;">
      <img src="./figures/true_loss.png" style="width: 100%;">
      <figcaption style="font-size: 1.2em; position: absolute; top: 18%; left: -32%; font-size: 0.8em; white-space: nowrap;">
      <strong>(True) TD Loss:</strong>
      </figcaption>
    </figure>
    <div style="font-size: 0.9em; position: absolute; top: 73.3%; left: 37%; width: 400px; text-align: center;">
      ←What we want to minimize
    </div>
    <figure style="position: absolute; top: 74.1%; left: 20.5%;">
      <img src="./figures/circ.png" style="width: 60%;">
    </figure>
    <div style="font-size: 0.9em; position: absolute; top: 77%; left: 42.8%; width: 400px; text-align: center;">
      But intractable due to <span style="color: red;">unknown dynamics</span>
    </div>
    <figure style="position: absolute; top: 80.0%; left: 10%; width: 270px; text-align: center;">
      <img src="./figures/loss.png" style="width: 100%;">
      <figcaption style="font-size: 1.2em; position: absolute; top: 17%; left: -23%; font-size: 0.8em; white-space: nowrap;">
      <strong>TD Loss:</strong>
      </figcaption>
    </figure>
    <div style="font-size: 0.9em; position: absolute; top: 81.0%; left: 28%; width: 400px; text-align: center;">
      ←What we can minimize
    </div>
  </div>
</div>

<div v-after>
  <figure style="position: relative; top: 0%; left: 0%; width: 220px; text-align: center;">
    <img src="./figures/mdp_value6.png" style="width: 100%;">
    <figcaption style="font-size: 0.8em; text-align: center; width: 200px; position: absolute; top: 102%; left: 0%;">
    MDP
    </figcaption>
  </figure>
  <figure style="position: absolute; top: 39.4%; left: 26%; width: 150px; text-align: center;">
    <img src="./figures/rep_mat.png" style="width: 100%;">
    <figcaption style="font-size: 0.8em; text-align: center; width: 200px; position: absolute; top: 120%; left: -15%;">
    Model
    </figcaption>
  </figure>

  <figure style="position: absolute; top: 61%; left: 14%; width: 80px; text-align: center;">
    <img src="./figures/value_fn.png" style="width: 100%;">
    <figcaption style="font-size: 1.2em; position: absolute; top: -25%; left: -125%; font-size: 0.8em; white-space: nowrap;">
    <strong>Value function:</strong>
    </figcaption>
  </figure>

  <figure style="position: absolute; top: 67%; left: 15.6%; width: 260px; text-align: center;">
    <img src="./figures/bellman.png" style="width: 100%;">
    <figcaption style="font-size: 1.2em; position: absolute; top: -10%; left: -45%; font-size: 0.8em; white-space: nowrap;">
    <strong>Bellman equation:</strong>
    </figcaption>
  </figure>

  <figure style="position: absolute; top: 72.5%; left: 13.8%; width: 320px; text-align: center;">
    <img src="./figures/true_loss.png" style="width: 100%;">
    <figcaption style="font-size: 1.2em; position: absolute; top: 18%; left: -32%; font-size: 0.8em; white-space: nowrap;">
    <strong>(True) TD Loss:</strong>
    </figcaption>
  </figure>

  <figure style="position: absolute; top: 80.0%; left: 10%; width: 270px; text-align: center;">
    <img src="./figures/loss.png" style="width: 100%;">
    <figcaption style="font-size: 1.2em; position: absolute; top: 17%; left: -23%; font-size: 0.8em; white-space: nowrap;">
    <strong>TD Loss:</strong>
    </figcaption>
  </figure>
</div>


::right::

**Continuous**

<v-click>
<figure style="position: relative; top: 0%; left: 3%; width: 185px; text-align: center;">
  <img src="./figures/continuous.png" style="width: 100%;">
  <figcaption style="font-size: 0.8em; text-align: center; width: 200px; position: absolute; top: 102%; left: 0%;">
  Continuous MDP
  </figcaption>
</figure>
<figure style="position: absolute; top: 35%; left: 75%; width: 150px; text-align: center;">
  <img src="./figures/sde_eq.png" style="width: 100%;">
  <figcaption style="font-size: 0.8em; text-align: center; width: 200px; position: absolute; top: 120%; left: -18%;">
  Model
  </figcaption>
</figure>
<figure style="position: absolute; top: 42%; left: 82%; width: 10px; text-align: center;">
  <img src="./figures/downarrow.png" style="width: 100%;">
</figure>
<figure style="position: absolute; top: 48%; left: 78%; width: 90px; text-align: center;">
  <img src="./figures/operator.png" style="width: 100%;">
  <figcaption style="font-size: 0.8em; text-align: center; width: 200px; position: absolute; top: 120%; left: -60%;">
  Model (another expression)
  </figcaption>
</figure>


<figure style="position: absolute; top: 61%; left: 62%; width: 80px; text-align: center;">
  <img src="./figures/value_fn.png" style="width: 100%;">
  <figcaption style="font-size: 1.2em; position: absolute; top: -25%; left: -125%; font-size: 0.8em; white-space: nowrap;">
  <strong>Value function:</strong>
  </figcaption>
</figure>

<figure style="position: absolute; top: 67%; left: 63.8%; width: 295px; text-align: center;">
  <img src="./figures/c_bellman.png" style="width: 100%;">
  <figcaption style="font-size: 1.2em; position: absolute; top: -12%; left: -40%; font-size: 0.8em; white-space: nowrap;">
  <strong>Bellman equation:</strong>
  </figcaption>
</figure>

<figure style="position: absolute; top: 72.5%; left: 61.8%; width: 360px; text-align: center;">
  <img src="./figures/c_true_loss.png" style="width: 100%;">
  <figcaption style="font-size: 1.2em; position: absolute; top: 19%; left: -28%; font-size: 0.8em; white-space: nowrap;">
  <strong>(True) TD Loss:</strong>
  </figcaption>
</figure>

<figure style="position: absolute; top: 80.0%; left: 58%; width: 310px; text-align: center;">
  <img src="./figures/c_loss.png" style="width: 100%;">
  <figcaption style="font-size: 1.2em; position: absolute; top: 17%; left: -20%; font-size: 0.8em; white-space: nowrap;">
  <strong>TD Loss:</strong>
  </figcaption>
</figure>
</v-click>

<v-click>
  <figure style="position: absolute; bottom: 13%; left: 15.5%">
    <img src="./figures/underline1.png" style="width: 52%;">
  </figure>
  <figure style="position: absolute; bottom: 13.5%; left: 63.5%;">
    <img src="./figures/underline2.png" style="width: 70%;">
  </figure>
  <div style="font-size: 0.9em; position: absolute; bottom: 5%; left: 20%; width: 600px; text-align: center;">
     Even though the update rule is designed ahead of time, it provides no indication to the agent as to whether the system is continuous.
  </div>
</v-click>

<style>
.slidev-vclick-hidden {
  display: none;
}
</style>

---
layout: section
subject: Our Approach
---

# Our Approach

---
layout: two-cols
headerEnable: true
headerTitle: Our Approach - Method
headerLogo: figures/UTokyo.png
---

## Core Idea

::left::

**Discrete**


<figure style="position: relative; top: 0%; left: 0%; width: 220px; text-align: center;">
  <img src="./figures/mdp_value.png" style="width: 100%;">
  <figcaption style="font-size: 0.8em; text-align: center; width: 200px; position: absolute; top: 102%; left: 0%;">
  MDP
  </figcaption>
</figure>
<figure style="position: absolute; top: 39.4%; left: 26%; width: 150px; text-align: center;">
  <img src="./figures/rep_mat.png" style="width: 100%;">
  <figcaption style="font-size: 0.8em; text-align: center; width: 200px; position: absolute; top: 120%; left: -15%;">
  Model
  </figcaption>
</figure>

<figure style="position: absolute; top: 61%; left: 13.8%; width: 320px; text-align: center;">
  <img src="./figures/true_loss.png" style="width: 100%;">
  <figcaption style="font-size: 1.2em; position: absolute; top: 18%; left: -32%; font-size: 0.8em; white-space: nowrap;">
  <strong>(True) TD Loss:</strong>
  </figcaption>
</figure>

<figure style="position: absolute; top: 73%; left: 10%; width: 270px; text-align: center;">
  <img src="./figures/loss.png" style="width: 100%;">
  <figcaption style="font-size: 1.2em; position: absolute; top: 17%; left: -23%; font-size: 0.8em; white-space: nowrap;">
  <strong>TD Loss:</strong>
  </figcaption>
</figure>


<v-click>
  <figure style="position: absolute; top: 54.9%; left: 21.1%;">
    <img src="./figures/discrete_arrow.png" style="width: 60%;">
  </figure>
  <figure style="position: absolute; top: 62.5%; left: 20.5%;">
    <img src="./figures/circ.png" style="width: 60%;">
  </figure>

  <figure style="position: absolute; top: 51.9%; left: 68.9%;">
    <img src="./figures/continuous_arrow1.png" style="width: 55%;">
  </figure>
  <figure style="position: absolute; top: 62.6%; left: 68.3%;">
    <img src="./figures/circ.png" style="width: 60%;">
  </figure>
</v-click>

::right::

**Continuous**


<figure style="position: relative; top: 0%; left: 3%; width: 185px; text-align: center;">
  <img src="./figures/continuous.png" style="width: 100%;">
  <figcaption style="font-size: 0.8em; text-align: center; width: 200px; position: absolute; top: 102%; left: 0%;">
  Continuous MDP
  </figcaption>
</figure>
<figure style="position: absolute; top: 35%; left: 75%; width: 150px; text-align: center;">
  <img src="./figures/sde_eq.png" style="width: 100%;">
  <figcaption style="font-size: 0.8em; text-align: center; width: 200px; position: absolute; top: 120%; left: -18%;">
  Model
  </figcaption>
</figure>
<figure style="position: absolute; top: 43%; left: 82%; width: 10px; text-align: center;">
  <img src="./figures/downarrow.png" style="width: 100%;">
</figure>
<figure style="position: absolute; top: 48%; left: 78%; width: 90px; text-align: center;">
  <img src="./figures/operator.png" style="width: 100%;">
  <figcaption style="font-size: 0.8em; text-align: center; width: 200px; position: absolute; top: 120%; left: -60%;">
  Model (another expression)
  </figcaption>
</figure>


<figure style="position: absolute; top: 61%; left: 61.8%; width: 360px; text-align: center;">
  <img src="./figures/c_true_loss.png" style="width: 100%;">
  <figcaption style="font-size: 1.2em; position: absolute; top: 19%; left: -28%; font-size: 0.8em; white-space: nowrap;">
  <strong>(True) TD Loss:</strong>
  </figcaption>
</figure>

<figure style="position: absolute; top: 73%; left: 58%; width: 310px; text-align: center;">
  <img src="./figures/c_loss.png" style="width: 100%;">
  <figcaption style="font-size: 1.2em; position: absolute; top: 17%; left: -20%; font-size: 0.8em; white-space: nowrap;">
  <strong>TD Loss:</strong>
  </figcaption>
</figure>

<v-click>
  <v-click>
    <figure style="position: absolute; top: 66.4%; left: 68.4%;">
      <img src="./figures/model_blocked.png" style="width: 50%;">
    </figure>
  </v-click>
</v-click>

<v-click>
  <figure style="position: absolute; top: 56%; left: 70%;">
    <img src="./figures/model_arg.png" style="width: 50%;">
  </figure>
</v-click>

<v-click>
  <figure style="position: absolute; top: 65.4%; left: 79.1%;">
    <img src="./figures/model_loss.png" style="width: 50%;">
  </figure>
  <div style="font-size: 0.8em; position: absolute; bottom: 26.5%; left: 63%; width: 500px; text-align: center; color: rgb(63, 22, 255); text-shadow: 0 0 0.5px rgb(63, 22, 255);">
     Embed the model into the <br> sample based loss
  </div>
  <div style="font-size: 0.9em; position: absolute; bottom: 7%; left: 17%; width: 650px; text-align: center; text-shadow: 0 0 0.5px rgb(0, 0, 0);">
     By embedding the model not only in the <span style="color: rgb(252, 18, 14); font-style: italic;">subscript</span> but also in the <span style="color: rgb(63, 22, 255); font-style: italic;">argument</span>, <br> we ensure that model information remains available even after sample-based approximation.
  </div>
</v-click>


<style>
.slidev-vclick-hidden {
  display: none;
}
</style>


---
layout: default
headerEnable: true
headerTitle: Our Approach - Method
headerLogo: figures/UTokyo.png
---

## Embedding the model introduces another problem


<div style="font-size: 0.8em; position: absolute; top: 20%; left: 8% ;">
$$
\begin{aligned}
V^\pi(s_t) &= \mathbb{E}_{P_\pi}\left[\rho(s_t, A_t)\Delta t+e^{-\gamma\Delta t}V^\pi(S_{t+\Delta t})\right] \\
\end{aligned}
$$
</div>

<v-click>
  <figure style="position: absolute; top: 27.2%; left: 33.3%">
    <img src="./figures/underline3.png" style="width: 49%;">
  </figure>
  <div style="font-size: 0.9em; position: absolute; top: 28.5%; left: 33.5%; width: 650px;">
      Embed the model here, <br> i.e., expand this term using:
  </div>
  <div style="font-size: 0.8em; position: absolute; top: 30.3%; left: 52.5% ;">
$$
\begin{aligned}
dS_t &= \mu(S_t, A_t)dt+\sigma(S_t, A_t)dB_t \\
\end{aligned}
$$
</div>
</v-click>



<v-click>
<div style="font-size: 0.8em; position: absolute; top: 36%; left: 4.7% ;">
$$
\begin{aligned}
\Longrightarrow V^\pi(s_t) &= \frac{1}{\gamma}\mathbb{E}_{P_\pi}\left[\rho(s_t, A_t)+\sum_{i=1}^{n} \mu^i(s_t, A_t)\frac{\partial V^{\pi}(s)}{\partial s^i} \bigg|_{s_t}+ \frac{1}{2} \sum_{i=1}^{n} \sum_{j=1}^{n}[\sigma(s_t, A_t)\sigma^\top(s_t, A_t)]^{ij}\frac{\partial^2 V^{\pi}(s)}{\partial s^i \partial s^j}\bigg|_{s_t}\right]
\end{aligned}
$$
</div>
<div style="font-size: 0.9em; position: absolute; top: 51%; left: 10% ;">
Now that we have embedded the model into the argument as well, can we define the sample-based loss using it and perform RL?
</div>
</v-click>

<v-click>
<div style="font-size: 0.8em; position: absolute; top: 54%; left: 2% ;">
$$
\begin{aligned}
\text{(True) TD Loss: } \mathcal{L}(\theta) &= \left(\frac{1}{\gamma}\mathbb{E}_{P_\pi}\left[\rho(s_t, A_t)+\sum_{i=1}^{n} \mu^i(s_t, A_t)\frac{\partial \tilde{V}_\theta^{\pi}(s)}{\partial s^i} \bigg|_{s_t}+ \frac{1}{2} \sum_{i=1}^{n} \sum_{j=1}^{n}[\sigma(s_t, A_t)\sigma^\top(s_t, A_t)]^{ij}\frac{\partial^2 \tilde{V}_\theta^{\pi}(s)}{\partial s^i \partial s^j}\bigg|_{s_t}\right] - \tilde{V}_\theta^\pi(s_t)\right)^2, \\
\text{TD Loss: } \tilde{\mathcal{L}}(\theta) &= \left(\frac{1}{\gamma}\left(\rho(s_t, A_t)+\sum_{i=1}^{n} \mu^i(s_t, A_t)\frac{\partial \tilde{V}_\theta^{\pi}(s)}{\partial s^i} \bigg|_{s_t}+ \frac{1}{2} \sum_{i=1}^{n} \sum_{j=1}^{n}[\sigma(s_t, A_t)\sigma^\top(s_t, A_t)]^{ij}\frac{\partial^2 \tilde{V}_\theta^{\pi}(s)}{\partial s^i \partial s^j}\bigg|_{s_t}\right) - \tilde{V}_\theta^\pi(s_t)\right)^2
\end{aligned}
$$
</div>
</v-click>

<v-click>
<figure style="position: absolute; top: 74%; left: 35%">
  <img src="./figures/model_dependent.png" style="width: 62%;">
</figure>
<div style="font-size: 1.2em; position: absolute; top: 81%; left: 30% ;">
We cann't compute these <strong style="color: rgb(63, 22, 252);">model-dependent terms</strong>, because we don't know the model.
</div>
</v-click>


---
layout: default
headerEnable: true
headerTitle: Our Approach - Method
headerLogo: figures/UTokyo.png
---

## Main result

We found a consistent estimator, fully computable from trajectories, whose expectation coincides with the model parameter.

<div style="font-size: 0.8em; position: absolute; top: 28%; left: 28% ;">
$$
\begin{aligned}
\mathbb E_{P_{\pi}}\left[\mu^i(s_t, A_t)\right] &= \underset{\Delta t\rightarrow 0}{\lim}\mathbb E_{P_{\pi}}\left[\frac{S_{t+\Delta t}^i-s_t^i}{\Delta t}\right] \\
\mathbb E_{P_{\pi}}\left[[\sigma(s_t, A_t)\sigma^\top(s_t, A_t)]^{ij}\right] &= \underset{\Delta t\rightarrow 0}{\lim}\mathbb E_{P_{\pi}}\left[\frac{(S_{t+\Delta t}^i - s_{t}^i)(S_{t+\Delta t}^j - s_{t}^j)}{\Delta t}\right]
\end{aligned}
$$
</div>

<div class="relative h-[300px]">
  <hr class="absolute top-[100px] left-[2%] w-[96%] border-t border-gray-300" />
</div>

<v-click>
<div style="font-size: 0.8em; position: absolute; top: 54%; left: 2% ;">
$$
\begin{aligned}
\mathcal{L}(\theta) &\ \ \ = \left(\frac{1}{\gamma}\mathbb{E}_{P_\pi}\left[\rho(s_t, A_t)+\sum_{i=1}^{n} \mu^i(s_t, A_t)\frac{\partial \tilde{V}_\theta^{\pi}(s)}{\partial s^i} \bigg|_{s_t}+ \frac{1}{2} \sum_{i=1}^{n} \sum_{j=1}^{n}[\sigma(s_t, A_t)\sigma^\top(s_t, A_t)]^{ij}\frac{\partial^2 \tilde{V}_\theta^{\pi}(s)}{\partial s^i \partial s^j}\bigg|_{s_t}\right] - \tilde{V}_\theta^\pi(s_t)\right)^2 \\
&\overset{\begin{array}{c}\scriptsize \text{Main} \\ \scriptsize \text{result}\end{array}}{=} \left(\frac{1}{\gamma}\underset{\Delta t\rightarrow 0}{\lim}\mathbb{E}_{P_\pi}\left[\rho(s_t, A_t)+\sum_{i=1}^{n} \frac{S_{t+\Delta t}^i-s_t^i}{\Delta t}\frac{\partial \tilde{V}_\theta^{\pi}(s)}{\partial s^i} \bigg|_{s_t}+ \frac{1}{2} \sum_{i=1}^{n} \sum_{j=1}^{n}\frac{(S_{t+\Delta t}^i - s_{t}^i)(S_{t+\Delta t}^j - s_{t}^j)}{\Delta t}\frac{\partial^2 \tilde{V}_\theta^{\pi}(s)}{\partial s^i \partial s^j}\bigg|_{s_t}\right] - \tilde{V}_\theta^\pi(s_t)\right)^2 \\
\Longrightarrow\tilde{\mathcal{L}}(\theta) &\overset{\begin{array}{c}\scriptsize \text{for sufficiently} \\ \scriptsize \text{small }\Delta t > 0\end{array}}{\approx} \left(\frac{1}{\gamma}\left(\rho(s_t, A_t)+\sum_{i=1}^{n} \frac{s_{t+\Delta t}^i-s_t^i}{\Delta t}\frac{\partial \tilde{V}_\theta^{\pi}(s)}{\partial s^i} \bigg|_{s_t}+ \frac{1}{2} \sum_{i=1}^{n} \sum_{j=1}^{n}\frac{(s_{t+\Delta t}^i - s_{t}^i)(s_{t+\Delta t}^j - s_{t}^j)}{\Delta t}\frac{\partial^2 \tilde{V}_\theta^{\pi}(s)}{\partial s^i \partial s^j}\bigg|_{s_t}\right) - \tilde{V}_\theta^\pi(s_t)\right)^2
\end{aligned}
$$
</div>
</v-click>

---
layout: default
headerEnable: true
headerTitle: Our Approach - Method
headerLogo: figures/UTokyo.png
---

## Interpretation

**Classical TD Loss:**

$\tilde{\mathcal{L}}(\theta)=\sum_{t=1}^{T}(\rho\Delta t + e^{-\gamma\Delta t}V_\theta(s_{t+1})-V_\theta(s_t))^2$



**Proposed TD Loss:**

$\tilde{\mathcal{L}}(\theta) = \sum_{t=1}^{T}\small{\left(\frac{1}{\gamma}\left(\rho(s_t, A_t)+\sum_{i=1}^{n} \frac{s_{t+\Delta t}^i-s_t^i}{\Delta t}\frac{\partial \tilde{V}_\theta^{\pi}(s)}{\partial s^i} \bigg|_{s_t}+ \frac{1}{2} \sum_{i=1}^{n} \sum_{j=1}^{n}\frac{(s_{t+\Delta t}^i - s_{t}^i)(s_{t+\Delta t}^j - s_{t}^j)}{\Delta t}\frac{\partial^2 \tilde{V}_\theta^{\pi}(s)}{\partial s^i \partial s^j}\bigg|_{s_t}\right) - \tilde{V}_\theta^\pi(s_t)\right)^2}$

<figure style="position: absolute; top: 58%; left: 15%">
  <img src="./figures/TD_pic.png" style="width: 60%;">
  <figcaption style="font-size: 1.2em; position: absolute; top: 100%; left: 10%; font-size: 0.8em; white-space: nowrap;">
  <strong>Classical TD Loss</strong>
  </figcaption>
</figure>

<figure style="position: absolute; top: 58.9%; left: 35%">
  <img src="./figures/dTD_pic.png" style="width: 60%;">
  <figcaption style="font-size: 1.2em; position: absolute; top: 100%; left: 10%; font-size: 0.8em; white-space: nowrap;">
  <strong>Proposed TD Loss</strong>
  </figcaption>
</figure>

<div style="font-size: 0.9em; position: absolute; top: 57%; left: 58%; width: 320px;">
<strong>Qualitative difference between the
classical TD method and the proposed dTD
method;</strong>
<span style="color: rgb(220, 20, 60);">　The objects in red indicate what is adjusted</span> by each temporal difference. (Left) In
the typical TD method, <span style="color: rgb(220, 20, 60);">the values of V</span> are
adjusted to minimize the TD error. (Right) In
the dTD method, <span style="color: rgb(220, 20, 60);">the gradient and the second
derivative of V</span> at st are adjusted to minimize
the dTD error.
</div>


---
layout: default
headerEnable: true
headerTitle: Our Approach - Analysis
headerLogo: figures/UTokyo.png
---

## Convergence Analysis(Main result2)

**Classical TD:**
$$\begin{aligned}&V_{i+1}^\pi(s_t) = (TV_{i})(s_t):=\mathbb{E}_{P_\pi}\left[r(s_t, A_t)+\gamma V_i^\pi(S_{t+1})\right] \\ &\|TV^\pi-TU^\pi\|_\infty\leq\gamma\|V^\pi-U^\pi\|_\infty\:(0<\gamma<1)\end{aligned}$$

**dTD:**
$$\small\begin{aligned}&V_{i+1}^\pi(s_t) = (\tilde{T}V_{i})(s_t):=\frac{1}{\gamma}\mathbb{E}_{P_\pi}\left[\rho(s_t, A_t)+\sum_{i=1}^{n} \mu^i(s_t, A_t)\frac{\partial V_i^{\pi}(s)}{\partial s^i} \bigg|_{s_t}+ \frac{1}{2} \sum_{i=1}^{n} \sum_{j=1}^{n}[\sigma(s_t, A_t)\sigma^\top(s_t, A_t)]^{ij}\frac{\partial^2 V_i^{\pi}(s)}{\partial s^i \partial s^j}\bigg|_{s_t}\right] \\ &\|\tilde{T}V^\pi-\tilde{T}U^\pi\|_{H^{-1}(S)}\leq\frac{1}{\gamma}\left(\sum_{i=1}^2\|\nabla^i\mu\|_{L^\infty}+\sum_{i=1}^3\|\nabla^i\sigma\|_{L^\infty}\right)\|V^\pi-U^\pi\|_{H^{-1}(S)}\:(0<\gamma<\infty)\end{aligned}$$


**(Efficient Computation)**

$$\left\langle\Delta s_t, \frac{\partial^2 V}{\partial s^2}\bigg|_{s_t}\Delta s_t\right\rangle=\left\langle\Delta s_t, \frac{\partial}{\partial s}\left\langle\frac{\partial V}{\partial s},\Delta s_t\right\rangle\bigg|_{s_t}\right\rangle$$


<figure style="position: relative; top: -90%; left: 77%; width: 220px; text-align: center;">
    <img src="./figures/convergence.png" style="width: 100%;">
</figure>

<style>
.slidev-vclick-hidden {
  display: none;
}
</style>



---
layout: default
headerEnable: true
headerTitle: Our Approach - Experiment
headerLogo: figures/UTokyo.png
---

## Experimental Design


<figure style="position: absolute; top: 22%; left: 10%">
  <img src="./figures/brax_logo.png" style="width: 20%;">
</figure>

<figure style="position: absolute; top: 15%; left: 27%">
  <img src="./figures/hc.gif" style="width: 50%;">
</figure>

<figure style="position: absolute; top: 15%; left: 44%">
  <img src="./figures/ant.gif" style="width: 50%;">
</figure>

<figure style="position: absolute; top: 15%; left: 61%">
  <img src="./figures/hm.gif" style="width: 50%;">
</figure>

<figure style="position: absolute; top: 50%; left: 50%">
  <img src="./figures/vertical_line.png" style="width: 50%;">
</figure>

<v-click>
<div style="font-size: 1.0em; position: absolute; top: 52%; left: 4%; width: 320px;">
  <strong>Modification for discrete environment compatibility</strong>
</div>
<div style="font-size: 0.8em; position: absolute; top: 60%; left: 5% ;">
$$
\begin{aligned}
&\int_{0}^\infty \text{e}^{-\gamma t}\rho(s_t, a_t)dt\approx \sum_{k=0}^\infty \text{e}^{(-\gamma\Delta t)k}\rho(s_{k\Delta t}, a_{k\Delta t})\Delta t \\
&\Longrightarrow \rho(s_t, a_t)=\frac{r(s_t, a_t)}{\Delta t}\text{ and }\rho(s_t, a_t)=-\frac{1}{\Delta t}\log{(\gamma_{\text{discrete}})}
\end{aligned}
$$
</div>
</v-click>

<v-click>
<div style="font-size: 1.0em; position: absolute; top: 52%; left: 54%; width: 320px;">
  <strong>Add noise to mimic stochastic environment</strong>
</div>
<div style="font-size: 0.8em; position: absolute; top: 63%; left: 60% ;">
$$
\begin{aligned}
&\mathbf{s}_i\leftarrow \mathbf{s}_i + \nu |\mathbf{s}_i|\times\text{noise}\\
&\nu\in\{0.0, 0.01, 0.05\},\:\text{noise}\sim\mathcal{N}(0,1)
\end{aligned}
$$
</div>
</v-click>


---
layout: default
headerEnable: true
headerTitle: Our Approach - Experiment
headerLogo: figures/UTokyo.png
---

## Results

<figure style="position: absolute; top: 20%; left: 30%">
  <img src="./figures/result.png" style="width: 65%;">
</figure>


<figure style="position: absolute; top: 38%; left: 21%">
  <img src="./figures/hc.gif" style="width: 35%;">
</figure>

<figure style="position: absolute; top: 54.8%; left: 21%">
  <img src="./figures/ant.gif" style="width: 35%;">
</figure>

<figure style="position: absolute; top: 71.6%; left: 21%">
  <img src="./figures/hm.gif" style="width: 35%;">
</figure>


---
layout: section
subject: Thank you
hideInToc: true
---
