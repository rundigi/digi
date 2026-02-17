module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Documents/d/digi/landing/packages/ui/src/terminal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CodeBlock",
    ()=>CodeBlock,
    "InlineCode",
    ()=>InlineCode,
    "TerminalWindow",
    ()=>TerminalWindow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/d/digi/landing/node_modules/.bun/next@15.5.12+bf16f8eded5e12ee/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/d/digi/landing/node_modules/.bun/next@15.5.12+bf16f8eded5e12ee/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
// ─────────────────────────────────────────────────────────────────────────────
// Design tokens — exact hex values from the digi landing page
// ─────────────────────────────────────────────────────────────────────────────
const C = {
    // Backgrounds — matched to screenshot
    bgCode: "#1e1f24",
    bgChrome: "#27282e",
    bgSurface2: "#18181b",
    bgRowHover: "rgba(255,255,255,0.03)",
    // Borders — softer, matches rounded card in screenshot
    border: "rgba(255,255,255,0.10)",
    borderChrome: "rgba(255,255,255,0.08)",
    // Brand
    blue: "#3A7DFF",
    blueDim: "rgba(58,125,255,0.65)",
    // Syntax tokens (matches landing page code-body colours)
    keyword: "#a78bfa",
    string: "#22c55e",
    number: "#f59e0b",
    fn: "#60a5fa",
    comment: "#3f3f46",
    plain: "#a1a1aa",
    // Terminal line semantic colours
    tCmd: "#3A7DFF",
    tSuccess: "#22c55e",
    tError: "#ef4444",
    tWarning: "#f59e0b",
    tInfo: "#a1a1aa",
    tDim: "#5A5D67",
    tOutput: "#f4f4f6",
    // Misc
    slate: "#5A5D67",
    zinc400: "#a1a1aa",
    zinc700: "#3f3f46",
    white: "#f4f4f6",
    // Copy button
    copyDefault: "rgba(255,255,255,0.04)",
    copyHover: "rgba(255,255,255,0.08)",
    copySuccess: "rgba(34,197,94,0.10)"
};
// Inject blink + row-hover keyframes once into <head>
const STYLE_ID = "digi-global-styles";
if (typeof document !== "undefined" && !document.getElementById(STYLE_ID)) {
    const s = document.createElement("style");
    s.id = STYLE_ID;
    s.textContent = `
    @keyframes digi-blink { 0%,100%{opacity:1} 50%{opacity:0} }
    .digi-cursor { animation: digi-blink 1s step-end infinite; }
    .digi-row:hover td { background: ${C.bgRowHover}; }
    .digi-copy-btn:hover { background: ${C.copyHover} !important; color: ${C.white} !important; }
  `;
    document.head.appendChild(s);
}
// ─────────────────────────────────────────────────────────────────────────────
// Internal maps
// ─────────────────────────────────────────────────────────────────────────────
const TOKEN_COLOR = {
    keyword: C.keyword,
    string: C.string,
    number: C.number,
    function: C.fn,
    comment: C.comment,
    blue: C.blue,
    plain: C.plain
};
const LINE_COLOR = {
    command: C.tCmd,
    success: C.tSuccess,
    error: C.tError,
    warning: C.tWarning,
    info: C.tInfo,
    dim: C.tDim,
    output: C.tOutput
};
const LINE_PREFIX = {
    command: "$",
    success: "✓",
    error: "✗",
    warning: "⚠"
};
// ─────────────────────────────────────────────────────────────────────────────
// Shared sub-components
// ─────────────────────────────────────────────────────────────────────────────
function Cursor() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "aria-hidden": true,
        className: "digi-cursor",
        style: {
            display: "inline-block",
            width: 7,
            height: 13,
            background: C.blue,
            borderRadius: 1,
            verticalAlign: "middle",
            marginLeft: 2
        }
    }, void 0, false, {
        fileName: "[project]/Documents/d/digi/landing/packages/ui/src/terminal.tsx",
        lineNumber: 128,
        columnNumber: 5
    }, this);
}
function TrafficLights() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            display: "flex",
            alignItems: "center",
            gap: 6
        },
        children: [
            "#ef4444",
            "#f59e0b",
            "#22c55e"
        ].map((bg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: bg,
                    display: "block"
                }
            }, bg, false, {
                fileName: "[project]/Documents/d/digi/landing/packages/ui/src/terminal.tsx",
                lineNumber: 148,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/Documents/d/digi/landing/packages/ui/src/terminal.tsx",
        lineNumber: 146,
        columnNumber: 5
    }, this);
}
function FileIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "13",
        height: "13",
        viewBox: "0 0 13 13",
        fill: "none",
        style: {
            flexShrink: 0,
            color: C.slate
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 1h6l3 3v8a1 1 0 01-1 1H2a1 1 0 01-1-1V2a1 1 0 011-1z",
                stroke: "currentColor",
                strokeWidth: "1.1",
                fill: "none"
            }, void 0, false, {
                fileName: "[project]/Documents/d/digi/landing/packages/ui/src/terminal.tsx",
                lineNumber: 172,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 1v3h3",
                stroke: "currentColor",
                strokeWidth: "1.1",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/Documents/d/digi/landing/packages/ui/src/terminal.tsx",
                lineNumber: 178,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/d/digi/landing/packages/ui/src/terminal.tsx",
        lineNumber: 165,
        columnNumber: 5
    }, this);
}
function CopyButton({ text }) {
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleCopy = async ()=>{
        try {
            await navigator.clipboard.writeText(text);
        } catch  {
        /* ignore */ }
        setCopied(true);
        setTimeout(()=>setCopied(false), 2000);
    };
    const base = {
        display: "flex",
        alignItems: "center",
        gap: 5,
        padding: "3px 10px",
        borderRadius: 6,
        fontSize: 11,
        fontWeight: 500,
        fontFamily: "inherit",
        border: `1px solid ${C.border}`,
        cursor: "pointer",
        transition: "all 0.18s ease",
        letterSpacing: "0.01em"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: handleCopy,
        "aria-label": "Copy code",
        className: "digi-copy-btn",
        style: copied ? {
            ...base,
            background: C.copySuccess,
            color: C.string,
            borderColor: "rgba(34,197,94,0.25)"
        } : {
            ...base,
            background: C.copyDefault,
            color: C.slate
        },
        children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "11",
                    height: "11",
                    viewBox: "0 0 11 11",
                    fill: "none",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M1.5 5.5l3 3 5-5",
                        stroke: "currentColor",
                        strokeWidth: "1.4",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/Documents/d/digi/landing/packages/ui/src/terminal.tsx",
                        lineNumber: 235,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/d/digi/landing/packages/ui/src/terminal.tsx",
                    lineNumber: 234,
                    columnNumber: 11
                }, this),
                "Copied"
            ]
        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "11",
                    height: "11",
                    viewBox: "0 0 12 12",
                    fill: "none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "4",
                            y: "4",
                            width: "7",
                            height: "7",
                            rx: "1.5",
                            stroke: "currentColor",
                            strokeWidth: "1.2"
                        }, void 0, false, {
                            fileName: "[project]/Documents/d/digi/landing/packages/ui/src/terminal.tsx",
                            lineNumber: 248,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M3 8H2a1 1 0 01-1-1V2a1 1 0 011-1h5a1 1 0 011 1v1",
                            stroke: "currentColor",
                            strokeWidth: "1.2",
                            strokeLinecap: "round"
                        }, void 0, false, {
                            fileName: "[project]/Documents/d/digi/landing/packages/ui/src/terminal.tsx",
                            lineNumber: 257,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/d/digi/landing/packages/ui/src/terminal.tsx",
                    lineNumber: 247,
                    columnNumber: 11
                }, this),
                "Copy"
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/Documents/d/digi/landing/packages/ui/src/terminal.tsx",
        lineNumber: 217,
        columnNumber: 5
    }, this);
}
function TerminalWindow({ lines, animated = false, lineDelay = 340, showCursor = true, title, style, className = "" }) {
    const [visibleCount, setVisibleCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(animated ? 0 : lines.length);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!animated) {
            setVisibleCount(lines.length);
            return;
        }
        setVisibleCount(0);
        let i = 0;
        const tick = ()=>{
            i++;
            setVisibleCount(i);
            if (i < lines.length) setTimeout(tick, lineDelay);
        };
        const timer = setTimeout(tick, 350);
        return ()=>clearTimeout(timer);
    }, [
        animated,
        lines,
        lineDelay
    ]);
    const visible = lines.slice(0, visibleCount);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: className,
        style: {
            borderRadius: 14,
            overflow: "hidden",
            border: `1px solid ${C.border}`,
            background: C.bgCode,
            boxShadow: "0 8px 40px rgba(0,0,0,0.35)",
            fontFamily: "'DM Mono', 'JetBrains Mono', 'Fira Code', monospace",
            fontSize: 14,
            ...style
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "14px 20px",
                    background: C.bgChrome,
                    borderBottom: `1px solid ${C.borderChrome}`
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TrafficLights, {}, void 0, false, {
                        fileName: "[project]/Documents/d/digi/landing/packages/ui/src/terminal.tsx",
                        lineNumber: 344,
                        columnNumber: 9
                    }, this),
                    title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: C.slate,
                            fontSize: 11,
                            letterSpacing: "0.04em"
                        },
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/Documents/d/digi/landing/packages/ui/src/terminal.tsx",
                        lineNumber: 346,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            width: 52
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/d/digi/landing/packages/ui/src/terminal.tsx",
                        lineNumber: 352,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/d/digi/landing/packages/ui/src/terminal.tsx",
                lineNumber: 334,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: "20px 28px",
                    lineHeight: 2.0
                },
                children: [
                    visible.map((line, i)=>{
                        const isLast = i === visible.length - 1;
                        const prefix = LINE_PREFIX[line.type];
                        const prefixColor = line.type === "command" ? C.slate : LINE_COLOR[line.type];
                        // Success lines show bold weight (matches screenshot "Project created", "postgres", etc.)
                        const fontWeight = line.type === "success" ? 700 : 400;
                        // For success lines, split "bold part — dim part" on em-dash for mixed styling
                        const emDashIdx = line.type === "success" ? line.text.indexOf(" — ") : -1;
                        const boldPart = emDashIdx > -1 ? line.text.slice(0, emDashIdx) : line.text;
                        const dimPart = emDashIdx > -1 ? line.text.slice(emDashIdx) : null;
                        // For command lines, highlight the first word (the binary) in blue
                        let cmdContent = line.text;
                        if (line.type === "command") {
                            const spaceIdx = line.text.indexOf(" ");
                            if (spaceIdx > -1) {
                                const bin = line.text.slice(0, spaceIdx);
                                const rest = line.text.slice(spaceIdx);
                                cmdContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: C.blue
                                            },
                                            children: bin
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/d/digi/landing/packages/ui/src/terminal.tsx",
                                            lineNumber: 381,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: C.tOutput
                                            },
                                            children: rest
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/d/digi/landing/packages/ui/src/terminal.tsx",
                                            lineNumber: 382,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true);
                            } else {
                                cmdContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: C.blue
                                    },
                                    children: line.text
                                }, void 0, false, {
                                    fileName: "[project]/Documents/d/digi/landing/packages/ui/src/terminal.tsx",
                                    lineNumber: 386,
                                    columnNumber: 28
                                }, this);
                            }
                        }
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: "flex",
                                alignItems: "baseline",
                                gap: 8,
                                minHeight: "2em"
                            },
                            children: [
                                prefix && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: prefixColor,
                                        userSelect: line.type === "command" ? "none" : "auto",
                                        flexShrink: 0
                                    },
                                    children: prefix
                                }, void 0, false, {
                                    fileName: "[project]/Documents/d/digi/landing/packages/ui/src/terminal.tsx",
                                    lineNumber: 401,
                                    columnNumber: 17
                                }, this),
                                line.type === "command" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: cmdContent
                                }, void 0, false, {
                                    fileName: "[project]/Documents/d/digi/landing/packages/ui/src/terminal.tsx",
                                    lineNumber: 412,
                                    columnNumber: 17
                                }, this) : dimPart ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: LINE_COLOR[line.type],
                                                fontWeight
                                            },
                                            children: boldPart
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/d/digi/landing/packages/ui/src/terminal.tsx",
                                            lineNumber: 415,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                color: C.tDim,
                                                fontWeight: 400
                                            },
                                            children: dimPart
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/d/digi/landing/packages/ui/src/terminal.tsx",
                                            lineNumber: 418,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/d/digi/landing/packages/ui/src/terminal.tsx",
                                    lineNumber: 414,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: LINE_COLOR[line.type],
                                        fontWeight
                                    },
                                    children: line.text
                                }, void 0, false, {
                                    fileName: "[project]/Documents/d/digi/landing/packages/ui/src/terminal.tsx",
                                    lineNumber: 423,
                                    columnNumber: 17
                                }, this),
                                isLast && showCursor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Cursor, {}, void 0, false, {
                                    fileName: "[project]/Documents/d/digi/landing/packages/ui/src/terminal.tsx",
                                    lineNumber: 427,
                                    columnNumber: 40
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/Documents/d/digi/landing/packages/ui/src/terminal.tsx",
                            lineNumber: 391,
                            columnNumber: 13
                        }, this);
                    }),
                    animated && visibleCount < lines.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "baseline",
                            minHeight: "2em"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Cursor, {}, void 0, false, {
                            fileName: "[project]/Documents/d/digi/landing/packages/ui/src/terminal.tsx",
                            lineNumber: 440,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/d/digi/landing/packages/ui/src/terminal.tsx",
                        lineNumber: 433,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/d/digi/landing/packages/ui/src/terminal.tsx",
                lineNumber: 356,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/d/digi/landing/packages/ui/src/terminal.tsx",
        lineNumber: 320,
        columnNumber: 5
    }, this);
}
function CodeBlock({ filename, language, lines, lineNumbers = false, copyable = true, rawCode, style, className = "" }) {
    const plainText = rawCode ?? lines.map((l)=>l.map((t)=>t.text).join("")).join("\n");
    const hasHeader = filename ?? language ?? copyable;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: className,
        style: {
            borderRadius: 12,
            overflow: "hidden",
            border: `1px solid ${C.border}`,
            background: C.bgCode,
            boxShadow: "0 24px 80px rgba(0,0,0,0.45)",
            fontFamily: "'DM Mono', 'JetBrains Mono', 'Fira Code', monospace",
            fontSize: 13,
            ...style
        },
        children: [
            hasHeader && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "9px 16px",
                    background: C.bgChrome,
                    borderBottom: `1px solid ${C.borderChrome}`,
                    gap: 12
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            minWidth: 0,
                            flex: 1
                        },
                        children: [
                            filename && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FileIcon, {}, void 0, false, {
                                fileName: "[project]/Documents/d/digi/landing/packages/ui/src/terminal.tsx",
                                lineNumber: 519,
                                columnNumber: 26
                            }, this),
                            filename && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: C.zinc400,
                                    fontSize: 12,
                                    letterSpacing: "0.02em",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap"
                                },
                                children: filename
                            }, void 0, false, {
                                fileName: "[project]/Documents/d/digi/landing/packages/ui/src/terminal.tsx",
                                lineNumber: 521,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/d/digi/landing/packages/ui/src/terminal.tsx",
                        lineNumber: 510,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: 10,
                            flexShrink: 0
                        },
                        children: [
                            language && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: C.blueDim,
                                    fontSize: 10,
                                    fontWeight: 500,
                                    letterSpacing: "0.1em",
                                    textTransform: "uppercase"
                                },
                                children: language
                            }, void 0, false, {
                                fileName: "[project]/Documents/d/digi/landing/packages/ui/src/terminal.tsx",
                                lineNumber: 544,
                                columnNumber: 15
                            }, this),
                            copyable && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CopyButton, {
                                text: plainText
                            }, void 0, false, {
                                fileName: "[project]/Documents/d/digi/landing/packages/ui/src/terminal.tsx",
                                lineNumber: 556,
                                columnNumber: 26
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/d/digi/landing/packages/ui/src/terminal.tsx",
                        lineNumber: 535,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/d/digi/landing/packages/ui/src/terminal.tsx",
                lineNumber: 499,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    overflowX: "auto"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    style: {
                        width: "100%",
                        borderCollapse: "collapse"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        children: lines.map((line, li)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "digi-row",
                                children: [
                                    lineNumbers && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        style: {
                                            userSelect: "none",
                                            textAlign: "right",
                                            padding: "0 18px 0 20px",
                                            lineHeight: 1.9,
                                            color: C.zinc700,
                                            fontSize: 12,
                                            width: 44,
                                            verticalAlign: "top",
                                            transition: "background 0.12s"
                                        },
                                        children: li + 1
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/d/digi/landing/packages/ui/src/terminal.tsx",
                                        lineNumber: 568,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        style: {
                                            padding: `0 24px 0 ${lineNumbers ? 0 : 20}px`,
                                            lineHeight: 1.9,
                                            verticalAlign: "top",
                                            transition: "background 0.12s"
                                        },
                                        children: line.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: " "
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/d/digi/landing/packages/ui/src/terminal.tsx",
                                            lineNumber: 593,
                                            columnNumber: 21
                                        }, this) : line.map((tok, ti)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: TOKEN_COLOR[tok.kind]
                                                },
                                                children: tok.text
                                            }, ti, false, {
                                                fileName: "[project]/Documents/d/digi/landing/packages/ui/src/terminal.tsx",
                                                lineNumber: 596,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/d/digi/landing/packages/ui/src/terminal.tsx",
                                        lineNumber: 584,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, li, true, {
                                fileName: "[project]/Documents/d/digi/landing/packages/ui/src/terminal.tsx",
                                lineNumber: 566,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/d/digi/landing/packages/ui/src/terminal.tsx",
                        lineNumber: 564,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/d/digi/landing/packages/ui/src/terminal.tsx",
                    lineNumber: 563,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/d/digi/landing/packages/ui/src/terminal.tsx",
                lineNumber: 562,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/d/digi/landing/packages/ui/src/terminal.tsx",
        lineNumber: 484,
        columnNumber: 5
    }, this);
}
function InlineCode({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
        style: {
            fontFamily: "'DM Mono', 'JetBrains Mono', monospace",
            fontSize: "0.85em",
            color: "#93b4ff",
            background: "rgba(58,125,255,0.10)",
            border: "1px solid rgba(58,125,255,0.20)",
            padding: "1px 6px",
            borderRadius: 5
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/d/digi/landing/packages/ui/src/terminal.tsx",
        lineNumber: 617,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/d/digi/landing/packages/ui/src/buttons.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BtnGhost",
    ()=>BtnGhost,
    "BtnOutline",
    ()=>BtnOutline,
    "BtnPrimary",
    ()=>BtnPrimary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/d/digi/landing/node_modules/.bun/next@15.5.12+bf16f8eded5e12ee/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/d/digi/landing/node_modules/.bun/next@15.5.12+bf16f8eded5e12ee/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const T = {
    blue: "#3A7DFF",
    blueDark: "#2e6de0",
    blueGlow: "rgba(58,125,255,0.30)",
    blueGlowLg: "rgba(58,125,255,0.40)",
    white: "#F4F4F6",
    whiteDim: "rgba(244,244,246,0.55)",
    whiteSubtle: "rgba(244,244,246,0.08)"
};
function BtnPrimary({ children, large = false, style: sx = {}, onClick, type = "button", disabled = false }) {
    const [hov, setHov] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const base = {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        background: disabled ? "#555" : hov ? T.blueDark : T.blue,
        color: "#fff",
        border: "none",
        cursor: disabled ? "not-allowed" : "pointer",
        fontFamily: "'DM Sans', sans-serif",
        fontSize: large ? "0.95rem" : "0.875rem",
        fontWeight: 500,
        padding: large ? "0.75rem 1.75rem" : "0.45rem 1rem",
        borderRadius: large ? 8 : 6,
        textDecoration: "none",
        transition: "all 0.2s",
        boxShadow: large && !disabled ? hov ? `0 4px 40px ${T.blueGlowLg}` : `0 0 30px ${T.blueGlow}` : "none",
        transform: disabled ? "none" : hov && large ? "translateY(-2px)" : hov ? "translateY(-1px)" : "none",
        letterSpacing: "0.01em",
        whiteSpace: "nowrap",
        opacity: disabled ? 0.5 : 1,
        ...sx
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: type,
        disabled: disabled,
        style: base,
        onMouseEnter: ()=>!disabled && setHov(true),
        onMouseLeave: ()=>setHov(false),
        onClick: onClick,
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/d/digi/landing/packages/ui/src/buttons.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
function BtnOutline({ children, large = false, block = false, style: sx = {} }) {
    const [hov, setHov] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const base = {
        display: block ? "flex" : "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        background: hov ? "rgba(255,255,255,0.10)" : T.whiteSubtle,
        color: hov ? T.white : T.whiteDim,
        border: `1px solid ${hov ? "rgba(255,255,255,0.20)" : "rgba(255,255,255,0.10)"}`,
        cursor: "pointer",
        fontFamily: "'DM Sans', sans-serif",
        fontSize: large ? "0.95rem" : "0.875rem",
        padding: large ? "0.75rem 1.75rem" : "0.45rem 1rem",
        borderRadius: large ? 8 : 6,
        textDecoration: "none",
        transition: "all 0.2s",
        whiteSpace: "nowrap",
        width: block ? "100%" : undefined,
        ...sx
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: "#",
        style: base,
        onMouseEnter: ()=>setHov(true),
        onMouseLeave: ()=>setHov(false),
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/d/digi/landing/packages/ui/src/buttons.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
function BtnGhost({ children }) {
    const [hov, setHov] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: "#",
        style: {
            background: hov ? T.whiteSubtle : "none",
            border: "none",
            cursor: "pointer",
            color: hov ? T.white : T.whiteDim,
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.875rem",
            padding: "0.4rem 0.75rem",
            borderRadius: 6,
            transition: "all 0.2s",
            textDecoration: "none",
            display: "inline-block"
        },
        onMouseEnter: ()=>setHov(true),
        onMouseLeave: ()=>setHov(false),
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/d/digi/landing/packages/ui/src/buttons.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/d/digi/landing/packages/ui/src/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$packages$2f$ui$2f$src$2f$terminal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/d/digi/landing/packages/ui/src/terminal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$packages$2f$ui$2f$src$2f$buttons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/d/digi/landing/packages/ui/src/buttons.tsx [app-ssr] (ecmascript)");
;
;
}),
"[project]/Documents/d/digi/landing/apps/web/src/components/navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/d/digi/landing/node_modules/.bun/next@15.5.12+bf16f8eded5e12ee/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/d/digi/landing/node_modules/.bun/next@15.5.12+bf16f8eded5e12ee/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$packages$2f$ui$2f$src$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/d/digi/landing/packages/ui/src/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$packages$2f$ui$2f$src$2f$buttons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/d/digi/landing/packages/ui/src/buttons.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function Navbar() {
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fn = ()=>setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", fn);
        return ()=>window.removeEventListener("scroll", fn);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        style: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 100,
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            alignItems: "center",
            padding: "0 2rem",
            height: 60,
            background: scrolled ? "rgba(28,28,33,0.85)" : "rgba(30,30,35,0.72)",
            backdropFilter: "blur(14px)",
            borderBottom: `1px solid rgba(255,255,255,${scrolled ? "0.08" : "0.06"})`,
            transition: "background 0.3s, border-color 0.3s"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "#",
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    textDecoration: "none"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/no_background/digi_icon_mark-transparent.png",
                        alt: "Digi",
                        style: {
                            width: 28,
                            height: 28
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/d/digi/landing/apps/web/src/components/navbar.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "1.25rem",
                            fontWeight: 600,
                            color: "#F4F4F6",
                            letterSpacing: "-0.01em"
                        },
                        children: "digi"
                    }, void 0, false, {
                        fileName: "[project]/Documents/d/digi/landing/apps/web/src/components/navbar.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/d/digi/landing/apps/web/src/components/navbar.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "2rem",
                    listStyle: "none"
                },
                className: "hidden md:flex",
                children: [
                    [
                        "#features",
                        "Features"
                    ],
                    [
                        "#deploy",
                        "Deploy"
                    ],
                    [
                        "#pricing",
                        "Pricing"
                    ],
                    [
                        "#",
                        "Docs"
                    ]
                ].map(([href, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: href,
                            style: {
                                color: "rgba(244,244,246,0.55)",
                                textDecoration: "none",
                                fontSize: "0.875rem",
                                transition: "color 0.2s"
                            },
                            onMouseEnter: (e)=>e.currentTarget.style.color = "#F4F4F6",
                            onMouseLeave: (e)=>e.currentTarget.style.color = "rgba(244,244,246,0.55)",
                            children: label
                        }, void 0, false, {
                            fileName: "[project]/Documents/d/digi/landing/apps/web/src/components/navbar.tsx",
                            lineNumber: 48,
                            columnNumber: 13
                        }, this)
                    }, label, false, {
                        fileName: "[project]/Documents/d/digi/landing/apps/web/src/components/navbar.tsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Documents/d/digi/landing/apps/web/src/components/navbar.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    justifySelf: "end"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$packages$2f$ui$2f$src$2f$buttons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BtnGhost"], {
                        children: "Sign in"
                    }, void 0, false, {
                        fileName: "[project]/Documents/d/digi/landing/apps/web/src/components/navbar.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$packages$2f$ui$2f$src$2f$buttons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BtnPrimary"], {
                        children: "Get started →"
                    }, void 0, false, {
                        fileName: "[project]/Documents/d/digi/landing/apps/web/src/components/navbar.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/d/digi/landing/apps/web/src/components/navbar.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/d/digi/landing/apps/web/src/components/navbar.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__727fd3db._.js.map