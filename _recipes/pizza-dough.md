---
layout: recipe
title: Plain Flour Cold Ferment Pizza Dough
---



## Ingredients

<div class="pizza-calculator">
  <label for="pizza-count">Number of pizzas:</label>
  <select id="pizza-count">
    <option value="1">1</option>
    <option value="2" selected>2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
  </select>
</div>

Makes <span id="yield-text">2 × 280 g dough balls</span>

- Plain white flour: **<span id="flour">330</span> g**
- Water: **<span id="water">190</span> g**
- Instant yeast: **<span id="yeast">½</span> tsp**
- Fine salt: **<span id="salt">8</span> g**
- Sugar: **<span id="sugar">6</span> g**
- Olive oil: **<span id="oil">2½</span> tsp**

Hydration: ~58%

<script>
(function() {
  const baseAmounts = {
    flour: 330,
    water: 190,
    yeast: 0.5,
    salt: 8,
    sugar: 6,
    oil: 2.5
  };
  
  function formatNumber(num) {
    if (num === Math.floor(num)) return num.toString();
    if (num % 1 === 0.5) {
      const whole = Math.floor(num);
      return whole > 0 ? whole + '½' : '½';
    }
    return num.toFixed(1).replace(/\.0$/, '');
  }
  
  function updateIngredients() {
    const count = parseInt(document.getElementById('pizza-count').value);
    const multiplier = count / 2;
    const ballText = count === 1 ? 'dough ball' : 'dough balls';
    
    document.getElementById('yield-text').textContent = count + ' × 280 g ' + ballText;
    document.getElementById('flour').textContent = Math.round(baseAmounts.flour * multiplier);
    document.getElementById('water').textContent = Math.round(baseAmounts.water * multiplier);
    document.getElementById('yeast').textContent = formatNumber(baseAmounts.yeast * multiplier);
    document.getElementById('salt').textContent = Math.round(baseAmounts.salt * multiplier);
    document.getElementById('sugar').textContent = Math.round(baseAmounts.sugar * multiplier);
    document.getElementById('oil').textContent = formatNumber(baseAmounts.oil * multiplier);
  }
  
  document.getElementById('pizza-count').addEventListener('change', updateIngredients);
})();
</script>

## Method

**Step 1**  
Mix water and yeast. Rest 2–3 minutes.

**Step 2**  
Add liquid to flour. Mix until just combined.

**Step 3**  
Add olive oil and mix in.

**Step 4**  
Add salt and sugar. Mix to a shaggy dough.

**Step 5**  
Knead lightly for 3–4 minutes. Stop once smooth. Do not overwork.

**Step 6**  
Cover and rest 15 minutes.

**Step 7**  
Divide into two 280 g balls. Shape gently with minimal tension.

**Step 8**  
Lightly oil, cover, refrigerate 24–48 hours. 48 hours ideal. Do not exceed 72.

---

## Baking Day

**Dough prep**  
Remove from fridge 90–120 minutes before baking. Dough should be soft, cool, and relaxed.

## Oven Setup

Pizza steel on top third rack. Fan oven at 250°C. Preheat 45–60 minutes.

## Shaping

**Step 1**  
Flour dough and bench.

**Step 2**  
Press from centre outwards, leave rim untouched.

**Step 3**  
Flip and repeat.

**Step 4**  
Stretch gently over knuckles.

Target 10–11 inches. If it resists, rest 5 minutes and continue.

## Topping

Light sauce. 80–90 g mozzarella. Avoid over-topping.

## Bake

**Step 1**  
Launch onto steel.

**Step 2**  
Bake 6–7 minutes.

**Step 3**  
Finish under grill 30–60 seconds if needed for colour.
