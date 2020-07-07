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
