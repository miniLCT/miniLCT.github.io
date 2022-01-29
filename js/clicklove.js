
var a_idx = 0;
 
        $("body").click(function(e) {
            var a = new Array(
                "Talk is cheap", "Show me code", "自強不息", "厚德載物",
                "愛國", "進步", "民主", "科學",
                "求是創新", "飲水思源", "愛國榮校", "博學而篤志","切問而近思"
                );
            var $i = $("<span/>").text(a[a_idx]);
            a_idx = (a_idx + 1) % a.length;
            var x = e.pageX,
            y = e.pageY;
            $i.css({
                "z-index": 144469,
                "top": y - 20,
                "left": x,
                "position": "absolute",
                "font-weight": "bold",
                "color": 'rgba('+ Math.floor(Math.random()*255) +','+ Math.floor(Math.random()*255) +','+ Math.floor(Math.random()*255) +',0.8)'
            });
            $("body").append($i);
            $i.animate({
                "top": y - 180,
                "opacity": 0
            },
            1500,
            function() {
                $i.remove()
            })
        });