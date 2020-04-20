
          var binft = function (r) {
      
            function t() {
      
              return b[Math.floor(Math.random() * b.length)]
      
            }
      
            function e() {
      
              return String.fromCharCode(94 * Math.random() + 33)
      
            }
      
            function n(r) {
      
              for (var n = document.createDocumentFragment(), i = 0; r > i; i++) {
      
                var l = document.createElement("span");
      
                l.textContent = e(), l.style.color = t(), n.appendChild(l)
      
              }
      
              return n
      
            }
      
            function i() {
      
              var t = o[c.skillI];
      
              c.step ? c.step-- : (c.step = g, c.prefixP < l.length ? (c.prefixP >= 0 && (c.text += l[c.prefixP]), c.prefixP++) : "forward" === c.direction ? c.skillP < t.length ? (c.text += t[c.skillP], c.skillP++) : c.delay ? c.delay-- : (c.direction = "backward", c.delay = a) : c.skillP > 0 ? (c.text = c.text.slice(0, -1), c.skillP--) : (c.skillI = (c.skillI + 1) % o.length, c.direction = "forward")), r.textContent = c.text, r.appendChild(n(c.prefixP < l.length ? Math.min(s, s + c.prefixP) : Math.min(s, t.length - c.skillP))), setTimeout(i, d)
      
            }
      
            var l = "",
      
            o = ["我想成为一个温柔的人，因为曾被温柔的人那样对待，深深了解那种被温柔相待的感觉。", "可是人不能认输，他说：“人可以毁灭，但不能屈服。”","一切都会好的，城南的花都开了。", "要大笑，要做梦，要与众不同，人生是一场伟大的冒险。","无论何人无论何时，人们总要在乌云周围寻索着浪漫的微光活下去。","常常是最后一把钥匙打开了门。","玫瑰在小王子离开时这样说，我当然爱你，没有让你感觉到，是我的不对。","草在结它的种子，风在摇它的叶子。我们站着，不说话，就十分美好。"].map(function (r) {
      
            return r + ""
      
            }),
      
            a = 2,
      
            g = 1,
      
            s = 5,
      
            d = 75,
      
            b = ["rgb(110,64,170)", "rgb(150,61,179)", "rgb(191,60,175)", "rgb(228,65,157)", "rgb(254,75,131)", "rgb(255,94,99)", "rgb(255,120,71)", "rgb(251,150,51)", "rgb(226,183,47)", "rgb(198,214,60)", "rgb(175,240,91)", "rgb(127,246,88)", "rgb(82,246,103)", "rgb(48,239,130)", "rgb(29,223,163)", "rgb(26,199,194)", "rgb(35,171,216)", "rgb(54,140,225)", "rgb(76,110,219)", "rgb(96,84,200)"],
      
            c = {
      
              text: "",
      
              prefixP: -s,
      
              skillI: 0,
      
              skillP: 0,
      
              direction: "forward",
      
              delay: a,
      
              step: g
      
            };
      
            i()
      
            };
      
            binft(document.getElementById('binft'));

