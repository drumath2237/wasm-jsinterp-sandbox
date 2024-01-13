var i = Object.defineProperty;
var a = (e, t, n) => t in e ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var s = (e, t, n) => (a(e, typeof t != "symbol" ? t + "" : t, n), n);
class c {
  constructor(t, n, o) {
    s(this, "name");
    s(this, "age");
    s(this, "isChild");
    this.name = t, this.age = n, this.isChild = o;
  }
}
const r = (e) => new c(e, 18, !1), g = (e) => `{name: ${e.name}, age: ${e.age}, child: ${e.isChild}}`, h = (e) => {
  const t = document.querySelector("p#msg");
  t && (t.textContent = e);
};
export {
  c as Person,
  r as getPerson,
  h as logInfo,
  g as printPerson
};
