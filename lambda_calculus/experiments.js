Number.prototype.log = function () { console.log(this.valueOf()) }
Function.prototype.log = function () { console.log(this.toString()) }

const ID = a => a

ID(3).log()
ID(ID).log()

const SELF = f => f(f)

SELF(ID).log()

const FIRST = a => _ => a
const LAST = _ => b => b

FIRST(3)(7).log()
LAST(3)(7).log()

const SWAP = f => a => b => f(b)(a)

// LAST with FIRST and SWAP
SWAP(FIRST)(3)(7).log()

const T = FIRST
T.toString = () => 'True'
const F = LAST
F.toString = () => 'False'

T.log()
F.log()

const NOT = a => a(F)(T)

NOT(T).log()
NOT(F).log()

const AND = a => b => a(b)(F)

AND(T)(T).log()
AND(T)(F).log()
AND(F)(T).log()
AND(F)(F).log()

const OR = a => b => a(T)(b)

OR(T)(T).log()
OR(T)(F).log()
OR(F)(T).log()
OR(F)(F).log()

const XNOR = a => b => a(b)(NOT(b))

XNOR(T)(T).log()
XNOR(T)(F).log()
XNOR(F)(T).log()
XNOR(F)(F).log()

const XOR = a => b => NOT(XNOR(a)(b))

XOR(T)(T).log()
XOR(T)(F).log()
XOR(F)(T).log()
XOR(F)(F).log()
