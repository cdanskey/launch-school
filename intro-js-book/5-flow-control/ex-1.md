Expression | Value
-----------|------
false &#124;&#124; (true && false) | false 
true &#124;&#124; (1 + 2) | true
(1 + 2) &#124;&#124; true | 3
true && (1 + 2) | 3 
false && (1 + 2) | false
(1 + 2) && true | true
(32 * 4) >= 129 | false
false !== !true | false
true === 4 | false
false === (847 === '847') | true
false === (847 == '847') | false
(!true &#124;&#124; (!(100 / 5) === 20) &#124;&#124; ((328 / 4) === 82)) &#124;&#124; false | true

