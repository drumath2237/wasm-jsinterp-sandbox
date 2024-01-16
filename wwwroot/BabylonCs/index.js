var c = Object.defineProperty;
var a = (s, n, t) => n in s ? c(s, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : s[n] = t;
var e = (s, n, t) => (a(s, typeof n != "symbol" ? n + "" : n, t), t);
class i {
  constructor(n, t, o) {
    e(this, "name");
    e(this, "age");
    e(this, "isChild");
    this.name = n, this.age = t, this.isChild = o;
  }
}
const l = (s) => new i(s, 18, !1), r = (s) => `{name: ${s.name}, age: ${s.age}, child: ${s.isChild}}`, m = (s, n) => {
  s.name = n;
}, g = {
  getPerson: l,
  printPerson: r,
  changeName: m
}, h = (s) => {
  const n = document.querySelector("p#msg");
  n && (n.textContent = s);
}, u = { logInfo: h }, p = {
  person: g,
  utils: u
}, C = (s) => s("babylon.cs", p);
export {
  i as Person,
  m as changeName,
  l as getPerson,
  h as logInfo,
  g as personImports,
  r as printPerson,
  C as setupBabylonCs,
  u as utilImpoers
};
