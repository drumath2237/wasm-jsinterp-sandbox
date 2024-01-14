var a = Object.defineProperty;
var c = (e, n, t) => n in e ? a(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var s = (e, n, t) => (c(e, typeof n != "symbol" ? n + "" : n, t), t);
class i {
  constructor(n, t, o) {
    s(this, "name");
    s(this, "age");
    s(this, "isChild");
    this.name = n, this.age = t, this.isChild = o;
  }
}
const r = (e) => new i(e, 18, !1), g = (e) => `{name: ${e.name}, age: ${e.age}, child: ${e.isChild}}`, m = (e, n) => {
  e.name = n;
}, h = (e) => {
  const n = document.querySelector("p#msg");
  n && (n.textContent = e);
};
export {
  i as Person,
  m as changePersonName,
  r as getPerson,
  h as logInfo,
  g as printPerson
};
