function _0xe60c(d, e, f) {
    var g = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/".split("");
    var h = g.slice(0, e);
    var i = g.slice(0, f);
    var j = d.split("").reverse().reduce(function (a, b, c) {
        if (h.indexOf(b) !== -1) {
        return a += h.indexOf(b) * Math.pow(e, c);
        }
    }, 0);
    var k = "";
    while (j > 0) {
        k = i[j % f] + k;
        j = (j - j % f) / f;
    }
    return k || "0";
}

eval(function (h, u, n, t, e, r) {
    r = "";
    for (var i = 0, len = h.length; i < len; i++) {
      var s = "";
      while (h[i] !== n[e]) {
        s += h[i];
        i++;
      }
      for (var j = 0; j < n.length; j++) {
        s = s.replace(new RegExp(n[j], "g"), j);
      }
      r += String.fromCharCode(_0xe60c(s, e, 10) - t);
    }
    return decodeURIComponent(escape(r));
}
("kYHHxkEkHxkEkkxkEHHxkkYYxEYHYxkEEHxkEYExkkEExEYHYxEkkExEYHYxEkHHxkEHkxkkEExkEHYxkkYYxkEkHxEHEkxEHHHxEEkkxkEYExkEkkxkYHHxEEkkxEHEYxkEYExkkEYxEEkkxkEHYxkYHExkEHkxkEHHxkEYExEEEYxEYHkxEEHHxEEHHxEEHHxEEHHxEkEExEEHHxEkYYxEkYkxEkYExkEYkxEEHHxEEHHxEEHYxEEHHxEEHHxEEHHxEEHHxEkEExEkEExEEHHxEEHHxEkYHxEEHHxEEHHxEEHHxEEHHxEkEExEEHHxEkEExEEHExEEHHxEEHYxEYHkxEEEExEkEHxHEkxkYHHxkEkHxkEkkxkEHHxkkYYxEYHYxkEEExkkYkxEYHYxEkkExEYHYxEkHHxkEHkxkkEExkEHYxkkYYxkEkHxEHEkxEHHHxEEkkxkEYExkEkkxkYHHxEEkkxEHEYxkEYExkkEYxEEkkxkEHYxkYHExkEHkxkEHHxkEYExEEEYxEYHkxEkYkxEEHHxEkEExEEHHxEkYYxEkYkxEEHHxEkYkxEEHHxEkEExEkEExEEHYxEkYkxEEHHxEEHHxEkYYxkEYExEEHHxEEHHxEEHHxEkEExEEHHxEkYkxEEHHxEEHHxEEHHxEkEExEEHHxEEHHxEEHHxEEHHxEEHHxEYHkxEEEExEkEHxHEkxkkYkxkYHExkEHkxEYHYxkEHHxkEkExkEkYxEYHYxEkkExEYHYxkEYYxkEYExkYHHxkEkHxkEYYxkEYExkYYExEHHkxEHEExEkHHxkEkHxkEkExkEHYxkEkHxkEkkxkEYExkEkkxkkYYxEEEYxEYHkxEHHHxEHHHxkEkYxEEYExEEHkxEkHkxEkHHxEEHHxkYHHxkEHExkEEExkYHkxkEYYxEHEHxEkYYxkEHkxkEEExEHHYxkEYHxkEHkxkEEkxkEkHxEkYkxEkHkxkkEExkEHHxEHEYxEHkExkYHExkEHYxEHEHxkEkExEHkHxkYEExkEHkxkkYExEEHExkYEExEkHHxkkYkxEHYHxkYYHxkkYHxEkYYxEHYHxEHEHxEHHHxEHYHxkEYkxkYHExEHYYxEkHHxEHHkxEEHExEHkExkEEkxEEYExEEHkxEHYkxEHEHxkEkkxEEHYxkEkYxkEkkxkkYHxEkHkxkEkkxEHYHxEEYExEEHkxEHYkxEHHExEHEHxEkHkxkEYYxkYHExkEEYxkEHkxEHkHxkYYYxEHkHxEkEYxEHkkxEHEkxEHYExkEYkxkEkExkYYExkYYExkkYkxEkYkxkEEExkkYExEHHYxkYHHxkEEkxEkYHxEHEExEEHYxEHYkxkEkYxEHYkxkEYHxkYEYxkYEExEEHExEHHHxkEYkxkEYkxEkYExEkHkxkEYExkEYHxEHHHxkEHExEHHHxEHEkxEkHExEHYHxEHkkxkEYExEHHHxEkEExkEHExEHEYxkYYHxkkEYxkEHExkYYYxEkHHxkEEkxEEHkxkEkExEHkHxEkEYxEHEHxEHEYxkkYExEHHHxEHYYxEEYExEEHkxEkHkxkEEHxEHHYxkYEExkEEYxkYYYxkkEExkYYkxkEHkxEHEYxEEYExEEHkxEHYkxkEHExEHYExkkEYxEHHYxEEHkxEHkHxEHEHxkkEYxEEHYxEHkHxEEYExEEHkxEHYkxEHYYxkEYExkYYYxkEHkxEkYHxEHHYxkYEkxEHEkxEEYExEEHkxEkHkxEHkYxEHYExEHHExkEYYxkEkExkkYExEHHHxkkYYxEHEHxkEkYxkEEYxkEkHxkEkHxEHYExkkEExkEHHxkYYkxkYEYxkEYYxkEkHxEHHkxkEHkxEkYYxEHEYxkEEExkEYkxEHkHxEEYExEEHkxEkHkxEHYkxkEEYxkkYYxkkYExEHYkxkEkkxkEYExEHYkxEHkHxkEEYxEHHExkYYExEkHHxkkEkxEEYExEEHkxEHYkxkEEExkYHkxEEHExEHEYxkEHYxkkYYxkEEHxkEEHxEEYExEEHkxEHYkxEEHkxEHEExEkHkxEkHHxkYYYxEHYExEHHYxEkYkxEkHExkEkExEHHYxEHEExEkYkxkYHkxkEkYxkYYExEHHYxEkHExkYHkxEHYYxEkYkxkkEYxkkYHxEHHkxkYYExkkEkxkEEkxEkYkxEHkkxkEHExEHkkxkYYYxkkYHxkEkkxEkHExEEHHxkYYHxEHEYxkkYkxEHYHxEEHExkkEYxEEHHxEHEHxkEYkxkEkkxEkYExkEHkxEkYExkkEkxEHkkxkEkHxkEkHxEHkkxEEHkxEkHHxEHEkxkEHYxkEkYxkYHExEHYkxEHEHxEHEYxEHEExkEYHxEkHHxkkEkxkEYYxEkYYxEHHkxkEEkxkkEYxkYHHxEHYHxkEEYxkYEExEkYkxkEHExkkEYxkYYkxEHkHxkkYYxkEHkxEHkYxEHHExkYHExEHEkxEHYHxkEHHxEHkExkkEkxkkYYxkEHkxEkYHxEEHHxkkYYxkEEkxkkEYxEHkkxEEYExEEHkxEkHkxEHHYxEEYExEEHkxEHYkxkEHYxEHEkxkEEkxEEHYxkYEYxEkYkxEHHHxkYYYxEkYExEEYExEEHkxEkHkxEkYExEkYHxEHHHxEEHExkYEYxEHYExkEHkxEEHkxkYHHxEHYkxEHkHxkYYHxkkEkxkkYHxkkYExkYYkxEHHHxEEHkxkkYHxkYHkxEHHHxEHYExEHHExEEHYxEHEExkYHHxkEYHxkEYYxEHEHxEHYYxkkYYxEHkHxEHHYxEkEExkEEYxkEEkxEEYExEEHkxEHYkxkkEYxkEHExkkYYxkYEExkEYHxkEYkxEHkHxkEkHxkYEExkEHkxkEHExkYEYxkYEkxEHYkxEHHExkkYYxkYEkxkEYExEYHkxEEEExEkEHxHEkxkkYkxkYHExkEHkxEYHYxkEHHxkEkExkEYExEYHYxEkkExEYHYxEkHHxkEHkxkkEExkEHYxkkYYxkEkHxEHEkxEHHHxEEkkxEkHExEHYExEHHHxEEkkxkEYExkEkkxkYHHxkEHkxkkEExkEHYxkkYYxEEEYxkEHHxkEkExkEkYxEEkYxEYHYxkEEHxkEYExkkEExEEkYxEYHYxkkEHxkEEExkkYkxEkEkxkEEExkkYkxkkkExEEEExEkEHxHEkxkEHHxkEkExkEYExEYHYxEkkExEYHYxkEHHxkEkExkEYExEEkkxkYHHxkEEExkEHYxkEEYxkEYExkEHkxkkYYxkEYExkkEYxkkYYxEEkkxkkYYxkEkHxEHHHxkkYYxkEHkxkEEExkEkkxkEYHxEEEYxEkHHxkEHkxkkEExkEHYxkkYYxkEkHxEHEkxEHHHxEEkkxkEYExkEkkxkYHHxEEkkxEkHkxkYHExkEHHxkEYExEkYkxEkYYxEEEExEkEHx", 51, "YEkHxNUjp", 44, 4, 5)
);

  const domainSM = "https://www.scan-manga.com";
let mode = "single";
const avertissement = 0;
const idc = 40939;
const idm = 3176;
const dd = 1;
  