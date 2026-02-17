module.exports = [
"[project]/Documents/d/digi/landing/apps/web/src/components/waitlist-form.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WaitlistForm",
    ()=>WaitlistForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/d/digi/landing/node_modules/.bun/next@15.5.12+bf16f8eded5e12ee/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/d/digi/landing/node_modules/.bun/next@15.5.12+bf16f8eded5e12ee/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$packages$2f$ui$2f$src$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/d/digi/landing/packages/ui/src/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$packages$2f$ui$2f$src$2f$buttons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/d/digi/landing/packages/ui/src/buttons.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function WaitlistForm({ className = "" }) {
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setStatus("loading");
        setMessage("");
        try {
            const res = await fetch("/api/waitlist", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email
                })
            });
            const data = await res.json();
            if (res.ok) {
                setStatus("success");
                setMessage(data.message ?? "Thanks for joining!");
                setEmail("");
            } else {
                setStatus("error");
                setMessage(data.message ?? "Something went wrong");
            }
        } catch  {
            setStatus("error");
            setMessage("Failed to join waitlist");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    gap: "0.75rem",
                    flexWrap: "wrap",
                    justifyContent: "center"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "email",
                        value: email,
                        onChange: (e)=>setEmail(e.target.value),
                        placeholder: "your@email.com",
                        style: {
                            flex: "1 1 280px",
                            padding: "0.75rem 1.25rem",
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.10)",
                            borderRadius: 8,
                            color: "#F4F4F6",
                            fontSize: "0.95rem",
                            fontFamily: "'DM Sans', sans-serif",
                            outline: "none",
                            transition: "all 0.2s"
                        },
                        onFocus: (e)=>{
                            e.currentTarget.style.borderColor = "#3A7DFF";
                            e.currentTarget.style.boxShadow = "0 0 0 1px #3A7DFF";
                        },
                        onBlur: (e)=>{
                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)";
                            e.currentTarget.style.boxShadow = "none";
                        },
                        required: true,
                        disabled: status === "loading" || status === "success"
                    }, void 0, false, {
                        fileName: "[project]/Documents/d/digi/landing/apps/web/src/components/waitlist-form.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$packages$2f$ui$2f$src$2f$buttons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BtnPrimary"], {
                        large: true,
                        type: "submit",
                        disabled: status === "loading" || status === "success",
                        children: [
                            status === "loading" && "Joining...",
                            status === "success" && "Joined! ✓",
                            status !== "loading" && status !== "success" && "Join Waitlist"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/d/digi/landing/apps/web/src/components/waitlist-form.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/d/digi/landing/apps/web/src/components/waitlist-form.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    marginTop: "1rem",
                    fontSize: "0.875rem",
                    color: status === "error" ? "#ef4444" : "#22c55e",
                    textAlign: "center"
                },
                children: message
            }, void 0, false, {
                fileName: "[project]/Documents/d/digi/landing/apps/web/src/components/waitlist-form.tsx",
                lineNumber: 81,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/d/digi/landing/apps/web/src/components/waitlist-form.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/d/digi/landing/apps/web/src/components/hero-section.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroSection",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/d/digi/landing/node_modules/.bun/next@15.5.12+bf16f8eded5e12ee/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$packages$2f$ui$2f$src$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/d/digi/landing/packages/ui/src/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$packages$2f$ui$2f$src$2f$terminal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/d/digi/landing/packages/ui/src/terminal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$apps$2f$web$2f$src$2f$components$2f$waitlist$2d$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/d/digi/landing/apps/web/src/components/waitlist-form.tsx [app-ssr] (ecmascript)");
;
;
;
const heroLines = [
    {
        type: "command",
        text: "digi init my-api"
    },
    {
        type: "success",
        text: "Project created — my-api/"
    },
    {
        type: "command",
        text: "digi service add postgres redis"
    },
    {
        type: "success",
        text: "postgres — provisioned in 1.2s"
    },
    {
        type: "success",
        text: "redis — provisioned in 0.8s"
    },
    {
        type: "command",
        text: "digi deploy"
    },
    {
        type: "success",
        text: "Deployed to my-api.digi.run — 3.4s"
    }
];
function HeroSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "8rem 1.5rem 5rem",
            position: "relative"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "absolute",
                    top: "22%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    width: 700,
                    height: 400,
                    background: "radial-gradient(ellipse, rgba(58,125,255,0.12) 0%, transparent 70%)",
                    pointerEvents: "none"
                }
            }, void 0, false, {
                fileName: "[project]/Documents/d/digi/landing/apps/web/src/components/hero-section.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "digi-fade-1",
                style: {
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    background: "rgba(58,125,255,0.10)",
                    border: "1px solid rgba(58,125,255,0.25)",
                    color: "#93b4ff",
                    fontSize: "0.72rem",
                    fontWeight: 500,
                    padding: "0.3rem 0.9rem",
                    borderRadius: 99,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    marginBottom: "2rem"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            width: 6,
                            height: 6,
                            background: "#3A7DFF",
                            borderRadius: "50%",
                            display: "inline-block"
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/d/digi/landing/apps/web/src/components/hero-section.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    "Preview"
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/d/digi/landing/apps/web/src/components/hero-section.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "digi-fade-2",
                style: {
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(2.4rem, 6vw, 4.8rem)",
                    lineHeight: 1.06,
                    letterSpacing: "-0.03em",
                    maxWidth: 800
                },
                children: [
                    "Microservice infra",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/Documents/d/digi/landing/apps/web/src/components/hero-section.tsx",
                        lineNumber: 67,
                        columnNumber: 27
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: "#3A7DFF"
                        },
                        children: "without the overhead."
                    }, void 0, false, {
                        fileName: "[project]/Documents/d/digi/landing/apps/web/src/components/hero-section.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/d/digi/landing/apps/web/src/components/hero-section.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "digi-fade-3",
                style: {
                    marginTop: "1.5rem",
                    fontSize: "clamp(1rem, 2vw, 1.2rem)",
                    color: "rgba(244,244,246,0.55)",
                    fontWeight: 300,
                    maxWidth: 520,
                    lineHeight: 1.7
                },
                children: "Deploy lightweight microservices with ease. Small VMs (1 vCPU, 512MB RAM), managed databases, caching solutions, and application hosting — purpose-built for modern APIs and small-scale services."
            }, void 0, false, {
                fileName: "[project]/Documents/d/digi/landing/apps/web/src/components/hero-section.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "digi-fade-4",
                style: {
                    marginTop: "2.5rem",
                    width: "100%",
                    maxWidth: 600
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$apps$2f$web$2f$src$2f$components$2f$waitlist$2d$form$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WaitlistForm"], {}, void 0, false, {
                    fileName: "[project]/Documents/d/digi/landing/apps/web/src/components/hero-section.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/d/digi/landing/apps/web/src/components/hero-section.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "digi-fade-5",
                style: {
                    marginTop: "4rem",
                    width: "100%",
                    maxWidth: 620,
                    textAlign: "left"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$packages$2f$ui$2f$src$2f$terminal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TerminalWindow"], {
                    lines: heroLines,
                    animated: true,
                    lineDelay: 360,
                    title: "Terminal"
                }, void 0, false, {
                    fileName: "[project]/Documents/d/digi/landing/apps/web/src/components/hero-section.tsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/d/digi/landing/apps/web/src/components/hero-section.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/d/digi/landing/apps/web/src/components/hero-section.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/d/digi/landing/apps/web/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/d/digi/landing/node_modules/.bun/next@15.5.12+bf16f8eded5e12ee/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$apps$2f$web$2f$src$2f$components$2f$hero$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/d/digi/landing/apps/web/src/components/hero-section.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$packages$2f$ui$2f$src$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/d/digi/landing/packages/ui/src/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$packages$2f$ui$2f$src$2f$buttons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/d/digi/landing/packages/ui/src/buttons.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$packages$2f$ui$2f$src$2f$terminal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/d/digi/landing/packages/ui/src/terminal.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const FEATURES = [
    {
        icon: "⚡",
        title: "Instant provisioning",
        desc: "Databases, queues, caches — provisioned in under two seconds. No tickets, no waiting, no toil."
    },
    {
        icon: "🔗",
        title: "Service mesh built-in",
        desc: "Automatic mTLS, service discovery, and load balancing. Your services find each other without DNS hacks."
    },
    {
        icon: "📦",
        title: "Deploy from anywhere",
        desc: "Push from Git, a Dockerfile, or a container registry. digi builds and deploys without a CI pipeline."
    },
    {
        icon: "📈",
        title: "Auto-scaling",
        desc: "Scale to zero overnight, handle traffic spikes at 9am. Pay for what you use — down to the second."
    },
    {
        icon: "🔒",
        title: "Secrets & config",
        desc: "Inject secrets at runtime. Env vars, vault-backed secrets, and per-environment configs out of the box."
    },
    {
        icon: "🌍",
        title: "Regional deployment",
        desc: "Deploy to your preferred region. Choose the location closest to your users for optimal performance."
    }
];
const CONFIG_LINES = [
    [
        {
            kind: "comment",
            text: "# digi.toml — full stack in 20 lines"
        }
    ],
    [],
    [
        {
            kind: "plain",
            text: "["
        },
        {
            kind: "function",
            text: "project"
        },
        {
            kind: "plain",
            text: "]"
        }
    ],
    [
        {
            kind: "keyword",
            text: "name"
        },
        {
            kind: "plain",
            text: "   = "
        },
        {
            kind: "string",
            text: '"my-api"'
        }
    ],
    [
        {
            kind: "keyword",
            text: "region"
        },
        {
            kind: "plain",
            text: " = "
        },
        {
            kind: "string",
            text: '"auto"'
        }
    ],
    [],
    [
        {
            kind: "plain",
            text: "["
        },
        {
            kind: "function",
            text: "services"
        },
        {
            kind: "plain",
            text: "."
        },
        {
            kind: "function",
            text: "api"
        },
        {
            kind: "plain",
            text: "]"
        }
    ],
    [
        {
            kind: "keyword",
            text: "image"
        },
        {
            kind: "plain",
            text: " = "
        },
        {
            kind: "string",
            text: '"./api"'
        }
    ],
    [
        {
            kind: "keyword",
            text: "port"
        },
        {
            kind: "plain",
            text: "  = "
        },
        {
            kind: "number",
            text: "3000"
        }
    ],
    [
        {
            kind: "keyword",
            text: "scale"
        },
        {
            kind: "plain",
            text: " = { min = "
        },
        {
            kind: "number",
            text: "1"
        },
        {
            kind: "plain",
            text: ", max = "
        },
        {
            kind: "number",
            text: "20"
        },
        {
            kind: "plain",
            text: " }"
        }
    ],
    [],
    [
        {
            kind: "plain",
            text: "["
        },
        {
            kind: "function",
            text: "databases"
        },
        {
            kind: "plain",
            text: "."
        },
        {
            kind: "function",
            text: "db"
        },
        {
            kind: "plain",
            text: "]"
        }
    ],
    [
        {
            kind: "keyword",
            text: "type"
        },
        {
            kind: "plain",
            text: "    = "
        },
        {
            kind: "string",
            text: '"postgres"'
        }
    ],
    [
        {
            kind: "keyword",
            text: "version"
        },
        {
            kind: "plain",
            text: " = "
        },
        {
            kind: "string",
            text: '"16"'
        }
    ],
    [],
    [
        {
            kind: "plain",
            text: "["
        },
        {
            kind: "function",
            text: "caches"
        },
        {
            kind: "plain",
            text: "."
        },
        {
            kind: "function",
            text: "cache"
        },
        {
            kind: "plain",
            text: "]"
        }
    ],
    [
        {
            kind: "keyword",
            text: "type"
        },
        {
            kind: "plain",
            text: " = "
        },
        {
            kind: "string",
            text: '"redis"'
        }
    ]
];
const CONFIG_CHECKS = [
    "Git-tracked infrastructure",
    "Per-branch preview environments",
    "Zero-downtime rollouts",
    "Instant rollback with one command"
];
const PLANS = [
    {
        name: "Hobby",
        desc: "Perfect for side projects and experiments.",
        price: "Free",
        per: "/ mo",
        features: [
            "3 services",
            "512 MB RAM each",
            "Shared databases",
            "Community support"
        ],
        cta: "Start free",
        featured: false
    },
    {
        name: "Pro",
        desc: "For teams shipping production workloads.",
        price: "£15",
        per: " / mo + usage",
        features: [
            "Unlimited services",
            "Auto-scaling",
            "Dedicated databases",
            "Preview environments",
            "Priority support"
        ],
        cta: "Get started",
        featured: true
    },
    {
        name: "Enterprise",
        desc: "Custom contracts, compliance, and SLAs.",
        price: "Custom",
        per: null,
        features: [
            "Private clusters",
            "SOC 2 Type II",
            "SSO / SAML",
            "Dedicated SRE",
            "Custom MSA"
        ],
        cta: "Contact sales",
        featured: false
    }
];
function SectionHeader({ label, title, desc, center = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            textAlign: center ? "center" : "left"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    fontSize: "0.72rem",
                    fontWeight: 500,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#3A7DFF",
                    marginBottom: "0.75rem"
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/Documents/d/digi/landing/apps/web/src/app/page.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: {
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                    letterSpacing: "-0.025em",
                    lineHeight: 1.15,
                    marginBottom: "1rem"
                },
                children: title
            }, void 0, false, {
                fileName: "[project]/Documents/d/digi/landing/apps/web/src/app/page.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            desc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: "rgba(244,244,246,0.55)",
                    fontSize: "1.05rem",
                    fontWeight: 300,
                    maxWidth: 520,
                    lineHeight: 1.75,
                    margin: center ? "0 auto" : undefined
                },
                children: desc
            }, void 0, false, {
                fileName: "[project]/Documents/d/digi/landing/apps/web/src/app/page.tsx",
                lineNumber: 91,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/d/digi/landing/apps/web/src/app/page.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
function HomePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "digi-noise"
            }, void 0, false, {
                fileName: "[project]/Documents/d/digi/landing/apps/web/src/app/page.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$apps$2f$web$2f$src$2f$components$2f$hero$2d$section$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HeroSection"], {}, void 0, false, {
                        fileName: "[project]/Documents/d/digi/landing/apps/web/src/app/page.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "features",
                        style: {
                            padding: "6rem 1.5rem"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                maxWidth: 1100,
                                margin: "0 auto"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                                    label: "Platform",
                                    title: "Everything your services need.",
                                    desc: "From a single API to hundreds of microservices — digi gives you the primitives to build without limits."
                                }, void 0, false, {
                                    fileName: "[project]/Documents/d/digi/landing/apps/web/src/app/page.tsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "grid",
                                        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                                        gap: "1.25px",
                                        marginTop: "4rem",
                                        background: "rgba(255,255,255,0.06)",
                                        border: "1px solid rgba(255,255,255,0.06)",
                                        borderRadius: 14,
                                        overflow: "hidden"
                                    },
                                    children: FEATURES.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "digi-feature-card",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        width: 40,
                                                        height: 40,
                                                        background: "rgba(58,125,255,0.10)",
                                                        border: "1px solid rgba(58,125,255,0.20)",
                                                        borderRadius: 10,
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        marginBottom: "1.25rem",
                                                        fontSize: "1.1rem"
                                                    },
                                                    children: f.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/d/digi/landing/apps/web/src/app/page.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontFamily: "'DM Sans',sans-serif",
                                                        fontWeight: 600,
                                                        fontSize: "1.05rem",
                                                        letterSpacing: "-0.01em",
                                                        marginBottom: "0.5rem"
                                                    },
                                                    children: f.title
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/d/digi/landing/apps/web/src/app/page.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        color: "rgba(244,244,246,0.55)",
                                                        fontSize: "0.9rem",
                                                        fontWeight: 300,
                                                        lineHeight: 1.7
                                                    },
                                                    children: f.desc
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/d/digi/landing/apps/web/src/app/page.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, f.title, true, {
                                            fileName: "[project]/Documents/d/digi/landing/apps/web/src/app/page.tsx",
                                            lineNumber: 126,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/d/digi/landing/apps/web/src/app/page.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/d/digi/landing/apps/web/src/app/page.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/d/digi/landing/apps/web/src/app/page.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "deploy",
                        style: {
                            padding: "6rem 1.5rem",
                            background: "#18181b",
                            borderTop: "1px solid rgba(255,255,255,0.05)",
                            borderBottom: "1px solid rgba(255,255,255,0.05)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                maxWidth: 1100,
                                margin: "0 auto"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "grid",
                                    gridTemplateColumns: "1fr 1fr",
                                    gap: "5rem",
                                    alignItems: "center"
                                },
                                className: "grid lg:grid-cols-2 grid-cols-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                                                label: "Configuration",
                                                title: "One file. Infinite services.",
                                                desc: ""
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/d/digi/landing/apps/web/src/app/page.tsx",
                                                lineNumber: 161,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    color: "rgba(244,244,246,0.55)",
                                                    fontSize: "1.05rem",
                                                    fontWeight: 300,
                                                    maxWidth: 520,
                                                    lineHeight: 1.75,
                                                    marginBottom: "2rem"
                                                },
                                                children: [
                                                    "Describe your entire infrastructure in a single",
                                                    " ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                                        style: {
                                                            fontFamily: "'DM Mono',monospace",
                                                            fontSize: "0.9em",
                                                            color: "#93b4ff"
                                                        },
                                                        children: "digi.toml"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/d/digi/landing/apps/web/src/app/page.tsx",
                                                        lineNumber: 168,
                                                        columnNumber: 19
                                                    }, this),
                                                    ".",
                                                    " ",
                                                    "Services, databases, queues, and routing — all versioned alongside your code."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/d/digi/landing/apps/web/src/app/page.tsx",
                                                lineNumber: 166,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: "0.9rem"
                                                },
                                                children: CONFIG_CHECKS.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        style: {
                                                            display: "flex",
                                                            alignItems: "center",
                                                            gap: "0.75rem",
                                                            color: "rgba(244,244,246,0.55)",
                                                            fontSize: "0.9rem",
                                                            fontWeight: 300
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    color: "#3A7DFF",
                                                                    fontSize: "0.8rem",
                                                                    flexShrink: 0
                                                                },
                                                                children: "✓"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Documents/d/digi/landing/apps/web/src/app/page.tsx",
                                                                lineNumber: 174,
                                                                columnNumber: 23
                                                            }, this),
                                                            c
                                                        ]
                                                    }, c, true, {
                                                        fileName: "[project]/Documents/d/digi/landing/apps/web/src/app/page.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/d/digi/landing/apps/web/src/app/page.tsx",
                                                lineNumber: 171,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/d/digi/landing/apps/web/src/app/page.tsx",
                                        lineNumber: 160,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$packages$2f$ui$2f$src$2f$terminal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CodeBlock"], {
                                        lines: CONFIG_LINES,
                                        filename: "digi.toml",
                                        language: "toml"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/d/digi/landing/apps/web/src/app/page.tsx",
                                        lineNumber: 180,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/d/digi/landing/apps/web/src/app/page.tsx",
                                lineNumber: 159,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/d/digi/landing/apps/web/src/app/page.tsx",
                            lineNumber: 158,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/d/digi/landing/apps/web/src/app/page.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        id: "pricing",
                        style: {
                            padding: "6rem 1.5rem",
                            background: "#18181b",
                            borderTop: "1px solid rgba(255,255,255,0.05)",
                            borderBottom: "1px solid rgba(255,255,255,0.05)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                maxWidth: 1100,
                                margin: "0 auto",
                                textAlign: "center"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionHeader, {
                                    center: true,
                                    label: "Pricing",
                                    title: "Pay for what you run.",
                                    desc: "No seat licenses. No hidden fees. Usage-based pricing that scales with you."
                                }, void 0, false, {
                                    fileName: "[project]/Documents/d/digi/landing/apps/web/src/app/page.tsx",
                                    lineNumber: 194,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "grid",
                                        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                                        gap: "1.25px",
                                        marginTop: "3.5rem",
                                        background: "rgba(255,255,255,0.06)",
                                        border: "1px solid rgba(255,255,255,0.06)",
                                        borderRadius: 14,
                                        overflow: "hidden"
                                    },
                                    children: PLANS.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                background: p.featured ? "linear-gradient(160deg, rgba(58,125,255,0.08), rgba(58,125,255,0.02))" : "#1E1E23",
                                                padding: "2.5rem 2rem",
                                                textAlign: "left"
                                            },
                                            children: [
                                                p.featured && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        display: "inline-block",
                                                        background: "#3A7DFF",
                                                        color: "#fff",
                                                        fontSize: "0.65rem",
                                                        fontWeight: 600,
                                                        letterSpacing: "0.08em",
                                                        textTransform: "uppercase",
                                                        padding: "0.2rem 0.6rem",
                                                        borderRadius: 4,
                                                        marginBottom: "1.5rem"
                                                    },
                                                    children: "Most popular"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/d/digi/landing/apps/web/src/app/page.tsx",
                                                    lineNumber: 219,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontFamily: "'DM Sans',sans-serif",
                                                        fontWeight: 600,
                                                        fontSize: "1.1rem",
                                                        letterSpacing: "-0.01em",
                                                        marginBottom: "0.25rem"
                                                    },
                                                    children: p.name
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/d/digi/landing/apps/web/src/app/page.tsx",
                                                    lineNumber: 232,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        color: "rgba(244,244,246,0.55)",
                                                        fontSize: "0.85rem",
                                                        fontWeight: 300,
                                                        marginBottom: "2rem"
                                                    },
                                                    children: p.desc
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/d/digi/landing/apps/web/src/app/page.tsx",
                                                    lineNumber: 233,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        fontFamily: "'DM Sans',sans-serif",
                                                        fontWeight: 700,
                                                        fontSize: "2.75rem",
                                                        letterSpacing: "-0.04em",
                                                        lineHeight: 1
                                                    },
                                                    children: [
                                                        p.price,
                                                        p.per && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontSize: "0.9rem",
                                                                color: "rgba(244,244,246,0.55)",
                                                                fontWeight: 300
                                                            },
                                                            children: [
                                                                " ",
                                                                p.per
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Documents/d/digi/landing/apps/web/src/app/page.tsx",
                                                            lineNumber: 236,
                                                            columnNumber: 31
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Documents/d/digi/landing/apps/web/src/app/page.tsx",
                                                    lineNumber: 234,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        marginTop: "2rem",
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        gap: "0.75rem"
                                                    },
                                                    children: p.features.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                display: "flex",
                                                                alignItems: "center",
                                                                gap: "0.6rem",
                                                                fontSize: "0.875rem",
                                                                color: "rgba(244,244,246,0.55)"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        color: "#3A7DFF",
                                                                        fontSize: "0.8rem",
                                                                        flexShrink: 0
                                                                    },
                                                                    children: "✓"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Documents/d/digi/landing/apps/web/src/app/page.tsx",
                                                                    lineNumber: 241,
                                                                    columnNumber: 25
                                                                }, this),
                                                                f
                                                            ]
                                                        }, f, true, {
                                                            fileName: "[project]/Documents/d/digi/landing/apps/web/src/app/page.tsx",
                                                            lineNumber: 240,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/d/digi/landing/apps/web/src/app/page.tsx",
                                                    lineNumber: 238,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        marginTop: "2rem"
                                                    },
                                                    children: p.featured ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$packages$2f$ui$2f$src$2f$buttons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BtnPrimary"], {
                                                        large: true,
                                                        style: {
                                                            display: "flex",
                                                            width: "100%",
                                                            padding: "0.7rem"
                                                        },
                                                        children: p.cta
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/d/digi/landing/apps/web/src/app/page.tsx",
                                                        lineNumber: 248,
                                                        columnNumber: 25
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$packages$2f$ui$2f$src$2f$buttons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BtnOutline"], {
                                                        large: true,
                                                        block: true,
                                                        style: {
                                                            padding: "0.7rem"
                                                        },
                                                        children: p.cta
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/d/digi/landing/apps/web/src/app/page.tsx",
                                                        lineNumber: 249,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/d/digi/landing/apps/web/src/app/page.tsx",
                                                    lineNumber: 246,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, p.name, true, {
                                            fileName: "[project]/Documents/d/digi/landing/apps/web/src/app/page.tsx",
                                            lineNumber: 211,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/d/digi/landing/apps/web/src/app/page.tsx",
                                    lineNumber: 200,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/d/digi/landing/apps/web/src/app/page.tsx",
                            lineNumber: 193,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/d/digi/landing/apps/web/src/app/page.tsx",
                        lineNumber: 187,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        style: {
                            padding: "7rem 1.5rem",
                            textAlign: "center",
                            position: "relative",
                            overflow: "hidden"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    bottom: 0,
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    width: 600,
                                    height: 300,
                                    background: "radial-gradient(ellipse, rgba(58,125,255,0.10) 0%, transparent 70%)",
                                    pointerEvents: "none"
                                }
                            }, void 0, false, {
                                fileName: "[project]/Documents/d/digi/landing/apps/web/src/app/page.tsx",
                                lineNumber: 260,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontFamily: "'DM Sans',sans-serif",
                                    fontWeight: 700,
                                    fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                                    letterSpacing: "-0.03em",
                                    lineHeight: 1.1,
                                    maxWidth: 600,
                                    margin: "0 auto 1.5rem"
                                },
                                children: [
                                    "Ship your first service in",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Documents/d/digi/landing/apps/web/src/app/page.tsx",
                                        lineNumber: 279,
                                        columnNumber: 39
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: "#3A7DFF"
                                        },
                                        children: "under five minutes."
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/d/digi/landing/apps/web/src/app/page.tsx",
                                        lineNumber: 280,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/d/digi/landing/apps/web/src/app/page.tsx",
                                lineNumber: 270,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: "rgba(244,244,246,0.55)",
                                    fontSize: "1rem",
                                    fontWeight: 300,
                                    marginBottom: "2.5rem"
                                },
                                children: "No credit card required. Cancel anytime."
                            }, void 0, false, {
                                fileName: "[project]/Documents/d/digi/landing/apps/web/src/app/page.tsx",
                                lineNumber: 282,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "center",
                                    gap: "1rem",
                                    flexWrap: "wrap"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$packages$2f$ui$2f$src$2f$buttons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BtnPrimary"], {
                                        large: true,
                                        children: "Start building for free"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/d/digi/landing/apps/web/src/app/page.tsx",
                                        lineNumber: 286,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$packages$2f$ui$2f$src$2f$buttons$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BtnOutline"], {
                                        large: true,
                                        children: "Talk to us"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/d/digi/landing/apps/web/src/app/page.tsx",
                                        lineNumber: 287,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/d/digi/landing/apps/web/src/app/page.tsx",
                                lineNumber: 285,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/d/digi/landing/apps/web/src/app/page.tsx",
                        lineNumber: 259,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                        style: {
                            borderTop: "1px solid rgba(255,255,255,0.06)",
                            padding: "3rem 1.5rem"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                maxWidth: 1100,
                                margin: "0 auto",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                flexWrap: "wrap",
                                gap: "1.5rem"
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
                                                width: 22,
                                                height: 22,
                                                opacity: 0.5
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/d/digi/landing/apps/web/src/app/page.tsx",
                                            lineNumber: 303,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontFamily: "'DM Sans',sans-serif",
                                                fontSize: "1.1rem",
                                                color: "rgba(244,244,246,0.55)"
                                            },
                                            children: "digi"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/d/digi/landing/apps/web/src/app/page.tsx",
                                            lineNumber: 308,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/d/digi/landing/apps/web/src/app/page.tsx",
                                    lineNumber: 302,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: "flex",
                                        gap: "1.75rem",
                                        flexWrap: "wrap"
                                    },
                                    children: [
                                        "Docs",
                                        "Status",
                                        "Blog",
                                        "Privacy",
                                        "Terms"
                                    ].map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            style: {
                                                color: "#5A5D67",
                                                fontSize: "0.8rem",
                                                textDecoration: "none",
                                                transition: "color 0.2s"
                                            },
                                            onMouseEnter: (e)=>e.currentTarget.style.color = "rgba(244,244,246,0.55)",
                                            onMouseLeave: (e)=>e.currentTarget.style.color = "#5A5D67",
                                            children: l
                                        }, l, false, {
                                            fileName: "[project]/Documents/d/digi/landing/apps/web/src/app/page.tsx",
                                            lineNumber: 312,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/d/digi/landing/apps/web/src/app/page.tsx",
                                    lineNumber: 310,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$d$2f$digi$2f$landing$2f$node_modules$2f2e$bun$2f$next$40$15$2e$5$2e$12$2b$bf16f8eded5e12ee$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: "#5A5D67",
                                        fontSize: "0.75rem"
                                    },
                                    children: "© 2026 digi. All rights reserved."
                                }, void 0, false, {
                                    fileName: "[project]/Documents/d/digi/landing/apps/web/src/app/page.tsx",
                                    lineNumber: 328,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/d/digi/landing/apps/web/src/app/page.tsx",
                            lineNumber: 293,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/d/digi/landing/apps/web/src/app/page.tsx",
                        lineNumber: 292,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/d/digi/landing/apps/web/src/app/page.tsx",
                lineNumber: 103,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=Documents_d_digi_landing_apps_web_src_6d1f6b7f._.js.map