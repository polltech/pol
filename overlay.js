google.maps.__gjsload__('overlay', function(_) {
    var nBa = function() {}
      , $D = function(a) {
        a.eB = a.eB || new nBa;
        return a.eB
    }
      , oBa = function(a) {
        this.Eg = new _.qm( () => {
            const b = a.eB;
            if (a.getPanes()) {
                if (a.getProjection()) {
                    if (!b.Gg && a.onAdd)
                        a.onAdd();
                    b.Gg = !0;
                    a.draw()
                }
            } else {
                if (b.Gg)
                    if (a.onRemove)
                        a.onRemove();
                    else
                        a.remove();
                b.Gg = !1
            }
        }
        ,0)
    }
      , qBa = function(a, b) {
        const c = $D(a);
        let d = c.Fg;
        d || (d = c.Fg = new oBa(a));
        _.vb(c.Eg || [], _.Rj);
        var e = c.Ig = c.Ig || new _.lta;
        const f = b.__gm;
        e.bindTo("zoom", f);
        e.bindTo("offset", f);
        e.bindTo("center", f, "projectionCenterQ");
        e.bindTo("projection", b);
        e.bindTo("projectionTopLeft", f);
        e = c.Kg = c.Kg || new pBa(e);
        e.bindTo("zoom", f);
        e.bindTo("offset", f);
        e.bindTo("projection", b);
        e.bindTo("projectionTopLeft", f);
        a.bindTo("projection", e, "outProjection");
        a.bindTo("panes", f);
        e = () => _.rm(d.Eg);
        c.Eg = [_.Pj(a, "panes_changed", e), _.Pj(f, "zoom_changed", e), _.Pj(f, "offset_changed", e), _.Pj(b, "projection_changed", e), _.Pj(f, "projectioncenterq_changed", e)];
        _.rm(d.Eg);
        b instanceof _.wk ? (_.Mk(b, "Ox"),
        _.Q(b, 148440)) : b instanceof _.dl && (_.Mk(b, "Oxs"),
        _.Q(b, 181451))
    }
      , rBa = function(a) {
        const b = $D(a);
        var c = b.Ig;
        c && c.unbindAll();
        (c = b.Kg) && c.unbindAll();
        a.unbindAll();
        a.set("panes", null);
        a.set("projection", null);
        b.Eg && b.Eg.forEach(d => {
            _.Rj(d)
        }
        );
        b.Eg = null;
        b.Fg && (_.sm(b.Fg.Eg),
        b.Fg = null)
    }
      , wBa = function(a) {
        if (a) {
            var b = a.getMap();
            if (sBa(a) !== b && b && b instanceof _.wk) {
                const c = b.__gm;
                c.overlayLayer ? a.__gmop = new tBa(b,a,c.overlayLayer) : c.Fg.then( ({Zg: d}) => {
                    const e = new uBa(b,d);
                    d.Li(e);
                    c.overlayLayer = e;
                    vBa(a);
                    wBa(a)
                }
                )
            }
        }
    }
      , vBa = function(a) {
        if (a) {
            var b = a.__gmop;
            b && (a.__gmop = null,
            b.overlay.unbindAll(),
            b.overlay.set("panes", null),
            b.overlay.set("projection", null),
            b.overlayLayer.Un(b),
            b.Eg && (b.Eg = !1,
            b.overlay.onRemove ? b.overlay.onRemove() : b.overlay.remove()))
        }
    }
      , sBa = function(a) {
        return (a = a.__gmop) ? a.map : null
    }
      , xBa = function(a, b) {
        a.overlay.get("projection") !== b && (a.overlay.bindTo("panes", a.map.__gm),
        a.overlay.set("projection", b))
    }
      , pBa = class extends _.ek {
        constructor(a) {
            super();
            this.projection = a
        }
        changed(a) {
            a !== "outProjection" && (a = !!(this.get("offset") && this.get("projectionTopLeft") && this.get("projection") && _.Vi(this.get("zoom"))),
            a === !this.get("outProjection") && this.set("outProjection", a ? this.projection : null))
        }
    }
    ;
    _.va(oBa, _.ek);
    var tBa = class {
        constructor(a, b, c) {
            this.map = a;
            this.overlay = b;
            this.overlayLayer = c;
            this.Eg = !1;
            _.Mk(this.map, "Ox");
            _.Q(this.map, 148440);
            c.uo(this)
        }
        draw() {
            this.Eg || (this.Eg = !0,
            this.overlay.onAdd && this.overlay.onAdd());
            this.overlay.draw && this.overlay.draw()
        }
    }
      , uBa = class {
        constructor(a, b) {
            this.map = a;
            this.Zg = b;
            this.Eg = null;
            this.Fg = []
        }
        dispose() {}
        Nh(a, b, c, d, e, f, g, h) {
            const l = this.Eg = this.Eg || new _.Gz(this.map,this.Zg, () => {}
            );
            l.Nh(a, b, c, d, e, f, g, h);
            for (const n of this.Fg)
                xBa(n, l),
                n.draw()
        }
        uo(a) {
            this.Fg.push(a);
            this.Eg && xBa(a, this.Eg);
            this.Zg.refresh()
        }
        Un(a) {
            _.Cb(this.Fg, a)
        }
    }
    ;
    _.Fi("overlay", {
        VC: function(a) {
            if (a) {
                rBa(a);
                delete $D(a).Jg;
                vBa(a);
                var b = a.getMap();
                b && (b instanceof _.wk ? wBa(a) : a && (b = a.getMap(),
                ($D(a).Jg || null) !== b && (b && qBa(a, b),
                $D(a).Jg = b)))
            }
        },
        preventMapHitsFrom: a => {
            _.Ov(a, {
                Sl: ({event: b}) => {
                    _.Rt(b.Eg)
                }
                ,
                tk: b => _.yv(b),
                Iq: b => _.zv(b),
                tl: b => _.zv(b),
                Hk: b => _.Av(b)
            }).Sq(!0)
        }
        ,
        preventMapHitsAndGesturesFrom: a => {
            a.addEventListener("click", _.Nj);
            a.addEventListener("contextmenu", _.Nj);
            a.addEventListener("dblclick", _.Nj);
            a.addEventListener("mousedown", _.Nj);
            a.addEventListener("mousemove", _.Nj);
            a.addEventListener("MSPointerDown", _.Nj);
            a.addEventListener("pointerdown", _.Nj);
            a.addEventListener("touchstart", _.Nj);
            a.addEventListener("wheel", _.Nj)
        }
    });
});
