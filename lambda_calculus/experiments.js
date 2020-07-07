Number.prototype.log = function () { console.log(this.valueOf()) }
Function.prototype.log = function () { console.log(this.toString()) }

console.log('### IDENTITY ###')
const ID = a => a

ID(3).log()
ID(ID).log()

console.log('### SELF APPLICATION ###')
const SELF = f => f(f)

SELF(ID).log()

console.log('### FIRST and LAST ###')
const FIRST = a => _ => a
const LAST = _ => b => b

FIRST(3)(7).log()
LAST(3)(7).log()

console.log('### SWAP ###')
const SWAP = f => a => b => f(b)(a)

// LAST with FIRST and SWAP
SWAP(FIRST)(3)(7).log()

console.log('### TRUE and FALSE ###')
const T = FIRST
T.toString = () => 'True'
const F = LAST
F.toString = () => 'False'

T.log()
F.log()

console.log('### NOT ###')
const NOT = a => a(F)(T)

NOT(T).log()
NOT(F).log()

console.log('### AND ###')
const AND = a => b => a(b)(F)

AND(T)(T).log()
AND(T)(F).log()
AND(F)(T).log()
AND(F)(F).log()

console.log('### OR ###')
const OR = a => b => a(T)(b)

OR(T)(T).log()
OR(T)(F).log()
OR(F)(T).log()
OR(F)(F).log()

console.log('### XNOR ###')
const XNOR = a => b => a(b)(NOT(b))

XNOR(T)(T).log()
XNOR(T)(F).log()
XNOR(F)(T).log()
XNOR(F)(F).log()

console.log('### XOR ###')
const XOR = a => b => NOT(XNOR(a)(b))

XOR(T)(T).log()
XOR(T)(F).log()
XOR(F)(T).log()
XOR(F)(F).log()
