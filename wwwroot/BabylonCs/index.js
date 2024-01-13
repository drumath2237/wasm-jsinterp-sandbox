var t = Object.defineProperty;
var h = (e, s, i) => s in e ? t(e, s, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[s] = i;
var a = (e, s, i) => (h(e, typeof s != "symbol" ? s + "" : s, i), i);
class c {
  constructor(s, i, n) {
    a(this, "name");
    a(this, "age");
    a(this, "isChild");
    this.name = s, this.age = i, this.isChild = n;
  }
}
const o = (e) => new c(e, 18, !1), g = (e) => `{name: ${e.name}, age: ${e.age}, child: ${e.isChild}}`;
export {
  c as Person,
  o as getPerson,
  g as printPerson
};
