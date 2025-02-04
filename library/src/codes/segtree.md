---
title: Segment tree Classic 
author: JorgeSlime
---
```cpp
struct Segtree {
    int n;
    vector<int> st;
    Segtree(int n) : n(n), st(4*n) {}
    void build(vector<int>& a, int v, int tl, int tr) {
        if (tl == tr) st[v] = a[tl];
        else {
            int tm = (tl + tr) / 2;
            build(a, v*2, tl, tm);
            build(a, v*2+1, tm+1, tr);
            st[v] = st[v*2] + st[v*2+1];
        }
    }
    void update(int v, int tl, int tr, int pos, int val) {
        if (tl == tr) st[v] = val;
        else {
            int tm = (tl + tr) / 2;
            if (pos <= tm) update(v*2, tl, tm, pos, val);
            else update(v*2+1, tm+1, tr, pos, val);
            st[v] = st[v*2] + st[v*2+1];
        }
    }
    int query(int v, int tl, int tr, int l, int r) {
        if (l > r) return 0;
        if (l == tl && r == tr) return st[v];
        int tm = (tl + tr) / 2;
        return query(v*2, tl, tm, l, min(r, tm)) + query(v*2+1, tm+1, tr, max(l, tm+1), r);
    }
};
```
