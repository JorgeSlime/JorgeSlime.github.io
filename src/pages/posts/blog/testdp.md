---
layout: ../../../layouts/LayoutBlog.astro
title: "xd 123"
---


## **Introducción**

La **Programación Dinámica (DP)** es una técnica poderosa para resolver problemas de optimización mediante la **subestructura óptima** y la **superposición de subproblemas**.

En este artículo, explicaremos **paso a paso** 6 problemas básicos de **DP**:

1. [Hakurei Shrine](https://marisaoj.com/problem/140) (_**Marisaoj**_)
2. [Minimizing Coins](https://cses.fi/problemset/task/1634) (_**CSES**_)
3. [Frog 1](https://atcoder.jp/contests/dp/tasks/dp_a) (_**Atcoder**_)
4. [Frog 2](https://atcoder.jp/contests/dp/tasks/dp_b) (_**Atcoder**_)
5. [Buying Tickets](https://marisaoj.com/problem/572) (_**Marisaoj**_)
6. **Triangles** [Problema](https://olympiads.win.tue.nl/ioi/ioi94/contest/day1prb1/problem.html), [Prueba tu solución](https://atcoder.jp/contests/ioi1994/tasks) (_**IOI 1994**_)

Estos problemas son una gran introducción al mundo de **DP**, sobre todo si los explicamos **paso a paso**, detallando cada decisión tomada.  
La **programación dinámica** puede parecer difícil al inicio, pero la clave está en **practicar con rigurosidad**.  
Este tema es muy **matemático**, por lo que es importante entender la base teórica detrás de cada solución.  
Cada problema incluirá **esquemas gráficos** y una **demostración matemática** cuando sea necesario.

---

## **Problema 1**

El problema consiste en **contar** de cuántas maneras podemos llegar a la cima de una escalera con un número dado de peldaños, **N**, usando los pasos disponibles **[1,2,3]**.

### **Ejemplo**

Si $N=3$, las formas de alcanzar la cima son:
$(1,1,1),(1,2),(2,1),(3)$
Por lo que la respuesta es **4**.

Observamos que estamos **contando todos los órdenes posibles**.

---

### **Enfoque Inicial**

Una primera idea sería usar **Fuerza Bruta**, generando todas las combinaciones posibles para alcanzar $N$.  
Sin embargo, esto es ineficiente porque repetiremos cálculos innecesarios.

Podemos notar que el problema tiene dos propiedades clave de la **Programación Dinámica**:
1. **Subestructura óptima** → La solución para $N$ se construye a partir de soluciones más pequeñas.
2. **Superposición de subproblemas** → Se repiten cálculos para valores intermedios de $N$.
Como podemos ver en el siguiente gráfico su forma  recursiva y en donde podemos optimizar con __dp__:
En el gráfico podemos observar que contamos las hojas del árbol que queda en $0$ pero también notamos que se repiten los resultados como en el $1$ que aparece dos veces para esto usaremos `dp` para evitar volver a bajar por el árbol de recursión.


### **Construcción del DP**

Vamos a definir $dp[i]$ como:

> **El número de maneras de llegar al peldaño $i$ usando pasos de tamaño 1, 2 o 3.**

Podemos formular la **recurrencia** como:
$$
\begin{equation}
dp(i) =
\begin{cases}
    1, & \text{si } i = 0, \\
    1, & \text{si } i = 1, \\
    2, & \text{si } i = 2, \\
    dp(i-1) + dp(i-2) + dp(i-3).
\end{cases}
\end{equation}
$$
O de manera mas simple o "aplanada": 
$$dp[i]=dp[i−1]+dp[i−2]+dp[i−3]$$
Esta recurrencia nos dice que para llegar a $i$, podemos haber venido de:

- $i−1$ (dando un paso de 1).
- $i−2$ (dando un paso de 2).
- $i−3$ (dando un paso de 3).

Esto nos lleva a una **implementación eficiente** con __Top-Down__ o **Bottom-Up**.

Como último detalle debemos usar el __MOD__ en cada suma para no pasar de 64 bits 
ya que el numero de formas llegaría a ser un número demasiado grande

---

### **Implementación en C++**

##### **Versión Recursiva con Memoización $O(N)$ (Top-Down)**

```cpp
#include <iostream>
#include <vector>
#include <cstdint>
int main(){
    constexpr int64_t MOD = 1000000007; 
    int n; std::cin >> n; 
    std::vector<int64_t> dp(n + 1,-1);
    auto back=[&](auto&& back,int val)->int{
        if(val == 0) return 1; 
        if(val < 0) return 0; 
        if(dp[val] != -1) return dp[val]; 
        int64_t ans=back(back,val-1) + back(back,val-2) + back(back,val-3); 
        ans %= MOD; 
        return dp[val] = ans; 
    }; 
    std::cout << back(back,n) << '\n'; 
    return 0;
}

```
- **Complejidad:** $O(N)$ gracias a la memorización.  
- **Espacio:** $O(N)$ por la tabla `dp`.

---

##### **Versión Iterativa $O(N)$ (Buttom-Up)**

```cpp
#include <iostream>
#include <vector>
int main(){
	constexpr int64_t MOD = 1000000007;
    int n; std::cin >> n; 
    std::vector<int64_t> dp(n + 1);
    dp[0] = 1; 
    dp[1] = 1; 
    dp[2] = 2; 
    for(int i{3};i<=n;i++){
        dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
        dp[i] %= MOD;
    }
    std::cout << dp[n] << '\n'; 
    return 0;
}

```

- **Complejidad:** $O(N)$
- **Espacio:** $O(N)$

---

#### **Conclusión y Reflexión**
- El problema tenía una **estructura recursiva natural**, lo que permitía una solución con **DP**.
- Esta idea de **suma de estados previos** es muy común en DP y se usa en **Fibonacci**, **Número de formas de hacer cambio**, etc.
- El __Top down__ suele ser mas lento que el __Buttom Up__ en la mayoria de los casos por eso es recomendable usar el __Buttom up__ por la eficiencia en memoria y lógicamente tender a evitar desbordamientos de pila. 

---
#### **¿Qué sigue?**
- **Pregunta para ti:** ¿Cómo modificarías el código si los pasos permitidos fueran $[1,3,5]$ en lugar de $[1,2,3]$ o si fuese un arreglo de $N$ elementos en lugar de solo $[1,2,3]$? 
## Problema 2 

Consiste en minimizar el uso de monedas del arreglo $A$ de tamaño $N$ para un valor específico $X$. 
### Ejemplo: 



